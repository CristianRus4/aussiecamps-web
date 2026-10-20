# ava-a-listicles-2 progress

Branch `growth/a-listicles-2` (worktree `~/.t3/worktrees/aussiecamps-web/ava-a-listicles-2`). Edited only by this lane (Ava). Contract: `/Users/cristian/Developer/Webs/.growth-lanes/briefs/listicles-common.md`. Run 2 of the AussieCamps listicle programme; run 1 is in `a-listicles.md`.

## Pages (in order, one commit each)

| # | Slug | publishAt | Status |
|---|---|---|---|
| 1 | `best-caravan-rv-apps-australia` | 2026-10-26 | merged to main with content review fixes |
| 2 | `best-apps-working-holiday-australia` | 2026-10-27 | merged to main with content review fixes; hero replaced on main (banana plantation, 81d2bfc) |
| 3 | `best-weather-apps-camping-australia` | 2026-10-28 | committed 72e6d79 (self-reviewed; needs Opus or orchestrator final review) |
| 4 | `best-money-saving-travel-apps-australia` | 2026-10-29 | committed 7b185cd (self-reviewed; needs final review) |
| 5 | `hipcamp-alternatives` (Hipcamp chosen: see facts file) | 2026-10-30 | committed 975793c (self-reviewed; needs final review) |

Each page: facts file in `docs/growth/listicles/run2/`, hero from Wikimedia Commons (1600x900 plus 800 variant, credited in `docs/image-sources-planning-app.md`), screen figure in `lib/screen-figures.ts`, FAQ in `lib/article-faqs.ts`, row in `docs/growth/publish-schedule.md`.

## Notes
- Keyword map and slugs checked 2026-10-20: no existing guide owns caravan apps, working holiday apps, weather apps, money-saving apps or Hipcamp/CAMPS alternatives. `camping-weather-safety-australia` covers weather safety (not apps); link it, do not duplicate.
- Release data (`Scraper/data/australia_db.sqlite`): caravan-relevant facts are dump points (1,393, 230 with washout), water (3,004), rest areas (5,552) with "Heavy Vehicle Area" tags, park access notes (2WD, 4WD, high clearance), a few "Caravan Sites"/"Powered Sites" tags. No systematic caravan or big-rig fit tag: do not claim one.
- Weather in the app: Apple Weather (WeatherKit), current conditions plus a 7-day daily forecast on place pages; forecasts for trip arrival dates. No warnings, radar or fire danger.
- Screens used by run 1: cape-le-grand top, flinders-ranges top, adelaide-to-uluru map, perth-to-broome map, lucky-bay top, karijini top.

## Done
- Page 5 (Hipcamp alternatives) committed 975793c: hero Tidal River campground (CC BY-SA 4.0, badge softened), figure Cape Conran Coastal Park, FAQ, schedule row. Check: all pass except the protected count test (80 vs 77). All five pages are done.
- Page 4 (money-saving) committed 7b185cd: hero South Lefroy Bay (CC BY-SA 3.0 DE), figure Coffin Bay reported prices, FAQ, schedule row. Check: all pass except the protected count test (79 vs 77).
- Page 5 hero candidate found: 00_2214_Nitmiluk_National_Park.jpg (W. Bulach, CC BY-SA 4.0; it shows Nitmiluk Gorge Caravan Park inside the park, so word the alt accordingly) or Campground_at_Tidal_River.jpg.
- Page 3 (weather) committed 72e6d79: hero Storm over Kata Tjuta (CC BY-SA 4.0), figure Blue Mountains weather, FAQ, schedule row. npm run check: all pass except the protected count test (78 vs 77); similarity and assets pass.
- Setup and research plan.
- Facts files for all five pages started in `docs/growth/listicles/run2/` (caravan, WHM and weather complete).
- Heroes and screen figures for pages 1-2 committed (f1cf057). Screens chosen: p1 cape-hillsborough-np_middle, p2 rac-cable-beach-hp_top; planned p3 blue-mountains-np_middle (weather), p4 coffin-bay-np_middle (reported prices).
- Pages 1-2 fact-checked, committed (a86b329, ee3c2a2) and merged to main on 2026-10-20 with the orchestrator's content review fixes. My later disclosure rewording (d025882) was dropped in the rebase in favour of main's version.
- Similarity audit: disclosure sentences must differ per guide (paragraphs only; captions and table cells are not audited). Pre-check script: /tmp/ava-l2/bin/skel.py.
- Owner rule (2026-10-21) for pages 3-5: do not explain free vs Pass; say what the app has and does; price line only "free to download, with in-app purchases". Never call Pass data free.
- Overnight rule until 09:00: no subagents; draft and review myself; Opus only for final review.
- ATO and Fair Work pages block automated fetches (403/timeouts): their facts rest on official-page search extracts.

## Next
- Lane complete. Remaining: orchestrator final review of pages 3-5 (no Opus pass overnight), and the guide-count test bump to 80.

## Blockers
- `tests/rendered-html.test.mjs:61` asserts exactly 77 guides on main; the branch now has 80 (final) once all five pages land (protected file: orchestrator or foundation).
