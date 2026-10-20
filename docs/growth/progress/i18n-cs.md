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

## Status (2026-10-23)

Both branches merged with origin/main (merge, not rebase) and re-synced by English diff (`en.json` at the
previous tip vs merged): zero changed units left. `LOCALES_PREVIEW=1 npm run content:check`: cs 0 stale,
0 unstamped, no number-parity errors; strict `audit-content --strict --locale cs` passes on both.
Go-live set (UI 220/220 non-testimonial, consent, home, support, privacy with Website analytics, terms) is
complete on both sites. `cs` stays `draft` in `lib/locales.json` (orchestrator flips it).

Guides done: AussieCamps 37 of 80, KiwiCamping 45 of 89. Queue and per-batch pipeline files live in /tmp/cs-work
(queue.py, DRAFT-PROMPT.md, REVIEW-PROMPT.md, doit.sh); recreate from this note if lost: batches of five guides,
sonnet draft, opus review, apply, stamp, content:check, commit every two batches. Every batch is drafted (sonnet, high), then
rewritten by an Opus native reviewer (titles, descriptions, headings, FAQs, tables, rule and app-claim units)
before apply; the reviewer's negation check is recorded in each handoff.
- AussieCamps: alcohol-coffee-drink-prices, public-transport-costs, eating-out, australia-grocery-prices,
  interstate-biosecurity, campervan-road-trip-budget, accommodation-costs, domestic-flight-costs,
  best-time-camping-australia, brisbane-to-cape-tribulation, great-ocean-road-camping-guide,
  melbourne-to-adelaide-coastal-route, camping-without-phone-signal, bus-train-costs-australia-2026,
  best-camping-app-australia, campervan-driving-australia-safety-guide, camping-water-planning,
  perth-to-broome, east-coast-road-trip-sydney-cairns, sunshine-coast-hinterland, gibb-river-road,
  overseas-driver-licence-australia-state-guide, nullarbor-crossing, flinders-ranges, red-centre-way,
  tasmania-camping-loop, sydney-south-coast-camping, queensland-outback-way, south-west-wa-camping-loop,
  victoria-high-country, kangaroo-island, blue-mountains, driving-in-australia-overseas-licence,
  camping-with-dogs, camping-packing-list, first-campervan-trip, road-trip-fuel-planning.
- KiwiCamping: grocery-prices, doc-huts, public-transport-costs, road-signs, biosecurity-camping-gear,
  doc-campsite-rules, doc-campsites guide, best-nz-camping-apps (redone for the new English), where-to-camp,
  camping-fees, campfire-rules, best-time-camping, self-contained warrant, freedom-camping rules and guide,
  wastewater and rubbish, road-trip fuel cost, travel cost, eating out, beer-wine-coffee prices,
  campervan-road-rules, speed-limits, holiday-parks, towing-caravan, wof-registration, east-cape-road-trip,
  accommodation-costs, scenic-campsites, overseas-driver-licence, sandflies, volcanic-safety,
  coromandel-rotorua-road-trip, dogs-camping, domestic-flight-costs, northland-cape-reinga, packing-list,
  responsible-camping, arthurs-pass, cook-strait-ferry, kauri-dieback, taranaki-forgotten-world, bus-ferry-train-costs,
  picton-kaikoura-christchurch, wanaka-haast-pass, alcohol-fatigue-driving.
- Dropped from `cs.json` (AussieCamps): camping-rules-new-south-wales, camping-rules-western-australia,
  sleeping-in-car-australia. They were translated before the "do not translate" instruction, then their English
  was rewritten, so they were stale; removing them gives zero stale. Old Czech is in git history
  (commit 9502e50 and earlier) if wanted.
- Catch-up method after the big main merge: diff of `en.json` (old merge-base vs merged), whole-guide redo for
  guides whose structure changed, unit-level update for the rest, Opus native review, `translations:stamp`.
  Never `translations:invalidate` before apply succeeds (one rejected apply left blank strings; fixed).

## Next
- KiwiCamping queue by impressions: new-zealand-camping-packing-list, responsible-camping, arthurs-pass,
  cook-strait-ferry, kauri-dieback, taranaki-forgotten-world, bus-ferry-train-costs, picton-kaikoura-christchurch,
  wanaka-haast-pass, alcohol-fatigue-driving, doc-hut-rules-etiquette, river-crossing-safety, then the rest.
- AussieCamps queue: queensland-outback-way, south-west-wa-camping-loop, victoria-high-country, kangaroo-island,
  blue-mountains, driving-in-australia-overseas-licence, camping-with-dogs, packing list, first campervan trip,
  then the rest. Still excluded: the 23 pages in the 2026-10-20 do-not-translate list.
- `tools` namespace (gated), listicles and new road trips from the current English.
- Czech plurals (see notes) need a code fix if the owner wants exact forms.

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
