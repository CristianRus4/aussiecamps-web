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

- Drafts for all 9 locales written (sonnet high), 114 units each, selfcheck 0 errors; pre-review copies in /tmp/a-costs/drafts.
- Native review (opus medium) running on /tmp/a-costs/out (REVIEW.md brief).

## Next
- engine apply dry-run + apply, content:check, translations:stamp, npm run check.

## Decisions
- Stamps: es and it have no lib/translations/meta file yet (their lanes stamp once at the end), so they cannot go stale and are not stamped here, to avoid creating meta files those lanes own. de fr nl pt da nb sv are stamped.
- Dates: lib/article-dates.json is regenerated after the translation commit; the five cost pages (English and locale dates) are expected to move, nothing else.

## Blockers
- None.
