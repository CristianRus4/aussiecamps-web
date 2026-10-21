# ava-ja-polish-a progress

Lane: Ava account. Branch `i18n/a-ja-polish` (aussiecamps-web). Never pushed; the orchestrator merges.
Task: rewrite the AussieCamps ja app-comparison guides so they read natively (読点 2.5-3.1/sentence, calques).

## Method (to resume)
- Working files in `/tmp/jap` (recreate if lost): `src/<slug>.{en,ja}.json` (article objects from en.json / ja.json), `BRIEF.md` (rewriter brief), `lint.mjs`, `out/<slug>.json` (rewrite), `final/` (reviewed).
- Per guide: Opus-medium rewrite, Opus-medium native review, negation check, merge into `lib/translations/ja.json` `.articles.<slug>`, `npm run translations:stamp -- --locale ja`, `npm run content:check`, commit.
- Baseline 読点/文 (sections+intro+faq): best-camping-app 2.97, best-caravan-rv-apps 2.92, campermate-alternatives 2.64, best-free-camping-apps 2.54, wikicamps-alternatives 2.47, best-road-trip-planner-apps 2.46. Also over 1.8: hipcamp-alternatives, best-weather-apps-camping-australia (check after the six).

## Done
- Batch 1 (rewritten by Opus-medium, reviewed by Opus-medium, negation-checked side by side, stamped, content:check and full `npm run check` pass): best-free-camping-apps-australia (読点/文 2.54 -> 1.14), best-caravan-rv-apps-australia (2.92 -> 1.19), best-camping-app-australia (2.97 -> 0.91).
- Term decision: 旅行プランナー only for the AussieCamps (Pass-only) planner; other apps' planners keep their own name (Trip Planner) or a plain phrase.

## Next
Batch 2 (in flight): wikicamps-alternatives, campermate-alternatives, best-road-trip-planner-apps-australia. Then check hipcamp-alternatives and best-weather-apps-camping-australia.

## Blockers
None.
