# German (de) style guide for AussieCamps and KiwiCamping

This is the contract for every German unit on aussiecamps.app/de and campingapp.nz/de. The same file
lives in both repositories. Write German that reads as if a German travel writer who has driven a
campervan around Australia and New Zealand wrote it for readers from Germany, Austria and
Switzerland. Nobody should be able to tell that an English page came first.

## 1. Reader and voice

**Who reads this.** Germans, Austrians and Swiss planning a Camper or Wohnmobil trip, Work-and-Travel
backpackers aged 18 to 35 who buy an old van or sleep in their car, couples and families on a three to
six week trip, and older travellers with time for a long loop. Many have camped in Europe and know
Stellplatz, Entsorgung and Wohnmobil vocabulary. They do not know Australian or New Zealand systems
(councils, DOC, Total Fire Ban, self-contained certification, WOF), so those get a short German gloss
the first time they appear in a page.

**Register: du**, lower case (du, dich, dein), as configured in `docs/translation.config.json`. It is
how German camping and Work-and-Travel media (camperstyle.de, viel-unterwegs.de, most WHV blogs)
talk to this audience. Never mix in Sie. Use generic **man** where German naturally does: in questions
that mirror searches ("Darf man in Australien im Auto schlafen?") and neutral statements of rules
("In Neuseeland fährt man links"). Advice addressed to the reader uses du.

**Rhythm.** Calm, direct, practical, like an experienced friend who has done the trip. Medium-length
sentences; split an English sentence when German would pile up commas, merge two short English ones
when German reads choppy. Lead with the information the reader acts on. One idea per sentence is
better than a perfect echo of the English clause order.

**Verbs, not nouns.** English is often already verbal, so a literal rendering drifts into German
Nominalstil ("die Vornahme einer Buchung", "zur Sicherstellung der Verfügbarkeit"). Write "buchen",
"damit du sicher einen Platz hast".

**Fewer possessives.** English says "your car, your tyres, your booking" where German uses the article:
"Prüf vor der Abfahrt die Reifen", not "Prüfe deine Reifen deines Autos".

**Imperatives.** Body text: full or short du-imperative, whichever sounds better in the sentence
("Prüf die Schilder", "Plane einen Puffertag ein"). Tips and short list items: infinitive style,
which is the normal German bullet voice ("Schilder vor Ort lesen", "Zufahrten freihalten",
"Abwasser nur an der Entsorgungsstation ablassen").

**Headings** use German sentence case (only nouns capitalised), no full stop, no colon chains. They may
be a short statement or a question, whatever a German magazine would print.

**Titles, H1 and meta.** Lead with the words Germans actually type into Google (see the glossary and
section 4). Keep titles under about 60 characters, meta descriptions around 140 to 160. Be concrete:
"Campingregeln in Victoria: Buchung, Freistehen, Feuerverbote" beats a literal echo of the English.

## 2. Glossary

Sources: Search Console queries on both sites (2026-10-19 export, `queries-3m.tsv`), the App Store
keyword sets (`listing-checks/2026-10-14T1141-live.json`, de-DE), the German app strings
(`Localizable.xcstrings`), and German-language travel content: newzealand.com/de, australia.com/de-de,
urlaubsguru.de, loving-travel.com, viel-unterwegs.de, ADAC Autovermietung, lesdeuxpiedsdehors.com/de.

### Vehicles and ways of travelling

