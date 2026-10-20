# ava-tools-i18n-a progress (Ava account worker lane)

Task: translate the AussieCamps `tools` namespace (`tools.common` 14 + five calculators, 116 units) into es, fr, it, nl, pt, nb, sv,
one language at a time (de and da are the completeness reference). Branch `i18n/a-tools`, worktree
`~/.t3/worktrees/aussiecamps-web/ava-tools-i18n-a`. Never pushed; the orchestrator merges.

## Pipeline
- Working files in `/tmp/tools-i18n` (recreate if lost): `en-tools.json` (flat key -> English, from
  `translation-engine packet --all`), `BRIEF.md` (drafter brief), `lint.py <values>` (keys, placeholders, numbers, em dash),
  `negcheck.py <values>` (EN/TR pairs with rule words for the negation check), `<code>-values.json` (engine apply input).
- Draft: sonnet high; native review: opus medium; then `translation-engine apply` (dry run first) with
  `--config docs/translation.config.json`, then `npm run translations:stamp -- --locale <code>`.
- Catalog ids: es `aussiecamps-website-es`, fr `-fr`, sv `-sv`, nb `-nb`; it, nl, pt use `aussiecamps-website`.
- Currency, number and date notation follow each locale's style guide (es/pt/nb/sv "35 AUD", nl "A$ 35", fr "$ AU"/AUD, it per guide),
  which differs from the task text's "A$"; the style guides are the contract.

## Done
- Setup, brief, lint scripts.
- es (0b635db), fr (4b67ce9), it (09005ca), nl (ea29616), pt (8de685e), nb (68babd6), sv (06f4d60): 116 units each, drafted
  (sonnet high), native review (opus medium), negation check, applied, stamped (0 stale, 0 unstamped).
  `npm run check` passed three times; /<code>/tools/ (hub and five calculators) are `index, follow` and in sitemaps/<code>.xml
  for all seven locales.

## Next
- Lane complete after the final handoff.

## Notes
- The engine rejects a unit whose English holds a protected term (AUD) if the translation drops it: the currency-converter metaTitle must keep "AUD".

## Blockers
- None.
