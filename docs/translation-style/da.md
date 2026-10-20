# Danish (da) style guide for AussieCamps and KiwiCamping

This is the contract for every Danish unit on aussiecamps.app/da and campingapp.nz/da. The same file
lives in both repositories. Write Danish that reads as if a Danish travel writer who has driven an
autocamper around Australia and New Zealand wrote it for readers from Denmark. Nobody should be able
to tell that an English page came first.

## 0. Overriding rules (2026-10-20, orchestrator)

- **No added facts or glosses.** Translate only what the English says. The "gloss once" notes in the glossary below are withdrawn: do not add an explanation, a parenthetical translation, months for a season or a conversion that the English does not have. Keep an English term as written (and the English term in parentheses only where the English itself has it).
- **Rules and safety text:** before every commit, read each never / do not / only / must / no unit next to its English. A reversed or dropped negation is a critical error. Use "skal" (not "må") for must.
- **Brand names and genitive:** the content audit counts brand names without a genitive -s for da. Write "supporten hos KiwiCamping", "billeder fra Apple", "Apple-frameworks", "KiwiCamping-appen", never "KiwiCampings" or "Apples".
- **State and island names** use the Danish exonyms (Tasmanien, Centralaustralien, Nordøen, Sydøen) through the da-only catalog in `docs/translation.config.json`; section 6 below is obsolete.

## 1. Reader and voice

**Who reads this.** Danes planning a trip in an autocamper or camper, young Danes on a working
holiday (18 to 35, Denmark has the agreement with both countries) who buy an old van or sleep in the
car, couples and families on a three to six week rundrejse, and seniors with time for a long loop.
Many have camped in Europe and know campingplads, autocamperplads, tømmestation and kassettetoilet.
They do not know Australian or New Zealand systems (councils, DOC, Total Fire Ban, self-contained
certification, WOF, rego), so those get a short Danish explanation the first time they appear on a
page.

