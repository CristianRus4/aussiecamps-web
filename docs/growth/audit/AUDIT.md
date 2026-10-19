# aussiecamps.app content audit (2026-10-19)

Scope: 77 English URLs scored (scorecards in this folder). GSC window 27 Aug to 19 Oct 2026. English pages: 5,687 impressions and 39 clicks. Whole site including locales: 10.2k impressions, 69 clicks, CTR 0.7%. Files: `summary.csv` (one row per URL, sorted), `keyword-map.csv` (68 clusters, one owner each).

Caveat: the official-source adjudication I received covered only 7 URLs and was cut off part-way through the darwin-kakadu entry. The 7 are adelaide-to-uluru, alcohol-coffee, australian-alps, road-signs, camping-rules-act, camping-rules-nsw and darwin-kakadu. Those 7 scorecards now keep only confirmed problems. On the other 21 FIX-FACTS pages the flags are still unverified, and `summary.csv` marks them "not adjudicated".

## What wins and what fails

| Content type | Pages | en impr | Clicks | CTR | Avg pos | Pages in top 10 | Zero-impr pages | Locale impr |
|---|---|---|---|---|---|---|---|---|
| Cost/price guides (2026) | 11 | 1,521 | 7 | 0.46% | 9.9 | 6 | 0 | +1,776 |
| State camping rules | 8 | 1,378 | 10 | 0.73% | 9.8 | 5 | 0 | +354 |
| Camping topic how-tos | 15 | 1,021 | 8 | 0.78% | 14.9 | 6 | 7 | +590 |
| Hubs, tools, legal | 7 | 1,031 | 5 | 0.48% | 55.5 | 0 | 4 | 0 |
| Route/destination guides | 20 | 449 | 8 | 1.78% | 43.6 | 1 | 10 | +124 |
| Driving rules and safety | 11 | 287 | 1 | 0.35% | 25.2 | 1 | 5 | +350 |
| App how-tos | 5 | 0 | 0 | n/a | n/a | 0 | 5 | 0 |

- **What ranks:** cost guides and state camping rules. Every page in both groups gets impressions, and they average position about 10. Translations of the cost pages earn more impressions (1,776) than the English pages do.
- **What fails is CTR.** Pages in positions 8-10 get 0-0.7% CTR, against about 3% expected. Examples: alcohol 2 clicks from 647 impressions, VIC rules 0 from 272, eating-out 0 from 212, domestic flights 0 from 149, NSW rules 2 from 421. Titles are generic or truncated (70-79 characters with the brand), and many lack the year or a number.
- **Routes and driving pages mostly don't rank.** Half the route pages and 5 of the 11 driving pages have no impressions. Route queries sit at positions 38-90. Route pages do have the best CTR when they show (1.8%).
- **App how-tos get no search traffic.** Merge them into /support/ or set them to noindex.
- **/tools/ gets 870 impressions at position 59 but only 2 clicks.** The calculator queries it is shown for ("distance calculator", 64 impressions) ask for a distance tool it doesn't have.
- **Accuracy is the main blocker.** 25 pages are FIX-FACTS (20 of them P0). Rules and fees pages state limits, passes and fees without a date or an official link.

## Top 15 actions

