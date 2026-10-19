# i18n-nl progress (Kai account)

Dutch (nl) on both sites. Branches: `i18n/a-nl` (aussiecamps-web), `i18n/k-nl` (kiwicamping-web). Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-nl`, `~/.t3/worktrees/kiwicamping-web/i18n-k-nl`.

## State at start (2026-10-19)
- Both sites already 100% "translated" in nl (AU 3223 units, NZ 2334 units), engine audit clean.
- Quality problems found: literal headings and calques, "campground" left in English, "loospunt" vs app's "Lozingspunten", AU prices as "80 AUD" but NZ as "NZ$ 15", app list labels not matching the app (Leuk / Wil ik heen / Punaises), "offline kaarten" and "offline kampeerkaart" wording (6 units), unstressed "jouw".

## Done
- [x] Style guide `docs/translation-style/nl.md` (identical in both repos), with glossary and evidence.
- [x] UI, support, privacy, terms rewritten on both sites (handoff 1, merged). Judge 4.45 (AU) / 4.4 (NZ); every failing unit fixed.
- [x] Privacy rebuilt for the 7-section English page (GA4 section), consent namespace translated (both sites).
- [x] AU guides: camping rules for 7 states/territories (NSW, VIC, WA, SA, QLD, ACT, TAS; NT in progress), dump points, sleeping in your car, drink, eating-out, grocery, public transport and domestic flight prices, travel cost, interstate biosecurity, towing a caravan, fuel cost, best time to camp, caravan park vs holiday park, road rules by state, camping fees.
- [x] NZ guides: grocery prices, DOC huts, DOC campsite rules, campervan road rules, speed limits, fuel cost, public transport, towing a caravan, travel cost, biosecurity, eating out, road signs, domestic flights, WoF and registration, accommodation costs, volcanic safety, beer/wine/coffee prices, camping with dogs.

## In progress
- Full rewrite pass, every unit, both repos. Order: UI, support/privacy/terms, guides by English impressions (pages-3m.tsv).

## Next
- Road trips, Kiwi legacy pages, consent/article/tools namespaces and data-guide link markup once the foundation milestones merge (wait for the orchestrator's message).
- A-foundation M1 is on main and done for nl (consent, GA4 privacy section). Hand-off check: `npx tsx scripts/audit-content.mjs --strict --locale nl`. Guide sections may gain `table: { caption, head, rows }`.
- A-foundation M2: road trips translatable, `<a data-guide>` markup in en.json bodies, `npm run translations:stamp -- --locale nl` after each batch.

## Working method (to resume)
- Work files are made from `translation-engine packet --locale nl --all` and split per page under /tmp/nl-work/{a,k}/ (scratch, not in the repo; regenerate with the same command if lost).
- Workers write values files; this thread lints (Dutch lint script in /tmp/nl-work/scripts/lint.py), edits, dry-runs and applies. Single writer per locale file.

## Open questions for the orchestrator
- State and island names are protected terms (house rule), so Dutch copy says "Tasmania", "het South Island". Dutch media mostly write Tasmanië, Noordereiland/Zuidereiland, West-Australië. Allowing nl exonyms would need a protectedTerms exception per locale; not changed.

## English source issues noticed (AU)
- camping-rules-new-south-wales sections[7].body[3] repeats the All Parks Pass sentence of sections[4].body[1].
- camping-rules-western-australia sections[7].body[2] and [3] both say a closed campground can cost a full day.
- camping-rules-western-australia sections[1].tips (Camp booking / Park entry / Road and permit check) don't match that section (roadside and remote camping).
- camping-rules-western-australia faq[1][1] says "A holiday park pass covers entry for a month or more": the WA pass is the "Holiday Pass" (not a holiday park pass); verify its validity period against DBCA.
## English source issues (both sites)
- pages.support sections[5].paragraphs[0] (AU and NZ): "Map and place details are free, together with two saved lists." conflicts with the Pass boundary in THREADS.md (only BookEasy/BookIt stays and tours are free). Dutch mirrors the English for now.
## English source issues (NZ)
- new-zealand-grocery-prices-2026 sections[3].body[0] names Countdown (now Woolworths NZ) and calls Countdown and New World "the two big chains" (New World and Pak'nSave are both Foodstuffs).
- new-zealand-grocery-prices-2026 faq[0][1] does not answer "how much per week" (the NZ$110-180 figure is only in sections[6]) and claims dated per-item figures the page does not have.
- doc-huts: Great Walks count is 11 since the Hump Ridge Track joined; avoid writing "ten".
- alcohol-coffee-drink-prices-australia faq[0][1] promises dated prices for craft beer, a bottle-shop carton and wine by the glass; the price table has none of those. priceTable.rows[3] "Domestic beer equivalent" is unclear. sections[1] and [5] overlap; sections[1].tips[2] "Carry water" sits under alcohol and driving.
- sleeping-in-car-australia sections[6].body[2] repeats [7].body[0], [6].body[0] repeats [7].body[3]; the four tips of sections[1] (legal spot, ventilation, safe exit, engine off) sit under "Rest areas".
- (NZ) speed-limits-new-zealand-visitors sections[4].body[0] and [8].body[1] say demerit points do not apply to overseas licences; overseas licence holders can accrue demerit points and be suspended in NZ (camera fines carry none). Verify against NZTA.
- (NZ) campervan-road-rules-new-zealand sections[6].body[1] says you are "required" to pull over with five or more vehicles queued behind; check the Road Code wording.
- (NZ) campervan-road-rules-new-zealand sections[5].body[1] "Rimutaka Hill Road" is officially Remutaka Hill Road since 2017.
- (NZ) new-zealand-road-trip-fuel-cost-2026 faq[0][1] promises a dated diesel price (page has only petrol); faq[1][1] says "divide by your vehicle's real consumption" while the page uses L/100 km (multiply).
- (NZ) new-zealand-road-signs-visitors faq[1][1] says the large arrow is always your own direction, contradicting sections[4].body[0] (large arrow = direction with priority). The Dutch follows sections[4] (the correct rule).
- (NZ) new-zealand-road-signs-visitors sections[6].body[1] repeats the "legally required to pull over with five vehicles queued" claim; sections[7].body[0] and faq[0][1] mention LSZ (Limited Speed Zone) signs, which NZTA has been phasing out: verify.
- (NZ) wof-registration-campervan-new-zealand sections[4].body[0] says the rego label is displayed on the windscreen (NZ removed the display requirement for many vehicles: verify); faq[0][1] "every vehicle needs a current WoF" ignores the Certificate of Fitness the intro mentions.
- (NZ) eating-out-new-zealand-prices-2026 faq[0][1] promises dated café brunch and pub meal prices the price table does not have.
- (NZ) towing-caravan-new-zealand faq[1][1] says a full car licence covers combinations up to 4,500 kg; NZTA Class 1 is 6,000 kg GLW/GCW (4,500 kg is an Australian figure): verify. sections[6].body[0] "Rimutaka" → Remutaka.
- (NZ) new-zealand-biosecurity-camping-gear sections[7].body[0] "no land mammals" ignores native bats; sections[7].body[1] treats myrtle rust as intercepted at the border (established in NZ since 2017).
- (NZ) public-transport-costs-new-zealand-2026 faq[1][1] promises dated fares for Auckland, Wellington and Christchurch; the price table has Auckland only.
- (NZ) volcanic-safety-new-zealand-travel sections[3].body[0] says tracks close from alert level 2 while faq[1][1] says tracks are usually open at levels 0 to 2 and calls level 2 "minor unrest" (GeoNet: moderate to heightened unrest).
- (NZ) beer-wine-coffee-prices-new-zealand faq[0][1] promises pint, craft beer, six-pack and glass-of-wine prices the table lacks; sections [1]/[5], [2]/[6] and the cellar-door paragraphs repeat each other.
- (NZ) dogs-camping-new-zealand: national parks are "entirely closed" (sections[0]) vs "most" (sections[3]) vs "almost all" (faq[0][1]); faq[1][1] bans dogs in "all kiwi habitat" while sections[8] advises aversion training for dogs in Northland, Coromandel and the West Coast.
- (NZ) accommodation-costs-new-zealand-2026 faq[0][1] promises dated motel prices; the table has no motel row.
- best-time-camping-australia faq[0][1] gives the northern dry season as May to September; the rest of the page says May to October.
- caravan-park-vs-holiday-park sections[7].body[3] repeats sections[5].body[2]; camping-fees-australia-2026 faq[1][1] writes "holiday pass" in lowercase for the WA/Tasmania Holiday Pass products.
