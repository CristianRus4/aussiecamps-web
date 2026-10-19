# i18n-it progress (Ava account)

Language: Italian (`it`, informal *tu*). Branches: `i18n/a-it` (aussiecamps-web) and `i18n/k-it`
(kiwicamping-web). This file lives on `i18n/a-it` only.

Worktrees:
- AussieCamps: `/Users/cristian/.t3/worktrees/aussiecamps-web/i18n-a-it`
- KiwiCamping: `/Users/cristian/.t3/worktrees/kiwicamping-web/i18n-k-it`

Scratch (not committed): `/tmp/i18n-it/` holds work files (`work/<batch>.json`), subagent output
(`out/<batch>.json` + notes), the shared brief (`AGENT-BRIEF.md`), `lint.mjs`, `review.mjs`,
`setv.mjs` and `commit.sh`. If `/tmp` was wiped, regenerate work files from
`translation-engine packet --locale it --all` and slice them by guide.

## Status (2026-10-20)
Both sites were already 100% "complete" in Italian but read as a fluent machine draft, so every
unit is being re-reviewed and rewritten against `docs/translation-style/it.md`.

- [x] Style guide `docs/translation-style/it.md` (identical in both repos)
- [x] UI + support/privacy/terms, both sites (merged to main)
- [x] Judge round 1 fixes (AU 7 + NZ 15 failing units, plus the same defects in shared copy)
- [x] New English: privacy "Website analytics" (GA4) section, effective date, `consent.*` (both sites)
- [ ] Guides AU (50): A01-A04 done (20 guides); A05, A06 in progress; A07-A10 queued
- [ ] Guides NZ (43): K01-K05 done (25 guides); K06, K07 in progress; K08-K09 queued
- [ ] Road trips, Kiwi legacy pages, article/tools namespaces, data-guide link markup: not yet in
      `en.json` on main ("Road trips" is still in `untranslatedCategories`). Waiting.

## Batches (search-value order)
| Batch | Guides | State |
|---|---|---|
| A01 | alcohol-coffee-drink-prices, sleeping-in-car, camping-rules-nsw, public-transport-costs, eating-out | done |
| A02 | camping-rules-wa, dump-points, camping-rules-vic, grocery-prices, interstate-biosecurity | done |
| A03 | campervan-road-trip-budget, accommodation-costs, camping-rules-sa, domestic-flight-costs, camping-rules-act | done |
| A04 | camping-rules-qld, road-signs, caravan-park-vs-holiday-park, towing-caravan, best-time-camping | done |
| A05 | camping-rules-nt, road-rules-state-differences, camping-fees, travel-cost, fuel-cost | subagent |
| A06 | camping-rules-tas, is-free-camping-legal, camping-without-phone-signal, campervan-driving-safety, water-planning | subagent |
| A07 | bus-train-costs, overseas-driver-licence-state-guide, campfires, best-camping-app, road-rules-visitors | queued |
| A08 | driving-overseas-licence, camping-with-dogs, packing-list, first-campervan-trip, fuel-planning | queued |
| A09 | weather-safety, responsible-camping, choosing-campsite, road-trains, fatigue-wildlife | queued |
| A10 | how-to-plan-trip, filters, save-collections, place-details, widgets | queued |
| K01 | grocery-prices, doc-huts, public-transport-costs, road-signs, biosecurity-gear | done |
| K02 | doc-campsite-rules, fuel-cost, campervan-road-rules, eating-out, travel-cost | done |
| K03 | speed-limits, beer-wine-coffee, towing-caravan, wof-registration, accommodation-costs | done |
| K04 | overseas-driver-licence, sandflies, volcanic-safety, dogs-camping, domestic-flight-costs | done |
| K05 | cook-strait-ferry, kauri-dieback, bus-ferry-train, alcohol-fatigue, doc-hut-rules | done |
| K06 | river-crossing, left-side-driving, driving-day-planner, wildlife-livestock, winter-camping | subagent |
| K07 | severe-weather, earthquake-tsunami, winter-driving, one-lane-bridges, local-councils | subagent |
| K08 | campervan-budget, food-fuel-resupply, plan-trip, save-places, filters | queued |
| K09 | offline-data, weather-look-around, currency-place-costs | queued |

