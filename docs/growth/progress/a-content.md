# A-content progress

Thread: A-content (Kai). Branch `growth/a-content`. Never push.

## Decisions and constraints found
- A-foundation M1 is on main: a structurally stale translation is now a `content:check` warning (served in English, noindex) instead of a failure, and sections take an optional `table` (`section(heading, body, tips?, table?)`). Every structural change to a translated guide must be listed in the handoff for the i18n threads.
- App counts come from `lib/data/product-facts.json` (byState.<STATE>.{campgrounds, dumpPoints, restAreas, water}), built from the SHIPPING database `Apps/Camping/Scraper/data/australia_db.sqlite` (release builds open `australia_db`, see `CampingPlacesDatabase.swift:90`), not the legacy `Aussie/Resources/aussie_db.sqlite`. There is no honest free-campground, caravan-park or showground count, so none are published.
- Page `<title>` gets " | AussieCamps" from the layout template; the article `title` field (also the H1) stays at 60 characters or fewer.
- Prose links are budgeted at 4 per section (`linkProse` is called per section) and state names auto-link to the state rules pages, so a hub needs one state per paragraph and at most four states per section.
- Card surcharges on eftpos, Mastercard and Visa are banned from 1 October 2026 (RBA conclusions paper, 31 March 2026). Any page saying card surcharges are common is out of date.
- Gold Coast and Byron fine amounts only appear in news coverage, not on official pages: do not publish them.

## Tooling (in /tmp/a-content, not committed)
- `scripts/apply.mjs` (single-line site.ts articles) and `scripts/apply2.mjs` (expanded-articles blocks) regenerate an article from a JSON draft in `drafts/`; they refuse structural changes unless `--allow-structure`.
- `scripts/totext.ts` renders a page as numbered text for the fact-checkers; `pages/`, `sources/`, `factcheck/`, `research/` hold inputs and verdicts.

## Done (committed on the branch, not yet handed off)
- 8 state camping-rules pages: retitled, intros answer "can I free camp in <state>", rules corrected from official sources, per-state app counts. Text-only so far.
- 5 cost pages (drinks, eating out, flights, public transport, groceries): retitled with the year and a figure, prices refreshed to October 2026, outdated card-surcharge, Melbourne contactless and Vic half-price wording fixed. Plus the surcharge line on australia-travel-cost-2026.
- sleeping-in-car-australia and is-free-camping-legal-australia: full structural rewrites with state tables and official sources (uncommitted at time of writing).

## In progress
- Opus xhigh fact-checks: NSW, QLD, VIC, SA rules (running). Queue: TAS, WA, NT, ACT rules; 5 cost pages; sleeping-in-car; free-camping hub.
- After fact-checks: add official sources to the 8 rules pages (lists in /tmp/a-content/sources), rest-area counts in the intros, then hand off batch 1.

## Next (audit queue order, docs/growth/audit/summary.csv)
- P0: camping-fees-australia-2026, towing-caravan-australia-road-rules, campfires-camping-australia, melbourne-to-adelaide, flinders-ranges, red-centre-way, darwin-kakadu (confirmed fixes), road-trains, overseas licence, victoria-high-country, homepage Street View wording (after foundation's homepage work lands), support.
- P1: dump-points (with by-state table from product-facts), best-time-camping retitle, east-coast, brisbane-to-cape-trib, road-rules retitle, biosecurity retitle, campervan budget, driving rules, camping-with-dogs.
- Then best-camping-app comparison, road trips with app campground data (candidates in /tmp/a-content/roads), new pages per keyword-map.csv.

## Blockers
- None. Usage limit hit once (session reset); interrupted subagents were resumed.
