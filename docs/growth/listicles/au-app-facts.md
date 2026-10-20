# AussieCamps listicles: app fact sheet

Research notes behind the "best apps" and "alternatives" guides. Each fact carries its source and the date it was checked. Re-check before changing a guide; listings move.

## AussieCamps (ours), checked 2026-10-20

- Listing: https://apps.apple.com/au/app/id6801098680. "Only for iPhone", "Designed for iPhone" (runs on Apple silicon Macs as an iPhone app). Requires iOS 26 or later. Seller Cntxt Limited. Version 2026.9.6 (24 Sept 2026).
- Price: free download, In-App Purchases "Premium Pass" listed at A$2.99, A$5.99 and A$9.99 (App Store AU). The app sells a weekly subscription and a one-off lifetime Pass (app repo `Aussie/AussieCamping/AussiePaywallConfiguration.swift`: `AussieSub_Weekly`, `Aussie_Lifetime`, `Aussie_Lifetime_Offer`).
- Rating: "This app hasn't received enough ratings or reviews to display an overview" (App Store AU).
- Free vs Pass: BookEasy stays and tours (hotels, motels, B&Bs, holiday parks, tours) free; campgrounds, rest areas, dump points, water, toilets, parks, guides, collections and trips need the Pass (`lib/data/product-facts.json` passBoundary; paywall comparison rows in the app repo).
- Counts (Pass data, `lib/data/product-facts.json`, dataAsOf 2026-09-09): 1,838 campgrounds, 5,552 rest areas, 1,393 dump points (230 with washout), 3,004 drinking water points, 1,186 toilets, 745 national parks.
- Data sources: state park agencies, road authorities and public facility datasets (NSW NPWS, Parks Victoria, Main Roads WA, Queensland TMR, Transport for NSW, QPWS, Tasmania PWS, NT Parks, ACT Parks, SA, DBCA, DEECA, National Public Toilet Map), `lib/data/hubs.meta.json`.
- Offline: place directory stored on the phone, so place details stay readable with no signal; previously viewed imagery cached when available; live maps, directions, forecasts and external links need a connection (App Store description). No offline map.
- Features (App Store description, app strings): filters (water, toilets, showers, power, dogs, vehicle access, fees); place details with facilities, fees, rules, access notes, photos, alerts, weather; Look Around; directions handed to Apple Maps or Google Maps; trips with ordered stops, leg distance and time, arrival dates and forecasts, checklist and packing list, share, Calendar sync; liked/starred/visited/want to visit lists; collections; iCloud sync of saved places; widgets; 21 road trips and 50+ guides.
- No traveller reviews or comments in the app (no review strings beyond the paywall testimonials and a feedback form).

## Competitors, checked 2026-10-20 (Sonnet research pass; iTunes search API country=au and developer sites)

