# ava-a-costs progress (Ava account)

Lane: ship `growth/a-content-costs` (five AussieCamps cost pages) with every live translation in step.
Branch `release/a-costs`, worktree `~/.t3/worktrees/aussiecamps-web/ava-a-costs`.

## Done
- Merged `growth/a-content-costs` (clean merge, no conflicts; en.json and locale config regenerate to the same bytes).
- Changed English units vs origin/main: public-transport 19+3 new (sources), grocery 23+1, drinks 26+2, domestic-flight 22, eating-out 18
  (116 units per locale, 9 live locales: de es fr it nl pt da nb sv).

## Working files (/tmp/a-costs, recreate with the scripts if lost)
- `diff.mjs` -> `units.json` (changed keys), `mkpackets.mjs` -> `packets/<code>.json`, `BRIEF.md` (drafter brief),
  `tools/selfcheck.mjs <code>` (parity, anchors, brand, em dash), drafts in `out/<code>.json` (engine apply format).

## Next
- Draft (sonnet high) per locale, native review (opus medium), engine apply dry-run + apply, content:check, translations:stamp, npm run check.

## Blockers
- None.
