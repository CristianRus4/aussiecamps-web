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
- AU batch 1 (320 units, 6 road trips): melbourne-to-adelaide-coastal-route, sunshine-coast-hinterland-camping, gibb-river-road-camping,
  nullarbor-crossing-camping-guide, flinders-ranges-camping-guide, red-centre-way-camping.
- AU batch 2 (5 listicles, 776 units): best-caravan-rv-apps-australia, best-apps-working-holiday-australia, best-money-saving-travel-apps-australia,
  best-weather-apps-camping-australia, hipcamp-alternatives.
- Every batch: Sonnet draft, Opus native review with negation table, own negation re-read, typography check, stamped, content:check. AU fr is now 73/80;
  `npm run check` passed on 2484ba4 (handoff 1).

## Next
- AU batch 3: the 7 other road trips (tasmania-camping-loop, sydney-south-coast-camping, queensland-outback-way, south-west-wa-camping-loop,
  victoria-high-country-camping, kangaroo-island-camping-guide, blue-mountains-camping-weekend): drafts in progress.
- Then KiwiCamping (26 guides, inputs made with `mkinput.mjs nz`): draft of best-nz-camping-apps, campfire-rules, where-to-camp, self-contained in progress.

## English-source notes for the orchestrator (translated as written)
- melbourne-to-adelaide sections[5].body[0]: describes a fixed fruit-fly checkpoint with bins on the coastal SA entry and says fresh produce "cannot be carried in";
  SA's permanent quarantine stations are on other highways and the rule is for restricted items. Worth a fact check. sections[7].tips[2] says "Free ferry crossings" the body never states.
- gibb-river-road sections[4].body[0] closes "roughly November to April" vs "closes again around October"; sections[7].body[3] repeats sections[4].body[2] ("Main Roads" vs "Main Roads WA").
- sunshine-coast sections[7].body[1] "one of only two everglade systems in the world" is an unverified claim.
- red-centre-way: "visitor pass" (s0) and "Parks and Wildlife pass" (s7) probably name the same NT parks pass; Anangu is written without its underline; Uluru without the diacritic in s3.body[0].
- nullarbor: lookouts "with barriers" (s2) vs "unfenced" (s6); flinders-ranges: Pichi Richi railway credited to both Quorn and Hawker.
- best-apps-working-holiday-australia: source label "third Work and Holiday 417 visa" mixes 417 (Working Holiday) and 462 (Work and Holiday); tip "Super refund taxed at 65%" is looser than its paragraph.
- best-caravan-rv-apps-australia: free bookings list omits hotels (the WHV page includes them); "up to A$50 each" (G'day Rewards) ambiguous.
- best-money-saving-travel-apps-australia: Splitwise "settles up at the end" (s12.body[0]) contradicts "you settle up yourself" (s12.body[1] and table).
- best-weather-apps-camping-australia: Weatherzone Pro A$5.99 a month and ad-free A$5.99 a year cost the same, worth rechecking.
- hipcamp-alternatives: the AussieCamps section never says campground data needs the Pass (translated as written).

## Blockers
none
