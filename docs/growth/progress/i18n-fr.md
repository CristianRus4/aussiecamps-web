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
- Typography normalised on everything rewritten (U+00A0 before `: ; ? !`, inside « », in numbers
  and before units/symbols; typographic apostrophes).

## In progress
- Guides, in Search Console impression order (`pages-3m.tsv`), rewritten by subagents and edited
  here before apply. Wave 1: AU alcohol/coffee prices, sleeping in a car, eating out prices, dump
  points, camping rules NSW/VIC/WA/SA; NZ grocery prices, DOC huts, DOC campsite rules, campervan
  road rules, speed limits, fuel cost, public transport costs, towing.

## Next
- Remaining guides (AU 34, NZ 35), same order.
- After A-foundation M1/M2 and K-foundation merge to main: rebase, translate the `consent`
  namespace, the new privacy section, guide tables, road trips, KiwiCamping legacy pages and the
  `<a data-guide>` markup; run `npm run translations:stamp -- --locale fr` and
  `npx tsx scripts/audit-content.mjs --strict --locale fr`.

## Blockers / decisions needed
- **State and island names.** `protectedTerms` forces the English New South Wales, South Australia,
  Western Australia, Tasmania, Northern Territory, Australian Capital Territory, Central Australia
  (AU) and North Island, South Island, Stewart Island (NZ) into French prose. Natural French uses
  Nouvelle-Galles du Sud, Australie-Méridionale, Australie-Occidentale, Tasmanie, Territoire du Nord,
  île du Nord, île du Sud. Proposed: move them from `protectedTerms` to per-locale glossary entries
  (or add a per-locale exception to the engine). Units that contain these names keep their current
  French until decided; their rewrites are held in `/tmp/i18n-fr/held-*.json`.
