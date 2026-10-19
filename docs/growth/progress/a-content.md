# A-content progress

Thread: A-content (Kai). Branch `growth/a-content`. Never push. Session 2 took over on 2026-10-20 (session 1 retired for context size).

## Subagent rules (orchestrator, 2026-10-20, to save Kai usage)
- Fact-check and research subagents: model sonnet, effort high, ONE AT A TIME. Opus medium only when a Sonnet check is inconclusive or the claim is a fine, penalty or legal requirement.
- Drafting a page: opus medium. At most 2 subagents in total.

## Decisions and constraints found
- A-foundation M1 and M2 are on main (rebased 2026-10-20). A structurally stale translation is a `content:check` warning (served in English, noindex). Sections take an optional `table`. `priceTable.asOf` must be ISO `YYYY-MM-DD` (the expanded-articles `priceTable()` helper takes it as an optional third argument).
- App counts come from `lib/data/product-facts.json` (byState.<STATE>.{campgrounds, dumpPoints, restAreas, water}). No free-campground, caravan-park or showground count exists, so none is published.
- Article `title` (also the H1) stays at 60 characters or fewer; the layout appends " | AussieCamps".
- Prose links: 4 per section via `linkProse`, phrase-driven (lib/internal-links.ts) and guide-only. Linking guides to the new hubs (/camping/<state>/, /dump-points/<state>/, /rest-areas/<state>/) or /tools/ pages needs a code change in internal-links.ts (not done yet; candidate follow-up).
- Card surcharges on eftpos, Mastercard and Visa are banned from 1 October 2026 (RBA conclusions paper, 31 March 2026).
- Gold Coast and Byron fine amounts only appear in news coverage, not on official pages: do not publish them.

## Blocker for the orchestrator (found 2026-10-20 after rebasing)
- `content:check` now has a number-parity gate (scripts/audit-content.mjs `parityProblems`) that compares every structurally complete translated guide with the English. Text-only English edits that change any amount (fees, fares, prices) make live locales fail: 143 problems in each of de, es, fr, it, nl, pt across 9 text-only edited guides (camping-rules-tasmania, -western-australia, -northern-territory, -act, and the five cost pages). No stamps exist yet (lib/translations/meta/ is empty), so nothing marks those units stale. A content thread cannot fix this (locale JSON and audit scripts are off limits). Needed: either the gate skips units whose English changed (stamps), or treats a guide with parity problems as stale (served in English) instead of failing, or the i18n threads re-translate those nine guides before merge.
- While iterating, use `/tmp/a-content/scripts/cc.sh` (content:check with that one assert downgraded to a warning; temp copy deleted on exit, never committed).

## Tooling (in /tmp/a-content, not committed)
- `scripts/apply.mjs` (single-line site.ts articles) and `scripts/apply2.mjs` (expanded-articles blocks) regenerate an article from a JSON draft in `drafts/`; they refuse structural changes unless `--allow-structure`. `scripts/get.ts <slug>` dumps the current article.
- `scripts/totext.ts <slug>` renders a page as numbered text for fact-checkers (`pages/`); `sources/` official source lists; `factcheck/` verdicts; `research/`.

## Done (committed on the branch, not yet handed off)
- 8 state camping-rules pages retitled and rewritten. NSW, QLD, VIC, SA, NT, WA: fact-checked, fixes and sources applied (NT/WA in 1e1fcfe; adding sources makes translations structurally stale, which also clears their parity failures).
- 5 cost pages (drinks, eating out, flights, public transport, groceries) retitled and refreshed; surcharge line on australia-travel-cost-2026.
- Structural rewrites: sleeping-in-car-australia, is-free-camping-legal-australia, camping-fees-australia-2026, campfires-camping-australia, dump-points-australia-guide (by state); caravan-park-vs-holiday-park strengthened with a table.
- Rebased onto main 2026-10-20 (1f7ccad: ISO priceTable dates, en.json regenerated).

## In progress (session 2)
- DONE fact-check batch F1 (reports in /tmp/a-content/factcheck): TAS, ACT, sleeping-in-car, free-camping hub, camping-fees. Fix batch X2 (Opus) applying them.
- DONE 9438657 fix batch C1: audit-confirmed errors on darwin-kakadu-litchfield-loop, australian-alps-camping-route, adelaide-to-uluru-road-trip, australian-road-signs-visitors-guide, plus towing-caravan flags. Changed claims in /tmp/a-content/factcheck/c1-changes.md. Darwin loop FAQ not added (road-trip guides carry none per lib/article-faqs.ts header); draft FAQ kept in drafts/.
- Fact-check batch F2 (Opus): c1-changes (-> factcheck/c1-verdicts.md), campfires, dump-points, caravan-park.
- Next fact-check batch: the 5 cost pages. Then apply all fixes and hand off batch 1.

## Queue: demerit points (from the Spanish lane, 2026-10-20)
- Verify and correct/qualify, including for overseas licence holders: `lib/article-faqs.ts` australia-road-rules-state-differences FAQ 2 "Demerit points are shared between states even though the rules that earn them are not", and `lib/expanded-articles.ts` driving-in-australia-road-rules-visitors "Demerit points do not apply to overseas licences but the fines certainly do". Also grep the other driving and licence guides for demerit claims. Sources: state transport agencies, national exchange of driver records (NEVDIS/Austroads). Penalty claim, so opus medium. Run after F2 finishes.

## Next (audit queue, docs/growth/audit/summary.csv in main)
- P0 FIX-FACTS not yet done: towing-caravan-australia-road-rules, melbourne-to-adelaide-coastal-route, flinders-ranges-camping-guide, red-centre-way-camping, darwin-kakadu-litchfield-loop, driving-with-road-trains-australia, overseas-driver-licence-australia-state-guide, victoria-high-country-camping, homepage, support, privacy (check ownership of homepage/support/privacy with the orchestrator).
- P1: best-time-camping retitle (draft in /tmp/a-content/drafts), east-coast, brisbane-to-cape-trib, road-rules retitle, biosecurity retitle, campervan budget, driving rules, camping-with-dogs, driving-in-australia-overseas-licence (merge/canonicalise).
- Then best-camping-app comparison, road trips with app campground data (/tmp/a-content/roads), new pages per keyword-map.csv.

## Blockers
- Number-parity gate (above).