| English | German | Notes and evidence |
|---|---|---|
| campervan | **Campervan**, **Camper** | Standard in German NZ/AU writing (urlaubsguru uses Campervan most; viel-unterwegs, ADAC: Campervan, Wohnmobil). "Camper" is also the person, so use it for the vehicle only where context is clear. ASO keyword: camper. |
| motorhome | **Wohnmobil** | Larger, with bathroom. ASO keyword: wohnmobil. Fine as the umbrella word in titles ("Mit dem Wohnmobil durch Neuseeland"). |
| van | **Van** | Converted or small camper van. |
| caravan | **Wohnwagen** | "Caravan" exists in German but is trade jargon; readers say Wohnwagen. ASO keyword: wohnwagen. |
| camper trailer (AU) | **Camper-Trailer** (Zeltanhänger) | Gloss once. |
| big rig | **großes Gespann**, **großes Wohnmobil** | |
| towing | **mit Anhänger fahren**, **Gespann** | "Ziehen" only for the physical act. |
| 4WD, four-wheel drive | **Allrad**, **Allradfahrzeug**, **4WD** | australia.com/de: Allradantrieb. Keep **4WD** where a sign or track grading says it ("4WD only" = nur mit Allrad). Never "Vierradantrieb". |
| AWD | **AWD** (permanenter Allradantrieb, kein Geländewagen) | Gloss when contrasted with 4WD. |
| road trip | **Roadtrip** | Duden spelling, one word. ASO keyword. Also "Rundreise" (ASO keyword) for a loop. |
| the big lap (AU) | **die große Runde um Australien** | Add "(Big Lap)" once if the English term matters. |
| working holiday | **Work and Travel** | Visa: **Working-Holiday-Visum**. |
| backpacker | **Backpacker** | Never "Rucksacktourist" (the app's label is a mistranslation). |
| grey nomads (AU) | **Grey Nomads** | Gloss once: Rentner, die monatelang mit Wohnwagen oder Wohnmobil unterwegs sind. |

### Places to stay

| English | German | Notes and evidence |
|---|---|---|
| campground, campsite (the place) | **Campingplatz** | GSC top German query: "campingplätze neuseeland karte"; also "campingplätze neuseeland app", "campingplatz neuseeland". Never "Campground" in running German text. |
| site, pitch | **Stellplatz** | ASO keywords: stellplätze, "Stellplatz-Karte". |
| powered site / unpowered site | **Stellplatz mit Strom / ohne Strom** | App's "Unterstützte Websites" is a mistranslation. |
| tent site | **Zeltplatz**, **Stellplatz fürs Zelt** | |
| caravan park (AU) | **Caravanpark** | One word (Duden rule for English compounds). Gloss once if needed: Campingplatz mit Stellplätzen und Cabins. |
| holiday park | **Holiday Park** (plural Holiday Parks) | Used verbatim by newzealand.com/de, urlaubsguru, ADAC. The app's "Ferienpark" suggests a European bungalow resort, so avoid it in prose. |
| cabin (holiday park) | **Cabin** (plural Cabins) | Use "Hütte" only for DOC and backcountry huts. |
| hut (NZ, DOC) | **Hütte**, **DOC-Hütte**, **Backcountry-Hütte** | App: Backcountry-Hütten. |
| roofed accommodation | **feste Unterkünfte** | |
| hostel, backpackers (NZ/AU) | **Hostel** | |
| farm stay, station stay | **Farmaufenthalt**, **Übernachtung auf einer Station** | Gloss Station once: riesiger Rinder- oder Schaffarmbetrieb im Outback. |
| showground (AU) | **Showground** | Gloss once: Messe- und Festgelände, oft mit günstigen Stellplätzen. |
| rest area | **Rastplatz** | Gloss once with the sign wording when it matters: Rastplatz (auf Schildern "Rest Area"). App: Rastplätze. |
| day-use area | **Tagesplatz**, **Picknickplatz** (kein Übernachten) | |
| free camp(s), free camping (AU) | **kostenlose Campingplätze**, **kostenlos campen**, **Free Camps** | "Free Camps" is what Work-and-Travel travellers say on the ground; use it as a gloss or in quotes from signs and apps. Never "Gratisplätze" or "Gratis-Campen". |
| freedom camping (NZ) | **Freedom Camping** | The legal term; Germans search it verbatim ("freedom camping neuseeland", "freedom camping neuseeland karte"). Gloss once: kostenloses Übernachten außerhalb von Campingplätzen. Compounds: Freedom-Camping-Platz, Freedom-Camping-Regeln. App's "Freiheitscampingplätze" is a mistranslation. |
| camp outside a campground with a vehicle | **frei stehen**, **Freistehen** | Camper slang for overnighting outside a campsite. Good for AU free camping and NZ freedom camping in a vehicle. |
| wild camping | **Wildcampen** | Germans search "neuseeland wildcampen", "wildcampen neuseeland". Use the word in titles, meta or FAQs where the page answers that question, and say plainly where it is not allowed. Do not use it as a neutral synonym for legal freedom camping. |
| self-contained (NZ certification) | **self-contained**, **zertifiziert self-contained** | Verbatim in German NZ media; gloss once: zertifiziert autark, mit fest eingebauter Toilette sowie Frisch- und Abwassertank. Write "als self-contained zertifiziert", "ein Self-contained-Fahrzeug", "das Self-contained-Zertifikat". App's "eigenständig" is a mistranslation. |
| self-sufficient (in general) | **autark** | Normal German camper word. |
| dump point (AU), dump station (NZ) | **Entsorgungsstation** | German camper standard; ASO keyword entsorgung. Mention the sign wording once if useful (auf Schildern "Dump Point" / "Dump Station"). Never "Dump-Punkt", "Müllstation", "Mülldeponie" (app mistranslations). |
| grey water / black water | **Grauwasser / Schwarzwasser** | |
| cassette toilet | **Kassettentoilette** | |
| potable water, drinking water | **Trinkwasser** | |
| water filling point | **Wasserstelle** | |
| long-vehicle parking | **Parkplätze für lange Fahrzeuge** | |

### Land, agencies and rules

| English | German | Notes |
|---|---|---|
| DOC (Department of Conservation) | **DOC** | Protected. Gloss on first use per page: DOC (Department of Conservation, Neuseelands Naturschutzbehörde). GSC: "doc campingplätze neuseeland", "doc camping neuseeland". |
| DOC campsite | **DOC-Campingplatz** | |
| Great Walk(s) | **Great Walk(s)** | Proper name. Gloss once: Neuseelands bekannteste Mehrtageswanderwege, Hütten und Zeltplätze nur mit Buchung. Give a number only if the English does. |
| track (NZ) | **Track** in names (Milford Track), otherwise **Wanderweg** | |
| tramping | **Wandern**, **Mehrtageswanderung**; "Tramping" once with gloss | |
| backcountry | **Hinterland**, **Backcountry** (in DOC product names) | |
| national park | **Nationalpark** | Official names stay English: "Tongariro National Park", "Kakadu National Park". |
| NPWS, Parks Victoria, QPWS, Parks and Wildlife Tasmania, etc. | unchanged, gloss once | e.g. NPWS (National Parks and Wildlife Service, die Nationalparkbehörde von New South Wales). |
| council (AU, NZ) | **Gemeinde**, **Gemeindeverwaltung**; for NZ also **Council** in names | "District Council", "Regional Council" stay in proper names. |
| bylaw | **Satzung**, **örtliche Vorschrift** | "Freedom-Camping-Satzung" is correct legal German; in plain advice prefer "die Vorschriften der Gemeinde". |
| land manager | **die zuständige Stelle**, **Verwaltung**, **Betreiber** | Never "Landverwalter", "Geländeverwalter". |
| Crown land (AU), state forest | **Crown Land (staatliches Land)**, **State Forest (Staatsforst)** | |
| Traditional Owners, Country (AU) | **Traditional Owners**, **Country** with gloss: das Land, dem sich eine Aboriginal-Gemeinschaft verbunden fühlt | Write "Aboriginal People", "First Nations"; never "Aborigines". |
| whenua, iwi (NZ) | keep, gloss: whenua (Land), iwi (Stamm) | Keep macrons in all te reo words. |
| fine, infringement | **Bußgeld** | "Strafzettel" only for parking tickets. |
| total fire ban (AU) | **Total Fire Ban** (absolutes Feuerverbot) | Official term on signs and apps. |
| fire danger rating | **Feuergefahrenstufe** | |
| bushfire | **Buschfeuer** | NZ wildfire: **Vegetationsbrand**, **Flächenbrand**. |
| campfire | **Lagerfeuer** | |
| fire restrictions / fire season | **Feuerverbote und -beschränkungen**, **Feuersaison** | |
| biosecurity | **Biosicherheit**, **Einfuhrbestimmungen** | Quarantine: **Quarantäne**. |
| sandflies | **Sandflies** | Germans search "sandflies neuseeland". Gloss once: winzige, stechende Kriebelmücken. |
| kauri dieback | **Kauri-Sterben** | Add "(kauri dieback)" once. |

### Roads and money

| English | German | Notes |
|---|---|---|
| driving on the left | **Linksverkehr**, **links fahren** | |
| licence / International Driving Permit | **Führerschein / Internationaler Führerschein** | |
| give way | **Vorfahrt gewähren** | |
| roundabout | **Kreisverkehr** | |
| one-lane bridge | **einspurige Brücke** | |
| unsealed road, gravel road | **Schotterstraße**, **unbefestigte Straße**, **Piste** (outback) | |
| road train | **Road Train** | Gloss once: Lkw mit bis zu vier Anhängern, über 50 Meter lang (keep the English figure). |
| roadhouse | **Roadhouse** | Gloss once: Tankstelle mit Imbiss und oft Stellplätzen im Outback. |
| toll, toll road, e-tag | **Maut**, **Mautstraße**, **E-Tag** | |
| speed camera | **Blitzer** | |
| demerit points | **Strafpunkte** | |
| fatigue, Driver Reviver | **Müdigkeit**, **Übermüdung**; "Driver Reviver" stays | |
| fuel, petrol, diesel | **Sprit** (casual), **Kraftstoff** (formal), **Benzin**, **Diesel** | "Spritkosten", "Spritpreise". |
| petrol station | **Tankstelle** | |
| WOF (NZ) | **WOF** | Gloss once: Warrant of Fitness, die neuseeländische Hauptuntersuchung (vergleichbar mit dem TÜV). |
| registration, rego | **Zulassung** | "(Rego)" once in AU if helpful. |
| RUC (NZ) | **RUC** | Gloss once: Road User Charges, die Straßennutzungsgebühr für Dieselfahrzeuge. |
| groceries | **Lebensmittel**, **Einkauf** | |
| eating out | **Essen gehen**, **Restaurantpreise** | |

### App and site vocabulary

Use the app's German label when a page names a button, tab or screen, unless the app's label is a
mistranslation (listed here with the replacement).

| English | German | App label |
|---|---|---|
| guide, guides (site articles) | **Ratgeber** | Never "Führer", "Reiseführer", "Campingführer", "Leitfaden". |
| place (app record) | **Ort**; a camping place is a **Platz** | App: Orte |
| place screen | **Detailseite** | |
| Explore | **Entdecken** | Entdecken |
| collections, smart collections | **Sammlungen**, **intelligente Sammlungen** | Sammlungen, Intelligente Sammlungen |
| Liked | **„Gefällt mir“** | App: "Gefallen" (mistranslation, reported) |
| Starred | **„Mit Stern“** | Mit Stern |
| Want to visit | **„Wunschziele“** | Wunschziele |
| Visited | **„Besucht“** | Besucht |
| Pins | **„Pins“** | App: "Stifte" (mistranslation, reported) |
| All saved | **„Alle gespeicherten“** | App: "Alles gerettet" (mistranslation, reported) |
| trip, trip planner | **Reise**, **Reiseplaner** | Reise, Reiseplaner |
| itinerary | **Reiseroute** | Reiseroute |
| stop | **Stopp** | Stopp |
| to-do(s), packing list | **To-dos**, **Packliste** | |
| Pass | **Pass** (der Pass) | Pass, "Im Pass enthalten" |
| filters | **Filter** | Filter |
| map, satellite | **Karte**, **Satellit** | |
| Look Around (Apple) | **„Umsehen“** (Apples Name für Look Around) | App: "Schauen Sie sich um" (wrong register and not Apple's name) |
| Street View (as the site names the feature) | **Street View** | |
| widget | **Widget** | |
| Calendar (Apple app) | **Kalender** | |
| settings | **Einstellungen** | Einstellungen |

## 3. Conventions

- **Numbers:** dot for thousands, comma for decimals: 74.000, 6.500, 2,08. "74,000+" is "über 74.000"
  in prose and "74.000+" in stat tiles. Keep every number exactly; never round or convert.
- **Currency:** amount, space, ISO code: "35 AUD", "2,08 AUD pro Liter", "15 NZD". "A$", "AU$", "$" in
  an Australian context become AUD; "NZ$" and "$" in a New Zealand context become NZD. Never convert
  to euros. Ranges in prose: "80 bis 130 AUD"; in tables and tips "80–130 AUD" (en dash, no spaces).
- **Dates and times:** "5. August 2026", "1. Juni", "von Mai bis September"; times "21 Uhr", "21:30 Uhr".
  Seasons are the southern ones: say "im australischen Sommer (Dezember bis Februar)" when the English
  only says "summer" and the month matters to a northern-hemisphere reader. Do not add facts beyond
  this.
- **Units:** km, km/h, m, °C, l (Liter). "per litre" is "pro Liter".
- **Percent:** "15 %" (space before %).
- **Quotes:** „…“, nested ‚…‘. App labels and sign wording go in „…“.
- **Punctuation:** German comma rules (comma before dass, weil, wenn, ob, relative clauses, and between
  full clauses joined by und only when it helps reading). Colons are fine. **No em dashes (—).** Do not
  use a spaced en dash ( – ) as a Gedankenstrich either; use a comma, colon, parentheses or a new
  sentence. The en dash is only for ranges.
- **Compounds:** closed or hyphenated, never with a space: "Campingplatzgebühr", "DOC-Campingplatz",
  "Freedom-Camping-Regeln", "Roadtrip-Planer", "iPhone-App". English multi-word nouns that act as
  names may stay open: "Holiday Park", "Great Walk", "Total Fire Ban", "Road Train".
- **Place names:** keep the English or official form: Great Ocean Road, Gold Coast, Blue Mountains,
  Milford Sound, Bay of Islands, Cape Reinga. Keep Aboriginal and Māori names exactly, with diacritics
  and macrons: Uluṟu, K'gari, Ikara, Tjoritja, Aotearoa, Aoraki, Wānaka, Whakatāne, Rakiura, Māori,
  te reo. Established German exonyms are used for countries and for: **Australien**, **Neuseeland**,
  **Tasmanien**, **Nordinsel**, **Südinsel** and **das Rote Zentrum** (Red Centre). "Great Barrier
  Reef" stays English, as in current German media. See section 6 for the current engine limitation on
  Tasmania and the island names.
- **States:** New South Wales, Victoria, Queensland, South Australia, Western Australia, Northern
  Territory, Australian Capital Territory stay as written (protected terms; German media use them too).
  Abbreviations NSW, QLD, WA, SA, NT, ACT, VIC, TAS stay.
- **Gender:** der Campingplatz, der Stellplatz, der Holiday Park, der Caravanpark, das Wohnmobil, der
  Camper, der Campervan, der Van, der Pass, die App, die Hütte, der Great Walk, der Track, das
  Freedom Camping, die Entsorgungsstation, der Rastplatz, das Roadhouse, der Road Train, die Maut,
  der WOF, die Rego/Zulassung, das Department of Conservation, die Nordinsel/Südinsel (also die North
  Island/South Island).
- **Never change:** AussieCamps, KiwiCamping, App Store, iPhone, iOS, BookEasy, BookIt, product and
  park names, agency names and abbreviations (DOC, NPWS, MBIE, NZTA, Waka Kotahi, RBA, RBNZ), URLs,
  `<a data-guide="…">…</a>` markup and `{placeholders}`. Translate the link text inside markup, keep
  the tag and its attributes byte for byte.
- **Counts:** keep the structure identical to English: same number of sections, paragraphs, tips, FAQ
  items, sources and price rows. Sentences may move, split or merge inside one paragraph only.

## 4. Search terms to lead with

Australia: "Campen in Australien", "Camping Australien", "Campingplätze Australien", "Wohnmobil
Australien", "Camper Australien", "kostenlos campen", "Freistehen", "Rastplätze", "Roadtrip
Australien", "Work and Travel Australien", "im Auto schlafen", "Autofahren in Australien",
"Verkehrsregeln", "Spritpreise", "Reisekosten Australien 2026", "Lebensmittelpreise".

New Zealand: "Campingplätze Neuseeland" (with "Karte" and "App"), "Camping Neuseeland", "Campen in
Neuseeland", "Freedom Camping Neuseeland", "Wildcampen Neuseeland" (with the legal answer), "DOC
Campingplätze", "DOC-Hütten", "Sandflies Neuseeland", "Wohnmobil Neuseeland", "Camper Neuseeland",
"WOF Neuseeland", "Autofahren in Neuseeland", "Verkehrsschilder Neuseeland", "Reisekosten Neuseeland
2026", "Lebensmittelpreise Neuseeland".

## 5. Banned

- **"Offline-Karte" in any form** (Offline-Karte, Offline-Campingkarte, offline Karten, Karten offline).
  The apps are not offline maps. Write what is true: "Ortsdetails und Ratgeber funktionieren auch ohne
  Netz; Kartenkacheln, Navigation, Wetter und Fotos brauchen Empfang." Also never "Offline
  Campingkarte" as a meta keyword.
- **Führer** for guide (Reiseführer, Campingführer, Ratgeberführer).
- **Sie**, Ihr, Ihnen as forms of address.
- **Em dashes**, and spaced en dashes used as dashes.
- **Superlatives the English does not make** ("die beste", "einzigartig", "atemberaubend",
  "traumhaft"). Keep enthusiasm at the level of the English.
- **Anglicisms German readers notice as translation:** "Campground" in prose, "Sinn machen" (use
  "sinnvoll sein", "Sinn ergeben"), "in 2026" (use "2026" or "im Jahr 2026"), "am Ende des Tages",
  "realisieren" for notice, "einmal mehr" as filler, "Das macht den Unterschied" repeated, "nicht
  wirklich" as a softener, "basierend auf" at the start of a sentence, "erinnern" without sich/an.
- **Calques and stiff constructions**, with fixes:

| Literal (bad) | Natural (good) |
|---|---|
| Lies den Ort, nicht das Internet | Vor Ort gilt das Schild, nicht das Internet |
| Das Fahrzeug macht den Ort nicht legal. | Ob du irgendwo übernachten darfst, hängt nicht vom Fahrzeug ab. |
| geben dir eine klarere Erlaubnis | dort ist klar geregelt, dass du übernachten darfst |
| Jeder Ort öffnet sich mit dem Detail, das den Ausschlag gibt. | Jede Detailseite zeigt sofort, worauf es bei der Wahl ankommt. |
| Herausgezoomt fassen sich die Nadeln zu Zahlen zusammen | Beim Herauszoomen werden nahe Pins zu Gruppen mit Zahl zusammengefasst |
| Gitter und Sichtschutz ändern alles | Mit Moskitonetz und Sichtschutz schläft es sich ganz anders |
| Kostenlose Gratisplätze / Gratisplätze | kostenlose Stellplätze, kostenlose Campingplätze |
| Verlass dich auf die aktuellen Infos des Geländeverwalters | Maßgeblich ist, was die Gemeinde oder der Betreiber aktuell angibt |
| Es wird empfohlen, dass du ... | Am besten ... / Plane ... ein |
| Das ist der Schlüssel | Darauf kommt es an |
| Nimm es mit auf die Straße | Für unterwegs / Ab auf die Straße |
| Wie auch immer du unterwegs bist (for "However you carry home") | Egal, womit du unterwegs bist |

## 6. Engine limitation (pending orchestrator decision)

German uses **Tasmanien**, **Nordinsel** and **Südinsel** (newzealand.com/de, australia.com/de-de,
every German guidebook). The engine currently protects "Tasmania" (AussieCamps) and "North Island",
"South Island" (KiwiCamping) as untranslatable terms, so a German value without the English form is
rejected. Until the configuration changes, applied values use the protected English form, written to
read as naturally as possible ("in Tasmania", "auf der South Island"), and the German master versions
with the exonyms are kept for re-application. Avoid genitive forms of these names ("Tasmanias"):
write "in Tasmanien", "von Tasmanien", "auf der Südinsel".

## 7. Before and after (from the existing translations)

**1. AussieCamps, "Can you sleep in your car in Australia?", section heading and first paragraph**

- English: "Read the location, not the internet" / "Check signs for parking hours, no-camping rules
  and vehicle restrictions. Beach carparks and residential streets are commonly monitored in busy
  visitor towns."
- Before: "Lies den Ort, nicht das Internet" / "Achte auf Schilder zu Parkzeiten, Campingverboten und
  Einschränkungen für Fahrzeuge. Parkplätze am Strand und Wohnstraßen werden in belebten Urlaubsorten
  häufig kontrolliert."
- After: "Vor Ort zählt das Schild, nicht das Internet" / "Schau auf die Schilder: Parkzeiten,
  Campingverbote, Einschränkungen für bestimmte Fahrzeuge. In beliebten Urlaubsorten werden
  Strandparkplätze und Wohnstraßen oft kontrolliert."

**2. AussieCamps, same guide, practical limits**

- English: "Window shades, insect screens and a proper mattress transform sleeping in a car from an
  endurance exercise into something repeatable."
- Before: "Sichtschutz, Insektengitter und eine richtige Matratze machen aus dem Schlafen im Auto statt
  einer Durchhalteübung etwas, das du wiederholen kannst." (ungrammatical)
- After: "Mit Sichtschutz an den Fenstern, Moskitonetzen und einer guten Matratze wird das Schlafen im
  Auto von der Mutprobe zu etwas, das du auch eine Woche lang durchhältst."

**3. Both sites, homepage features**

- English: "Every place opens with the detail that decides it." / "Pins group into counts when you are
  zoomed out and break apart as you move in."
- Before: "Jeder Ort öffnet sich mit dem Detail, das den Ausschlag gibt." / "Herausgezoomt fassen sich
  die Nadeln zu Zahlen zusammen und lösen sich beim Hineinzoomen wieder auf."
- After: "Jede Detailseite zeigt sofort, worauf es bei der Wahl ankommt." / "Beim Herauszoomen werden
  nahe Pins zu Gruppen mit Zahl zusammengefasst, beim Hineinzoomen lösen sie sich wieder auf."
