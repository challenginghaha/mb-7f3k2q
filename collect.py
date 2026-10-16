"""아침 브리핑 수집기.

config.json 에 적힌 RSS 를 읽어 data/날짜.json 과 data/data.js 를 만듭니다.
외부 패키지 없이 파이썬 기본 기능만 씁니다. (나중에 AI 요약을 붙이려면 summarize() 자리를 쓰세요.)
"""
import hashlib
import html
import json
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

ROOT = Path(__file__).parent
DATA = ROOT / "data"
KST = timezone(timedelta(hours=9))
UA = "Mozilla/5.0 (compatible; MorningBriefing/1.0)"

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass


def fetch(url, tries=3, delay=2):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for n in range(tries):
        try:
            with urllib.request.urlopen(req, timeout=20) as r:
                return r.read()
        except Exception:
            if n == tries - 1:
                raise
            time.sleep(delay)


def local(tag):
    return tag.rsplit("}", 1)[-1]


def clean(text, limit):
    text = html.unescape(re.sub(r"<[^>]+>", " ", text or ""))
    text = re.sub(r"https?://\S+", " ", text)  # 영상 설명의 긴 주소 제거
    text = re.sub(r"\s+", " ", text).strip()
    return text if len(text) <= limit else text[:limit].rstrip() + "…"


def parse_date(s, default_tz):
    if not s:
        return None
    s = s.strip()
    try:
        d = parsedate_to_datetime(s)
    except Exception:
        try:
            d = datetime.fromisoformat(s.replace("Z", "+00:00"))
        except Exception:
            return None
    if d.tzinfo is None:
        d = d.replace(tzinfo=default_tz)
    return d


def parse_feed(data, default_tz, preview_chars):
    root = ET.fromstring(data)
    items = []
    for el in root.iter():
        if local(el.tag) not in ("item", "entry"):
            continue
        f = {}
        for ch in el.iter():
            n = local(ch.tag)
            if ch is el:
                continue
            if n == "link":
                href = ch.attrib.get("href")
                if href:
                    if ch.attrib.get("rel", "alternate") == "alternate" and "link" not in f:
                        f["link"] = href
                elif ch.text and "link" not in f:
                    f["link"] = ch.text.strip()
            elif n in ("title", "description", "summary", "content", "encoded") and n not in f:
                f[n] = ch.text or ""
            elif n in ("pubDate", "published", "updated", "date") and "date" not in f:
                f["date"] = ch.text
        if not f.get("link") or not f.get("title"):
            continue
        body = f.get("description") or f.get("summary") or f.get("content") or f.get("encoded") or ""
        if "Comments URL:" in body:  # Hacker News 는 본문이 없고 링크 정보만 있음
            body = ""
        items.append({
            "title": clean(f["title"], 200),
            "link": f["link"],
            "published": parse_date(f.get("date"), default_tz),
            "preview": clean(body, preview_chars),
        })
    return items


def matches(text, keywords):
    for kw in keywords:
        if re.fullmatch(r"[A-Za-z0-9 ]+", kw):
            if re.search(r"\b" + re.escape(kw) + r"\b", text, re.I):
                return True
        elif kw.lower() in text.lower():
            return True
    return False


STOP = set("the a an of to in for on and or is are with at by from as it its this that how why what new says say you your we our be can will".split())
PARTICLES = re.compile(r"(에서|으로|은|는|이|가|을|를|의|에|도|로|과|와)$")


def tokens(title):
    t = re.sub(r"\[[^\]]*\]|\([^)]*\)|【[^】]*】", " ", title)
    out = set()
    for w in re.findall(r"[0-9A-Za-z가-힣぀-ヿ一-鿿]+", t.lower()):
        if re.search("[가-힣]", w) and len(w) > 2:
            w = PARTICLES.sub("", w)
        if len(w) >= 2 and w not in STOP:
            out.add(w)
    return out


def cluster(cands, threshold):
    """같은 사건으로 보이는 기사를 묶는다. 대표 = 가장 먼저 나온 기사(같으면 소스 우선순위)."""
    cands = sorted(cands, key=lambda c: (c["published"], c["rank"]))
    groups = []
    for c in cands:
        tk = tokens(c["title"])
        for g in groups:
            inter = len(tk & g["tokens"])
            if inter >= 2 and inter / max(1, min(len(tk), len(g["tokens"]))) >= threshold:
                g["also"].append(c)
                g["tokens"] |= tk
                break
        else:
            groups.append({"rep": c, "tokens": set(tk), "also": []})
    return groups


