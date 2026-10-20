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
