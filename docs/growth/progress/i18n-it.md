# i18n-it progress (Ava account)

Language: Italian (`it`, informal *tu*). Branches: `i18n/a-it` (aussiecamps-web) and `i18n/k-it`
(kiwicamping-web). This file lives on `i18n/a-it` only.

Worktrees:
- AussieCamps: `/Users/cristian/.t3/worktrees/aussiecamps-web/i18n-a-it`
- KiwiCamping: `/Users/cristian/.t3/worktrees/kiwicamping-web/i18n-k-it`

Scratch (not committed): `/tmp/i18n-it/` holds work files (`work/<batch>.json`), subagent output
(`out/<batch>.json` + notes), the shared brief (`AGENT-BRIEF.md`) and the lint script (`lint.mjs`).
If `/tmp` was wiped, regenerate work files from `translation-engine packet --locale it --all`.

## Status at start (2026-10-19)
- Both sites already 100% "complete" in Italian (AU 3,223 units, NZ 2,334 units), but the copy reads
  as a fluent machine draft: calques, English-shaped sentences, inconsistent terms, a few meaning
  errors (e.g. "soggiorni in stazione" for station stays). Full re-review needed.

## Done
- [x] Style guide `docs/translation-style/it.md` (identical in both repos)
- [ ] UI + support/privacy/terms: AU
- [ ] UI + support/privacy/terms: NZ
- [ ] Guides AU (50), batches A01-A10 in search-value order
- [ ] Guides NZ (43), batches K01-K09 in search-value order
- [ ] Road trips, Kiwi legacy pages, consent/article/tools namespaces, data-guide link markup
      (waiting on foundation milestones)

## Batches
| Batch | Guides | State |
|---|---|---|
| A01 | alcohol-coffee-drink-prices, sleeping-in-car, camping-rules-nsw, public-transport-costs, eating-out | subagent |
| A02 | camping-rules-wa, dump-points, camping-rules-vic, grocery-prices, interstate-biosecurity | subagent |
| A03 | campervan-road-trip-budget, accommodation-costs, camping-rules-sa, domestic-flight-costs, camping-rules-act | queued |
| A04 | camping-rules-qld, road-signs, caravan-park-vs-holiday-park, towing-caravan, best-time-camping | queued |
| A05 | camping-rules-nt, road-rules-state-differences, camping-fees, travel-cost, fuel-cost | queued |
| A06 | camping-rules-tas, is-free-camping-legal, camping-without-phone-signal, campervan-driving-safety, water-planning | queued |
| A07 | bus-train-costs, overseas-driver-licence-state-guide, campfires, best-camping-app, road-rules-visitors | queued |
| A08 | driving-overseas-licence, camping-with-dogs, packing-list, first-campervan-trip, fuel-planning | queued |
| A09 | weather-safety, responsible-camping, choosing-campsite, road-trains, fatigue-wildlife | queued |
| A10 | how-to-plan-trip, filters, save-collections, place-details, widgets | queued |
| K01 | grocery-prices, doc-huts, public-transport-costs, road-signs, biosecurity-gear | subagent |
| K02 | doc-campsite-rules, fuel-cost, campervan-road-rules, eating-out, travel-cost | subagent |
| K03 | speed-limits, beer-wine-coffee, towing-caravan, wof-registration, accommodation-costs | queued |
| K04 | overseas-driver-licence, sandflies, volcanic-safety, dogs-camping, domestic-flight-costs | queued |
| K05 | cook-strait-ferry, kauri-dieback, bus-ferry-train, alcohol-fatigue, doc-hut-rules | queued |
| K06 | river-crossing, left-side-driving, driving-day-planner, wildlife-livestock, winter-camping | queued |
| K07 | severe-weather, earthquake-tsunami, winter-driving, one-lane-bridges, local-councils | queued |
| K08 | campervan-budget, food-fuel-resupply, plan-trip, save-places, filters | queued |
| K09 | offline-data, weather-look-around, currency-place-costs | queued |

## Notes for the orchestrator / owner
- KiwiCamping config protects "North Island", "South Island", "Stewart Island" for every locale, so
  Italian must keep the English name; the guide writes "Isola del Sud (South Island)". If the owner
  agrees that exonyms are natural (Isola del Nord/Sud, Nordinsel, île du Nord…), relax the protected
  terms in the config (affects all locales, so not changed here).
- The apps' Italian strings contain machine errors the sites deliberately do not copy: "Ottieni il
  passaggio" (Get the Pass), "Passa" (Pass), "Perni" (Pins), "Norma" (Standard map), "Stellato",
  "Mi è piaciuto", "Vuoi visitare", "Tutto salvato", "Commissioni" (Fees), "Parcheggi per roulotte"
  (Caravan parks), "Stazione di discarica" (Dump station = landfill), "Capanna" (Hut), "Siti
  alimentati" (Powered sites), "Viaggi su strada" (Road trips). Corrected forms are in the style guide.

## Blockers
- None.
