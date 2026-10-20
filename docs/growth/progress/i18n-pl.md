# i18n-pl progress (Polish, both sites)

Thread: i18n-pl (main account). Branches: `i18n/a-pl` (aussiecamps-web), `i18n/k-pl` (kiwicamping-web).
Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-pl`, `~/.t3/worktrees/kiwicamping-web/i18n-k-pl`.
Style guide: `docs/translation-style/pl.md` (identical in both repos). Register: ty (informal), as in the app.
Working files (packets, batches, values, scripts): `/tmp/pl-i18n` (src/queue.py <a|k> lists remaining guides by
GSC impressions; src/make_batch.py; src/check.py; agent-brief.md for drafting subagents).

## Status (2026-10-20)
- Rebased onto origin/main (M2) in both repos; `locales:sync` and `translations:source` run; Polish-only catalog
  (`<site>-website-pl`) kept in `docs/translation.config.json` so state/island names are Polish exonyms.
- GO-LIVE SET COMPLETE on both sites: UI 220/220 (testimonials exempt, pl has `reviews: false`), consent bar,
  home, support, privacy (7 sections incl. Website analytics), terms. `LOCALES_PREVIEW=1 npm run content:check` passes.
- Not yet translated: `tools` namespace (AU 116 strings, NZ 152) and road trips beyond those queued below.

## Guides done
- AU: alcohol-coffee-drink-prices-australia, public-transport-costs-australia-2026, eating-out-australia-prices-2026.
- NZ: new-zealand-grocery-prices-2026, doc-huts-new-zealand-guide, public-transport-costs-new-zealand-2026.

## Next
- Batch 1 (in progress): AU domestic-flight-costs, grocery-prices, best-time-camping, interstate-biosecurity,
  camping-water-planning; NZ doc-campsite-rules, campervan-road-rules, speed-limits, towing-caravan, biosecurity-gear.
- Then continue per `python3 /tmp/pl-i18n/src/queue.py a|k` order. AU rule/cost pages listed as excluded in the
  run brief (23 pages, paired English rewrite) are skipped until released.
- Opus native review per batch, then `tools` namespace and legacy articles.

## Blockers and open questions for the orchestrator
- Plurals: the site prints "{n} {guidePlural}" and "{n} {places}" with a singular/plural switch only. Polish needs
  three forms. Chosen: guidePlural "poradników", places AU "miejsca", NZ "miejsc". Proper fix: Intl.PluralRules.
- Flip pl from draft to live in `lib/locales.json` (orchestrator) once the judged batches pass.