def select(groups, box):
    """그룹(국내/해외)별 개수를 지키면서 소스를 번갈아 고른다."""
    limit, cap = box["limit"], box.get("per_source_max", 2)
    picked, used = [], {}
    by_group = {}
    for g in sorted(groups, key=lambda g: g["rep"]["published"], reverse=True):
        by_group.setdefault(g["rep"]["group"], []).append(g)

    def take(pool, quota):
        got = 0
        while got < quota and len(picked) < limit:
            progressed = False
            seen_sources = set()
            for g in list(pool):
                s = g["rep"]["source"]
                if s in seen_sources or used.get(s, 0) >= cap:
                    continue
                picked.append(g)
                pool.remove(g)
                used[s] = used.get(s, 0) + 1
                seen_sources.add(s)
                got += 1
                progressed = True
                if got >= quota or len(picked) >= limit:
                    break
            if not progressed:
                break

    for grp, quota in box["quotas"].items():
        take(by_group.get(grp, []), quota)
    leftovers = [g for pool in by_group.values() for g in pool]
    take(sorted(leftovers, key=lambda g: g["rep"]["published"], reverse=True), limit - len(picked))
    return sorted(picked, key=lambda g: g["rep"]["published"], reverse=True)


TRANSLATE_BUDGET = 4500  # MyMemory 무료 한도(하루 약 5,000자)를 넘지 않도록


def mymemory(text):
    """무료 번역(MyMemory). 실패하거나 한도를 넘으면 None."""
    url = "https://api.mymemory.translated.net/get?langpair=en|ko&q=" + urllib.parse.quote(text)
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=15) as r:
            d = json.loads(r.read().decode("utf-8"))
        out = d.get("responseData", {}).get("translatedText", "")
        if d.get("responseStatus") != 200 or not out or "MYMEMORY WARNING" in out.upper():
            return None
        return out if out.strip() != text.strip() else None
    except Exception:
        return None


def translate_items(boxes):
    """영문 기사의 제목(먼저)과 미리보기(남는 한도 안에서)를 한국어로. 한 번 번역한 건 저장해 재사용."""
    path = DATA / "translations.json"
    try:
        cache = json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        cache = {}
    budget, stop = TRANSLATE_BUDGET, False

    def tr(text):
        nonlocal budget, stop
        if text in cache:
            return cache[text]
        if stop or not text or len(text) > budget:
            return None
        budget -= len(text)
        out = mymemory(text)
        time.sleep(0.3)
        if out is None:
            stop = True  # 한도 초과·오류면 이번 실행에서는 더 시도하지 않음
            return None
        cache[text] = out
        return out

    items = [it for b in boxes for it in b["items"] if it["lang"] != "ko"]
    for it in items:
        ko = tr(it["title"])
        if ko:
            it["title_ko"] = ko
    for it in items:
        if it["preview"]:
            ko = tr(it["preview"])
            if ko:
                it["preview_ko"] = ko
    for it in items:  # 이미 저장된 번역이 있으면 항상 반영
        if "title_ko" not in it and it["title"] in cache:
            it["title_ko"] = cache[it["title"]]
    keep = dict(list(cache.items())[-3000:])
    DATA.mkdir(exist_ok=True)
    path.write_text(json.dumps(keep, ensure_ascii=False), encoding="utf-8")
    print(f"번역: 제목 {sum('title_ko' in i for i in items)}/{len(items)}, 미리보기 {sum('preview_ko' in i for i in items)}")


def strip_outlet(title):
    """구글 뉴스 제목 끝의 ' - 언론사' 를 떼어 낸다."""
    for _ in range(3):
        n = re.sub(r"\s+-\s+[^-]{1,20}$", "", title)
        if n == title:
            break
        title = n
    return title


def summarize(item):
    """나중에 AI 요약을 붙일 자리. 지금은 아무것도 하지 않습니다."""
    return item


def fetch_feed(src, tz, preview_chars):
    """RSS 를 가져온다. 유튜브 RSS 는 가끔 이유 없이 404 를 돌려주므로 여러 번 다시 시도한다."""
    is_youtube = "youtube.com/feeds" in src["url"]
    return parse_feed(fetch(src["url"], tries=10 if is_youtube else 3, delay=1.5 if is_youtube else 2),
                      tz, preview_chars)


