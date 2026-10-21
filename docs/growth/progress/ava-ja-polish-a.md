# ava-ja-polish-a progress

Lane: Ava account. Branch `i18n/a-ja-polish` (aussiecamps-web). Never pushed; the orchestrator merges.
Task: rewrite the AussieCamps ja app-comparison guides so they read natively (読点 2.5-3.1/sentence, calques).

## Method (to resume)
- Working files in `/tmp/jap` (recreate if lost): `src/<slug>.{en,ja}.json` (article objects from en.json / ja.json), `BRIEF.md` (rewriter brief), `lint.mjs`, `out/<slug>.json` (rewrite), `final/` (reviewed).
- Per guide: Opus-medium rewrite, Opus-medium native review, negation check, merge into `lib/translations/ja.json` `.articles.<slug>`, `npm run translations:stamp -- --locale ja`, `npm run content:check`, commit.
- Baseline 読点/文 (sections+intro+faq): best-camping-app 2.97, best-caravan-rv-apps 2.92, campermate-alternatives 2.64, best-free-camping-apps 2.54, wikicamps-alternatives 2.47, best-road-trip-planner-apps 2.46. Also over 1.8: hipcamp-alternatives, best-weather-apps-camping-australia (check after the six).

## Done
(none yet)

## Next
Batch 1: best-camping-app-australia, best-caravan-rv-apps-australia, best-free-camping-apps-australia. Batch 2: wikicamps-alternatives, campermate-alternatives, best-road-trip-planner-apps-australia. Then check hipcamp-alternatives and best-weather-apps-camping-australia.

## Blockers
None.
