# ava-pt-gap progress (Ava)

Lane: fill every remaining European Portuguese gap on AussieCamps (branch `i18n/a-pt-gap`) and then
KiwiCamping (`i18n/k-pt-gap`). Never pushed; the orchestrator merges.

Gap finder (scratch in /tmp/ptgap, rebuildable): `python3 /tmp/ptgap/gap.py <worktree>` compares
article structure in en.json against pt.json (mirror of `isArticleComplete`).
Method: `mkinput.mjs` (engine packet -> in-<slug>.json), Sonnet-high drafts (BRIEF.md), Opus-medium
native review + negation table (REVIEW-BRIEF.md), apply with the engine, lint (`check.mjs`),
`npm run translations:stamp -- --locale pt`, `npm run content:check`, commit.

## AussieCamps gaps at start (25 guides, all missing)
Order (GSC impressions first, then scheduled listicles in publish order, then the rest):
- Batch A1: brisbane-to-cape-tribulation, great-ocean-road-camping-guide, melbourne-to-adelaide-coastal-route, perth-to-broome-road-trip, east-coast-road-trip-sydney-cairns
- Batch A2: gibb-river-road-camping, sunshine-coast-hinterland-camping, adelaide-to-uluru-road-trip, nullarbor-crossing-camping-guide, australian-alps-camping-route
- Batch A3: flinders-ranges-camping-guide, red-centre-way-camping, tasmania-camping-loop, darwin-kakadu-litchfield-loop, sydney-south-coast-camping
- Batch A4: queensland-outback-way, south-west-wa-camping-loop, victoria-high-country-camping, kangaroo-island-camping-guide, blue-mountains-camping-weekend
- Batch A5 (scheduled listicles): best-caravan-rv-apps-australia, best-apps-working-holiday-australia, best-weather-apps-camping-australia, best-money-saving-travel-apps-australia, hipcamp-alternatives

## KiwiCamping gaps at start: 41 guides (listed by gap.py when we get there)

## Done
(nothing committed yet)

## Next
- A1..A3 drafting in parallel (sonnet high), then Opus review per batch.

## Blockers
none
