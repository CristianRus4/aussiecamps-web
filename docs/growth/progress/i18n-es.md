# i18n-es progress (Ava)

Thread: i18n-es, Spanish on both sites. Branches: `i18n/a-es` (aussiecamps-web, worktree
`~/.t3/worktrees/aussiecamps-web/i18n-a-es`) and `i18n/k-es` (kiwicamping-web, worktree
`~/.t3/worktrees/kiwicamping-web/i18n-k-es`). Never pushed; the orchestrator merges.

Style guide: `docs/translation-style/es.md` (identical in both repos).

## Working files (outside the repos, recreate if lost)
- `/tmp/es-work/{a,k}/all.json`: engine `packet --locale es --all` snapshot (EN source + current es).
- `/tmp/es-work/BRIEF.md`: brief for the rewrite subagents. `/tmp/es-work/lint.py`: Spanish lint.
- `/tmp/es-work/mkbatch.py`: builds per-batch inputs. Batches: `/tmp/es-work/{a,k}/<id>.{input,values,notes}`.

## Done
- [x] Style guide and glossary (both repos).
- [x] UI strings rewritten: AussieCamps 99, KiwiCamping 100 (testimonials untouched).
- [x] Support, privacy and terms pages: 28 units per site.

## Guides (re-review and rewrite, by GSC impressions)
AussieCamps (50): batches a01..a13. KiwiCamping (43): batches k01..k11. Status per batch:

| Batch | Guides | Status |
|---|---|---|
| a01 | alcohol-coffee-drink-prices, sleeping-in-car, camping-rules-nsw, public-transport-costs | in progress |
| a02 | eating-out-prices, camping-rules-wa, dump-points, camping-rules-victoria | in progress |
| k01 | grocery-prices, doc-huts, public-transport-costs, road-signs | in progress |
| k02 | biosecurity, doc-campsite-rules, fuel-cost, campervan-road-rules | in progress |

## Next
- Remaining guides in GSC order, both sites interleaved.
- After the foundation milestones merge (orchestrator will message): rebase, regenerate en.json,
  translate road trips, Kiwi legacy pages, `consent`/`article`/`tools` namespaces, `<a data-guide>` markup.

## Open questions for the orchestrator
- Protected place names: Spanish readers expect «Isla Norte / Isla Sur», «Nueva Gales del Sur»,
  «Australia Occidental», «Territorio del Norte». The configs protect the English forms, so the
  engine rejects the exonyms. Current approach: English name plus the Spanish exonym in
  parentheses on first mention. A per-locale exception would read more naturally.
- Dates render in English inside Spanish pages (`formatArticleDate` uses en-GB; `exchangeRateDate`
  and `priceTable.asOf` are English strings): «Actualizado el 18 August 2026».
- English source facts to check: support page says map and place details are free with two saved
  lists, which conflicts with the Pass boundary in THREADS.md.
