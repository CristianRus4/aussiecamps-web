# Weather apps for camping and road trips: facts (run 2)

## App Store AU snapshot, checked 2026-10-20 (iTunes search API, country=au)

| App | Id | Seller | Price | Rating (count) | Version, date |
|---|---|---|---|---|---|
| BOM Weather | 1100096880 | Bureau of Meteorology | Free | 4.61 (472,762) | 6.14.0, 2026-08-19 |
| Weatherzone | 409060691 | DTN APAC Pty Ltd | Free | 4.62 (598,996) | 7.6.0, 2026-08-02 |
| WillyWeather | 592978502 | WillyWeather (AU) Pty Ltd | Free | 4.72 (366,237) | 3.3.4, 2026-08-06 |
| Windy.com | 1161387262 | Windyty, SE | Free | 4.79 (22,509) | 2026-10-09 |
| Apple Weather | 1069513131 | Apple | Free (built in) | 4.77 (118,616) | 2026-10-19 |
| Elders Weather | 1121822860 | Elders Rural Services Australia | Free | 4.51 (67,905) | 1.30, 2026-06-25 |
| AUS Rain Radar (Old BoM Radar) | 993445822 | Leon Calcutt | Free | 4.61 (70,290) | 4.12.12, 2026-10-12 |
| Rain Radar Australia | 657192005 | Verve Technologies | Free | 4.63 (14,154) | 9.0.4, 2025-11-12 |
| AccuWeather | 300048137 | AccuWeather International | Free | 4.54 (19,080) | 2026-10-07 |
| Hazards Near Me NSW | 370891827 | NSW Rural Fire Service | Free | 3.4 (5) | 6.6.3, 2026-10-08 |
| Fires Near Me Australia | 406270824 | NSW Rural Fire Service | Free | 2.4 (309) | 6.6.3, 2026-10-08 |
| VicEmergency | 356559665 | State of Victoria | Free | 2.95 (756) | 6.9.3, 2026-10-01 |
| Emergency Plus | 691814685 | National Triple Zero Awareness Work Group | Free | 3.87 (522) | 3.1.0, 2026-05-25 |

In-app purchases, features, offline behaviour and warnings: to research (next step).

## AussieCamps weather (app repo, read-only)
- `CampingWeatherSection.swift`: Apple Weather (WeatherKit) current conditions summary and a 7-day daily forecast on place pages, with the Apple Weather attribution link.
- Trips show the forecast for stop arrival dates within the forecast range (au-app-facts.md, run 1).
- No warnings, radar, fire danger or tides. Needs signal.

## In-app purchases and ads, AU App Store web listing, checked 2026-10-20
- 1100096880 | BOM Weather | Bureau of Meteorology | Free | 4.61 (472762) | v6.14.0 2026-08-19 | ads=False ipad=True | IAP: none listed
- 409060691 | Weatherzone: Weather Forecasts | DTN APAC Pty Ltd | Free | 4.62 (598996) | v7.6.0 2026-08-02 | ads=True ipad=True | IAP: Weatherzone PRO Subscription $5.99; Ad-free Weatherzone Subscription $5.99
- 592978502 | WillyWeather | WillyWeather (AU) Pty Ltd | Free | 4.72 (366237) | v3.3.4 2026-08-06 | ads=True ipad=True | IAP: WillyWeather+ (Monthly) $6.00; WillyWeather+ (Yearly) $48.00
- 1161387262 | Windy.com - Weather Radar | Windyty, SE | Free | 4.79 (22509) | v51.030224 2026-10-09 | ads=False ipad=True | IAP: Windy Premium $37.99; Windy Premium $4.99; Windy Premium $37.99; Windy Premium $57.99; Donate 3 EUR/USD a month $3.99; Donate approx 5 EUR/USD $7.99; Donate approx 10 EUR/USD $14.99; Donate 6 EUR/USD a month $8.49; Donate approx 20 EUR/USD $29.99; Donate approx 50  EUR/USD $79.99
- 1121822860 | Elders Weather App | Elders Rural Services Australia Limited | Free | 4.51 (67905) | v1.30 2026-06-25 | ads=True ipad=True | IAP: Silver Membership $2.99
- 993445822 | AUS Rain Radar - Old BoM Radar | Leon Calcutt | Free | 4.61 (70290) | v4.12.12 2026-10-12 | ads=True ipad=True | IAP: Remove Ads $4.99
- 300048137 | AccuWeather - Weather Alerts | AccuWeather International, Inc. | Free | 4.54 (19080) | v21.0.27 2026-10-07 | ads=True ipad=True | IAP: AccuWeather Premium+ (Monthly) $7.99; AccuWeather Premium+ (Annual) $49.99; AccuWeather Premium (Yearly) $19.99; AccuWeather Premium (Monthly) $2.99; Platinum Restore $0.00; AccuWeather Premium+ Family Plan $129.99; AccuWeather Premium+ (Annual) $49.99
- 1069513131 | Weather | Apple Pty Limited | Free | 4.77 (118616) | v2.8 2026-10-19 | ads=False ipad=True | IAP: none listed

