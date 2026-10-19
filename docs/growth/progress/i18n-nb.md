# i18n-nb progress (Norwegian Bokmål, both sites)

Thread: i18n-nb (Ava account). Branches: `i18n/a-nb` (aussiecamps-web, worktree
`~/.t3/worktrees/aussiecamps-web/i18n-a-nb`) and `i18n/k-nb` (kiwicamping-web, worktree
`~/.t3/worktrees/kiwicamping-web/i18n-k-nb`). Never pushed; the orchestrator merges.
Style guide: `docs/translation-style/nb.md` (identical in both repos).

## Setup
- New locale. `lib/translations/nb.json` created in both repos. Engine catalogs `aussiecamps-website-nb` and
  `kiwicamping-website-nb` appended to each `docs/translation.config.json` (own catalog per locale, as ja does,
  so locale threads do not collide). Testimonials (`ui.review*`, `reviewsEyebrow`, `reviewsTitle`) are
  `untranslatedKeys` and are absent from nb.json.
- The site code does not know `nb` yet (no locale registry on main), so `npm run content:check` does not cover
  it. `/tmp/nb-i18n/complete.py` mirrors the site's completeness gate (`isArticleComplete`, `isPageComplete`,
  UI) and runs a Norwegian lint.

## Working files (outside the repos, recreate if lost)
- `/tmp/nb-i18n/{a,k}-all.json`: engine `packet --locale nb --all` snapshots.
- `/tmp/nb-i18n/{a,k}/`: values files per batch; `flat.py` (nested to engine keys), `nbsp.py`, `complete.py`.

## Done
- Style guide and glossary (ASO no keywords, app nb strings, Campingvettreglene, Norwegian AU/NZ travel sites).
- Milestone 1: UI (220 strings per site, testimonials untouched), consent namespace, support/privacy/terms
  (privacy with all 7 sections, including Website analytics) on both sites.

## Next
- Guides by search impressions, interleaving both repos (AU: alcohol-coffee, sleeping-in-car, NSW rules,
  public transport, eating out, WA rules, dump points, VIC rules ...; NZ: grocery prices, DOC huts, public
  transport, road signs, biosecurity, DOC campsite rules, fuel cost, campervan road rules ...).
- After the foundation milestones reach main: rebase, road trips, K legacy articles, `article`/`tools`
  namespaces, `<a data-guide>` markup, `translations:stamp`.

## Notes for the orchestrator
- nb needs a locale registry entry (segment `nb`, htmlLang `nb`, hreflang `nb` (optionally also `no`),
  og `nb_NO`, intl `nb-NO`) before it can render; the UI gate must ignore the testimonial keys for new locales.
- Decision: New Zealand island names use the Norwegian exonyms Nordøya and Sørøya (Store norske leksikon,
  Norwegian NZ travel media). The nb catalog therefore does not protect "North Island"/"South Island".
  Australian state names stay English, per the house rule.
- English source note: the support page says "Map and place details are free, together with two saved
  lists", which looks inconsistent with the Pass boundary in THREADS.md. Translated as written.
