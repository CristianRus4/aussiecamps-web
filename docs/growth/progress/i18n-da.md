# i18n-da progress (Danish, both sites)

Thread: i18n-da (Kai account). Branches: `i18n/a-da` (aussiecamps-web), `i18n/k-da` (kiwicamping-web).
Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-da`, `~/.t3/worktrees/kiwicamping-web/i18n-k-da`.
Style guide: `docs/translation-style/da.md` (identical in both repos). New locale on both sites.
Working files (packets, batches, subagent values): `/tmp/da-i18n` (batches/, out/).

## Done
- Style guide and glossary (research: GSC, ASO da keywords, app xcstrings da, Danish AU/NZ travel media).
- `da` added to `docs/translation.config.json` (locales, targets, register informal, glossary Australia -> Australien) and an empty `lib/translations/da.json` in both repos.

- Milestone 1: UI (220 strings per site; testimonials deliberately absent), consent bar, support/privacy/terms (privacy incl. the 7-section analytics version) on both sites.
- Milestone 2: the 6 highest-impression guides per site. AU: alcohol-coffee-drink-prices, sleeping-in-car, camping-rules-nsw, public-transport-costs, eating-out-prices, camping-rules-wa. NZ: grocery-prices, doc-huts, public-transport-costs, road-signs, biosecurity-gear, doc-campsite-rules.

## In progress
- Guides in impression order, 3 per batch (batches a03..a17, k03..k15 in /tmp/da-i18n/batches). Subagents draft, the thread edits and applies. Running: a03, a04, k03, k04.

## Next
- Remaining guides in impression order (`/tmp/da-i18n/prio-a.tsv`, `prio-k.tsv`).
- After the foundation milestones reach main: rebase, road trips, K legacy articles, `article`/`tools` namespaces, `<a data-guide>` markup, `translations:stamp`.

## English source issues found while translating (Danish follows the English unless noted)
- NZ new-zealand-road-signs-visitors faq[1][1]: "The large arrow is your direction" contradicts sections[4].body[0]. The Danish says what section 4 says (large arrow = direction with priority). Suggested EN: "The large arrow shows the direction with priority and the small red arrow the direction that gives way."
- NZ new-zealand-biosecurity-camping-gear sections[7].body[1]: foot and mouth has never established in NZ and myrtle rust has been established since 2017, so "each intercepted at the border more than once" needs a fact check; sections[7].body[0] "no land mammals" (NZ has native bats).
- NZ new-zealand-grocery-prices-2026: Countdown is now Woolworths NZ; FAQ promises "dated figures per item" the table does not give.
- NZ public-transport-costs-new-zealand-2026 FAQ mentions Wellington/Christchurch fares the table does not have.
- AU alcohol-coffee-drink-prices FAQ lists schooner, craft beer, carton and wine by the glass, but the price table has different rows. AU eating-out FAQ promises café breakfast and pub meal prices the table lacks.
- AU camping-rules-western-australia FAQ "holiday park pass": DBCA's product is probably the "Holiday Pass"; worth checking.

## Blockers and open questions for the orchestrator
- `da` is not yet in `lib/i18n.ts` / `lib/locales.json`, so `content:check` does not see da.json and `--strict --locale da` reports "Unknown locale" until the locale is registered (foundation/orchestrator).
- Testimonials (review1..review9*, reviewsEyebrow, reviewsTitle) are deliberately left out of da.json. The current `isTranslated` gate requires every UI key, so the locale-registry change must exempt them for new locales.
- Protected terms force English where Danish has standard exonyms: Tasmania (Tasmanien), Central Australia (Centralaustralien), North Island (Nordøen), South Island (Sydøen). Applied text uses the English forms with Danish grammar ("i Tasmania", "på South Island"), written so a later mechanical swap is safe. Same proposal as de/fr: move them from `protectedTerms` to per-locale glossary renderings.
