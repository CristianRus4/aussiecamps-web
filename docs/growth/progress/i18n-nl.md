# i18n-nl progress (Kai account)

Dutch (nl) on both sites. Branches: `i18n/a-nl` (aussiecamps-web), `i18n/k-nl` (kiwicamping-web). Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-nl`, `~/.t3/worktrees/kiwicamping-web/i18n-k-nl`.

## State at start (2026-10-19)
- Both sites already 100% "translated" in nl (AU 3223 units, NZ 2334 units), engine audit clean.
- Quality problems found: literal headings and calques, "campground" left in English, "loospunt" vs app's "Lozingspunten", AU prices as "80 AUD" but NZ as "NZ$ 15", app list labels not matching the app (Leuk / Wil ik heen / Punaises), "offline kaarten" and "offline kampeerkaart" wording (6 units), unstressed "jouw".

## Done
- [x] Style guide `docs/translation-style/nl.md` (identical in both repos), with glossary and evidence.

## In progress
- Full rewrite pass, every unit, both repos. Order: UI, support/privacy/terms, guides by English impressions (pages-3m.tsv).

## Next
- Road trips, Kiwi legacy pages, consent/article/tools namespaces and data-guide link markup once the foundation milestones merge (wait for the orchestrator's message).
- A-foundation M1 (pending merge): `consent` namespace (6 strings), privacy page gains a "Website analytics" section (nl privacy goes stale until re-translated), guide sections may gain `table: { caption, head, rows }`. Hand-off check becomes `npx tsx scripts/audit-content.mjs --strict --locale nl`.
- A-foundation M2: road trips translatable, `<a data-guide>` markup in en.json bodies, `npm run translations:stamp -- --locale nl` after each batch.

## Working method (to resume)
- Work files are made from `translation-engine packet --locale nl --all` and split per page under /tmp/nl-work/{a,k}/ (scratch, not in the repo; regenerate with the same command if lost).
- Workers write values files; this thread lints (Dutch lint script in /tmp/nl-work/scripts/lint.py), edits, dry-runs and applies. Single writer per locale file.

## Open questions for the orchestrator
- State and island names are protected terms (house rule), so Dutch copy says "Tasmania", "het South Island". Dutch media mostly write Tasmanië, Noordereiland/Zuidereiland, West-Australië. Allowing nl exonyms would need a protectedTerms exception per locale; not changed.
