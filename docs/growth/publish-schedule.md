# Publish schedule

New guides publish themselves on a set day. Add `publishAt: "YYYY-MM-DD"` (a New Zealand date) to
the article in `lib/site.ts` or `lib/expanded-articles.ts`, merge it, and add a row below. GitHub
Pages builds every day at 07:15 NZDT (06:15 NZST), and the first build on or after that day
publishes the guide (`lib/publish.ts`). Until then it exists nowhere on the site: no page in any
language, no sitemap entry, hreflang, listing, related card or llms.txt line, and links to it are
plain text.


From 2026-11-11 every guide is published (the owner's call): the dated rows after today are an indexing calendar, 10 guides per day in seasonal order (summer and the current season first, winter topics last). The daily task requests Search Console indexing for each day's rows.

From 2026-11-16 (the owner's call) the 101 AussieCamps guides written that day publish by seasonal priority: 8 urgent summer guides on 16 Nov, 5 a day from 17 to 23 Nov, then one a day to 20 Jan 2027, winter and dry-season topics last. Their rows (`scheduled`) come first on their day; the older guides' `index` rows fill each day up to 10 (Search Console's daily limit).

## Rules

- At most one new guide per day on this site, except where the owner sets a faster pace (16 Nov 2026, above). Exception: the eight KiwiCamping gap guides of 9 November 2026
  were set to publish on merge, so the existing queue did not move.
- `publishAt` is only for new guides. Never set it on a guide that is already live: the SEO audit fails,
  because every live URL must stay (see `docs/growth/url-baseline.txt`).
- Translations go live with their English guide or after it. A translation merged early waits for the
  English date; one merged later goes live with the next build.
- Updates to existing pages are not scheduled or throttled. Merge them when they are ready.
- The guide must pass `npm run check` when it is merged, not on its publish day: the content and
  similarity audits check scheduled guides too.

## How to

1. Pick the first free day in the table (one guide per day).
2. Set `publishAt` on the article, run `npm run translations:source`, and commit both.
3. Add a row here with status `scheduled`.
4. After the guide is live, change its status to `live`.

To preview a site as it will be on a given day: `BUILD_DATE=2026-11-05 npm run build:pages`.

| Date | Slug | Status |
|---|---|---|
| 2026-10-21 | wikicamps-alternatives | scheduled |
| 2026-10-22 | campermate-alternatives | scheduled |
| 2026-10-23 | best-fuel-price-apps-australia | scheduled |
| 2026-10-24 | best-road-trip-planner-apps-australia | scheduled |
| 2026-10-25 | best-free-camping-apps-australia | scheduled |
| 2026-10-26 | best-caravan-rv-apps-australia | scheduled |
| 2026-10-27 | best-apps-working-holiday-australia | scheduled |
| 2026-10-28 | best-weather-apps-camping-australia | scheduled |
| 2026-10-29 | best-money-saving-travel-apps-australia | scheduled |
| 2026-10-30 | hipcamp-alternatives | scheduled |
| 2026-10-31 | christmas-summer-camping-australia-2026-27 | scheduled |
| 2026-11-01 | wet-season-camping-top-end-northern-wa | scheduled |
| 2026-11-02 | camps-australia-wide-alternatives | scheduled |
| 2026-11-03 | best-apps-lap-of-australia | scheduled |
| 2026-11-04 | best-dump-point-toilet-apps-australia | scheduled |
| 2026-11-05 | best-national-park-apps-australia | scheduled |
| 2026-11-06 | exploroz-alternatives | scheduled |
| 2026-11-07 | can-i-camp-on-the-beach-in-australia | scheduled |
| 2026-11-08 | can-i-drive-on-the-beach-in-australia | scheduled |
| 2026-11-09 | can-i-camp-in-a-national-park-without-booking-in-australia | scheduled |
| 2026-11-09 | australia-biosecurity-camping-gear | publish on merge |
| 2026-11-09 | mosquitoes-march-flies-camping-australia | publish on merge |
| 2026-11-09 | speed-limits-australia-visitors | publish on merge |
| 2026-11-09 | left-side-driving-australia | publish on merge |
| 2026-11-09 | drink-driving-limits-australia-visitors | publish on merge |
| 2026-11-09 | best-travel-apps-australia | publish on merge |
| 2026-11-09 | australia-three-week-campervan-route | publish on merge |
| 2026-11-09 | cyclone-flood-season-camping-australia | publish on merge |
| 2026-11-09 | wikicamps-not-working | publish on merge |
| 2026-11-09 | is-camping-in-australia-dangerous | publish on merge |
| 2026-11-09 | free-camping-new-south-wales | publish on merge |
| 2026-11-09 | free-camping-victoria | publish on merge |
| 2026-11-09 | free-camping-queensland | publish on merge |
| 2026-11-09 | free-camping-western-australia | publish on merge |
| 2026-11-09 | free-camping-tasmania | publish on merge |
| 2026-11-09 | free-camping-south-australia | publish on merge |
| 2026-11-09 | free-camping-near-sydney | publish on merge |
| 2026-11-09 | free-camping-near-melbourne | publish on merge |
| 2026-11-09 | free-camping-near-brisbane | publish on merge |
| 2026-11-09 | free-camping-near-perth | publish on merge |
| 2026-11-09 | free-camping-near-adelaide | publish on merge |
| 2026-11-09 | free-camping-near-cairns | publish on merge |
| 2026-11-09 | free-camping-near-darwin | publish on merge |
| 2026-11-09 | free-camping-near-canberra | publish on merge |
| 2026-11-09 | powered-campsites-australia-by-state | publish on merge |
| 2026-11-09 | esperance-camping-guide | publish on merge |
| 2026-11-09 | karijini-national-park-camping | publish on merge |
| 2026-11-09 | kalbarri-coral-coast-camping | publish on merge |
| 2026-11-09 | byron-noosa-gold-coast-campervan-rules | publish on merge |
| 2026-11-09 | campervan-holiday-with-kids-australia | publish on merge |
| 2026-11-09 | rest-areas-western-australia-south-australia | publish on merge |
| 2026-11-09 | buying-camping-gear-australia | publish on merge |
| 2026-11-09 | glamping-australia-by-state | publish on merge |
| 2026-11-10 | free-camping-broken-hill | publish on merge |
| 2026-11-10 | free-camping-coober-pedy | publish on merge |
| 2026-11-10 | free-camping-longreach | publish on merge |
| 2026-11-10 | free-camping-echuca | publish on merge |
| 2026-11-10 | free-camping-jervis-bay | publish on merge |
| 2026-11-10 | free-camping-batemans-bay | publish on merge |
| 2026-11-10 | free-camping-margaret-river | publish on merge |
| 2026-11-10 | free-camping-exmouth | publish on merge |
| 2026-11-10 | free-camping-savannah-way | publish on merge |
| 2026-11-10 | free-camping-queensland-outback | publish on merge |
| 2026-11-10 | camping-near-uluru | publish on merge |
| 2026-11-10 | kgari-fraser-island-camping-permits | publish on merge |
| 2026-11-10 | dampier-peninsula-cape-leveque-camping | publish on merge |
| 2026-11-10 | purnululu-bungle-bungles-camping | publish on merge |
| 2026-11-10 | oodnadatta-track-camping-guide | publish on merge |
| 2026-11-10 | tanami-track-camping-guide | publish on merge |
| 2026-11-10 | mitchell-falls-mitchell-plateau-camping | publish on merge |
| 2026-11-10 | pilbara-camping-beyond-karijini | publish on merge |
| 2026-11-10 | queensland-outback-national-parks-camping | publish on merge |
| 2026-11-10 | can-i-collect-firewood-while-camping-in-australia | scheduled |
| 2026-11-11 | bushfire-safety-camping-australia | scheduled |
| 2026-11-12 | wikicamps-not-working | index |
| 2026-11-12 | brisbane-to-airlie-beach-drive | index |
| 2026-11-12 | adelaide-to-melbourne-drive | index |
| 2026-11-12 | adelaide-to-port-lincoln-drive | index |
| 2026-11-12 | alice-springs-to-uluru-drive | index |
| 2026-11-12 | australia-road-trip-mistakes-to-avoid | index |
| 2026-11-12 | australian-road-trip-food-to-try | index |
| 2026-11-12 | best-family-holiday-parks-australia | index |
| 2026-11-12 | brisbane-to-adelaide-drive | index |
| 2026-11-12 | brisbane-to-byron-bay-drive | index |
| 2026-11-13 | brisbane-to-cairns-drive | index |
| 2026-11-13 | brisbane-to-coffs-harbour-drive | index |
| 2026-11-13 | brisbane-to-darwin-drive | index |
| 2026-11-13 | brisbane-to-sydney-drive | index |
| 2026-11-13 | broome-to-darwin-drive | index |
| 2026-11-13 | cairns-to-darwin-drive | index |
| 2026-11-13 | campervan-holiday-with-kids-australia | index |
| 2026-11-13 | can-i-drive-a-2wd-hire-campervan-on-4wd-roads-in-australia | index |
| 2026-11-13 | cyclone-flood-season-camping-australia | index |
| 2026-11-13 | darwin-to-alice-springs-drive | index |
| 2026-11-14 | hobart-to-launceston-drive | index |
| 2026-11-14 | how-to-change-a-tyre-campervan-australia | index |
| 2026-11-14 | melbourne-to-brisbane-drive | index |
| 2026-11-14 | melbourne-to-canberra-drive | index |
| 2026-11-14 | melbourne-to-mildura-drive | index |
| 2026-11-14 | melbourne-to-perth-drive | index |
| 2026-11-14 | perth-to-albany-drive | index |
| 2026-11-14 | perth-to-darwin-drive | index |
| 2026-11-14 | perth-to-esperance-drive | index |
| 2026-11-14 | perth-to-exmouth-drive | index |
| 2026-11-15 | perth-to-margaret-river-drive | index |
| 2026-11-15 | sydney-to-adelaide-drive | index |
| 2026-11-15 | sydney-to-byron-bay-drive | index |
| 2026-11-15 | sydney-to-canberra-drive | index |
| 2026-11-15 | sydney-to-dubbo-drive | index |
| 2026-11-15 | sydney-to-gold-coast-drive | index |
| 2026-11-15 | sydney-to-melbourne-drive | index |
| 2026-11-15 | townsville-to-mount-isa-drive | index |
| 2026-11-15 | australia-biosecurity-camping-gear | index |
| 2026-11-15 | australia-or-new-zealand-campervan-first | index |
| 2026-11-16 | national-park-campsites-sell-out-summer-australia | scheduled |
| 2026-11-16 | new-years-eve-summer-festival-camping-australia-2026-27 | scheduled |
| 2026-11-16 | national-park-passes-australia-2026-27 | scheduled |
| 2026-11-16 | wilsons-promontory-camping | scheduled |
| 2026-11-16 | overland-three-capes-booked-out-alternatives | scheduled |
| 2026-11-16 | two-week-campervan-itinerary-sydney-brisbane | scheduled |
| 2026-11-16 | camping-byron-bay | scheduled |
| 2026-11-16 | holiday-park-memberships-australia-2027 | scheduled |
| 2026-11-16 | australia-three-week-campervan-route | index |
| 2026-11-16 | best-campervan-for-backpackers-australia | index |
| 2026-11-16 | cigarette-prices-australia | requested |
| 2026-11-16 | smoking-vaping-rules-australia | requested |
| 2026-11-16 | where-to-buy-cigarettes-vapes-australia | requested |
| 2026-11-17 | camping-gold-coast | scheduled |
| 2026-11-17 | one-week-campervan-itinerary-sydney-byron-bay | scheduled |
| 2026-11-17 | camping-in-sydney | scheduled |
| 2026-11-17 | mornington-peninsula-phillip-island-camping-weekend | scheduled |
| 2026-11-17 | free-camping-with-a-tent-australia | scheduled |
| 2026-11-17 | buying-a-campervan-australia-working-holiday | index |
| 2026-11-17 | byron-noosa-gold-coast-campervan-rules | index |
| 2026-11-17 | campervan-hire-cost-australia-2026 | index |
| 2026-11-17 | campervan-hire-insurance-excess-australia | index |
| 2026-11-17 | alcohol-coffee-drink-prices-australia | index |
| 2026-11-18 | overland-track-2026-27 | scheduled |
| 2026-11-18 | three-capes-track-2026-27 | scheduled |
| 2026-11-18 | south-coast-track-tasmania | scheduled |
| 2026-11-18 | hobart-bay-of-fires-freycinet-camping-week | scheduled |
| 2026-11-18 | camping-in-melbourne | scheduled |
| 2026-11-18 | campervan-vs-caravan-australia | index |
| 2026-11-18 | can-i-sleep-in-a-campervan-in-the-city-in-australia | index |
| 2026-11-18 | can-i-take-a-campervan-or-caravan-on-the-spirit-of-tasmania | index |
| 2026-11-18 | can-i-take-alcohol-into-restricted-areas-on-an-outback-road-trip | index |
| 2026-11-18 | drink-driving-limits-australia-visitors | index |
| 2026-11-19 | great-ocean-walk-camping-2026-27 | scheduled |
| 2026-11-19 | free-camping-near-geelong-great-ocean-road | scheduled |
| 2026-11-19 | melbourne-gippsland-wilsons-promontory-camping-loop | scheduled |
| 2026-11-19 | moreton-island-north-stradbroke-island-camping | scheduled |
| 2026-11-19 | bruny-island-maria-island-camping | scheduled |
| 2026-11-19 | easy-campervan-meals-australia | index |
| 2026-11-19 | free-camping-batemans-bay | index |
| 2026-11-19 | free-camping-broken-hill | index |
| 2026-11-19 | free-camping-coober-pedy | index |
| 2026-11-19 | free-camping-echuca | index |
| 2026-11-20 | free-camping-mid-north-coast-nsw | scheduled |
| 2026-11-20 | sydney-to-port-macquarie-drive | scheduled |
| 2026-11-20 | brisbane-to-noosa-hervey-bay-drive | scheduled |
| 2026-11-20 | snowy-mountains-kosciuszko-camping-road-trip | scheduled |
| 2026-11-20 | australian-alps-walking-track | scheduled |
| 2026-11-20 | free-camping-exmouth | index |
| 2026-11-20 | free-camping-jervis-bay | index |
| 2026-11-20 | free-camping-longreach | index |
| 2026-11-20 | free-camping-margaret-river | index |
| 2026-11-20 | free-camping-near-adelaide | index |
| 2026-11-21 | best-multi-day-walks-australia-2026-27 | scheduled |
| 2026-11-21 | easy-overnight-bushwalks-huts-families | scheduled |
| 2026-11-21 | hut-stays-australia | scheduled |
| 2026-11-21 | starting-campervan-trip-sydney | scheduled |
| 2026-11-21 | sydney-3-days-campervan | scheduled |
| 2026-11-21 | free-camping-near-brisbane | index |
| 2026-11-21 | free-camping-near-cairns | index |
| 2026-11-21 | free-camping-near-canberra | index |
| 2026-11-21 | free-camping-near-darwin | index |
| 2026-11-21 | free-camping-near-melbourne | index |
| 2026-11-22 | melbourne-3-days-campervan | scheduled |
| 2026-11-22 | hobart-3-days-campervan | scheduled |
| 2026-11-22 | free-camping-near-hobart | scheduled |
| 2026-11-22 | tasmania-west-coast-road-trip-strahan-cradle-mountain | scheduled |
| 2026-11-22 | launceston-to-cradle-mountain-drive | scheduled |
| 2026-11-22 | free-camping-near-perth | index |
| 2026-11-22 | free-camping-near-shepparton-goulburn-valley | index |
| 2026-11-22 | free-camping-near-sydney | index |
| 2026-11-22 | free-camping-new-south-wales | index |
| 2026-11-22 | free-camping-queensland | index |
| 2026-11-23 | hobart-to-freycinet-port-arthur-drive | scheduled |
| 2026-11-23 | free-camping-near-launceston-tamar-valley | scheduled |
| 2026-11-23 | best-apps-tasmania-road-trip | scheduled |
| 2026-11-23 | national-park-campsite-rules-australia | scheduled |
| 2026-11-23 | can-i-drink-the-water-at-australian-campsites | scheduled |
| 2026-11-23 | free-camping-queensland-outback | index |
| 2026-11-23 | free-camping-savannah-way | index |
| 2026-11-23 | free-camping-south-australia | index |
| 2026-11-23 | free-camping-tasmania | index |
| 2026-11-23 | free-camping-victoria | index |
| 2026-11-24 | canberra-to-jindabyne-snowy-mountains-drive | scheduled |
| 2026-11-24 | free-camping-western-australia | index |
| 2026-11-24 | glamping-australia-by-state | index |
| 2026-11-24 | hit-a-kangaroo-what-to-do-australia | index |
| 2026-11-24 | holiday-park-prices-australia-2026 | index |
| 2026-11-24 | is-camping-in-australia-dangerous | index |
| 2026-11-24 | kgari-fraser-island-camping-permits | index |
| 2026-11-24 | left-side-driving-australia | index |
| 2026-11-24 | mosquitoes-march-flies-camping-australia | index |
| 2026-11-24 | safe-swimming-queensland-crocodiles-stingers | index |
| 2026-11-25 | camping-in-canberra | scheduled |
| 2026-11-25 | selling-a-campervan-australia-before-you-leave | index |
| 2026-11-25 | solo-campervan-travel-australia | index |
| 2026-11-25 | speed-limits-australia-visitors | index |
| 2026-11-25 | toll-roads-australia-hire-car-campervan | index |
| 2026-11-25 | wa-wildflower-season-camping-australia | index |
| 2026-11-25 | waterfalls-with-campsites-australia | index |
| 2026-11-25 | working-holiday-road-trip-budget-australia-2026 | index |
| 2026-11-25 | 4wd-basics-hire-vehicles-australia | index |
| 2026-11-25 | best-travel-apps-australia | index |
| 2026-11-26 | canberra-southern-highlands-camping-loop | scheduled |
| 2026-11-26 | big-lap-of-australia-guide | index |
| 2026-11-26 | buying-camping-gear-australia | index |
| 2026-11-26 | buying-selling-a-car-australia-rego-roadworthy-pink-slip | index |
| 2026-11-26 | camper-trailer-guide-australia | index |
| 2026-11-26 | campfire-cooking-damper-australia | index |
| 2026-11-26 | camping-near-uluru | index |
| 2026-11-26 | can-i-camp-in-a-state-forest-in-australia | index |
| 2026-11-26 | can-i-camp-on-aboriginal-land-without-a-permit | index |
| 2026-11-26 | can-i-camp-on-private-land-or-a-farm-in-australia | index |
| 2026-11-27 | newcastle-hunter-barrington-tops-camping-loop | scheduled |
| 2026-11-27 | can-i-fish-without-a-licence-while-camping-in-australia | index |
| 2026-11-27 | can-i-fly-a-drone-while-camping-in-australia | index |
| 2026-11-27 | can-i-stay-overnight-at-a-rest-area-in-australia | index |
| 2026-11-27 | can-i-use-a-generator-at-a-campsite-in-australia | index |
| 2026-11-27 | dampier-peninsula-cape-leveque-camping | index |
| 2026-11-27 | easy-camping-breakfasts-australia | index |
| 2026-11-27 | esperance-camping-guide | index |
| 2026-11-27 | first-two-weeks-working-holiday-australia | index |
| 2026-11-27 | fleurieu-peninsula-camping | index |
| 2026-11-28 | free-camping-near-newcastle-hunter | scheduled |
| 2026-11-28 | freerange-camping-alternatives | index |
| 2026-11-28 | glow-worm-caves-camping-australia | index |
| 2026-11-28 | hipcamp-in-australia | index |
| 2026-11-28 | kalbarri-coral-coast-camping | index |
| 2026-11-28 | karijini-national-park-camping | index |
| 2026-11-28 | long-distance-driving-tips-australia | index |
| 2026-11-28 | mitchell-falls-mitchell-plateau-camping | index |
| 2026-11-28 | oodnadatta-track-camping-guide | index |
| 2026-11-28 | petrol-diesel-prices-australia-2026 | index |
| 2026-11-29 | blue-mountains-walks-where-to-camp | scheduled |
| 2026-11-29 | pilbara-camping-beyond-karijini | index |
| 2026-11-29 | powered-campsites-australia-by-state | index |
| 2026-11-29 | powered-vs-unpowered-sites-australia | index |
| 2026-11-29 | purnululu-bungle-bungles-camping | index |
| 2026-11-29 | queensland-outback-national-parks-camping | index |
| 2026-11-29 | regional-work-working-holiday-visa-camping-australia | index |
| 2026-11-29 | rest-areas-western-australia-south-australia | index |
| 2026-11-29 | riverland-murray-river-camping-south-australia | index |
| 2026-11-29 | roadtrippers-alternatives | index |
| 2026-11-30 | sydney-walks-camping-base | scheduled |
| 2026-11-30 | school-holidays-australia-2027 | index |
| 2026-11-30 | silo-art-trail-camping-australia | index |
| 2026-11-30 | solar-power-for-campers-australia | index |
| 2026-11-30 | stargazing-camps-northern-territory | index |
| 2026-11-30 | tanami-track-camping-guide | index |
| 2026-11-30 | wikicamps-vs-camps-australia-wide-vs-campermate | index |
| 2026-11-30 | easter-long-weekend-camping-australia-2027 | index |
| 2026-11-30 | australian-winter-camping-whales-snow-warm-camps | index |
| 2026-11-30 | best-campsite-booking-apps-australia | index |
| 2026-12-01 | melbourne-hikes-camping-base | scheduled |
| 2026-12-01 | two-week-australia-trip-cost | index |
| 2026-12-01 | wet-weather-camping-australia | index |
| 2026-12-01 | river-crossing-floodway-safety-australia | index |
| 2026-12-01 | wildlife-encounters-campervan-australia | index |
| 2026-12-01 | wine-regions-campervan-australia | index |
| 2026-12-01 | campervan-vs-car-and-tent-australia | index |
| 2026-12-01 | best-hiking-bushwalking-apps-australia | index |
| 2026-12-01 | snow-chains-winter-driving-australia | index |
| 2026-12-02 | grampians-camping-weekend-from-melbourne | scheduled |
| 2026-12-03 | grampians-wilsons-prom-day-walks-where-to-camp | scheduled |
| 2026-12-04 | melbourne-to-lakes-entrance-gippsland-drive | scheduled |
| 2026-12-05 | limestone-coast-camping-route-adelaide-mount-gambier | scheduled |
| 2026-12-05 | campervan-relocations-australia | index |
| 2026-12-06 | adelaide-to-kangaroo-island-drive | scheduled |
| 2026-12-07 | eyre-peninsula-coastal-camping-route | scheduled |
| 2026-12-08 | free-camping-near-albany-south-coast-wa | scheduled |
| 2026-12-09 | free-camping-near-bunbury-busselton | scheduled |
| 2026-12-10 | cape-to-cape-track-camping-2026-27 | scheduled |
| 2026-12-11 | perth-to-geraldton-kalbarri-drive | scheduled |
| 2026-12-12 | lakeside-river-camping-australia | scheduled |
| 2026-12-13 | sunrise-spots-near-campsites-australia | scheduled |
| 2026-12-14 | scenic-lookouts-drive-to-australia | scheduled |
| 2026-12-15 | best-scenic-campsites-australia-by-state | scheduled |
| 2026-12-16 | where-to-camp-in-australia | scheduled |
| 2026-12-17 | camping-bases-best-day-walks-australia | scheduled |
| 2026-12-18 | australia-experiences-under-100-campers | scheduled |
| 2026-12-19 | eco-treehouse-stays-near-capital-cities-australia | scheduled |
| 2026-12-20 | rail-trails-mountain-bike-campervan-australia | scheduled |
| 2026-12-21 | east-coast-vs-west-coast-australia-campervan | scheduled |
| 2026-12-22 | can-i-drive-a-campervan-on-a-car-licence-in-australia | scheduled |
| 2026-12-23 | can-i-go-to-the-toilet-outdoors-while-camping-in-australia | scheduled |
| 2026-12-24 | bushwalking-camp-rules-etiquette-australia | scheduled |
| 2026-12-25 | does-aussiecamps-work-offline | scheduled |
| 2026-12-26 | aussiecamps-weather-street-view | scheduled |
| 2026-12-27 | aussiecamps-costs-in-your-currency | scheduled |
| 2026-12-28 | camping-in-cairns | scheduled |
| 2026-12-29 | cairns-3-days-campervan | scheduled |
| 2026-12-30 | daintree-cape-tribulation-camping | scheduled |
| 2026-12-31 | cairns-to-port-douglas-cape-tribulation-drive | scheduled |
| 2027-01-01 | ten-day-campervan-itinerary-cairns-tropical-north | scheduled |
| 2027-01-02 | townsville-to-cairns-drive | scheduled |
| 2027-01-03 | free-camping-near-townsville-mackay | scheduled |
| 2027-01-04 | whale-watching-marine-wildlife-camping-australia | scheduled |
| 2027-01-05 | overland-track-2027-28-bookings | scheduled |
| 2027-01-06 | aurora-australis-tasmanian-wildflowers-camping | scheduled |
| 2027-01-07 | free-camping-port-augusta-flinders-ranges | scheduled |
| 2027-01-08 | adelaide-to-coober-pedy-drive | scheduled |
| 2027-01-09 | uluru-base-walk-kings-canyon-rim-walk-where-to-camp | scheduled |
| 2027-01-10 | camping-in-alice-springs | scheduled |
| 2027-01-11 | free-camping-near-alice-springs | scheduled |
| 2027-01-12 | larapinta-trail-camping-2026-27 | scheduled |
| 2027-01-13 | bibbulmun-track-camping-2026-27 | scheduled |
| 2027-01-14 | thorsborne-trail-hinchinbrook-island | scheduled |
| 2027-01-15 | kakadu-national-park-camping | scheduled |
| 2027-01-16 | darwin-to-kakadu-katherine-drive | scheduled |
| 2027-01-17 | free-camping-northern-territory | scheduled |
| 2027-01-18 | cairns-to-cape-york-camping-route | scheduled |
| 2027-01-19 | camping-in-broome | scheduled |
| 2027-01-20 | free-camping-near-broome-kimberley | scheduled |
