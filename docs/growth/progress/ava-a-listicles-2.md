# ava-a-listicles-2 progress

Branch `growth/a-listicles-2` (worktree `~/.t3/worktrees/aussiecamps-web/ava-a-listicles-2`). Edited only by this lane (Ava). Contract: `/Users/cristian/Developer/Webs/.growth-lanes/briefs/listicles-common.md`. Run 2 of the AussieCamps listicle programme; run 1 is in `a-listicles.md`.

## Pages (in order, one commit each)

| # | Slug | publishAt | Status |
|---|---|---|---|
| 1 | `best-caravan-rv-apps-australia` | 2026-10-26 | merged to main with content review fixes |
| 2 | `best-apps-working-holiday-australia` | 2026-10-27 | merged to main with content review fixes; hero replaced on main (banana plantation, 81d2bfc) |
| 3 | `best-weather-apps-camping-australia` | 2026-10-28 | drafted in /tmp/ava-l2/p3.ts; needs hero, figure, FAQ, review |
| 4 | `best-money-saving-travel-apps-australia` | 2026-10-29 | store data + partial feature research |
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
- Pages 1-2 fact-checked, committed (a86b329, ee3c2a2) and merged to main on 2026-10-20 with the orchestrator's content review fixes. My later disclosure rewording (d025882) was dropped in the rebase in favour of main's version.
- Similarity audit: disclosure sentences must differ per guide (paragraphs only; captions and table cells are not audited). Pre-check script: /tmp/ava-l2/bin/skel.py.
- Owner rule (2026-10-21) for pages 3-5: do not explain free vs Pass; say what the app has and does; price line only "free to download, with in-app purchases". Never call Pass data free.
- Overnight rule until 09:00: no subagents; draft and review myself; Opus only for final review.
- ATO and Fair Work pages block automated fetches (403/timeouts): their facts rest on official-page search extracts.

## Next
- Page 3: hero from Commons (search myself), screen figure blue-mountains-np_middle, FAQ, insert /tmp/ava-l2/p3.ts, self-review, commit.
- Page 4: finish research myself, draft, commit. Page 5: research Hipcamp, draft, commit.

## Blockers
- `tests/rendered-html.test.mjs:61` asserts exactly 75 guides; it must become 80 once all five pages land (protected file: orchestrator or foundation).
