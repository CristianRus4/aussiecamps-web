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
- A1, A3, A2 committed (0bd8659, b93a85b, 7b6cb5e; rebased, `npm run check` green 2026-10-21: pt 70/80 AU guides).
- A1 detail: 0bd8659 (5 guides, 265 units; Opus review changed 30; rule units re-read; stamped; content:check green).

## Next
- A4, A5 (AU) and K1 (NZ) drafting. Then A5 (listicles), then NZ batches K1..K8 (inputs prepared in /tmp/ptgap/k1..k8; K order: GSC top, then scheduled listicles K4, then rest).

## Blockers
none

## Status 2026-10-21 (late)
- AussieCamps DONE: pt 80/80 guides (A1 to A5). Rebased on origin/main, `npm run check` green. Commits: 922fc4e, 3f300e2, 97212a7, a732112, bf242c1 (+ progress commits).
- KiwiCamping (branch i18n/k-pt-gap): K1 f69b307, K2 ed05dc8 committed (pt 58/89). K3 drafting, K4 (6 scheduled listicles) drafting; K5..K8 inputs ready in /tmp/ptgap/k5..k8.
- Decisions: weather apps = "app de meteorologia"; descriptions kept to English facts (some under 150 chars); Māori spelling as in English source; brand names not added where the English uses a pronoun (engine count check).
