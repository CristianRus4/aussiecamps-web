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
- [x] Judge round 1 (docs/growth/judge/es.json): all 15 failing units per site fixed; privacy page
  synced to the 7-section English (new «Analítica web» section, effective 19 Oct 2026); new
  `consent` namespace translated on both sites.

## Guides (re-review and rewrite, by GSC impressions)
AussieCamps (50): batches a01..a13. KiwiCamping (43): batches k01..k11. Status per batch:

| Batch | Guides | Status |
|---|---|---|
| a01 | alcohol-coffee-drink-prices-australia, sleeping-in-car-australia, camping-rules-new-south-wales, public-transport-costs-australia-2026 | applied |
| a02 | eating-out-australia-prices-2026, camping-rules-western-australia, dump-points-australia-guide, camping-rules-victoria | applied |
| a03 | australia-grocery-prices-2026, interstate-biosecurity-road-trip, campervan-road-trip-budget-australia, accommodation-costs-australia-2026 | applied |
| a04 | camping-rules-south-australia, domestic-flight-costs-australia-2026, camping-rules-act, camping-rules-queensland | applied |
| a05 | australian-road-signs-visitors-guide, caravan-park-vs-holiday-park, towing-caravan-australia-road-rules, best-time-camping-australia | applied |
| a06 | camping-rules-northern-territory, australia-road-rules-state-differences, camping-fees-australia-2026, australia-travel-cost-2026 | applied (a06 rewrite 112/239 units, rest kept) |
| a07 | australia-road-trip-fuel-cost-2026, camping-rules-tasmania, is-free-camping-legal-australia, camping-without-phone-signal | applied + reviewed |
| a08 | campervan-driving-australia-safety-guide, camping-water-planning, bus-train-costs-australia-2026, campfires-camping-australia | queued |
| a09 | overseas-driver-licence-australia-state-guide, best-camping-app-australia, driving-in-australia-road-rules-visitors, driving-in-australia-overseas-licence | queued |
| a10 | camping-with-dogs-australia, camping-packing-list-australia, first-campervan-trip-australia, road-trip-fuel-planning-australia | queued |
| a11 | camping-weather-safety-australia, responsible-camping-australia, choosing-campsite-australia, how-to-plan-trip-aussiecamps | queued |
| a12 | how-to-use-aussiecamps-filters, save-collections-aussiecamps, aussiecamps-place-details, aussiecamps-widgets-guide | queued |
| a13 | driving-with-road-trains-australia, australia-road-trip-fatigue-wildlife-safety | queued |
| k01 | new-zealand-grocery-prices-2026, doc-huts-new-zealand-guide, public-transport-costs-new-zealand-2026, new-zealand-road-signs-visitors | applied |
| k02 | new-zealand-biosecurity-camping-gear, doc-campsite-rules, new-zealand-road-trip-fuel-cost-2026, campervan-road-rules-new-zealand | applied |
| k03 | eating-out-new-zealand-prices-2026, new-zealand-travel-cost-2026, speed-limits-new-zealand-visitors, beer-wine-coffee-prices-new-zealand | applied |
| k04 | towing-caravan-new-zealand, wof-registration-campervan-new-zealand, accommodation-costs-new-zealand-2026, overseas-driver-licence-new-zealand | in progress |
| k05 | sandflies-new-zealand-camping, volcanic-safety-new-zealand-travel, dogs-camping-new-zealand, domestic-flight-costs-new-zealand-2026 | in progress |
| k06 | cook-strait-ferry-campervan-guide, kauri-dieback-camping-travel, bus-ferry-train-costs-new-zealand, alcohol-fatigue-driving-new-zealand | queued |
| k07 | doc-hut-rules-etiquette, river-crossing-safety-new-zealand, left-side-driving-new-zealand, new-zealand-driving-day-planner | queued |
| k08 | wildlife-livestock-road-safety-new-zealand, winter-camping-new-zealand, new-zealand-severe-weather-camping, earthquake-tsunami-camping-new-zealand | queued |
| k09 | winter-driving-new-zealand-campervan, one-lane-bridges-gravel-roads-new-zealand, camping-rules-local-councils-new-zealand, campervan-budget-new-zealand | queued |
| k10 | food-fuel-resupply-new-zealand-road-trip, plan-trip-kiwicamping, save-places-kiwicamping, kiwicamping-filters-guide | queued |
| k11 | kiwicamping-offline-data-guide, kiwicamping-weather-look-around, kiwicamping-currency-place-costs | queued |

## Next
- 2026-10-20 (2): orchestrator answers applied. Spanish-only catalog `aussiecamps-website-es` in docs/translation.config.json (brands, AUD, agencies, Indigenous names protected; state exonyms in glossary). NOTE values files must say "catalog":"aussiecamps-website-es". Style guide has the new state-name rule (Spanish first, English official name once in parentheses on state-rules intros). Native-voice review run on a06, link fixes and a07 (opus). a07 applied. Drafting model now sonnet high, review opus medium, one subagent at a time.
- Order: a08..a13, `tools` strings, 20 road trips, then rebase i18n/k-es, give Kiwi the same catalog treatment (NZ islands, Spanish forms), k04..k11.
- Demerit points line is an English-source issue passed to A-content; Spanish stays faithful.
- 2026-10-20: AU branch rebased onto origin/main (M2 + tools). a01..a06 applied; 70 `<a data-guide>` link fixes applied to a01..a05 guides (links1). Working files: /tmp/es-work/a/all.json refreshed.
- Remaining AU placeholder errors (data-guide links) sit in queued guides a07+; they are fixed as each batch is rewritten.
- Still to do AU: a07..a13, 20 road-trip guides (articles.*-road-trip etc, 53 units each, all missing), `tools` namespace (116 units missing), then glossary errors (86, exonyms, see open question).
- Kiwi branch i18n/k-es NOT yet rebased (do `git fetch origin && git rebase origin/main`, locales:sync, translations:source there); k04..k11 pending.
- Remaining guides in GSC order, both sites interleaved.
- After the foundation milestones merge (orchestrator will message): rebase, regenerate en.json,
  translate road trips, Kiwi legacy pages, `consent`/`article`/`tools` namespaces, `<a data-guide>` markup.

## Open questions for the orchestrator
- Protected place names: Spanish readers expect «Isla Norte / Isla Sur», «Nueva Gales del Sur»,
  «Australia Occidental», «Territorio del Norte». The configs protect the English forms, so the
  engine rejects the exonyms. Current approach: English name plus the Spanish exonym in
  parentheses on first mention. A per-locale exception would read more naturally.
- Still open: dates render in English inside Spanish pages (`formatArticleDate` uses en-GB; `exchangeRateDate`
  and `priceTable.asOf` are English strings): «Actualizado el 18 August 2026».
- English source facts to check: support page says map and place details are free with two saved
  lists, which conflicts with the Pass boundary in THREADS.md.
