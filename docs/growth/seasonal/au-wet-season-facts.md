# Wet season camping, Top End and northern WA: official-source fact sheet

Research lane for the guide "Wet season camping in the Top End and northern WA (Nov to Apr)".
Date read for every item: 2026-10-21 (today), unless stated otherwise.
Rule used: every fact has a URL and a verbatim quote. Where a source is silent, the entry says "not published". Where an official page was blocked, the entry is marked SEARCH EXTRACT and must be re-verified on the live page before it is published.

## Read this first (corrections to the brief, and traps)

1. The Gibb River Road is NOT closed by the Shire of Derby-West Kimberley. The Shire's own road report says it is a Main Roads WA road (item 2.2). Main Roads WA states the wet season "generally runs from December to April". No fixed closure or reopening date is published; it reopens when river crossings allow and flood repairs are done.
2. Kakadu's official season names and months differ from the brief. Parks Australia uses Kunumeleng, Kudjewk, Bangkerreng, Yekke, Wurrkeng, Kurrung (not Gunumeleng, Gudjewg, Banggerreng, Yegge, Wurrgeng, Gurrung). See item 3.1.
3. Jim Jim Falls, Twin Falls and Karnamarr campground are closed for all of 2026 (road upgrades, Traditional Owner request), expected to reopen for the 2027 dry season. Do not describe Jim Jim as a normal wet-season closure.
4. Purnululu, Windjana Gorge, Tunnel Creek: the official dates are "November to April" / "May to November" ranges, not "1 Jan to 31 Mar". No exact dates are published.
5. Build-up months are not consistent even within Tourism NT (Oct to Dec on two pages, Oct to Jan on the camping page). Use "from about October" and cite the page you quote.
6. Tourism NT, Parks Australia and BOM all say the Wet starts in November in the tourism sense, while BOM and Kakadu say the monsoon proper arrives in late December/Kudjewk (Dec/Jan to Mar). Say both if the guide uses a single start month.
7. Karijini (Pilbara, not Kimberley): the DBCA page publishes no wet-season closure. Do not write "Karijini closes" or "Karijini stays open" as an official statement. Only "flash floods can occur" and "temperatures frequently top 40C" are published.

## Access log (what was blocked)

| Source | Result | How handled |
|---|---|---|
| nt.gov.au, dli.nt.gov.au, securent.nt.gov.au, health.nt.gov.au, becrocwise.nt.gov.au, mediareleases.nt.gov.au, newsroom.nt.gov.au | HTTP 403 on WebFetch and on plain curl | BLOCKED. Not worked around. Used WebSearch extracts, marked SEARCH EXTRACT. The NT Road Report fact and the 1800 number were verified on Tourism NT and Kakadu pages instead. |
| parks.nt.gov.au | Host does not resolve | Used Tourism NT pages for Litchfield/Nitmiluk. |
| roadwise.asn.au Gibb River Road brochure PDF | 403 | Not used. |
| bom.gov.au | WebFetch got 403. Plain curl (generic "Mozilla/5.0 (research)" user agent, one plain GET, no retries or tricks) returned 200 | Used. Disclosed so it can be judged. If strict compliance is wanted, treat the BOM quotes as unverified and re-read manually. |
| westernaustralia.com (Tourism WA) | 200 but returned only a generic shell with no Kimberley text | Not used. Tourism WA wet-season text: not obtained. Used Australia's North West (WA tourism region site) and DBCA instead. |
| mainroads.wa.gov.au /travel-map/ | 404 (page moved) | Used /travelmap/ and the Gibb River Road page. |

---

## 1. The wet season

### 1.1 Cyclone season dates (BOM)
- Fact: The official Australian-region cyclone season runs 1 November to 30 April.
- URL: https://www.bom.gov.au/climate/cyclones/australia/
- Quote: "The official tropical cyclone season in the Australian region runs from 1 November to 30 April"
- Also: "On average, there are 10 tropical cyclones (TCs) in the Australian region each season" and "Since 2000, the average number of cyclones each season has been closer to 8–9".

### 1.2 Northern wet season months and monsoon onset (BOM)
- Fact: BOM puts the northern wet season at about October to April in the far north of the NT, with monsoon onset around Darwin normally in late December.
- URL: https://www.bom.gov.au/resources/learn-and-explore/climate-knowledge-centre/climate-factors/monsoon
- Quotes: "The northern wet season extends from about October to April in the far north of the Northern Territory." / "The initial monsoon onset – the reversal of the winds – normally happens in late December around Darwin."
- Same page, tourism-style range: "It is part of northern Australia's wet season from November to April."

### 1.3 The build-up (BOM definition)
- Fact: BOM describes the build-up as the period before initial monsoon onset, mostly inactive weather.
- URL: same as 1.2
- Quote: "A typical wet season consists of a prolonged inactive phase during the build-up (the period before initial onset)."
- Monsoon bursts: "Northern Australia typically sees about three monsoon bursts each wet season."

### 1.4 Build-up and wet months (Tourism NT, three pages, slightly different)
- Fact A: Tourism NT calls the Top End wet season November to April.
  - URL: https://northernterritory.com/plan/weather-and-seasons
  - Quote: "The wet season, also known as the Top End’s tropical summer, stretches from November to April."
- Fact B: Tourism NT gives the green season as roughly October to April with the build-up October to December.
  - URL: https://northernterritory.com/articles/why-you-should-visit-the-northern-territory-during-summer
  - Quotes: "It’s the local term for the Northern Territory’s wet season, running roughly October to April. It covers the build-up (October–December), the wet proper (January–March) and the country drying out again in April." and "The build-up is the humid, storm-heavy lead-in to the wet season, typically October to December"
- Fact C (conflict): the Darwin camping page gives a different split.
  - URL: https://northernterritory.com/us/en/darwin-and-surrounds/see-and-do/outdoor-activities/camping
  - Quote: "During the Build-up (October to January) and the Wet Season (January to April), you can camp if you’ve got a robust camping set-up and good shelter to withstand the rain and warmer days."
