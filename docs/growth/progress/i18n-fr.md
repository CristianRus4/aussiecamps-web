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

## Done (continued, 2026-10-20 run)
- AU rebased onto main (A-foundation M2 + A-tools-hubs); `locales:sync` and `translations:source` run.
- **French-only catalogs** (as the es/ja lanes did): `aussiecamps-website-fr` (AU) and
  `kiwicamping-website-fr` (NZ) in `docs/translation.config.json`. They drop the English state/island
  names from `protectedTerms`, map them to French in the glossary (Nouvelle-Galles du Sud,
  Australie-Méridionale, Australie-Occidentale, Tasmanie, Territoire du Nord, Territoire de la capitale
  australienne, Centre rouge; île du Nord, île du Sud, île Stewart) and skip the testimonial keys.
  **Values files must say `"catalog": "aussiecamps-website-fr"` / `"kiwicamping-website-fr"`.** The
  "Australia" glossary entry is omitted on purpose: the engine matches it inside
  `data-guide="australia-…"` slugs and raises false errors. All held units (36 AU, 5 NZ) applied.
- AU: 137 units got their `<a data-guide>` link markup back (English source gained links); wave 3
  applied (camping-fees, travel-cost, interstate-biosecurity, towing, fuel-cost, TAS, is-free-camping,
  NT). AU guides rewritten so far: 24 of 50 existing.
- AU road trips translated (new): great-ocean-road, east-coast-sydney-cairns, perth-to-broome,
  brisbane-to-cape-tribulation (4 of 20).
- NZ wave 3 polished: beer-wine-coffee, dogs, cook-strait, bus-ferry-train, sandflies,
  overseas-driver-licence, doc-hut-rules, river-crossing (24 NZ guides rewritten so far).
- `translations:stamp -- --locale fr` run on AU (3445 stamps). NZ not yet stamped.
- Engine audit, fr-only catalog: AU has only `missing` (road trips 16 x 53, `tools` 116) plus 5
  source-equal warnings (brand/agency names); NZ has 6 glossary hits in not-yet-rewritten guides
  fixed, only 4 source-equal warnings left.

## Run of 2026-10-20 (evening, background agent)
- Both branches rebased onto origin/main (AU 90ec2bb with the locales:sync change, NZ 6838b88 K-foundation M2).
  NZ config conflict resolved by keeping the `kiwicamping-website-fr` catalog; `locales:sync` now leaves
  `fr` out of the shared catalog in both repos (committed). SHAs changed after the rebase.
- NZ: 86 `<a data-guide>` link units restored (all existing guides), `ui.metaDescription` now names iPhone
  (new brand-parity check in audit-content).
- NZ: 5 core guides translated for the first time (they were not in fr.json at all): freedom-camping-new-zealand-guide,
  freedom-camping-rules-new-zealand, doc-campsites-new-zealand-guide, holiday-parks-new-zealand-guide,
  camping-fees-new-zealand-2026.
- Scan for old-voice markers (parcs pour caravanes, English state names, hors ligne, "définitivement"): NZ is clean.
  AU still has "parc(s) pour caravanes" in camping-with-dogs-australia, camping-water-planning,
  campervan-road-trip-budget-australia, accommodation-costs-australia-2026 (faq units) and
  "Tasmania" in bus-train-costs-australia-2026.

## Next
- AU: remaining 16 road trips (melbourne-to-adelaide, tasmania-camping-loop, darwin-kakadu, ...), the
  `tools` namespace (116 units, gated), then rewrite the ~26 old guides still in the first-pass voice
  (order: `node /tmp/i18n-fr/tools/order.mjs`; look for "parcs pour caravanes", English state names).
- NZ: rebase `i18n/k-fr` onto origin/main once `git -C /Users/cristian/Developer/Webs/kiwicamping-web
  log origin/main --oneline -3` shows the growth/k-foundation merge (not yet merged on 2026-10-20),
  then `npm run locales:sync`, `npm run translations:source`, translate the new units (road trips,
  tools, `<a data-guide>` markup, legacy pages), stamp. Expect a config conflict (both catalogs added
  here): keep the `kiwicamping-website-fr` catalog.
- Rewrite the remaining NZ guides still in the first-pass voice.

## Blockers / decisions needed
- `scripts/sync-locales.mjs` rewrites catalog 0 to target every locale, so the main catalog also
  audits `fr` and reports the English-state-name protected-term errors there; the fr-only catalog is
  the clean one. Same issue the es lane reported (sync should skip locales that own a catalog).
- English fact issue (NZ overseas-driver-licence): section 0 says 18 months, reducing to 12 from
  1 November 2026, while section 3 and the FAQ say 12 months flat. French follows the English.
