# i18n-fr progress (French, both sites)

Thread: i18n-fr (Kai account). Branches: `i18n/a-fr` (aussiecamps-web) and `i18n/k-fr`
(kiwicamping-web). The same file is kept in both repos.

Worktrees:
- AU: `~/.t3/worktrees/aussiecamps-web/i18n-a-fr`
- NZ: `~/.t3/worktrees/kiwicamping-web/i18n-k-fr`

Scratch (not in git): `/tmp/i18n-fr/` holds the helper scripts (`tools/dump.mjs`, `normalize.mjs`,
`check.mjs`, `order.mjs`), the subagent brief (`BRIEF.md`), work files and values files.

## Done
- Style guide `docs/translation-style/fr.md` (identical in both repos).
- AU and NZ: every UI string rewritten (testimonial keys `review*`, `reviewsEyebrow`,
  `reviewsTitle` left unchanged), support, privacy and terms pages rewritten.
- Batch 1 merged to main. Judge findings (`docs/growth/judge/fr.json`) all fixed; privacy
  "Website analytics" section and `consent.*` translated; effective date 19 October 2026.
- Whole-file typography pass (U+00A0 before `: ; ? !`, inside « », in numbers and before
  units/symbols; typographic apostrophes; no double spaces).
- Guides rewritten (Search Console order):
  - AU: alcohol-coffee-drink-prices, sleeping-in-car, eating-out-prices-2026, dump-points,
    camping-rules NSW/VIC/WA/SA.
  - NZ: grocery-prices-2026, doc-huts, doc-campsite-rules, campervan-road-rules, speed-limits,
    road-trip-fuel-cost-2026, public-transport-costs-2026, towing-caravan.

## In progress
- Wave 2 (subagents): AU public-transport, domestic-flights, camping-rules QLD, grocery, ACT,
  best-time, caravan-park-vs-holiday-park, road-rules-state-differences; NZ travel-cost,
  biosecurity, eating-out, road-signs, domestic-flights, WOF/rego, accommodation-costs, volcanic.

## Next
- Remaining guides in Search Console order (`node /tmp/i18n-fr/tools/order.mjs`).
- After A-foundation M2 / K-foundation equivalents merge: rebase, translate guide tables, road
  trips, KiwiCamping legacy pages and the `<a data-guide>` markup; run
  `npm run translations:stamp -- --locale fr` and
  `npx tsx scripts/audit-content.mjs --strict --locale fr`.

## Blockers / decisions needed
- **State and island names.** `protectedTerms` forces the English New South Wales, South Australia,
  Western Australia, Tasmania, Northern Territory, Australian Capital Territory, Central Australia
  (AU) and North Island, South Island, Stewart Island (NZ) into French prose. Natural French uses
  Nouvelle-Galles du Sud, Australie-Méridionale, Australie-Occidentale, Tasmanie, Territoire du Nord,
  île du Nord, île du Sud. Proposed: move them from `protectedTerms` to per-locale glossary entries
  (or add a per-locale exception to the engine). Units that contain these names keep their current
  French until decided; their rewrites are held in `/tmp/i18n-fr/held-<catalog>.json` (AU: 22 units so far).
