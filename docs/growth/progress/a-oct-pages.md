# AussieCamps page fixes (October review)

Lane brief: `/Users/cristian/Developer/Webs/.growth-lanes/oct-review/brief-a-pages.md`. Branch `growth/a-oct-pages`.

## Baseline (2026-11-03, before any change)
- `npm run content:check`: pass, 0 stale strings in every locale.
- Indexable pages: en 123, every live locale 122.

## Done
- Tool pages can carry a short direct answer above the calculator (`answer`) and reference tables (`tables`). Table words are translated; the figures live once in `lib/tools/tables.ts` and are formatted per language. A row links to its guide only while that guide is published.
- `/tools/drive-time-calculator/`: new title and description, answer block, 15-route driving time and distance table (OSRM, checked 3 Nov 2026; 15-minute break every two hours per Queensland, WA and Tasmanian guidance), 3 new FAQs, sources, and links to the live road trip guides. Answer, table and FAQs translated into all 15 locales.

- `/tools/fuel-cost-calculator/`: new title and description, answer block, AIP capital city price table (week ending 1 Nov 2026), cost per 100 km by vehicle table, updated price FAQ, 2 new FAQs, AIP sources. All new content translated into 15 locales.
- `/tools/`: retitled as the road trip calculators hub, H1 and an intro that names and links each calculator (English page only; the locale hubs use the translated ui strings and are unchanged).

- Handoff 1 merged (main 259044e).
- Fuel calculator default and worked example now use the AIP five-city price (A$2.33), with the one protected test assertion updated (approved).
- Brisbane to Sydney and Sydney to Adelaide drive guides: distances, times, legs and dates corrected from OSRM (3 Nov 2026) in English and 15 locales; the drive time table matches.
- Curated related links to the best camping app and road trip planner guides from 11 cost guides and 4 road guides; apps guides on the tool pages.
- Alcohol and coffee guide: cost per standard drink and the Healthy WA definition, all 15 locales.
- Best camping apps guide: title and description (English). Prices and ratings rechecked, unchanged.
- Home: title and description (English); offline camping map meta keyword removed.

## Next
- Remaining price guides, state rules guides and sleeping in car: already open with the headline price or a direct yes/no answer since 19 Oct; left alone while scored. See notes.

## Notes for the orchestrator
- The fuel calculator still defaults to A$2.08 a litre (Fuel Plan, 5 August 2026) because `tests/rendered-html.test.mjs` hard-codes `120.0 L · A$249.60` on /tools/. Current prices are about A$2.33. Updating the default needs the test changed by its owner.
- Stale translation keys (English reworded, old translation still serving): `tools.tools.drive-time-calculator.metaTitle`, `.metaDescription`, `tools.tools.fuel-cost-calculator.metaTitle`, `.metaDescription`, in all 15 locales.
- Scheduled drive guides quote longer distances than OSRM returns today: Sydney to Brisbane 978 km (OSRM 909 km via the Pacific), Sydney to Adelaide 1,457 km (OSRM 1,374 km). Worth a check before 20 and 22 Nov.
