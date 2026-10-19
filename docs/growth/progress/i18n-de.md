# i18n-de progress (German, both sites)

Thread: i18n-de (Kai account). Branches: `i18n/a-de` (aussiecamps-web), `i18n/k-de` (kiwicamping-web).
Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-de`, `~/.t3/worktrees/kiwicamping-web/i18n-k-de`.
Style guide: `docs/translation-style/de.md` (identical in both repos).

## Done
- Style guide and glossary (GSC queries, ASO de-DE keywords, app xcstrings, German NZ/AU travel media).
- Milestone 1 (merged): UI and support/privacy/terms on both sites.
- Judge fixes for milestone 1; privacy "Website analytics" section (7 sections now) and the `consent` namespace on both sites.
- Guides re-reviewed and rewritten (batches of 5, ordered by Search Console impressions):
  - AussieCamps a01, a02: alcohol-coffee-drink-prices, sleeping-in-car, eating-out-prices, public-transport-costs,
    camping-rules-new-south-wales, camping-rules-western-australia, campervan-road-trip-budget, dump-points,
    accommodation-costs, interstate-biosecurity-road-trip.
  - KiwiCamping k01, k02: road-signs, public-transport-costs, grocery-prices, biosecurity-camping-gear,
    doc-huts-guide, campervan-road-rules, eating-out-prices, accommodation-costs, road-trip-fuel-cost,
    doc-campsite-rules.

## In progress
- AussieCamps a03..a10 (40 guides), KiwiCamping k03..k09 (33 guides). Working files: /tmp/de-i18n
  (batches/, out/ = German masters with exonyms, applied/ = what was applied).

## Next
- After the foundation M2 reaches main: road trips, KiwiCamping legacy articles, guide tables, the
  `article`/`tools` namespaces and the `<a data-guide>` link markup; `translations:stamp` once it exists.

## Blockers and open questions for the orchestrator
- Protected terms force English where German has standard exonyms: "Tasmania" (AussieCamps) should be
  "Tasmanien"; "North Island"/"South Island" (KiwiCamping) should be "Nordinsel"/"Südinsel". Proposal:
  move them from `protectedTerms` to per-locale `glossary` renderings. Until then the applied text uses
  the English forms; the German masters with the exonyms are kept for re-application.
