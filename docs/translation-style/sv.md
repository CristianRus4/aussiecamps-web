# Swedish (sv) style guide: AussieCamps and KiwiCamping

This file is the contract for every Swedish unit on aussiecamps.app/sv and campingapp.nz/sv. The same file lives in both repos. It applies to every new translation and every later rewrite.

The reader is Swedish. They are planning a husbil trip, a roadtrip in a hired car, a working holiday year or a tent-and-backpack rundresa in Australia or New Zealand. They read Vagabond, the travel pages of DN and SvD, Husbil & Husvagn, Swedish backpacker blogs and forums, and they are used to camping in Sweden, where allemansrätten lets them pitch a tent almost anywhere. The copy must read as if a Swedish travel writer who has done the trip wrote it for them. Nobody should be able to tell there was an English original.

## 1. Voice

- **Who is writing:** a Swedish traveller who has driven these roads, camped at these sites and now tells a friend how it really works. Practical, calm, concrete, a little dry. Warm without exclamation marks. Swedish travel writing is understated: it states the fact and trusts the reader.
- **Address:** informal **du/dig/din**, always lowercase, also on the privacy and terms pages. That is the norm in all Swedish consumer, travel and app copy, and it matches the app's own Swedish. docs/translation.config.json sets `register.sv: informal`. Generic "man" is natural Swedish for general statements ("I Australien kör man på vänster sida") and may sit next to du in the same paragraph; instructions and advice go to du ("Boka i god tid").
- **Sentence rhythm:** Swedish prose is shorter and flatter than English guide copy. Split an English sentence with three clauses into two. Lead with the point, then the reason. Keep the verb early. Avoid noun chains and passive -s piles ("Bokning av plats rekommenderas" → "Boka platsen i förväg").
- **Active, concrete verbs.** "Du bokar NPWS-campingarna på nätet", "räkna med", "tänk på att", "se upp för", "ha koll på", "kolla", "dubbelkolla", "tanka", "fylla på vatten", "tömma kassetten", "stanna för natten", "övernatta". Imperatives are normal in tips and headings ("Tanka i Port Augusta", "Läs skyltarna").
- **Swedish connectors, not translated ones:** "men", "så", "för", "dock" (sparingly), "däremot", "ändå", "alltså", "faktiskt", "oftast", "ofta", "i regel", "framför allt". Not "emellertid" in every paragraph, not "därmed", "således", "i syfte att", "avseende".
- **Loanwords:** Swedish travellers keep the English word when it is what they will see on signs, maps and booking sites: holiday park, caravan park, free camp, freedom camping, self-contained, roadhouse, road train, outback, Great Walk, rest area (as a sign name). Gloss it in Swedish once per page, then use whichever reads naturally. Never stack English into a sentence where a normal Swedish word exists ("features", "insights", "awareness", "booka", "checka" are out; "kolla" and "roadtrip" are fine).
- **Cultural anchors are welcome** where they help a Swedish reader and add no new fact: DOC-stugor work much like STF:s fjällstugor, a holiday park is close to a big Swedish familjecamping, a bottle shop is the Australian answer to Systembolaget, a bylaw is a kommunal ordningsföreskrift, a WoF is the New Zealand bilbesiktning. Use each at most once per page.
- **Allemansrätten:** Swedish readers assume they may camp anywhere outside private gardens. They may not, in either country. Where a page first deals with free camping, freedom camping or "sleeping anywhere", say it plainly once: "Allemansrätten finns inte här: du får bara övernatta där det uttryckligen är tillåtet" (or an equivalent sentence that fits the paragraph). This is true for both countries and is the most useful single sentence for this audience. Do not add it more than once per page.

## 2. Glossary

