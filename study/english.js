/* 영어 학습 콘텐츠 (중급 · 비즈니스). 날짜별로 words / sentences / expressions 각 10개.
   t=원문  k=한국어  u=쓰임 한 줄  f=형태 정보  c=짝꿍 표현  o=✅ 올바른 예  n=❌ 틀린 예
   b=빈칸 퀴즈용 핵심 표현(t 안에 그대로 들어 있어야 함)  ng=틀린 문장(문장 고르기 퀴즈용)  q=true 이면 "확인 필요" 표시 */
window.STUDY_EN = {
  tip: "the / a 는 단어(예: follow up)에 붙는 게 아니라, 뒤에 오는 명사에 달려 있어요. 'the budget'처럼 서로 알고 있는 것이면 the, 처음 말하는 하나면 a, 셀 수 없는 것이면 보통 아무것도 안 붙입니다. 단어 자체의 모양(전치사, -ing, to부정사)만 이 칸에서 외우세요.",
  days: {
    "2026-10-12": {
      theme: "월요일 · 회의",
      words: [
        {t:"postpone", k:"연기하다", u:"일정이나 결정을 뒤로 미룰 때. 격식 있는 회의 영어.", f:"postpone + 명사 / -ing (to부정사 ❌)", c:"postpone a meeting, postpone a decision", o:"We postponed launching the app.", ok:"우리는 앱 출시를 연기했어요.", n:"We postponed to launch the app."},
        {t:"agenda", k:"안건, 회의 순서표", u:"회의에서 다룰 항목 목록.", f:"셀 수 있는 명사 · on the agenda (in ❌)", c:"set the agenda, an agenda item", o:"It's on the agenda for Friday.", ok:"금요일 안건에 올라 있어요.", n:"It's in the agenda for Friday."},
        {t:"wrap up", k:"마무리하다", u:"회의나 업무를 끝낼 때.", f:"동사 wrap up / 명사 wrap-up · 대명사는 사이에 끼움", c:"wrap up a meeting", o:"Let's wrap it up.", ok:"이제 마무리합시다.", n:"Let's wrap up it."},
        {t:"bring up", k:"(화제를) 꺼내다", u:"회의에서 문제나 의견을 처음 언급할 때.", f:"bring up + 명사 · 대명사는 사이에: bring it up", c:"bring up a concern, bring up an issue", o:"She brought it up yesterday.", ok:"그녀가 어제 그 얘기를 꺼냈어요.", n:"She brought up it yesterday."},
        {t:"follow up", k:"후속 조치를 하다", u:"회의 뒤에 연락하거나 확인을 이어 갈 때.", f:"follow up with 사람 / on 일 · 명사는 follow-up (하이픈)", c:"follow up on an email, a follow-up call", o:"I'll follow up with Anna on the budget.", ok:"예산 건은 제가 애나에게 후속 연락을 할게요.", n:"I'll follow up Anna the budget."},
        {t:"minutes", k:"회의록", u:"회의 내용을 적은 기록. 항상 복수형.", f:"항상 복수형 minutes · take the minutes", c:"take the minutes, send out the minutes", o:"Who is taking the minutes?", ok:"회의록은 누가 작성하나요?", n:"Who is taking the minute?"},
        {t:"attend", k:"참석하다", u:"회의나 행사에 참석할 때.", f:"attend + 명사 (전치사 ❌) · attend to 는 '처리하다'로 뜻이 달라짐", c:"attend a meeting, attend an event", o:"I attended the meeting.", ok:"저는 그 회의에 참석했어요.", n:"I attended to the meeting."},
        {t:"align", k:"방향·의견을 맞추다", u:"팀이 같은 방향이 되도록 조율할 때.", f:"align on + 안건 / align with + 사람·목표", c:"align on priorities, align with the goal", o:"Let's align on next steps.", ok:"다음 단계에 대해 의견을 맞춰 봅시다.", n:"Let's align about next steps."},
        {t:"table", k:"(미국) 보류하다 / (영국) 안건으로 올리다", u:"미국식은 '뒤로 미루다', 영국식은 반대 뜻이라 주의.", f:"table + 명사 · 전치사 없음", c:"table a proposal", o:"Let's table this until next week.", ok:"이건 다음 주까지 보류합시다.", n:"Let's table about this until next week.", q:true},
        {t:"deliverable", k:"(내야 하는) 결과물", u:"프로젝트에서 제출해야 하는 산출물.", f:"셀 수 있는 명사 · 보통 복수 deliverables", c:"key deliverables, meet a deliverable", o:"The deliverables are due Friday.", ok:"결과물은 금요일까지 제출해야 해요.", n:"The deliverables is due Friday."}
      ],
      sentences: [
        {t:"Let's get started, since everyone is here.", k:"모두 오셨으니 시작하죠.", u:"회의를 여는 가장 기본 문장.", f:"get started (get start ❌) · since = ~이니까", b:"get started", ng:"Let's get start, since everyone is here."},
        {t:"Could we go over the agenda first?", k:"먼저 안건부터 살펴볼까요?", u:"안건을 훑어 보자고 제안할 때.", f:"go over + 명사 (go over about ❌) · Could we ~? 는 부드러운 제안", b:"go over", ng:"Could we go over about the agenda first?"},
        {t:"I'd like to push back on that timeline.", k:"그 일정에는 이의를 제기하고 싶습니다.", u:"반대를 부드럽게 꺼낼 때. I disagree 보다 덜 직설적.", f:"push back on + 명사 · 대명사도 on 뒤에: push back on it", b:"push back on", ng:"I'd like to push back that timeline."},
        {t:"Can we circle back to this after the break?", k:"쉬는 시간 뒤에 이 건으로 다시 돌아올까요?", u:"지금은 넘기고 나중에 다시 다루자고 할 때.", f:"circle back to + 명사 (circle back about ❌)", b:"circle back to", ng:"Can we circle back about this after the break?"},
        {t:"Just to make sure we're on the same page, the launch is in March.", k:"같은 이해인지 확인하자면, 출시는 3월입니다.", u:"서로 이해가 같은지 확인할 때.", f:"on the same page (the 필수) · Just to make sure ~ 로 시작", b:"on the same page", ng:"Just to make sure we're in the same page, the launch is in March."},
        {t:"Let me recap what we've agreed on.", k:"합의한 내용을 정리해 볼게요.", u:"회의 끝에 요약할 때.", f:"agree on + 명사 (agree to 는 '수락') · Let me + 동사원형", b:"agreed on", ng:"Let me recap what we've agreed."},
        {t:"Who can take ownership of this item?", k:"이 건은 누가 맡을 수 있을까요?", u:"책임자를 정할 때.", f:"take ownership of + 명사 · ownership 은 셀 수 없음 (an ❌)", b:"take ownership of", ng:"Who can take an ownership of this item?"},
        {t:"We're running short on time, so let's park this for now.", k:"시간이 부족하니 이건 일단 보류합시다.", u:"안건을 잠시 미룰 때.", f:"run short on + 명사 · park + 명사 + for now", b:"park this for now", ng:"We're running short of time, so let's park for now this."},
        {t:"I'd like to hear everyone's thoughts before we decide.", k:"결정하기 전에 모두의 의견을 듣고 싶습니다.", u:"의견을 모을 때.", f:"I'd like to + 동사원형 · hear + 명사 · before + 주어 + 동사", b:"hear everyone's thoughts", ng:"I'd like hearing everyone's thoughts before we decide."},
        {t:"Let's wrap up with the action items.", k:"실행 항목으로 마무리합시다.", u:"회의를 끝내기 직전에.", f:"wrap up with + 명사 · action item 은 셀 수 있음", b:"wrap up with", ng:"Let's wrap up it with the action items."}
      ],
      expressions: [
        {t:"Sorry I'm late.", k:"늦어서 죄송해요.", u:"지각했을 때 가볍게.", f:"Sorry (that) I'm late / Sorry for being late (Sorry for late ❌)", b:"I'm late", ng:"Sorry for late."},
        {t:"Can you hear me okay?", k:"제 목소리 잘 들리세요?", u:"화상 회의 시작 때.", f:"hear me (hear to me ❌) · okay = 문제없이", b:"hear me", ng:"Can you hear to me okay?"},
        {t:"You're on mute.", k:"음소거 상태예요.", u:"화상 회의에서 흔히 쓰는 말.", f:"on mute (in mute ❌)", b:"on mute", ng:"You're in mute."},
        {t:"Do you mind if I jump in?", k:"제가 끼어들어도 될까요?", u:"남의 말 중에 말을 얹을 때 예의 바르게.", f:"Do you mind if + 주어 + 동사 · 대답 No(괜찮아요)가 허락", b:"jump in", ng:"Do you mind if I jumping in?"},
        {t:"Sorry, could you say that again?", k:"죄송한데 다시 말씀해 주시겠어요?", u:"못 알아들었을 때.", f:"say that again (say again that ❌)", b:"say that again", ng:"Sorry, could you say again that?"},
        {t:"That makes sense.", k:"이해돼요, 일리 있네요.", u:"동의할 때.", f:"make sense (sense 는 셀 수 없음, a ❌)", b:"makes sense", ng:"That makes a sense."},
        {t:"I'll get back to you on that.", k:"그 건은 나중에 답변드릴게요.", u:"바로 답할 수 없을 때.", f:"get back to + 사람 + on 일", b:"get back to you", ng:"I'll get back you on that."},
        {t:"Let's catch up later.", k:"나중에 얘기해요.", u:"편하게 다음에 이야기하자고 할 때.", f:"catch up (with 사람) · 목적어 없이 쓰면 근황 이야기", b:"catch up", ng:"Let's catch later."},
        {t:"Sounds good to me.", k:"저는 좋아요.", u:"제안에 동의할 때.", f:"Sounds good (주어 It 생략) · to me 는 '내 생각엔'", b:"Sounds good", ng:"Sound good to me."},
        {t:"Fair enough.", k:"그럴 만하네요 / 알겠습니다.", u:"상대 주장을 받아들일 때.", f:"형용사 + enough (enough 가 뒤에)", b:"Fair enough", ng:"Enough fair."}
      ]
    },
    "2026-10-13": {
      theme: "화요일 · 이메일",
      words: [
        {t:"attach", k:"첨부하다", u:"이메일에 파일을 붙일 때.", f:"attach + 파일 / attach A to B · 명사는 attachment", c:"attach a file, the attached report", o:"I attached the report to this email.", ok:"이 메일에 보고서를 첨부했어요.", n:"I attached the report in this email."},
        {t:"forward", k:"전달하다", u:"받은 메일을 다른 사람에게 보낼 때.", f:"forward + 메일 + to 사람 (forward me it ❌)", c:"forward an email to", o:"Please forward it to Anna.", ok:"그걸 애나에게 전달해 주세요.", n:"Please forward Anna it."},
        {t:"cc", k:"참조로 넣다", u:"메일 참조에 사람을 넣을 때. 동사로도 씀.", f:"cc + 사람 (동사) · cc'd 가 과거형", c:"cc me, keep me in the loop", o:"Please cc me on the reply.", ok:"답장할 때 저를 참조로 넣어 주세요.", n:"Please cc to me on the reply."},
        {t:"regarding", k:"~에 관하여", u:"about 보다 격식 있는 전치사.", f:"regarding + 명사 (regarding about ❌)", c:"regarding your request", o:"I'm writing regarding your request.", ok:"요청하신 건과 관련해 연락드립니다.", n:"I'm writing regarding about your request."},
        {t:"reach out", k:"연락하다", u:"먼저 연락할 때 자주 쓰는 비즈니스 표현.", f:"reach out to 사람 (reach out me ❌) · about / regarding 일", c:"reach out to the team", o:"Feel free to reach out to me.", ok:"언제든 편하게 연락 주세요.", n:"Feel free to reach out me."},
        {t:"loop in", k:"(참조로) 끌어들이다", u:"어떤 건에 사람을 포함시킬 때.", f:"loop + 사람 + in / loop in + 사람 · 'loop me in' 이 자연스러움", c:"loop in the manager, keep me in the loop", o:"I'll loop Anna in.", ok:"애나도 참조에 넣을게요.", n:"I'll loop in to Anna."},
        {t:"get back to", k:"(나중에) 답하다", u:"바로 답할 수 없을 때.", f:"get back to + 사람 (on 일) · 대명사도 그대로: get back to you", c:"get back to you shortly", o:"I'll get back to you on Friday.", ok:"금요일에 답변드릴게요.", n:"I'll get back you on Friday."},
        {t:"heads-up", k:"미리 알려 주는 말", u:"사전에 알림을 줄 때.", f:"명사 a heads-up (the/a 필요) · give someone a heads-up", c:"give you a heads-up", o:"Just a quick heads-up.", ok:"미리 짧게 알려 드려요.", n:"Just quick heads-up."},
        {t:"acknowledge", k:"수신·확인했음을 알리다", u:"메일을 받았다고 알릴 때.", f:"acknowledge + 명사 / that절 · acknowledge receipt (of)", c:"acknowledge receipt of", o:"I acknowledge receipt of your email.", ok:"보내 주신 메일을 잘 받았습니다.", n:"I acknowledge to receive your email."},
        {t:"apologize", k:"사과하다", u:"사과 메일의 기본 동사.", f:"apologize for + 명사/-ing, to + 사람 (apologize you ❌)", c:"apologize for the delay", o:"I apologize for the delay.", ok:"지연되어 죄송합니다.", n:"I apologize you for the delay."}
      ],
      sentences: [
        {t:"I'm writing to follow up on our conversation yesterday.", k:"어제 나눈 대화와 관련해 연락드립니다.", u:"후속 메일의 첫 문장.", f:"follow up on + 명사 · I'm writing to + 동사원형", b:"follow up on", ng:"I'm writing to follow up our conversation yesterday."},
        {t:"Please find the attached report.", k:"보고서를 첨부했으니 확인 부탁드립니다.", u:"첨부 안내의 정석.", f:"Please find + 명사 (attached 는 형용사)", b:"Please find", ng:"Please find attached the report."},
        {t:"Could you please confirm receipt of this email?", k:"이 메일을 받으셨는지 확인해 주시겠어요?", u:"수신 확인을 요청할 때.", f:"confirm receipt of + 명사 · receipt 은 [rɪˈsiːt]", b:"confirm receipt of", ng:"Could you please confirm to receive this email?"},
        {t:"I'd appreciate it if you could reply by Friday.", k:"금요일까지 답장해 주시면 감사하겠습니다.", u:"정중한 기한 요청.", f:"I'd appreciate it if + 주어 + could · by = ~까지(완료), until = ~까지(계속)", b:"by Friday", ng:"I'd appreciate it if you could reply until Friday."},
        {t:"Sorry for the delayed response.", k:"답이 늦어 죄송합니다.", u:"답장이 늦었을 때.", f:"Sorry for + the + 명사 (관사 필요)", b:"for the delayed response", ng:"Sorry for delayed response."},
        {t:"Please let me know if you have any questions.", k:"질문이 있으시면 알려 주세요.", u:"메일 마무리의 정석.", f:"let me know + if절 · any 는 의문·조건문에서", b:"let me know", ng:"Please let know me if you have any questions."},
        {t:"I'll keep you posted.", k:"계속 알려 드릴게요.", u:"진행 상황을 계속 공유하겠다고 할 때.", f:"keep + 사람 + posted (keep posting ❌)", b:"keep you posted", ng:"I'll keep posting you."},
        {t:"Thank you for bringing this to my attention.", k:"이 점을 알려 주셔서 감사합니다.", u:"문제 제기에 대한 답.", f:"Thank you for + -ing · bring A to B's attention", b:"bringing this to my attention", ng:"Thank you for bring this to my attention."},
        {t:"I look forward to hearing from you.", k:"회신 기다리겠습니다.", u:"메일 끝인사.", f:"look forward to + -ing (to 는 전치사라 동사원형 ❌)", b:"look forward to hearing", ng:"I look forward to hear from you."},
        {t:"Please feel free to reach out if you need anything.", k:"필요한 게 있으면 언제든 연락 주세요.", u:"친절한 마무리.", f:"feel free to + 동사원형 · reach out (to 사람)", b:"feel free to reach out", ng:"Please feel free reaching out if you need anything."}
      ],
      expressions: [
        {t:"Did you get my email?", k:"제 메일 받으셨어요?", u:"메일 확인 여부를 물을 때.", f:"get = receive · get my email (get to my email ❌)", b:"get my email", ng:"Did you get to my email?"},
        {t:"It must have gone to spam.", k:"스팸함에 들어갔나 봐요.", u:"메일이 안 보일 때.", f:"must have + 과거분사 (강한 추측) · go to spam (the 없이)", b:"must have gone", ng:"It must have went to spam."},
        {t:"I'll shoot you a message.", k:"메시지 보낼게요.", u:"캐주얼하게 연락할 때.", f:"shoot + 사람 + 명사 (여기서는 send 의 구어)", b:"shoot you a message", ng:"I'll shoot a message you."},
        {t:"Let me double-check.", k:"다시 한번 확인해 볼게요.", u:"확인해 보겠다고 할 때.", f:"double-check (하이픈) · Let me + 동사원형", b:"double-check", ng:"Let me to double-check."},
        {t:"Give me a second.", k:"잠깐만요.", u:"잠깐 기다려 달라고 할 때.", f:"a second (a 필요) · give + 사람 + 시간", b:"a second", ng:"Give me second."},
        {t:"Oops, wrong attachment.", k:"앗, 첨부를 잘못 보냈네요.", u:"실수를 인정할 때.", f:"wrong + 명사 (the wrong attachment 도 가능)", b:"wrong attachment", ng:"Oops, attachment wrong."},
        {t:"I'll send it over right now.", k:"지금 바로 보내 드릴게요.", u:"즉시 보내겠다고 할 때.", f:"send it over (send over it ❌) · right now = 지금 바로", b:"send it over", ng:"I'll send over it right now."},
        {t:"Mind if I call you instead?", k:"대신 전화해도 될까요?", u:"메일보다 통화가 빠를 때.", f:"Mind if I + 동사 (Do you 생략) · instead 는 문장 끝", b:"Mind if I call", ng:"Mind if I calling you instead?"},
        {t:"Thanks a bunch.", k:"정말 고마워요.", u:"가볍게 고마움을 표시.", f:"a bunch (a 필요) · Thanks a lot 과 비슷", b:"Thanks a bunch", ng:"Thanks bunch."},
        {t:"No worries.", k:"괜찮아요, 걱정 마세요.", u:"사과나 감사에 답할 때.", f:"worries 는 복수형 (No worry ❌)", b:"No worries", ng:"No worry."}
      ]
    },
    "2026-10-14": {
      theme: "수요일 · 일정 조율",
      words: [
        {t:"reschedule", k:"일정을 다시 잡다", u:"약속 일정을 바꿀 때.", f:"reschedule + 명사 + for / to + 날짜·시간", c:"reschedule a meeting for Monday", o:"Can we reschedule it for Monday?", ok:"월요일로 일정을 다시 잡을 수 있을까요?", n:"Can we reschedule it in Monday?"},
        {t:"availability", k:"가능한 시간", u:"상대의 비어 있는 시간을 물을 때.", f:"셀 수 없는 명사 (availabilities ❌) · your availability", c:"check your availability", o:"What is your availability next week?", ok:"다음 주에 가능한 시간이 언제인가요?", n:"What are your availabilities next week?"},
        {t:"conflict", k:"일정 충돌", u:"겹치는 일정이 있을 때.", f:"have a conflict with + 일정 · scheduling conflict", c:"a scheduling conflict", o:"I have a conflict with another meeting.", ok:"다른 회의와 일정이 겹쳐요.", n:"I have a conflict to another meeting."},
        {t:"tentative", k:"잠정적인", u:"확정은 아니지만 가능한 일정.", f:"형용사 · 부사는 tentatively", c:"a tentative schedule", o:"The date is tentative.", ok:"날짜는 잠정적이에요.", n:"The date is tentatively."},
        {t:"pencil in", k:"(잠정적으로) 일정을 넣어 두다", u:"변경 가능성을 두고 일정에 넣을 때.", f:"pencil in + 명사 · pencil it in", c:"pencil in a call", o:"Let me pencil it in.", ok:"일단 잠정적으로 일정에 넣어 둘게요.", n:"Let me pencil in it."},
        {t:"free up", k:"시간을 비우다", u:"일정을 비워 둘 때.", f:"free up + 명사 · free it up", c:"free up some time", o:"I'll free up some time on Thursday.", ok:"목요일에 시간을 좀 비워 둘게요.", n:"I'll free up some time at Thursday."},
        {t:"bandwidth", k:"(일을 맡을) 여유", u:"사람의 업무 여력을 말할 때.", f:"셀 수 없는 명사 · have the bandwidth to + 동사원형", c:"have the bandwidth", o:"I don't have the bandwidth right now.", ok:"지금은 그 일을 맡을 여력이 없어요.", n:"I don't have a bandwidth right now."},
        {t:"deadline", k:"마감일", u:"언제까지 끝내야 하는지.", f:"meet / miss a deadline · by the deadline (deadline 은 셀 수 있음)", c:"meet a deadline, tight deadline", o:"We need to meet the deadline.", ok:"마감을 지켜야 해요.", n:"We need to keep the deadline."},
        {t:"slot", k:"(시간) 자리, 시간대", u:"비어 있는 시간대를 말할 때.", f:"a time slot · 셀 수 있는 명사", c:"an open slot", o:"Do you have a slot on Friday?", ok:"금요일에 비는 시간 있으세요?", n:"Do you have a slot in Friday?"},
        {t:"touch base", k:"가볍게 연락·확인하다", u:"짧게 상황을 공유할 때.", f:"touch base with + 사람 (on 일)", c:"touch base next week", o:"Let's touch base with the team.", ok:"팀과 가볍게 상황을 공유해 봅시다.", n:"Let's touch base to the team."}
      ],
      sentences: [
        {t:"What does your availability look like next week?", k:"다음 주 가능한 시간이 어떻게 되세요?", u:"일정 조율의 첫 질문.", f:"look like + 명사 · availability 는 셀 수 없음", b:"look like", ng:"What does your availabilities look like next week?"},
        {t:"Would Thursday at 3 p.m. work for you?", k:"목요일 오후 3시 괜찮으세요?", u:"일정을 제안할 때.", f:"work for + 사람 · on Thursday / at 3 p.m.", b:"work for you", ng:"Would Thursday at 3 p.m. work to you?"},
        {t:"I have a conflict at that time.", k:"그 시간에는 다른 일정이 있습니다.", u:"거절하면서 이유를 짧게.", f:"have a conflict (a 필요) · at that time", b:"have a conflict", ng:"I have conflict at that time."},
        {t:"Could we push it back by an hour?", k:"한 시간 뒤로 미룰 수 있을까요?", u:"약속을 뒤로 밀 때.", f:"push it back (push back it ❌) · by + 시간 = 그만큼", b:"push it back", ng:"Could we push back it by an hour?"},
        {t:"I'm afraid I can't make it on Friday.", k:"죄송하지만 금요일은 어렵겠어요.", u:"완곡하게 거절할 때.", f:"I'm afraid + 문장 · make it = 참석하다 · on + 요일", b:"can't make it", ng:"I'm afraid I can't make it in Friday."},
        {t:"Let's lock in the date.", k:"날짜를 확정합시다.", u:"일정을 확정할 때.", f:"lock in + 명사 · lock it in", b:"lock in", ng:"Let's lock in it the date."},
        {t:"Does that timeline work on your end?", k:"그 일정이 그쪽에 괜찮을까요?", u:"상대 사정 확인.", f:"work on your end (on 필수)", b:"on your end", ng:"Does that timeline work in your end?"},
        {t:"I can squeeze you in at 4.", k:"4시에 끼워 넣어 드릴 수 있어요.", u:"빡빡한 일정에 끼워 줄 때.", f:"squeeze + 사람 + in · at + 시각", b:"squeeze you in", ng:"I can squeeze in you at 4."},
        {t:"Let me check my calendar and get back to you.", k:"일정을 확인하고 답드리겠습니다.", u:"즉답이 어려울 때.", f:"check + 명사 · get back to + 사람", b:"get back to you", ng:"Let me check my calendar and get back you."},
        {t:"Is there any flexibility on the deadline?", k:"마감에 여유가 있을까요?", u:"마감 협상을 시작할 때.", f:"flexibility on + 명사 · 셀 수 없음", b:"flexibility on", ng:"Is there any flexibilities on the deadline?"}
      ],
      expressions: [
        {t:"Does that work for you?", k:"그 시간 괜찮으세요?", u:"확인할 때 가장 기본.", f:"work for + 사람", b:"work for you", ng:"Does that work to you?"},
        {t:"I'm swamped this week.", k:"이번 주는 일이 너무 많아요.", u:"바쁘다고 말할 때.", f:"swamped (with 일) · this week (전치사 없음)", b:"swamped", ng:"I'm swamp this week."},
        {t:"Let's find a time.", k:"시간을 맞춰 봅시다.", u:"일정을 조율하자고 할 때.", f:"find a time (a 필요)", b:"find a time", ng:"Let's find time to."},
        {t:"Can we do it earlier?", k:"더 일찍 할 수 있을까요?", u:"시간을 당기고 싶을 때.", f:"earlier (비교급) · do it (do earlier it ❌)", b:"do it earlier", ng:"Can we do earlier it?"},
        {t:"I'm free all afternoon.", k:"오후 내내 시간 돼요.", u:"가능 시간을 말할 때.", f:"all + 시간대 (all in ❌) · free = 시간이 비어 있는", b:"free all afternoon", ng:"I'm free in all afternoon."},
        {t:"Rain check?", k:"다음으로 미룰까요?", u:"약속을 다음으로 미룰 때.", f:"rain check (명사구, 짧은 구어)", b:"Rain check", ng:"Rain checking?"},
        {t:"Something came up.", k:"일이 생겼어요.", u:"갑작스러운 사정.", f:"come up (come out ❌) · 과거 came up", b:"came up", ng:"Something comed up."},
        {t:"Sounds like a plan.", k:"좋아요, 그렇게 하죠.", u:"합의할 때.", f:"sound like + 명사 (sounds 생략된 It)", b:"like a plan", ng:"Sounds a plan."},
        {t:"I'll be there in five.", k:"5분 뒤에 도착해요.", u:"곧 도착한다고 할 때.", f:"in five = 5분 뒤 · in + 시간", b:"in five", ng:"I'll be there after five."},
        {t:"Let's play it by ear.", k:"상황 봐서 정합시다.", u:"계획을 유연하게 둘 때.", f:"play it by ear (정해진 관용구)", b:"by ear", ng:"Let's play it with ear."}
      ]
    },
    "2026-10-15": {
      theme: "목요일 · 스몰토크",
      words: [
        {t:"commute", k:"통근하다", u:"출퇴근 이야기를 할 때.", f:"commute to + 장소 (commute to work) · 명사로도 씀", c:"a long commute", o:"I commute to work by train.", ok:"저는 기차로 출근해요.", n:"I commute to home by train."},
        {t:"catch up", k:"밀린 이야기를 나누다", u:"오랜만에 만났을 때.", f:"catch up with + 사람 (on 일)", c:"catch up with a friend", o:"I'd love to catch up with you.", ok:"만나서 밀린 이야기를 나누고 싶어요.", n:"I'd love to catch up you."},
        {t:"hang out", k:"어울려 놀다", u:"편하게 시간을 보낼 때.", f:"hang out with + 사람 (hang out together)", c:"hang out with friends", o:"We hang out on weekends.", ok:"우리는 주말에 같이 놀아요.", n:"We hang out friends on weekends."},
        {t:"grab", k:"(간단히) 먹다·사다", u:"커피나 점심을 가볍게 말할 때.", f:"grab + 명사 (grab a coffee)", c:"grab a bite, grab lunch", o:"Let's grab a coffee.", ok:"커피 한잔해요.", n:"Let's grab for a coffee."},
        {t:"bump into", k:"우연히 마주치다", u:"우연히 만난 일.", f:"bump into + 사람 (bump to ❌)", c:"bump into someone", o:"I bumped into Anna yesterday.", ok:"어제 애나를 우연히 마주쳤어요.", n:"I bumped to Anna yesterday."},
        {t:"keep in touch", k:"연락하고 지내다", u:"헤어질 때 자주.", f:"keep in touch with + 사람 · in touch (the ❌)", c:"stay in touch", o:"Let's keep in touch.", ok:"계속 연락하고 지내요.", n:"Let's keep in a touch."},
        {t:"recommend", k:"추천하다", u:"식당이나 책을 추천할 때.", f:"recommend + 명사 / -ing · recommend that + 주어 + 동사원형", c:"highly recommend", o:"I recommend trying the soup.", ok:"수프를 드셔 보시길 추천해요.", n:"I recommend to try the soup."},
        {t:"vacation", k:"휴가", u:"여행·휴가 이야기.", f:"on vacation (in ❌) · 미국식, 영국식은 holiday", c:"go on vacation, take a vacation", o:"She's on vacation this week.", ok:"그녀는 이번 주 휴가예요.", n:"She's in vacation this week."},
        {t:"take up", k:"(취미 등을) 시작하다", u:"새 취미를 시작했을 때.", f:"take up + 명사 · take it up", c:"take up a hobby", o:"I took up running last year.", ok:"작년에 달리기를 시작했어요.", n:"I took up to run last year."},
        {t:"wind down", k:"긴장을 풀다, 마무리되다", u:"하루를 끝내고 쉴 때.", f:"wind down (목적어 없음) · 사람 + wind down", c:"wind down after work", o:"I need to wind down after work.", ok:"퇴근 후에는 긴장을 풀어야 해요.", n:"I need to wind down myself after work."}
      ],
      sentences: [
        {t:"How was your weekend?", k:"주말 잘 보내셨어요?", u:"월요일 스몰토크의 기본.", f:"How was + 명사 (How is ❌ 과거 지난 일)", b:"How was", ng:"How is your weekend?"},
        {t:"Did you do anything fun over the holiday?", k:"연휴에 재미있는 거 하셨어요?", u:"연휴 뒤 대화.", f:"anything + 형용사 (anything fun) · over the holiday", b:"anything fun", ng:"Did you do fun anything over the holiday?"},
        {t:"I've been meaning to ask you about your trip.", k:"여행에 대해 물어보려던 참이었어요.", u:"관심을 보일 때.", f:"have been meaning to + 동사원형 · ask about + 명사", b:"been meaning to ask", ng:"I've been meaning asking you about your trip."},
        {t:"It's been a while! How have you been?", k:"오랜만이에요! 어떻게 지내셨어요?", u:"오랜만에 만났을 때.", f:"It's been a while (a 필요) · How have you been (현재완료)", b:"How have you been", ng:"It's been a while! How are you been?"},
        {t:"I heard you moved recently. How are you settling in?", k:"최근에 이사하셨다고 들었어요. 적응은 어떠세요?", u:"근황을 물을 때.", f:"settle in (목적어 없음) · heard (that) + 문장", b:"settling in", ng:"I heard you moved recently. How are you settling?"},
        {t:"Do you have any plans for the weekend?", k:"주말에 계획 있으세요?", u:"주말 계획을 물을 때.", f:"plans for + 기간 (plans in ❌)", b:"plans for the weekend", ng:"Do you have any plans in the weekend?"},
        {t:"I'm trying to pick up a new hobby.", k:"새로운 취미를 들여 보려고요.", u:"새 취미 이야기.", f:"try to + 동사원형 · pick up a hobby (a 필요)", b:"pick up a new hobby", ng:"I'm trying to picking up a new hobby."},
        {t:"That sounds like a lot of fun.", k:"정말 재밌겠네요.", u:"상대 이야기에 맞장구.", f:"sound like + 명사 (sound fun 도 가능) · a lot of", b:"sounds like", ng:"That sounds a lot of fun."},
        {t:"We should grab lunch sometime.", k:"언제 점심 한번 해요.", u:"가벼운 약속.", f:"grab lunch (a/the 없음) · sometime = 언제든", b:"grab lunch", ng:"We should grab the lunch sometime."},
        {t:"Anyway, I should get back to work.", k:"아무튼 일하러 돌아가야겠어요.", u:"대화를 자연스럽게 끝낼 때.", f:"get back to + 명사 (work, 관사 없음)", b:"get back to work", ng:"Anyway, I should get back for work."}
      ],
      expressions: [
        {t:"What's up?", k:"뭐 해? 어때?", u:"가볍게 인사.", f:"What's up (What is up 도 가능)", b:"What's up", ng:"What up?"},
        {t:"Not much, you?", k:"별일 없어요, 당신은요?", u:"인사에 대한 가벼운 대답.", f:"Not much (생략형)", b:"Not much", ng:"No much, you?"},
        {t:"Long time no see.", k:"오랜만이에요.", u:"오랜만에 만날 때.", f:"관용구 · 어순 그대로 암기", b:"Long time", ng:"Long time no saw."},
        {t:"Same here.", k:"저도요.", u:"상대 말에 공감할 때.", f:"Same here (me too 보다 가볍고 흔함)", b:"Same here", ng:"Same there."},
        {t:"Can't complain.", k:"나쁘지 않아요, 잘 지내요.", u:"안부 인사 답변.", f:"Can't complain (I 생략)", b:"Can't complain", ng:"Can't complaining."},
        {t:"How's it going?", k:"어떻게 지내요?", u:"인사.", f:"How's it going (How is it go ❌)", b:"How's it going", ng:"How's it go?"},
        {t:"That's awesome.", k:"멋지네요.", u:"좋은 소식에.", f:"That's + 형용사", b:"awesome", ng:"That's awesomely."},
        {t:"No kidding!", k:"정말요? 농담 아니죠?", u:"놀랐을 때.", f:"No kidding (kidding 필수)", b:"No kidding", ng:"No kid!"},
        {t:"Take care!", k:"잘 지내요!", u:"헤어질 때.", f:"Take care (a care ❌)", b:"Take care", ng:"Take a care!"},
        {t:"Talk to you later.", k:"나중에 얘기해요.", u:"헤어질 때.", f:"Talk to + 사람 (I'll 생략)", b:"Talk to you", ng:"Talk with you later."}
      ]
    },
    "2026-10-16": {
      theme: "금요일 · 면접·자기소개",
      words: [
        {t:"background", k:"배경, 경력", u:"학력·경력을 말할 때.", f:"셀 수 없는 명사 / a background in + 분야", c:"a background in sales", o:"I have a background in sales.", ok:"저는 영업 분야 경력이 있어요.", n:"I have background on sales."},
        {t:"strength", k:"강점", u:"면접 단골 질문.", f:"셀 수 있는 명사 · one of my strengths is ~", c:"play to your strengths", o:"One of my strengths is communication.", ok:"제 강점 중 하나는 소통이에요.", n:"One of my strength is communication."},
        {t:"achievement", k:"성과", u:"이룬 결과를 말할 때.", f:"셀 수 있는 명사 · achieve + 명사", c:"a major achievement", o:"My biggest achievement was the project.", ok:"가장 큰 성과는 그 프로젝트였어요.", n:"My biggest achievement were the project."},
        {t:"responsible", k:"책임이 있는", u:"담당 업무를 설명할 때.", f:"be responsible for + 명사/-ing (responsible of ❌)", c:"responsible for the budget", o:"I was responsible for managing the team.", ok:"저는 팀 관리를 맡았어요.", n:"I was responsible of managing the team."},
        {t:"lead", k:"이끌다", u:"팀이나 프로젝트를 이끌었을 때.", f:"lead + 명사 · 과거 led [led]", c:"lead a team, lead a project", o:"I led a team of five.", ok:"저는 다섯 명 팀을 이끌었어요.", n:"I leaded a team of five."},
        {t:"handle", k:"처리하다, 다루다", u:"맡아서 처리한 업무.", f:"handle + 명사 (handle with ❌)", c:"handle a complaint", o:"I handled customer requests.", ok:"저는 고객 요청을 처리했어요.", n:"I handled with customer requests."},
        {t:"transition", k:"전환하다, 이행", u:"직무·산업을 바꿀 때.", f:"transition from A to B · 명사로도 씀", c:"transition into a new role", o:"I want to transition into marketing.", ok:"마케팅 쪽으로 전환하고 싶어요.", n:"I want to transition to into marketing."},
        {t:"contribute", k:"기여하다", u:"입사 후 포부를 말할 때.", f:"contribute to + 명사/-ing (to 뒤 동사 -ing)", c:"contribute to the team", o:"I want to contribute to the company.", ok:"회사에 기여하고 싶어요.", n:"I want to contribute the company."},
        {t:"collaborate", k:"협업하다", u:"팀 업무 스타일을 말할 때.", f:"collaborate with + 사람 · on + 일", c:"collaborate with teams", o:"I collaborated with the design team.", ok:"디자인팀과 협업했어요.", n:"I collaborated the design team."},
        {t:"passionate", k:"열정적인", u:"관심 분야를 말할 때.", f:"be passionate about + 명사/-ing (passionate for ❌)", c:"passionate about marketing", o:"I'm passionate about marketing.", ok:"저는 마케팅에 열정이 있어요.", n:"I'm passionate in marketing."}
      ],
      sentences: [
        {t:"Let me briefly introduce myself.", k:"간단히 제 소개를 드리겠습니다.", u:"자기소개 시작.", f:"Let me + 동사원형 · introduce myself", b:"introduce myself", ng:"Let me briefly introducing myself."},
        {t:"I have over ten years of experience in sales.", k:"영업 분야에서 10년 이상의 경력이 있습니다.", u:"경력을 강조할 때.", f:"experience in + 분야 (experience 는 셀 수 없음) · over = 이상", b:"experience in sales", ng:"I have over ten years of experiences in sales."},
        {t:"I was responsible for managing a team of five.", k:"다섯 명의 팀을 관리했습니다.", u:"담당 업무 설명.", f:"responsible for + -ing", b:"responsible for managing", ng:"I was responsible to managing a team of five."},
        {t:"What drew me to this role is the chance to grow.", k:"이 직무에 끌린 이유는 성장할 기회입니다.", u:"지원 동기.", f:"What + 동사 + is + 명사 · draw 의 과거 drew", b:"drew me to", ng:"What drawed me to this role is the chance to grow."},
        {t:"One of my strengths is communicating across teams.", k:"제 강점 중 하나는 팀 간 소통입니다.", u:"강점 답변.", f:"One of my + 복수명사 + is · is 뒤 -ing", b:"One of my strengths", ng:"One of my strength is communicating across teams."},
        {t:"I'm looking to take on a new challenge.", k:"새로운 도전을 맡고 싶습니다.", u:"이직 사유.", f:"look to + 동사원형 (비즈니스 구어) · take on + 명사", b:"take on", ng:"I'm looking to take a new challenge on."},
        {t:"In my previous role, I increased sales by 20%.", k:"이전 직무에서 매출을 20% 늘렸습니다.", u:"성과를 숫자로.", f:"increase + 명사 + by + 수치 (increased to 는 '~까지')", b:"increased sales by", ng:"In my previous role, I increased sales to 20%."},
        {t:"I'd be happy to elaborate on that.", k:"그 부분을 더 설명해 드리겠습니다.", u:"추가 설명을 제안할 때.", f:"elaborate on + 명사 (elaborate about ❌)", b:"elaborate on", ng:"I'd be happy to elaborate about that."},
        {t:"That's a great question. Let me think for a moment.", k:"좋은 질문이네요. 잠깐 생각해 볼게요.", u:"시간을 벌 때.", f:"think for a moment (a 필요) · for + 기간", b:"for a moment", ng:"That's a great question. Let me think a moment."},
        {t:"Thank you for taking the time to meet with me.", k:"시간을 내 주셔서 감사합니다.", u:"면접 시작·끝 인사.", f:"take the time to + 동사원형 · meet with + 사람", b:"taking the time to", ng:"Thank you for take the time to meet with me."}
      ],
      expressions: [
        {t:"Nice to meet you.", k:"만나서 반갑습니다.", u:"첫 만남 인사.", f:"Nice to + 동사원형 (Nice meeting you 는 헤어질 때)", b:"Nice to meet", ng:"Nice to meeting you."},
        {t:"Thanks for having me.", k:"불러 주셔서 감사합니다.", u:"초대받은 자리에서.", f:"have + 사람 (초대하다) · having", b:"having me", ng:"Thanks for have me."},
        {t:"I'm a bit nervous.", k:"조금 긴장돼요.", u:"긴장을 인정할 때.", f:"a bit + 형용사 (a bit of 도 가능)", b:"a bit nervous", ng:"I'm bit nervous."},
        {t:"Let me rephrase that.", k:"다르게 말씀드릴게요.", u:"말을 바꿀 때.", f:"rephrase + 명사 · Let me + 동사원형", b:"rephrase", ng:"Let me rephrasing that."},
        {t:"Could you repeat the question?", k:"질문을 다시 말씀해 주시겠어요?", u:"질문을 못 들었을 때.", f:"repeat + 명사 (the question)", b:"repeat the question", ng:"Could you repeat to the question?"},
        {t:"That's a good point.", k:"좋은 지적이에요.", u:"의견에 동의할 때.", f:"a good point (a 필요)", b:"a good point", ng:"That's good point."},
        {t:"I'm glad you asked.", k:"물어봐 주셔서 기뻐요.", u:"좋은 질문에 대한 반응.", f:"glad (that) + 문장", b:"glad you asked", ng:"I'm glad you ask."},
        {t:"I'll do my best.", k:"최선을 다할게요.", u:"각오를 밝힐 때.", f:"do my best (the best ❌)", b:"do my best", ng:"I'll do the best."},
        {t:"Looking forward to it.", k:"기대하고 있어요.", u:"기대를 표현.", f:"Looking forward to + 명사/-ing (I'm 생략)", b:"forward to it", ng:"Looking forward it."},
        {t:"Have a great day.", k:"좋은 하루 보내세요.", u:"마무리 인사.", f:"Have a great day (a 필요)", b:"a great day", ng:"Have great day."}
      ]
    },
    "2026-10-17": {
      theme: "토요일 · 식당·쇼핑",
      words: [
        {t:"reservation", k:"예약", u:"식당·호텔 예약.", f:"make a reservation (do ❌) · 셀 수 있는 명사", c:"make a reservation, a reservation for two", o:"I made a reservation for two.", ok:"두 명으로 예약했어요.", n:"I did a reservation for two."},
        {t:"split", k:"나누다", u:"비용을 나눌 때.", f:"split + 명사 · split the bill · 과거형도 split", c:"split the bill", o:"Let's split the bill.", ok:"계산서를 나눠서 냅시다.", n:"Let's split the bill with equal."},
        {t:"tip", k:"팁, 봉사료", u:"식당 계산 때.", f:"leave a tip (do ❌) · 셀 수 있는 명사", c:"leave a tip", o:"We left a tip for the server.", ok:"종업원에게 팁을 남겼어요.", n:"We did a tip for the server."},
        {t:"refund", k:"환불", u:"환불 요청.", f:"get a refund · 명사/동사 같은 모양", c:"ask for a refund, get a refund", o:"I'd like to get a refund.", ok:"환불받고 싶어요.", n:"I'd like to get refund."},
        {t:"exchange", k:"교환하다", u:"상품 교환.", f:"exchange A for B (exchange A to B ❌)", c:"exchange for a different size", o:"I'd like to exchange it for a larger size.", ok:"더 큰 사이즈로 교환하고 싶어요.", n:"I'd like to exchange it to a larger size."},
        {t:"receipt", k:"영수증", u:"구매 증빙.", f:"셀 수 있는 명사 · 발음 [rɪˈsiːt] (p 묵음)", c:"keep the receipt", o:"Do you have the receipt?", ok:"영수증 갖고 계세요?", n:"Do you have the receipts?"},
        {t:"browse", k:"둘러보다", u:"가게에서 구경할 때.", f:"browse + 명사 / browse through + 명사 · 전치사 없이도", c:"just browsing", o:"I'm just browsing.", ok:"그냥 구경 중이에요.", n:"I'm just browse."},
        {t:"try on", k:"입어 보다", u:"옷 가게에서.", f:"try on + 명사 · try it on", c:"try on a jacket", o:"Can I try it on?", ok:"입어 봐도 될까요?", n:"Can I try on it?"},
        {t:"sold out", k:"매진된", u:"재고가 없을 때.", f:"형용사 · be sold out (sold out of 도 가능: out of stock)", c:"be sold out", o:"That size is sold out.", ok:"그 사이즈는 품절이에요.", n:"That size is sold off."},
        {t:"takeout", k:"포장 (주문)", u:"음식을 포장할 때.", f:"미국 takeout / 영국 takeaway · 명사 (붙여 씀)", c:"order takeout", o:"Let's order takeout.", ok:"포장 주문해요.", n:"Let's order take out."}
      ],
      sentences: [
        {t:"I'd like to make a reservation for two at seven.", k:"7시에 두 명 예약하고 싶습니다.", u:"전화 예약.", f:"make a reservation for + 인원 · at + 시각", b:"make a reservation for two", ng:"I'd like to do a reservation for two at seven."},
        {t:"Could we get a table by the window?", k:"창가 자리로 앉을 수 있을까요?", u:"자리 요청.", f:"by the window (the 필요) · get a table", b:"by the window", ng:"Could we get a table by window?"},
        {t:"Could we have the check, please?", k:"계산서 부탁드립니다.", u:"계산할 때 (미국).", f:"the check (미국) / the bill (영국) · Could we have", b:"the check", ng:"Could we have check, please?"},
        {t:"Can we split the bill?", k:"각자 계산해도 될까요?", u:"비용을 나눌 때.", f:"split the bill (the 필요)", b:"split the bill", ng:"Can we split bill?"},
        {t:"I'm just browsing, thanks.", k:"그냥 구경 중이에요, 감사합니다.", u:"점원 응대.", f:"just + -ing (진행형)", b:"just browsing", ng:"I'm just browse, thanks."},
        {t:"Do you have this in a larger size?", k:"이거 더 큰 사이즈 있어요?", u:"사이즈 문의.", f:"have this in + 사이즈/색 · a larger size (a 필요)", b:"in a larger size", ng:"Do you have this on a larger size?"},
        {t:"Is this item still in stock?", k:"이 상품 재고 있나요?", u:"재고 확인.", f:"in stock (the ❌) · still 은 be 동사 뒤", b:"in stock", ng:"Is this item still on stock?"},
        {t:"I'd like to return this and get a refund.", k:"반품하고 환불받고 싶습니다.", u:"환불 요청.", f:"return + 명사 · get a refund", b:"get a refund", ng:"I'd like to return this and get refund."},
        {t:"Could you recommend something that's not too spicy?", k:"너무 맵지 않은 걸 추천해 주시겠어요?", u:"메뉴 추천.", f:"something + that절 · not too + 형용사", b:"not too spicy", ng:"Could you recommend something that isn't too much spicy?"},
        {t:"Do you take credit cards?", k:"카드 되나요?", u:"결제 수단.", f:"take + 결제수단 (accept 보다 구어) · credit cards 복수", b:"take credit cards", ng:"Do you take credit card?"}
      ],
      expressions: [
        {t:"I'll have the same.", k:"저도 같은 걸로 할게요.", u:"주문할 때.", f:"have = 먹다/주문하다 · the same (the 필요)", b:"the same", ng:"I'll have same."},
        {t:"It's on me.", k:"제가 낼게요.", u:"대접할 때.", f:"on me (in ❌)", b:"on me", ng:"It's in me."},
        {t:"Keep the change.", k:"거스름돈은 가지세요.", u:"계산할 때.", f:"keep + the change (the 필요)", b:"the change", ng:"Keep change."},
        {t:"That's too pricey.", k:"너무 비싸요.", u:"가격이 부담될 때.", f:"too + 형용사 (too much pricey ❌)", b:"too pricey", ng:"That's too much pricey."},
        {t:"I'm good, thanks.", k:"괜찮아요, 됐어요.", u:"정중히 거절할 때.", f:"I'm good = 필요 없어요", b:"I'm good", ng:"I'm goods, thanks."},
        {t:"Is it okay to sit here?", k:"여기 앉아도 될까요?", u:"자리 확인.", f:"Is it okay to + 동사원형", b:"okay to sit", ng:"Is it okay to sitting here?"},
        {t:"It's a steal!", k:"완전 싸게 샀네요!", u:"저렴한 물건.", f:"a steal (a 필요)", b:"a steal", ng:"It's steal!"},
        {t:"I'm stuffed.", k:"배불러요.", u:"식사 후.", f:"stuffed (형용사, full 보다 구어)", b:"stuffed", ng:"I'm stuff."},
        {t:"Let's go Dutch.", k:"각자 내요.", u:"각자 계산.", f:"go Dutch (관용구, Dutch 대문자)", b:"go Dutch", ng:"Let's go dutch pay."},
        {t:"Cheers!", k:"건배!", u:"건배할 때.", f:"Cheers (s 복수형 고정)", b:"Cheers", ng:"Cheer!"}
      ]
    },
    "2026-10-18": {
      theme: "일요일 · 건강·여가",
      words: [
        {t:"workout", k:"운동", u:"운동 이야기를 할 때.", f:"명사 workout / 동사 work out (띄움)", c:"a quick workout, work out", o:"I do a workout every morning.", ok:"저는 매일 아침 운동해요.", n:"I do a work out every morning."},
        {t:"stretch", k:"스트레칭하다", u:"몸을 풀 때.", f:"stretch + 부위 · stretch out", c:"stretch your legs", o:"I stretch every morning.", ok:"저는 매일 아침 스트레칭해요.", n:"I stretches every morning."},
        {t:"sleep in", k:"늦잠 자다", u:"주말 늦잠.", f:"sleep in (목적어 없음) · 과거 slept in", c:"sleep in on weekends", o:"I slept in this morning.", ok:"오늘 아침 늦잠 잤어요.", n:"I slept in the bed this morning."},
        {t:"unwind", k:"긴장을 풀다", u:"쉬면서 풀 때.", f:"unwind (목적어 없음) · unwind with + 활동", c:"unwind after work", o:"I unwind by reading.", ok:"저는 책을 읽으며 긴장을 풀어요.", n:"I unwind myself by reading."},
        {t:"appointment", k:"(병원·상담) 예약", u:"병원 예약.", f:"make / have an appointment with + 사람 (a/an 필요)", c:"make an appointment", o:"I have an appointment with the dentist.", ok:"치과 예약이 있어요.", n:"I have a appointment with the dentist."},
        {t:"prescription", k:"처방전", u:"병원·약국.", f:"셀 수 있는 명사 · a prescription for + 약", c:"fill a prescription", o:"I need a prescription for antibiotics.", ok:"항생제 처방전이 필요해요.", n:"I need a prescription of antibiotics."},
        {t:"symptom", k:"증상", u:"몸 상태를 설명.", f:"셀 수 있는 명사 · symptoms 가 흔함", c:"flu symptoms", o:"What are your symptoms?", ok:"증상이 어떠세요?", n:"What is your symptoms?"},
        {t:"recover", k:"회복하다", u:"병이나 피로에서 회복.", f:"recover from + 명사 (recover of ❌)", c:"recover from a cold", o:"I'm recovering from a cold.", ok:"감기에서 회복 중이에요.", n:"I'm recovering of a cold."},
        {t:"binge-watch", k:"몰아서 보다", u:"드라마 몰아보기.", f:"binge-watch + 명사 (하이픈)", c:"binge-watch a series", o:"We binge-watched the whole series.", ok:"시리즈 전체를 몰아서 봤어요.", n:"We binge-watched about the whole series."},
        {t:"errand", k:"심부름, 잡무", u:"볼일을 처리할 때.", f:"run errands (do ❌) · 보통 복수", c:"run errands", o:"I have to run some errands.", ok:"볼일을 몇 개 처리해야 해요.", n:"I have to do some errand."}
      ],
      sentences: [
        {t:"I've been trying to work out three times a week.", k:"일주일에 세 번 운동하려고 해요.", u:"운동 습관.", f:"work out (동사) · three times a week", b:"work out", ng:"I've been trying to workout three times a week."},
        {t:"I'd like to make an appointment for a checkup.", k:"건강검진 예약을 하고 싶습니다.", u:"병원 예약.", f:"make an appointment for + 용건 (an 필요)", b:"make an appointment", ng:"I'd like to make appointment for a checkup."},
        {t:"I've had a sore throat since yesterday.", k:"어제부터 목이 아파요.", u:"증상 설명.", f:"since + 시점 (for + 기간) · have a sore throat", b:"since yesterday", ng:"I've had a sore throat for yesterday."},
        {t:"I'm trying to cut back on caffeine.", k:"카페인을 줄이려고 해요.", u:"습관을 바꿀 때.", f:"cut back on + 명사 · caffeine 은 셀 수 없음", b:"cut back on", ng:"I'm trying to cut back caffeine."},
        {t:"I need to run a few errands this afternoon.", k:"오늘 오후에 볼일이 몇 개 있어요.", u:"할 일.", f:"run errands (run 동사) · a few + 복수명사", b:"run a few errands", ng:"I need to do a few errand this afternoon."},
        {t:"I'm planning to stay in and relax.", k:"집에서 쉴 계획이에요.", u:"주말 계획.", f:"plan to + 동사원형 · stay in = 집에 머물다", b:"stay in", ng:"I'm planning to staying in and relax."},
        {t:"Do you want to go for a walk?", k:"산책하러 갈래요?", u:"산책 제안.", f:"go for a walk (a 필요)", b:"go for a walk", ng:"Do you want to go to walk?"},
        {t:"I slept in this morning.", k:"오늘 아침에 늦잠 잤어요.", u:"늦잠 이야기.", f:"slept in (sleep 의 과거)", b:"slept in", ng:"I sleeped in this morning."},
        {t:"I'm getting over a cold.", k:"감기에서 회복 중이에요.", u:"회복 상태.", f:"get over + 병 · a cold (a 필요)", b:"getting over", ng:"I'm getting over from a cold."},
        {t:"I need to get some fresh air.", k:"바깥 공기를 좀 쐬야겠어요.", u:"기분 전환.", f:"get some fresh air (air 는 셀 수 없음)", b:"fresh air", ng:"I need to get some fresh airs."}
      ],
      expressions: [
        {t:"I'm exhausted.", k:"너무 지쳤어요.", u:"몹시 피곤할 때.", f:"exhausted (tired 보다 강함)", b:"exhausted", ng:"I'm exhaust."},
        {t:"I could use a break.", k:"좀 쉬어야겠어요.", u:"휴식이 필요할 때.", f:"could use + 명사 (need 의 부드러운 말)", b:"could use", ng:"I could use break."},
        {t:"Let's call it a day.", k:"오늘은 여기까지 합시다.", u:"일을 마칠 때.", f:"call it a day (정해진 관용구)", b:"call it a day", ng:"Let's call it day."},
        {t:"I'm under the weather.", k:"몸이 좀 안 좋아요.", u:"컨디션이 안 좋을 때.", f:"under the weather (the 필수)", b:"under the weather", ng:"I'm under weather."},
        {t:"Get well soon!", k:"빨리 나으세요!", u:"문병·위로.", f:"Get well soon (get 동사원형)", b:"Get well", ng:"Be well soon!"},
        {t:"I'm all ears.", k:"잘 듣고 있어요.", u:"이야기를 들어 줄 때.", f:"all ears (관용구)", b:"all ears", ng:"I'm all ear."},
        {t:"Take it easy.", k:"무리하지 마세요.", u:"헤어질 때 / 걱정할 때.", f:"take it easy (it 필수)", b:"Take it easy", ng:"Take easy."},
        {t:"That sounds relaxing.", k:"편안하겠네요.", u:"여가 이야기에 반응.", f:"sound + 형용사 (sound relaxingly ❌)", b:"sounds relaxing", ng:"That sounds relaxingly."},
        {t:"I'm up for it.", k:"저는 좋아요, 하고 싶어요.", u:"제안에 응할 때.", f:"up for + 명사 (it)", b:"up for it", ng:"I'm up to it for."},
        {t:"Let's do it.", k:"해 봅시다.", u:"결정할 때.", f:"do it (it 필수)", b:"do it", ng:"Let's do."}
      ]
    }
  }
};
