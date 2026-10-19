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
  - AU wave 2: public-transport-costs-2026, domestic-flight-costs-2026, camping-rules QLD,
    grocery-prices-2026, camping-rules ACT, best-time-camping, caravan-park-vs-holiday-park,
    road-rules-state-differences.
  - NZ wave 2: travel-cost-2026, biosecurity-camping-gear, eating-out-prices-2026, road-signs,
    domestic-flight-costs-2026, wof-registration, accommodation-costs-2026, volcanic-safety.

## In progress
- Wave 3 (subagents): AU camping-fees-2026, travel-cost-2026, interstate-biosecurity,
  towing-caravan, fuel-cost-2026, camping-rules TAS, is-free-camping-legal, camping-rules NT;
  NZ beer-wine-coffee-prices, dogs-camping, cook-strait-ferry, bus-ferry-train-costs, sandflies,
  overseas-driver-licence, doc-hut-rules-etiquette, river-crossing-safety.

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
  French until decided; their rewrites are held in `/tmp/i18n-fr/held-<catalog>.json` (AU: 36 units, NZ: 5 units so far).
