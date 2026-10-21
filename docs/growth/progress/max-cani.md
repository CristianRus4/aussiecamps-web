# max-cani progress (Max lane, AussieCamps "Can I...?" pages only; KiwiCamping is another session)

Branch `growth/a-cani`. Brief for drafters: `docs/growth/can-i/BRIEF.md`. Per page: `lib/can-i/<slug>.ts` (article + faq), facts in `docs/growth/can-i/<slug>-facts.md`, wired through `lib/can-i-articles.ts`.

## Pages (one per day, publishAt 2026-11-07 to 2026-11-18)
| # | Slug | publishAt | Status |
|---|---|---|---|
| 1 | can-i-camp-on-the-beach-in-australia | 2026-11-07 | drafted, fact-checked, hero and figure done, committed |
| 2 | can-i-drive-on-the-beach-in-australia | 2026-11-08 | drafted, fact-checked, hero and figure done, committed |
| 3 | can-i-camp-in-a-national-park-without-booking-in-australia | 2026-11-09 | drafted, fact-checked, hero and figure done, committed |
| 4 | can-i-collect-firewood-while-camping-in-australia | 2026-11-10 | drafted, fact-checked, hero and figure done, committed |
| 5 | can-i-fly-a-drone-while-camping-in-australia | 2026-11-11 | drafted, fact-checked, hero and figure done, committed |
| 6 | can-i-fish-without-a-licence-while-camping-in-australia | 2026-11-12 | drafted, fact-checked, hero and figure done, committed |
| 7 | can-i-use-a-generator-at-a-campsite-in-australia | 2026-11-13 | drafted and fact-checked; hero and figure in progress |
| 8 | can-i-stay-overnight-at-a-rest-area-in-australia | 2026-11-14 | drafted and fact-checked; hero and figure in progress |
| 9 | can-i-camp-on-aboriginal-land-without-a-permit | 2026-11-15 | drafted and fact-checked; hero and figure in progress |
| 10 | can-i-take-a-campervan-on-the-spirit-of-tasmania | 2026-11-16 | drafted; fact-check and hero in progress |
| 11 | can-i-camp-on-private-land-or-a-farm-in-australia | 2026-11-17 | drafted; fact-check and hero in progress |
| 12 | can-i-take-alcohol-into-restricted-areas-on-an-outback-road-trip | 2026-11-18 | drafted; fact-check and hero in progress |

Topics NOT chosen because a guide already owns them (link instead): sleeping in a car by state (sleeping-in-car-australia), campfires and fire bans (campfires-camping-australia), dogs in national parks (camping-with-dogs-australia), free camping by state (is-free-camping-legal-australia, camping-rules-*), campervan on a car licence (campervan-driving-australia-safety-guide), roadside camping (is-free-camping-legal-australia).

## Steps per page
draft (subagent) -> wire -> fact-check (subagent) -> negation check -> hero (Commons) -> screen figure -> schedule row -> content:check -> commit.

## Done
- All 12 pages drafted, fact-checked (independent sonnet pass per page, official sources; open disagreements listed in each facts file), heroes (Commons, credited in docs/image-sources-can-i.md) and screen figures done, scheduled 2026-11-07 to 2026-11-18, AussieCamps section wording varied per page.
- npm run check passes (50 tests, 0 fail; similarity clean). The similarity audit and the date script only scan site.ts and expanded-articles.ts, so I ran a patched copy including lib/can-i: clean for all 12. build-article-dates.mjs now also reads lib/can-i.

## Next
- Lane complete; orchestrator review and merge.

## Notes for the orchestrator
- scripts/audit-article-similarity.mjs (protected) does not read lib/can-i: a follow-up should add it.
- tests/rendered-html "related guides ... not all from one category" fails for best-money-saving-travel-apps-australia once all listicles are live (BUILD_DATE=2026-11-06, none of my pages): pre-existing, not from this lane.
- New pages are English only; translations follow.

## Blockers
- none
