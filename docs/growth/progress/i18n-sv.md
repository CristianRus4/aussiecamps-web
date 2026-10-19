# i18n-sv progress (Kai account)

Swedish (sv) on both sites, new locale. Branches: `i18n/a-sv` (aussiecamps-web), `i18n/k-sv` (kiwicamping-web). Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-sv`, `~/.t3/worktrees/kiwicamping-web/i18n-k-sv`.

## Done
- [x] Style guide `docs/translation-style/sv.md` (identical in both repos): voice (informal du), glossary with evidence, conventions (74 000, 2,08, 35 AUD / 35 NZD, ”…” quotes), banned list, before/after from the app's Swedish.
- [x] `sv` registered with the engine as its own catalog in each `docs/translation.config.json` (`aussiecamps-website-sv`, `kiwicamping-website-sv`), with `untranslatedKeys` for the testimonials and the full protected-terms list.
- [x] `lib/translations/sv.json` created in both repos.
- [x] UI (220 of 249 keys: everything except the 29 testimonial keys, which are never translated for a new locale) and `consent` (6) on both sites.
- [x] Support, privacy (7 sections incl. Website analytics) and terms on both sites.
- [x] Guides, AU: alcohol-coffee-drink-prices-australia, sleeping-in-car-australia, camping-rules-new-south-wales, camping-rules-victoria, eating-out-australia-prices-2026, camping-rules-western-australia.
- [x] Guides, NZ: new-zealand-grocery-prices-2026, doc-huts-new-zealand-guide, doc-campsite-rules, campervan-road-rules-new-zealand, speed-limits-new-zealand-visitors, new-zealand-road-trip-fuel-cost-2026.

- [x] 2026-10-20 (orchestrator-run session): both branches rebased onto origin/main (M2 platform); sv keeps its own catalog (`*-website-sv`), left out of the shared one by `locales:sync`; stamps written (`lib/translations/meta/sv.json`). Go-live set (UI 220/220 without testimonials, consent, home, support, privacy incl. Website analytics, terms) complete on both sites; `LOCALES_PREVIEW=1 npm run content:check` passes. Brand-genitive fix on KiwiCamping (Apples/KiwiCampings rephrased, because the audit only allows genitive -s for de and nl).
- [x] Batch 1 (K): doc-campsites-new-zealand-guide, camping-fees-new-zealand-2026, best-nz-camping-apps, campfire-rules-new-zealand, best-time-camping-new-zealand.
- [x] Batch 2 (A): domestic-flight-costs-australia-2026, best-time-camping-australia, public-transport-costs-australia-2026, australia-grocery-prices-2026, interstate-biosecurity-road-trip.
- [x] Negation/safety re-read of every applied guide against the English (both sites), and removal of added glosses (Systembolaget, STF, roadhouse, NPWS and similar). Kept on purpose: the allemansrätten sentence (style guide rule) and bracketed English sign words.

## In progress / next
- Remaining guides in impressions order (pages-3m.tsv). AU next: camping-rules-south-australia, dump-points-australia-guide, public-transport-costs-australia-2026, domestic-flight-costs-australia-2026, camping-rules-queensland, australia-grocery-prices-2026, then the rest. NZ next: public-transport-costs-new-zealand-2026, towing-caravan-new-zealand, new-zealand-travel-cost-2026, new-zealand-biosecurity-camping-gear, eating-out-new-zealand-prices-2026, new-zealand-road-signs-visitors, then the rest.
- After the foundation milestones merge: road trips, Kiwi legacy .html articles, `article`/`tools` namespaces, `<a data-guide>` markup; `npm run translations:stamp -- --locale sv` once it exists.

## Working method (to resume)
- Scratch work lives in `/tmp/sv-work/` (not in the repo): `{a,k}/full.json` = `translation-engine packet --locale sv --catalog <id> --no-usage`, split per page into `{a,k}/src/<slug>.json` by `scripts/split.py`; values in `{a,k}/out/<slug>.json`; `scripts/lint.py` (Swedish lint), `scripts/mkinput.py` (engine input), `scripts/gate.mts` (site completeness gate for sv, run with `npx tsx` from a repo root), `BRIEF.md` (subagent brief). Regenerate with the same commands if lost; applied units drop out of new packets.
- Subagents (Opus, xhigh) write values files only; this thread edits, lints, dry-runs and applies. One writer per locale file.

## Open points for the orchestrator
- `content:check` does not see sv until the foundation registry lists it (`localeCodes`); `scripts/gate.mts` above runs the same completeness checks meanwhile.
- `isTranslated` needs every UI key filled, including the testimonial keys that a new locale must not translate. The registry/gate change has to exempt them for sv (and the other new locales).
- State, territory and island names are protected, so Swedish copy says "Tasmania", "på North Island". Swedish media write Tasmanien, Nordön, Sydön. Copy gives "North Island (Nordön)" once per page; a later switch would need a protectedTerms exception for sv.
