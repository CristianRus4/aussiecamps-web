# ava-i18n-a-list-1 progress

Lane: Ava account. Branch `i18n/a-list-1` (aussiecamps-web). Never pushed; the orchestrator merges.
Task: translate the five scheduled AussieCamps listicles (wikicamps-alternatives, campermate-alternatives,
best-fuel-price-apps-australia, best-road-trip-planner-apps-australia, best-free-camping-apps-australia) into
de, nl, da, nb, sv, one language at a time, all pages per language. Engine catalogs: de and nl in `aussiecamps-website`;
da, nb, sv each have their own (`aussiecamps-website-<code>`).

## Method (to resume)
- Working files in `/tmp/alist1` (recreate if lost): `src/<slug>.json` (flat key -> English, from en.json leaves),
  `BRIEF.md` (drafter brief), `out/<locale>/<slug>.json` (drafts), `scripts/lint.mjs` (keys, numbers, data-guide, brand,
  dashes, offline-map), `scripts/apply.sh <locale> [--dry-run]` (merges and runs `translation-engine apply`).
- Per language: Sonnet-high drafter for all five pages, own negation check, Opus-medium native review, apply,
  `npm run translations:stamp -- --locale <code>`, `npm run content:check`, commit.

## Done
- de: all five pages translated, Opus-reviewed, negation-checked, applied and stamped; `content:check` passes (de 75/75 guides).

## Next
nl, da (drafted and reviewed in /tmp/alist1/out, apply next), then nb, sv.

## Blockers
None.