### WikiCamps Australia
- https://apps.apple.com/au/app/wikicamps-australia/id505365608, WikiCamps Pty Ltd. iOS and Android, iPad supported.
- A$9.99 one-off, "per platform (iOS/Android)", "No subscriptions or hidden fees" (https://www.wikicamps.com.au/).
- App Store AU 4.5 from 16,663 ratings. Version 6.3.0, 2026-10-19.
- "Over 65K sites listed", "4K+ bookable sites and experiences" (wikicamps.com.au); App Store says "over 60,000 sites".
- User-contributed: listings, photos, reviews from users (1.3M reviews, 900K+ photos claimed).
- Offline: "access maps and up to three of your planned trips even without phone signal" (site).
- Features: filters, Trip Planner with route and fuel cost estimate, collections, in-app booking, reviews and photos.

### CamperMate
- https://apps.apple.com/au/app/campermate-australia-nz/id465040067. iOS, Android, web. iPad supported.
- Free; In-App Purchases flagged, prices not listed in research (unverified).
- App Store AU 4.4 from 1,543 ratings. Version 5.8.0, 2026-10-15.
- "70,000+ points of interest" (https://campermate.com/). Covers Australia and New Zealand.
- Community reviews, photos, suggested places. Offline: "Download maps and access crucial info without an internet connection" (App Store).

### Hipcamp
- https://apps.apple.com/au/app/hipcamp-camping-caravans/id1440066037, Hipcamp Inc. iOS, Android, web.
- Free download; bookings paid per stay.
- App Store AU 4.8 (4.79) from 22,592 ratings. Version 4.21.0, 2026-10-01.
- Bookable private-land camping, glamping and caravan stays listed by hosts; reviews and photos. No offline claim found.

### CAMPS (Camps Australia Wide)
- https://apps.apple.com/au/app/camps-camping-australia-wide/id537864549, Camps Australia Wide Pty Ltd. iOS and Android; not usable on a computer (https://www.campsaustraliawide.com/app/).
- Free with 7-day trial, then A$14.99 a year (site); IAP list shows All-Access Yearly A$14.99 and A$9.99, legacy plans.
- App Store AU 4.5 (4.45) from 3,476 ratings. Version 4.4.28, 2026-10-13.
- "16,000+ verified campsites", "personally checked", "No paid listings, ever" (App Store). Own team since 1992 plus community reviews. Live fuel prices, trip planner, booking.
- Offline: "premium offline maps with all site information" (paid access).

### Full Range Camping (formerly FreeRange Camping)
- https://apps.apple.com/au/app/full-range-camping/id1204154250, Free Range Camping Pty Ltd. freerangecamping.com.au redirects to fullrangecamping.com.au. iOS and Android.
- Free; Premium A$49.99 a year or A$99.99 lifetime (App Store AU IAP).
- App Store AU 4.0 (4.03) from 262 ratings. Version 9.19, 2026-08-25.
- "11,000+ camping spots & businesses" (site). Member discounts, weather radar, house sitting and Help Out listings.
- Offline caching is Premium only (site; App Store "offline access to all our listings").

### ExplorOz Traveller
- https://apps.apple.com/au/app/exploroz-traveller/id1116148680, I.T. Beyond Pty Ltd.
- A$59.99 upfront (Family Sharing). IAP: EOTopo Annual Access A$59.99 a year; EOTopo 2026 4-Year Access A$79.99 (single map edition); ExplorOz Pro Access A$99.99 a year; tile packs A$14.99 and A$49.99.
- App Store AU 4.3 from 1,352 ratings. Version 10.4.0, 2026-07-16.
- "100,000+ places across Australia"; EOTopo topographic maps, named roads, tracks, trails; camps, fuel, water; Pro adds live tracking, GPX export and a web app.
- Offline: "Download the full Australia-wide map to your device and use it anytime, online or offline"; "EOTopo maps are required for offline use and purchased in-app".

### Hema (4WD Maps; "Hema Explorer" retired)
- Hema's HX-1 / Explorer Cloud line is retired (https://kb.hemamaps.com/hx1-hema-cloud-due-to-retire). Current apps: "4WD Maps" and "4x4 Explorer" (https://hemamaps.com/pages/hema-apps-comparison).
- 4WD Maps: https://apps.apple.com/au/app/4wd-maps-offline-topo-maps/id465639977, A$99.99 upfront, App Store AU 3.9 from 1,787 ratings, last update v2.4.2 on 2022-09-07. 4x4 Explorer AU listing not verified. Not used in listicles until re-checked.

### Roadtrippers
- https://apps.apple.com/au/app/roadtrippers-trip-planner/id944060491. Free; Basic A$59.99, Pro A$79.99, Premium A$99.99 a year. App Store AU 4.6 from 1,377 ratings. v6.4.1, 2026-10-02.
- Listing: "Designed for discovering and planning road trips in the USA and Canada only." Free tier 3 stops; offline maps in paid tiers.

### PetrolSpy
- https://apps.apple.com/au/app/petrol-spy-australia/id826254811, https://petrolspy.com.au. Free; Premium (no ads) A$2.89 a year or A$14.99 lifetime. App Store AU 4.8 from 184,903 ratings. v6.0.7, 2025-07-23.
- NSW prices from FuelCheck, WA from FuelWatch, Victoria user-submitted; price-cycle graphs for 8 cities; user price reports.

### Fuel Map Australia
- https://apps.apple.com/au/app/fuel-map-australia/id999638192, WikiCamps Pty Ltd. Free with ads; remove ads A$2.99. App Store AU 4.5 from 6,879 ratings. Last update v4.2.0, 2022-10-23.
- Crowd-sourced, with real-time government prices for WA, NSW and QLD; WA tomorrow prices after 3pm.

### Park4Night
- https://apps.apple.com/au/app/park4night/id430946556. Free; park4night+ A$2.99 a month or A$14.99 a year (offline mode). App Store AU 4.8 from 82 ratings. v7.3.8, 2026-08-03.
- "Over 370,000 places listed worldwide"; no Australian coverage figure from the developer. Not used for Australia.

## Alternatives research, checked 2026-10-20

### WikiCamps Australia, more detail
- One-off A$9.99 per platform; purchases cannot move between iOS and Android (https://support.wikicamps.co/hc/en-gb/articles/57872100733593). Family Sharing on iOS. No in-app purchases on the AU listing. No PC or web version: "Version 6 is currently only available on iOS and Android" (help article 57934122622873).
- Ads: App Store "Contains Advertising"; developer added a small number of ad placements in reviews, fees and photos, and is considering a paid option to remove them (help article 57935411954201).
- Offline: download the main "Australia" content first; maps, sites, reviews, ratings and fees; "a maximum of three trips for offline use"; offline distances are straight-line (help articles 57933988363289, 57934042716185; App Store release notes). Known issue: app can stall with no internet unless offline mode was set up first (help article 57934367805081).
- Version 6 rebuild: older versions retired from March 2026; developer says it will "reintroduce key features over time" (help articles 57935317938329, 57935249462425). Recent AU reviews (Aug to Oct 2026) mention removed filters (4x4), filters resetting and logouts; a minority are positive.
- Booking via "Book Now" handled by BookEasy (Book Australia) (help article 57872655090969). Trip Planner with fuel budget (help article 57933120336665).
- Sister apps: WikiCamps NZ (bought separately), Fuel Map Australia.

### CamperMate, more detail
- Free, no in-app purchases on the AU listing; App Store lists advertising. Owned and operated by Outdoria Pty Ltd (https://campermate.com/en/page/terms-and-conditions). Started in NZ in 2006 (https://campermate.com/en/page/about-us).
- Offline: "Download maps and access crucial info without an internet connection... no expiration"; v5.8 satellite view works offline (App Store).
- 27 languages; bookings, deals, vehicle hire partners (Apollo, Maui, Britz, Mighty Camper, Camplify), holiday park partners (about page). Community reviews, photos, suggested places.
- Recent AU reviews (Dec 2025 to Aug 2026) mention campsites failing to load in some regions and support delays; some 5-star reviews after updates.

### StayFree Vanlife Camping AU NZ
- https://apps.apple.com/au/app/stayfree-vanlife-camping-au-nz/id1439159740, StayFree GmbH. Free; Premium A$5.99 a month, A$14.99 for 3 months, A$29.99 a year. 3.9 from 36 AU ratings. v4.7.0, 2026-08-12. User-contributed; no offline claim. Not used yet (thin Australian evidence).

## Fuel price apps, checked 2026-10-20

- Petrol Spy (id 826254811): free with ads; Premium One Year A$2.89, Lifetime A$14.99. 4.8 from ~184.9K AU ratings. v6.0.7, 2025-07-23. Listing: real-time maps for QLD, SA, NSW, WA, TAS, NT incl. FuelCheck and FuelWatch; Victoria "user submitted prices"; price cycle graphs for 8 capitals; best-time-to-buy alerts. On Queensland Treasury's list of data recipients.
- Fuel Map Australia (id 999638192, WikiCamps): free, remove ads A$2.99; 4.5 from ~6.9K; last update 2022-10-23; crowd-sourced plus government data for WA, NSW, QLD; WA tomorrow prices; fuel log.
- NSW FuelCheck (id 1266569551, NSW Department of Customer Service): free, no IAP; 4.8 from ~122.9K; v10.3.0, 2026-03-02; "over 2300 service stations in NSW and 60 in ACT"; alerts, My Trip (cheapest on route), Trends.
- FuelCheck TAS (id 1524416815): free; 4.7 from ~3.5K; v10.3.0, 2026-06-30; 200+ stations; outage listings since March 2026 (premier.tas.gov.au, March 2026).
- FuelWatch WA: next-day price submitted by 2pm, fixed for 24 hours from 6am, published from 2:30pm; website and ServiceWA app (wa.gov.au media statement 2026-04-30).
- Victoria Servo Saver: in the Service Victoria app since 15 Oct 2025, ad-free; mandatory reporting within 30 minutes; next-day maximum price published by 4pm, applies from 6am for 24 hours (consumer.vic.gov.au mandatory fuel price reporting; premier.vic.gov.au).
- Queensland: no official app; Treasury lists apps receiving scheme data (treasury.qld.gov.au fuel price apps page, updated 16 July 2026), incl. Petrol Spy, FuelMap, MotorMouth, Pumped, RACQ Fuel and Deals, Fuel Snoop.
- SA: retailers update within 30 minutes; sa.gov.au/fuel-pricing lists approved apps (page not fetched).
- NT: MyFuel NT government web app, mandatory since 1 Nov 2017 (consumeraffairs.nt.gov.au/myfuel-nt).
- My NRMA (id 343747162): 4.6 from ~108.8K; members 5c/L premium and 4c/L regular off at participating Ampol Foodary (mynrma.com.au/ampol).
- My 7-Eleven (id 1032594453): 4.8 from ~269.6K; Fuel Price Lock terms dated Feb 2024: up to 150L, max 25c/L, 7 days, cheapest of up to 5 stores within 250 km (7eleven.com.au/fuel-price-lock-terms). Current status unverified.
- ACCC fuel monitoring: https://www.accc.gov.au/by-industry/petrol-and-fuel/fuel-and-petrol-monitoring
- AussieCamps shows no fuel prices; not ranked on fuel pages.
- Full Range Camping update: https://www.fullrangecamping.com.au/premium said "Premium Memberships Currently Unavailable ... whilst we update the Android and IOS versions of the FRC App's Mapping Software" (checked 2026-10-20). App Store still lists the IAP prices.

## Free camping and trip planner apps, checked 2026-10-20
- CAMPS: no free tier after the 7-day trial; "From December 2024 free app users will need to upgrade to the new Yearly $14.99/year plan" (https://campsaustraliawide.com/help-centre/app-support/). Guidebook owners get a year free.
- WikiCamps: no free trial or free version found.
- Full Range Camping: directory free to browse with a "Free Camps" category (site); Premium adds offline caching, radar, collections, discounts.
- NSW National Parks app (id 1213696400): free, 4.6 from 2,746. Free-camp listing unverified.
- Parks Victoria: no app; https://www.parks.vic.gov.au/where-to-stay/camping/free-camping-in-victoria.
- Anycamp (id 1343507387): 4.7 from 7,097, last updated 2024-04-08.
- Google Maps (id 585027354): free, 4.6 from 501,723; "up to 9 stops, which includes the final destination" (https://support.google.com/maps/answer/144339); offline maps (https://support.google.com/maps/answer/6291838).
- Apple Maps (id 915056765): 2.7 from 2,592 AU ratings; add stops and download offline maps (https://support.apple.com/en-au/guide/iphone/iph3ab27ee8b/ios).
- Wanderlog (id 1476732439): free, 4.9 from 5,312; Pro IAP; store copy claims unlimited stops and route optimisation free. AU Pro price unverified.
- TripIt (id 311035142): 4.8 from 52,985; Pro A$77.99 a year; bookings organiser.
- Polarsteps (id 947925763): 4.9 from 11,924; Plus A$44.99 a year; tracker and journal.
- Sygic GPS Navigation (id 585193266): 4.4 from 6,811; offline turn-by-turn; Premium+ price unverified.

## Road trip planners, more detail (checked 2026-10-20)
- Apple Maps: "Create a multistop driving route. You can add up to 14 stops along your route" (https://support.apple.com/en-au/guide/iphone/iph837d13d03/ios); offline maps with turn-by-turn driving directions (https://support.apple.com/en-au/guide/iphone/iphcfb5f5bc6/ios, https://support.apple.com/en-us/105084); not available in all countries or regions.
- Google Maps: "up to 9 stops, which includes the final destination" (https://support.google.com/maps/answer/144339); offline maps expire and can auto-update; offline driving only within the downloaded area; no traffic offline (https://support.google.com/maps/answer/6291838).
- Wanderlog: AU store lists several Pro plan prices (A$50.99 to A$99.99 a year, A$25.99 a month); store says unlimited stops free with times and distances; help centre: offline trip plans and route optimisation are Pro (https://help.wanderlog.com/hc/en-us/articles/13545182856859).
- WikiCamps Trip Planner: sections, places, notes, progress bar, fuel use and cost estimate between places; not a logbook (help article 57933120336665). Leg drive time not documented.
- TripIt: itinerary from forwarded booking emails, offline reservation details, Pro A$77.99 a year, 4.8 from 52,985.
- Polarsteps: AI itinerary planner and automatic tracking, Plus A$44.99 a year, 4.9 from 11,924, iPhone app.

## Official free camping sources, checked 2026-10-20 (many agency pages block automated fetches; marked items are from official-page search excerpts)
- QLD: QPWS permit needed for every camp in parks, forests and recreation areas, booked before arrival; from 1 July 2026 A$7.75 per person or A$31 per family per night (https://parks.qld.gov.au/camping/bookings, fee PDF https://parks.des.qld.gov.au/__data/assets/pdf_file/0035/158498/camping-fees.pdf). Rest areas: up to 20 hours unless signed, "not camping sites or an accommodation option" (https://www.qld.gov.au/transport/safety/holiday-travel/stops/rest).
- VIC: state forest campgrounds free and not bookable (Murrindindi Scenic Reserve small permit fee); dispersed camping 20 m from waterways, up to 28 nights (https://www.vic.gov.au/camping). Parks Victoria free and bookable sites; half-price fees until July 2027 (https://www.parks.vic.gov.au/where-to-stay/camping/free-camping-in-victoria). More to Explore app and maps (https://www.ffm.vic.gov.au/visiting-state-forests/more-to-explore-apps-and-maps).
- NSW: camping free in most state forests, first come first served, four-week maximum (Forestry Corporation page, excerpt: https://www.forestrycorporation.com.au/visit/virtual-visitor-centre/camping-in-nsw-state-forests). NPWS: some campgrounds have no camping fee but online bookings carry a booking fee (https://www.nationalparks.nsw.gov.au/campground-accommodation-booking-faqs). NSW National Parks app: free, 225+ parks, locate campgrounds, Book Now; no fee info in its description.
- WA: DBCA fees A$10/15/20 per adult per night, park entry separate (https://exploreparks.dbca.wa.gov.au/camping-fees). Main Roads WA: signed 24-hour rest areas allow up to 24 consecutive hours; Travel Map rest-area filter (https://www.mainroads.wa.gov.au/travelmap/).
- TAS: parks pass needed even where camping is free; free sites incl. Cockle Creek, Bay of Fires (https://parks.tas.gov.au/camping).
- NT: park camping booked and paid online before arrival (https://nt.gov.au/parks/camping).
- SA: campsites and vehicle entry booked online before arrival (https://www.parks.sa.gov.au/book-and-pay/frequently-asked-questions).
- No official national free-camp app or dataset found.
