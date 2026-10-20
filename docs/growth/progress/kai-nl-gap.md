# kai-nl-gap progress (Dutch gaps, both sites)

Lane: kai-nl-gap (Kai account). Branches `i18n/a-nl-gap` (AussieCamps worktree `~/.t3/worktrees/aussiecamps-web/kai-nl-gap`) and `i18n/k-nl-gap` (KiwiCamping worktree `~/.t3/worktrees/kiwicamping-web/kai-nl-gap`).
Working files in `/tmp/kai-nl-gap` (AGENT-BRIEF.md, REVIEW-BRIEF.md, mkbatch.py, qa.py, ap.sh, batches/, out/, rev/). Rebuild packets with
`translation-engine packet --config docs/translation.config.json --locale nl --output /tmp/kai-nl-gap/todo{A,K}.json`.

## Gaps at start (2026-10-21)
- AussieCamps nl 70/80 guides. Missing: 5 scheduled listicles (best-caravan-rv-apps-australia, best-apps-working-holiday-australia, best-weather-apps-camping-australia, best-money-saving-travel-apps-australia, hipcamp-alternatives) and 5 road trips (queensland-outback-way, south-west-wa-camping-loop, victoria-high-country-camping, kangaroo-island-camping-guide, blue-mountains-camping-weekend). None has GSC impressions, so listicles go first (publish order), then road trips.
- KiwiCamping nl 48/89 guides. 41 missing, in GSC-impression order: east-cape-road-trip, coromandel-rotorua-road-trip, northland-cape-reinga-camping-route, arthurs-pass-camping-route, taranaki-forgotten-world-highway, picton-kaikoura-christchurch-route, wanaka-haast-pass-route, nelson-abel-tasman-golden-bay, banks-peninsula-camping-weekend, bay-of-islands-camping-week, rakiura-stewart-island-camping-guide, new-zealand-three-week-campervan-route, christchurch-tekapo-aoraki-road-trip, then 0-impression: 8 more road trips, scheduled listicles and legacy guides (see packet).

## Done
- AU: best-caravan-rv-apps-australia, best-apps-working-holiday-australia (b4831a9); queensland-outback-way, south-west-wa-camping-loop, victoria-high-country-camping, kangaroo-island-camping-guide, blue-mountains-camping-weekend (1d03e06). AU nl 77/80.

## Next
- AU: best-weather-apps-camping-australia, best-money-saving-travel-apps-australia, hipcamp-alternatives (drafted, in review).
- NZ batches (in /tmp/kai-nl-gap/batches): k1 east-cape, coromandel-rotorua, northland, arthurs-pass, taranaki; k2 picton-kaikoura, wanaka-haast, nelson, banks-peninsula, bay-of-islands; k3 rakiura, three-week route, christchurch-tekapo, wikicamps-alternatives, best-campervan-apps; k4 weather, fuel-price, working-holiday, money-saving apps; then remaining road trips, legacy guides.

## Blockers / notes
- none
