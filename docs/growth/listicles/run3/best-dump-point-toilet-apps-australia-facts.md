# Facts: Best dump point and public toilet apps in Australia 2026

All facts checked 2026-10-21 unless stated. "Lookup" = https://itunes.apple.com/lookup?id=<ID>&country=au. "AU page" = https://apps.apple.com/au/app/id<ID> (In-App Purchases list; page prices show "$" and are AUD). Anything marked **unverified** was not confirmed. Fair tone: no competitor is said to lack anything unless stated below as confirmed.

## Official data behind most of these apps: National Public Toilet Map
- Run by the Australian Government. Site https://toiletmap.gov.au/ says "more than 23,000 public and private public facilities" (https://toiletmap.gov.au/about). About page: funded by the Department of Health, Disability and Ageing, "managed through the Continence Health Australia". **Conflict on names:** the App Store text says Department of Health and Aged Care and Continence Foundation of Australia (renamed bodies; cite the website, not the App Store text).
- Data download: data.gov.au dataset (licence "Creative Commons Attribution 3.0 Australia", CSV modified 2026-09-30, https://data.gov.au/data/dataset/553b3049-2b8b-46a2-95e6-640d7986a8c1). **Conflict:** its blurb says "more than 17,000", the site says 23,000+, the CSV has 25,624 rows. Use "more than 23,000" (official site).
- Fields (official release notes, https://data.gov.au/data/dataset/553b3049-2b8b-46a2-95e6-640d7986a8c1/resource/cc5aff29-786e-4548-ba2c-5a58fb05f144/download/release-notes.pdf): `DumpPoint` ("Does the facility include a Dump point"), `DPWashout` ("Is there wash out water at the Dump point"), `DPAfterHours`, `DumpPointNote`, `PaymentRequired` ("Is there a fee to use the facility"), `KeyRequired`, `AccessNote` ("Where to get the key, pay a fee"), `OpeningHours`, `DrinkingWater`, `Shower`, `Accessible`, `AdultChange`, `BabyChange`, `SharpsDisposal`, parking fields. Spreadsheet guide: "40 total fields" per facility (https://www.toiletmap.gov.au/documentation/spreadsheetverification.pdf).
- Important caveat from the release notes: "All new flags (BYOSling, DPWashout, ...) will be set to FALSE. Until we have sufficient updates ... only rely on this information if it is set to TRUE." So a washout flag that is not set means unknown, not "no washout". `PaymentRequired` is a yes/no flag; the fee amount, where known, is only in the free-text `AccessNote`.
- Our count of the 2026-10-01 CSV (cross-check only): 1,404 flagged DumpPoint, 236 DPWashout, 46 PaymentRequired. AussieCamps' 1,393 (230 washout) is the 2026-09-09 snapshot of the same dataset (`Scraper/sources/_australia_feeds.py`, `run_au_toilet_map`).
- Official app: "National Public Toilet Map", id 323279108, Human Solutions Pty Ltd, free, no IAP found on AU page, 4.55 from 9,975 AU ratings, v5.19, updated 2025-11-13 (lookup). Store text covers toilets, adult change, baby care, accessibility, opening hours, hoists, sharps disposal, showers; the store text does not mention dump points. RV Daily (trade site, updated 2025-10-16, https://rvdaily.com.au/dump-points/) says the site and "free iOS/Android apps" have "filters for Caravan dump point and Dump point" (secondary source; Android listing not checked).
- Best for: official, free, nationwide toilet data with accessibility detail. Con (fair): urban toilets dominate the list; dump point filter is a preference to switch on (RV Daily).

## Candidate apps

### AussieCamps (ours)
- id 6801098680, Cntxt Limited, iPhone app (v2026.9.6, 2026-09-24, requires iOS 26). Price: free to download, with in-app purchases. Rating: "not enough ratings to display" (AU page, 2026-10-20 sheet; lookup still shows 0 ratings).
- Data (lib/data/product-facts.json, dataAsOf 2026-09-09): 1,393 dump points (230 with washout), 3,004 drinking water points, 1,186 toilets, 1,246 rest areas with toilets, 1,838 campgrounds, 745 national parks. Dump points, water and toilets come from the National Public Toilet Map (lib/data/hubs.meta.json: "toilet-map", Australian Government National Public Toilet Map).
- Honest scope (from scraper): of the Toilet Map's 23,000+ facilities, AussieCamps keeps every dump point and drinking-water row, plus toilet-only rows classified as camping ground, rest area, caravan park or jetty. It does **not** carry all urban shopping-centre, restaurant and station toilets. Do not claim "all public toilets".
- Fields shown per dump point/toilet: dump point and washout flags, drinking water, accessible toilets and parking, baby change, adult change, showers, sharps and sanitary disposal, opening hours, address notes, access notes (scraper features list). Fee: scraper sets a "free" category when `PaymentRequired` is not flagged; fee amounts are not a data field (unverified whether amounts in access notes show in the app).
- Features: filters (water, toilets, showers, power, dogs, vehicle access, fees), place details, Look Around, directions via Apple Maps or Google Maps, trips, saved lists (App Store text). Offline: "The Australian place directory lives on your phone, so campsite, facility and rest-area details are still available ... Live maps, directions, forecasts and external links still need a connection." No offline map.
- Best for: iPhone users who want dump points, water, toilets, rest areas and parks in one app alongside campgrounds. Cons: iPhone only; needs iOS 26; no traveller reviews; no fee amounts.

### Convenience (toilets and dump points, Design Chaos)
- id 1117293066, Design Chaos Pty Ltd, free, 4.26 from 78, v2026.5, 2026-05-18, iOS 18.6+ (lookup). Same developer as Caravan Helper.
- IAP (AU page): Convenience Plus Lifetime A$29.99; Convenience Plus A$4.99; Convenience Plus (Quarterly) A$2.99; Convenience Advanced A$2.99; Travel Focus A$1.99; Colour Themes A$1.99; Caravan Dump Points A$2.99; Filters A$1.99; Remove Advertising A$2.99.
- Store text: "More than 23,000 facilities"; "incorporates official data provided by the Australian Government"; MLAK keys, payment and key requirements, parking, accessibility; user ratings; routes via Apple Maps or Google Maps. "Include caravan and RV dump points" is a Convenience Plus feature (also a separate A$2.99 IAP). Offline: not stated (unverified).
- Best for: accessible-toilet searches with key and payment filters. Con: dump points are paid add-on; Android unverified.

### Caravan Helper: Australia (dump points, Design Chaos)
- id 929358604, A$4.99 paid, no IAP on AU page, 4.51 from 310, v2026.3, 2026-08-22, iOS 17.6+ (lookup).
- Store text: nearby dump points with distance and travel time in list or map; route, notes, payment requirements, key requirements, parking; community verification with time since last verified; "database that incorporates dump points from the Australian National Public Toilet Map ... as well as dump points provided by the community"; notifications when near a dump point. Offline: not stated (unverified). Android: unverified.
- Best for: dump-point-only use with community verification. Con: single purpose, paid up front.

### Public Toilets Australia (Brenton Currie)
- id 6469040232, A$2.99, no IAP on AU page, 4.83 from 18 ratings only, updated 2026-10-20, iOS 18+ (lookup). "Ad-free, private"; "over 23,000 facilities", ">1000 caravan wastewater facilities", "Backed by the National Public Toilet Map data"; filters including caravan wastewater points; iCloud sync; Look Around; watch app. Developer text on offline: "maps and directions to facilities won't work when offline", list view and search by town still show details; data "usually updated and published once per month by the National Public Toilet Map team". Small rating base; mention only as a niche option or omit.

### WikiCamps Australia
- id 505365608, WikiCamps pty ltd. A$9.99 one-off per platform ("No subscriptions or hidden fees", https://www.wikicamps.com.au/); no IAP on AU page; App Store lists advertising. 4.50 from 16,662 AU ratings; v6.3.0, 2026-10-19; iPad supported (lookup).
- Site: "Over 65K sites listed ... dump points, showers"; filters include "water refill, dump points and more"; "Offline Mode lets you access maps and up to three of your planned trips". Source: community-contributed. Dump point count and fee amounts: unverified. Version 6 rebuild: older versions retired from March 2026 and some filters were removed per recent reviews (docs/growth/listicles/au-app-facts.md).
- Best for: broad community-reviewed directory with offline mode. Con: dump point count not published.

### CAMPS: Camping Australia Wide
- id 537864549, free to download; trial then yearly plan: A$14.99 a year (developer FAQ: "first 7-days ... free then a low $14.99/year", https://www.campsaustraliawide.com/app/). AU page IAPs: Camps All-Access Yearly Plan A$14.99 (and A$9.99 listing), $9.99 Camps+ Membership A$9.99, Camps+ Premium A$9.99, Live Updates legacy A$9.99 and A$1.99. 4.45 from 3,478 AU ratings; v4.4.28, 2026-10-13 (lookup).
- Dump points: site says "Easily locate 1400+ public dump points with addresses & GPS co-ordinates plus symbols for cassettes, holding tanks, big rig accessibility and fee amount." **Conflict:** App Store text says "1,100+ public dump points and 570+ official water refill points". Quote the developer site wording with its source, or say "over 1,000".
- Offline: "premium offline maps with all site information". Best for: caravanners wanting dump point symbols for big rigs and fee amounts. Con: subscription only after trial.

### CamperMate Australia & NZ
- id 465040067, Outdoria Pty Ltd, free, no IAP on AU page, advertising listed; 4.42 from 1,543; v5.8.0, 2026-10-15 (lookup).
- Store text: "discover dump stations, public toilets, Wi-Fi spots, supermarkets"; "Download maps and access crucial info without an internet connection ... no expiration". Dump station count: unverified. Best for: free all-round app with offline maps. Con: no published dump point count.

### Google Maps and Apple Maps (baseline)
- Google Maps id 585027354: free, 4.64 from ~501,800; Apple Maps id 915056765: free, 2.74 from 2,593 (lookups). General-purpose; dedicated dump point category or caravan dump data: **unverified** (a search found no official category list). Say only that they are general maps for finding a toilet by search, and that cassette and dump point details are better checked in a dedicated dataset. Do not claim they lack dump points.

## Discarded (searched iTunes AU: "dump point", "dump station", "caravan dump", "public toilet", "toilet map")
- Dump Point Finder AUS (id 1457942245): A$2.99, 1.9 from 10, last update 2021-04-08. Stale.
- RV Dump Sites, RVing Life, RV Dumps (Allstays), RV Dump Stations, Dump Station Finder (Campendium), DumpScout: US-centric or zero or tiny ratings.
- Toilet Finder (BETOMORROW), Flush Toilet Finder and similar: global toilet finders, no Australian dump point focus found.
- CMCA Connect (id 1328687803): membership app, no dump point finder. CMCA Traveller (id 6737876100): members only, 3.16 from 25 (see run2/best-caravan-rv-apps-australia-facts.md).

## Helpful section: how dump points work (official or council sources only)
- Where: the Toilet Map lists dump points with opening hours, key and payment flags (release notes above). Council examples: West Coast Council (Tas) lists six "free, public dump points" (Queenstown, Zeehan, Tullah, Strahan, Rosebery, Macquarie Heads) and says "There is rinse water available ... however this water is not suitable for drinking" (https://www.westcoast.tas.gov.au/facilities-and-recreation/caravaning-and-camping/dump-points/, no page date). Rockhampton Regional Council: free dump point at the Visitor Information Centre, "available 24/7", published 20 December 2024 (https://www.rockhamptonregion.qld.gov.au/AboutCouncil/News-and-announcements/Latest-News/Free-caravan-dump-point-open).
- Fees vary: Shire of Toodyay (WA) page says the dump point at Toodyay Holiday Park is "for a small fee of $15" (https://www.toodyay.wa.gov.au/visit-toodyay/visitor-information/amenities-and-services/caravan-dump-point.aspx, undated). So: free at many council sites, paid at some park-run ones; no single national fee. Do not publish a "typical fee" figure.
- Rules: Singleton Council (NSW): "caravanners are expected to use designated dump points when emptying toilet cassettes"; "It is prohibited to flush waste down wash basins or in toilets in ablution blocks" (https://www.singleton.nsw.gov.au/Experience/Visit/Adventure-and-Camping/Caravan-Parks). Victoria's camping page: where no toilet, "dig a hole at least 30cm deep or use your own portable toilet", "at least 100 metres away from a waterway"; wastewater poured "at least 50 metres away from rivers, creeks" (https://www.vic.gov.au/camping). No single national official grey and black water rulebook was found; rules are set by state environment law and land managers, so say "check the land manager". Secondary only: EcoNetwork Port Stephens (2021) says dumping greywater on the road while driving is illegal; do not rely on it.

## Existing guide: dump-points-australia-guide (do not contradict)
Key claims (lib/site.ts): empty only at a dump point; public ones at caravan parks, showgrounds, rest areas, visitor centres, listed on the Toilet Map; AussieCamps counts 347 NSW, 324 QLD, 238 WA, 199 SA, 181 VIC, 80 TAS, 23 NT, 1 ACT; "only about one dump point in six has" a washout tap (230 of 1,393); check hours, clearance, key, code or fee; black water first, rinse, then grey; never fill drinking water there unless signed; septic-safe chemicals; grey water as the campground directs; Victoria's 50 m, 30 cm, 100 m rules; NSW illegal dumping penalties (April 2024). Phrase washout as "flagged with a washout tap".

## Search demand
Source: /Users/cristian/Developer/Apps/Camping/docs/aso/aussiecamps/ (keyword-discovery-2026-09-11 and research/2026-10-15-full-examination).
- Keyword discovery lists candidates "dump points near me", "australia dump points", "caravan dump points", "australia rv dump stations", "public toilets australia", "australia public toilets", "australia camping with toilets"; popularity "not-collected" in the 2026-09-11 packs.
- Astro 2026-10-14 (demand-and-product-page.md): AU "dump points" popularity 5 (Astro "no measurable demand"), our rank 25; "australia dump points" popularity 5, rank 29; "australia camping with toilets" popularity 5, unranked. Demand is small in the App Store, not zero in web search.
- Search Console 3 months to 2026-10-19 (docs/growth/gsc/2026-10-19/queries-3m.tsv): "dump point near me" 8 impressions, 0 clicks, position 41.2; "toilet dump points near me" 4 impressions, position 47.5.

## Related guides (existing slugs)
dump-points-australia-guide (owns "dump point near me"), best-caravan-rv-apps-australia, best-camping-app-australia, camping-water-planning, camping-without-phone-signal, how-to-use-aussiecamps-filters, aussiecamps-place-details, road-trip-fuel-planning-australia, responsible-camping-australia, wikicamps-alternatives, campermate-alternatives, towing-caravan-australia-road-rules.

## Official sources (URLs actually read)
- https://toiletmap.gov.au/ and https://toiletmap.gov.au/about
- https://www.toiletmap.gov.au/documentation/spreadsheetverification.pdf
- https://data.gov.au/data/dataset/553b3049-2b8b-46a2-95e6-640d7986a8c1 (API metadata and CSV export 2026-10-01) and the release notes PDF above
- https://www.westcoast.tas.gov.au/facilities-and-recreation/caravaning-and-camping/dump-points/
- https://www.rockhamptonregion.qld.gov.au/AboutCouncil/News-and-announcements/Latest-News/Free-caravan-dump-point-open
- https://www.toodyay.wa.gov.au/visit-toodyay/visitor-information/amenities-and-services/caravan-dump-point.aspx
- https://www.singleton.nsw.gov.au/Experience/Visit/Adventure-and-Camping/Caravan-Parks
- https://www.vic.gov.au/camping
- Developer sites: https://www.campsaustraliawide.com/app/, https://www.wikicamps.com.au/, https://campermate.com/; App Store lookups and AU pages for the ids above.
- Secondary: https://rvdaily.com.au/dump-points/
