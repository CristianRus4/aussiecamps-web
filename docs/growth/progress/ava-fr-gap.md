# ava-fr-gap progress (Ava account)

Lane: fill the remaining French (fr) guide gaps on both sites. Branches `i18n/a-fr-gap` (AussieCamps,
worktree `~/.t3/worktrees/aussiecamps-web/ava-fr-gap`) and `i18n/k-fr-gap` (KiwiCamping, worktree
`~/.t3/worktrees/kiwicamping-web/ava-fr-gap`). Never pushed; the orchestrator merges. The same file is kept in both repos.

## Gaps found (2026-10-21, comparing en.json keys with fr.json; ui, consent, tools, pages are complete on both sites)
AussieCamps, 18 guides missing in fr (62/80 complete):
- road trips with Search Console impressions: melbourne-to-adelaide-coastal-route, sunshine-coast-hinterland-camping,
  gibb-river-road-camping, nullarbor-crossing-camping-guide, flinders-ranges-camping-guide, red-centre-way-camping
- scheduled listicles in publish order: best-caravan-rv-apps-australia (10-26), best-apps-working-holiday-australia (10-27),
  best-weather-apps-camping-australia (10-28), best-money-saving-travel-apps-australia (10-29), hipcamp-alternatives (10-30)
- other road trips: tasmania-camping-loop, sydney-south-coast-camping, queensland-outback-way, south-west-wa-camping-loop,
  victoria-high-country-camping, kangaroo-island-camping-guide, blue-mountains-camping-weekend

KiwiCamping, 26 guides missing in fr (63/89 complete):
- by impressions: best-nz-camping-apps, campfire-rules-new-zealand, where-to-camp-in-new-zealand,
  self-contained-campervan-green-warrant, scenic-campsites-new-zealand, new-zealand-camping-packing-list,
  responsible-camping-new-zealand, two-week-camper-itinerary-new-zealand
- listicles in publish order: wikicamps-alternatives, best-campervan-apps-new-zealand, best-weather-apps-new-zealand,
  fuel-price-apps-new-zealand, working-holiday-apps-new-zealand, money-saving-travel-apps-new-zealand
- rest: camping-wastewater-rubbish-new-zealand, best-time-camping-new-zealand and 10 road trips (nelson-abel-tasman-golden-bay,
  rakiura-stewart-island-camping-guide, new-zealand-three-week-campervan-route, wellington-wairarapa-camping-loop,
  north-island-two-week-road-trip, west-coast-south-island-road-trip, queenstown-glenorchy-camping,
  southern-scenic-route-camping, fiordland-camping-road-trip, south-island-two-week-road-trip)

## Method (scratch in /tmp/ava-frgap, recreate if lost)
`mkinput.mjs <au|nz> <batch> <slugs…>` makes engine input files from the packet (catalog `aussiecamps-website-fr` /
`kiwicamping-website-fr`); `BRIEF.md` drafter brief (sonnet, high), `REVIEW-BRIEF.md` native review (opus, medium, negation table),
`check.mjs` number/link/tag/dash/offline-map check, `merge.mjs` merges values files. Apply with `translation-engine apply`,
`npm run translations:stamp -- --locale fr`, `npm run content:check`, commit.

## Done
- AU batch 1 (320 units): melbourne-to-adelaide-coastal-route, sunshine-coast-hinterland-camping, gibb-river-road-camping, nullarbor-crossing-camping-guide, flinders-ranges-camping-guide, red-centre-way-camping. Sonnet draft, Opus native review + negation table, own negation re-read, stamped. AU fr now 68/80.

## Next
- AU batch 2: 5 listicles (drafts in /tmp/ava-frgap/draft-au-b2-*.json, reviews pending), then 7 other road trips, then NZ (26 guides, inputs made with mkinput nz).

## Blockers
none