## Feature research (sonnet pass, 2026-10-20)

Note: the App Store pages were read through a summarising fetch tool; items marked "verify" need a second look on the developer's own page.

### BOM Weather (Bureau of Meteorology)
- Data: the Bureau's own official forecasts, warnings and radar; seller is the Bureau itself; free, no ads (https://apps.apple.com/au/app/bom-weather/id1100096880, checked 2026-10-20).
- Forecast: hourly forecast for the next 72 hours (temperature, UV, wind, humidity, dew point, rain) and a 7-day forecast with rain shown as a range (same URL, checked 2026-10-20).
- Radar: rain radar from 90 minutes in the past to 90 minutes ahead, with optimal radar coverage areas shown (same URL, checked 2026-10-20).
- Warnings: active warnings shown on the map (added 6.11.0, Oct 2025); push notifications for rain and warnings for up to 3 locations; warning types include coastal hazards, fire weather, flood, heatwave, severe thunderstorm, tropical cyclone, tsunami (same URL, checked 2026-10-20).
- Fire danger rating shown in the app, colours updated to match the national Australian Fire Danger Rating System (5.4.0) (same URL, checked 2026-10-20).
- UV: hourly UV forecast (6.13.0, May 2026); sunrise/sunset, moon phases (same URL, checked 2026-10-20).
- Marine: wave height, waters forecasts and tides for relevant coastal locations (same URL, checked 2026-10-20).
- Offline: "Offline mode lets you see recently-viewed data when you don't have internet" (6.9.0) (same URL, checked 2026-10-20).
- Lightning: not listed on the App Store page (unverified).
- Widgets / Apple Watch / Android: not stated on the App Store page (unverified here; see Android below if checked).
- Price: free, no in-app purchases (facts table above).
- Best for: official warnings, the BOM radar and fire danger rating for a stop with some signal; the only one here with the Bureau's own warnings as the primary source.
- Cons: warnings and radar need signal (only recently viewed data is cached); rain wording criticised by some reviewers as confusing (same URL, checked 2026-10-20).