- Dry season: "The dry season in the Top End runs from May to October." (same weather-and-seasons page as Fact A)

### 1.5 Typical rainfall, temperature, humidity (Tourism NT)
- Fact: Top End wet season average 1,570 mm a year, 25C to 33C, humidity can exceed 80%.
  - URL: https://northernterritory.com/plan/weather-and-seasons
  - Quote: "The yearly average is 1,570mm (62″). Temperatures during this period usually range from 25°C to 33°C (77°F to 91°F) and humidity can reach higher than 80%."
- Fact: Darwin January average rainfall 429 mm.
  - Quote (same page): "especially in January with the average rainfall sitting at 429mm (17″)."
- Kimberley (DBCA): "The wet is from November to April and the rain, though it is usually confined to short downpours in the late afternoon or evening, is very heavy and the humidity is high." URL: https://exploreparks.dbca.wa.gov.au/tourism-region/kimberley
- Kakadu temperature by season: Kudjewk "December to March. 24°C – 34°C"; Kunumeleng "Mid-October to late December. 24°C – 37°C". URL: https://kakadu.gov.au/plan/when-come/seasons/
- Kimberley rainfall totals in mm: not published on the official pages read.

### 1.6 What BOM says about this coming season (2026-27)
- Fact: BOM's 20 Oct 2026 Tropical Climate Update notes a developing El Niño and that cyclone risk rises from November.
  - URL: https://www.bom.gov.au/climate/tropical-note/
  - Quotes: "Tropical cyclone risk increases from November to April, the official tropical cyclone season in the Australian region." / "largely influenced by the strong El Niño signal."
  - Also: "Tropical Cyclone Wati ... becoming the first tropical cyclone of the 2026-27 Southern Hemisphere cyclone season, around two weeks ahead of the official season start on 1 November." (this is a Cook Islands system, South Pacific, not Australia; do not cite as an Australian event).
- Fact: A 2026-27 Australian cyclone count outlook: not published on the BOM cyclone season page read (page says "Last updated: October 2025"). Do not claim an outlook exists or was discontinued.
- Last season for context: URL https://www.bom.gov.au/climate/current/season/tropics/summary.shtml Quote: "wet season (October 2025 to April 2026) rainfall was 683.8 mm, which was 44% above the 1961–1990 average of 476.4 mm". Also "There were 11 tropical cyclones in the Australian region from October 2025 to April 2026".

### 1.7 What a cyclone watch/warning means (BOM)
- Fact: Watch = gales expected within 24 to 48 hours. Warning = gales expected within 24 hours or already happening.
- URL: https://www.bom.gov.au/resources/learn-and-explore/tropical-cyclone-knowledge-centre/tropical-cyclone-warning-services
- Quotes: "Tropical Cyclone Watch, updated every 6 hours when gales are expected to start within 24–48 hours" / "Tropical Cyclone Warning every 3 hours when gales are expected within 24 hours or already happening." Gale threshold: "winds at 63 km/h or greater (gale force)".
- Camper impact: BOM's page does not give camper-specific instructions (not published there). See 1.8 and 1.9.

### 1.8 NT: who to follow
- Fact: Tourism NT tells visitors to follow radio/TV advice; light structures such as caravans need tie-down advice.
  - URL: https://northernterritory.com/plan/useful-information/safety-information/cyclones
  - Quotes: "The Northern Territory is prone to tropical cyclones from November to April. Follow advice and instructions broadcast on local radio." / "If you’re in a caravan or other light structure, seek advice about tying-down and securing your van" / "Ensure your accommodation meets cyclone resistant construction codes (is ‘built to code’), or arrange to shelter with friends, family, or in a public shelter"
- Fact: NT Police Fire and Emergency Services lists 132 500 for floods, storms or cyclones, and 000 in an emergency.
  - URL: https://pfes.nt.gov.au/node/42885 (page footer, read 2026-10-21)
  - Quote: "Call 132 500 in floods, storms or cyclones" and "in an emergency always dial 000"
- NT Emergency Service / SecureNT cyclone pages: BLOCKED (securent.nt.gov.au 403). Not published here.

### 1.9 WA: who to follow, camper advice (DFES)
- Fact: DFES says cyclone season in WA is November to April and warnings come through Emergency WA, with three levels.
  - URL: https://www.dfes.wa.gov.au/hazard-information/cyclone
  - Quotes: "November to April is cyclone season in our North West." / "There are now three warning levels which move up and down to reflect the risk to your life or property before, during and after a cyclone." / "Advice: An incident is active. Be aware and keep up to date." / "Watch and Act: There is a possible threat. Take action now to stay safe." / "Emergency Warning: There is a threat to lives and homes. You may be in danger and need to take immediate action."
- Fact (campers): "Travelling and camping in areas that may be impacted by a cyclone is very dangerous." and "If you are planning on camping remotely or in a caravan park during cyclone season, it is your responsibility to stay informed." and "Book accommodation that can withstand a severe cyclone impact (check with your provider) or enquire with the local government if there is an evacuation centre close by."
- Emergency WA site: https://www.emergency.wa.gov.au/ (DFES page tells readers to use it for alerts).

---

## 2. Road closures

