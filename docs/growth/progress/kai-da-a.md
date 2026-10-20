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
- B2 partial: road-signs, caravan-park-vs-holiday-park, towing done (24e1b6d).

## Next
- B2b (camping-rules-northern-territory, melbourne-to-adelaide) drafting; B3a/B3b drafting.

## Blockers / notes
- none
