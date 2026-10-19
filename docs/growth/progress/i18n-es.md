# i18n-es progress (Ava)

Thread: i18n-es, Spanish on both sites. Branches: `i18n/a-es` (aussiecamps-web, worktree
`~/.t3/worktrees/aussiecamps-web/i18n-a-es`) and `i18n/k-es` (kiwicamping-web, worktree
`~/.t3/worktrees/kiwicamping-web/i18n-k-es`). Never pushed; the orchestrator merges.

Style guide: `docs/translation-style/es.md` (identical in both repos).

## Working files (outside the repos, recreate if lost)
- `/tmp/es-work/{a,k}/all.json`: engine `packet --locale es --all` snapshot (EN source + current es).
- `/tmp/es-work/BRIEF.md`: brief for the rewrite subagents. `/tmp/es-work/lint.py`: Spanish lint.
- `/tmp/es-work/mkbatch.py`: builds per-batch inputs. Batches: `/tmp/es-work/{a,k}/<id>.{input,values,notes}`.

## Done
- [x] Style guide and glossary (both repos).
- [x] UI strings rewritten: AussieCamps 99, KiwiCamping 100 (testimonials untouched).
- [x] Support, privacy and terms pages: 28 units per site.

## Guides (re-review and rewrite, by GSC impressions)
AussieCamps (50): batches a01..a13. KiwiCamping (43): batches k01..k11. Status per batch:

| Batch | Guides | Status |
|---|---|---|
| a01 | alcohol-coffee-drink-prices-australia, sleeping-in-car-australia, camping-rules-new-south-wales, public-transport-costs-australia-2026 | applied |
| a02 | eating-out-australia-prices-2026, camping-rules-western-australia, dump-points-australia-guide, camping-rules-victoria | in progress |
| a03 | australia-grocery-prices-2026, interstate-biosecurity-road-trip, campervan-road-trip-budget-australia, accommodation-costs-australia-2026 | in progress |
| a04 | camping-rules-south-australia, domestic-flight-costs-australia-2026, camping-rules-act, camping-rules-queensland | queued |
| a05 | australian-road-signs-visitors-guide, caravan-park-vs-holiday-park, towing-caravan-australia-road-rules, best-time-camping-australia | queued |
| a06 | camping-rules-northern-territory, australia-road-rules-state-differences, camping-fees-australia-2026, australia-travel-cost-2026 | queued |
| a07 | australia-road-trip-fuel-cost-2026, camping-rules-tasmania, is-free-camping-legal-australia, camping-without-phone-signal | queued |
| a08 | campervan-driving-australia-safety-guide, camping-water-planning, bus-train-costs-australia-2026, campfires-camping-australia | queued |
| a09 | overseas-driver-licence-australia-state-guide, best-camping-app-australia, driving-in-australia-road-rules-visitors, driving-in-australia-overseas-licence | queued |
| a10 | camping-with-dogs-australia, camping-packing-list-australia, first-campervan-trip-australia, road-trip-fuel-planning-australia | queued |
| a11 | camping-weather-safety-australia, responsible-camping-australia, choosing-campsite-australia, how-to-plan-trip-aussiecamps | queued |
| a12 | how-to-use-aussiecamps-filters, save-collections-aussiecamps, aussiecamps-place-details, aussiecamps-widgets-guide | queued |
| a13 | driving-with-road-trains-australia, australia-road-trip-fatigue-wildlife-safety | queued |
| k01 | new-zealand-grocery-prices-2026, doc-huts-new-zealand-guide, public-transport-costs-new-zealand-2026, new-zealand-road-signs-visitors | in progress |
| k02 | new-zealand-biosecurity-camping-gear, doc-campsite-rules, new-zealand-road-trip-fuel-cost-2026, campervan-road-rules-new-zealand | in progress |
| k03 | eating-out-new-zealand-prices-2026, new-zealand-travel-cost-2026, speed-limits-new-zealand-visitors, beer-wine-coffee-prices-new-zealand | queued |
| k04 | towing-caravan-new-zealand, wof-registration-campervan-new-zealand, accommodation-costs-new-zealand-2026, overseas-driver-licence-new-zealand | queued |
| k05 | sandflies-new-zealand-camping, volcanic-safety-new-zealand-travel, dogs-camping-new-zealand, domestic-flight-costs-new-zealand-2026 | queued |
| k06 | cook-strait-ferry-campervan-guide, kauri-dieback-camping-travel, bus-ferry-train-costs-new-zealand, alcohol-fatigue-driving-new-zealand | queued |
| k07 | doc-hut-rules-etiquette, river-crossing-safety-new-zealand, left-side-driving-new-zealand, new-zealand-driving-day-planner | queued |
| k08 | wildlife-livestock-road-safety-new-zealand, winter-camping-new-zealand, new-zealand-severe-weather-camping, earthquake-tsunami-camping-new-zealand | queued |
| k09 | winter-driving-new-zealand-campervan, one-lane-bridges-gravel-roads-new-zealand, camping-rules-local-councils-new-zealand, campervan-budget-new-zealand | queued |
| k10 | food-fuel-resupply-new-zealand-road-trip, plan-trip-kiwicamping, save-places-kiwicamping, kiwicamping-filters-guide | queued |
| k11 | kiwicamping-offline-data-guide, kiwicamping-weather-look-around, kiwicamping-currency-place-costs | queued |

## Next
- Remaining guides in GSC order, both sites interleaved.
- After the foundation milestones merge (orchestrator will message): rebase, regenerate en.json,
  translate road trips, Kiwi legacy pages, `consent`/`article`/`tools` namespaces, `<a data-guide>` markup.

## Open questions for the orchestrator
- Protected place names: Spanish readers expect «Isla Norte / Isla Sur», «Nueva Gales del Sur»,
  «Australia Occidental», «Territorio del Norte». The configs protect the English forms, so the
  engine rejects the exonyms. Current approach: English name plus the Spanish exonym in
  parentheses on first mention. A per-locale exception would read more naturally.
- Dates render in English inside Spanish pages (`formatArticleDate` uses en-GB; `exchangeRateDate`
  and `priceTable.asOf` are English strings): «Actualizado el 18 August 2026».
- English source facts to check: support page says map and place details are free with two saved
  lists, which conflicts with the Pass boundary in THREADS.md.
