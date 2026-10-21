# ava-zh-hant-list progress (Ava)

Lane: translate every app listicle without a zh-hant translation into zh-hant (Taiwan), one listicle per batch,
hand off after every three. Branch `i18n/a-zh-hant-list` (AussieCamps) and `i18n/k-zh-hant-list` (KiwiCamping,
worktree `~/.t3/worktrees/kiwicamping-web/ava-zh-hant-list`). Never pushed; the orchestrator merges.

## Method (scratch in /tmp/ava-zh, recreate if lost)
- `mkinput.mjs <a|k> <catalog> <slug...>` writes `in-<site>-<slug>.json` from the engine packet
  (catalogs `aussiecamps-website-zh-Hant`, `kiwicamping-website-zh-Hant`).
- `BRIEF.md` drafter brief, `REVIEW-BRIEF.md` reviewer brief, `check.mjs <values>` mechanical checks.
- Opus (medium) drafts, Opus (medium) native review with negation table, apply with
  `translation-engine apply --config docs/translation.config.json --input <values>`, then
  `npm run translations:stamp -- --locale zh-hant`, `npm run content:check`, commit.

## Status (all 21 missing at start, 2026-10-21)
AussieCamps: wikicamps-alternatives, campermate-alternatives, best-fuel-price-apps-australia,
best-road-trip-planner-apps-australia, best-free-camping-apps-australia, best-caravan-rv-apps-australia,
best-apps-working-holiday-australia, best-weather-apps-camping-australia, best-money-saving-travel-apps-australia,
hipcamp-alternatives: none done yet.
KiwiCamping: rankers-alternatives, campermate-alternatives, road-trip-planner-apps-new-zealand,
free-camping-apps-new-zealand, best-travel-apps-new-zealand, wikicamps-alternatives, best-campervan-apps-new-zealand,
best-weather-apps-new-zealand, fuel-price-apps-new-zealand, working-holiday-apps-new-zealand,
money-saving-travel-apps-new-zealand: none done yet.

## Blockers / notes
None.
