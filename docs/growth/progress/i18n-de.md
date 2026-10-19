# i18n-de progress (German, both sites)

Thread: i18n-de (Kai account). Branches: `i18n/a-de` (aussiecamps-web), `i18n/k-de` (kiwicamping-web).
Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-de`, `~/.t3/worktrees/kiwicamping-web/i18n-k-de`.
Style guide: `docs/translation-style/de.md` (identical in both repos).

## Done
- Style guide and glossary (GSC queries, ASO de-DE keywords, app xcstrings, German NZ/AU travel media).
- Milestone 1 (merged): UI and support/privacy/terms on both sites.
- Judge fixes for milestone 1; privacy "Website analytics" section (7 sections now) and the `consent` namespace on both sites.
- Guides re-reviewed and rewritten (batches of 5, ordered by Search Console impressions):
  - AussieCamps a01..a04 (20 guides, top by impressions; see /tmp/de-i18n/a-order.json first 20).
  - KiwiCamping k01, k02: road-signs, public-transport-costs, grocery-prices, biosecurity-camping-gear,
    doc-huts-guide, campervan-road-rules, eating-out-prices, accommodation-costs, road-trip-fuel-cost,
    doc-campsite-rules.

## In progress (2026-10-20 handoff, session 2)
- Rebased aussiecamps `i18n/a-de` onto main (foundation M2, tools-hubs). English now has `<a data-guide>` links in guides, so:
  - 151 placeholder errors: the 20 rewritten AussieCamps guides need the link tags (batches fa01, fa02) and every remaining guide gets them while rewritten.
  - Batches in /tmp/de-i18n/batches2 (built by mkbatches2.js from `translation-engine packet --all`): fa01-02 link fix, a05-a10 (remaining 30 guides),
    rt01-rt04 (20 road trips), tl01 (tools namespace). Brief: /tmp/de-i18n/BRIEF.md + BRIEF2.md. Outputs in /tmp/de-i18n/out2, apply via toapply.js then dry.sh.
- KiwiCamping k05..k09 (25 guides) still to do; its worktree is not rebased yet (check kiwicamping-web origin/main for its foundation M2).

## Next
- Finish a05-a10, rt01-rt04, tl01 on AussieCamps, then Kiwi (rebase, link fix, k05-k09, road trips, legacy articles, tools).
- `translations:stamp -- --locale de` after each applied chunk if the script is present.

## Blockers and open questions for the orchestrator
- Protected terms force English where German has standard exonyms: "Tasmania" (AussieCamps) should be
  "Tasmanien"; "North Island"/"South Island" (KiwiCamping) should be "Nordinsel"/"Südinsel". Proposal:
  move them from `protectedTerms` to per-locale `glossary` renderings. Until then the applied text uses
  the English forms; the German masters with the exonyms are kept for re-application.
