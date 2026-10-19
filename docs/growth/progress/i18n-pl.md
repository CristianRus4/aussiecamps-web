# i18n-pl progress (Polish, both sites)

Thread: i18n-pl (Max account). Branches: `i18n/a-pl` (aussiecamps-web), `i18n/k-pl` (kiwicamping-web).
Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-pl`, `~/.t3/worktrees/kiwicamping-web/i18n-k-pl`.
Style guide: `docs/translation-style/pl.md` (identical in both repos). Register: ty (informal), as in the app.
Working files (packets, values, sources): `/tmp/pl-i18n`.

## Done
- Style guide and glossary (research: ASO pl keywords, app xcstrings, Polish AU/NZ travel blogs; GSC had no
  Polish queries yet).
- `pl` added to `docs/translation.config.json` (locales, targets, register informal, AU glossary "Australia").
- `lib/translations/pl.json` created in both repos.
- Milestone 1: UI (226 strings per site; testimonials review*, reviewsEyebrow, reviewsTitle deliberately left
  out), `consent` namespace, support, privacy (7 sections incl. Website analytics) and terms on both sites.

## In progress
- Guides by search value (pages-3m.tsv), interleaving both sites.

## Next
- After the foundation milestones reach main: rebase, road trips, KiwiCamping legacy articles, `article` and
  `tools` namespaces, `<a data-guide>` markup, `translations:stamp`.

## Blockers and open questions for the orchestrator
- Polish is not wired into the site code yet (`lib/localized.ts` localeCodes, routes). Foundation/orchestrator
  needs to register `pl` (draft) so content:check and the build see it.
- Testimonial keys are left empty, so `isTranslated` (every UI key filled) will keep pl unpublished until the
  gate skips review* keys for new locales.
- Plurals: the site prints "{n} {guidePlural}" and "{n} {places}" with only a singular/plural switch. Polish
  needs three forms (1 poradnik, 2–4 poradniki, 5+ poradników). Chosen: guidePlural "poradników" (fits 9 of
  the 10 category counts; AU "Rules & safety" = 22 should be "poradniki"), places AU "miejsca" (most AU guides
  list 3–4 places), NZ "miejsc" (most list 5+). Proper fix: Intl.PluralRules with few/many strings.
- Protected terms force English state/island names where Polish uses exonyms (Nowa Południowa Walia, Wiktoria,
  Australia Zachodnia, na Tasmanii; Wyspa Północna/Południowa). Applied text uses "w stanie Victoria",
  "w Nowej Południowej Walii (New South Wales)", "na Wyspie Południowej (South Island)" patterns. Proposal in
  the style guide §6: per-locale glossary renderings instead of protectedTerms.