### 2.1 NT Road Report: how it works
- Fact: Road conditions are on roadreport.nt.gov.au or by phone 1800 246 199; Tourism NT says some roads close for flooding Nov to Apr and heavy fines may apply.
- URL: https://northernterritory.com/plan/useful-information/safety-information/roads
- Quotes: "During wet season/tropical summer (November to April) some roads may be closed due to flooding. Do not travel on closed roads. Heavy fines may apply." / "Reports on roads are available at www.roadreport.nt.gov.au or by phone on 1800 246 199."
- Site exists: https://roadreport.nt.gov.au (title "Road Report NT"; the map is a JavaScript app, content not readable by text fetch).
- SEARCH EXTRACT (nt.gov.au blocked, must re-verify): the NT Department of Logistics and Infrastructure notice (https://dli.nt.gov.au/news/2026/dont-make-your-road-trip-memorable-for-the-wrong-reasons) was reported to say "Weekend reporting is provided during the wet season or other significant weather events as needed." and that Road Report NT is available by app, website, Facebook (RoadReportNT) or 1800 246 199. Not read directly.
- "Road Report NT map" layer detail (colours, symbols): not published in anything I could read.

### 2.2 Flood depth rules on Kakadu roads (Parks Australia)
- Fact: Kakadu rangers report water depth to the NT Government, which decides on restrictions; impassable at 0.3 to 0.5 m, closed at 0.5 m.
- URL: https://kakadu.gov.au/static/7f4ff6e4c41858bc1f841ce7e59edb33/KNP---Opening-plan-March-2023_FA.pdf (the "Park Opening Plan" PDF linked from https://kakadu.gov.au/news/access-and-alerts/; document dated March 2023, treat as guidance not a 2026 notice)
- Quotes: "Always look up the Kakadu Access Report and the Road Report NT to check conditions prior to travelling" / "Roads will generally be deemed impassable at depths of 0.3m to 0.5 m and road closures will be in place at 0.5 m." / "Remember: If it’s flooded, forget it!"

### 2.3 Kakadu Highway, Arnhem Highway, Old Jim Jim Road, Cahills Crossing, Oenpelli Road (live, 19 Oct 2026)
- URL: https://kakadu.gov.au/news/access-and-alerts/ ("This Access Report was last updated on 19 Oct 2026, 3:41 pm (Darwin local time).")
- Arnhem Highway: Open. Kakadu Highway: Open. Old Jim Jim Road: "4WD access only" and "Maximum GVM 4.5 Tonne, Light Vehicles Only."
- Cahills Crossing: "Open with risks" and "Water remains over the crossing and levels may change rapidly. Check access conditions before travelling and exercise caution at all times. Please monitor the Road Report NT for the latest updates."
- Oenpelli Road (at Magela Creek): "Motorists are advised to take care and drive to conditions."
- Typical wet-season pattern for Highways flooding: not published as dates. The Park Opening Plan says "Wet season flooding affects many of Kakadu’s roads."
- Ubirr and Oenpelli Road in the wet (2023 plan table): "Closed to the public whenever Oenpelli Road is impassable at Magela Creek." Ubirr usual hours "1 Dec – 31 Mar 2.30 pm – sunset" and "1 Apr – 30 Nov 8.30 am - sunset". Check the live report before quoting hours.

### 2.4 Jim Jim Falls road, Gunlom, Yellow Water
- Jim Jim and Twin Falls: URL https://kakadu.gov.au/news/jim-jim-and-twin-falls-area-remain-closed-2026/ (Monday 1 June 2026). Quotes: "Parks Australia advises that the Jim Jim and Twin Falls area will remain closed in 2026 while critical road and infrastructure upgrades are delivered." / "Road and infrastructure upgrade works are scheduled to commence in June 2026 and are expected to be completed by December 2026, ahead of the area reopening for the 2027 dry season." The closure includes "Jim Jim Falls, Twin Falls gorge and escarpment walk, and Karnamarr campground". Exact 2027 reopening date: not published.
- Gunlom (live 19 Oct 2026): URL https://kakadu.gov.au/things-do/activities/waterfalls/gunlom-falls/ Quote: "Access to Gunlom Road is for high clearance 4WD vehicles only. There is strictly no access or swimming in the bottom Gunlom plunge pool." Park Opening Plan 2023 table: Gunlom "Early-mid May" opens, closes "Mid-late December" (indicative, 15 years of data, "indicative only"). 2026-27 closing date: not published.
- Yellow Water (live): "Yellow Water (Ngurrungurrudjba) Boat Cruise ... Open ... Boat cruise typically operates all year-round. Please contact reservations@yellowwater.com.au for tour bookings and departure times". Region page: "Yellow Water boat cruises operate throughout the year." URL https://kakadu.gov.au/discover/regions/yellow-water-ngurrungurrudjba/
- Sites open all year (Kakadu list): "Bowali track, Burrungkuy (Nourlangie), Home Billabong, Kubara pools walk, Mardukal Billabong, Mirray (Mirrai) walk, Nanguluwurr art site, Nawurlandja lookout, Yellow Water (Ngurrungurrudjba) cruise, Yurmikmik walks" with the caveat "They can still be impacted by weather and other events". URL https://kakadu.gov.au/news/access-and-alerts/

### 2.5 Gibb River Road (Main Roads WA)
- Fact: Main Roads WA (not the Shire) manages the road. It is "often closed during the wet season, which generally runs from December to April", reopens after flood repairs, and typically is open May to November.
- URL: https://www.mainroads.wa.gov.au/travel-information/driving-in-wa/gibb-river-road/
- Quotes: "Gibb River Road is often closed during the wet season, which generally runs from December to April as river crossings become impassable or sections of road have been damaged and may be dangerous. Following the wet season and once river crossings are low enough to allow access, work kicks off to repair any flood damage and the road is reopened - but only when it is safe to do so!" / "Gibb River Road is typically open during dry season from May to November" / "Our Travel Map and status boards located at both ends of the road near Derby and Kununurra provides up to date information on the road status"
- Fact: Australia's North West says opening and closing varies each year. URL https://www.australiasnorthwest.com/explore/kimberley/gibb-river-road/ Quote: "The Gibb River Road is generally accessible during the Kimberley dry season, typically between May and October, however opening and closing times vary each year depending on weather and road conditions."
- Official closure/reopen dates for 2026-27: not published (and not published for past years either; Main Roads says "reopened - but only when it is safe").
- The Shire of Derby/West Kimberley road report (1 Oct 2026, 0830) says: "GREAT NORTHERN HIGHWAY / DERBY HIGHWAY AND THE GIBB RIVER ROAD, These are MAIN ROADS WESTERN AUSTRALIA (MRWA) controlled roads" and gives phone "138 138". URL https://mailchi.mp/79cf9e2dc484/vxbqh7c8pk-10353696 (archive list: https://www.sdwk.wa.gov.au/services/roads/road-conditions.aspx). The same report lists "Silent Grove Road ... Open - Will Close on the 15/10" and "Dalmanyi (Silent Grove-Bell Gorge) National Park Access Road ... Open - Will Close on the 15/10" (2026 pre-wet closure, dated 15 Oct).
- Main Roads is working to shorten the closure: URL https://www.mainroads.wa.gov.au/globalassets/community-environment/environment/clearing-intext/2025/kimberley/1904-five-mile-creek-and-pentecost-river-clearing-report.pdf Quote: "Main Roads is looking to reduce the period of which the Gibb River Road is closed throughout the wet season each year, which includes upgrades to existing low floodway crossings at Five Mile Creek, and the Pentecost River Crossing." Not a promise for 2026-27.

### 2.6 Great Northern Highway, Fitzroy Crossing, Willare
- Fact: Ex-TC Ellie flooding (Dec 2022 to Jan 2023) damaged the Great Northern Highway at Willare and Fitzroy Crossing; a new Fitzroy River Bridge opened 10 December 2023.
- URL: https://www.mainroads.wa.gov.au/projects-initiatives/all-projects/regional/new-fitzroy-river-bridge/
- Quotes: "Flooding generated by Ex-Tropical Cyclone Ellie in December 2022 and January 2023 caused significant damage to the sections of Great Northern Highway at Willare Crossing and Fitzroy Crossing in the Kimberley." / "The New Fitzroy River Bridge over the Martuwarra River at Fitzroy Crossing will officially opened to traffic on Sunday 10 December"
- Whether the Great Northern Highway closes in a typical wet season (dates): not published.

### 2.7 Main Roads WA live conditions
- URL: https://www.mainroads.wa.gov.au/travelmap/ and https://www.mainroads.wa.gov.au/travel-information/driving-in-wa/roadworks-closures/
- Quote: "Our Travel Map contains live, up-to-date information on road closures, road conditions and incidents that may affect your travels in WA." Alerts include "closures or changes due to flooding". Phone 138 138 is given by the Shire report above.
- Closing roads: Shire of Wyndham East Kimberley (Kalumburu, Mitchell Plateau, Drysdale access roads): URL https://www.swek.wa.gov.au/road-conditions.aspx Quote: "Towing of trailers or caravans on unsealed roads over the Wet Season is not recommended." Also "Closed Road Usage Permits" exist. Shire phone 08 9168 4100 (from the same pages).
- Mitchell Plateau / Kalumburu Road closure dates: not published. DBCA's Mitchell River NP page (https://exploreparks.dbca.wa.gov.au/park/mitchell-river-national-park) gives no season dates; it says "You’ll need a fully equipped four-wheel drive (4WD) vehicle" and no public internet/phone on Wunambal Gaambera Country.

### 2.8 WA parks: Purnululu, Windjana, Tunnel Creek, Geikie, Karijini (DBCA)
- Purnululu: URL https://exploreparks.dbca.wa.gov.au/park/purnululu-national-park Quotes: "Seasonal closures: due to wet season, the park closes generally between November to April. Check Park Alerts before you go." / "Purnululu National Park is generally open from April/May until late November – weather permitting." Exact 2026-27 closure date: not published.
- Windjana Gorge (Bandilngan): URL https://exploreparks.dbca.wa.gov.au/park/bandilngan-windjana-gorge-national-park Quote: "The park is open in the dry season between May and November. During the wet season the park is closed as roads are inaccessible."
- Tunnel Creek (Dimalurru): URL https://exploreparks.dbca.wa.gov.au/park/dimalurru-tunnel-creek-national-park Quote: "roads are often closed from November to April due to the wet season. The park is open to the public from the end of wet season, depending on weather and road conditions."
- Geikie Gorge (Danggu): URL https://exploreparks.dbca.wa.gov.au/park/danggu-geikie-gorge-national-park Seasonal dates: not published. The page says only "the park is currently open with limited facilities (carpark and toilets)" after the 2022-23 floods.
- Kimberley overview: URL https://exploreparks.dbca.wa.gov.au/tourism-region/kimberley Quote: "Some parks, and the Gibb River Road, are closed throughout the wet season and many tours and other services are not available." and "temporary closure of roads and parks is sometimes necessary."
- Live alerts: https://alerts.dbca.wa.gov.au/ ("Park Road Closures", "Crocodile Alerts", "Park Closures"; the content loads by script).
- Karijini: URL https://exploreparks.dbca.wa.gov.au/park/karijini-national-park Quotes: "Flash floods can occur – do not enter gorges if there is rain in the area." / "During summer, temperatures frequently top 40°C." A wet-season closure rule: not published.

---

## 3. Kakadu, Litchfield, Nitmiluk

### 3.1 The six Kakadu seasons (Parks Australia), with the official spellings
URL: https://kakadu.gov.au/plan/when-come/seasons/
- Quote (intro): "You’re probably familiar with northern Australia’s two seasons: the dry season (April to October) and the wet tropical summer (November to March)." and "Some areas of the park are closed by flooding during the tropical summer."
- Kunumeleng, pre-monsoon storm season: "Mid-October to late December. 24°C – 37°C" and "It can last from a few weeks to several months."
- Kudjewk, monsoon season: "December to March. 24°C – 34°C" and "This is the true tropical summer – thunderstorms, heavy rain and flooding."
- Bangkerreng, 'Knock 'em down' storm season: "April. 23°C – 34°C"
- Yekke, cooler but still humid: "May to mid-June. 21°C – 33°C"
- Wurrkeng, cold weather: "Mid-June to mid-August. 17°C – 32°C"
- Kurrung, hot dry: "Mid-August to mid-October. 23°C – 37°C"
- Conflict inside Parks Australia: the 2023 Park Opening Plan says "KUNUMELENG (BUILD-UP SEASON, OCTOBER TO DECEMBER), KUDJEWK (MONSOON SEASON, JANUARY TO MARCH) AND BANGKERRENG (KNOCK ‘EM DOWN STORMS, MARCH TO APRIL)". Use the web page months (Dec to Mar for Kudjewk) as the current ones.

### 3.2 When to visit and the wet season in Kakadu
- URL: https://kakadu.gov.au/plan/when-to-come/
- Quotes: "Tropical summer (November to April)" / "The tropical summer brings vivid green landscapes, spectacular flooding, electrifying afternoon storms and the chance to explore with fewer visitors. Flooding closes a number of attractions, but popular areas such as Burrungkuy (Nourlangie) and Yellow Water are open all year round." / "Dry Season (May to October) This is the most popular time to visit, with most of our visitor sites open."
- Waterfalls: URL https://kakadu.gov.au/discover/regions/jim-jim-twin-falls/ Quote: "The waterfall flows from the start of the tropical summer until mid-July." and "best seen by air during the tropical summer".
- Park Opening Plan sentence: "During an average wet season many of the visitor sites in low-lying areas and the waterfall regions of the stone country become inaccessible due to flooding, with access roads, campgrounds, amenities blocks and pit toilets, walking tracks, shelters and picnic tables going under water."

### 3.3 Open and closed in Kakadu right now (live report, 19 Oct 2026, 3:41 pm Darwin time)
URL: https://kakadu.gov.au/news/access-and-alerts/ (phone for current info: "(08) 8938 1120", Bowali Visitor Centre)
- Open: Burrungkuy (Nourlangie) rock art site ("Gates open at 7am and close at 7pm daily."), Nawurlandja lookout walk, Anbangbang Billabong walk, Ubirr rock art site, Bowali Visitor Centre ("Open 9 am - 5 pm"), Warradjan Aboriginal Cultural Centre, Yellow Water billabong and boat cruise.
- Campgrounds open: Djarradjin (Muirella Park), Sandy Billabong (Djirrilba), Merl, Burdulba, Malabanjbanjdju (caravan and tent), Gungurul, Jim Jim Billabong (Djim Djim Anlabbarl), Mardukal one (caravans) and two (tents). "Open with risks": Kambolgie ("4WD high-clearance vehicle access only."). Closed: Karnamarr.
- Closed: Jim Jim Falls, Twin Falls gorge and plateau walk, Barrk Marlam walk, Budjmi lookout, Barrk sandstone walk ("Closed at the request of Traditional Owners"), Badbong Wodjmeng walk, Manngarre rainforest walk, Two Mile Hole Billabong ("will not be accessible this year due to roadworks"), Waldak Irrmbal ("Closed until further notice due to road inaccessibility"), Maguk ("Currently closed due to a crocodile sighting.").
- This is a point-in-time snapshot. The guide should link to the live report, not repeat it as current.
- Cooinda and Jabiru: Cooinda Lodge, Aurora Kakadu Lodge, Kakadu Lodge, Anbinik and the Crocodile Hotel are listed as "Hotels & cabins/Camping" on the site; wet-season operating status for these businesses: not published on the Parks Australia pages. Jabiru: "operate from the town all year round" refers to scenic flights and tours.
- Merl campground: "Merl campground (seasonal access)" with "Fees are collected on site." URL https://kakadu.gov.au/discover/regions/east-alligator-erre/ Also "The Bardedjilidji walk ... may be closed during the tropical summer."

### 3.4 Kakadu park pass (still needed)
- Fact: Yes. A pass is valid 7 days; wet-season rates apply 1 Nov to 14 May; free for NT residents.
- URL: https://kakadu.gov.au/plan/passes/
- Quotes: "You’ll need a park pass to experience Kakadu’s World Heritage wonders." / "Park passes can be purchased online and are valid for 7 days." / "Tropical Summer (1 November - 14 May)": Adult "$25 per pass", Child "$12.50 per pass", Family "$65 per pass", Concession "$19 per pass". Dry season (15 May - 31 October): "$40 per pass" adult. / "Park passes are free for Northern Territory residents."
- Page oddity: the page also says "park passes purchased to visit the park between 1 July to 31 October 2026 will be charged at wet season rates" with "$25 (usually $40)". Expect this promotion to end after 31 Oct 2026; check before publishing.

### 3.5 Kakadu crocodile and swimming safety
- URL: https://kakadu.gov.au/plan/plan-your-trip/staying-safe/
- Quotes: "Crocodiles usually hunt by staying submerged and can attack in knee-deep water, so even wading can be dangerous." / "Some of the waterways are susceptible to flash flooding and rapid currents" / "The safest place to swim in Kakadu is in a public or hotel pool, and you should never swim alone." / "Bringing a boat? Saltwater crocodiles can attack people in boats - the smaller the boat the greater the risk."
- Wet season specific (2023 Park Opening Plan): "Saltwater crocodiles move around, especially during the wet season, and regularly find their way into creeks and plunge pools along the Arnhem Land escarpment." and "we do not recommend swimming in any of Kakadu’s waterways."
- Count: "There are about 10,000 crocodiles in Kakadu" (https://kakadu.gov.au/things-do/activities/croc-spotting/).

### 3.6 Litchfield National Park
- Wangi Falls: URL https://northernterritory.com/darwin-and-surrounds/see-and-do/wangi-falls Quote: "Swimming is not permitted during the wet season, typically from October to March, due to strong currents and the potential presence of saltwater crocodiles. During this time, the powerful falls offer spectacular views and photography opportunities. Camping and picnic facilities remain open all year."
- Florence Falls: URL https://northernterritory.com/darwin-and-surrounds/see-and-do/florence-falls Quote: "The falls flow year-round but are most spectacular during the wet season and early dry season." Swimming conflict: URL https://northernterritory.com/things-to-do/outdoor-activities/swimming says "Florence Falls is open year-round, with Buley Rockhole open most of the year." but the same page warns "it’s not advised to swim in the wet season between November and April" and "Many natural waterholes in the Top End are closed during the wet season when it’s unsafe for swimming." Treat swimming as closed/at-risk in the wet and link to the live NT Parks page.
- Camping: URL https://northernterritory.com/darwin-and-surrounds/destinations/litchfield-national-park/camping-in-litchfield-national-park Quotes: Wangi "open year-round" campground; Florence Falls 2WD "Campground is available year-round"; Florence Falls 4WD "available most of the year"; Walker Creek Campground (8 walk-in creek-side sites) "are open only during the dry season and cannot be booked in advance"; "Camping during the wet season isn’t recommended unless you have equipment that can withstand the rain". Fees quoted: "from $15 per adult and $8 per child (up to 15 years)".
- 2026 news: "Wangi Falls reopens early as new café, Tabletop Track elevate Litchfield experience" (NT Government media release, 2026-06-01). URL https://territorystories.nt.gov.au/10070/1038351/0 (metadata only read; body not read).
- SEARCH EXTRACT, NT Parks swimming sheet (nt.gov.au PDF blocked): "with heavy monsoonal rains (Oct - April), many of these sites are closed due to inaccessible roads, the risk of flash flooding and the possibility of Saltwater (Estuarine) Crocodiles entering the areas" and surveys happen "after the wet season". URL https://nt.gov.au/__data/assets/pdf_file/0017/200078/litchfield-national-park-swimming-information-sheet.pdf (not read directly; re-verify). The NT Parks live "Check if a park is open: Darwin region" page is also blocked.
- Specific 2026-27 Litchfield wet-season closure dates: not published in anything I could read.

### 3.7 Nitmiluk (Katherine Gorge)
- URL: https://northernterritory.com/katherine-and-surrounds/see-and-do/nitmiluk-national-park
- Quotes: "You can visit Nitmiluk Gorge all year-round. The weather between May to October is warm and dry, making it the perfect time for long hikes, canoeing or exploring the region. November to April sees the arrival of the tropical rain, and when the water level rises, jet boats operate cruises on the gorge." and "Leliyn (Edith Falls) is known for its picturesque waterfalls and excellent swimming, with refreshing water available year-round."
- Operator site (https://www.nitmiluktours.com.au/): "Nitmiluk is a year-round destination". Wet-season walk or campground closure dates: not published.

---

## 4. What stays open

- Kakadu (live): see 3.3. Official line: "Burrungkuy (Nourlangie) and Yellow Water are open all year round" and "Yellow Water boat cruises operate throughout the year". Source https://kakadu.gov.au/plan/when-to-come/
- Kakadu campgrounds are "first-come, first-served"; "the on-site campground manager will collect your camping fees." URL https://kakadu.gov.au/stay/camping-caravans/
- Darwin region, Tourism NT: camping is possible in the wet with "a robust camping set-up and good shelter" (item 1.4 Fact C). Berry Springs: "open most of the year unless there’s been heavy rainfall." URL https://northernterritory.com/things-to-do/outdoor-activities/swimming
- Tourism NT on attractions: "During the Wet, access to some attractions in remote parts of the Top End may be closed due to flooding, but there are still harbour cruises, ferries, and scenic plane and helicopter flights available at any time of year." URL https://northernterritory.com/plan/weather-and-seasons
- Tourism NT on the Wet generally: "Yes – the Top End and Red Centre remain open for travel throughout the wet season, though some 4WD tracks and walking trails can close temporarily after heavy rain" URL https://northernterritory.com/articles/why-you-should-visit-the-northern-territory-during-summer
- Darwin holiday parks operating in the wet: no official body (Tourism NT, NT Government) lists them as a set that I could read. Not published.
- Kimberley: DBCA says "Some parks, and the Gibb River Road, are closed throughout the wet season and many tours and other services are not available." (https://exploreparks.dbca.wa.gov.au/tourism-region/kimberley). Broome, Kununurra, Derby caravan parks and Lake Argyle (commercial site https://www.discoveryholidayparks.com.au/caravan-parks/western-australia/north-west/lake-argyle): no official wet-season opening statement found. Not published.
- WA park camping closures: only Purnululu, Windjana, Tunnel Creek as in 2.8; the DBCA live closure list is script-loaded at https://alerts.dbca.wa.gov.au/ and was not readable.

---

## 5. Safety

### 5.1 Crocodiles
- Tourism NT: URL https://northernterritory.com/plan/useful-information/safety-information/wildlife Quotes: "Fresh and saltwater crocodiles are present in waterways – at beaches, in rivers and estuaries, and in waterholes – across the Northern Territory all year round." / "only ever swim in designated areas – if in doubt, don’t swim, and avoid the water’s edge."
- Tourism NT camping: URL https://northernterritory.com/plan/useful-information/safety-information/camping Quote: "Never camp near the water’s edge, and read maps and signs carefully – especially ‘no swimming’ signs at waterways inhabited by saltwater crocodiles."
- Floods: "Watch out for crocodiles! Don’t enter floodwaters or go near the water’s edge as there is a high risk of saltwater crocodiles." (roads page, item 2.1). NTES: "Any body of water in the Top End may contain large and potentially dangerous crocodiles" (https://pfes.nt.gov.au/node/42885, 30 January 2024 release).
- Be Crocwise 50 m advice: SEARCH EXTRACT only (https://becrocwise.nt.gov.au/crocodiles-and-me is blocked). The extract reported: "Camp at least 50 meters from the water's edge and avoid areas where animals come down to drink." and that NT guidance says if a waterway has no designated swimming sign it is not safe to swim. Re-verify before publishing the 50 m figure, and note the WA DBCA be-crocwise factsheet reportedly adds "at least two metres above the high-water mark" (https://parks.dbca.wa.gov.au/sites/default/files/2021-12/Be-CROCWISE-Factsheet.pdf, not read).
- Official Tourism NT line on swimming in the wet: "it’s not advised to swim in the wet season between November and April". URL https://northernterritory.com/things-to-do/outdoor-activities/swimming

### 5.2 Marine stingers
- Tourism NT (NT): URL https://northernterritory.com/plan/useful-information/safety-information/wildlife Quote: "They’re most prevalent from October to May – don’t swim in the sea during these months – but stings have occurred throughout the year" and "if you’re stung, flood the sting with vinegar and seek urgent medical attention."
- Tourism NT water page: URL https://northernterritory.com/sg/en/plan/useful-information/safety-information/water Quote: "carry vinegar in case of jellyfish stings."
- WA (DBCA Kimberley): URL https://exploreparks.dbca.wa.gov.au/tourism-region/kimberley Quote: "The potentially lethal box jellyfish and irukandji are found along the Kimberley coast. Although they can be present all year round they are most prevalent from November until April. If you do swim, snorkel or dive wear a full-length stinger suit and if you are stung, douse liberally with vinegar and seek urgent medical advice."
- Irukandji NT season detail: SEARCH EXTRACT from nt.gov.au (blocked): stinger season "October 1 to May 31", and an NT Health factsheet reportedly says 1 June instead. Conflict unresolved; use "October to May" from Tourism NT.

### 5.3 Floodwater driving
- NTES (30 Jan 2024): URL https://pfes.nt.gov.au/node/42885 Quote: "Always stay away from flooded drains, rivers, streams and waterways and never to drive into floodwaters. Remember; if it’s flooded, forget it." and "It is highly dangerous for vehicles to attempt to cross flooded roads and causeways." Also "anyone travelling along closed roads can expect to be penalised."
- Same slogan in 23 Dec 2022 release: https://pfes.nt.gov.au/node/41536
- Tourism NT: "If you encounter a flooded road, wait until the water has subsided to less than the wading depth for the vehicle (refer to the owner’s manual) before trying to cross." and "Never attempt to cross fast flowing water, and always expect damage to the road surface underneath the water, even if you can’t see it." URL https://northernterritory.com/plan/useful-information/safety-information/roads
- WA Shire of Derby/West Kimberley: "Do Not Drive into Water of Unknown Depth and Velocity" and "Remember if it is flooded forget" (1 Oct 2026 report, https://mailchi.mp/79cf9e2dc484/vxbqh7c8pk-10353696). Also "driving on a road whilst it is closed compromises safety and will negate any insurances for vehicles".
- WA closed road penalty: Visit Broome (local tourism body, not a government page): "ACCESSING CLOSED ROADS AND / OR INTERFERING WITH ROAD CLOSED SIGNS IS AN OFFENCE. PENALTIES OF UP TO $10,000 APPLY." (https://www.visitbroome.com.au/info/roads).
- Kimberley Shire: "4 x 4 High clearance vehicles are recommended on all gravel roads".

### 5.4 Heat and humidity
- Kakadu: URL https://kakadu.gov.au/plan/plan-your-trip/staying-safe/ Quotes: "Temperatures in the park regularly reach 30°C or more and can exceed 40°C during summer." / "Walk only in the cooler parts of the day, avoiding the hottest period between 2.30 pm and 6.30 pm. In summer we strongly recommend not walking after 11.00 am." / "Carry and drink at least one litre of water per person per hour." / "Do not walk on any tracks that are closed due to the heat."
- Kakadu closes long walks for heat from 1 October (2023 Park Opening Plan table): "1 October, 4.00 pm Unless extreme temperatures or sudden heavy rainfall requires the site to be closed earlier."
- Tourism NT: "In the Northern Territory (NT) you need to drink at least two litres of water a day, or more if you’re outdoors or exercising." (https://northernterritory.com/gb/en/plan/useful-information/safety-information) and "The recommended minimum required amount of water per person is 4-6 litres a day." (roads page).
- Purnululu: "Temperatures can be extreme, exceeding 40°C during the day and radiant heat can increase the temperature to over 50°C." (https://exploreparks.dbca.wa.gov.au/park/purnululu-national-park)

### 5.5 Mosquitoes (Ross River virus, Murray Valley encephalitis)
- WA Health, 24 March 2026: URL https://www.health.wa.gov.au/Media-releases/2026/March/Mosquito-borne-virus-warnings-for-Pilbara-and-Kimberley Quotes: "WA Health’s sentinel chicken and mosquito surveillance programs have detected flavivirus activity, including Murray Valley encephalitis (MVE) virus, in the Pilbara and Kimberley for the first time this wet season." / "For all other mosquito-borne diseases, including MVE, the only way to prevent infection is to avoid being bitten by mosquitoes." / "Wear long, loose-fitting, light-coloured clothing." / "Use mosquito nets and mosquito-proof tents if sleeping outside." / "Apply an effective personal mosquito repellent containing diethyltoluamide (DEET), picaridin or Oil of Lemon Eucalyptus (also known as PMD)". Ross River virus is not named in that release; the WA Health Mosquito-borne diseases page lists it (https://www.health.wa.gov.au/Articles/J_M/Mosquito-borne-diseases).
- NT: Tourism NT wildlife page: "Mosquitoes are most present at dawn and dusk, so cover up with long pants and sleeves, and use a reliable repellent or mosquito coils." and "When camping, keep your tent zipped and tap your shoes out before putting them on." (https://northernterritory.com/plan/useful-information/safety-information/wildlife)
- NT Health Ross River / MVE pages and 2026 alerts: BLOCKED. SEARCH EXTRACT (unverified, source page not identified) claims NT Health widened the MVE risk area to the whole Territory in 2026 and reported two MVE deaths in Alice Springs. Do not publish without a readable source.

### 5.6 Supplies, fuel, communications
- Fuel and supplies (NT): URL https://northernterritory.com/plan/useful-information/safety-information/roads Quotes: "Keep your vehicle filled up. Don’t rely on fuel being available in remote areas" / "Remote service stations have restricted opening hours and limited bank facilities." / "In the event of a breakdown, stay with the vehicle. Help may not be possible for many hours, particularly at night."
- Roadhouse closure risk in the wet (NT or WA): not published on any official page read.
- Gibb River Road fuel: Australia's North West: "Fuel and basic supplies are available at a small number of roadhouses and stations along the Gibb River Road... Travellers are advised to carry jerry cans with extra fuel." URL https://www.australiasnorthwest.com/explore/kimberley/gibb-river-road/
- Remote kit: Tourism NT: "Consider carrying communication equipment such as an EPIRB (Emergency Position Indicating Radio Beacon), or satellite phone" (camping page, item 5.1). DBCA Drysdale River NP: "Consider travelling with a personal location beacon (PLB)." (https://exploreparks.dbca.wa.gov.au/park/drysdale-river-national-park)
- Wet-season trailers: "Towing of trailers or caravans on unsealed roads over the Wet Season is not recommended." (https://www.swek.wa.gov.au/road-conditions.aspx). Shire of Derby: "4 x 4 High clearance vehicles are recommended on all gravel roads".
- Emergency 000: Tourism NT wildlife page "In an emergency, call 000". NT: floods/storms/cyclones "132 500" (item 1.8). WA SES: Australia's North West lists SES emergency assistance for storm, cyclone, flood (number not captured, do not quote).
- Mobile coverage, Kakadu: URL https://kakadu.gov.au/plan/plan-your-trip/staying-safe/ Quote: "You won’t have mobile phone coverage in most of the park." Locations with coverage: https://kakadu.gov.au/plan/plan-your-trip/phone-internet/ "There is now mobile coverage at more of Kakadu’s most iconic locations including: Jabiru, Cooinda, Bowali Visitor Centre, Gunlom campground, Gungurul, Mary River Ranger Station, Northern Information Bay (Arnhem Highway), Burrungkuy (Nourlangie) rock art site, Maguk Campground". Pay phones at Jabiru, Bowali, Cooinda, Manbiyarra.
- Purnululu: "There is INTERMITTENT OPTUS coverage in Purnululu National Park ... There is NO PHONE service driving into or within the park." (https://exploreparks.dbca.wa.gov.au/park/purnululu-national-park)
- Kimberley: "there is no public internet/phone access on Wunambal Gaambera Country" (Mitchell River NP page).

---

## 6. Peak vs wet-season visitor facts

- Tourism NT: "Most travellers visit the Northern Territory mid-year, but locals know the real magic happens from October to April." URL https://northernterritory.com/articles/why-you-should-visit-the-northern-territory-during-summer
- Tourism NT, Darwin camping: "The best time to go camping around Darwin is in the dry season, between May and September" and "Make sure to book ahead if possible as it can get busy at this time of year." URL https://northernterritory.com/us/en/darwin-and-surrounds/see-and-do/outdoor-activities/camping
- 'Green season' is an official Tourism NT term: "What is the NT’s green season? It’s the local term for the Northern Territory’s wet season, running roughly October to April." (same article as above).
- Kakadu: "chance to explore with fewer visitors" (3.2) and lower park pass prices Nov to mid-May (3.4); "It’s wise to book your accommodation in advance, as the hotels get busy at this time of year" refers to the dry season (https://kakadu.gov.au/plan/when-to-come/).
- Tourism NT says many consider the Wet the best time: "Many locals and experienced travellers believe the Wet is the best time to visit because it’s when the land truly comes alive." (https://northernterritory.com/plan/weather-and-seasons). Opinion, label as Tourism NT's marketing view.
- Kimberley: "The dry season from May to October is the peak period for visits to the Kimberley." URL https://exploreparks.dbca.wa.gov.au/tourism-region/kimberley
- Tourism WA wet-season travel tips: not obtained (westernaustralia.com returned no usable text). Australia's North West road page says: "Unsealed roads are more unpredictable and can be open for travel one day and completely flooded the next or even closed for the duration of summer (November to March)." URL https://www.australiasnorthwest.com/plan/important-travel-tips/road-safety/ (note it says November to March, whereas Main Roads says December to April).

---

## Not published (summary list)

- Exact 2026-27 Gibb River Road closing and reopening dates (Main Roads gives only "December to April" and "May to November").
- Exact 2026-27 closing dates for Purnululu, Windjana, Tunnel Creek, Geikie Gorge.
- Karijini wet-season closure statement; Mitchell Plateau/Kalumburu Road closure dates.
- 2027 reopening date for Jim Jim, Twin Falls, Karnamarr (only "2027 dry season", works "expected to be completed by December 2026").
- 2026-27 closing dates for Kakadu sites (Gunlom, Maguk) and Litchfield swimming holes; only the 2023 indicative averages exist.
- BOM 2026-27 Australian cyclone count outlook.
- Kimberley rainfall totals; roadhouse wet-season closure lists; Darwin/Broome/Kununurra/Lake Argyle wet-season operating status from an official source.
- Tourism WA wet-season travel tips page.
- NT Government pages (Be Crocwise 50 m advice, NT Health mosquito alerts, NT stinger season end date, NT Parks swimming sheet, NT Road Report phrasing): blocked, extracts only.
