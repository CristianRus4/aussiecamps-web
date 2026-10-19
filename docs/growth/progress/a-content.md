# A-content progress

Thread: A-content (Kai). Branch `growth/a-content`. Never push.

## Decisions and constraints found
- Every translatable guide (50) is translated in all 6 locales. Until A-foundation M1 is on main, any change to section, paragraph, tip, FAQ, source or priceTable-row counts on those guides fails `content:check`. Text-only edits (same counts) are safe now. After M1, structural changes drop that guide's locale pages to English + noindex until re-translated, so list touched slugs for the i18n threads in each handoff.
- App counts come from the SHIPPING database `Apps/Camping/Scraper/data/australia_db.sqlite` (release builds open `australia_db`, see `CampingPlacesDatabase.swift:90`), not `Aussie/Resources/aussie_db.sqlite` (legacy WikiCamps-derived snapshot). Read it from a /tmp copy.
- Count keys agreed with A-tools-hubs for `lib/data/product-facts.json`: `byState.<NSW|VIC|QLD|SA|WA|TAS|NT|ACT>.{campgrounds,dumpPoints,restAreas,water,toilets}`. There is no honest free-campground, caravan-park or showground count, so none are published. Rest-area counts wait for the final de-duplicated figures in product-facts.json.
- Preliminary counts (australia_db, campgrounds with coordinates): NSW 372, VIC 438 (350 DEECA + 88 Parks Victoria), QLD 517, SA 115, WA 260, TAS 27, NT 102, ACT 7. Dump points: NSW 347, VIC 181, QLD 324, SA 199, WA 238, TAS 80, NT 23, ACT 1 (total 1,393).
- Page `<title>` gets " | AussieCamps" from the layout template; the article `title` field (also the H1) is kept at 60 characters or fewer.

## Done
- (nothing committed yet)

## In progress
- Batch 1: 8 state camping-rules pages (research agents gathering official facts; then rewrite text-only, Opus xhigh fact-check per page).

## Next
- Batch 3 cost pages (text-only retitles + price refresh), batch 2 sleeping-in-car + free-camping hub, batch 4 dump points + caravan park vs holiday park.
- After M1 on main: add the extra official sources and tables (structural).

## Blockers
- None. Structural edits wait for A-foundation M1.
