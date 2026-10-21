# Best apps for a lap of Australia (the Big Lap): facts (run 3)

All facts checked 2026-10-21 unless a different date is shown. "AU" = App Store Australia (`https://itunes.apple.com/lookup?id=<ID>&country=au`). Unconfirmed items are marked "unverified". Prices A$. Detail for ExplorOz, Hema, CAMPS, WikiCamps and AussieCamps is also in the sibling sheets camps-australia-wide-alternatives-facts.md and explorOz-alternatives-facts.md.

## Framing
A Big Lap traveller uses several tools, not one: a place directory (where to stop), an offline map (where signal ends), a fuel app, a weather source, and a planner. Pricing wording for AussieCamps: "free to download, with in-app purchases". AussieCamps is iPhone only and has no offline map.

## The apps (one block each)

### 1. AussieCamps (ours): stops and trip planning
- https://apps.apple.com/au/app/id6801098680, Cntxt Limited. iPhone only, iOS 26+. v2026.9.6, 2026-09-24. Free to download, with in-app purchases. No AU rating yet.
- Big Lap use: decide where to stop each night (rest areas, camps, dump points, water, toilets, national park campgrounds from state park agencies and road authorities), and build a trip with an ordered list of stops, driving distance and time per leg and for the whole journey, arrival dates, and forecasts for upcoming stops (App Store text). Verified in the app repo: trip legs use MapKit driving directions (`Packages/CampingKit/Sources/CampingKit/Planner/TripRouteBuilder.swift`, `.automobile`), and forecasts are fetched per stop arrival date (`TripDetailView.swift`, `loadForecasts`). Also checklist and packing list, share, Calendar sync, collections, iCloud sync, widgets.
- Guides in the app bundle: 20 road trips (`Aussie/AussieCamping/Guides/RoadTripGuidesData.swift`) and 44 articles (`CampingArticlesData.swift`), counted 2026-10-21. These include Nullarbor crossing, Perth to Broome, Brisbane to Cape Tribulation, Darwin Kakadu Litchfield loop, Tasmania loop, Gibb River Road, East Coast Sydney to Cairns. CONFLICT: the App Store text says "21 detailed Australian road trips and more than 50 practical guides" and "75,000+ places"; an internal ASO audit says to correct to 20, 44 and 22,000+ (docs/aso .../2026-10-15-full-examination/README.md, A1). Do not use the store figures. Use "road trips and guides" or "20 road trips and 44 guides".
- Counts (lib/data/product-facts.json, 2026-09-09): 5,552 rest areas, 1,838 campgrounds, 1,393 dump points, 3,004 drinking water points, 1,186 toilets, 745 national parks.
- Offline (developer): place directory stored on the phone, "Live maps, directions, forecasts and external links still need a connection". The leg times on a trip are calculated with Apple Maps routing, so build the trip with signal (the repo shows no offline routing; stored trip data stays on the phone, stated here as reading of the code, not a developer claim: unverified).
- No reviews, no fuel prices, no offline map. Free vs paid: BookEasy stays and tours free; places, guides, collections and trips need in-app purchase.

