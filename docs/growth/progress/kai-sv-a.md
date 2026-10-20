# kai-sv-a progress (Kai account)

Lane: raise Swedish (sv) coverage on AussieCamps. Branch `i18n/a-sv-2`. Touches only `lib/translations/sv.json`, `lib/translations/meta/sv.json` and this file.
Out of scope (another lane owns): wikicamps-alternatives, campermate-alternatives, best-fuel-price-apps-australia, best-road-trip-planner-apps-australia, best-free-camping-apps-australia, best-caravan-rv-apps-australia, best-apps-working-holiday-australia.

## Queue (order: Search Console impressions, then rules/safety, costs, app guides, camping guides, road trips)
- B1: camping-rules-south-australia, dump-points-australia-guide, camping-rules-queensland, camping-rules-act, caravan-park-vs-holiday-park
- B2: australia-road-rules-state-differences, camping-fees-australia-2026, australia-travel-cost-2026, towing-caravan-australia-road-rules, australia-road-trip-fuel-cost-2026
- B3: camping-rules-tasmania, is-free-camping-legal-australia, camping-rules-northern-territory, australian-road-signs-visitors-guide, camping-water-planning
- B4: bus-train-costs-australia-2026, sunshine-coast-hinterland-camping, camping-without-phone-signal, campfires-camping-australia, campervan-driving-australia-safety-guide
- B5: adelaide-to-uluru-road-trip, accommodation-costs-australia-2026, campervan-road-trip-budget-australia, driving-in-australia-road-rules-visitors, australian-alps-camping-route
- B6 (rules/safety, 0 imp): flinders-ranges-camping-guide(5 imp), driving-in-australia-overseas-licence, overseas-driver-licence-australia-state-guide, driving-with-road-trains-australia, australia-road-trip-fatigue-wildlife-safety
- B7: camping-weather-safety-australia, responsible-camping-australia, camping-with-dogs-australia, road-trip-fuel-planning-australia, choosing-campsite-australia
- B8 (app guides): how-to-plan-trip-aussiecamps, how-to-use-aussiecamps-filters, save-collections-aussiecamps, aussiecamps-place-details, aussiecamps-widgets-guide
- B9 (camping): camping-packing-list-australia, first-campervan-trip-australia
- B10-B11 (road trips): tasmania-camping-loop, darwin-kakadu-litchfield-loop, sydney-south-coast-camping, nullarbor-crossing-camping-guide, queensland-outback-way, south-west-wa-camping-loop, victoria-high-country-camping, red-centre-way-camping, kangaroo-island-camping-guide, blue-mountains-camping-weekend, gibb-river-road-camping

## Done
- All 48 in-scope AussieCamps guides are complete in Swedish (batches B1 to B11, commits on branch `i18n/a-sv-2`). sv complete guides 70/77; the 7 not translated are the listicles another lane owns (wikicamps-alternatives, campermate-alternatives, best-fuel-price-apps-australia, best-road-trip-planner-apps-australia, best-free-camping-apps-australia, best-caravan-rv-apps-australia, best-apps-working-holiday-australia).
- Every batch: draft, native review (Opus medium for B1 to B6; single-handed for B7 to B11 under the overnight one-worker rule), negation re-read against the English, lint, `translations:stamp`, `content:check`, commit.
- Handoffs: after B3, after B6, then per batch overnight. Final `npm run check` run before the last handoff.

## Next
- Nothing in scope. If the English of any guide changes, `npm run content:check` reports stale sv strings: re-translate those units only.

## Blockers
none

## Working method (to resume)
Scratch in `/tmp/sv-a/` (not in repo): `a/full.json` = `translation-engine packet --config docs/translation.config.json --locale sv --catalog aussiecamps-website-sv --no-usage`; `scripts/split.py a <gsc tsv>` splits per slug into `a/src/<slug>.json`; values in `a/out/<slug>.json`; `scripts/lint.py`, `scripts/neg.py` (run from /tmp/sv-a), `scripts/mkinput.py`, `scripts/gate.mts`, `BRIEF.md` (subagent brief). Recreate from /tmp/sv-work/scripts (old lane) if lost; applied units drop out of new packets.
