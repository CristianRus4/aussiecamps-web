# ava-i18n-a-list-2 progress (Ava)

Lane: translate the five scheduled AussieCamps listicles into fr, es, it, pt (one language at a time,
all five pages), so each goes live with the English. Branch `i18n/a-list-2`, worktree
`~/.t3/worktrees/aussiecamps-web/ava-i18n-a-list-2`. Never pushed; the orchestrator merges.

Pages: wikicamps-alternatives, campermate-alternatives, best-fuel-price-apps-australia,
best-road-trip-planner-apps-australia, best-free-camping-apps-australia (652 units each language).

## Method (scratch in /tmp/ava-al2, recreate if lost)
- `mkinput.mjs <code> <catalog>`: engine packet per page -> `in-<code>-<slug>.json`.
- `BRIEF.md`: subagent brief. `check.mjs <values>`: numbers, links, tags, dashes, offline-map wording.
- Sonnet (high) drafts in 3 chunks, Opus (medium) native review + negation check, then apply with the
  engine (catalogs: es `aussiecamps-website-es`, fr `aussiecamps-website-fr`, it/pt `aussiecamps-website`),
  `npm run translations:stamp -- --locale <code>`, `npm run content:check`.

## Order and status
- [x] fr: committed 0c477e6 (652 units, Opus review + negation table done, stamped, content:check and npm run check pass)
- [x] es: committed (652 units, Opus review + negation table done, lane keys stamped in new meta/es.json via /tmp/ava-al2/stamp-keys.mjs, content:check passes)
- [x] it: committed (652 units, Opus review + negation table done, lane keys stamped in new meta/it.json, content:check passes)
- [x] pt: committed (652 units; drafted by Sonnet, reviewed unit by unit by the lane itself with a negation read because of the overnight no-subagent rule; stamped; content:check passes)

## Blockers / notes
- es and it have no stamp file yet (meta/es.json, meta/it.json absent); after applying, stamp only this lane's keys so the other es/it guides are not silently accepted.
- English source notes for the orchestrator: campermate-alternatives sections[0].body[0] says "downloaded offline maps" (competitor feature; translations say downloaded maps); free-camping sections[1].body[0] "those places are different things" is vague; the "Pass A$2.99 to A$9.99" figure is the in-app purchase range.
- es English-source notes: free-camping BookEasy free list omits B&Bs while the other pages include them; water count reads "drinking water points" on wikicamps and "water points" on campermate; "free to browse and book" for BookEasy stays is ambiguous.
- it English-source notes for the orchestrator (translated as written): free-camping sections[1].body[2] says "The download, map and search are free", which goes beyond the Pass boundary (only BookEasy stays and tours are free); fuel page: table says an NRMA membership is enough for the discount while the body says it is sold separately at A$5 a month, Ampol "stations" vs "Ampol Foodary", Victoria prices are described as user-reported in one place and only in Petrol Spy's listing in another; road trip table: ExplorOz map "from A$59.99 a year" while the 4-year edition at A$79.99 is cheaper per year; free-camping Queensland rest-area FAQ says vehicles may "stop" up to 20 hours under a sleeping question.
- pt: free-camping page: "A versão atual" fixed to "Os dados atuais" (data, not version); title kept within about 65 characters.
