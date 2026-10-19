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

## In progress (2026-10-20, session 2)
- AussieCamps de is complete: all 4411 units translated and stamped (guides a01..a10 rewritten, link markup added, 20 road trips,
  `tools` namespace, native review passes rv-1..rv-3). Branch `i18n/a-de` is rebased on main and `npm run check` passed.
- Working files: /tmp/de-i18n (batches2/, out2/, masters/, BRIEF.md + BRIEF2.md for drafters, REVIEW.md for reviewers, mkbatches2.js, mkreview.js, toapply.js, dry.sh).
- Exonyms: Tasmania/Central Australia (AussieCamps) and North/South Island (KiwiCamping) moved from `protectedTerms` to the German `glossary`
  in docs/translation.config.json, so Tasmanien, Zentralaustralien, Nordinsel, Südinsel are now used natively.
- KiwiCamping: k05..k09 (25 guides) still to rewrite (batches in /tmp/de-i18n/batches), then a review pass; KiwiCamping main has not
  merged its foundation M2 yet, so legacy articles, road trips, `tools`, link markup and stamps wait for it.

## Next
- Kiwi k05..k09 + review; after K-foundation M2 reaches kiwicamping main: rebase, link-fix, road trips, legacy articles, tools, stamp.

## Blockers and open questions for the orchestrator
- None open. English source oddities noticed while drafting are listed in /tmp/de-i18n/en-issues.md and in the batch reports
  (e.g. NT wet season dates, overseas licence 6-month vs "length of stay", Tasmania/Uluru spellings); for the content lanes.

## Paired release sync (2026-10-20, main account)
- Branch `i18n/a-de-b1` (cut from `release/a-content-b1`), tip 56dc9e3: all 23 A-content batch 1 pages translated into German
  (1155 changed units; unchanged units carried over from the rewritten `i18n/a-de` text). `npm run check` passed there once.
  Includes the same `docs/translation.config.json` change as `i18n/a-de` (Tasmania, Central Australia moved from protectedTerms to the German glossary).
- Working files: /tmp/de-i18n/b1 (plan.json, in-*.txt sources, conv.js, assemble.js).
- Do NOT edit those 23 pages in `i18n/a-de`; at merge time de.json hunks for them conflict with `i18n/a-de-b1` (take the b1 text).