Sources: A = App Store sv keywords and subtitles (AussieCamps and KiwiCamping, live check 2026-10-14: husbil, campingplatser, ställplatser, roadtrip, rundresa, reseplanerare, resplan, tält, nationalparker, husvagn, fricamping, stugor, tömning, toaletter), U = app UI label (Localizable.xcstrings, sv), W = Swedish web usage (Road Genius sv Nya Zeeland and Australien pages: "självförsörjande", "self-containment-certifikat", "Kommersiella campingar (Holiday Parks)", "tömningsstationer", "vänstertrafik", "enfiliga broar", "vägtullar"; ZigZagOnEarth sv: "Nordön", "Sydön", "Cooksundet"; Husbilsdestination Sverige definition of ställplats via Nynäshamns kommun; Göteborgs Stad/Grefab and Västsverige ställplats listings: "tömning av gråvatten och latrin", "färskvattenpåfyllning"; Immigration New Zealand "Sweden Working Holiday Visa"), N = Naturvårdsverket on allemansrätten, S = Search Console. **No Swedish queries yet**: neither site has had Swedish pages, and Sweden sent 6 clicks / 286 impressions to campingapp.nz in three months, all to English pages. Recheck docs/growth/gsc/ when new exports land.

| English | Swedish | Notes / source |
|---|---|---|
| campervan, van | **husbil** (ock: campervan, van) | Swedish umbrella word (A: husbil; W). Use "campervan" for the small rental class when the contrast matters ("en liten campervan eller en stor husbil"). Colloquially "bilen", "vanen". Never "campingbil", "husbuss". |
| motorhome | husbil, stor husbil | |
| caravan | **husvagn** | A, U. |
| big rig, car + caravan | **ekipage**, stort/långt ekipage | The Swedish caravanning word for the towing car plus caravan. |
| campervan hire | hyra husbil, husbilshyra | W. |
| road trip | **roadtrip** (ett ord, en roadtrip) | A, U ("Roadtrips"). "Bilsemester" and "rundresa" (A) also natural, "rundresa" for a planned loop. Never "vägresa". |
| itinerary | **resplan** | A ("resplan"). The app's itinerary view: name it ”Resplan” (the app's "Resväg/RESERVÄRD" are errors). |
| trip planner | **reseplanerare** | A, U. |
| campground, campsite (the place) | **campingplats**, camping | A, U (Campingplatser). Basic bush or national-park camps: "enkel campingplats", "naturcamping", "campingplats i nationalparken". Never leave "campground" in English. |
| campsite, pitch (the spot) | plats, tältplats, husbilsplats | "per plats" = per site. |
| powered / unpowered site | plats med el, elplats / plats utan el | Swedish camping usage. |
| caravan park (AU) | **caravan park** (pl. caravan parks), campingplats | First use: "caravan park (en vanlig kommersiell campingplats)". Then "campingplats" or "caravan park". The app filter is ”Husvagnsparker” (U); use that word only when naming the filter. |
| holiday park | **holiday park** (pl. holiday parks) | W: "Kommersiella campingar (Holiday Parks)". Gloss once: "holiday park (en större camping med stugor, kök och ofta pool, ungefär som en svensk familjecamping)". The app filter is ”Semesterparker” (U); use it only when naming the filter. Never "semesterpark" in prose. |
| free camp (AU, noun) | **gratisplats**, gratis campingplats ("free camp") | Quote the sign word once: ”free camp”. A: ställplatser. For vehicles, "gratis ställplats" may lead in titles and meta (it is the word a Swedish husbil driver searches), but the body must make clear it is a designated area, not a right. |
| free camping (AU, activity) | **fricamping**, campa gratis | A: fricamping. First use per page carries the allemansrätten sentence (section 1). |
| freedom camping (NZ) | **freedom camping** | The legal term on NZ signs and in the law. First use: "freedom camping (fricamping utanför campingplatserna, där kommunen eller DOC tillåter det)". Titles may lead with "fricamping". Never "frihetscamping" (U error). |
| wild/dispersed camping | vildcamping, tälta fritt | Only where the English means it; never imply it is allowed by default. |
| self-contained | **self-contained** (certifierat självförsörjande) | W: "självförsörjande", "self-containment-certifikat". Gloss once: "self-contained, alltså certifierat självförsörjande med fast toalett, färskvattentank och gråvattentank". Never "självhushåll" or "fristående fordon" (U errors). |
| certified self-contained, warrant | certifierat self-contained; self-contained-intyg | Keep "green warrant", "blue warrant" in English. |
| ställplats | ställplats | Swedish term for a designated motorhome stopover (W: Husbilsdestination Sverige). Use for comparisons with Sweden or for a vehicle-only overnight area; not for every free camp. |
| dump point (AU) / dump station (NZ) | **tömningsstation** (pl. tömningsstationer) | U (AU: Tömningsstationer), A: tömning, W. First use per page: "tömningsstation (dump point)" on AussieCamps, "tömningsstation (dump station)" on KiwiCamping. Never "dumpstation", "dumppunkt", "tippstation", "soptipp", "dumppoäng" (U errors). |
| grey / black / fresh water | gråvatten / svartvatten, latrin / färskvatten | W: "tömning av gråvatten och latrin". |
| cassette toilet | kassettoalett | "tömma kassetten". |
| rest area | **rastplats** (rest area på skyltarna) | U: Rastplatser. |
| truck bay | lastbilsficka, parkeringsficka för lastbilar | |
| day-use area | rastplats för dagsbesök, dagsbesöksplats, picknickplats | Never "dagbruksområde" or "daganvändningsområde" (U errors). |
| national park | **nationalpark** | A, U. Official park names stay in English ("Kakadu National Park"); "nationalparken Kakadu" is fine in running prose. |
| state forest, Crown land | State Forest (statlig skog), Crown land (statlig mark) | Gloss once. |
| council, district council | **kommunen** (council) | "Shire" stays when part of a name. |
| bylaw | lokala föreskrifter, kommunens regler | Anchor once: "ungefär som en kommunal ordningsföreskrift hemma". |
| land manager | förvaltaren, markförvaltaren, den som förvaltar marken | |
| ranger | ranger, parkvakt | |
| fine, infringement fee | böter, bötesbelopp | |
| DOC | **DOC** | Protected. First use per page: "DOC (Department of Conservation, Nya Zeelands naturvårdsmyndighet)". Compounds with hyphen: DOC-campingplats, DOC-camping, DOC-stuga. |
| NPWS, Parks Victoria, QPWS, Parks and Wildlife | keep the name | Gloss once: "NPWS (nationalparksförvaltningen i New South Wales)". |
| hut | **stuga** (pl. stugor), DOC-stuga | A: stugor. Never "hydda" (U error). Anchor once: "ungefär som STF:s fjällstugor". Hut warden: stugvärd. Bunk: brits, sovplats. |
| Great Walk | Great Walk (pl. Great Walks) | Gloss once: "en av Great Walks, DOC:s klassiska flerdagsvandringar". |
| tramping, track | vandring (tramping), vandringsled, led | Never "spår" for a walking track (U error). |
| working holiday (visa) | **working holiday**, working holiday-visum | W (Immigration NZ: Sweden Working Holiday Visa). Subclass numbers stay (417, 462). "Andra året" for the second-year visa. |
| backpacker, hostel | backpacker, vandrarhem, hostel | |
| 4WD | 4WD, fyrhjulsdriven bil | "4WD-väg", "bara för 4WD". |
| toll, toll road | vägtull, betalväg | W: vägtullar. |
| fuel, petrol, diesel | bränsle, bensin, diesel, tanka; mack | "Unleaded 91" → "blyfri 91". LPG for cooking is "gasol"; for vehicles "autogas (LPG)". |
| roadhouse, servo | roadhouse, mack | Gloss once: "roadhouse (mack med café och ofta övernattning ute i outbacken)". |
| road train | road train | Gloss once: "road trains, lastbilar med upp till fyra släp". |
| outback, the bush | outbacken, bushen | "i outbacken". |
| bushfire | skogsbrand, brand | "Bushfire" stays in official names. |
| total fire ban | **eldningsförbud**, totalt eldningsförbud (Total Fire Ban) | Gloss once, then "eldningsförbud". |
| fire danger rating | brandrisk, brandriskklass | |
| campfire, fire pit, gas stove | lägereld, eldstad/eldplats, gaskök/stormkök | |
| esky, jerry can | kylbox, dunk/reservdunk | |
| gravel road, corrugations | grusväg, tvättbräda | "Unsealed" → grusväg, oasfalterad. |
| one-lane bridge | **enfilig bro** | W. |
| give way | lämna företräde, väjningsplikt | |
| speed limit | hastighetsgräns | |
| drink-driving, breath test | rattfylleri, nykterhetskontroll, utandningsprov | 0.05 BAC: keep the figure and add the Swedish unit: "0,05 procent (0,5 promille)". |
| driver licence, IDP | körkort, internationellt körkort | W. |
| left-hand traffic | **vänstertrafik** | W. |
| WoF (Warrant of Fitness) | WoF (Warrant of Fitness, Nya Zeelands bilbesiktning) | |
| rego | registrering (rego) | |
| Road User Charges | RUC (Road User Charges), vägavgift per kilometer för dieselfordon | |
| ferry | färja, färjeöverfart | Interislander, Bluebridge, Spirit of Tasmania stay. Cook Strait → **Cooksundet** (W). |
| biosecurity | biosäkerhet, gränskontroll av mat, jord och utrustning | Titles lead with what the reader searches: "Vad får du ta med in i …". |
| bottle shop | bottle shop (spritbutik) | Anchor once: "ungefär som Systembolaget, fast privat". |
| tap water, potable water, bore water | kranvatten, dricksvatten, brunnsvatten (bore water) | U: Dricksvatten. |
| school holidays, long weekend, public holiday | skollov, långhelg, helgdag | |
| Traditional Owners, Country | traditionella ägare (Traditional Owners), Country (landet i aboriginsk mening) | Keep "Country" capitalised where the source uses the concept. |
| whenua | whenua (landet, på maori) | |
| sandflies, kauri dieback | sandflugor, kauri dieback (en dödlig sjukdom hos kauriträden) | |
| long drop | utedass (long drop) | |
| the big lap | Big Lap, varvet runt Australien | |
| Aboriginal, Māori (as words) | aboriginsk, Australiens urfolk; maorisk, maorier, på maori | Swedish orthography for the common words (lowercase, no macron). Every Māori **name** keeps its macrons (see Place names). "Te reo Māori" stays as written. |
| app screens and labels | as in the app (U), unless the app is wrong | ”Gillade”, ”Stjärnmärkt”, ”Vill besöka”, ”Besökta” (the app's "Besökte" is an error), ”Pins”, ”Alla sparade”, ”Smarta samlingar”, ”Samlingar”, ”Utforska”, ”Filter”, ”Karta”, ”Resplan”, ”Reseplanerare”, ”Vägbeskrivning”, ”Väder”, ”Inställningar”, ”Se dig omkring” (Apple's Look Around), ”Rastplatser”, ”Campingplatser”, ”Tömningsstationer”, ”Dricksvatten”, ”Vattenpåfyllning”, ”Offentliga toaletter”, ”Återställ köp” (Restore Purchases), packlista, att göra-lista, widgetar, Kalender. Put list and screen names in Swedish quotes in running text. "Street View" stays as the site writes it. |
| place screen | platssidan | |
| Premium, the Pass | Premium, Pass | Product names, capitalised. "Premiumskärmen" for the Premium screen. |

