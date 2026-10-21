# Drive guides: research brief (for a research helper)

Worktree: /Users/cristian/.t3/worktrees/aussiecamps-web/kai-a-drives (branch growth/a-drives). Research only: do NOT edit lib/, do not commit, do not run builds or `npm run check`.
Headless only: use WebFetch, WebSearch or `curl -sL -A "Mozilla/5.0"`; never open a visible browser.
Today is 2026-10-21. Output is one facts file per route: docs/growth/drives/<slug>-facts.md. Another person writes the page from it, so every line must be usable as is.

## Tools already on this Mac
- `python3 -I /tmp/drives/bin/osrm.py "lon,lat;lon,lat;..." Name1,Name2,...` prints total km, drive time and per-leg km/time from the OSRM demo
  server on OpenStreetMap data (cite as "OSRM routing on OpenStreetMap data, computed 21 October 2026"; car, no stops, no caravan).
  Pick waypoints on the road you mean (put a waypoint in each town on the highway) so it takes that route, and check the km against an official or
  tourism figure where one exists. Look up coordinates with `curl -s -A aussiecamps-research "https://nominatim.openstreetmap.org/search?q=Holbrook+NSW&format=json&limit=1"` (1 request a second).
- `python3 -I /tmp/drives/bin/corridor.py "lon,lat;lon,lat;..." <km offset, default 15> <types> <limit>` run from the worktree root lists AussieCamps data
  places (campground, public_dump_point, roadside_rest_area) along the route in order, with km from the start, facilities and the AussieCamps place id.
  Run it per route (types separately to read them: `campground`, `public_dump_point`, `roadside_rest_area`). These names are the only source for
  "campground / dump point / rest area in the app". The data is a subset of the app, so a missing town is not proof that nothing exists there.

## What each facts file needs (use these headings)
1. **Route options**: 2 to 4 genuinely used routes between the two cities (name each by its road numbers/names). For each: distance km, drive time without stops,
   towns on it, road type (dual carriageway, single carriageway, unsealed), and the source of each figure. Prefer a road authority, tourism body or Geoscience Australia figure;
   otherwise OSRM (say so). Give OSRM and official figures side by side when both exist and note any gap.
2. **Legs and overnight stops**: split the main route into sensible daily legs (km, time). For each overnight town list: named caravan parks or campgrounds
   (from corridor.py output with the place id, and any well-known park whose existence you confirm on an operator or council page), rest areas (name + the facilities the data lists),
   and one line on what the town offers. Say what is a rest stop for a break and not a place to sleep (see the overnight rest area rules per state in lib/can-i/can-i-stay-overnight-at-a-rest-area-in-australia.ts).
3. **Fuel and services**: longest gap between fuel stops on each route (name the towns/roadhouses and the km between them, with a source: road authority, tourism body or operator).
4. **Road conditions and seasonal closures**: the authority's live source for the route (Live Traffic NSW, VicTraffic, QLDTraffic, Road Report NT, Main Roads WA Travel Map, SA Traffic/DIT), flood/fire/snow/wet season closures,
   chains/snow rules if the route crosses alps, tolls (Sydney, Brisbane, Melbourne tolls and how a visitor pays), speed limits that differ (NT open limit, 110 km/h sections), road train and wildlife notes if the official source says them, roadworks that are announced.
5. **State border rules**: fruit fly regulated areas, biosecurity/quarantine checks and what you can carry (NSW/Vic/SA/WA/NT/Qld as relevant, including red imported fire ant movement controls in Queensland and northern NSW,
   and WA's border checkpoints). Quote the rule, name the zone, state the date opened. Say what the source says exactly; do not generalise.
6. **Dump points**: from corridor.py (name, place id, locality, washout tap listed or not). Say it is the data's coverage, not every dump point.
7. **Other facts a driver needs**: time zone changes on the route and daylight saving (as at the travel dates), school-holiday/long-weekend pressure only if an official source says it, national park fees or passes on the route only if they affect a stop you name.
8. **Hero photo candidates**: 3 candidates from Wikimedia Commons only (licence CC0, public domain, CC BY or CC BY-SA, original at least 1600 px wide, in Australia, on the route, no identifiable people, no dominant text). Give file page URL, creator, licence, one-line subject. Check the file page really exists with curl. Do not reuse a hero already in public/images/articles (check `ls public/images/articles` and docs/image-sources-*.md).
9. **Sources**: a numbered list: label, URL, date opened (2026-10-21), what you took from it. Also list the pages that returned 403 or blocked scripts, and what you used instead (a search extract from the official page is acceptable; mark it "search extract").

## Rules
- Every number, rule, closure, fee or date has an official or operator source or is marked OSRM. Not-confirmed items go in a final **NOT CONFIRMED** list; the writer will leave them out.
- Say exactly what the source says. Do not paraphrase a "not", "no", "only" or "never" loosely.
- Existing AussieCamps guides already cover (link to them, do not re-research): nullarbor-crossing-camping-guide, perth-to-broome-road-trip, east-coast-road-trip-sydney-cairns, brisbane-to-cape-tribulation, melbourne-to-adelaide-coastal-route, adelaide-to-uluru-road-trip, red-centre-way-camping, darwin-kakadu-litchfield-loop, gibb-river-road-camping, queensland-outback-way, great-ocean-road-camping-guide, victoria-high-country-camping, australian-alps-camping-route, blue-mountains-camping-weekend, sydney-south-coast-camping, sunshine-coast-hinterland-camping, tasmania-camping-loop, interstate-biosecurity-road-trip, driving-with-road-trains-australia, road-trip-fuel-planning-australia, dump-points-australia-guide, camping-rules-<state>, can-i-stay-overnight-at-a-rest-area-in-australia, wet-season-camping-top-end-northern-wa, christmas-summer-camping-australia-2026-27.
- No opinions as facts, no invented places. Keep each file under about 250 lines; short bullet lines.
- Finish by printing only the path(s) of the file(s) you wrote and a 3-line summary of anything the writer must be careful about.
