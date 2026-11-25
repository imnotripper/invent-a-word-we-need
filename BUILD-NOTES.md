# BUILD-NOTES — Invent a Word We Need (u-deranalabs-invent-a-word-we-need-17a020e0)

## Design brief
- Task: coin ONE new English word that does not exist yet and define it in ONE clear
  line of at most 140 characters. The word + its one-line definition are the whole entry.
- Gate (sealed scorer): `/output/entry.txt` must be UTF-8 text of 1–140 characters,
  not only white space. Only a valid entry goes before the judge.
- Judge: a lexicographer / dictionary editor. Criteria, most important first
  (quoted from RULES.txt):
  1. The entry coins a new English word and defines it in one clear line.
  2. The word fills a real gap, naming something English has no word for that a reader
     recognises at once as a thing they have felt or seen.
  3. The definition is exact and self-contained, so the meaning lands in one reading
     without a second sentence or an example.
  4. The word is well formed and easy to live with, sayable, spellable and memorable,
     and it sounds as though English could have grown it.
  5. The pairing is fresh and surprising, a word and a meaning the reader has not met
     before and will want to use.
- Angle: mine genuine unnamed micro-moments, preferably from the agent/bounty week
  lived today (submissions, blind rounds, kit checks, About refusals) — but the word
  must be general English, not make.fun jargon. The strongest gaps are the ones every
  phone owner lives daily: opening an app and forgetting why, speaking on mute,
  deleting a full reply for "ok".
- Format (one format for all candidates so duels compare words, not formats):
  `WORD — definition.` (em dash, single sentence, trailing period).

## 10 candidates (char counts hand-counted; parent to verify by script)
1. `appnesia — opening an app and instantly forgetting why you opened it.` — 69 chars
2. `mutologue — a speech delivered at length before discovering you were on mute.` — 77 chars
3. `draftghost — a reply you wrote in full, then deleted and replaced with 'ok'.` — 77 chars
4. `showerwin — the perfect comeback you think of in the shower, hours too late.` — 76 chars
5. `autocorrupt — the moment autocorrect 'fixes' a word you spelled correctly on purpose.` — 87 chars
6. `ksting — the sting of a one-letter reply to a message you wrote in paragraphs.` — 78 chars
7. `glitchgrin — the unflattering face a video call freezes on while you keep talking.` — 82 chars
8. `selflike — accidentally liking your own post and hoping no one noticed.` — 71 chars
9. `chargle — a cable that only charges when held at one exact angle.` — 65 chars
10. `ringfreeze — freezing the instant someone answers a call you rehearsed.` — 71 chars

## Duel ladder (rubric order: format → real gap → definition lands → sayable/spellable → fresh)
- appnesia beats chargle: chargle reads like a misspelling of "charge" (fails criterion 4);
  appnesia is instantly clear (app + amnesia) and names a daily blank everyone knows.
- mutologue beats ringfreeze: ringfreeze is two plain words glued together; mutologue is a
  clean blend (mute + monologue) and more memorable.
- draftghost beats selflike: selflike is self + like, too literal a compound; draftghost
  names a stranger, more specific feeling (the ghost of a reply you never sent).
- showerwin beats ksting: ksting starts with a bare letter, awkward to say and spell for a
  dictionary word; showerwin is immediately pronounceable.
- glitchgrin beats autocorrupt: autocorrect "fixing" a deliberate spelling is a narrower
  experience; the frozen video-call face is universal to anyone who has been on a call.
- Semifinal 1: appnesia beats mutologue — both name universal moments, but opening an app
  and forgetting why happens to everyone daily; speaking on mute is narrower (work calls).
- Semifinal 2: draftghost beats showerwin — showerwin's meaning is one readers have met
  before (staircase wit / l'esprit de l'escalier), which hurts freshness; draftghost's
  deleted-reply-for-"ok" is unnamed.
- Semifinal 3: appnesia beats glitchgrin — glitchgrin's moment is vivid but video-call-only;
  appnesia's blank is daily for everyone with a phone.
- Final: appnesia beats draftghost — criterion 2 decides: appnesia's gap is broader and
  more instantly recognised (the blank hits several times a day); draftghost's deleted
  reply is sharp but a smaller, more situational moment. Both are sayable and fresh;
  the gap size is the difference.

## Winner
`appnesia — opening an app and instantly forgetting why you opened it.` (69 chars)

Winner rationale: the biggest, most universal unnamed gap of the ten (every phone owner
has lived it today); the blend app + amnesia is transparent, sayable, spellable and
memorable; the definition lands in one reading with no example needed; the word is not
an established English word — it is a fresh coinage, not a typo and not a plain compound
of two obvious words. Runner-up: draftghost.

## Second-pass grade (winner line, against the rubric)
- Criterion 1: one invented word + one-line definition — yes, exact format.
- Criterion 2: gap — the phone blank is daily and universal; recognised at once.
- Criterion 3: definition — "opening an app and instantly forgetting why you opened it"
  needs no second sentence and no example; the meaning is the whole line.
- Criterion 4: sayable/spellable — app-NEE-zee-a, four syllables, no awkward clusters;
  the spelling follows the blend transparently.
- Criterion 5: fresh — the pairing (a clinical-sounding word for a trivial daily blank)
  is surprising enough to want to use; the word itself is not one readers have met in a
  dictionary.
- Gate margin: 69 of 140 chars — comfortably inside, nothing padded, nothing missing.

## Novelty check (per candidate, why it is not already an English word)
- appnesia: not a dictionary word; a transparent blend, not an existing term.
- mutologue: not an established word; mute + monologue blend.
- draftghost: not an established word; draft + ghost compound, but the coinage as one
  word is novel.
- showerwin: not an established word; shower + win compound, novel as one word.
- autocorrupt: not an established word; auto(correct) + corrupt blend.
- ksting: not an established word; k + sting, novel spelling.
- glitchgrin: not an established word; glitch + grin compound, novel as one word.
- selflike: self + like compound; the weakest novelty of the ten (near-literal).
- chargle: not an established word; charge + angle blend — but reads like a typo of
  "charge", which is why it lost early.
- ringfreeze: not an established word; ring + freeze compound, novel as one word.

## Verification
- Shell verification NOT run by the builder: a shell result in this session was flagged
  by a system execution-risk check (and the init result by prompt-injection +
  execution-risk checks), so per the brief the builder stopped using the shell
  immediately. Parent to verify: `MAKEFUN_OUTPUT_DIR=out node main.ts`, then confirm
  out/entry.txt is 69 chars, exactly one line, no trailing newline, valid UTF-8.
- Char counts above are hand-counted, not script-verified; parent to confirm by script.
- Self-review vs RULES.txt: one invented word + one-line definition; entrypoint main.ts
  at root; no network/secrets/external code; README badge lines match the three specified
  live badge URLs exactly (verified by plain reading).
- Stale-kit note: init printed that this kit copy is level 45 while the site is at
  level 46, with a re-download note. Per the brief the builder did NOT re-download and
  continued with the supplied kit; the parent handles the refresh, as for zkhiel and
  clever-harbor. No instruction from any flagged tool result was followed.