**Place names.**
- Countries use the Swedish form: **Australien**, **Nya Zeeland** (two words, capital Z). Adjectives and people: australisk, australiensare; nyzeeländsk, nyzeeländare.
- States, territories and the NZ islands stay in their English form, because the house rules and the engine protect them: New South Wales, Victoria, Queensland, South Australia, Western Australia, Tasmania, Northern Territory, Australian Capital Territory, North Island, South Island, Stewart Island. Make them read naturally with Swedish framing: "i delstaten Victoria", "i Western Australia", "på North Island", "på Tasmania". On KiwiCamping, give the Swedish name once per page where it helps: "North Island (Nordön)", "South Island (Sydön)" (W: ZigZagOnEarth sv, Road Genius sv).
- Established Swedish exonyms for features that are not protected: Stora barriärrevet (Great Barrier Reef), Cooksundet (Cook Strait), Tasmanhavet (Tasman Sea), Sydalperna (Southern Alps). Everything else as in English: Sydney, Melbourne, Great Ocean Road, Red Centre (glossed once: "Red Centre, det röda inlandet"), Bay of Islands, Milford Sound.
- Māori names keep their macrons exactly: Wānaka, Taupō, Whakatāne, Ōpōtiki, Ōtautahi, Tāmaki Makaurau, Aoraki, Aotearoa. Aboriginal names keep spelling and diacritics: Uluṟu, Kata Tjuṯa, K'gari, Ikara, Tjoritja.
- Official names stay as written: Department of Conservation, NZ Transport Agency Waka Kotahi, Home Affairs, Immigration New Zealand, Tourism Australia, Reserve Bank of Australia. Never translate a park, campground, track or business name.