### Weatherzone
- Free tier: current observations, radar (rain, storms, snow) with satellite, lightning heatmap, wind streamlines and tropical cyclone tracks layers; radar projection for the next hour; 10-day daily forecast with temperature, rain chance and amount, wind, UV, sunrise/sunset; hourly graphs; 28-day temperature and rainfall outlooks; synoptic outlooks for 7 days (https://apps.apple.com/au/app/weatherzone-weather-forecasts/id409060691, checked 2026-10-20).
- Warnings: "official severe weather alerts for your area" (same URL, checked 2026-10-20). Whether push notifications for BOM warnings are free vs PRO: unverified.
- Marine: wave heights, tides and a 3-day marine outlook, free (same URL, checked 2026-10-20).
- Widgets: lock screen and home screen widgets; Apple Watch app listed (watchOS 2.0 or later) (same URL, checked 2026-10-20).
- Paid: PRO adds real-time rain and lightning storm alerts, individual lightning strikes on the radar map, global lightning, wind gusts and cloud cover in hourly graphs; Ad-free removes ads. App Store page text reads Ad-free $5.99 per year and PRO $5.99 per month (same URL, checked 2026-10-20). The in-app purchase list shows both at $5.99; period per product to verify.
- Fire danger rating, offline behaviour and data source: not stated on the App Store page (unverified; see below).
- Ads: yes in the free app (facts table above).
- Best for: lightning and storm-cell tracking and the 10-day outlook; PRO lightning alerts useful in storm season.

### WillyWeather
- Data sources listed by the developer: BoM, NOAA and ECMWF for wind; BoM radar and satellite; ACCESS models for rainfall; Australian National Tide Tables and state marine agencies for tides (https://apps.apple.com/au/app/willyweather/id592978502, checked 2026-10-20).
- Forecast: "Seven-day BoM weather forecasts tailored to each location", including beaches, rivers, parks, lakes and islands (same URL, checked 2026-10-20).
- Radar: "Raw BoM radar data, refined, processed and integrated with iOS maps"; national satellite cloud view; layers for satellite, wind, gusts, swell, rainfall, UV (iOS 17) (same URL, checked 2026-10-20).
- Tides and swell: tide times for every Australian beach and many river systems; swell height, period and direction per beach; graphs up to 7 days (same URL, checked 2026-10-20).
- UV: hourly UV forecast with alerts for extreme conditions (same URL, checked 2026-10-20).
- Warnings: BoM warnings targeted to affected locations (same URL, checked 2026-10-20).
- Widgets and Watch: home and lock screen widgets (temperature, rain chance, UV, wind, swell, moon, next tide, radar); Apple Watch complications (watchOS 7.0 or later) (same URL, checked 2026-10-20).
- WillyWeather+ ($6.00 monthly or $48.00 yearly) adds custom weather alerts, more forecast and historical data, forecast radar frames, 30-minute rain intensity projections, advanced rain alert settings, jump-to-date for tides/moon/swell and offline forecasts (same URL, checked 2026-10-20).
- Lightning: not mentioned on the App Store page (unverified). Fire danger: not mentioned (unverified).
- Best for: coastal and beach camping (tides, swell, wind) and an offline forecast if you pay for WillyWeather+.

### Windy.com
- Data: global and regional models, not BOM forecasts. Global: meteoblue, an AI forecast, ECMWF, GFS (NOAA), ICON (DWD); local models include ACCESS-C (the Australian one); radar from sources including NOAA, Met Office and BoM (https://apps.apple.com/au/app/windy-com-weather-radar/id1161387262, checked 2026-10-20).
- 50+ maps (rain, satellite, wind, temperature, marine, air quality, soil/fire conditions); lightning tracker and storm alerts when lightning strikes near you; weather warnings listed; hurricane tracker (same URL, checked 2026-10-20).
- Premium: 1-hour and 15-day outlook with 4-6x daily updates, 24-hour radar and satellite loops, more maps (e.g. tide forecasts), model comparison. Premium in-app purchase prices on the AU page: $4.99, $37.99, $57.99 (period not shown; see facts table) (same URL, checked 2026-10-20).
- Apple Watch: yes (watchOS 11.6 or later); widgets for weather stations and radar/satellite (same URL, checked 2026-10-20).
- Offline: not mentioned (unverified). No ads shown in the listing (facts table).
- Best for: wind, gusts and storm movement at a glance, comparing models for a long-range or marine view; wind-sensitive camping (awnings, rooftop tents, coastal).
- Caveat: not the Bureau's warnings feed; use the BOM app for official Australian warnings.

### Apple Weather
- Built into iOS; Australian forecasts in the Weather app are from Apple's weather service (WeatherKit); see Apple's data-source notes below (https://developer.apple.com/weatherkit/data-source-attribution/, check pending).
- In the AussieCamps app repo, place pages use WeatherKit with a 7-day daily forecast (internal, see above).

### Elders Weather
- Data: "Bureau of Meteorology data and Weatherzone meteorologists"; 2,000+ Australian locations; up to 10 favourites; iPhone only per the listing (https://apps.apple.com/au/app/elders-weather-app/id1121822860, checked 2026-10-20).
- Free: 7-day forecast (min/max, rain chances, UV, frost risk, 9am/3pm wind), 48-hour forecast, observation history, moon, tides where relevant, weather warnings, national/state/local radar, national satellite, 7-day synoptic charts, GFS rain maps 0-7 and 8-14 days (same URL, checked 2026-10-20).
- Silver Membership $2.99 (listing says per year): advanced push notifications, 28-day and 12-month rain forecasts, longer observation history, extra radar layers, lightning on national radar (same URL, checked 2026-10-20). Some reviews report trouble renewing or accessing Silver.
- Apple Watch: none listed. Widgets: current widgets not described (unverified).
- Best for: farm and rural road trips, frost risk, long-range rainfall outlook.

### AUS Rain Radar (Old BoM Radar)
- Third-party app (Leon Calcutt), not from the Bureau; "Some data on this app is sourced from Bureau Of Meteorology (BOM)"; local and national rain radar plus a 7-day forecast; location used only to find the closest radar and forecast; iPhone, iPad, Apple platforms only (https://apps.apple.com/au/app/aus-rain-radar-old-bom-radar/id993445822, checked 2026-10-20).
- Remove Ads $4.99, a one-off payment per developer reply (same URL, checked 2026-10-20). Warnings not mentioned (unverified).
- Best for: a quick, simple radar view in the style of the old BoM radar.

### AccuWeather (brief)
- Global provider, not BOM; MinuteCast minute-by-minute rain, 45-day look-ahead, radar and satellite, "weather watches and warnings for your local area", iPhone, iPad, Mac, Apple Watch, Apple TV (https://apps.apple.com/au/app/accuweather-weather-alerts/id300048137, checked 2026-10-20).
- Premium $2.99/month or $19.99/year; Premium+ $7.99/month or $49.99/year; one review says a Premium+ feature is US only (same URL, checked 2026-10-20).
- Not the Bureau's warnings: do not rely on it for official Australian warnings.

### BOM Weather: official page detail (added)
- Official BOM page: "Australia's official weather app"; "Hourly and 7 day forecasts, radar, rain notifications and warnings"; "free and ad-free on mobile and tablet devices"; widgets for current, minimum and maximum temperature (add one or many locations); offline mode; available for iPhone and Android (https://www.bom.gov.au/bom-weather-app, checked 2026-10-20).
- Same page: current weather includes feels-like, wind and gust, humidity, rainfall since 9 am; hourly forecast for 72 hours; 7-day forecast; fire danger rating; waters forecast including tides; map with rain 90 minutes past and future plus active warnings; "Rain and warning notifications for up to 3 locations"; warning notifications cover coastal hazards, fire weather, flood warnings and watches, heatwave, marine wind, severe thunderstorm, severe weather, tropical cyclone and tsunami; 72 hours of past temperature, wind and rain (https://www.bom.gov.au/bom-weather-app, checked 2026-10-20).
- Android: BOM Weather (package au.gov.bom.metview) exists on Google Play; BOM page above says "iPhone and Android" (checked 2026-10-20). Coastal hazard alerts (dangerous surf, abnormal tides) added in 6.8.2 per release mirrors (unverified on bom.gov.au).
- Apple Watch: not mentioned anywhere on the BOM page (unverified, do not claim).
- Lightning: not listed on the BOM app feature list above (do not claim).

### Weatherzone: pricing and sources (added)
- Weatherzone Australian help centre: Pro is AUD $5.99 per month (extra push notifications for rain, storm and lightning events, detailed lightning strikes and observation plots on the Radar tab, wind gust and cloud cover on the Graph tab); ad-free option is AUD $5.99 per year (https://consumer.dtn.com/hc/en-gb/articles/5078150689938-What-do-I-get-with-a-paid-Weatherzone-subscription, via search summary, checked 2026-10-20; page itself returned 403 to fetch, so cite the App Store page too).
- Website footer: "Information supplied by Weatherzone based on data provided by the Bureau of Meteorology (BOM)" (https://www.weatherzone.com/au/help, checked 2026-10-20).
- Opticast: Wikipedia says Weatherzone developed the Opticast forecast system in 2008 using over a dozen computer models including in-house WRF; treat as unconfirmed for the current app (https://en.wikipedia.org/wiki/Weatherzone, via search summary, checked 2026-10-20).
- Fire danger rating in the Weatherzone app: unverified. Offline cache: unverified.

### Apple Weather (added)
- Apple's WeatherKit attribution page lists severe weather alert sources NWS (US), Environment and Climate Change Canada, Mexico SMN and EUMETNET Meteoalarm; no Australian source listed on that page, so Apple Weather in Australia should NOT be described as showing BOM warnings (https://developer.apple.com/weatherkit/data-source-attribution/, checked 2026-10-20). Whether Apple Weather shows any Australian severe weather alerts: unverified.
- Forecast data in Australia: Apple does not publish the Australian model source on that page; do not claim BOM data (unverified).

## Official sources

### 1. BOM and the BOM Weather app
- BOM Weather app: official feature list as above (https://www.bom.gov.au/bom-weather-app, checked 2026-10-20). Page title and text: "Australia's official weather app".
- BOM is the source of official weather warnings: the BOM website has a "Warnings and alerts" section (https://www.bom.gov.au/, checked 2026-10-20). "Australia's official weather and warnings source" wording: use "Australia's official weather agency" unless verified on bom.gov.au/about.

### 2. Fire danger ratings and total fire bans
- Four levels plus "No rating": Moderate (plan and prepare), High (be ready to act), Extreme (take action now to protect life and property), Catastrophic (for your survival, leave bushfire risk areas). "No rating" shown as a white bar (https://www.bom.gov.au/resources/learn-and-explore/fire-weather-knowledge-centre/fire-weather-services, checked 2026-10-20).
- Same page: fire danger ratings are set by state and territory fire agencies; you can find them in the BOM Weather app or on a BOM location page next to the district forecast (when available); BOM issues fire weather warnings; "Fire agencies in each state and territory are responsible for total fire bans. Check with your state or territory fire agency" (same URL, checked 2026-10-20).
- Fire behaviour index ranges: 0-11 No rating, 12-23 Moderate, 24-49 High, 50-99 Extreme, 100+ Catastrophic (same URL, checked 2026-10-20).

### 3. State emergency apps
- NSW: Hazards Near Me NSW (NSW Rural Fire Service seller on App Store): bush fires, floods and tsunamis, watch zones, offline mode (6.2.0), fire danger ratings on the map (6.6.1); also shows incidents within 50 km outside the NSW border (https://apps.apple.com/au/app/hazards-near-me-nsw/id370891827, checked 2026-10-20).
- NSW: Hazards Near Me expanded and renamed from Fires Near Me to add SES flood alerts, per NSW government release (https://www.rfs.nsw.gov.au/news-and-media/ministerial-media-releases/flood-alerts-at-your-fingertips, via search summary, checked 2026-10-20; release date unresolved, possibly Feb 2023, verify before citing).
- Fires Near Me Australia (NSW RFS, separate App Store listing 406270824): all-states fire incident map, Australian Warning System levels (Advice, Watch and Act, Emergency Warning), Watch Zones; says to check your state or territory agency (https://apps.apple.com/au/app/fires-near-me-australia/id406270824, checked 2026-10-20).
- Victoria: VicEmergency (official Victorian Government app): push warnings, watch zones, live incident map including planned burns, forecast fire danger ratings on the map, today and tomorrow Total Fire Ban status (https://apps.apple.com/au/app/vicemergency/id356559665, checked 2026-10-20).
- Queensland: no single "Queensland disaster" warnings app found. The Queensland Government's Get Ready Queensland "During a disaster" page lists the BOM Weather app, the Emergency+ app, the SES Assistance QLD app, ABC Radio and QGov "Disasters and alerts" (https://www.getready.qld.gov.au/during-disaster-resources, last updated July 2025, checked 2026-10-20). Bushfire warnings and incidents come from Queensland Fire Department (https://www.getready.qld.gov.au/resources, via search summary, checked 2026-10-20). Do not name a QLD-specific app beyond SES Assistance QLD.
- South Australia: Alert SA app (free, iOS and Android), covers CFS bushfire plus SES warnings and incidents, severe weather, heatwave, floods, urban fire, hazmat; up to 10 Watch Zones of up to 50 km; fire danger ratings and total fire ban info; cross-border fire warnings within 100 km (https://premier.sa.gov.au/media-releases/news-archive/expanded-alert-sa-app-to-keep-south-australians-informed, via search summary, checked 2026-10-20; fetch returned 403, verify wording before quoting).
- Western Australia: Emergency WA is both a website (https://www.emergency.wa.gov.au/) and an app run by DFES (App Store and Google Play); up to 10 watch zones, each can notify for warnings, Total Fire Bans and Fire Danger Ratings (https://www.dfes.wa.gov.au/emergencywa/faq, checked 2026-10-20). Launch reported as December 2024 (https://wa.gov.au/government/media-statements/Cook Labor Government/Cook-Government-launches-first-Emergency-WA-app-to-boost-safety-20241221, via search, unverified date). Watch zones for travel destinations: the FAQ page did not confirm this.
- Tasmania: TasALERT app (seller Department of Premier & Cabinet Tasmania, iPhone, free): incident map, watch zones, optional account; App Store rating 2.7 from 34 ratings with complaints about repeated or unsettable alerts (https://apps.apple.com/au/app/id6615065687, checked 2026-10-20). Launched on mobile August 2024 (https://www.premier.tas.gov.au/latest-news/2024/august/tasalert-app-launches, via search summary, unverified). Website: https://www.alert.tas.gov.au/ (checked 2026-10-20).
- Northern Territory: the official channel is the SecureNT website, which combines alerts from BOM, NT Police Fire and Emergency Services, Road Report NT, Power and Water and Bushfires NT (https://securent.nt.gov.au/alerts, via search summary, checked 2026-10-20; fetch blocked). The iPhone "secureNT" app (App Store id 545883375) is a preparedness utility (shelter locations, emergency kit checklist, links to alerts) whose last listed version is 1.06 dated 21/02/2017 (https://apps.apple.com/au/app/securent/id545883375, checked 2026-10-20). Surprising: do not present it as a live warnings app.
- Phone alerts: NT page says text-based Emergency Alert messages continue until the new "AusAlert" system is operating (https://nt.gov.au/emergency/emergencies/emergency-warnings-nt, via search summary, unverified current status).
- National: Emergency+ (free iPhone and iPad; developer National Triple Zero Awareness Work Group): helps call Triple Zero (000), shows GPS location details to read to the call-taker, what3words that works offline; lists SES and Police Assistance numbers; "developed by Australia's emergency services and their government industry partners" (https://apps.apple.com/au/app/emergency/id691814685, checked 2026-10-20). Android availability listed by Queensland Government page above (checked 2026-10-20).
- Australian Warning System: three levels, Advice (an incident has started, no immediate danger, stay up to date), Watch and Act (heightened threat, start taking action now), Emergency Warning (highest level, may be in danger, take action immediately); nationally consistent icons for incidents on websites and apps; covers bushfire, flood, storm, cyclone, extreme heat, severe weather (https://knowledge.aidr.org.au/resources/australian-warning-system/, checked 2026-10-20). australianwarningsystem.com.au blocked automated fetch (403), so cite AIDR or Queensland Fire Department brochure (https://www.fire.qld.gov.au/sites/default/files/2023-06/AWS-Brochure-Web_0.pdf, via search, unverified).
- Bureau of Meteorology subscription page for warning notifications: https://subscribe.bom.gov.au/weather-app-warnings (certificate expired on fetch, not read; do not cite).

### 4. Road closures and floods (one line each)
- QLDTraffic (Queensland Department of Transport and Main Roads): road closures, hazards and restrictions, roadworks; phone 13 19 40; iPhone and Android app; Queensland says it is the most reliable source for flood road closures (https://qldtraffic.qld.gov.au/ and https://qldtraffic.qld.gov.au/more/Driving-in-Queensland/Flooding-and-Wet-Weather/, via search summary, checked 2026-10-20).
- Live Traffic NSW: site is up (https://www.livetraffic.com/, checked 2026-10-20); feature details unverified.
- VicTraffic, Main Roads WA and Road Report NT: unverified, not researched. NT Road Report is named as a SecureNT alerts feed (see above).

### Data-source details added from developer pages
- Elders Weather: "Elders weather content is provided by Weatherzone", with sources including BOM, JMA, ECMWF, NWS and others; "Increasingly, Weatherzone is replacing Bureau of Meteorology forecasts with independent forecasts produced by in-house modelling and meteorologists"; Weatherzone also runs WRF in-house; all radar images originate from the Bureau's radar network; satellite from JMA via BOM; BOM provides marine forecasts and weather warnings (https://www.eldersweather.com.au/data-sources, checked 2026-10-20). This describes Weatherzone content generally, so it applies to Weatherzone too. Surprising: BOM forecasts are being progressively replaced by Weatherzone's own forecasts in Weatherzone-supplied content; radar and warnings still BOM.
- Weatherzone (about page): owned by DTN since 2019; Opticast is "next generation, cloud-based, consensus forecasting solution" (business product; whether the consumer app forecast uses it is unverified) (https://www.weatherzone.com/au/about, checked 2026-10-20).
- Weatherzone fire danger rating: shown on the Weatherzone website location page ("Fire Danger Rating No Rating" on the sample page) (https://www.weatherzone.com.au/sa/adelaide/underdale, checked 2026-10-20). In the app: unverified.
- Weatherzone Android: an Android app exists (APK mirror listing, https://apkmirror.com/apk/weatherzone/weatherzone-weather-forecasts/weatherzone-weather-forecasts-7-2-3-release, via search, checked 2026-10-20), unverified on Google Play. Weatherzone warnings and BOM warning push notifications: one search summary says free alerts cover BOM warning alerts, but this was not confirmed on an official page (unverified).
- WillyWeather: Android app free on Google Play; "Over 30,000 locations" including campgrounds; "Bureau of Meteorology weather warnings that affect your specific location"; "Weather information based on data supplied by the Bureau of Meteorology and other sources"; site free tier shows ads, "Get WillyWeather+ to remove ads" (https://www.willyweather.com.au/info/android.html and https://www.willyweather.com.au/info/about.html, checked 2026-10-20).
- Elders Weather: available on App Store and Google Play per search summary of eldersweather.com.au (the /apps page 404'd on fetch); Silver subscription $2.99 per year per App Store text and removes ads (https://apps.apple.com/au/app/elders-weather-app/id1121822860, checked 2026-10-20).
- Windy.com: Premium periods not stated in the AU listing (App Store prices $4.99, $37.99, $57.99); US listing reports an annual $18.99 and one-year payment $29.99 (search summary, not AU, so do not quote AU price periods). Android and offline: unverified.
- Apple Weather in Australia: secondary sources (MacRumors, MacTrast, citing an Apple support document, iOS 16 era) say severe weather data and next-hour precipitation notifications are available in Australia; the Apple page itself could not be fetched, so mark as "reported" (https://macrumors.com/how-to/ios-severe-weather-notifications and https://www.mactrast.com/2023/07/next-hour-precipitation-notifications-for-australia-now-available-in-apple-weather-app/amp/, checked 2026-10-20). Source of the severe weather alerts in Australia: unverified; AU WeatherKit attribution not listed.

### Corrections and final additions
- BOM self-description: "Australia's weather, water, climate, ocean and space weather information agency" (https://www.bom.gov.au/about, checked 2026-10-20). Use this wording; the exact phrase "official warnings source" is not on that page, but the BOM app page says "Australia's official weather app" and the Fire weather page says BOM issues fire weather warnings.
- Correction on Emergency WA: DFES feature story (dated 23 December 2024) confirms watch zones for upcoming travel destinations, up to 10 watch zones, push notifications for warnings, incidents, Total Fire Bans and elevated Fire Danger Ratings, available on App Store and Google Play (https://news.dfes.wa.gov.au/media-releases-feature-stories/feature-story-emergency-wa-app/, checked 2026-10-20). This overrides the FAQ-page note above that travel zones were unconfirmed. Good for visitors on a lap of Australia.
- AUS Rain Radar (Old BoM Radar): no Android listing found; treat as iPhone, iPad, Apple-only per its App Store listing; there are other similarly named rain radar apps (RainRadarAU, Rain Radar Pro - Aus Weather, Rain Radar+ Australia by Verve, which says it is not affiliated with BOM), so name the exact app in the article (https://apps.apple.com/au/app/aus-rain-radar-old-bom-radar/id993445822, checked 2026-10-20).
- Items still unverified: Weatherzone push warnings free vs PRO; Weatherzone app fire danger rating; Weatherzone Android on Google Play; Windy Android, offline and AU Premium periods; Apple Weather AU alert source; Elders widgets; Live Traffic NSW, VicTraffic, Main Roads WA detail; Hazards Near Me rename date.
- Camping-relevant patterns (derived from the above, not separate sources): BOM Weather has the only official Bureau warnings, radar, fire danger rating, offline cache and no ads, at no cost; WillyWeather and Windy add tide, swell and wind depth for coastal and wind-sensitive camps; Weatherzone adds the free lightning layer and 10-day forecast, with PRO adding alerts; Elders suits rural and frost or long-range rain use.
