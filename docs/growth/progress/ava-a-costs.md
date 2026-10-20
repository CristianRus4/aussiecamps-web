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
- Native review (opus medium) done for all 9; cross-locale fixes: Perth "per 3-hour journey" = fare valid 3 hours; "rarely" not hardened.
- Negation check done (29 rule/warning units x 9 locales); sv fixes (confirmed-otherwise clause, "på Tasmania").
- Engine apply: 1026 accepted, 0 rejected; changes confined to the five pages. Commit 7f8c3ce.
- content:check: parity clean, 0 stale for every live locale. Stamped de fr nl pt da nb sv (normal mode also stamped strings that
  earlier merges re-translated without stamping, mostly best-camping-app-australia). Re-stamped after review: grocery Aldi tip
  (fr nb sv), de caravan-park-vs-holiday-park sections[1].tips[1] and camping-fees-australia-2026 sections[4].tips[2].
- article-dates.json regenerates unchanged (cost pages already dated 2026-10-20).

## Next
- npm run check, then hand off.

## English source notes for the content lane
- Drinks page: pub beer is "$7 to $16" in title/description/intro but "$7.15 to $16" in faq[0][1].
- Flights page: intro says "Uluru", price-table row says "Uluṟu".
- Transport table: "per 3-hour journey" is ambiguous in English (fare valid 3 hours); translations say "valid for 3 hours".

## Decisions
- Stamps: es and it have no lib/translations/meta file yet (their lanes stamp once at the end), so they cannot go stale and are not stamped here, to avoid creating meta files those lanes own. de fr nl pt da nb sv are stamped.
- Dates: lib/article-dates.json is regenerated after the translation commit; the five cost pages (English and locale dates) are expected to move, nothing else.

## Blockers
- None.
