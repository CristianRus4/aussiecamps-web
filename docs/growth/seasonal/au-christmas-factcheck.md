# Fact-check: "Camping Over Christmas and Summer 2026-27 in Australia"

Slug: `christmas-summer-camping-australia-2026-27` (lib/expanded-articles.ts and lib/article-faqs.ts). Checked 21 October 2026 against live official pages with curl and WebFetch (no browser). Where a site returned HTTP 403 (parks.qld.gov.au, all nt.gov.au hosts, business.vic.gov.au, SA and Tasmanian public-holiday pages) it was not worked around; those items rely on search-result extracts that name the official page and are labelled **[EXTRACT]**.

Verdicts: **CONFIRMED**, **WRONG**, **OVERSTATED** (claims more than the source says), **UNVERIFIED**.

---

## Summary of items needing change

| # | Where | Verdict | Recommended replacement |
|---|---|---|---|
| 1 | Intro: "We read each official page on 21 October 2026, and where an agency publishes nothing we say so." | OVERSTATED | "We checked each agency's pages on 21 October 2026. Queensland Parks and the Northern Territory Government block automated reading, so for those we relied on search summaries of their official pages and say so; where an agency publishes nothing we say so." |
| 2 | Section 1: "Check your own state's public holiday page, because the substitute day differs between states." and highlight "NSW, Queensland and WA add Monday 28 December" | OVERSTATED (implies other states differ; Victoria, SA, Tasmania and NT also show Monday 28 December in 2026 per [EXTRACT]) | "Boxing Day falls on a Saturday, so Monday 28 December is an extra public holiday in New South Wales, Queensland and Western Australia, and search summaries of the other states' official lists show the same Monday. Check your own state's public holiday page." Highlight: "Monday 28 December is a public holiday in NSW, Queensland and WA" |
| 3 | Section 1: "Most states start the summer break between 11 and 18 December" | OVERSTATED (minor: 11 to 18 December are the last school days, in all six states) | "In all six states the last day of term 4 falls between 11 and 18 December, and students return in late January or early February" |
| 4 | Booking text: "Western Australia opens most campgrounds 180 days ahead" | OVERSTATED (applies to campgrounds on Park Stay WA outside Ningaloo; many WA campgrounds are not bookable) | "Western Australia opens bookable campgrounds outside the Ningaloo Coast 180 days ahead" |
| 5 | Booking text: "Tasmania's Parks and Wildlife Service says bookings open 180 days ahead at Fortescue Bay" plus source entry | CONFIRMED on a different page; the cited source does NOT support it | Keep text. Change the source to https://parks.tas.gov.au/explore-our-parks/tasman-national-park/fortescue-bay-camping (the cited "fortescue-bay-campground-booking" page, last modified 21/04/2026, still says "6 months in advance from the 1st day of the month" and does not mention 3 November). |
| 6 | Booking text: "Tasmania ... has paused new bookings for stays from 3 November 2026 while it switches to a new online booking system on that date." | OVERSTATED (pause is published for Fortescue Bay and Freycinet only) and STALE 3 days after publishAt | "Tasmania's Parks and Wildlife Service said its new Parks Online Booking System would start on 3 November 2026, and it paused new bookings at Fortescue Bay and Freycinet for stays from that date until the new system opened. Book Tasmanian campgrounds through parks.tas.gov.au." |
| 7 | Table, Queensland: "Up to 12 months ahead" (also FAQ 1) | UNVERIFIED on a current page (parks.qld.gov.au 403). Live official support is only a 2020 ministerial statement: "From tomorrow Queenslanders can book most campsites in national parks 12 months in advance" (https://statements.qld.gov.au/statements/90008) | "Most campsites up to 12 months ahead (Queensland Government, 2020); check the Queensland National Parks Booking Service" |
| 8 | Table, Queensland: "K'gari Great Walk camps limit forward booking to 14 days from 1 November to 28 February" | UNVERIFIED (pages 403). [EXTRACT] from parks.qld.gov.au K'gari camping pages and a park alert titled "K'gari (Fraser Island) Great Walk - advanced booking restriction" all agree; the alert found covered 2024-25 | Keep only hedged: "Queensland Parks restricts K'gari Great Walk camp bookings to 14 days ahead each year from 1 November to 28 February; check the park alerts" (or remove) |
| 9 | Table, WA: peak note "Up to 14 nights in a park if any night falls in a WA school holiday period" and section 3 "Western Australia limits a stay to 14 nights ... and 28 nights at other times." | OVERSTATED (source is the Ningaloo Coast booking guide only) | Table: "Ningaloo Coast: up to 14 nights in a park if any night falls in a WA school holiday period". Text: "At Ningaloo Coast campgrounds, Western Australia limits a stay to 14 nights in a park if any night falls during a WA school holiday period, and 28 nights at other times." |
| 10 | Section 3: "Western Australia says bookings can be amended or cancelled up to one day before travel." | OVERSTATED (DBCA said it of the south-west campgrounds moving to Park Stay WA) | "DBCA says Park Stay WA bookings at its newly bookable south-west campgrounds can be amended or cancelled up to one day before travel." |
| 11 | Table, SA: "Up to 12 months ahead" (also FAQ 1) | UNVERIFIED as current. Only NPWS SA pages dated 25 Oct 2022 and 13 May 2020 (https://parks.sa.gov.au/insider-tips/happy-campers-part-four: "You can book campsites up to a year in advance"). No current booking terms page found (several candidate URLs 404) | "Up to 12 months ahead, according to NPWS SA advice last updated in 2022" |
| 12 | Table, SA peak note: "Popular parks are busiest from mid-December to the end of January" | OVERSTATED (source says this of Lincoln and Coffin Bay national parks only) | "Lincoln and Coffin Bay national parks are busiest from mid-December to the end of January" |
| 13 | Table, NT: "Campsites up to 6 months ahead" | UNVERIFIED (nt.gov.au 403; no official extract found stating 6 months; one secondary source says 3 months for Central Valley) | Remove, or "Book online before you go; the NT does not publish one window we could read" |
| 14 | Table, NT: "Book and pay online for designated campsites" | CONFIRMED via Tourism Top End (https://www.tourismtopend.com.au/camping-and-walking-fees: "In Northern Territory (NT) parks and reserves, you must book and pay a fee online for: Designated campsites"); nt.gov.au itself [EXTRACT] | Keep; add a source entry for it (the sources list has no NT booking source). |
| 15 | Fire table, Victoria row | OVERSTATED (drops the conditions the source says you "must" meet) | "Campfires are not allowed; solid-fuel, chemical-fuel and liquid-fuel (such as methylated spirits) barbecues and stoves are prohibited; a gas or electric barbecue or stove made of non-flammable material, designed for meals and stable in use may be used only to cook, supervised, with nothing flammable within 3 metres and a hose or at least 10 litres of water" |
| 16 | Fire table, Queensland row: "Wood-fuelled fires and braziers are prohibited" | OVERSTATED in the permissive direction (source bans lighting any fire, incl. QPWS fire rings and barbecues and heat-bead appliances) | "Lighting fires is prohibited in a declared fire ban area, including QPWS fire rings and barbecues, wood-fuelled braziers and barbecues and heat-bead or ash-producing appliances; electric barbecues and gas and spirit stoves are allowed if they cannot throw embers or ignite ground fuels, are attended and are suitably contained" |
| 17 | Fire table, Tasmania row | CONFIRMED statewide, but incomplete for a campground the guide names: Freycinet bans gas and fuel stoves on TFB days | Append: "; at Freycinet no naked flames, including gas and fuel stoves, may be used on Total Fire Ban days" |
| 18 | Fire text: "Tasmania's fire service declares it for national parks and reserves in the affected area." | OVERSTATED (TFS declares a ban for an area; Parks says it applies to parks in that area) | "and in Tasmania the Tasmania Fire Service declares it, and Parks and Wildlife says the ban applies to national parks and reserves in the affected area." |
| 19 | FAQ 3: "In New South Wales, Victoria and Western Australia, solid-fuel and liquid-fuel stoves and barbecues are prohibited, ..." | OVERSTATED by omission: implies gas is fine in NSW parks, but NPWS says visitor-owned gas and electric cookers are "generally prohibited" | "It depends on the state and the fuel. Solid-fuel and liquid-fuel stoves are banned on total fire ban days in New South Wales, Victoria, Western Australia and Tasmania. In NSW national parks visitor-owned gas and electric cookers are generally prohibited too, except inside a caravan or its enclosed annexe. Victoria and Western Australia allow gas barbecues that meet set conditions, Tasmania allows electric and LPG cookers (but not at Freycinet), Queensland allows gas and spirit stoves that are contained and attended, and South Australia bans all fires and most barbecues, including gas, in parks. Check the state fire agency on the day." |
| 20 | North section: "Tourism NT gives the Northern Territory season as October to May" | UNVERIFIED attribution (the Tourism NT water-safety page read gives no months; NT Government gives 1 October to 31 May [EXTRACT], NT Health factsheet says to 1 June [EXTRACT]) | "The NT Government gives the Northern Territory stinger season as 1 October to 31 May" (label as from nt.gov.au, which blocks automated reading) |
| 21 | North section: "DBCA says box jellyfish and irukandji are most prevalent in the Kimberley from November to April" | CONFIRMED, but on a page not in the sources (cited hazards page says "tropical waters", not Kimberley) | Keep; add source https://exploreparks.dbca.wa.gov.au/tourism-region/kimberley |
| 22 | North section: cyclone season "1 November to 30 April" | CONFIRMED (BoM) but no BoM source listed | Add source https://www.bom.gov.au/climate/cyclones/australia/ |
| 23 | Booked-out section: "Main Roads WA lists 63 rest areas ... up to 24 consecutive hours" and FAQ 4 | CONFIRMED, but no Main Roads WA source listed | Add source https://www.mainroads.wa.gov.au/Documents/4.RCN-D15^23120754.PDF (the PDF says "Printed August 2025") |
| 24 | Booked-out section: "...is usually the quickest answer,." | Typo | "...is usually the quickest answer." |
| 25 | Section 3 text: "Discovery Bay, Lake Mombeong and Swan Lake have a 2-night minimum" | Minor wording (reads as three places) | "Lake Mombeong and Swan Lake in Discovery Bay Coastal Park have a 2-night minimum" |

---

## Detailed findings

### Section "When the 2026-27 peak falls"

- Christmas Friday 25 Dec 2026, New Year's Day Friday 1 Jan 2027, Boxing Day Saturday: **CONFIRMED** (NSW, Qld, WA pages; weekdays checked).
- NSW, Qld, WA additional holiday Monday 28 December: **CONFIRMED**. NSW: "3 Additional Day ... Monday 28 December 2026" (https://www.nsw.gov.au/about-nsw/public-holidays). Qld: "Boxing Day / Saturday 26 December and Monday 28 December" (https://www.qld.gov.au/recreation/travel/holidays/public). WA: "Monday 28 December" and "When Boxing Day falls on a Saturday the next following Monday is also a public holiday" (wa.gov.au page).
- "the substitute day differs between states": **OVERSTATED** (item 2). Victoria's official page (403) is summarised in search as "Saturday 26 December Monday 28 December" [EXTRACT]; SA, Tasmania and NT also show Monday 28 December [EXTRACT, per drafter notes]. Tasmania may observe Boxing Day itself on Monday rather than adding a day, but the date is the same.
- School holiday table, all six rows: **CONFIRMED**.
  - NSW: "Term 4 : Tuesday 13 October to Thursday 17 December"; 2027 "Term 1 : Wednesday 3 February to Friday 9 April" (Eastern, "First to last days for students"); Western "Term 1 : Wednesday 10 February". https://education.nsw.gov.au/schooling/calendars/2026 and /2027.
  - Victoria: "Monday 5 October to Friday 18 December 2026"; "(students start Thursday 28 January in government schools)". https://www.vic.gov.au/school-term-dates-and-holidays-victoria
  - Queensland: "Term 4: Tuesday 6 October to Friday 11 December"; 2027 "Term 1 : Wednesday 27 January to Thursday 25 March". Note the 2027 dates are on https://education.qld.gov.au/about-us/calendar/future-dates, not the cited term-dates page; consider adding it.
  - WA: "Monday 12 October to Thursday 17 December"; "Monday 1 February to Friday 9 April". https://www.education.wa.edu.au/future-term-dates
  - SA: "Term 4 – Monday 12 October to Friday 11 December"; the page lists "Summer holidays – Saturday 12 December to Wednesday 27 January" and 2027 Term 1 "27 January to 9 April". The article's "Late January: the department lists 27 January" is a fair hedge of that internal conflict. CONFIRMED.
  - Tasmania: "19 October – 18 December" (2026) and "4 February – 9 April" (2027). https://www.education.tas.gov.au/about-us/term-dates/
- FAQ 2 (term 4 ends 11 to 18 December; term 1 from 27 January to 4 February; WA 1 Feb; NSW 3 Feb, 10 Feb Western division): **CONFIRMED**.

### Section "Booking windows by state and territory"

- Victoria four releases a year, about 6 to 9 months ahead: **CONFIRMED** ("Bookings will be released four times per year, for bookings approximately 6-9 months in advance.").
- Victoria summer 18 Dec 2026 to 28 Feb 2027 already open: **CONFIRMED** ("currently open to book until 28 February 2027"; key-dates row "18 December 2026 to 28 February 2027 ... Bookings are currently open for all locations across the state.").
- Victoria no ballot: **CONFIRMED** ("No, peak season will be managed as part of the quarterly bookings release program.").
- "we found no ballot published by the other agencies": acceptable as an absence statement. I found no 2026-27 ballot either. The old Freycinet ballot PDF is gone (drafter notes).
- WA 180 days: **CONFIRMED** for Park Stay WA ("Bookings can be made up to 180 days (approx. six months) before arrival.", https://parkstay.dbca.wa.gov.au/; DBCA news 13 July 2026; Ningaloo guide "For campgrounds outside the Ningaloo Coast World Heritage Area, bookings open at midnight AWST, 180 days"). "most campgrounds" is **OVERSTATED** (item 4). Consider adding parkstay.dbca.wa.gov.au as a source.
- Ningaloo monthly, first Tuesday, 10 am AWST: **CONFIRMED** ("Bookings open monthly on the first Tuesday of the month at 10:00am AWST (Perth time)", PDF "Information current at September 2026", adopted September 2026). Note the guide also says the "last date opened may sometimes be brought forward".
- Tasmania 180 days at Fortescue Bay: **CONFIRMED** on https://parks.tas.gov.au/explore-our-parks/tasman-national-park/fortescue-bay-camping ("Bookings open 180 days in advance."). The cited booking-form page contradicts it ("6 months in advance from the 1st day of the month"), so swap the source (item 5).
- Tasmania pause from 3 November 2026: **CONFIRMED** for Fortescue Bay and Freycinet ("PWS have paused taking new bookings for stays from and including, 3 November 2026."); generalised to all of PWS in the text: **OVERSTATED**, and goes stale on 3 November (item 6).
- Honeymoon Bay "only open over summer holidays and at Easter": **CONFIRMED** ("The sites are only open over summer holidays and at Easter."). Useful extra: Freycinet has "From 18 December to 10 February ... a maximum stay of 10 nights".
- NSW "Set per campground; the agency does not publish a single window": **CONFIRMED** in substance. The NPWS terms refer to "If the property's booking window permits" (https://www.nationalparks.nsw.gov.au/campground-accommodation-booking-faqs). Woody Head quote "You'll need to book with plenty of time to secure your campsite." **CONFIRMED**. Consider citing the terms page too.
- Queensland 12 months, K'gari 14 days: **UNVERIFIED** (items 7, 8). No Queensland booking source appears in the sources list at all.
- SA 12 months: **UNVERIFIED** as current (item 11). SA peak note **OVERSTATED** (item 12).
- NT 6 months: **UNVERIFIED** (item 13). NT book and pay online: **CONFIRMED** via Tourism Top End (item 14).

### Section "Christmas rules at popular campgrounds"

- Tidal River 7 minimum, 14 maximum, Sunday 20 December to Sunday 24 January, Sunday arrival and departure: **CONFIRMED** (source says "7 day minimum and 14 day maximum").
- Banksia Bluff same limits 19 Dec 2026 to 23 Jan 2027: **CONFIRMED** (arrival and departure Saturday).
- Lake Catani 26 Dec 2026 to 9 Jan 2027: **CONFIRMED**.
- Lake Mombeong and Swan Lake 2-night minimum 18 Dec 2026 to 31 Jan 2027: **CONFIRMED** (wording fix item 25).
- WA 14 nights / 28 nights: **OVERSTATED** (Ningaloo only, item 9).
- Three campsites per transaction: **CONFIRMED**.
- Parks Victoria 100% at 30+ days, 50% at 8 to 29 days, none inside 8 days: **CONFIRMED**. Cancelled site goes back online straight away: **CONFIRMED** ("it becomes available immediately").
- WA amend or cancel up to one day before: **OVERSTATED** (item 10).
- FAQ 1 Tidal River and Cape Conran 7-night minimums: **CONFIRMED**.

### Section "Total fire bans and the fire danger season"

- NSW RFS Commissioner declares: **CONFIRMED**. Bush fire danger period "October to March": **CONFIRMED** on the NPWS page (some councils start earlier; optional "and can start earlier in some areas").
- Victoria CFA Chief Officer; can declare even when rating isn't Extreme: **CONFIRMED** ("Total Fire Bans can be declared even if the Fire Danger Rating isn't 'extreme'.").
- Victoria FDP by municipality, as early as October, as late as May: **CONFIRMED**.
- WA DFES by local government area: **CONFIRMED** ("TFBs are declared using the whole local government boundary."). WA burning periods set by local government: consistent with drafter notes; not on a page I read as a statement. Low risk.
- Tasmania: wording **OVERSTATED** (item 18).
- Queensland: QFD fire bans normally cover a whole local government area including parks and forests; QPWS may prohibit fires: **CONFIRMED** (https://www.qld.gov.au/recreation/activities/camping/fires). "does not use the term in the same way": acceptable hedge; the same page itself mentions "total fire ban" once.
- "applies in national parks as well as on private land": consistent with DFES ("illegal to light ... a fire in the open air") and Qld ("cover an entire local government area, including parks and forests"); acceptable.
- SA CFS 2026/27: **CONFIRMED** (Flinders, West Coast 15 Oct 2026 to 15 Apr 2027; Riverland, Murraylands 1 Nov 2026 to 30 Apr 2027; several districts "TBA"). Will date: the TBA districts will be declared before January, but the sentence is dated "by 21 October", so fine.
- Table, NSW row: **CONFIRMED** (quotes on https://www.nationalparks.nsw.gov.au/safety/fire-safety/fire-bans).
- Table, Victoria row: **OVERSTATED** (item 15). Liquid fuel ban is on CFA "Can I or can't I" (https://www.cfa.vic.gov.au/warnings-restrictions/total-fire-bans-and-ratings/can-i-or-cant-i: "Cooking with liquid fuels such as methylated spirits is also banned outdoors during Total Fire Ban days."); add this source.
- Table, Queensland row: **OVERSTATED** (item 16).
- Table, WA row: **CONFIRMED** (illegal to light, maintain or use a fire in the open air; solid or liquid fuel cookers not allowed where not fully enclosed; "$1,000" infringement). Optional addition: gas barbecue allowed only "if it has an enclosed flame" in an authorised area with 5 metres cleared.
- Table, SA row: **CONFIRMED** ("All fires and most barbecues (including gas and liquid fuel) are not allowed"; page notes some parks with fixed barbecues still allow them "as long as the park has not been closed"; hotline 1800 362 361).
- Table, Tasmania row: **CONFIRMED** statewide; add the Freycinet exception (item 17).

### Section "Reading the fire danger rating"

- Four levels and their messages; BoM data up to four days; rating is about danger not likelihood: **CONFIRMED** (CFA and CFS pages).
- Catastrophic: lives likely to be lost; safer place early in the morning or the night before; do not be in bushfire risk areas: **CONFIRMED**.

### Section "The north in summer"

- Wet season November to April, far north NT from about October: **CONFIRMED** (BoM monsoon page). Cyclone season 1 Nov to 30 Apr: **CONFIRMED** (BoM), source missing (item 22).
- Qld stinger season November to May, present all year, stinger nets, 000, vinegar, seek medical aid if in doubt: **CONFIRMED** (https://www.qld.gov.au/emergency/safety/recreation/dangerous-marine).
- Tourism NT October to May: **UNVERIFIED** attribution (item 20).
- DBCA Kimberley November to April: **CONFIRMED** (item 21).
- Qld crocodile "stay at least 5 metres back ... never swim": **CONFIRMED** ("Always stay 5 metres back from the water's edge and never paddle or swim in Croc Country."). The page's main camping advice is to camp away from the water or on a high bank; optional addition.

### Section "Booked out? Where else to stay"

- Qld 20 hours unless signed, not camping sites: **CONFIRMED**.
- WA 63 rest areas, 24 consecutive hours: **CONFIRMED**; source missing (item 23).
- NSW "You must not camp in rest areas": **CONFIRMED**.
- Victoria state forests 20 metres from waterways, 28 consecutive nights: **CONFIRMED** (https://www.vic.gov.au/camping). Campfires not allowed on TFB days: **CONFIRMED**.
- FAQ 4: **CONFIRMED** (Parks Victoria live cancellations, state forests, Qld 20 hours, WA 24 hours at 63 rest areas). Optional: add "though Queensland says rest areas are not camping sites".

### Section "Using AussieCamps over summer"

Not assessed beyond rule claims. It makes no agency rule claim; it says the sign and road authority decide whether you may sleep at a rest area and tells readers to check the agency and fire service. OK.

### Sources list check

- "Parks and Wildlife Service Tasmania: Fortescue Bay campground booking" does not support 180 days or the 3 November pause (item 5).
- "NPWS SA: popular campsites" is dated 25 October 2022 (item 11).
- "Explore Parks WA: Ningaloo Coast camping booking FAQ" supports the 14/28-night limits but only for Ningaloo (item 9).
- "Queensland Department of Education: term dates" covers 2026 term 4; 2027 term 1 is on the future-dates page.
- Missing sources for claims in the text: any Queensland Parks booking source, any NT booking source, BoM cyclone season, DBCA Kimberley page, Main Roads WA rest-area PDF, CFA "Can I or can't I" (liquid fuel), Park Stay WA (180 days).

### Will go stale before 31 January 2027

- Tasmania "has paused new bookings ... while it switches" (stale from 3 November 2026, three days after publishAt). See item 6.
- SA CFS "others still to come" (fine because dated "by 21 October").
- Victoria's Fire Danger Period dates are not printed, so no issue.
- Ningaloo release table not printed, so no issue.