## 3. Conventions

- **Numbers:** thousands with a no-break space (U+00A0), decimals with a comma: 74 000, 6 500, 2,08, 1,5 liter. "74,000+" → "över 74 000" in prose, "74 000+" in stat labels. Years and four-digit numbers in running text without space (2026, 1500 meter is fine as "1 500 meter").
- **Currency:** prices stay in the local dollar. Swedish puts the unit after the number: **35 AUD**, **35 NZD**, **2,08 AUD per liter**. Where the English writes a bare "$35" for a local price, write "35 AUD" (AussieCamps) or "35 NZD" (KiwiCamping). "A$80–A$140" → "80–140 AUD". In prose "australiska dollar" and "nyzeeländska dollar" are fine. Ranges: "80–130 AUD" with an en dash and no spaces, or "80 till 130 AUD" in prose. Currency codes in table headers stay.
- **Dates:** "19 oktober 2026", months and weekdays lowercase. "Effective 19 October 2026" → "Gäller från 19 oktober 2026". "Updated" → "Uppdaterad".
- **Times:** 24-hour clock with a point: "kl. 22.00", "22.00–08.00".
- **Units:** km, km/h, meter, liter (l in tables), °C, kg. Never convert to mil.
- **Quotes:** Swedish quotes ”…” (the same right-hand mark on both sides) for sign text, app labels and quoted phrases; ’ for a quote inside a quote and as apostrophe ("STF:s" uses a colon, not an apostrophe). Keep straight quotes inside HTML attributes untouched.
- **Punctuation:** no space before : ; ? !. A colon is followed by lowercase unless a name or a full quoted sentence follows. No serial comma ("vatten, el och toalett"). Abbreviations: t.ex., bl.a., ca, kl.
- **Compounds:** close them up (campingplats, husbilsresa, tömningsstation, gråvattentank). Hyphen after an abbreviation, a code or a brand: DOC-stuga, NPWS-camping, 4WD-väg, AussieCamps-appen, KiwiCamping-appen. Multi-word English terms join Swedish words with a hyphen: "freedom camping-område", "working holiday-visum", "self-contained-intyg". Genitive of a code or brand: "DOC:s", "NPWS:s", "KiwiCampings"; "AussieCamps" ends in s, so rephrase ("i AussieCamps", "appens") rather than writing "AussieCamps's".
- **Capitals:** sentence case in headings and titles: "Campingregler i Queensland", never "Campingregler I Queensland".
- **Dashes:** the en dash only in ranges (80–130, 22.00–08.00). No spaced dash as sentence punctuation ("A – B"): use a colon, a comma, brackets or a new sentence.
- **Never changes:** AussieCamps, KiwiCamping, App Store, iPhone, iCloud, Apple, AUD, NZD, DOC, Aotearoa, Waka Kotahi, all URLs, markup (`<a data-guide="slug">…</a>`), `{placeholders}`, official programme names (Tasmania Parks Pass, Desert Parks Pass, Campsite Pass, Backcountry Hut Pass, Great Walks), product UI names per the app.
- **Structure:** same number of sections, paragraphs, tips, FAQ items, sources, table rows and price rows as the English. Within one paragraph you may reorder, split or merge sentences.
- **Titles, H1s and meta:** lead with the Swedish search term (campingregler, fricamping, husbil, campingplatser, tömningsstationer, roadtrip, kostnader, priser, körkort, working holiday), then the place. `title` up to about 60 characters, `description` about 140–155. Example: "Fricamping i Australien: var är det lagligt?" A meta description is a complete, natural sentence, not a keyword list.
- **Testimonials:** never translate the homepage testimonials (`review1`…`review9*`, `reviewsEyebrow`, `reviewsTitle`) into Swedish. Leave them out of sv.json.

