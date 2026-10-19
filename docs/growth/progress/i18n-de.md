# i18n-de progress (German, both sites)

Thread: i18n-de (Kai account). Branches: `i18n/a-de` (aussiecamps-web), `i18n/k-de` (kiwicamping-web).
Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-de`, `~/.t3/worktrees/kiwicamping-web/i18n-k-de`.
Style guide: `docs/translation-style/de.md` (identical in both repos).

## Done
- Style guide and glossary written (research: GSC queries, ASO de-DE keywords, app xcstrings, German NZ/AU travel media).
- Milestone 1: UI (220 strings per site, homepage testimonials untouched) and support/privacy/terms rewritten on both sites.

## In progress
- Re-review and rewrite of every guide, highest-impression pages first, in batches of 5 guides
  (AU a01..a10 = 50 guides, NZ k01..k09 = 43 guides). Working files live in /tmp/de-i18n (batches/, out/).

## Next
- After the foundation milestones reach main: rebase, re-translate the privacy page (new analytics
  section), the `consent` namespace, guide tables, road trips, KiwiCamping legacy articles, the
  `article` and `tools` namespaces and the `<a data-guide>` link markup; run `translations:stamp`.

## Blockers and open questions for the orchestrator
- Protected terms force English where German has standard exonyms: "Tasmania" (AussieCamps, 35 units)
  should be "Tasmanien"; "North Island"/"South Island" (KiwiCamping, 15 units) should be
  "Nordinsel"/"Südinsel". Proposal: move these from `protectedTerms` to per-locale `glossary`
  renderings. Until then the applied text uses the English forms; German masters with the exonyms are
  kept for re-application.
