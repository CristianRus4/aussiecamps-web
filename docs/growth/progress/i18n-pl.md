# i18n-pl progress (Polish, both sites)

Thread: i18n-pl (main account). Branches: `i18n/a-pl` (aussiecamps-web), `i18n/k-pl` (kiwicamping-web).
Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-pl`, `~/.t3/worktrees/kiwicamping-web/i18n-k-pl`.
Style guide: `docs/translation-style/pl.md` (identical in both repos). Register: ty (informal), as in the app.
Working files (packets, batches, values, scripts): `/tmp/pl-i18n` (src/queue.py <a|k> lists remaining guides by
GSC impressions; src/make_batch.py; src/check.py; agent-brief.md for drafting subagents).

## Status (2026-10-21)
- Merged origin/main twice (latest 2026-10-21) in both repos; `locales:sync` and `translations:source` run; stale units found by
  English diff (old en.json vs merged) and re-translated; `translations:stamp` run. Polish-only catalog
  (`<site>-website-pl`) kept in `docs/translation.config.json` (Polish state/island names).
- GO-LIVE SET COMPLETE on both sites: UI 220/220 (testimonials exempt, pl has `reviews: false`), consent bar,
  home, support, privacy (7 sections incl. Website analytics), terms. `LOCALES_PREVIEW=1 npm run content:check`:
  zero stale, no number-parity errors for pl.
- Not yet translated: `tools` namespace (AU 116 strings, NZ 152), most guides and road trips.
- Every guide batch: Sonnet draft -> Opus native review (found fact slips in about 40% of units) -> merge ->
  engine dry-run -> apply -> stamp -> content:check. Editor decisions: /tmp/pl-i18n/lessons.md and lessons2.md.
- Open for orchestrator: AU English still says "Street View" in 7 UI strings (KiwiCamping now says Apple Look Around).

## Guides done (Opus-reviewed)
- AU (23 of 80): alcohol-coffee-drink-prices, public-transport-costs, eating-out, domestic-flight-costs,
  australia-grocery-prices, best-time-camping, interstate-biosecurity-road-trip, camping-water-planning,
  bus-train-costs, accommodation-costs, campervan-road-trip-budget, camping-without-phone-signal,
  campervan-driving-safety-guide, how-to-use-filters, save-collections, place-details, widgets-guide, how-to-plan-trip,
  great-ocean-road, east-coast-road-trip, perth-to-broome, brisbane-to-cape-tribulation, melbourne-to-adelaide.
- NZ (23 of 89): new-zealand-grocery-prices, doc-huts-guide, public-transport-costs, doc-campsite-rules,
  campervan-road-rules, speed-limits, towing-caravan, biosecurity-camping-gear, road-trip-fuel-cost, travel-cost,
  eating-out, accommodation-costs, domestic-flight-costs, road-signs, wof-registration, volcanic-safety,
  beer-wine-coffee-prices, overseas-driver-licence, east-cape, northland-cape-reinga, arthurs-pass, dogs-camping,
  cook-strait-ferry.

## Go-live review
- Opus native review of the whole go-live set (UI, consent, home, support, privacy incl. Website analytics, terms) done on both
  sites (37 AU / 27 NZ units reworded, one wrong-country string fixed on NZ). Four guide batches done (stop point of this run).

## Next
- `tools` namespace (AU 116, NZ 152 strings), then `python3 /tmp/pl-i18n/src/queue.py a|k` order (AU 23 excluded pages skipped
  until released), new guides from main, road trips.

## Blockers and open questions for the orchestrator
- Plurals: the site prints "{n} {guidePlural}" and "{n} {places}" with a singular/plural switch only. Polish needs
  three forms. Chosen: guidePlural "poradników", places AU "miejsca", NZ "miejsc". Proper fix: Intl.PluralRules.
- Flip pl from draft to live in `lib/locales.json` (orchestrator) once the judged batches pass.