**Register: du**, lower case (du, dig, din, dit, dine), as configured in `docs/translation.config.json`.
Danish has used du with strangers for decades; "De" would sound like a letter from the tax office.
Use generic **man** where Danish naturally does: in questions that mirror searches ("Må man sove i
bilen i Australien?") and neutral statements of rules ("I New Zealand kører man i venstre side").
Advice addressed to the reader uses du.

**Rhythm.** Danish travel writing (FDM Travel, Jysk Rejsebureau, Kilroy, Berlingske Rejser) is
relaxed, concrete and low on hype: short and medium sentences, a dry understatement now and then, no
breathless adjectives. Lead with what the reader acts on. Split an English sentence when Danish
would stack subordinate clauses; merge two short English sentences when Danish reads choppy. Prefer
spoken-style connectors (så, men, for, til gengæld, derfor) to written officialese.

**Verbs, not nouns.** Write "book i god tid", not "foretag en booking i god tid"; "tjek reglerne",
not "foretag en kontrol af reglerne". Avoid nominal chains with "-ning" and "-else" where a verb
does the job.

**Fewer possessives.** English says "your car, your tyres, your booking". Danish uses "din" a lot
too, but drop it when the owner is obvious: "Tjek dækkene før afgang", not "Tjek dine dæk på din bil".

**Imperatives.** Body text uses the plain imperative ("Tjek skiltene", "Book i god tid", "Læg en
ekstra dag ind"). Tips and short list items also use the imperative or a short noun phrase, whichever
reads like a Danish fact box ("Tjek brandfareniveauet hver morgen", "Ekstra vand til en uforudset
nat").

**Headings** use Danish sentence case (only the first word and proper nouns capitalised), no full
stop. They may be a short statement or a question, as a Danish magazine would print them.

**Titles, H1 and meta.** Lead with the words Danes actually type into Google (section 4). Titles
under about 60 characters, meta descriptions about 140 to 160. Be concrete: "Camping i Victoria:
regler, booking og bålforbud" beats a literal echo of the English.

## 2. Glossary

Sources (codes used in the notes column):
- **G**: Search Console query exports (2026-10-19, `queries-3m.tsv`, both sites). Denmark sends
  567 impressions and 15 clicks to campingapp.nz in three months, but every query is English, so
  GSC gives no Danish vocabulary yet. Re-check when the Danish pages are indexed.
- **A**: App Store keyword sets, da (`listing-checks/2026-10-14T1141-live.json`): AussieCamps
  "autocamper, campingpladser, rundrejse, roadtrip, rejseplanlægger, telt, nationalparker,
  overnatning, rute"; KiwiCamping "campingpladser, ruteplanlægger, autocamper, DOC, hytter, guide,
  vejr, tømning, toiletter, lister". Candidate terms only: the AussieCamps subtitle "Offline kort og
  rejseplan" is exactly the claim we must not make.
- **U**: the app's Danish labels (`Localizable.xcstrings`, da). Several are machine translations and
  are corrected below.
- **W**: Danish web usage: FDM Travel ("Autocamper: overnatning i Australien og New Zealand", "4
  fordomme om at rejse i autocamper i New Zealand"), Jysk Rejsebureau ("New Zealand i bil &
  autocamper"), autocampers.dk ("Guide: Camping i New Zealand"), gocamper.dk ("Autocamper i
  Australien"), Motormagasinet ("Sådan rejser du med autocamper i New Zealand under lokale regler"),
  bil.downunder.dk ("Overnatning og camping i bil eller autocamper i Australien"), Janeaway ("Road
  trip i Australien"), DR and TV 2 news coverage of bushbrande.

### Vehicles and ways of travelling

| English | Danish | Notes and evidence |
|---|---|---|
| campervan, camper | **autocamper**, **camper** | W: FDM, Jysk, gocamper, Motormagasinet all use autocamper as the umbrella word; A: autocamper. Use **camper** (en camper, campere) for the smaller van type or for rhythm. "Campervan" only where the English contrasts it with a motorhome. |
| motorhome | **autocamper**, **stor autocamper** | Danes do not distinguish the two in everyday speech. Add "med eget bad og toilet" when the size matters. |
| van, converted van | **van**, **ombygget varevogn** | "Van" is normal among young travellers (vanlife). |
| caravan | **campingvogn** | Never "caravan" alone in prose. U: "Ingen campingvogne". |
| camper trailer (AU) | **teltvogn** (camper trailer) | Gloss once. |
| big rig | **stor campingvogn eller autocamper**, **langt vogntog** | |
| towing | **køre med campingvogn**, **trække** | "Vogntog" for car plus caravan. |
| 4WD, four-wheel drive | **firehjulstræk**, **4WD** | W: gocamper "offroad-modeller med firehjulstræk". Keep **4WD** where a sign or track grading says it ("kun 4WD" / "kun for firehjulstrukne biler"). |
| AWD | **AWD** (permanent firehjulstræk, ikke en terrængående bil) | Gloss when contrasted with 4WD. |
| road trip | **roadtrip** | One word, as Retskrivningsordbogen spells it. A: roadtrip. |
| touring loop, round trip | **rundrejse** | A: rundrejse. Good in titles ("Rundrejse i New Zealand i autocamper"). |
| the big lap (AU) | **turen hele vejen rundt om Australien** | Add "(the Big Lap)" once where the English term matters. |
| working holiday | **working holiday** | Visa: **working holiday-visum** (W: bil.downunder.dk e-book "Working Holiday i Australien"). Lower case in prose. |
| backpacker | **backpacker** | Never "rygsækrejsende" (U: "Rygsækrejsende" is the app's label for hostels and is wrong). |
| grey nomads (AU) | **grey nomads** | Gloss once: pensionister, der rejser rundt i månedsvis i campingvogn eller autocamper. |

### Places to stay

| English | Danish | Notes and evidence |
|---|---|---|
| campground, campsite (the place) | **campingplads** (pl. campingpladser) | W everywhere; A: campingpladser; U: Campingpladser. Never "lejr" (U: "Lejre" is wrong). |
| site, pitch | **plads** | "en plads til autocamperen", "teltplads". |
| powered / unpowered site | **plads med strøm / uden strøm** | W: FDM "pladser med eller uden strøm (Powered Site)". U: "Pladser med strøm". Add "(powered site)" once if the booking screen uses it. |
| tent site | **teltplads** | |
| caravan park (AU) | **caravanpark** (pl. caravanparker) | One word, Danish compound rule. Gloss once: kommerciel campingplads med pladser og hytter. Never "Caravan parker" (U, two words, wrong). |
| holiday park | **Holiday Park** (pl. Holiday Parks) | W: FDM, autocampers.dk, BENNS keep the English name. Never "feriecenter" or "feriepark" (U), which suggest a Danish bungalow resort. |
| cabin (in a holiday park) | **hytte**, **campinghytte** | The normal Danish campsite word. |
| hut (NZ, DOC) | **hytte**, **DOC-hytte**, **fjeldhytte** for alpine huts | A: hytter; U: DOC-hytter. |
| roofed accommodation | **overnatning med tag over hovedet**, **indendørs overnatning** | A: overnatning. |
| hostel, backpackers | **hostel**, **vandrerhjem** | |
| farm stay, station stay | **farmophold**, **ophold på en station** | Gloss station once: en kæmpe kvæg- eller fårefarm i outbacken. |
| showground (AU) | **showground** | Gloss once: udstillings- og dyrskueplads, der ofte har billige pladser. |
| rest area | **rasteplads** (pl. rastepladser) | W: gocamper, bil.downunder.dk; U: Rastepladser. |
| day-use area | **dagsplads** (ingen overnatning), **picnicplads** | |
| free camps, free camping (AU) | **gratis camping**, **gratis pladser**, **free camps** | W: gocamper "gratis rest areas", bil.downunder.dk "fri camping". "Free camps" as a gloss or when quoting signs and apps. Never "gratis lejre" (U). |
| freedom camping (NZ) | **freedom camping** | The legal term; Danish media keep it in English and lower case (W: FDM, autocampers.dk, Motormagasinet). Gloss once: gratis overnatning uden for campingpladserne, kun hvor det er tilladt. Compounds with a hyphen: freedom camping-plads, freedom camping-område, freedom camping-reglerne. Never "Frihed camping" (U). |
| camp outside a campground (verb) | **fricampere**, **overnatte frit**, **holde frit** | W: FDM "Derudover er det også muligt at fricampere". |
| wild camping | **vildcamping** | The Danish search word. Use it in titles, meta or FAQs where the page answers that question, and say plainly where it is not allowed. Never as a neutral synonym for legal freedom camping. |
| self-contained (NZ certification) | **selvforsynende**, **certificeret selvforsynende (self-contained)** | W: FDM "certificerede selvforsynede autocampere", Motormagasinet "selvforsynende køretøj". Gloss once: fast monteret toilet, ferskvands- og spildevandstank og et gyldigt certifikat. Never "selvstændig" (U, wrong). |
| Green Warrant, self-containment certificate | **Green Warrant**, **certifikatet (det grønne)** | W: Motormagasinet "Green Warrant-certifikat". |
| self-sufficient (in general) | **selvforsynende** | |
| dump point (AU), dump station (NZ) | **tømmestation** (pl. tømmestationer) | U (AU): Tømmestationer; A: tømning. Mention the sign wording once if useful (på skiltene "Dump Point" / "Dump Station"). Never "dumpe station" or "dump-station" (U, wrong). |
| grey water / black water | **gråvand / spildevand fra toilettet (sortvand)** | Danish campers say gråvand and toiletaffald. |
| cassette toilet | **kassettetoilet** | W: gocamper, sohv.dk. |
| fresh water / potable water | **friskvand / drikkevand** | U: Drikkevand. |
| water point | **vandpost**, **sted at fylde vand på** | |

### Land, agencies and rules

| English | Danish | Notes |
|---|---|---|
| DOC (Department of Conservation) | **DOC** | Protected. Gloss on first use per page: DOC (Department of Conservation, New Zealands statslige naturforvaltning). W: autocampers.dk "i regi af Department of Conservation (DOC)". |
| DOC campsite, DOC hut | **DOC-campingplads**, **DOC-hytte** | W: Motormagasinet "DOC-campsites"; we write the Danish word. |
| Great Walk(s) | **Great Walk(s)** | Proper name. Gloss once: New Zealands kendteste flerdagsvandringer, hvor hytter og teltpladser skal bookes. |
| track (NZ), trail | **Track** in names (Milford Track), otherwise **vandrerute**, **sti** | |
| tramping | **vandring**, **flerdagsvandring**, **trekking**; "tramping" once with gloss | |
| backcountry | **baglandet**, **ude i naturen**, **backcountry** in DOC product names | |
| national park | **nationalpark** | Official names stay English: "Kakadu National Park", "Tongariro National Park". |
| NPWS, Parks Victoria, QPWS, Parks and Wildlife Tasmania etc. | unchanged, gloss once | e.g. NPWS (National Parks and Wildlife Service, nationalparkmyndigheden i New South Wales). |
| council (AU, NZ) | **kommune**, **kommunen** | A perfect Danish equivalent. "District Council", "City Council" stay in proper names. |
| bylaw | **kommunale regler**, **lokale bestemmelser**, **vedtægt** | "kommunens regler for freedom camping" in plain advice. |
| land manager | **den ansvarlige myndighed**, **forvaltningen**, **ejeren af området** | Never "landforvalter". |
| Crown land (AU), state forest | **statsjord (Crown land)**, **statsskov (State Forest)** | |
| Traditional Owners, Country (AU) | **Traditional Owners** (de oprindelige ejere), **Country** with gloss: det land, en aboriginal-gruppe hører til og har ansvar for | Write "aboriginal" as adjective ("aboriginal-samfund", "aboriginal kultur") and "First Nations"; never "aborigines". |
| whenua, iwi (NZ) | keep, gloss: whenua (landet), iwi (stamme) | Keep macrons in every te reo word. |
| fine, infringement | **bøde** | W: Motormagasinet, bil.downunder.dk. |
| total fire ban (AU) | **Total Fire Ban** (totalt forbud mod åben ild) | Official term on signs. |
| fire danger rating | **brandfareniveau** | |
| bushfire | **bushbrand**, **naturbrand** | Danish news say bushbrande about Australia. NZ wildfire: **naturbrand**, **vegetationsbrand**. |
| campfire, fire ban | **bål**, **bålforbud** | |
| fire season, fire restrictions | **brandsæson**, **brandrestriktioner**, **bålforbud** | |
| biosecurity, quarantine | **biosikkerhed**, **karantæne**, **indførselsregler** | |
| sandflies | **sandfluer** | Gloss once: bittesmå stikkende fluer på vestkysten af South Island. |
| kauri dieback | **kauri-svamp (kauri dieback)** | Explain once: en jordbåren sygdom, der dræber kauritræer. |

### Roads and money

| English | Danish | Notes |
|---|---|---|
| driving on the left | **venstrekørsel**, **kør i venstre side** | W: Motormagasinet "Al færdsel foregår i venstre side af vejen". |
| licence, International Driving Permit | **kørekort**, **internationalt kørekort** | |
| give way | **vigepligt**, **holde tilbage for** | |
| roundabout | **rundkørsel** | |
| one-lane bridge | **ensporet bro** | |
| unsealed road, gravel road | **grusvej**, **uasfalteret vej**, **jordvej** (outback) | |
| road train | **road train** | Gloss once: lastbil med op til fire anhængere og over 50 meter lang (use the English figure). |
| roadhouse | **roadhouse** | Gloss once: tankstation med café og ofte overnatning i outbacken. |
| toll, toll road, e-tag | **betalingsvej**, **vejafgift**, **e-tag** | |
| speed camera | **fartkamera**, **fotovogn** (mobile) | |
| demerit points | **strafpoint** | Optional comparison once: minder om klip i kørekortet. |
| fatigue, Driver Reviver | **træthed**, **køre træt**; "Driver Reviver" stays | |
| fuel, petrol, diesel | **brændstof**, **benzin**, **diesel** | W: gocamper "Brændstof". "benzinpriser", "dieselpris". |
| petrol station | **tankstation**, **servicestation** | |
| WOF (NZ) | **WOF** | Gloss once: Warrant of Fitness, New Zealands svar på bilsynet. |
| registration, rego | **registrering** (rego) | |
| RUC (NZ) | **RUC** | Gloss once: Road User Charges, den vejafgift dieselbiler betaler pr. kilometer. |
| groceries | **dagligvarer**, **madvarer**, **indkøb** | "madpriser", "priser i supermarkedet". |
| eating out | **spise ude**, **restaurantpriser** | |
| tip (gratuity) | **drikkepenge** | |

### App and site vocabulary

Use the app's Danish label when a page names a button, tab or screen, unless the label is a
mistranslation (listed here with the replacement). Labels go in »…«.

| English | Danish | App label |
|---|---|---|
| guide, guides (site articles) | **guide**, **guiden**, **guider** | A: guide. U "Vejledninger" reads like a user manual; not used on the site. |
| place (app record) | **sted** (pl. steder) | U: Sted, Steder |
| place screen | **stedets side** | |
| Explore | **»Udforsk«** | Udforsk |
| collections, smart collections | **samlinger**, **smarte samlinger** | Samlinger, Smarte samlinger |
| Liked | **»Synes godt om«** | Synes godt om |
| Starred | **»Stjernemarkeret«** | Stjernemarkeret |
| Want to visit | **»Ønsker at besøge«** | Ønsker at besøge |
| Visited | **»Besøgt«** | Besøgt |
| Pins | **»Pins«** | Pins |
| All saved | **»Alle gemte«** | U: "Alt sammen gemt" (mistranslation) |
| trip, trip planner | **tur**, **rejse**, **rejseplanlægger** | Rejseplanlægger |
| itinerary | **rejseplan** | U: Rejseplan (not "Rejsevejledning") |
| stop | **stop** (et stop, stoppet, flere stop) | Stop |
| to-dos, packing list | **huskeliste**, **to-dos**, **pakkeliste** | U: huskeliste |
| Pass | **Pass** | Product name, capitalised and normally uninflected ("kræver Pass", "med Pass", "dit Pass"). Never "Bestå" (U, wrong: it means to pass an exam). |
| filters | **filtre** | Filtre |
| map, satellite | **kort**, **satellit** | Kort, Satellit |
| Look Around (Apple) | **»Se dig omkring«** (Apples navn for Look Around) | Se dig omkring |
| Street View (as the site names it) | **Street View** | |
| widget | **widget** (en widget, widgets) | |
| Calendar (Apple app) | **Kalender** | |
| settings | **Indstillinger** | Indstillinger |

### Settled in review

| English | Danish | Notes |
|---|---|---|
| biosecurity / border officer | **kontrollant** | Never "betjent", which reads as police. |
| warden (DOC) | **opsynsmand** | |
| public conservation land | **statens naturområder** | "forvaltet af DOC" on first use. |
| Campsite Pass, Backcountry Hut Pass, parks pass | official name kept; generic: **parkpas**, **periodekort** | Never a bare "pas", which Danes read as a passport. |
| Serviced / Standard / Basic / Great Walk huts | **Serviced-hytter**, **Standard-hytter**, **Basic-hytter**, **Great Walk-hytter** | Never "betjente hytter": the huts have no staff. |
| keep the confirmation offline | **hav bekræftelsen klar, så den kan vises uden net** | |
| fare cap; transport card; tag on/off | **prisloft**; **rejsekort**; **checke ind/ud** | Rejsekort wording Danes know. |
| rideshare | **kørselstjeneste via app** | Not "samkørsel" (carpooling); no brand unless the English names one. |
| BAC 0.05 | **0,05 (0,5 promille)** | Promille gloss once per page. |
| standard drink | **standarddrink** | Not "genstand" (Danish 12 g vs Australian 10 g). |
| bottle shop | **bottle shop (vinhandel)** | Gloss once. |
| award wage; corkage | **overenskomstløn (award wage)**; **proppenge** | |
| shire (AU) | **shire (landkommune)** | Gloss once. |
| honesty box | **tillidskasse (honesty box)** | |
| boil-water notice | **kogeanbefaling** | |
| times | **kl. 22**, **kl. 16** | 24-hour clock. |

## 3. Conventions

- **Numbers:** full stop for thousands, comma for decimals: 74.000, 6.500, 2,08. "74,000+" is "over
  74.000" in prose and "74.000+" in stat tiles. Keep every number exactly; never round or convert.
- **Currency:** amount, space, ISO code: "35 AUD", "2,08 AUD pr. liter", "15 NZD". "A$", "AU$" and an
  Australian "$" become AUD; "NZ$" and a New Zealand "$" become NZD. Never convert to kroner. Ranges
  in prose and tables: "80–130 AUD" (en dash, no spaces); "fra 80 til 130 AUD" where it reads better.
- **"Per":** "pr." ("pr. nat", "pr. person", "pr. voksen", "pr. liter", "pr. plads").
- **Dates and times:** "5. august 2026", "1. juni", "fra maj til september" (months and weekdays in
  lower case); times "kl. 21", "kl. 21.30". Seasons are the southern ones: write "om sommeren
  (december til februar)" when the English only says "summer" and the month matters to a Danish
  reader. Add nothing beyond that.
- **Units:** km, km/t, m, °C, l or liter. "km/h" in English becomes "km/t".
- **Percent:** "15 %" (space before the sign).
- **Quotes:** »…« with ›…‹ inside. App labels and sign wording go in »…«.
- **Punctuation:** the grammatical comma most Danish media use: a comma before every subordinate
  clause, including at-clauses ("Det betyder, at du skal booke", "Husk, at bålforbud gælder"), and
  after a subordinate clause that opens the sentence ("Hvis du kører om natten, ..."). No comma before
  an infinitive ("Husk at tjekke reglerne"). Colons are fine; a full sentence after a colon starts
  with a capital letter. **No em dashes (—)** and no spaced en dash ( – ) as a
  tankestreg either; use a comma, colon, parentheses or a new sentence. The en dash is for ranges
  only.
- **Compounds:** closed in Danish ("campingpladsgebyr", "tømmestation", "brandfareniveau"),
  hyphenated after an abbreviation, a brand or a multi-word English term ("DOC-hytte",
  "4WD-spor", "iPhone-app", "AussieCamps-appen", "freedom camping-område", "Holiday Park-hytte",
  "Great Walk-hytte"). Never split a Danish compound with a space ("camping plads" is wrong).
- **Adjectives from countries:** australsk, newzealandsk; people: australiere, newzealændere,
  danskere (lower case).
- **Place names:** keep the English or official form: Great Ocean Road, Gold Coast, Blue Mountains,
  Milford Sound, Bay of Islands, Cape Reinga, Great Barrier Reef. Keep Aboriginal and Māori names
  exactly, with diacritics and macrons: Uluṟu, K'gari, Ikara, Tjoritja, Aotearoa, Aoraki, Wānaka,
  Whakatāne, Rakiura, Māori, te reo Māori. Established Danish forms: **Australien**, **New
  Zealand** (genitive New Zealands), **det Røde Center** (Red Centre), **outbacken**, **bushen**,
  **Cookstrædet** (Cook Strait), **Tasmanhavet**. Danish says Tasmanien, Nordøen and Sydøen, but the
  engine protects the English names; see section 6.
- **States:** New South Wales, Victoria, Queensland, South Australia, Western Australia, Northern
  Territory, Australian Capital Territory stay as written (protected terms; Danish media use them
  too). Abbreviations NSW, QLD, WA, SA, NT, ACT, VIC, TAS stay. Write "i New South Wales", "i
  Western Australia"; genitive "Queenslands", "Victorias".
- **Never change:** AussieCamps, KiwiCamping, App Store, iPhone, iOS, BookEasy, BookIt, product and
  park names, agency names and abbreviations (DOC, NPWS, MBIE, NZTA, Waka Kotahi, RBA, RBNZ), URLs,
  `<a data-guide="…">…</a>` markup and `{placeholders}`. Translate the link text inside markup; keep
  the tag and its attributes byte for byte. Brand + Danish ending takes a hyphen: "AussieCamps-appen",
  genitive without one: "KiwiCampings filtre".
- **Counts:** keep the structure identical to English: same number of sections, paragraphs, tips, FAQ
  items, sources and price rows. Sentences may move, split or merge inside one paragraph only.
- **Testimonials:** the homepage testimonials (review1 to review9, reviewsEyebrow, reviewsTitle) are
  never translated into Danish.

## 4. Search terms to lead with

GSC has no Danish queries yet, so these come from the App Store keywords, Danish travel-agency
headlines and the words Danes use on forums. Re-check against GSC once Danish pages are indexed.

Australia: "camping i Australien", "campingpladser i Australien", "autocamper i Australien", "leje
autocamper Australien", "gratis camping Australien", "rastepladser", "sove i bilen", "roadtrip i
Australien", "rundrejse i Australien", "working holiday Australien", "køre bil i Australien",
"færdselsregler i Australien", "benzinpris", "hvad koster en rejse til Australien 2026", "priser i
Australien", "madpriser".

New Zealand: "campingpladser i New Zealand", "camping i New Zealand", "autocamper i New Zealand",
"freedom camping New Zealand", "vildcamping New Zealand" (with the legal answer), "DOC-campingpladser",
"DOC-hytter", "Great Walks", "sandfluer New Zealand", "rundrejse i New Zealand", "roadtrip i New
Zealand", "køre bil i New Zealand", "vejskilte i New Zealand", "hvad koster en rejse til New Zealand
2026", "priser i New Zealand".

## 5. Banned

- **"Offline kort" in any form** (offline-kort, offlinekort, kort offline, offline campingkort). The
  apps are not offline maps. Write what is true: "Stedernes oplysninger og guiderne virker også uden
  dækning; kortet, ruteberegning, vejr og fotos kræver forbindelse." "Offline" is fine about place
  details and guides ("stedets oplysninger ligger offline i appen").
- **De, Dem, Deres** as forms of address.
- **Em dashes**, and spaced en dashes used as tankestreg.
- **Superlatives the English does not make** ("den bedste", "unik", "fantastisk", "betagende",
  "magisk", "et must"). Keep enthusiasm at the level of the English, or a notch below.
- **Officialese** outside the legal pages: "endvidere", "således", "hermed", "vedrørende", "i henhold
  til", "foretage", "påse", "nærværende", "såfremt", "eventuelt" as filler.
- **Anglicisms Danes notice as translation:** "gøre sense" (use "give mening" or rephrase), "at
  tage et kig på" overused, "i slutningen af dagen" (use "når alt kommer til alt", or drop it), "ved
  at + infinitive" at the start of a sentence (use "Hvis du ..." or a main clause), "Dette betyder" at
  every turn (use "Det betyder" or rephrase), "baseret på" (use "ud fra"), "på vejen" for on the road
  (use "undervejs", "på turen"), "realisere" for notice (use "opdage", "finde ud af"), "adressere" a
  problem (use "løse", "tage hånd om").
- **Calques and stiff constructions**, with fixes:

| Literal (bad) | Natural (good) |
|---|---|
| Læs stedet, ikke internettet | Det er skiltet på stedet, der gælder, ikke internettet |
| Køretøjet gør ikke stedet lovligt. | Om du må overnatte et sted, afhænger ikke af, hvad du kører i. |
| Hvert sted åbner med den detalje, der afgør det. | Stedets side viser med det samme det, der afgør valget. |
| Ved at filtrere efter adgang kan du spare kilometer. | Filtrerer du efter adgang, slipper du for mange spildte kilometer. |
| Gratis lejre og campingvogne | Gratis pladser og caravanparker |
| Det er vigtigt at bemærke, at reglerne varierer. | Reglerne er ikke de samme overalt. |
| Tjek med landforvalteren for den seneste information | Tjek de seneste oplysninger hos kommunen eller nationalparken |
| Uanset hvordan du bærer hjemmet med dig | Uanset om du sover i telt, van eller campingvogn |
| Tag det med på vejen | Tag den med på turen |
| Nøglen er at planlægge | Det afgørende er at planlægge |

## 6. Engine limitation (pending orchestrator decision)

Danish says **Tasmanien**, **Nordøen**, **Sydøen** and **Centralaustralien**. The engine currently
protects "Tasmania" and "Central Australia" (AussieCamps) and "North Island", "South Island" (and
"Stewart Island") (KiwiCamping) as untranslatable terms, so a Danish value without the English form is
rejected. Until the configuration changes, applied values use the protected English form with Danish
grammar and no Danish article: "i Tasmania", "Tasmanias nationalparker", "på North Island",
"South Islands vestkyst", "i Central Australia". Written that way the text converts mechanically to
the Danish forms later (i Tasmanien, Tasmaniens, på Nordøen, Sydøens). Do not write "den nordlige
ø" or other workarounds.

## 7. Before and after

Danish is a new locale on both sites, so these come from the app's current Danish strings, which are
the only Danish copy the reader has seen from us.

**1. Paywall, trip planner feature**

- English: "Build an itinerary, order your stops and tick them off as you go."
- Before: "Byg en rejseplan, bestil dine stop, og sæt kryds ved dem, mens du går." ("bestil" means to
  order goods, and "mens du går" is walking)
- After: "Lav en rejseplan, sæt stoppene i rækkefølge, og sæt kryds undervejs."

**2. Onboarding, place coverage**

- English: "Camps, caravan parks, rest areas and useful stops in every state."
- Before: "Lejre, campingvogne, rastepladser og nyttige stop i hver stat." ("lejre" are military or
  scout camps, "campingvogne" are caravans, not caravan parks)
- After: "Campingpladser, caravanparker, rastepladser og praktiske stop i alle stater."

**3. Empty trips screen**

- English: "Start a trip and every place you save can go on it."
- Before: "Start en rejse, og hvert sted, du sparer, kan tage på den." ("spare" is to save money,
  and places cannot "tage på" a trip)
- After: "Opret en tur, så kan alle de steder, du gemmer, komme med på den."
