# i18n-cs progress (Ava)

Thread: i18n-cs, Czech (new locale) on both sites. Branches: `i18n/a-cs` (aussiecamps-web, worktree
`~/.t3/worktrees/aussiecamps-web/i18n-a-cs`) and `i18n/k-cs` (kiwicamping-web, worktree
`~/.t3/worktrees/kiwicamping-web/i18n-k-cs`). Never pushed; the orchestrator merges.

Style guide: `docs/translation-style/cs.md` (identical in both repos). Register: formal vy, lowercase
(same as the apps). Engine config: `cs` added to locales/targets with `register: formal`; AussieCamps
glossary gets `Australia → Austrálie`.

## Working files (outside the repos, recreate if lost)
- `/tmp/cs-work/{a,k}/all.json`: engine `packet --locale cs --all` snapshot (EN source).
- `/tmp/cs-work/BRIEF.md`: brief for translator subagents. `/tmp/cs-work/lint.py`: Czech lint.
- `/tmp/cs-work/mkguides.py` builds batch inputs; `applyrun.sh <a|k> <dry|real> <values…>` applies;
  `complete.py` checks structural completeness (the site's strict check cannot see `cs` until it is
  registered); `reorder.py` keeps `cs.json` in `en.json` key order; `normalize.py` sets no-break spaces
  as thousands separators.

## Done
- [x] Style guide and glossary (both repos), with research sources.
- [x] UI strings: 227 per site (all except the 29 testimonial keys, which stay untranslated by rule).
- [x] `consent` namespace (6 per site).
- [x] Support, privacy (all 7 sections incl. Website analytics) and terms: 63 units per site.

## Guides (by GSC impressions, both sites interleaved)

| Batch | Guides | Status |
|---|---|---|
| a01 | alcohol-coffee-drink-prices-australia, sleeping-in-car-australia, camping-rules-new-south-wales | applied |
| k01 | new-zealand-grocery-prices-2026, doc-huts-new-zealand-guide, public-transport-costs-new-zealand-2026 | applied |
| a02 | public-transport-costs-australia-2026, eating-out-australia-prices-2026, camping-rules-western-australia | translating |
| k02 | new-zealand-road-signs-visitors, new-zealand-biosecurity-camping-gear, doc-campsite-rules | translating |
| a03 | dump-points-australia-guide, camping-rules-victoria, australia-grocery-prices-2026 | translating |
| k03 | new-zealand-road-trip-fuel-cost-2026, campervan-road-rules-new-zealand, eating-out-new-zealand-prices-2026 | translating |

## Next
- Remaining guides in GSC order, both sites interleaved, 3 guides per batch.
- After the foundation milestones merge (orchestrator will message): rebase, regenerate en.json,
  translate road trips, Kiwi legacy pages, `article`/`tools` namespaces, `<a data-guide>` markup.

## Notes for the orchestrator
- **The site does not know `cs` yet.** `lib/i18n.ts` / `localeCodes` in `lib/localized.ts` have no `cs`,
  so `cs.json` is not built, rendered or audited (`content:check --strict --locale cs` rejects the
  locale). Registering it is code (foundation thread / locale registry). Structural completeness is
  checked with `/tmp/cs-work/complete.py` in the meantime.
- **Testimonials.** The 29 `review*`, `reviewsEyebrow`, `reviewsTitle` keys are deliberately absent, so
  under today's gate (`isTranslated` needs every UI string) `cs` would never publish. The registry or
  gate needs to skip or hide testimonials for locales without them.
- **Czech plurals need code.** These UI strings follow a bare number and Czech has three forms (1 /
  2–4 / 5+): `places` (article header „{n} místa / míst“), `guideSingular/guidePlural`. I used the
  majority form per site (AussieCamps articles mostly list 3–4 places → „místa“; KiwiCamping mostly
  5+ → „míst“; categories have 5+ guides → „průvodců“). A proper fix is `Intl.PluralRules` with
  one/few/many/other strings (also needed for pl). `daysFresh/daysGrey` use „dne“, correct after the
  tool's decimal output (but the tool prints „4.5“ with a decimal point, not „4,5“).
- **Protected state names vs Czech declension.** The engine allows Czech endings of up to 3 letters
  (v Queenslandu) but Czech exonyms (Viktorie, Tasmánie, Západní Austrálie, Nový Jižní Wales) and
  locatives (ve Victorii, na Tasmánii) are rejected. The guide writes „ve státě Victoria“, „ve státě
  Tasmania“ with the Czech name in parentheses once per page. A `cs` exception list in the engine
  config would read more naturally.
- **English facts:** support page says „Map and place details are free, together with two saved
  lists“, which conflicts with the Pass boundary in THREADS.md (translated faithfully). ASO: the
  AussieCamps `cs` App Store subtitle is „Offline mapa a plán cesty“ (an offline-map claim).
  Guide-level notes are collected in `/tmp/cs-work/{a,k}/*.notes.md` and summarised in handoffs.
