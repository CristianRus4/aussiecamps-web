# Fact-check: "Wet Season Camping: Top End and Northern WA 2026-27"

Slug: `wet-season-camping-top-end-northern-wa` (lib/expanded-articles.ts, lib/article-faqs.ts).
Checked: 2026-10-21, against the live official pages. Publish date in the file: 2026-11-01.

Method: every source page was fetched with one plain `curl` GET (browser user agent, no retries) and read as text. All pages below returned HTTP 200, including bom.gov.au (the drafter's notes say WebFetch got 403 there; my single curl request got 200, disclosed so it can be judged). No site was worked around. nt.gov.au, securent.nt.gov.au and parks.nt.gov.au were not used.

Verdicts: CONFIRMED, WRONG, OVERSTATED, UNVERIFIED. "Note" marks a confirmed item that still needs a wording or citation tweak.

---

## Summary of items to fix

| # | Where | Verdict | Problem |
|---|---|---|---|
| A | Section 1, para 1, sentence 1 | OVERSTATED | Merges two Tourism NT pages. The cited page (weather-and-seasons) does not say "green season" or "build-up from October to December". The green season article says the green season runs "roughly October to April". |
| B | Section 2, para 2 | OVERSTATED | "The advice from every agency is the same: if it is flooded, forget it." Tourism NT does not use the slogan. NT PFES, Parks Australia (Park Opening Plan) and the Shire of Derby-West Kimberley do. |
| C | Section 2, para 3 | OVERSTATED | 138 138 is Main Roads WA's own 24/7 line, not a Shire number, and the Shire report gives it only for the Great Northern Highway, Derby Highway and Gibb River Road, not "Main Roads-controlled roads in the Kimberley". |
| D | Section 3, para 3; bullet; FAQ 3 | Stale after 31 Dec 2026 | "Closed for all of 2026" reads as reopened from January. Parks Australia expects reopening for the 2027 dry season. FAQ 3 omits the reopening line entirely. |
| E | Section 5, para 2; bullet | OVERSTATED | SWEK says towing on unsealed roads in the Wet "is not recommended", for its own Shire. The bullet turns this into "Do not tow on unsealed Kimberley roads". The SWEK page does not name Mitchell Plateau or Kalumburu. |
| F | Section 7, para 3 (MVE) | OVERSTATED | WA Health says flavivirus activity "including MVE" was detected in the Pilbara and Kimberley. MVE itself was detected in mosquitoes in the Pilbara; the east Kimberley detection was an unidentified flavivirus in sentinel chickens. Also "that wet season" means 2025-26 and should say so. |
| G | Section 7, para 1 (croc swim rule) | Wording drift | Tourism NT: "only ever swim in designated areas – if in doubt, don't swim, and avoid the water's edge." The guide moves "if in doubt" onto the water's edge and drops "don't swim". |
| H | Section 7, para 2 (NT stingers) | Omission | Tourism NT adds "but stings have occurred throughout the year, so it's advisable to take precautions all year round". Without it, the text implies the sea is safe June to September. |
| I | Section 6, para 1 (Karijini) | Implied location | Sentence follows "In the Kimberley", but Karijini is in the Pilbara. |
| J | Section 4, para 1 (Florence Falls) | Minor | Two separate campgrounds: the Florence Falls 2WD campground (year-round) and the Florence Falls 4WD campground (most of the year). |
| K | FAQ 2 "Usually not." | Minor | Main Roads says "often closed". DBCA says closed "throughout the wet season". "Usually not" is supportable via DBCA; better to attribute. |
| L | Sources list | Citation gaps | Several quoted pages are not in `sources` (list at the end). |
| M | Section 8 (AussieCamps) | Not checked | App feature claims; no official source applies. |

No item was found WRONG in the sense of a wrong number, date, fee or phone number. No item was UNVERIFIED.

---

## Line-by-line results

### Intro and metadata
- "The Top End and the Kimberley do not shut for the wet season, but parts of them do": CONFIRMED in substance. Tourism NT: "the Top End and Red Centre remain open for travel throughout the wet season" (northernterritory.com/articles/why-you-should-visit-the-northern-territory-during-summer); DBCA: "Some parks, and the Gibb River Road, are closed throughout the wet season".
- Description "November to April": CONFIRMED (Tourism NT, DBCA, Parks Australia all use it).

### Section 1: When the wet season starts
| Claim | Verdict | Source and quote |
|---|---|---|
| Tourism NT: wet season, "which it also calls the green season", November to April, build-up October to December | OVERSTATED (item A) | https://northernterritory.com/plan/weather-and-seasons: "The wet season, also known as the Top End's tropical summer, stretches from November to April." The phrase "green season" does not appear on this page. https://northernterritory.com/articles/why-you-should-visit-the-northern-territory-during-summer: "It's the local term for the Northern Territory's wet season, running roughly October to April. It covers the build-up (October–December)..." |
| BOM: northern wet season about October to April in far north NT | CONFIRMED | https://www.bom.gov.au/resources/learn-and-explore/climate-knowledge-centre/climate-factors/monsoon: "The northern wet season extends from about October to April in the far north of the Northern Territory." |
| BOM: monsoon normally arrives around Darwin in late December | CONFIRMED | Same page: "The initial monsoon onset – the reversal of the winds – normally happens in late December around Darwin." |
| BOM: build-up is before onset, mostly inactive | CONFIRMED | Same page: "a prolonged inactive phase during the build-up (the period before initial onset)". |
| Cyclone season 1 November to 30 April | CONFIRMED | https://www.bom.gov.au/climate/cyclones/australia/: "The official tropical cyclone season in the Australian region runs from 1 November to 30 April" |
| 25°C to 33°C, humidity can pass 80% | CONFIRMED | weather-and-seasons: "usually range from 25°C to 33°C ... humidity can reach higher than 80%." |
| Darwin averages 429 mm in January | CONFIRMED | weather-and-seasons (Darwin paragraph): "especially in January with the average rainfall sitting at 429mm". |
| DBCA: Kimberley wet November to April, rain "usually confined to short downpours in the late afternoon or evening" but very heavy | CONFIRMED | https://exploreparks.dbca.wa.gov.au/tourism-region/kimberley, verbatim. |
| Kudjewk December to March | CONFIRMED | https://kakadu.gov.au/plan/when-come/seasons/ |
| Bullets | CONFIRMED | Build-up from October (BOM, Tourism NT), monsoon late December (BOM), cyclone dates (BOM), afternoon rain (DBCA, Tourism NT "afternoon rains usually come"). |

Table "six Kakadu seasons" (all CONFIRMED against https://kakadu.gov.au/plan/when-come/seasons/):
- Kunumeleng: "Mid-October to late December. 24°C – 37°C", "Pre-monsoon storm season". CONFIRMED.
- Kudjewk: "December to March", "thunderstorms, heavy rain and flooding". CONFIRMED.
- Bangkerreng: "April", "'Knock 'em down' storm season". CONFIRMED.
- Yekke: "May to mid-June", "Cooler (but still humid) season". CONFIRMED.
- Wurrkeng: "Mid-June to mid-August", "Cold weather season". CONFIRMED.
- Kurrung: "Mid-August to mid-October", "Hot dry weather". CONFIRMED.
- Note: the same page's intro says "the wet tropical summer (November to March)", while kakadu.gov.au/plan/when-to-come/ says "Tropical summer (November to April)". The guide uses the latter; fine.

### Section 2: Roads and floods
| Claim | Verdict | Source and quote |
|---|---|---|
| Road Report NT at roadreport.nt.gov.au or 1800 246 199 | CONFIRMED | https://northernterritory.com/plan/useful-information/safety-information/roads: "www.roadreport.nt.gov.au or by phone on 1800 246 199" and "Telephone: 1800 246 199". roadreport.nt.gov.au resolves, page title "Road Report NT". (nt.gov.au itself not used.) |
| Tourism NT: some roads may close by flooding Nov to Apr; must not travel on closed roads; heavy fines may apply | CONFIRMED | Same page: "During wet season/tropical summer (November to April) some roads may be closed due to flooding. Do not travel on closed roads. Heavy fines may apply." |
| PFES: anyone driving on closed roads can expect to be penalised | CONFIRMED, with context | https://pfes.nt.gov.au/node/42885 (30 January 2024 release about Timber Creek flooding): "anyone travelling along closed roads can expect to be penalised." It is a statement in one 2024 flood release, not a standing policy page. Acceptable as worded ("warn"). |
| "The advice from every agency is the same: if it is flooded, forget it." | OVERSTATED (item B) | Slogan appears at PFES ("Remember; if it's flooded, forget it."), Parks Australia Park Opening Plan PDF ("If it's flooded, forget it!") and the Shire of Derby-West Kimberley report ("Remember if it is flooded forget"). Not on the Tourism NT roads page; not on Main Roads WA or DBCA pages read. |
| Tourism NT: wait until water is below wading depth in the owner's manual | CONFIRMED | Roads page: "wait until the water has subsided to less than the wading depth for the vehicle (refer to the owner's manual) before trying to cross." |
| Never cross fast-flowing water, "because" the road surface may be damaged unseen | CONFIRMED (wording note) | Roads page: "Never attempt to cross fast flowing water, and always expect damage to the road surface underneath the water, even if you can't see it." Two separate instructions; the guide joins them with "because". Optional fix: "never cross fast-flowing water, and always expect the road surface under the water to be damaged, even where you cannot see it." |
| Main Roads WA live Travel Map at mainroads.wa.gov.au/travelmap showing closures and flooding | CONFIRMED | https://www.mainroads.wa.gov.au/travel-information/driving-in-wa/roadworks-closures/: Travel Map "contains live, up-to-date information on road closures, road conditions and incidents"; https://www.mainroads.wa.gov.au/travelmap/: alerts include "closures or changes due to flooding". |
| "the Shire of Derby-West Kimberley lists 138 138 for Main Roads-controlled roads in the Kimberley" | OVERSTATED (item C) | Owner of the number: Main Roads WA. https://www.mainroads.wa.gov.au/ (contact block): "Our team is available 24/7 to help you with any questions you may have or information you may need regarding our road network. You can contact us on 138 138". The Shire report (1 October 2026, https://mailchi.mp/79cf9e2dc484/vxbqh7c8pk-10353696) gives "telephone 138 138" only for "GREAT NORTHERN HIGHWAY / DERBY HIGHWAY AND THE GIBB RIVER ROAD, These are MAIN ROADS WESTERN AUSTRALIA (MRWA) controlled roads". |
| Bullets | CONFIRMED | |

### Section 3: Kakadu
| Claim | Verdict | Source and quote |
|---|---|---|
| Tropical summer (November to April): vivid green, flooding, afternoon storms, fewer visitors; flooding closes a number of attractions; Burrungkuy (Nourlangie) and Yellow Water open all year round | CONFIRMED | https://kakadu.gov.au/plan/when-to-come/: "The tropical summer brings vivid green landscapes, spectacular flooding, electrifying afternoon storms and the chance to explore with fewer visitors. Flooding closes a number of attractions, but popular areas such as Burrungkuy (Nourlangie) and Yellow Water are open all year round." Not in the sources list (item L). |
| Yellow Water boat cruise typically runs all year | CONFIRMED | https://kakadu.gov.au/news/access-and-alerts/: "Boat cruise typically operates all year-round." |
| Kakadu Access Report lists roads, walks, campgrounds as open / open with risks / closed with a time stamp | CONFIRMED | Access page legend "Open / Open with risks / Closed"; "This Access Report was last updated on 19 Oct 2026, 3:41 pm (Darwin local time)"; "provides daily updates on the status of key visitor sites". |
| Waterfalls such as Jim Jim and Twin Falls flow from the start of the tropical summer; best seen by air then | CONFIRMED | https://kakadu.gov.au/discover/regions/jim-jim-twin-falls/: Jim Jim "The waterfall flows from the start of the tropical summer until mid-July"; "These spectacular waterfalls are best seen by air during the tropical summer". Not in sources list (item L). |
| Jim Jim Falls, Twin Falls gorge and escarpment walk, Karnamarr campground closed "for all of 2026" for road and infrastructure upgrades; expected to reopen for the 2027 dry season | CONFIRMED now; goes stale (item D) | https://kakadu.gov.au/news/jim-jim-and-twin-falls-area-remain-closed-2026/ (1 June 2026): "will remain closed in 2026 while critical road and infrastructure upgrades are delivered"; "The closure includes all sites in the area including Jim Jim Falls, Twin Falls gorge and escarpment walk, and Karnamarr campground"; "expected to be completed by December 2026, ahead of the area reopening for the 2027 dry season." Also notes Traditional Owners "requested that the area remain closed until all road upgrade projects are completed". Access report: "Jim Jim Falls will be closed for 2026", "Karnamarr campground will be closed for 2026". The closure in practice runs into 2027 until the dry-season reopening, so "for all of 2026" will read wrongly to anyone visiting January to April 2027. |
| Pass: tropical summer rate 1 November to 14 May; adult $25 vs $40 dry season; valid 7 days | CONFIRMED | https://kakadu.gov.au/plan/passes/: "(1 November - 14 May)" "$25 per pass"; "(15 May - 31 October)" "$40 per pass"; "Park passes are valid for 7 days." The page's promotion ("park passes purchased to visit the park between 1 July to 31 October 2026 will be charged at wet season rates") expires on 31 October 2026 and does not affect the guide. Optional: add "Park passes are free for Northern Territory residents." |
| No mobile coverage in most of the park | CONFIRMED | https://kakadu.gov.au/plan/plan-your-trip/staying-safe/: "You won't have mobile phone coverage in most of the park." |
| Bullets | CONFIRMED (bullet 2 needs item D fix) | |

### Section 4: Litchfield and Nitmiluk
| Claim | Verdict | Source and quote |
|---|---|---|
| Wangi Falls: swimming not permitted during the wet, typically October to March, strong currents and possible saltwater crocodiles; camping and picnic facilities open all year | CONFIRMED | https://northernterritory.com/darwin-and-surrounds/see-and-do/wangi-falls: "Swimming is not permitted during the wet season, typically from October to March, due to strong currents and the potential presence of saltwater crocodiles... Camping and picnic facilities remain open all year." |
| Walker Creek walk-in sites open only in the dry season and cannot be booked in advance | CONFIRMED | Litchfield camping page: "are open only during the dry season and cannot be booked in advance." |
| Florence Falls campground available year-round for 2WD and most of the year for 4WD | CONFIRMED, wording (item J) | Litchfield camping page: "Florence Falls 2WD Campground ... is available year-round"; "Florence Falls 4WD Campground ... is available most of the year". These are two campgrounds. |
| Camping in the wet possible with robust set-up and good shelter | CONFIRMED | https://northernterritory.com/us/en/darwin-and-surrounds/see-and-do/outdoor-activities/camping: "During the Build-up (October to January) and the Wet Season (January to April), you can camp if you've got a robust camping set-up and good shelter". Not in sources list (item L). |
| Litchfield camping in the wet not recommended unless equipment can withstand the rain | CONFIRMED | Litchfield camping page: "Camping during the wet season isn't recommended unless you have equipment that can withstand the rain". |
| Many natural waterholes in the Top End closed to swimming in the wet because unsafe | CONFIRMED | https://northernterritory.com/things-to-do/outdoor-activities/swimming: "Many natural waterholes in the Top End are closed during the wet season when it's unsafe for swimming." Not in sources list (item L). |
| Nitmiluk Gorge all year; Nov to Apr tropical rain; jet boats when water rises | CONFIRMED | https://northernterritory.com/katherine-and-surrounds/see-and-do/nitmiluk-national-park, verbatim. Not in sources list (item L). |
| Bullet "Check NT Parks for the day's closures" | Note | Reasonable advice, but parks.nt.gov.au does not resolve and nt.gov.au blocks fetches, so no NT Parks URL is cited. Consider "Check the NT Parks alerts on nt.gov.au" only if the team can confirm the URL manually. |

### Section 5: Gibb River Road and Kimberley parks
| Claim | Verdict | Source and quote |
|---|---|---|
| Main Roads WA manages the Gibb River Road | CONFIRMED | Shire of Derby-West Kimberley report: "These are MAIN ROADS WESTERN AUSTRALIA (MRWA) controlled roads"; Main Roads Gibb page. |
| Often closed in the wet, which generally runs December to April, as crossings become impassable or sections damaged; repaired after the wet; reopened only when safe; typically open May to November | CONFIRMED | https://www.mainroads.wa.gov.au/travel-information/driving-in-wa/gibb-river-road/: "Gibb River Road is often closed during the wet season, which generally runs from December to April as river crossings become impassable or sections of road have been damaged and may be dangerous. Following the wet season and once river crossings are low enough to allow access, work kicks off to repair any flood damage and the road is reopened - but only when it is safe to do so!"; "typically open during dry season from May to November". |
| No agency publishes fixed 2026-27 closing or reopening date | CONFIRMED (none found) | |
| Status boards at both ends near Derby and Kununurra, and the Travel Map | CONFIRMED | Gibb page: "Travel Map and status boards located at both ends of the road near Derby and Kununurra". |
| SWEK: towing trailers or caravans on unsealed roads over the wet season is not recommended; "such as those to Mitchell Plateau and Kalumburu" | Quote CONFIRMED; examples not on page (item E) | https://www.swek.wa.gov.au/road-conditions.aspx: "Towing of trailers or caravans on unsealed roads over the Wet Season is not recommended." Mitchell Plateau and Kalumburu are not named on the page I read. |
| Bullet "Do not tow on unsealed Kimberley roads in the wet" | OVERSTATED (item E) | Source says "not recommended", for one Shire. |
| Bullet "Gibb River Road: reopens only when safe" | CONFIRMED | |

Table (all CONFIRMED):
- Gibb River Road: Main Roads, as above.
- Purnululu: https://exploreparks.dbca.wa.gov.au/park/purnululu-national-park: "Seasonal closures: due to wet season, the park closes generally between November to April."
- Windjana Gorge: https://exploreparks.dbca.wa.gov.au/park/bandilngan-windjana-gorge-national-park: "The park is open in the dry season between May and November. During the wet season the park is closed as roads are inaccessible." (not in sources list)
- Tunnel Creek: https://exploreparks.dbca.wa.gov.au/park/dimalurru-tunnel-creek-national-park: "roads are often closed from November to April due to the wet season." (not in sources list)
- Kimberley generally: DBCA Kimberley: "Some parks, and the Gibb River Road, are closed throughout the wet season and many tours and other services are not available."
- Note: the DBCA Kimberley line ("closed throughout the wet season") is stronger than Main Roads ("often closed"). The guide quotes each correctly; FAQ 2 should attribute (item K).

### Section 6: Cyclones
| Claim | Verdict | Source and quote |
|---|---|---|
| Watch: gales expected within 24 to 48 hours; Warning: within 24 hours or already happening | CONFIRMED | https://www.bom.gov.au/resources/learn-and-explore/tropical-cyclone-knowledge-centre/tropical-cyclone-warning-services, verbatim. |
| Gales are winds of 63 km/h or more | CONFIRMED | Same page: "winds at 63 km/h or greater (gale force)". |
| Tourism NT: follow advice on local radio; seek advice about tying down a caravan or light structure; accommodation built to code or public shelter | CONFIRMED | https://northernterritory.com/plan/useful-information/safety-information/cyclones: "Follow advice and instructions broadcast on local radio."; "If you're in a caravan or other light structure, seek advice about tying-down and securing your van"; "Ensure your accommodation meets cyclone resistant construction codes (is 'built to code'), or arrange to shelter with friends, family, or in a public shelter". |
| PFES 132 500 for floods, storms and cyclones; 000 in an emergency | CONFIRMED | https://pfes.nt.gov.au/node/42885 footer: "Call 132 500", "in an emergency always dial 000". Not in sources list (item L). |
| DFES three levels on Emergency WA: Advice, Watch and Act, Emergency Warning | CONFIRMED | https://www.dfes.wa.gov.au/hazard-information/cyclone |
| DFES: camping in cyclone-affected areas very dangerous; your responsibility to stay informed; book accommodation that can withstand a severe cyclone or ask local government about nearest evacuation centre | CONFIRMED | Same page: "Travelling and camping in areas that may be impacted by a cyclone is very dangerous."; "If you are planning on camping remotely or in a caravan park during cyclone season, it is your responsibility to stay informed."; "Book accommodation that can withstand a severe cyclone impact (check with your provider) or enquire with the local government if there is an evacuation centre close by." (DFES says "if there is an evacuation centre close by", not "the nearest"; trivial.) |
| FAQ 4 | CONFIRMED | |

### Section 7: Crocodiles, stingers, mosquitoes
| Claim | Verdict | Source and quote |
|---|---|---|
| Fresh and saltwater crocodiles in NT waterways all year | CONFIRMED | https://northernterritory.com/plan/useful-information/safety-information/wildlife |
| "only swim in designated areas and avoid the water's edge if in doubt" | Wording drift (item G) | Same page: "only ever swim in designated areas – if in doubt, don't swim, and avoid the water's edge." |
| Never camp near the water's edge | CONFIRMED | https://northernterritory.com/plan/useful-information/safety-information/camping: "Never camp near the water's edge". Not in sources list (item L). |
| In floods stay out of floodwater and away from the water's edge, high risk of saltwater crocodiles | CONFIRMED | Roads page: "Don't enter floodwaters or go near the water's edge as there is a high risk of saltwater crocodiles." |
| Parks Australia: attack in knee-deep water; safest swim is a public or hotel pool | CONFIRMED | Kakadu staying-safe page, verbatim. Not in sources list (item L). |
| NT stingers most prevalent October to May; stay out of the sea those months; vinegar and urgent medical attention | CONFIRMED, omission (item H) | Wildlife page: "They're most prevalent from October to May – don't swim in the sea during these months – but stings have occurred throughout the year, so it's advisable to take precautions all year round. Wear protective clothing (stinger suit) and if you're stung, flood the sting with vinegar and seek urgent medical attention." |
| Kimberley: box jellyfish and irukandji can be present all year, most prevalent November to April; full-length stinger suit and vinegar | CONFIRMED | DBCA Kimberley page, verbatim. |
| WA Health March 2026: MVE detected in the Pilbara and Kimberley for the first time that wet season | OVERSTATED (item F) | https://www.health.wa.gov.au/Media-releases/2026/March/Mosquito-borne-virus-warnings-for-Pilbara-and-Kimberley (24 March 2026): "detected flavivirus activity, including Murray Valley encephalitis (MVE) virus, in the Pilbara and Kimberley for the first time this wet season."; "The potentially fatal MVE virus has been detected in mosquitoes in the Pilbara"; "Flavivirus activity has also been detected in sentinel chickens in the east Kimberley, and further laboratory testing is required to identify which flavivirus is currently active." "This wet season" = 2025-26. |
| Avoid bites: long loose light-coloured clothing; nets or mosquito-proof tents if sleeping outside; repellent with DEET, picaridin or oil of lemon eucalyptus | CONFIRMED | Same release, verbatim. Optional: WA Health also notes JE vaccine is free for all Kimberley residents (not visitors). |
| Bullet "Cover up and use repellent at dawn and dusk" | CONFIRMED | Tourism NT wildlife page: "Mosquitoes are most present at dawn and dusk, so cover up with long pants and sleeves, and use a reliable repellent". |

### Section 8 (heat, fuel, signal)
| Claim | Verdict | Source and quote |
|---|---|---|
| Kakadu regularly 30°C or more, can exceed 40°C in summer; strongly recommend not walking after 11 am in summer | CONFIRMED | Kakadu staying-safe page: "Temperatures in the park regularly reach 30°C or more and can exceed 40°C during summer."; "In summer we strongly recommend not walking after 11.00 am." |
| Purnululu: can exceed 40°C, radiant heat over 50°C | CONFIRMED | Purnululu page, verbatim. |
| Karijini flash floods; do not enter a gorge if rain in the area | CONFIRMED; location implied wrongly (item I) | https://exploreparks.dbca.wa.gov.au/park/karijini-national-park: "Flash floods can occur – do not enter gorges if there is rain in the area." Karijini is in the Pilbara. Not in sources list. |
| Keep vehicle filled; don't rely on fuel; remote stations restricted hours | CONFIRMED | Roads page, verbatim. |
| Break down: stay with vehicle; help may be many hours away | CONFIRMED | Roads page: "In the event of a breakdown, stay with the vehicle. Help may not be possible for many hours, particularly at night." |
| Tourism NT: EPIRB or satellite phone | CONFIRMED | Tourism NT camping safety page. |
| DBCA: PLB for Drysdale River | CONFIRMED | https://exploreparks.dbca.wa.gov.au/park/drysdale-river-national-park: "Consider travelling with a personal location beacon (PLB)." Not in sources list. |

### Section 9 (Using AussieCamps)
Not fact-checked against official sources (app claims: Apple Weather 7-day forecast, offline place details, BookEasy listings, no closure data). Product team to confirm.

### FAQ
1. Camping in the wet: CONFIRMED (Darwin camping page; Litchfield camping page; Walker Creek).
2. Gibb River Road: CONFIRMED on substance; "Usually not." see item K. "It reopens only when river crossings are low enough and flood repairs are done": CONFIRMED (Main Roads).
3. Kakadu: CONFIRMED; stale wording, item D.
4. Cyclone season: CONFIRMED.

---

## Staleness after 1 November 2026
- Jim Jim / Twin Falls / Karnamarr "for all of 2026" (section 3 text, bullet, FAQ 3): reads as reopened from 1 January 2027. Fix per item D.
- MVE paragraph refers to the 2025-26 season; say so explicitly (item F).
- Shire of Derby-West Kimberley report cited is dated 1 October 2026; replacing it with Main Roads' own 138 138 line (item C) removes the dependency.
- Kakadu pass page promotion (wet rates for 1 July to 31 October 2026) ends before publication; the guide correctly does not mention it.
- "We read every source on 21 October 2026": true; publication is 1 November, so consider "checked 21 October 2026" in captions as is (already the case).

## Sources quoted but missing from the `sources` list (item L)
- https://northernterritory.com/articles/why-you-should-visit-the-northern-territory-during-summer (green season, build-up)
- https://northernterritory.com/us/en/darwin-and-surrounds/see-and-do/outdoor-activities/camping (robust set-up)
- https://northernterritory.com/things-to-do/outdoor-activities/swimming (waterholes closed)
- https://northernterritory.com/katherine-and-surrounds/see-and-do/nitmiluk-national-park
- https://northernterritory.com/plan/useful-information/safety-information/camping (never camp near water's edge, EPIRB)
- https://pfes.nt.gov.au/node/42885 (132 500, penalised, flooded forget it)
- https://kakadu.gov.au/plan/when-to-come/ (open all year)
- https://kakadu.gov.au/discover/regions/jim-jim-twin-falls/ (flows, best seen by air)
- https://kakadu.gov.au/plan/plan-your-trip/staying-safe/ (knee-deep, pool, heat, 11 am, mobile)
- https://www.mainroads.wa.gov.au/travelmap/ and https://www.mainroads.wa.gov.au/ (138 138)
- https://www.swek.wa.gov.au/road-conditions.aspx
- https://exploreparks.dbca.wa.gov.au/park/bandilngan-windjana-gorge-national-park
- https://exploreparks.dbca.wa.gov.au/park/dimalurru-tunnel-creek-national-park
- https://exploreparks.dbca.wa.gov.au/park/karijini-national-park
- https://exploreparks.dbca.wa.gov.au/park/drysdale-river-national-park

## Recommended replacement text

A. Section 1, first sentence:
"Tourism NT says the Top End wet season, or tropical summer, stretches from November to April, and its green season guide puts the build-up from October to December."

B. Section 2, para 2, first sentence:
"NT Police, Fire and Emergency Services, Parks Australia and the Shire of Derby-West Kimberley all use the same line: if it's flooded, forget it."

C. Section 2, para 3, end of sentence:
"...showing closures and flooding, and its 24/7 line is 138 138. The Shire of Derby-West Kimberley's road report sends travellers to Main Roads for the Great Northern Highway, the Derby Highway and the Gibb River Road."

D. Section 3, para 3, first sentence:
"Jim Jim Falls, the Twin Falls gorge and escarpment walk and Karnamarr campground are closed through 2026 while road and infrastructure upgrades are delivered, and Parks Australia expects the area to reopen for the 2027 dry season, so expect them to stay closed for this whole wet season."
Bullet: "Jim Jim, Twin Falls and Karnamarr closed until the 2027 dry season"
FAQ 3, last sentence: "Jim Jim Falls, Twin Falls and Karnamarr campground are closed through 2026 for road and infrastructure upgrades, and Parks Australia expects them to reopen for the 2027 dry season."

E. Section 5, para 2, last sentence:
"The Shire of Wyndham East Kimberley says towing trailers or caravans on unsealed roads over the wet season is not recommended."
Bullet: "Towing on unsealed roads in the wet is not recommended"

F. Section 7, para 3, first sentence:
"WA Health reported on 24 March 2026 that flavivirus activity had been detected in the Pilbara and Kimberley for the first time in the 2025-26 wet season: Murray Valley encephalitis virus in mosquitoes in the Pilbara, and a flavivirus still being identified in sentinel chickens in the east Kimberley."

G. Section 7, para 1:
"...across the Northern Territory all year round, so only ever swim in designated areas; if in doubt, don't swim, and avoid the water's edge."

H. Section 7, para 2:
"Tourism NT says marine stingers are most prevalent from October to May in the Northern Territory, to stay out of the sea in those months, and, because stings have occurred throughout the year, to take precautions all year round. If stung, flood the sting with vinegar and seek urgent medical attention."

I. Section 8, para 1:
"In the Pilbara, DBCA warns that flash floods can occur in Karijini's gorges, so do not enter a gorge if there is rain in the area."

J. Section 4, para 1:
"...and that the Florence Falls 2WD campground is available year-round, while the 4WD campground is available most of the year."

K. FAQ 2 opening:
"Usually not. DBCA says the Gibb River Road is closed throughout the wet season, and Main Roads WA says it is often closed during the wet, which generally runs from December to April, and is typically open from May to November."
