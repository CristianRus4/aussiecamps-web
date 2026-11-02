# AussieCamps page fixes (October review)

Lane brief: `/Users/cristian/Developer/Webs/.growth-lanes/oct-review/brief-a-pages.md`. Branch `growth/a-oct-pages`.

## Baseline (2026-11-03, before any change)
- `npm run content:check`: pass, 0 stale strings in every locale.
- Indexable pages: en 123, every live locale 122.

## Done
- Tool pages can carry a short direct answer above the calculator (`answer`) and reference tables (`tables`). Table words are translated; the figures live once in `lib/tools/tables.ts` and are formatted per language. A row links to its guide only while that guide is published.
- `/tools/drive-time-calculator/`: new title and description, answer block, 15-route driving time and distance table (OSRM, checked 3 Nov 2026; 15-minute break every two hours per Queensland, WA and Tasmanian guidance), 3 new FAQs, sources, and links to the live road trip guides. Answer, table and FAQs translated into all 15 locales.

## Next
1. Fuel cost calculator: AIP capital city prices (week ending 1 Nov 2026), consumption by vehicle, cost per 100 km, title, description, FAQ.
2. `/tools/` hub retitle and intro.
3. Price guides, state rules guides, sleeping in car, best apps pages, home.

## Notes for the orchestrator
- Scheduled drive guides quote longer distances than OSRM returns today: Sydney to Brisbane 978 km (OSRM 909 km via the Pacific), Sydney to Adelaide 1,457 km (OSRM 1,374 km). Worth a check before 20 and 22 Nov.
