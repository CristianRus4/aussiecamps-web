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
- [x] AU guides (24/50): alcohol-coffee-drink-prices-australia, eating-out-australia-prices-2026, camping-rules-queensland, camping-rules-act, sleeping-in-car-australia, camping-rules-new-south-wales, camping-rules-victoria, camping-rules-western-australia, dump-points-australia-guide, camping-rules-south-australia, caravan-park-vs-holiday-park, australia-grocery-prices-2026, public-transport-costs-australia-2026, camping-fees-australia-2026, australia-road-rules-state-differences, domestic-flight-costs-australia-2026, best-time-camping-australia, is-free-camping-legal-australia, camping-rules-tasmania, interstate-biosecurity-road-trip, australia-road-trip-fuel-cost-2026, australia-travel-cost-2026, towing-caravan-australia-road-rules, camping-rules-northern-territory
- [x] NZ guides (24/43): towing-caravan-new-zealand, new-zealand-grocery-prices-2026, doc-huts-new-zealand-guide, sandflies-new-zealand-camping, public-transport-costs-new-zealand-2026, doc-campsite-rules, campervan-road-rules-new-zealand, speed-limits-new-zealand-visitors, new-zealand-road-trip-fuel-cost-2026, new-zealand-travel-cost-2026, eating-out-new-zealand-prices-2026, domestic-flight-costs-new-zealand-2026, new-zealand-road-signs-visitors, wof-registration-campervan-new-zealand, accommodation-costs-new-zealand-2026, left-side-driving-new-zealand, new-zealand-biosecurity-camping-gear, doc-hut-rules-etiquette, overseas-driver-licence-new-zealand, beer-wine-coffee-prices-new-zealand, dogs-camping-new-zealand, cook-strait-ferry-campervan-guide, volcanic-safety-new-zealand-travel, bus-ferry-train-costs-new-zealand

## Rebase 2026-10-20 (main with A-foundation M2 and tools-hubs)
- Both branches rebased onto origin/main. `locales:sync` only leaves a dedicated catalog alone when its `locales` use the locale CODE, so the zh-Hant catalogs now use `"locales": ["zh-hant"]`, target locale `zh-hant`, `varieties {"zh-hant": "zh-Hant"}`, glossary and styleGuide keyed `zh-hant`. Shared catalogs no longer list zh-hant (sync-generated).
- English now carries inline `<a data-guide="slug">anchor</a>` links; 157 existing units (100 AU, 57 NZ) were re-linked and applied. Scripts and packets live in /tmp/zhhant (bin/relink_packet.py, bin/mksrc.py a|k <slug|tools>, bin/apply.sh, bin/audit.sh, bin/complete.py, bin/wrap.py uses locale zh-hant).
- Engine apply/packet locale id is now `zh-hant`.

## Done since the rebase
- Applied and handed off (milestone 3, 2026-10-20): reviewed AU/NZ app and safety guides, `tools` namespace on both sites, AU road trips (brisbane, great ocean road, melbourne-adelaide, perth-broome, east coast), NZ best-nz-camping-apps, where-to-camp, east-cape, coromandel-rotorua, northland. AU 47/70 guides, NZ 43/78.

## In progress
- Reviewing then applying drafts: NZ wanaka-haast, nelson-abel-tasman, banks-peninsula, bay-of-islands, rakiura, three-week, christchurch-tekapo, wellington-wairarapa, north-island-two-week, west-coast, arthurs-pass, taranaki, picton-kaikoura; AU adelaide-uluru, nullarbor, australian-alps, flinders, red-centre, sunshine-coast, gibb-river, best-camping-app, tasmania-loop, darwin-kakadu.
- Drafting: NZ freedom-camping x2, doc-campsites, camping-fees, self-contained, holiday-parks, wastewater, campfire, queenstown, fiordland, winter-camping, southern-scenic; AU fuel-planning, dogs, responsible-camping, first-campervan, packing-list, sydney-south-coast, qld-outback-way, south-west-wa, victoria-high-country, kangaroo-island, blue-mountains.

## Next
- Remaining after those: NZ save-places, filters-guide, offline-data-guide, weather-look-around, currency-place-costs, responsible-camping, two-week-itinerary, packing-list, best-time, scenic-campsites, south-island-two-week; AU save-collections, place-details, widgets-guide.
- Then `npm run translations:stamp -- --locale zh-hant` in both, one `npm run check` each, final handoff.
- Workflow: /tmp/zhhant/bin/mksrc.py (src from en.json), Opus drafts to /tmp/zhhant/out, separate Opus review writes review-*.json fixes (see /tmp/zhhant/review-brief.md), then bin/apply.sh a|k <slugs>.

## Blockers / notes for the orchestrator
- More English source issues (translated as written): NZ licence guide says 18 months then 12 months in different sections; Melbourne contactless claim may be dated; NZ road-signs FAQ contradicts section 4 on which arrow is yours; LSZ signs are being phased out; AU fuel guide cites an "Australian Government Fuel Plan" as price source (usually ACCC/AIP); fuel FAQs (AU and NZ) say "divide by consumption"; AU towing FAQ says NT has a lower towing limit and that a car licence covers 4.5 t GCM (it is the vehicle's GVM); Greater Sunraysia lost pest-free status (biosecurity guide); myrtle rust is established in NZ since 2017; InterCity GoTickets may no longer exist; several guides repeat a paragraph in two sections (caravan park, Tasmania, SA, WA, fuel).
- Engine warnings left on purpose: 菜單 (restaurant menu / meal plan) is flagged as mainland because 選單 is the software menu; 菜單 is correct Taiwanese for food.
- `Parks Victoria` added to the zh-Hant catalog's protectedTerms (agency brand kept verbatim; stops false 維多利亞 glossary warnings).
- English source issues spotted by translators (not changed): NZ Countdown is now Woolworths NZ; PAK'nSAVE spelling; NZ rural speed-limit cuts largely reversed by 1 Jul 2025 (speed-limits guide says limits are being reduced); NSW All Parks Pass does include Kosciuszko (the Country Parks Pass excludes it); Rimutaka Hill Road is officially Remutaka since 2017; SA Flinders Ranges is not under the Desert Parks Pass; dump-points guide contradicts itself on public toilets (s7 vs s5/faq); several FAQ answers say "the guide gives prices for X" that the price table does not contain (eating-out AU, NZ fuel, NZ public transport); Hine-nui-te-pō needs its macron; WA FAQ "holiday park pass" is probably WA's Holiday Pass.
- Separate per-locale catalog in the engine config (see above): please confirm.
- Support page English says "Map and place details are free, together with two saved lists", which may conflict with the Pass boundary in THREADS.md. Translated faithfully; English owner should check.
- App zh-Hant labels have several mistranslations (針腳 for Pins, 過濾器 for Filters, 訪問過 for Visited, 轉儲點/垃圾站 for dump points/stations, 房車公園, 規劃師, 註解). The site uses natural Taiwan terms instead; listed in the style guide section 3.