def main():
    cfg = json.loads((ROOT / "config.json").read_text(encoding="utf-8-sig"))
    st = cfg["settings"]
    now = datetime.now(KST)
    cache_path = DATA / "source_cache.json"
    try:
        src_cache = json.loads(cache_path.read_text(encoding="utf-8"))
    except Exception:
        src_cache = {}
    today = now.strftime("%Y-%m-%d")
    used_links, boxes_out, problems = set(), [], []

    for box in cfg["boxes"]:
        cutoff = now - timedelta(days=box["max_age_days"])
        cands = []
        for rank, src in enumerate(box["sources"]):
            if src.get("enabled", True) is False:
                continue
            tz = KST if src["group"] == "kr" else timezone.utc
            try:
                feed = fetch_feed(src, tz, st["preview_chars"])
                src_cache[src["url"]] = [
                    {**it, "published": it["published"].isoformat() if it["published"] else None} for it in feed[:40]]
            except Exception as e:
                saved = src_cache.get(src["url"])
                if not saved:
                    problems.append(f'{box["title"]} / {src["name"]}: {type(e).__name__} {str(e)[:60]}')
                    print("  [실패]", box["title"], src["name"], type(e).__name__)
                    continue
                # 접속이 막혔을 땐 마지막으로 받아 둔 목록을 대신 사용
                feed = [{**it, "published": datetime.fromisoformat(it["published"]) if it["published"] else None}
                        for it in saved]
                problems.append(f'{box["title"]} / {src["name"]}: 접속 실패 → 저장해 둔 목록 사용')
                print("  [저장본]", box["title"], src["name"])
            if src.get("google_news"):
                for it in feed:
                    it["title"] = strip_outlet(it["title"])
                    it["preview"] = ""  # 구글 뉴스 설명은 제목 반복이라 비움
            n = 0
            for it in feed:
                pub = it["published"] or now
                if pub < cutoff or pub > now + timedelta(hours=1):
                    continue
                if src.get("filter") and not matches(it["title"] + " " + it["preview"], box["keywords"]):
                    continue
                if it["link"] in used_links:
                    continue
                cands.append({**it, "published": pub, "source": src["name"], "group": src["group"],
                              "lang": src["lang"], "kind": src.get("kind", "article"), "rank": rank})
                n += 1
            print(f'  [성공] {box["title"]} / {src["name"]}: 후보 {n}개')

        chosen = select(cluster(cands, st["dedup_threshold"]), box)
        items = []
        for g in chosen:
            r = g["rep"]
            used_links.add(r["link"])
            items.append(summarize({
                "id": hashlib.sha1(r["link"].encode()).hexdigest()[:12],
                "title": r["title"], "link": r["link"], "source": r["source"], "lang": r["lang"],
                "kind": r["kind"], "published": r["published"].astimezone(KST).isoformat(timespec="minutes"),
                "preview": r["preview"],
                "also": [{"source": a["source"], "title": a["title"], "link": a["link"]} for a in g["also"]],
            }))
        boxes_out.append({"id": box["id"], "title": box["title"], "items": items})

    translate_items(boxes_out)
    DATA.mkdir(exist_ok=True)
    cache_path.write_text(json.dumps(src_cache, ensure_ascii=False), encoding="utf-8")
    day ={"date": today, "generated": now.isoformat(timespec="minutes"), "boxes": boxes_out, "problems": problems}
    (DATA / f"{today}.json").write_text(json.dumps(day, ensure_ascii=False, indent=1), encoding="utf-8")

    files = sorted(DATA.glob("20??-??-??.json"), reverse=True)
    for old in files[st["keep_days"]:]:
        old.unlink()
    days = {}
    for p in files[:st["keep_days"]]:
        days[p.stem] = json.loads(p.read_text(encoding="utf-8"))
    bundle = {"dates": list(days), "days": days}
    (DATA / "data.js").write_text("window.BRIEFING = " + json.dumps(bundle, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"완료: {today} / 칸별 개수 " + ", ".join(f'{b["title"]} {len(b["items"])}' for b in boxes_out))


if __name__ == "__main__":
    main()