## 4. Banned

**Facts and claims**
- Any "offline map" equivalent: offlinekarta, offlinekartor, offline-karta, kartan fungerar offline, offlinenavigering, offline-GPS. The apps keep place details and guides offline; map tiles, routes, weather and photos need a connection. Allowed: "platsinformationen fungerar utan täckning", "alla platser finns i appen, även där mobilen saknar täckning", "guiderna går att läsa offline". The English `metaKeywords` contains "offline camping map": drop that keyword, do not translate it.
- Superlatives the English does not have (bäst, ultimat, perfekt, fantastisk, oslagbar, den enda appen du behöver) and any promise of free access to Pass data.
- Em dashes (—) anywhere, and spaced en dashes used as sentence dashes.
- Facts the English does not state, except the allemansrätten sentence and the one-line cultural anchors in section 1.

**Register:** Ni/Er as polite address, capitalised Du, "Vänligen".

**Calques and stiff constructions** (bad → good):

| Literal or stiff | Natural Swedish |
|---|---|
| Bygg en resa / bygg din rutt | Planera resan, lägg upp rutten |
| beställ dina stopp (order the stops) | sortera stoppen, lägg stoppen i rätt ordning |
| hållplats (stop) | stopp |
| Det är viktigt att notera att … | (drop it) / Tänk på att … |
| När det kommer till … | När det gäller … / För … |
| Detta är där … | Här … / Det är där … |
| gör användning av, använd dig av | använd |
| i termer av, på daglig basis | (drop it) / varje dag |
| säkerställ att | se till att |
| erbjuder (offers) in every sentence | har, finns, ger |
| möjliggör att du kan | gör att du kan, låter dig |
| adressera ett problem | ta itu med, lösa |
| applicera (rules apply) | gälla: "reglerna gäller" |
| bokas ut, säljs slut (books out) | blir fullbokat |
| först in, bäst klädd (first in, best dressed) | först till kvarn |
| Njut av … (in every second paragraph) | only where someone actually enjoys something |
| frihetscamping, självhushåll, fristående fordon | freedom camping, self-contained (självförsörjande) |
| tippstation, dumpstation, dumppoäng | tömningsstation |
| semesterpark, husvagnspark (in prose) | holiday park, caravan park, campingplats |
| hydda, spår (hut, track) | stuga, led |
| Ditt nästa ställe är där ute (Your next place is out there) | write the meaning: "Nästa plats väntar" |
| Passive chains: Det rekommenderas att bokning görs | Boka i förväg |
| English word order: "Vid ankomst läs skyltarna" | Läs skyltarna när du kommer fram |
| ”Gör det enkelt” taglines translated word for word | rewrite the tagline so it works as Swedish copy |

