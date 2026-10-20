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
- [ ] it: Sonnet drafting in 3 chunks (/tmp/ava-al2/vals-it-{A,B,C}.json), then Opus review
- [ ] pt

## Blockers / notes
- es and it have no stamp file yet (meta/es.json, meta/it.json absent); after applying, stamp only this lane's keys so the other es/it guides are not silently accepted.
- English source notes for the orchestrator: campermate-alternatives sections[0].body[0] says "downloaded offline maps" (competitor feature; translations say downloaded maps); free-camping sections[1].body[0] "those places are different things" is vague; the "Pass A$2.99 to A$9.99" figure is the in-app purchase range.
- es English-source notes: free-camping BookEasy free list omits B&Bs while the other pages include them; water count reads "drinking water points" on wikicamps and "water points" on campermate; "free to browse and book" for BookEasy stays is ambiguous.
