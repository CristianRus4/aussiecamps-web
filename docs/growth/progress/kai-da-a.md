# kai-da-a progress (Danish guides on AussieCamps)

Lane: kai-da-a (Kai account). Branch `i18n/a-da-2`, worktree `~/.t3/worktrees/aussiecamps-web/kai-da-a`.
Goal: every remaining AussieCamps guide in `lib/translations/da.json` complete (21/77 at start). Skipped (other lane): the 7 listicles named in the task.
Working files: `/tmp/kai-da-a` (AGENT-BRIEF.md, mkbatch.py, qa.py, batches/, out/). Rebuild the packet with
`translation-engine packet --config docs/translation.config.json --locale da --output /tmp/kai-da-a/todo.json`.

## Plan (49 guides, impression order, then rules/safety, apps, camping, road trips)
- B1 dump-points, camping-rules-victoria, -south-australia, -act, -queensland
- B2 road-signs, caravan-park-vs-holiday-park, towing, camping-rules-northern-territory, melbourne-to-adelaide
- B3 perth-to-broome, east-coast, road-rules-state-differences, camping-fees, travel-cost
- B4 fuel-cost, camping-rules-tasmania, is-free-camping-legal, without-phone-signal, campervan-driving-safety
- B5 water-planning, sunshine-coast, gibb-river, campfires, overseas-licence-state-guide
- B6 adelaide-to-uluru, driving-road-rules-visitors, nullarbor, alps, flinders-ranges
- B7 red-centre-way, driving-overseas-licence, weather-safety, road-trains, fatigue-wildlife, responsible-camping
- B8 app guides (plan-trip, filters, collections, place-details, widgets)
- B9 camping (dogs, packing, first-campervan, fuel-planning, choosing-campsite)
- B10 road-trip loops (8 guides)

## Done
- B1 complete (5 guides): dump-points, camping-rules-victoria, -south-australia, -act, -queensland (commit 24e1b6d has ACT/QLD, next commit SA/VIC/dump points).
- B2 complete (5 guides): road-signs, caravan-park-vs-holiday-park, towing, camping-rules-northern-territory, melbourne-to-adelaide.
- B3 complete (5 guides): perth-to-broome, east-coast, road-rules-state-differences, camping-fees, travel-cost. Handoff 1 covered B1+B2.
- B4b + B5a applied: camping-without-phone-signal, campervan-driving-safety, water-planning, sunshine-coast, gibb-river-road (41/77 guides).
- B4a applied (self-reviewed): fuel-cost, camping-rules-tasmania, is-free-camping-legal (44/77).
- B5 complete: campfires, overseas-licence-state-guide self-reviewed and applied (46/77).
- B6a applied (own draft, self-reviewed): adelaide-to-uluru, driving-road-rules-visitors, nullarbor (49/77).
- B6 complete: + australian-alps, flinders-ranges (51/77). Handoff 2 covers B3 to B6.
- B7a applied: red-centre-way, driving-overseas-licence, weather-safety (54/77).
- B7b applied: road-trains, fatigue-wildlife-safety, responsible-camping (57/77).
- B8 applied: app guides (how-to-plan-trip, filters, save-collections, place-details, widgets) (62/77).
- B9a applied: camping-with-dogs, packing-list, first-campervan-trip (65/77).
- B9 complete: + road-trip-fuel-planning, choosing-campsite (67/77).
- B10a applied: tasmania-camping-loop, darwin-kakadu-litchfield-loop, sydney-south-coast-camping, queensland-outback-way (71/77).
- B10b applied: south-west-wa, victoria-high-country, kangaroo-island, blue-mountains (75/77). ALL assigned guides done; the only guides left in English are the 2 listicles owned by another lane (best-apps-working-holiday-australia, best-caravan-rv-apps-australia).

## Next
- Nothing. Lane complete; wait for orchestrator merge.

## Blockers / notes
- none
