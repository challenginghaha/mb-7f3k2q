/* 영어·일본어 학습 칸. 내용은 study/english.js, study/japanese.js 에 있습니다.
   저장(브라우저): study_marks(외웠어요/모르겠어요), study_wrong(틀린 항목), study_prefs(설정) */
(function () {
  const LANGS = {
    en: { name: "영어", data: () => window.STUDY_EN, speech: "en-US" },
    ja: { name: "일본어", data: () => window.STUDY_JA, speech: "ja-JP" }
  };
  const TABS = [["words", "단어"], ["sentences", "문장"], ["expressions", "표현"], ["review", "복습"], ["quiz", "퀴즈"]];
  const TYPE_LABEL = { words: "단어", sentences: "문장", expressions: "표현" };

  function load(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  let marks = load("study_marks", {});
  let wrong = load("study_wrong", {});
  let prefs = load("study_prefs", { mask: false, slow: false, furi: true });
  const ui = { en: { tab: "words", date: null, el: null, quiz: null, tip: false },
               ja: { tab: "words", date: null, el: null, quiz: null, tip: false } };

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const plain = s => String(s).replace(/\{([^|{}]+)\|[^{}]+\}/g, "$1");
  function rich(s) {
    const e = esc(s);
    return prefs.furi ? e.replace(/\{([^|{}]+)\|([^{}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>")
                      : e.replace(/\{([^|{}]+)\|[^{}]+\}/g, "$1");
  }
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // ---- 내용 찾기 ----
  function dates(lang) { const d = LANGS[lang].data(); return d ? Object.keys(d.days).sort() : []; }
  function dayFor(lang, date) {
    const d = LANGS[lang].data(); if (!d) return null;
    if (d.days[date]) return { key: date, day: d.days[date], repeated: false };
    const wd = s => new Date(s + "T00:00:00Z").getUTCDay();
    const ks = dates(lang); if (!ks.length) return null;
    const same = ks.filter(k => wd(k) === wd(date));
    const k = (same.length ? same : ks)[(same.length ? same : ks).length - 1];
    return { key: k, day: d.days[k], repeated: true };
  }
  function itemsOf(lang) {
    const d = LANGS[lang].data(), out = {};
    if (!d) return out;
    Object.keys(d.days).forEach(k => ["words", "sentences", "expressions"].forEach(t =>
      (d.days[k][t] || []).forEach((it, i) => { out[`${lang}:${k}:${t}:${i}`] = { it, id: `${lang}:${k}:${t}:${i}`, type: t, key: k }; })));
    return out;
  }
  function shiftDate(s, n) { const d = new Date(s + "T00:00:00Z"); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }

  // ---- 복습 목록 ----
  function reviewList(lang, r) {
    const all = itemsOf(lang), out = [], seen = new Set();
    const add = o => { if (o && !seen.has(o.id)) { seen.add(o.id); out.push(o); } };
    const order = o => (wrong[o.id] ? 0 : marks[o.id] === "u" ? 1 : marks[o.id] === "k" ? 3 : 2);
    if (!r.repeated) {
      [[1, "어제"], [3, "3일 전"], [7, "일주일 전"]].forEach(([n, label]) => {
        const k = shiftDate(r.key, -n);
        const pool = Object.values(all).filter(o => o.key === k && o.type === "words").sort((a, b) => order(a) - order(b));
        pool.slice(0, 3).forEach(o => { o.from = label; add(o); });
      });
    }
    Object.values(all).filter(o => wrong[o.id]).forEach(o => { o.from = "틀린 항목"; add(o); });
    Object.values(all).filter(o => marks[o.id] === "u").slice(0, 6).forEach(o => { o.from = "모르겠어요"; add(o); });
    return out;
  }

  // ---- 음성 ----
  function speak(text, lang) {
    try {
      if (!window.speechSynthesis) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(plain(text));
      u.lang = LANGS[lang].speech; u.rate = prefs.slow ? 0.65 : 1;
      speechSynthesis.speak(u);
    } catch (e) {}
  }

  // ---- 카드 ----
  function card(o, lang) {
    const it = o.it, m = marks[o.id] || "", ja = lang === "ja";
    const txt = ja ? rich(it.t) : esc(it.t);
    const lines = [];
    if (it.f) lines.push(`<div><b>형태</b> ${ja ? rich(it.f) : esc(it.f)}</div>`);
    if (it.c) lines.push(`<div><b>짝꿍</b> ${esc(it.c)}</div>`);
    if (it.o) lines.push(`<div class="ok">✅ ${ja ? rich(it.o) : esc(it.o)}${it.ok ? ` <span style="color:var(--sub);font-size:12.5px">→ ${esc(it.ok)}</span>` : ""}</div>`);
    if (it.n) lines.push(`<div class="ng">❌ ${ja ? rich(it.n) : esc(it.n)}</div>`);
    if (it.a) lines.push(`<div><b>바꿔 쓰기</b> ${rich(it.a)}</div>`);
    const fm = lines.length
      ? `<div class="fm"><button class="rv" data-st="reveal">패턴 보기</button><div class="fb">${lines.join("")}</div></div>` : "";
    return `<div class="si ${m === "k" ? "known" : m === "u" ? "unk" : ""}" data-id="${esc(o.id)}">
      <div class="si-top"><span class="si-t">${txt}</span>
        <button class="play" data-st="play" title="듣기">🔊</button></div>
      <div class="si-k">${esc(it.k)}${it.g ? ` <span class="tag">${esc(it.g)}</span>` : ""}${it.q ? ` <span class="tag warn">확인 필요</span>` : ""}</div>
      ${it.u ? `<div class="si-u">${esc(it.u)}</div>` : ""}
      ${it.r ? `<div class="si-r">📖 ${rich(it.r)}</div>` : ""}
      ${fm}
      <div class="si-acts">
        <button data-st="mark" data-v="k" class="${m === "k" ? "on" : ""}">외웠어요</button>
        <button data-st="mark" data-v="u" class="${m === "u" ? "on" : ""}">모르겠어요</button>
        ${o.from ? `<span class="from">${esc(o.from)}</span>` : ""}
      </div></div>`;
  }

  // ---- 퀴즈 ----
  function buildQuiz(lang, r) {
    const all = itemsOf(lang), today = Object.values(all).filter(o => o.key === r.key);
    const allText = Object.values(all);
    const qs = [];
    const mk = (o, kind) => {
      const it = o.it;
      if (kind === "form" && it.o && it.n) {
        return { id: o.id, kind, title: "어느 쪽이 맞을까요?", prompt: `「${plain(it.t)}」 ${it.k}`,
          opts: shuffle([{ t: it.o, ok: true }, { t: it.n, ok: false }]), why: it.f };
      }
      if (kind === "blank" && it.b && plain(it.t).includes(it.b)) {
        const wrongs = shuffle(allText.filter(x => x.id !== o.id && x.it.b && x.it.b !== it.b && x.type !== "words")).slice(0, 3).map(x => x.it.b);
        if (wrongs.length < 2) return null;
        return { id: o.id, kind, title: "빈칸에 들어갈 말은?", prompt: plain(it.t).replace(it.b, "＿＿＿"), sub: it.k,
          opts: shuffle([{ t: it.b, ok: true }, ...wrongs.map(t => ({ t, ok: false }))]), why: it.f };
      }
      if (kind === "pick" && it.ng) {
        return { id: o.id, kind, title: "맞는 문장을 고르세요", prompt: it.k,
          opts: shuffle([{ t: it.t, ok: true }, { t: it.ng, ok: false }]), why: it.f };
      }
      return null;
    };
    const pool = shuffle(today.concat(Object.values(all).filter(o => wrong[o.id] && o.key !== r.key)));
    pool.forEach(o => {
      const kinds = o.type === "words" ? ["form"] : shuffle(["blank", "pick"]);
      for (const k of kinds) { const q = mk(o, k); if (q) { qs.push(q); break; } }
    });
    return { qs: shuffle(qs).slice(0, 8), i: 0, score: 0, picked: null, done: false };
  }

  // ---- 그리기 ----
  function draw(lang) {
    const u = ui[lang], el = u.el; if (!el) return;
    const L = LANGS[lang], r = dayFor(lang, u.date);
    if (!r) { el.innerHTML = `<div class="todo">학습 콘텐츠 파일이 없어요.</div>`; return; }
    const all = itemsOf(lang);
    let body = "";
    if (u.tab === "review") {
      const list = reviewList(lang, r);
      body = list.length ? list.map(o => card(o, lang)).join("")
        : `<div class="empty">아직 복습할 단어가 없어요.<br>내일부터 어제·3일 전·일주일 전 단어가 섞여 나옵니다.</div>`;
    } else if (u.tab === "quiz") {
      const q = u.quiz;
      if (!q) {
        body = `<div class="empty">오늘 배운 것과 틀린 항목으로 최대 8문제를 풀어 봅니다.<br><button class="big" data-st="quizstart">퀴즈 시작</button></div>`;
      } else if (q.done || !q.qs.length) {
        body = `<div class="empty"><b>${q.qs.length ? `${q.score} / ${q.qs.length} 정답` : "풀 수 있는 문제가 아직 없어요"}</b><br>틀린 항목은 [복습]에 다시 나옵니다.<br><button class="big" data-st="quizstart">다시 풀기</button></div>`;
      } else {
        const cur = q.qs[q.i];
        body = `<div class="q"><div class="q-n">${q.i + 1} / ${q.qs.length} · ${esc(cur.title)}</div>
          <div class="q-p">${lang === "ja" ? rich(cur.prompt) : esc(cur.prompt)}</div>
          ${cur.sub ? `<div class="si-k">${esc(cur.sub)}</div>` : ""}
          ${cur.opts.map((op, i) => {
            let cls = "";
            if (q.picked != null) cls = op.ok ? "right" : (q.picked === i ? "bad" : "");
            return `<button class="opt ${cls}" data-st="opt" data-i="${i}" ${q.picked != null ? "disabled" : ""}>${lang === "ja" ? rich(op.t) : esc(op.t)}</button>`;
          }).join("")}
          ${q.picked != null ? `<div class="si-u">${cur.opts[q.picked].ok ? "👍 정답!" : "다시 확인해요."} ${cur.why ? "형태: " + esc(cur.why) : ""}</div>
            <button class="big" data-st="next">${q.i + 1 >= q.qs.length ? "결과 보기" : "다음 문제"}</button>` : ""}
        </div>`;
      }
    } else {
      const list = r.day[u.tab].map((it, i) => all[`${lang}:${r.key}:${u.tab}:${i}`]);
      const known = list.filter(o => marks[o.id] === "k").length;
      body = `<div class="prog">외웠어요 ${known} / ${list.length}</div>` + list.map(o => card(o, lang)).join("");
    }
    const tip = lang === "en" && L.data().tip
      ? `<button class="mini" data-st="tip">${u.tip ? "도움말 닫기" : "the / a 도움말"}</button>` + (u.tip ? `<div class="tipbox">${esc(L.data().tip)}</div>` : "") : "";
    el.className = "st" + (prefs.mask ? " mask" : "") + (prefs.furi ? "" : " nofuri");
    el.innerHTML = `
      <div class="st-head"><b>${esc(r.day.theme)}</b>${r.repeated ? ` <span class="tag warn">반복 학습 · 이 날짜의 새 콘텐츠 없음</span>` : ""}</div>
      <div class="st-ctl">
        <label><input type="checkbox" data-st="mask" ${prefs.mask ? "checked" : ""}> 패턴 가리기</label>
        <label><input type="checkbox" data-st="slow" ${prefs.slow ? "checked" : ""}> 느리게 듣기</label>
        ${lang === "ja" ? `<button class="mini" data-st="furi">읽는 법 ${prefs.furi ? "끄기" : "켜기"}</button>` : ""}
        ${tip}
      </div>
      <div class="st-tabs">${TABS.map(([k, n]) => `<button data-st="tab" data-tab="${k}" class="${u.tab === k ? "on" : ""}">${n}</button>`).join("")}</div>
      <div class="st-body">${body}</div>`;
  }

  // ---- 이벤트 ----
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-st]"); if (!b) return;
    const root = b.closest(".st"); if (!root) return;
    const lang = root.dataset.lang, u = ui[lang], a = b.dataset.st;
    const si = b.closest(".si"), id = si && si.dataset.id;
    const stop = () => e.stopPropagation();
    if (a === "tab") { u.tab = b.dataset.tab; }
    else if (a === "play") { const o = itemsOf(lang)[id]; if (o) speak(o.it.t, lang); return; }
    else if (a === "mark") {
      const v = b.dataset.v;
      if (marks[id] === v) delete marks[id]; else marks[id] = v;
      save("study_marks", marks);
    }
    else if (a === "reveal") { b.parentElement.classList.toggle("open"); return; }
    else if (a === "furi") { prefs.furi = !prefs.furi; save("study_prefs", prefs); redrawAll(); return; }
    else if (a === "tip") { u.tip = !u.tip; }
    else if (a === "quizstart") { u.quiz = buildQuiz(lang, dayFor(lang, u.date)); }
    else if (a === "opt") {
      const q = u.quiz, cur = q.qs[q.i]; if (q.picked != null) return;
      q.picked = +b.dataset.i;
      if (cur.opts[q.picked].ok) { q.score++; delete wrong[cur.id]; } else { wrong[cur.id] = 1; }
      save("study_wrong", wrong);
    }
    else if (a === "next") { const q = u.quiz; q.i++; q.picked = null; if (q.i >= q.qs.length) q.done = true; }
    else return;
    draw(lang); stop();
  });
  document.addEventListener("change", e => {
    const b = e.target.closest("input[data-st]"); if (!b) return;
    if (b.dataset.st === "mask") prefs.mask = b.checked;
    else if (b.dataset.st === "slow") prefs.slow = b.checked;
    else return;
    save("study_prefs", prefs); redrawAll();
  });
  function redrawAll() { ["en", "ja"].forEach(l => { if (ui[l].el && document.body.contains(ui[l].el)) draw(l); }); }

  window.Study = {
    mount(el, lang, date) {
      const u = ui[lang];
      if (u.date !== date) u.quiz = null;
      u.el = el; u.date = date;
      el.dataset.lang = lang;
      draw(lang);
    }
  };
})();
