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
- [ ] fr: drafting
- [ ] es
- [ ] it
- [ ] pt

## Blockers / notes
- none yet
