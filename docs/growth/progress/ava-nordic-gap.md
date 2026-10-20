# ava-nordic-gap progress (de, da, sv, nb gaps on AussieCamps, then KiwiCamping)

Lane: ava-nordic-gap (Ava account). Branches `i18n/a-nordic-gap` (aussiecamps-web) and `i18n/k-nordic-gap` (kiwicamping-web).
Worktrees `~/.t3/worktrees/aussiecamps-web/ava-nordic-gap` and `~/.t3/worktrees/kiwicamping-web/ava-nordic-gap`.
Working files (not in git): `/tmp/ava-ng` (BRIEF.md, REVIEW.md, mkbatch.py, qa.py, ap.sh, gaps.py; per-site dirs a/ and k/ with batches, out, rev).
Gap finder: `python3 /tmp/ava-ng/gaps.py <worktree> <out.json>` (structural comparison with en.json, same rules as `isArticleComplete`).
Packets: `translation-engine packet --config docs/translation.config.json --locale <code> --output <new path>` (it fails if the output file exists).

## Gaps (2026-10-21, after rebasing on origin/main c866810 / 018c804)
- Other lanes (kai-*-a, kai-*-k) had already merged the road-trip, how-to and app guides in all four locales to both repos' main by the time this lane started drafting. Duplicate drafts for nb road trips and how-to guides were dropped (kept in branch `backup/a-nordic-gap-pre-rebase`, not for merge).
- What was really left: the scheduled listicles. AussieCamps: five per locale (best-caravan-rv-apps, best-apps-working-holiday, best-weather-apps-camping, best-money-saving-travel-apps, hipcamp-alternatives) in de, da, sv, nb. KiwiCamping: six per locale (wikicamps-alternatives, best-campervan-apps, best-weather-apps, fuel-price-apps, working-holiday-apps, money-saving-travel-apps) in de, da, sv, nb, plus one unit of doc-campsite-rules in de.
- Search Console: no impressions for any of these guides.

## Done
- AussieCamps COMPLETE: the five listicles in de, sv, da, nb applied, native-reviewed (opus), stamped. All four locales are 80/80 guides.

## Next
- KiwiCamping: six listicles + 1 unit in de, six in da, sv, nb (drafting de, da, sv; nb queued), then review, apply, stamp, commit.

## Blockers / notes
- none
