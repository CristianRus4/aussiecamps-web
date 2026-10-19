# i18n-zh-hant progress (Max account)

Language: Traditional Chinese, Taiwan first (`zh-hant` file, engine id `zh-Hant`). Branches: `i18n/a-zh-hant` (aussiecamps-web) and `i18n/k-zh-hant` (kiwicamping-web). This file is identical in both repos.

## Setup decisions
- Style guide: `docs/translation-style/zh-hant.md` (identical in both repos).
- Engine config: zh-Hant has its **own catalog** in each `docs/translation.config.json` (`aussiecamps-website-zh-Hant`, `kiwicamping-website-zh-Hant`), same pattern as the zh-hans thread. Reasons: (1) the shared catalog protects state and island names (Queensland, North Island…) as errors, which forces Latin script into Chinese copy; my catalog protects only brands/codes (AU: AussieCamps, AussieCamping, AUD; NZ: KiwiCamping, NZD, DOC, Aotearoa, Aoraki, Waka Kotahi) and uses a glossary (warning level) to keep 昆士蘭/北島 etc. consistent; (2) testimonials are listed in `untranslatedKeys`, so they never count as missing for this new locale.
- Locale file: `lib/translations/zh-hant.json` with `"locale": "zh-hant"`. The site code does not know the locale yet (foundation adds `lib/locales.json`), so `content:check` does not read it yet.
- Values files and packets live outside the repos in `/tmp/zhhant/` (src/, out/, bin/qa.py, bin/wrap.py, bin/split.py).

## Done
- [x] Style guide + glossary (research notes summarised in the guide)
- [x] AU: UI (220 units, testimonials excluded) + support/privacy/terms (58)
- [x] NZ: UI (220) + support/privacy/terms (58)
- [x] Both: privacy page restructured for the new GA4 section (7 sections, effective 19 Oct 2026) + `consent` namespace
- [x] AU guides (10): alcohol-coffee-drink-prices, eating-out-prices-2026, sleeping-in-car, camping-rules NSW / VIC / WA / SA / QLD / ACT, dump-points
- [x] NZ guides (9): grocery-prices-2026, doc-huts, doc-campsite-rules, campervan-road-rules, speed-limits, road-trip-fuel-cost-2026, towing-caravan, sandflies, public-transport-costs-2026

## In progress (round 2, Opus translators writing /tmp/zhhant/out values; I edit + apply)
- AU: public-transport, domestic-flight, grocery-prices, best-time-camping, caravan-park-vs-holiday-park, road-rules-state-differences, camping-fees, travel-cost
- NZ: travel-cost, biosecurity-camping-gear, eating-out, road-signs, domestic-flights, wof-registration, accommodation-costs, volcanic-safety

## Next
- Guides by search value (pages-3m.tsv order), both repos interleaved, up to 4 Opus subagents writing values files; I edit and apply.
- After foundation merges: road trips, K legacy pages, consent/article/tools namespaces, data-guide link markup; `translations:stamp`.

## Blockers / notes for the orchestrator
- Engine warnings left on purpose: 菜單 (restaurant menu / meal plan) is flagged as mainland because 選單 is the software menu; 菜單 is correct Taiwanese for food.
- `Parks Victoria` added to the zh-Hant catalog's protectedTerms (agency brand kept verbatim; stops false 維多利亞 glossary warnings).
- English source issues spotted by translators (not changed): NZ Countdown is now Woolworths NZ; PAK'nSAVE spelling; NZ rural speed-limit cuts largely reversed by 1 Jul 2025 (speed-limits guide says limits are being reduced); NSW All Parks Pass does include Kosciuszko (the Country Parks Pass excludes it); Rimutaka Hill Road is officially Remutaka since 2017; SA Flinders Ranges is not under the Desert Parks Pass; dump-points guide contradicts itself on public toilets (s7 vs s5/faq); several FAQ answers say "the guide gives prices for X" that the price table does not contain (eating-out AU, NZ fuel, NZ public transport); Hine-nui-te-pō needs its macron; WA FAQ "holiday park pass" is probably WA's Holiday Pass.
- Separate per-locale catalog in the engine config (see above): please confirm.
- Support page English says "Map and place details are free, together with two saved lists", which may conflict with the Pass boundary in THREADS.md. Translated faithfully; English owner should check.
- App zh-Hant labels have several mistranslations (針腳 for Pins, 過濾器 for Filters, 訪問過 for Visited, 轉儲點/垃圾站 for dump points/stations, 房車公園, 規劃師, 註解). The site uses natural Taiwan terms instead; listed in the style guide section 3.
