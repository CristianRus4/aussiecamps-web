# Publish schedule

New guides publish themselves on a set day. Add `publishAt: "YYYY-MM-DD"` (a New Zealand date) to
the article in `lib/site.ts` or `lib/expanded-articles.ts`, merge it, and add a row below. GitHub
Pages builds every day at 07:15 NZDT (06:15 NZST), and the first build on or after that day
publishes the guide (`lib/publish.ts`). Until then it exists nowhere on the site: no page in any
language, no sitemap entry, hreflang, listing, related card or llms.txt line, and links to it are
plain text.


From 2026-11-11 every guide is published (the owner's call): the dated rows after today are an indexing calendar, 10 guides per day in seasonal order (summer and the current season first, winter topics last). The daily task requests Search Console indexing for each day's rows; the guides are already live.

## Rules

- At most one new guide per day on this site. Exception: the eight KiwiCamping gap guides of 9 November 2026
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
| 2026-11-15 | is-wikicamps-free | index |
| 2026-11-15 | is-wikicamps-worth-it | index |
| 2026-11-15 | wikicamps-vs-aussiecamps | index |
| 2026-11-15 | wikicamps-for-pc | index |
| 2026-11-15 | wikicamps-login-account | index |
| 2026-11-15 | wikicamps-trip-planner-alternative | index |
| 2026-11-15 | does-wikicamps-work-offline | index |
| 2026-11-15 | moving-from-wikicamps | index |
| 2026-11-15 | share-camping-trip-aussiecamps | index |
| 2026-11-15 | free-camps-missing-wikicamps | index |
| 2026-11-16 | perth-to-margaret-river-drive | index |
| 2026-11-16 | sydney-to-adelaide-drive | index |
| 2026-11-16 | sydney-to-byron-bay-drive | index |
| 2026-11-16 | sydney-to-canberra-drive | index |
| 2026-11-16 | sydney-to-dubbo-drive | index |
| 2026-11-16 | sydney-to-gold-coast-drive | index |
| 2026-11-16 | sydney-to-melbourne-drive | index |
| 2026-11-16 | townsville-to-mount-isa-drive | index |
| 2026-11-16 | australia-biosecurity-camping-gear | index |
| 2026-11-16 | australia-or-new-zealand-campervan-first | index |
| 2026-11-17 | australia-three-week-campervan-route | index |
| 2026-11-17 | best-campervan-for-backpackers-australia | index |
| 2026-11-17 | buying-a-campervan-australia-working-holiday | index |
| 2026-11-17 | byron-noosa-gold-coast-campervan-rules | index |
| 2026-11-17 | campervan-hire-cost-australia-2026 | index |
| 2026-11-17 | campervan-hire-insurance-excess-australia | index |
| 2026-11-17 | campervan-relocations-australia | index |
| 2026-11-17 | campervan-vs-caravan-australia | index |
| 2026-11-17 | can-i-sleep-in-a-campervan-in-the-city-in-australia | index |
| 2026-11-17 | can-i-take-a-campervan-or-caravan-on-the-spirit-of-tasmania | index |
| 2026-11-18 | can-i-take-alcohol-into-restricted-areas-on-an-outback-road-trip | index |
| 2026-11-18 | drink-driving-limits-australia-visitors | index |
| 2026-11-18 | easy-campervan-meals-australia | index |
| 2026-11-18 | free-camping-batemans-bay | index |
| 2026-11-18 | free-camping-broken-hill | index |
| 2026-11-18 | free-camping-coober-pedy | index |
| 2026-11-18 | free-camping-echuca | index |
| 2026-11-18 | free-camping-exmouth | index |
| 2026-11-18 | free-camping-jervis-bay | index |
| 2026-11-18 | free-camping-longreach | index |
| 2026-11-19 | free-camping-margaret-river | index |
| 2026-11-19 | free-camping-near-adelaide | index |
| 2026-11-19 | free-camping-near-brisbane | index |
| 2026-11-19 | free-camping-near-cairns | index |
| 2026-11-19 | free-camping-near-canberra | index |
| 2026-11-19 | free-camping-near-darwin | index |
| 2026-11-19 | free-camping-near-melbourne | index |
| 2026-11-19 | free-camping-near-perth | index |
| 2026-11-19 | free-camping-near-shepparton-goulburn-valley | index |
| 2026-11-19 | free-camping-near-sydney | index |
| 2026-11-20 | free-camping-new-south-wales | index |
| 2026-11-20 | free-camping-queensland | index |
| 2026-11-20 | free-camping-queensland-outback | index |
| 2026-11-20 | free-camping-savannah-way | index |
| 2026-11-20 | free-camping-south-australia | index |
| 2026-11-20 | free-camping-tasmania | index |
| 2026-11-20 | free-camping-victoria | index |
| 2026-11-20 | free-camping-western-australia | index |
| 2026-11-20 | glamping-australia-by-state | index |
| 2026-11-20 | hit-a-kangaroo-what-to-do-australia | index |
| 2026-11-21 | holiday-park-prices-australia-2026 | index |
| 2026-11-21 | is-camping-in-australia-dangerous | index |
| 2026-11-21 | kgari-fraser-island-camping-permits | index |
| 2026-11-21 | left-side-driving-australia | index |
| 2026-11-21 | mosquitoes-march-flies-camping-australia | index |
| 2026-11-21 | safe-swimming-queensland-crocodiles-stingers | index |
| 2026-11-21 | selling-a-campervan-australia-before-you-leave | index |
| 2026-11-21 | solo-campervan-travel-australia | index |
| 2026-11-21 | speed-limits-australia-visitors | index |
| 2026-11-21 | toll-roads-australia-hire-car-campervan | index |
| 2026-11-22 | wa-wildflower-season-camping-australia | index |
| 2026-11-22 | waterfalls-with-campsites-australia | index |
| 2026-11-22 | working-holiday-road-trip-budget-australia-2026 | index |
| 2026-11-22 | 4wd-basics-hire-vehicles-australia | index |
| 2026-11-22 | best-travel-apps-australia | index |
| 2026-11-22 | big-lap-of-australia-guide | index |
| 2026-11-22 | buying-camping-gear-australia | index |
| 2026-11-22 | buying-selling-a-car-australia-rego-roadworthy-pink-slip | index |
| 2026-11-22 | camper-trailer-guide-australia | index |
| 2026-11-22 | campfire-cooking-damper-australia | index |
| 2026-11-23 | camping-near-uluru | index |
| 2026-11-23 | can-i-camp-in-a-state-forest-in-australia | index |
| 2026-11-23 | can-i-camp-on-aboriginal-land-without-a-permit | index |
| 2026-11-23 | can-i-camp-on-private-land-or-a-farm-in-australia | index |
| 2026-11-23 | can-i-fish-without-a-licence-while-camping-in-australia | index |
| 2026-11-23 | can-i-fly-a-drone-while-camping-in-australia | index |
| 2026-11-23 | can-i-stay-overnight-at-a-rest-area-in-australia | index |
| 2026-11-23 | can-i-use-a-generator-at-a-campsite-in-australia | index |
| 2026-11-23 | dampier-peninsula-cape-leveque-camping | index |
| 2026-11-23 | easy-camping-breakfasts-australia | index |
| 2026-11-24 | esperance-camping-guide | index |
| 2026-11-24 | first-two-weeks-working-holiday-australia | index |
| 2026-11-24 | fleurieu-peninsula-camping | index |
| 2026-11-24 | freerange-camping-alternatives | index |
| 2026-11-24 | glow-worm-caves-camping-australia | index |
| 2026-11-24 | hipcamp-in-australia | index |
| 2026-11-24 | kalbarri-coral-coast-camping | index |
| 2026-11-24 | karijini-national-park-camping | index |
| 2026-11-24 | long-distance-driving-tips-australia | index |
| 2026-11-24 | mitchell-falls-mitchell-plateau-camping | index |
| 2026-11-25 | oodnadatta-track-camping-guide | index |
| 2026-11-25 | petrol-diesel-prices-australia-2026 | index |
| 2026-11-25 | pilbara-camping-beyond-karijini | index |
| 2026-11-25 | powered-campsites-australia-by-state | index |
| 2026-11-25 | powered-vs-unpowered-sites-australia | index |
| 2026-11-25 | purnululu-bungle-bungles-camping | index |
| 2026-11-25 | queensland-outback-national-parks-camping | index |
| 2026-11-25 | regional-work-working-holiday-visa-camping-australia | index |
| 2026-11-25 | rest-areas-western-australia-south-australia | index |
| 2026-11-25 | riverland-murray-river-camping-south-australia | index |
| 2026-11-26 | roadtrippers-alternatives | index |
| 2026-11-26 | school-holidays-australia-2027 | index |
| 2026-11-26 | silo-art-trail-camping-australia | index |
| 2026-11-26 | solar-power-for-campers-australia | index |
| 2026-11-26 | stargazing-camps-northern-territory | index |
| 2026-11-26 | tanami-track-camping-guide | index |
| 2026-11-26 | wikicamps-vs-camps-australia-wide-vs-campermate | index |
| 2026-11-26 | easter-long-weekend-camping-australia-2027 | index |
| 2026-11-26 | australian-winter-camping-whales-snow-warm-camps | index |
| 2026-11-26 | best-campsite-booking-apps-australia | index |
| 2026-11-27 | two-week-australia-trip-cost | index |
| 2026-11-27 | wet-weather-camping-australia | index |
| 2026-11-27 | river-crossing-floodway-safety-australia | index |
| 2026-11-27 | wildlife-encounters-campervan-australia | index |
| 2026-11-27 | wine-regions-campervan-australia | index |
| 2026-11-27 | campervan-vs-car-and-tent-australia | index |
| 2026-11-27 | best-hiking-bushwalking-apps-australia | index |
| 2026-11-27 | snow-chains-winter-driving-australia | index |
