# kai-es-gap progress (Spanish gaps on both sites)

Lane: kai-es-gap (Kai account). Branches `i18n/a-es-gap` (aussiecamps-web) and `i18n/k-es-gap` (kiwicamping-web),
worktrees `~/.t3/worktrees/<repo>/kai-es-gap`. Never pushed.
Working files (recreate if lost): `/tmp/kai-es-gap` (BRIEF.md, mkbatch.py, ap.sh, qa.py, <a|k>/batches, <a|k>/out).
Packet: `translation-engine packet --config docs/translation.config.json --locale es --output /tmp/kai-es-gap/<a|k>/todo.json`.

## AussieCamps gap at start (2026-10-21)
58/80 guides complete. 22 missing: 17 road trips + 5 listicles (best-caravan-rv-apps, best-apps-working-holiday,
best-weather-apps, best-money-saving-travel-apps, hipcamp-alternatives). Plus 36 units in 15 existing guides whose
Spanish lost an `<a data-guide>` link (engine placeholder errors): repair batch "LINKFIX".
Order: road trips by GSC impressions (brisbane-to-cape-tribulation, great-ocean, melbourne-adelaide, perth-broome,
east-coast, sunshine-coast, gibb-river, nullarbor, flinders, red-centre, then 0-impression ones), listicles in
publish order (caravan-rv 10-26, working-holiday 10-27, weather 10-28, money-saving 10-29, hipcamp 10-30), LINKFIX.

## Done
- AU batch 1 (10 road trips, 532 units, drafted sonnet, reviewed opus, negation-checked): brisbane-to-cape-tribulation, great-ocean-road, melbourne-to-adelaide, perth-to-broome, east-coast, sunshine-coast, gibb-river, nullarbor, flinders-ranges, red-centre-way. es 68/80 guides.

## Next
- AU: listicles best-caravan-rv, best-apps-working-holiday, best-weather-apps (drafting l1a, l1b, l2a), then money-saving, hipcamp, 7 remaining road trips (r4a, r4b), LINKFIX (lf, 35 units).
- Then KiwiCamping: 41 missing guides (2320 units), same pipeline.

## Notes for orchestrator (English source oddities, translated faithfully)
- melbourne-to-adelaide-coastal-route: section 7 holds a Grampians paragraph under a Coorong-type heading; tip "Free ferry crossings near Goolwa" unsupported by body; "East of Adelaide" should be south-east, "Robe and Beachport further north" north-west.
- great-ocean-road-camping-guide s7 and brisbane-to-cape-tribulation s7: a paragraph under a heading that does not match.
- east-coast-road-trip-sydney-cairns: 2,500 km (intro) vs 2,400 km (section 3); "Fraser Island" vs "K'gari" both used.
- red-centre-way-camping: "Uluru" without the macron in sections[3].body[0]; gibb-river: road-status advice repeated twice.
- flinders-ranges tip omits Parachilna, which the body lists as a fuel stop.

## Blockers
none
