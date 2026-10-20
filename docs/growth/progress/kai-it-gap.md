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
| B3a | listicles caravan-rv + working-holiday | done (1a3c3b1) |
| B3b | listicles weather + money-saving | done (c960f74) |
| B3c | hipcamp-alternatives | done (331673c) |
| B4 | tasmania-camping-loop, sydney-south-coast-camping, queensland-outback-way, south-west-wa-camping-loop, victoria-high-country-camping | done (1d513ec) |
| B5 | kangaroo-island-camping-guide, blue-mountains-camping-weekend | done (1a3c3b1) |

## Done
- KiwiCamping Handoff 3 (branch i18n/k-it-gap): K0, K2, K1 committed (ec63c9c tip), `npm run check` green. Italian 58/89 guides.
- AussieCamps COMPLETE: Italian 80/80 guides (B3a/B3b/B3c/B5 added after Handoff 1), `npm run check` green (Handoff 2, branch i18n/a-it-gap).
- B1, B2, B4 (15 road-trip guides) applied, stamped, `npm run check` green (Handoff 1). AussieCamps Italian: 73/80 guides.

## Next
- KiwiCamping (branch i18n/k-it-gap, worktree kiwicamping-web/kai-it-gap): batches K1..K10 below, plus two protected-term fixes
  (doc-campsite-rules sections[6].body[0] needs 'DOC'; new-zealand-travel-cost-2026 title needs 'NZD').
- B3a/B3b/B3c listicles, B5 (finishes AussieCamps), then KiwiCamping (41 guides + 2 protected-term fixes; order in this file once started)

## Batches KiwiCamping (GSC impressions, then listicles in publish order, then the rest)
| Batch | Guides | State |
|---|---|---|
| K0 | protected-term fixes (doc-campsite-rules, travel-cost title) + 'datato' wording | done (73c6c8c, k-it-gap) |
| K1 | best-nz-camping-apps, where-to-camp-in-new-zealand, east-cape-road-trip, coromandel-rotorua-road-trip, northland-cape-reinga-camping-route | done (ec63c9c, k-it-gap) |
| K2 | arthurs-pass-camping-route, taranaki-forgotten-world-highway, picton-kaikoura-christchurch-route, wanaka-haast-pass-route, nelson-abel-tasman-golden-bay | done (f77280b, k-it-gap) |
| K3 | banks-peninsula-camping-weekend, bay-of-islands-camping-week, rakiura-stewart-island-camping-guide, new-zealand-three-week-campervan-route, christchurch-tekapo-aoraki-road-trip | review |
| K4 | wikicamps-alternatives, best-campervan-apps-new-zealand | drafting |
| K5 | best-weather-apps-new-zealand, fuel-price-apps-new-zealand | drafting |
| K6 | working-holiday-apps-new-zealand, money-saving-travel-apps-new-zealand | queued |
| K7 | doc-campsites-new-zealand-guide, self-contained-campervan-green-warrant, camping-fees-new-zealand-2026, freedom-camping-rules-new-zealand, freedom-camping-new-zealand-guide | queued |
| K8 | scenic-campsites-new-zealand, holiday-parks-new-zealand-guide, new-zealand-camping-packing-list, camping-wastewater-rubbish-new-zealand, responsible-camping-new-zealand | queued |
| K9 | best-time-camping-new-zealand, campfire-rules-new-zealand, two-week-camper-itinerary-new-zealand, wellington-wairarapa-camping-loop, north-island-two-week-road-trip | queued |
| K10 | west-coast-south-island-road-trip, queenstown-glenorchy-camping, southern-scenic-route-camping, fiordland-camping-road-trip, south-island-two-week-road-trip | queued |
(KiwiCamping progress is also recorded here; no progress file is added on i18n/k-it-gap.)

## Blockers / notes
- English source issues found are in /tmp/kai-it-gap/out/*.notes.md (inconsistent distances in AU east-coast and Melbourne-Adelaide guides; WHV table
  'third Work and Holiday 417' mixes 417 and 462; KI 2020 vs 2019-2020 fire heading; others minor). Translated as written.
- none