### 2. WikiCamps Australia: community camp directory
- https://apps.apple.com/au/app/wikicamps-australia/id505365608. A$9.99 once per platform. 4.5 from 16,662 AU ratings. v6.3.0, 2026-10-19. Ads present. iPhone, iPad, Android.
- Big Lap use: the biggest community catalogue of free and low-cost camps ("Over 65K sites listed"), reviews and photos, Trip Planner with "travel time and distance" and fuel cost estimates, offline mode (https://www.wikicamps.com.au/). Earlier-checked help: up to three planned trips offline, offline distances straight-line (2026-10-20). Version 6 is a rebuild with some features still being reintroduced (developer help, 2026-10-20).

### 3. CAMPS: Camping Australia Wide: checked sites
- https://apps.apple.com/au/app/camps-camping-australia-wide/id537864549. Free to download; 7 days free, then A$14.99 a year (https://www.campsaustraliawide.com/app/). 4.45 from 3,478. v4.4.28, 2026-10-13. iPhone, iPad, Android.
- Big Lap use: team-checked free and budget sites, caravan parks, dump points; filters for vehicle suitability (including Big Rig), price, pets; per-state offline maps (download over Wi-Fi); live fuel and gas prices; Trip Planner and AI "Camps Legend" (https://www.campsaustraliawide.com/help-centre/how-do-i-get-offline-maps-sites/). Mind the storage: download only the states you need next (developer tip). Subscription only.

### 4. ExplorOz Traveller and Hema: offline maps for the remote stretches
- ExplorOz Traveller (id 1116148680): A$59.99 app; full offline EOTopo map via in-app purchase (Pro Access A$99.99 a year, EOTopo Annual A$59.99 a year, EOTopo 2026 4-Year A$79.99 one-time, no updates); 100,000+ places; 4.32 from 1,353; v10.4.0, 2026-07-16. Developer: designed primarily for offline travel using downloaded maps. Features its Routes: Canning Stock Route, Great Central Road and others (https://www.exploroz.com/).
- Hema 4WD Maps (id 465639977): A$99.99, 3.88 from 1,787, last updated v2.4.2 on 2022-09-07; state topo maps are separate A$99.99 purchases (AU page). Say "last updated September 2022".
- Big Lap use: tracks, desert crossings, Kimberley, Cape York (the Hema map list covers these) where phone maps run out. Full detail in the ExplorOz sheet.

### 5. Fuel: Petrol Spy (and state official apps)
- https://apps.apple.com/au/app/petrol-spy-australia/id826254811, Pinecone Software. Free with ads; Premium one year A$2.89, lifetime A$14.99 (AU page, 2026-10-21). 4.77 from 185,044. v6.0.7, 2025-07-23 (last update over a year ago; still on Queensland Treasury's list of fuel-data apps as of 2026-07-16, per au-app-facts.md).
- Store text: real-time prices for QLD, SA, NSW, WA, TAS and NT using FuelCheck and FuelWatch; Victoria "user submitted prices"; price-cycle graphs for eight capitals (checked 2026-10-20).
- Big Lap use: price comparison across states. Remote stretches have wide gaps between fuel: Tourism Australia says Nullarbor services are "often 150-200km / 95-125mi apart" and advises to "top up whenever you have the chance" (https://www.australia.com/en/trips-and-itineraries/perth-and-surrounds/crossing-the-nullarbor.html).
- Official alternatives: NSW FuelCheck (free, 4.75 from 122,894, v10.3.0 2026-03-02); WA FuelWatch; Victoria Servo Saver (in the Service Victoria app) (au-app-facts.md, 2026-10-20). AussieCamps shows no fuel prices; CAMPS shows live fuel prices.

### 6. Weather: BOM Weather (official)
- https://apps.apple.com/au/app/id1100096880, Bureau of Meteorology. Free. 4.61 from 472,905 AU ratings. v6.15.0, 2026-10-21. Official page: "Australia's official weather app"; hourly and 7-day forecasts, radar, rain notifications and warnings; "free and ad-free"; offline mode; iPhone and Android (https://www.bom.gov.au/bom-weather-app, checked 2026-10-20; details in run2/best-weather-apps-camping-australia-facts.md).
- Big Lap use: warnings, fire danger and cyclone or flood information when crossing regions and seasons.

### 7. Google Maps (and Apple Maps): navigation and offline areas
- Google Maps (id 585027354): free, 4.64 from 501,802. Offline maps expire and can auto-update; offline driving only within the downloaded area; no traffic offline (https://support.google.com/maps/answer/6291838, checked 2026-10-20). A route can have "up to 9 stops, which includes the final destination" (https://support.google.com/maps/answer/144339), so a full lap needs splitting into several routes. Apple Maps: "up to 14 stops" (https://support.apple.com/en-au/guide/iphone/iph837d13d03/ios, checked 2026-10-20).

### 8. Camplify: only if hiring a vehicle
- https://apps.apple.com/au/app/id1609755964. Free. 4.64 from 527. v9.8.0, 2026-10-15. "The largest motorhome and campervan sharing platform, connecting owners and hirers" (App Store text). Relevant only for travellers who hire a motorhome or campervan; not a camps app.

### Considered and left out
- Roadtrippers (id 944060491): free, paid tiers Basic A$59.99, Pro A$79.99, Premium A$99.99 a year (AU page, 2026-10-21); listing: "the #1 road trip planning app in the USA and Canada", so not a fit for Australia. 4.56 from 1,377.
- CamperMate (free, 4.42 from 1,543, offline maps per App Store text) is a reasonable free alternative to WikiCamps and CAMPS; see the CAMPS sheet.

## Big Lap basics, official sources only
- Highway 1 total length: NO official source found (searches of gov.au, australia.com and road authority pages returned only Wikipedia for the ~14,500 km figure). Skip the figure, or attribute it to Wikipedia explicitly. Do not state it as official.
- Nullarbor: Tourism Australia itinerary lists "905km (562mi)" Norseman to Nullarbor Roadhouse over four listed driving days, and says most travellers cover "around 300-500km (185-310mi) per day" (https://www.australia.com/en/trips-and-itineraries/perth-and-surrounds/crossing-the-nullarbor.html, read 2026-10-21).
- Top End seasons (Tourism NT): "The dry season in the Top End runs from May to October"; "The wet season... stretches from November to April"; during the Wet "access to some attractions in remote parts of the Top End may be closed due to flooding"; "check road conditions before exploring remote areas or national parks" (https://northernterritory.com/plan/weather-and-seasons, read 2026-10-21).
- Biosecurity: interstate quarantine: "Travellers face on-the-spot fines for taking prohibited items across borders. Check what you are carrying." Rules are set by each state and territory (https://interstatequarantine.org.au/, read 2026-10-21). The federal page https://www.agriculture.gov.au/biosecurity-trade/travelling/within-australia is the source on our guide interstate-biosecurity-road-trip; I could not load it today (timeout), so treat it as unverified here. Specific state rules (WA Eyre Highway, Tasmania ferry, fruit fly zones) are in our own guide; recheck with the state agency before quoting.
- Park booking (checked 2026-10-20 in au-app-facts.md, official pages): QLD camping permit needed for every camp in QPWS parks, booked before arrival (https://parks.qld.gov.au/camping/bookings); NT park camping booked and paid online before arrival (https://nt.gov.au/parks/camping); SA campsites and vehicle entry booked online before arrival (https://www.parks.sa.gov.au/book-and-pay/frequently-asked-questions); TAS parks pass needed even where camping is free (https://parks.tas.gov.au/camping).
- Season and booking pointers beyond the above (Tasmanian ferry timing, school holidays, stinger season): no official source read; skip.

## Official sources (URLs actually read this pass)
- https://www.australia.com/en/trips-and-itineraries/perth-and-surrounds/crossing-the-nullarbor.html ; https://northernterritory.com/plan/weather-and-seasons ; https://interstatequarantine.org.au/
- https://www.campsaustraliawide.com/app/ ; https://www.wikicamps.com.au/ ; https://www.exploroz.com/ (traveller, eotopo, membership, tracker)
- iTunes lookups: ids 6801098680, 505365608, 537864549, 1116148680, 465639977, 826254811, 1100096880, 585027354, 1609755964, 944060491
- Repo: lib/data/product-facts.json; app repo Guides and Planner Swift files; au-app-facts.md and run2 sheets (earlier dated checks, cited above).

## Search demand
/Users/cristian/Developer/Apps/Camping/docs/aso/aussiecamps/ (Astro popularity, AU, 2026-10-14, research/2026-10-15-full-examination/demand-and-product-page.md): "big lap planner" popularity 5 (AussieCamps rank 175 on that date), "camping app" 24, "wikicamps australia" 66. No popularity data for "big lap" alone, "lap of australia" or "big lap apps" (unverified). The keyword-discovery-2026-09-11 set is a candidate list without volumes. Treat demand as low-to-unmeasured on App Store search; web demand not measured.

## Related guides (existing slugs)
best-road-trip-planner-apps-australia, best-fuel-price-apps-australia, best-weather-apps-camping-australia, best-caravan-rv-apps-australia, best-camping-app-australia, interstate-biosecurity-road-trip, nullarbor-crossing-camping-guide, east-coast-road-trip-sydney-cairns, perth-to-broome-road-trip, tasmania-camping-loop, darwin-kakadu-litchfield-loop, how-to-plan-trip-aussiecamps, road-trip-fuel-planning-australia, camping-fees-australia-2026, camping-without-phone-signal, campervan-road-trip-budget-australia.
