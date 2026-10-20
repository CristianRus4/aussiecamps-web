# ava-a-listicles-2 progress

Branch `growth/a-listicles-2` (worktree `~/.t3/worktrees/aussiecamps-web/ava-a-listicles-2`). Edited only by this lane (Ava). Contract: `/Users/cristian/Developer/Webs/.growth-lanes/briefs/listicles-common.md`. Run 2 of the AussieCamps listicle programme; run 1 is in `a-listicles.md`.

## Pages (in order, one commit each)

| # | Slug | publishAt | Status |
|---|---|---|---|
| 1 | `best-caravan-rv-apps-australia` | 2026-10-26 | committed (a86b329); content review fixes applied on main |
| 2 | `best-apps-working-holiday-australia` | 2026-10-27 | committed (ee3c2a2); content review fixes applied on main |
| 3 | `best-weather-apps-camping-australia` | 2026-10-28 | research done (facts file) |
| 4 | `best-money-saving-travel-apps-australia` | 2026-10-29 | todo |
| 5 | `hipcamp-alternatives` (Hipcamp chosen: see facts file) | 2026-10-30 | store data only |

Each page: facts file in `docs/growth/listicles/run2/`, hero from Wikimedia Commons (1600x900 plus 800 variant, credited in `docs/image-sources-planning-app.md`), screen figure in `lib/screen-figures.ts`, FAQ in `lib/article-faqs.ts`, row in `docs/growth/publish-schedule.md`.

## Notes
- Keyword map and slugs checked 2026-10-20: no existing guide owns caravan apps, working holiday apps, weather apps, money-saving apps or Hipcamp/CAMPS alternatives. `camping-weather-safety-australia` covers weather safety (not apps); link it, do not duplicate.
- Release data (`Scraper/data/australia_db.sqlite`): caravan-relevant facts are dump points (1,393, 230 with washout), water (3,004), rest areas (5,552) with "Heavy Vehicle Area" tags, park access notes (2WD, 4WD, high clearance), a few "Caravan Sites"/"Powered Sites" tags. No systematic caravan or big-rig fit tag: do not claim one.
- Weather in the app: Apple Weather (WeatherKit), current conditions plus a 7-day daily forecast on place pages; forecasts for trip arrival dates. No warnings, radar or fire danger.
- Screens used by run 1: cape-le-grand top, flinders-ranges top, adelaide-to-uluru map, perth-to-broome map, lucky-bay top, karijini top.

## Done
- Setup and research plan.
- Facts files for all five pages started in `docs/growth/listicles/run2/` (caravan, WHM and weather complete).
- Heroes and screen figures for pages 1-2 committed (f1cf057). Screens chosen: p1 cape-hillsborough-np_middle, p2 rac-cable-beach-hp_top; planned p3 blue-mountains-np_middle (weather), p4 coffin-bay-np_middle (reported prices).
- Pages 1-2 fact-checked and committed: page 1 a86b329, page 2 ee3c2a2. Merged to main on 2026-10-20 with the content review fixes (myVEVO is on Android, no WikiCamps big-rig claim, condition 8547 wording, data attribution, table and price details).
- ATO and Fair Work pages block automated fetches (403/timeouts): their facts rest on official-page search extracts.

## Next
- Pages 3-5.
- Page 2 hero: the reviewer asked to replace the vineyard photo, which shows an identifiable person, with a freely licensed Australian photo without identifiable people. Not done yet: the download needs the owner's approval.
- Hero candidates for pages 3-5 (agent running, /tmp/ava-l2/photos/candidates-cde.md).

## Blockers
- None yet.
