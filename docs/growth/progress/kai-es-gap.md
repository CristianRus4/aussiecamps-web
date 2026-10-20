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

- AU batch 2 (3 listicles, 468 units): best-caravan-rv-apps-australia, best-apps-working-holiday-australia, best-weather-apps-camping-australia. es 71/80 guides. House term: «el Pase» (style guide), not "Pass".

- AU batch 3 (467 units): best-money-saving-travel-apps-australia, hipcamp-alternatives, tasmania-camping-loop, sydney-south-coast-camping, queensland-outback-way. es 76/80 guides.

- AU batch 4 (247 units): 4 road trips (south-west-wa, victoria-high-country, kangaroo-island, blue-mountains) + 35 repaired link units in 15 guides (LINKFIX). AussieCamps es is now 80/80 guides, engine coverage 100%.

## Next
- AU: DONE (80/80). Awaiting final npm run check + handoff 2.
- K: kb1a (best-nz-camping-apps) drafting; batches kb1b, kb2, kb3 built in /tmp/kai-es-gap/k/batches.
- Then KiwiCamping: 41 missing guides (2320 units), same pipeline.

## Notes for orchestrator (English source oddities, translated faithfully)
- melbourne-to-adelaide-coastal-route: section 7 holds a Grampians paragraph under a Coorong-type heading; tip "Free ferry crossings near Goolwa" unsupported by body; "East of Adelaide" should be south-east, "Robe and Beachport further north" north-west.
- great-ocean-road-camping-guide s7 and brisbane-to-cape-tribulation s7: a paragraph under a heading that does not match.
- east-coast-road-trip-sydney-cairns: 2,500 km (intro) vs 2,400 km (section 3); "Fraser Island" vs "K'gari" both used.
- red-centre-way-camping: "Uluru" without the macron in sections[3].body[0]; gibb-river: road-status advice repeated twice.
- flinders-ranges tip omits Parachilna, which the body lists as a fuel stop.

- best-apps-working-holiday-australia sources[2] says "third Work and Holiday 417 visa" (417 is Working Holiday, 462 is Work and Holiday). best-weather-apps: Weatherzone Pro A$5.99/month and ad-free A$5.99/year same figure. Style guide gaps: super/specified work/award/tax file number have no glossary entry.

## Blockers
none