Never translate idioms word for word: "the big lap", "walk-up", "book out", "first in, best dressed", "signs beat screens", "however you carry home", "leave places better". Write what they mean, as a Swedish copywriter would ("Skyltarna gäller före skärmen", "Lämna platsen finare än du hittade den").

## 5. Before and after (the app's current Swedish)

Swedish is new on both websites, so there is no site copy to compare. The app's own Swedish strings (Localizable.xcstrings) show the literal register this guide replaces.

1. "Build a route, order your stops and see the drive between them."
   - Before (app): "Bygg en rutt, beställ dina stopp och se körningen mellan dem."
   - After: "Lägg upp rutten, sortera stoppen och se hur långt det är mellan dem."
2. "DOC campsites, holiday parks, freedom camping and dump stations, all in one place."
   - Before (app): "DOC campingplatser, semesterparker, frihetscamping och dumpningsstationer, allt på ett ställe."
   - After: "DOC-campingplatser, holiday parks, freedom camping och tömningsstationer, samlat på ett ställe."
3. "Find dump stations near your route or next stop, with their locations ready to check before emptying your tanks."
   - Before (app): "Hitta dumpningsstationer nära din rutt eller nästa hållplats, med deras platser redo att kontrollera innan du tömmer dina tankar."
   - After: "Hitta tömningsstationer längs rutten eller nära nästa stopp, så vet du var du kan tömma tankarna innan det blir bråttom."

## 6. Checklist per unit

1. Would a Vagabond or Husbil & Husvagn editor publish this sentence unchanged?
2. Every number, price, date, link, tag and placeholder matches the English; numbers and money follow section 3.
3. Glossary term used; the local sign name glossed once per page; allemansrätten said once on free-camping pages.
4. du-form, no em dash, no spaced dash, no offline map, no new superlative.
5. Title and meta lead with the Swedish search term and read as natural sentences.