## Notes for the orchestrator / owner
- KiwiCamping config protects "North Island", "South Island", "Stewart Island" for every locale, so
  Italian must keep the English name ("Isola del Sud (South Island)"). If exonyms are wanted
  (Isola del Nord/Sud, Nordinsel, île du Nord…), relax the protected terms in the config.
- The apps' Italian strings contain machine errors the sites deliberately do not copy: "Ottieni il
  passaggio" (Get the Pass), "Passa" (Pass), "Perni" (Pins), "Norma" (Standard map), "Stellato",
  "Mi è piaciuto", "Vuoi visitare", "Tutto salvato", "Commissioni" (Fees), "Parcheggi per roulotte"
  (Caravan parks), "Stazione di discarica" (Dump station = landfill), "Capanna" (Hut), "Siti
  alimentati" (Powered sites), "Viaggi su strada" (Road trips). Corrected forms are in the style guide.
- Support pages on both sites say "Map and place details are free, together with two saved lists",
  which conflicts with the Pass boundary in THREADS.md. Translated as written; the English needs fixing.

## English source issues found while translating (translated as written; fix in English)
AussieCamps
- grocery-prices: two weekly figures for the same traveller (A$80-140 in sections[2], $100-170 in
  sections[6]); near-duplicate sections; faq[0][1] claims a priced basket with dated per-item figures,
  but the table is Numbeo community ranges.
- dump-points: faq[0][1] says emptying a cassette in a public toilet is illegal; sections[7].body[0]
  says it is fine where signs permit. sections[3].body[1] and [7].body[3] repeat each other.
- camping-rules-western-australia: faq[1][1] "a holiday park pass … a month or more" (check DBCA pass
  name and validity); sections[7].body[2] and [3] repeat each other.
KiwiCamping
- grocery-prices: "Countdown" is now Woolworths; faq[0][1] claims a priced basket (table is ranges).
- public-transport: faq[1][1] promises Wellington/Christchurch fares the table does not have;
  "Wellington uses Snapper / no national card" may be outdated (Motu Move rollout).
- road-signs: faq[1][1] contradicts sections[4].body[0] on the one-lane-bridge arrows; "five or more
  vehicles queued, legally required to pull over" (also campervan-road-rules sections[6].body[1]) looks
  doubtful for NZ; LSZ signs are being phased out; blue/brown sign split doubtful.
- biosecurity: Rakiura is not predator-free (Ulva Island is); "no land mammals" ignores native bats.
- fuel-cost: faq[1][1] says "divide by consumption" (wrong maths); faq[0][1] promises a diesel price
  the guide does not give; "coasting in neutral is illegal in effect" doubtful.
- eating-out: faq[0][1] lists brunch/pub-meal prices not in the table; "mince and cheese question"
  heading never explained.
- campervan-road-rules: "Rimutaka Hill Road" is officially "Remutaka"; Desert Road closing to
  high-sided vehicles in wind is doubtful (it closes mainly for snow and ice).

- campervan-road-rules + towing (NZ): "a full car licence covers combinations up to 4,500 kg" conflicts
  with the 6,000 kg Class 1 figure in overseas-driver-licence; check with NZTA.
- overseas-driver-licence (NZ): sections[0] says 18 months until 1 Nov 2026 then 12; the rest says 12.
- volcanic-safety (NZ): level 2 closes tracks (sections[3]) vs "tracks usually open up to level 2" (faq[1][1]).
- speed-limits (NZ): "lower rural limits keep expanding" may be outdated (many reductions reversed in 2025).
- English writes "Maori", "Hine-nui-te-po", "Tane Mahuta", "rahui" without macrons in places (Italian has them).
- Several cost FAQs on both sites name items (brunch, pub meal, motel, six-pack, Melbourne fares,
  car vs campervan ferry fares) that their price tables do not contain.
- AU: All Parks Pass "does not always cover Kosciuszko" (NSW) looks wrong; Melbourne "no contactless"
  may be outdated; towing FAQ names the NT though the body does not; best-time FAQ gives the northern
  dry season as May-September vs May-October elsewhere; ACT says Namadgi campgrounds are "mostly free"
  (they are booked and paid); SA lists the Flinders Ranges as a Desert Parks Pass park.
- Many guides on both sites end a section with a paragraph that repeats an earlier one (listed per
  batch in the subagent notes); translated as written to keep structure parity.

## Blockers
- None.