1. **sleeping-in-car-australia** (P0): fix the claim that rest areas allow 24 hours (Queensland allows 20). Add an official-sources block, then EXPAND. 546 en impressions plus 340 from locale copies. Flags not yet adjudicated.
2. **camping-rules-new-south-wales** (P0, was RETITLE P1): apply the 3 confirmed fixes (All Parks Pass scope and price, the duplicate pass sentence, the entry-fee overstatement). Then retitle: CTR is 0.5% on 421 impressions at position 8.4.
3. **alcohol-coffee-drink-prices-australia** (P1): retitle. It gets 647 impressions at position 9.2 with 0.3% CTR, and locale copies add 795 more. Rewrite the FAQ that promises rows the page doesn't have (confirmed).
4. **/tools/** (P2 REWRITE, high impact): add a distance and drive-time calculator and retitle to "Road trip calculator Australia". This covers 193 impressions of distance/time calculator queries that no page owns, plus 114 impressions of cost-calculator queries.
5. **camping-rules-act** (P0): fix 3 confirmed errors. Namadgi camping is not free. Casuarina Sands allows no camping. Namadgi allows fires in the fireplaces provided.
6. **camping-rules-victoria, -western-australia, -queensland** (P1 RETITLE): together 576 impressions and 2 clicks at positions 8-11.
7. **eating-out-australia-prices-2026** (P1 RETITLE): 0 clicks from 212 impressions at position 8.5. The 79-character title gets truncated.
8. **camping-rules-south-australia** (P0): Desert Parks Pass vs Ikara, fruit-fly wording, fire season by district. Add a section on campervan and roadside camping. 184 impressions.
9. **public-transport-costs-australia-2026** (P0): fix the Opal cap, the Myki/contactless contradiction, the end date of the Vic half-price fares and the permanent QLD 50c fare. Then retitle. 151 impressions plus 258 from locale copies.
10. **domestic-flight-costs-australia-2026** (P1 RETITLE): 0 clicks from 149 impressions at position 8.4.
11. **Homepage** (P0): change "Street View" to "Apple Look Around" in 11 places. Add a line on what is free and what needs the Pass. Shorten the meta description to 155 characters or less.
12. **dump-points-australia-guide** (P1): fix the public-toilet contradiction and the unsourced fines. Rewrite for "dump point near me" with an in-app call to action. 171 impressions at position 31.5.
13. **australia-grocery-prices-2026** (P0): the page gives two different weekly budgets (A$80-140 and A$100-170). CTR is already healthy (2.9%).
14. **Licence and towing cluster:** fix the towing FAQ licence/GCM error (it also appears in the FAQPage schema). Make one page the owner of the "campervan on a car licence" cluster (about 40 impressions across 5 phrasings). Merge driving-in-australia-overseas-licence into overseas-driver-licence-australia-state-guide.
15. **Remaining confirmed low-traffic fixes in one pass:**
    - darwin-kakadu: Gunlom is not on a sealed road; Jabiru has a supermarket; add a sources block.
    - australian-alps: the snow-chain rule applies to 2WD only, on named roads.
    - adelaide-to-uluru: park pass prices; it can be bought at the entry station.
    - road-signs: default speed limits by state.

## Confirmed factual errors (official-source checked)

The adjudication rejected 14 of the 25 original flags on the 7 checked pages. It confirmed 13 problems: 11 of the original flags plus 2 found while checking.

| Page | Error | Correct (source) |
|---|---|---|
| camping-rules-act | "Namadgi campgrounds mostly free, require registration" | Bookings essential, fees apply, max 7 nights (parks.act.gov.au Honeysuckle, bookings-and-permits) |
| camping-rules-act | Casuarina Sands offers "limited camping" | Day use only, no camping or fires; camp at bookable Cotter Campground (parks.act.gov.au) |
| camping-rules-act | Namadgi "prohibits campfires entirely ... year round" | Fires allowed in fireplaces provided, own wood, never on Total Fire Ban days (parks.act.gov.au/before-you-go/campfires) |
| camping-rules-nsw | All Parks Pass implied to exclude Kosciuszko | Covers all 45 fee parks incl. Kosciuszko; $190/1 yr, $335/2 yr; excludes camping fees, Skitube, Sydney Harbour island landing fees (nationalparks.nsw.gov.au annual passes) |
| camping-rules-nsw | "Most" NPWS campgrounds charge camping + vehicle entry | Only 45 of 890+ parks charge vehicle entry (same source) |
| camping-rules-nsw | Pass sentence duplicated in s.08 (editorial) | Keep one, in s.05 |
| darwin-kakadu | 2WD sealed roads "reach ... Gunlom" | Gunlom access is unsealed; many hire 2WDs excluded (kakadu.gov.au/plan/getting-around) |
| darwin-kakadu | "No supermarket in Kakadu" | Jabiru has one; Cooinda sells groceries (kakadu.gov.au/do/shopping) |
| darwin-kakadu | No sources block or FAQ (structural) | Add Parks Australia and NT Parks links |
| australian-alps | Chains required for all vehicles parkwide, "enforced at entry points" | Compulsory for 2WD only, June-Oct long weekends, on Alpine Way Thredbo-Tom Groggin, Kosciuszko Rd and Guthega Rd (NPWS) |
| adelaide-to-uluru | Park pass "bought in advance" | $38/3 days, $50/yr, under-18 free; online or at the entry station (uluru.gov.au/plan/passes) |
| road-signs | Default limit framed as "110 on many highways" | Default 100 km/h; 110 km/h in WA and NT; NT 130 km/h only where signed (Main Roads WA, nt.gov.au; the NT pages returned 403 to the checker) |
| alcohol-coffee | Beer FAQ describes schooner, carton and glass rows not in the table | Rewrite the FAQ to match the table, or add the rows (Numbeo 2026) |

Site-wide minor point: the footer says "74,000+ places offline" but the bundled SQLite has 73,945 Site rows. Use "about 74,000" or "73,000+".

## Cannibalisation pairs (pick the owner, cross-link the other)

- **australia-road-trip-fuel-cost-2026** (owns fuel cost) vs **road-trip-fuel-planning-australia** (range, remote stops)
- **overseas-driver-licence-australia-state-guide** (owner) vs **driving-in-australia-overseas-licence**: merge the second into the first
- Campervan licence: **campervan-driving-australia-safety-guide** vs **towing-caravan-australia-road-rules** vs the two overseas-licence pages
- **is-free-camping-legal-australia** (legality) vs **sleeping-in-car-australia** (sleeping in a vehicle)
- **eating-out-australia-prices-2026** vs **alcohol-coffee-drink-prices-australia**: both cover coffee prices; give coffee to one page
- **east-coast-road-trip-sydney-cairns** (Sydney-Cairns) vs **brisbane-to-cape-tribulation** (Brisbane start)
- **australia-road-rules-state-differences** vs **driving-in-australia-road-rules-visitors** vs **australian-road-signs-visitors-guide**
- **australia-travel-cost-2026** (cost hub) vs **campervan-road-trip-budget-australia**
- **campervan-driving-australia-safety-guide** vs **australia-road-trip-fatigue-wildlife-safety**: merge the second into the first
- The 8 **camping-rules-*** pages restate fees, fire bans and free-camping rules. Link to camping-fees, campfires and is-free-camping instead of repeating them.
- **how-to-plan-trip-aussiecamps** vs **how-to-use-aussiecamps-filters**; **choosing-campsite-australia** vs responsible-camping and weather-safety

## New-page opportunities (clusters with no good owner)

1. **Australia distance and drive-time calculator** (new tool on /tools/): 19 queries, 193 impressions, 0 clicks, positions 54-98.
2. **Camping in Australia beginner's pillar:** "camping in australia" (31 impressions, position 59.5) and "campamentos en australia" (43, position 34), plus "how to camp in australia". No page targets the head term.
3. **Campervan hire cost Australia 2026:** 107 impressions, almost all NL/DE/FR, such as "camper huren australie kosten" and "camper mieten australien kosten". The budget page has no hire-rate table and its locale copies sit at position ~73. Either add a dated hire-rate table there or create a dedicated page.
4. **Campervan licence answer:** about 36 impressions at positions 59-89. Repurpose driving-in-australia-overseas-licence as this page, or answer it at the top of the campervan safety guide.
5. **Smaller gaps, as sections:**
   - Great Ocean Walk hike-in camping: 10 impressions, position 75
   - Gibb River Road accommodation and stations: 6 impressions
   - Long-term caravan "lap of Australia" costs: 4 impressions
