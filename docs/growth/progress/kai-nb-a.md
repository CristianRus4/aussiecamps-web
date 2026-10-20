# kai-nb-a progress (Norwegian Bokmål, AussieCamps guides)

Lane: Kai account, branch `i18n/a-nb-2`, worktree `~/.t3/worktrees/aussiecamps-web/kai-nb-a`. Never pushed; the orchestrator merges.
Touches only `lib/translations/nb.json`, `lib/translations/meta/nb.json` (stamp) and this file.

## Start state (2026-10-20)
77 AussieCamps guides, 11 complete in nb. 66 left, minus the 7 listicles owned by another lane = 59 to translate.

## Working files (recreate if /tmp is lost)
`/tmp/kai-nb-a`: batches/bNN.input.json (English), bNN.nb.json (drafts), `applybatch.py bNN --apply`,
`checkbatch.py`, `negcheck.py`, `complete.py`, `batchplan.json` (12 batches in order). Recreate from
`lib/translations/en.json` and the plan below if lost.

## Batch plan (GSC impressions first, then rules/safety, app, camping, road trips)
b01 sleeping-in-car-australia, camping-rules-new-south-wales, camping-rules-western-australia, dump-points-australia-guide, camping-rules-victoria
b02 campervan-road-trip-budget-australia, accommodation-costs-australia-2026, camping-rules-south-australia, camping-rules-act, camping-rules-queensland
b03 australian-road-signs-visitors-guide, caravan-park-vs-holiday-park, towing-caravan-australia-road-rules, camping-rules-northern-territory, melbourne-to-adelaide-coastal-route
b04 australia-road-rules-state-differences, camping-fees-australia-2026, australia-travel-cost-2026, australia-road-trip-fuel-cost-2026, camping-rules-tasmania
b05 is-free-camping-legal-australia, camping-without-phone-signal, campervan-driving-australia-safety-guide, camping-water-planning, bus-train-costs-australia-2026
b06 sunshine-coast-hinterland-camping, gibb-river-road-camping, campfires-camping-australia, overseas-driver-licence-australia-state-guide, adelaide-to-uluru-road-trip
b07 best-camping-app-australia, driving-in-australia-road-rules-visitors, nullarbor-crossing-camping-guide, australian-alps-camping-route, flinders-ranges-camping-guide
b08 red-centre-way-camping, driving-in-australia-overseas-licence, camping-with-dogs-australia, camping-weather-safety-australia, driving-with-road-trains-australia
b09 australia-road-trip-fatigue-wildlife-safety, how-to-plan-trip-aussiecamps, how-to-use-aussiecamps-filters, save-collections-aussiecamps, aussiecamps-place-details
b10 aussiecamps-widgets-guide, camping-packing-list-australia, first-campervan-trip-australia, road-trip-fuel-planning-australia, responsible-camping-australia
b11 choosing-campsite-australia, tasmania-camping-loop, darwin-kakadu-litchfield-loop, sydney-south-coast-camping, queensland-outback-way
b12 south-west-wa-camping-loop, victoria-high-country-camping, kangaroo-island-camping-guide, blue-mountains-camping-weekend
Skipped (other lane): wikicamps-alternatives, campermate-alternatives, best-fuel-price-apps-australia, best-road-trip-planner-apps-australia, best-free-camping-apps-australia, best-caravan-rv-apps-australia, best-apps-working-holiday-australia.

## Done
b06 (sunshine-coast-hinterland-camping, gibb-river-road-camping, campfires-camping-australia, overseas-driver-licence-australia-state-guide, adelaide-to-uluru-road-trip). nb 41/77 after b06.
b05 (is-free-camping-legal-australia, camping-without-phone-signal, campervan-driving-australia-safety-guide, camping-water-planning, bus-train-costs-australia-2026). nb 36/77 after b05.
b04 (australia-road-rules-state-differences, camping-fees-australia-2026, australia-travel-cost-2026, australia-road-trip-fuel-cost-2026, camping-rules-tasmania). nb 31/77 after b04.
b01 (sleeping-in-car-australia, camping-rules-new-south-wales, camping-rules-western-australia, dump-points-australia-guide, camping-rules-victoria).
b02 (campervan-road-trip-budget-australia, accommodation-costs-australia-2026, camping-rules-south-australia, camping-rules-act, camping-rules-queensland), b03 (australian-road-signs-visitors-guide, caravan-park-vs-holiday-park, towing-caravan-australia-road-rules, camping-rules-northern-territory, melbourne-to-adelaide-coastal-route). nb 26/77 guides complete after b01-b03.

## Next
Overnight rule: no subagents. b07 draft was lost to a rate limit (redo myself); b08 draft exists in /tmp/kai-nb-a/batches/b08.nb.json, needs my review then land. Then reviews, apply, continue b06+.

## Blockers
none
