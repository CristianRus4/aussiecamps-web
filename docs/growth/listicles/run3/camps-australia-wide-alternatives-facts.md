# Alternatives to CAMPS Australia Wide: facts (run 3)

All facts checked 2026-10-21 unless a different date is shown. "AU" = App Store Australia (iTunes lookup `https://itunes.apple.com/lookup?id=<ID>&country=au`, AU page `https://apps.apple.com/au/app/id<ID>`). Anything not confirmed is marked "unverified". Prices A$.

## Pricing wording for AussieCamps (ours)
Write only: "free to download, with in-app purchases". Do not name the Pass tiers or prices.

## CAMPS: Camping Australia Wide (the app being compared against)
- Listing: https://apps.apple.com/au/app/camps-camping-australia-wide/id537864549, developer Camps Australia Wide Pty Ltd. iPhone and iPad (iOS 15.0+), plus Android (Play id au.net.iapps.campsaustralia). Not usable on a laptop or computer (https://www.campsaustraliawide.com/app/).
- Price: free to download. Developer: "Your first 7-days on the Camps App are free then a low $14.99/year" (https://www.campsaustraliawide.com/app/). Help centre: "you do need to subscribe to access the Camps App"; the store needs a payment method to start the trial; cancel before it ends to avoid a charge (https://campsaustraliawide.com/help-centre/app-support/). AU IAP list: Camps All-Access Yearly Plan A$14.99 (a second entry of the same name is A$9.99), Camps+ Membership A$9.99, Camps+ Premium Membership A$9.99, Live Updates legacy A$9.99 and A$1.99.
- Rating: 4.45 from 3,478 AU ratings. Version 4.4.28, 2026-10-13 (lookup).
- Data: own team. "The Camps team has been on the road since 1992, and we still visit each site... No paid listings, ever." "We assess every site against 12 criteria including access, facilities, noise, safety, phone signal and whether the price matches what you get" (App Store text, lookup id 537864549). Site: "16,000+ campsites personally checked", "5,500+ budget camp sites, 2,250+ caravan & tourist parks", "1400+ public dump points" (site) vs "1,100+ public dump points and 570+ official water refill points" (App Store text). SOURCES DIFFER on dump points (1,400+ site vs 1,100+ store): quote one with its source or avoid the number.
- Filters (help centre, https://www.campsaustraliawide.com/help-centre/how-do-i-use-filters/): Primary: distance 20-500 km, site type, state, price (Free/Donation, Under $25, $26-$40, $40+), pets, suitability (Campervan, Camper Trailer, Big Rig). Advanced: accommodation and sites (powered, ensuite, drive-through), facilities, connectivity (mobile reception, Wi-Fi), setting and features, holiday networks (Family Parks, Kui Parks, Big 4), time limit. The store text adds a "Chat with our search tool".
- Offline (https://www.campsaustraliawide.com/help-centre/how-do-i-get-offline-maps-sites/): maps are downloaded per state over Wi-Fi; site data syncs; "Turn on Offline Map Mode"; the app switches to offline automatically out of range. "If you have not yet downloaded the maps for that state, the app will revert to the basic offline maps with limited zoom functionality." App support page: offline maps files must be updated manually to stay current. Product page: "Download our premium offline maps with all site information".
- Trip tools: Trip Planner (bucket lists, check-in and check-out, diary, share and collaborate); "Camps Legend", an AI campsite finder and trip planner that takes instructions such as vehicle length (App Store text; developer's example "we tow 7m's"). Live fuel and gas prices, in-app booking, partner discounts ("up-to 20% off holiday parks", site).
- Strong: personally checked sites, vehicle-fit planning, per-state offline maps with site data, fuel prices, community feed. Guidebook users can redeem a free year.
- Honest cons: subscription only, no one-off option and no free tier after the trial; smaller catalogue than WikiCamps (16,000+ vs 65K+ claimed); Android rating lower (Play 3.27 from 874, checked 2026-10-20: https://play.google.com/store/apps/details?id=au.net.iapps.campsaustralia); offline maps need manual refresh.
- Still the better choice when: you want vetted sites with big-rig or vehicle-fit filters, per-state offline maps with site details, live fuel prices and booking in one app, and a A$14.99 yearly fee is acceptable.

## AussieCamps (ours)
- https://apps.apple.com/au/app/id6801098680 (Camping Australia: AussieCamps), Cntxt Limited. iPhone only ("Only for iPhone"; runs on Apple silicon Macs as an iPhone app). iOS 26 or later. v2026.9.6, 2026-09-24. Not on Android.
- Price: free to download, with in-app purchases. Rating: not enough ratings yet to display an overview in AU (lookup shows 0).
- Has (App Store text, checked 2026-10-21): search by name, town or price; filters for water, toilets, showers, power, dogs, vehicle access, fees; place pages with facilities, fees, rules, access notes, photos, alerts and weather; Look Around; directions in Apple Maps or Google Maps; trips with dates and an ordered list of stops, driving distance and time per leg and for the whole journey, arrival dates with forecasts, checklist and packing list, share, Calendar sync; likes, stars, visited and want-to-visit lists; collections; widgets; road trips and camping guides. In the app repo: trip legs use MapKit driving directions (`Packages/CampingKit/.../Planner/TripRouteBuilder.swift`, `.automobile`) and forecasts are loaded per stop arrival date (`TripDetailView.swift`).
- Data: state park agencies, road authorities and public facility datasets (e.g. NSW NPWS, Parks Victoria, Main Roads WA, Queensland TMR, QPWS, Tasmania PWS, NT Parks, National Public Toilet Map; `lib/data/hubs.meta.json`). Counts from `lib/data/product-facts.json` (dataAsOf 2026-09-09, Pass data): 1,838 campgrounds, 5,552 rest areas, 1,393 dump points, 3,004 drinking water points, 1,186 toilets, 745 national parks.
- CONFLICT, do not use: the App Store text says "75,000+ places", "21 detailed Australian road trips and more than 50 practical guides". An internal ASO audit (docs/aso .../2026-10-15-full-examination/README.md, A1) says to correct these to 22,000+, 20 and 44. I counted the app bundle: 20 road trips (`Aussie/AussieCamping/Guides/RoadTripGuidesData.swift`) and 44 articles (`CampingArticlesData.swift`). Use the product-facts counts above, and say "road trips and guides" or "20 road trips and 44 guides".
- Free vs paid: BookEasy stays and tours (hotels, motels, B&Bs, holiday parks) are free; campgrounds, rest areas, dump points, water, toilets, parks, guides, collections and trips need the Pass (product-facts passBoundary). Say only that some content needs in-app purchase.
- Offline (App Store text): "The Australian place directory lives on your phone, so campsite, facility and rest-area details are still available... Previously viewed imagery is cached when available. Live maps, directions, forecasts and external links still need a connection." No offline map. Say this plainly.
- No traveller reviews or comments in the app. No fuel prices. Not on Android.
- Best for: iPhone users who want official-data places, filters and a trip planner with leg times and forecasts, with place details readable offline.
- Honest cons: iPhone only; no offline map; no reviews; new with no AU rating yet; live map and routing need signal.

## WikiCamps Australia
- https://apps.apple.com/au/app/wikicamps-australia/id505365608, WikiCamps pty ltd. iPhone, iPad; also Android (Play au.com.angryrobot.wikicamps, 2.58 from 25,734, checked 2026-10-20).
- Price: A$9.99 once per platform; no in-app purchases on the AU listing (AU page, 2026-10-21 lookup shows A$9.99). Site: "Pay once. Use forever. $9.99" (https://www.wikicamps.com.au/). Contains advertising (App Store; help article 33629576561689, checked 2026-10-20).
- Rating: 4.5 from 16,662 AU ratings. v6.3.0, 2026-10-19.
- Data: user-contributed: "Every site listing, detail, photo, and review comes straight to you from fellow WikiCampers" (site). "Over 65K sites listed", "4K+ bookable" (site); App Store says over 60,000.
- Offline: site now says "You can explore sites and your trip plans even when you have no phone reception with Offline Mode". Earlier checked wording (2026-10-20, support/site): maps and up to three planned trips offline; offline distances are straight-line (help articles 57933988363289, 57934042716185).
- Trip Planner: stops, notes, custom pins, "see travel time and distance instantly", routes with fuel cost estimates (site).
- Version 6 rebuild: developer says it will "reintroduce key features over time"; some recent AU reviews mention removed filters and logouts (checked 2026-10-20).
- Best for: the biggest community-reviewed catalogue of free and low-cost camps for a one-off price. Cons: ads; user-contributed accuracy; Android rating 2.58; version 6 gaps.

## CamperMate (Australia and NZ)
- https://apps.apple.com/au/app/campermate-australia-nz/id465040067, Outdoria Pty Ltd. iPhone, iPad, Android, web.
- Price: free, no in-app purchases listed (AU page); ads present (App Store). Rating 4.42 from 1,543. v5.8.0, 2026-10-15.
- "Download maps and access crucial info without an internet connection... Your offline data stays up to date automatically... no expiration" (App Store text). Site: "70,000+ points of interest" (checked 2026-10-20).
- Community reviews and photos; booking; rental partners (Apollo, Maui, Britz, Mighty Camper). No documented vehicle-size filter (store text lists free and paid filtering). Recent AU reviews mention campsites failing to load in some regions (2026-10-20 notes).
- Best for: free offline maps, Australia and NZ together. Cons: ads and partner promotion; no vehicle-fit filter documented.

## Full Range Camping (formerly FreeRange Camping)
- https://apps.apple.com/au/app/full-range-camping/id1204154250. Free; IAP Yearly Premium A$49.99, Lifetime Premium A$99.99 (AU page, 2026-10-21). 4.03 from 262. v9.19, 2026-08-25.
- Store text: "All information in the FRC directory is sourced from the relevant authorities including National Parks, Departments of Transport, Councils, State Government Agencies and private site owners"; offline access to all listings is a Premium feature; members can review.
- Developer premium page said "Premium Memberships Currently Unavailable... whilst we update the Android and IOS versions of the FRC App's Mapping Software" (https://www.fullrangecamping.com.au/premium, checked 2026-10-21; the App Store still lists the IAP prices). Mention only with that caveat.
- Best for: browsing free camps without paying, plus house-sitting and discounts. Cons: offline is Premium only; fewest ratings; premium sign-up status unclear.

## NSW National Parks (state park app, NSW only)
- https://apps.apple.com/au/app/id1213696400. Free, no in-app purchases listed. 4.63 from 2,746. v1.14.0, 2026-05-12.
- Store text: "over 225 NSW national parks"; "Download maps before you visit, then navigate safely... even if there's no reception"; campgrounds, caravan sites, cabins. NSW only, parks only.
- Best for: campgrounds inside NSW national parks, with free downloadable park maps. Not a national directory.

## Hipcamp (private land stays)
- https://apps.apple.com/au/app/hipcamp-camping-caravans/id1440066037. Free. 4.79 from 22,596. v4.21.0, 2026-10-01. Book camping, glamping and caravan stays on private land; paid per stay, not a free-camp finder. No offline claim found.

## Official sources (URLs actually read)
- https://www.campsaustraliawide.com/app/ ; https://campsaustraliawide.com/help-centre/app-support/ ; https://www.campsaustraliawide.com/help-centre/how-do-i-use-filters/ ; https://www.campsaustraliawide.com/help-centre/how-do-i-get-offline-maps-sites/
- https://www.wikicamps.com.au/ ; https://campermate.com/ ; https://www.fullrangecamping.com.au/premium
- iTunes lookups and AU App Store pages for ids 6801098680, 537864549, 505365608, 465040067, 1204154250, 1213696400, 1440066037
- Repo: lib/data/product-facts.json, lib/data/hubs.meta.json, au-app-facts.md, run2 sheets; app repo Guides/*.swift, Planner/*.swift.

## Search demand
Source: /Users/cristian/Developer/Apps/Camping/docs/aso/aussiecamps/research/2026-10-15-full-examination/demand-and-product-page.md (Astro popularity, AU, 2026-10-14). camps australia wide / "camps app": no popularity data in the ASO files (unverified; not in the keyword-discovery set). Related: "wikicamps australia" 66, "campermate" 58, "wikicamps" 49, "camping app" 24. AussieCamps has no AU rating yet, so do not claim a rank.

## Related guides (existing slugs)
best-camping-app-australia, wikicamps-alternatives, campermate-alternatives, hipcamp-alternatives, best-free-camping-apps-australia, best-caravan-rv-apps-australia, how-to-use-aussiecamps-filters, camping-without-phone-signal, dump-points-australia-guide, camping-fees-australia-2026.
