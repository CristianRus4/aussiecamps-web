# i18n-da progress (Danish, both sites)

Thread: i18n-da (Kai account). Branches: `i18n/a-da` (aussiecamps-web), `i18n/k-da` (kiwicamping-web).
Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-da`, `~/.t3/worktrees/kiwicamping-web/i18n-k-da`.
Style guide: `docs/translation-style/da.md` (identical in both repos). New locale on both sites.
Working files (packets, batches, subagent values): `/tmp/da-i18n` (batches/, out/).

## Done
- Style guide and glossary (research: GSC, ASO da keywords, app xcstrings da, Danish AU/NZ travel media).
- `da` added to `docs/translation.config.json` (locales, targets, register informal, glossary Australia -> Australien) and an empty `lib/translations/da.json` in both repos.

## In progress
- UI, consent and support/privacy/terms (both sites), written by the thread itself.
- Guides by impressions (pages-3m.tsv): AU a01 (alcohol-coffee-drink-prices, sleeping-in-car, camping-rules-nsw), a02 (public-transport-costs, eating-out-prices, camping-rules-wa); NZ k01 (grocery-prices, doc-huts, public-transport-costs), k02 (road-signs, biosecurity-gear, doc-campsite-rules). Subagent drafts, then edited and applied here.

## Next
- Remaining guides in impression order (`/tmp/da-i18n/prio-a.tsv`, `prio-k.tsv`).
- After the foundation milestones reach main: rebase, road trips, K legacy articles, `article`/`tools` namespaces, `<a data-guide>` markup, `translations:stamp`.

## Blockers and open questions for the orchestrator
- `da` is not yet in `lib/i18n.ts` / `lib/locales.json`, so `content:check` does not see da.json and `--strict --locale da` reports "Unknown locale" until the locale is registered (foundation/orchestrator).
- Testimonials (review1..review9*, reviewsEyebrow, reviewsTitle) are deliberately left out of da.json. The current `isTranslated` gate requires every UI key, so the locale-registry change must exempt them for new locales.
- Protected terms force English where Danish has standard exonyms: Tasmania (Tasmanien), Central Australia (Centralaustralien), North Island (Nordøen), South Island (Sydøen). Applied text uses the English forms with Danish grammar ("i Tasmania", "på South Island"), written so a later mechanical swap is safe. Same proposal as de/fr: move them from `protectedTerms` to per-locale glossary renderings.
