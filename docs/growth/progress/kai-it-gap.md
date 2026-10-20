# kai-it-gap progress (Italian gaps, both sites)

Lane: kai-it-gap (Kai account). Branches `i18n/a-it-gap` (AussieCamps) and `i18n/k-it-gap` (KiwiCamping).
Worktrees: `~/.t3/worktrees/aussiecamps-web/kai-it-gap` and `~/.t3/worktrees/kiwicamping-web/kai-it-gap`.
Working files (not committed): `/tmp/kai-it-gap` (AGENT-BRIEF-*.md, REVIEW-BRIEF-*.md, mkbatch.mjs, merge.mjs, lint.mjs,
work/, out/). Rebuild packets with
`translation-engine packet --config docs/translation.config.json --locale it --output /tmp/kai-it-gap/todo-{a,k}.json`.
This file lives on `i18n/a-it-gap` only.

## Gap analysis (2026-10-21)
AussieCamps: 22 of 80 guides have no Italian (1679 units): 17 road-trip guides + 5 scheduled listicles
(best-caravan-rv-apps, best-apps-working-holiday, best-weather-apps, best-money-saving-travel-apps, hipcamp-alternatives).
The first five listicles (wikicamps ... best-free-camping-apps) are already Italian.
KiwiCamping: 41 guides with no Italian (2322 units) plus 2 guides with a protected-term issue
(doc-campsite-rules, new-zealand-travel-cost-2026).

## Batches AussieCamps (GSC impressions first, then listicles in publish order, then the rest)
| Batch | Guides | State |
|---|---|---|
| B1 | brisbane-to-cape-tribulation, great-ocean-road-camping-guide, melbourne-to-adelaide-coastal-route, perth-to-broome-road-trip, east-coast-road-trip-sydney-cairns | done (77cc272) |
| B2 | sunshine-coast-hinterland-camping, gibb-river-road-camping, nullarbor-crossing-camping-guide, flinders-ranges-camping-guide, red-centre-way-camping | done (3c2dddf) |
| B3a | listicles caravan-rv + working-holiday | review |
| B3b | listicles weather + money-saving | drafting |
| B3c | hipcamp-alternatives | queued |
| B4 | tasmania-camping-loop, sydney-south-coast-camping, queensland-outback-way, south-west-wa-camping-loop, victoria-high-country-camping | done (1d513ec) |
| B5 | kangaroo-island-camping-guide, blue-mountains-camping-weekend | drafting |

## Done
- B1, B2, B4 (15 road-trip guides) applied, stamped, `npm run check` green (Handoff 1). AussieCamps Italian: 73/80 guides.

## Next
- B3a/B3b/B3c listicles, B5 (finishes AussieCamps), then KiwiCamping (41 guides + 2 protected-term fixes; order in this file once started)

## Blockers / notes
- none
