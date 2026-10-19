# i18n-nb progress (Norwegian Bokmål, both sites)

Lane: i18n-nb (orchestrator background agent, main account). Branches: `i18n/a-nb` (aussiecamps-web, worktree
`~/.t3/worktrees/aussiecamps-web/i18n-a-nb`) and `i18n/k-nb` (kiwicamping-web, worktree
`~/.t3/worktrees/kiwicamping-web/i18n-k-nb`). Never pushed; the orchestrator merges.
Style guide: `docs/translation-style/nb.md` (identical in both repos), including the fidelity rule added 2026-10-20.

## Setup
- Both branches rebased on origin/main (M2 platform, 2026-10-20). Own engine catalog per site
  (`aussiecamps-website-nb`, `kiwicamping-website-nb`), removed from the shared catalog. The kiwicamping nb catalog does
  not protect "North Island"/"South Island" (nb uses Nordøya/Sørøya).
- Testimonials (`ui.review*`, `reviewsEyebrow`, `reviewsTitle`) are untranslated for nb.
- Stamps: `npm run translations:stamp -- --locale nb` after every batch.
- Working files in `/tmp/nb-i18n` (recreate if lost): batches/*.input.json (English), batches/<id>/<slug>.json (drafts),
  `applybatch.py <id> --apply`, `checkbatch.py`, `negcheck.py` (English/Norwegian pairs with negations and added
  parentheses), `rp.py` (patch nb.json).

## Go-live set (both sites): done
UI 220/220 (testimonials excluded), consent 6/6, support, privacy (7 sections incl. analytics) and terms, home strings.
`LOCALES_PREVIEW=1 npm run content:check` passes in both. The tools namespace (2 common strings plus 5 calculators) is not
translated yet.

## Guides done
AussieCamps (11 of 70 done, nb is 11/70 complete): alcohol-coffee-drink-prices-australia, eating-out-australia-prices-2026,
public-transport-costs-australia-2026, domestic-flight-costs-australia-2026, australia-grocery-prices-2026,
great-ocean-road-camping-guide, best-time-camping-australia, east-coast-road-trip-sydney-cairns,
perth-to-broome-road-trip, brisbane-to-cape-tribulation, interstate-biosecurity-road-trip.
(Draft sleeping-in-car-australia and camping-rules-new-south-wales were removed: paired English rewrite.)
KiwiCamping (16 of 78): new-zealand-grocery-prices-2026, doc-huts-new-zealand-guide,
public-transport-costs-new-zealand-2026, new-zealand-road-signs-visitors, new-zealand-biosecurity-camping-gear,
doc-campsite-rules, campervan-road-rules-new-zealand, east-cape-road-trip, speed-limits-new-zealand-visitors,
new-zealand-road-trip-fuel-cost-2026, towing-caravan-new-zealand, new-zealand-travel-cost-2026,
eating-out-new-zealand-prices-2026, domestic-flight-costs-new-zealand-2026, wof-registration-campervan-new-zealand,
accommodation-costs-new-zealand-2026.

## Next (search-value order)
- NZ: volcanic-safety-new-zealand-travel, northland-cape-reinga-camping-route, beer-wine-coffee-prices-new-zealand,
  arthurs-pass-camping-route, dogs-camping-new-zealand, cook-strait-ferry-campervan-guide,
  taranaki-forgotten-world-highway, bus-ferry-train-costs-new-zealand, coromandel-rotorua-road-trip,
  picton-kaikoura-christchurch-route, sandflies-new-zealand-camping, overseas-driver-licence-new-zealand ...
- AU: camping-water-planning, bus-train-costs-australia-2026, sunshine-coast-hinterland-camping,
  camping-without-phone-signal, campervan-driving-australia-safety-guide, accommodation-costs-australia-2026,
  campervan-road-trip-budget-australia, melbourne-to-adelaide-coastal-route ...
- Do NOT translate the 23 AussieCamps pages being rewritten (camping-rules-*, dump-points, is-free-camping-legal, etc.).
- Then the tools namespace and calculators, and the remaining road trips.

## Rules learned
- Fidelity: no glosses, translations of local terms or facts that the English lacks. Before every commit, compare each
  never/do not/only/must/no sentence with the English (see `negcheck.py`). Done for all guides, UI and legal pages so far.
- nb brand-count audit does not allow the Norwegian -s genitive of "Apple" (only de, nl): write "fra Apple".

## Notes for the orchestrator
- nb locale registry entry exists (draft). Flip to live when ready.
- English source issues are listed in `/tmp/nb-i18n/source-issues.md` (translated as written): e.g. the AU eating-out and
  alcohol FAQs promise rows the tables lack; the NZ road-signs FAQ on priority arrows and the biosecurity guide's
  "Rakiura predator-free" claim need a fact check; the AU public-transport FAQ says Melbourne accepts contactless
  while the body says it does not; the AU best-time FAQ says north dry season May to September, body says May to October.
- Decision: NZ island names Nordøya and Sørøya. Australian state names stay English.
