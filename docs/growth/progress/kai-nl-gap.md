# kai-nl-gap progress (Dutch gaps, both sites)

Lane: kai-nl-gap (Kai account). Branches `i18n/a-nl-gap` (AussieCamps worktree `~/.t3/worktrees/aussiecamps-web/kai-nl-gap`) and `i18n/k-nl-gap` (KiwiCamping worktree `~/.t3/worktrees/kiwicamping-web/kai-nl-gap`).
Working files in `/tmp/kai-nl-gap` (AGENT-BRIEF.md, REVIEW-BRIEF.md, mkbatch.py, qa.py, ap.sh, batches/, out/, rev/). Rebuild packets with
`translation-engine packet --config docs/translation.config.json --locale nl --output /tmp/kai-nl-gap/todo{A,K}.json`.

## Gaps at start (2026-10-21)
- AussieCamps nl 70/80 guides. Missing: 5 scheduled listicles (best-caravan-rv-apps-australia, best-apps-working-holiday-australia, best-weather-apps-camping-australia, best-money-saving-travel-apps-australia, hipcamp-alternatives) and 5 road trips (queensland-outback-way, south-west-wa-camping-loop, victoria-high-country-camping, kangaroo-island-camping-guide, blue-mountains-camping-weekend). None has GSC impressions, so listicles go first (publish order), then road trips.
- KiwiCamping nl 48/89 guides. 41 missing, in GSC-impression order: east-cape-road-trip, coromandel-rotorua-road-trip, northland-cape-reinga-camping-route, arthurs-pass-camping-route, taranaki-forgotten-world-highway, picton-kaikoura-christchurch-route, wanaka-haast-pass-route, nelson-abel-tasman-golden-bay, banks-peninsula-camping-weekend, bay-of-islands-camping-week, rakiura-stewart-island-camping-guide, new-zealand-three-week-campervan-route, christchurch-tekapo-aoraki-road-trip, then 0-impression: 8 more road trips, scheduled listicles and legacy guides (see packet).

## Done
(nothing yet)

## Next
- AU batch 1 (5 listicles) and batch 2 (5 road trips): draft (sonnet high) -> native review (opus medium) -> apply -> stamp -> content:check -> commit.

## Blockers / notes
- none
