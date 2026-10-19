# Dutch (nl) style guide: AussieCamps and KiwiCamping

This file is the contract for every Dutch unit on aussiecamps.app/nl and campingapp.nz/nl. The same file lives in both repos. It applies to new translations and to rewrites of existing ones.

The reader is Dutch or Flemish, plans a camper trip, road trip or working holiday in Australia or New Zealand, and reads Dutch travel media: ANWB, NKC, Australie.nl, Nieuw-Zeeland.nl, 333travel, backpacker blogs. The copy must read as if one of those writers wrote it for them. Nobody should be able to tell there was an English original.

## 1. Voice

- **Who is writing:** an experienced Dutch camper traveller who has done the trip and tells a friend how it works. Practical, calm, specific, a bit dry. Warm without enthusiasm for its own sake.
- **Address:** informal **je/jij/jouw**, as in docs/translation.config.json (`register.nl: informal`). Dutch camper and travel media (ANWB, NKC, Australie.nl, Nieuw-Zeeland.nl) all address the reader with je. Never u/uw, also not in legal pages (privacy, terms). Use unstressed **je** by default; **jouw** only where it carries stress ("jouw route, niet die van de verhuurder").
- **Sentence rhythm:** Dutch prose is shorter and more direct than English guide copy. Split long English sentences with three clauses into two. Lead with the point, then the reason. Put the verb early and avoid long nominal chains ("het reserveren van een plek op een camping" → "een plek reserveren").
- **Active, concrete verbs.** "Je boekt NPWS-campings online", not "NPWS-campings worden online geboekt". "Check", "reken op", "houd rekening met", "tank bij", "sta je", "rij je" are normal.
- **Imperatives are fine and common** in tips and headings ("Tank in Port Augusta", "Lees de borden"). Headings may also be short questions ("Wie beheert de grond?") or noun phrases.
- **Dutch connectors, not translated ones:** "want", "dus", "wel", "toch", "gewoon", "meestal", "vaak", "sowieso", "overigens" (sparingly). Not "echter" at the start of every sentence, not "derhalve", "teneinde", "middels", "dienen te".
- **Loanwords:** Dutch travel writers freely keep the English word when it is what the traveller sees on signs, maps and booking sites (rest area, holiday park, powered site, free camp, self-contained, roadhouse, road train, outback, Great Walk, long drop). Give a short Dutch gloss on the first use per page, then use whichever reads naturally. Do not stack English words into a Dutch sentence where a normal Dutch word exists (shortlist → selectie/lijstje is fine; "check" is fine; "insights", "features", "awareness" are not).
- **Flanders:** write standard Dutch that reads naturally in both countries. Avoid NL-only slang (bekeuring is fine, "prakkiseren", "pinnen" only where the topic is card payment) and Belgian-only forms. Taalunie spelling (Groene Boekje), so: Nieuw-Zeeland, Australië, roadtrip, e-mail, barbecue, wifi.

## 2. Glossary

Sources: S = Search Console queries in Dutch (KiwiCamping, 3 months to 19 Oct 2026), A = App Store nl-NL keywords (2026-10-14 live check), U = app UI label (Localizable.xcstrings, nl), W = Dutch web usage (ANWB kampeerinformatie Australië/Nieuw-Zeeland, NKC "Australië met de camper", NKC "Hoe werkt een sanistation", Nieuw-Zeeland.nl "Praktische informatie camper huren", Australie.nl "3 tips voor wildkamperen in Tasmanië").

| English | Dutch | Notes / source |
|---|---|---|
| campervan, van | **camper** (ook: campervan, busje) | Dutch default is "camper" (S: camper huren nieuw zeeland kosten, camperhuur nz budget, 3 weken nz camper; A: camper). "Campervan" is fine for the rental class in NZ/AU. A small van is a "busje" or "campervan", a converted van a "omgebouwd busje". |
| motorhome | camper, grote camper, motorhome | NKC uses "motorhome" for the large class. |
| caravan | caravan | |
| big rig, caravan + tow vehicle | grote combinatie, lange combinatie | |
| campervan hire | camperhuur, een camper huren | S: camperhuur nz budget, camperverhuur tarieven. |
| road trip | **roadtrip** (één woord) | A: roadtrip. For a planned tour also "rondreis" (S: north island nz rondreis) and "camperreis" (S: new zealand camperreis, camperreis met kinderen). |
| itinerary | route, reisschema | The app's trip screen is "reis". |
| campground, campsite (the place) | **camping** | S: campings nieuw zeeland, beste campings nieuw zeeland; A: campings; U: Campings. Never leave "campground" in English. |
| campsite, pitch (the spot) | (kampeer)plek, plaats | S: mooiste kampeerplekken nz. "Plek" is the default; "staanplaats" for a marked pitch at a park. |
| camping (activity) | kamperen | S: kamperen nz, camping regels nieuw zeeland. |
| caravan park | **caravanpark** | |
| holiday park | **holiday park** (mv. holiday parks) | The Australian/NZ name on every sign and booking site; NKC uses "holiday parks". Gloss once: "een holiday park (een uitgebreide camping met huisjes en faciliteiten)". Not "vakantiepark": Dutch readers picture a bungalow park. Exception: the app category label is "Vakantieparken" (U); use it only when naming that filter. |
| camper stop, aire | camperplaats | Use only for NL/BE comparisons or where English means a camper-only stop. A: camperplaatsen. |
| free camping (AU) | **gratis kamperen**, free camps | W: Australie.nl, NKC ("free camps", "gratis overnachtingsplekken"). In titles and meta that target the search, "wildkamperen" may lead (W: "3 tips voor wildkamperen in Tasmanië"), but the body explains that free camping in Australia is legal only where it is allowed. |
| freedom camping (NZ) | **freedom camping**, vrij kamperen | The legal term on NZ signs and in the law (W: ANWB). First use: "freedom camping (vrij kamperen buiten een camping)". Titles may lead with "wildkamperen" (the Dutch search term). Never imply wildkamperen is legal everywhere. |
| wild camping, dispersed camping | wildkamperen, vrij in de natuur staan | Not "verspreid kamperen". |
| self-contained | **self-contained** | W: Nieuw-Zeeland.nl "gecertificeerd self-contained voertuig". Gloss once: "self-contained (met eigen toilet, watertanks en afvalwatertank)". "Zelfvoorzienend" only as that gloss, never as the certificate name. |
| certified self-contained | gecertificeerd self-contained | Keep "green warrant", "blue warrant" in English. |
| dump point (AU) / dump station (NZ) | **lozingspunt** (AU sign: dump point, NZ sign: dump station) | U (AU): Lozingspunten; U (NZ): Dumpstations; A (NZ): lozing; W: NKC "loospunt", "sanistation". First use per page: "lozingspunt (dump point)" on AussieCamps, "lozingspunt (dump station)" on KiwiCamping. When naming the KiwiCamping app category, write "Dumpstations". Not "loospunt", "stortput" or "dumppunt" in new copy. |
| grey water / black water | grijswater / toiletafval, zwartwater | NKC: grijswater (één woord). |
| cassette toilet | cassettetoilet | |
| rest area | **rustplaats** (rest area op borden) | U: Rustplaatsen; NKC keeps "rest areas". First use: "rustplaats (rest area)". |
| truck bay | parkeerhaven voor vrachtwagens | |
| day-use area | dagrecreatieplek, picknickplaats | |
| national park | nationaal park | A: nationale parken. |
| state forest | State Forest (staatsbos) | Keep the name, gloss once. |
| Crown land | Crown land (staatsgrond) | |
| council | gemeente (council) | "shire" stays "shire" when it is part of a name. |
| land manager | beheerder | Not "landbeheerder" in every sentence. |
| DOC | **DOC** | Protected. First use per page: "DOC (Department of Conservation, de Nieuw-Zeelandse natuurbeheerder)". Compounds with hyphen: DOC-camping, DOC-hut, DOC-kantoor (W, S: doc campings nieuw zeeland). |
| NPWS, Parks Victoria, QPWS, Parks and Wildlife | keep the name | Short gloss once: "NPWS (de parkendienst van New South Wales)". |
| hut | hut, DOC-hut | A: hutten; U: Hutten. "Berghut" only for alpine huts. |
| Great Walk | Great Walk (mv. Great Walks) | Gloss once: "een van de Great Walks, de meerdaagse topwandelingen van DOC". |
| tramping | trekken, meerdaagse wandeling (tramping) | |
| powered site / unpowered | plek met stroom / plek zonder stroom (powered site) | W: Nieuw-Zeeland.nl "powered sites", "plekken met stroomvoorziening". |
| booking, to book | reservering, boeken/reserveren | Both natural. |
| fee | tarief, kosten, prijs | Not "vergoeding". |
| park pass | parkpas (official name kept: Holiday Pass, Parks Pass) | |
| working holiday (visa) | **working holiday**, working holiday visum | Dutch backpackers use the English term; "werkvakantie" only as a gloss. Subclass numbers stay (417, 462). |
| backpacker | backpacker | |
| 4WD | 4WD, 4x4 | "4WD-route", "alleen voor 4WD". |
| toll, toll road | tol, tolweg | |
| fuel, petrol, diesel | brandstof, benzine, diesel, tanken | "Unleaded 91" → "benzine (91 octaan)". |
| roadhouse, servo | roadhouse, tankstation | |
| road train | road train | Gloss once: "road trains, vrachtwagens met tot vier opleggers". |
| outback, the bush | de outback, de bush | |
| bushfire | bosbrand, natuurbrand | |
| total fire ban | Total Fire Ban (volledig stookverbod) | Gloss once, then "stookverbod". |
| fire danger rating | brandgevaarniveau | |
| campfire | kampvuur | |
| BBQ | barbecue | |
| WoF (Warrant of Fitness) | WoF (Warrant of Fitness, de Nieuw-Zeelandse APK) | Natural Dutch hook: APK. Flemish readers know "keuring"; "APK" is understood. |
| rego | registratie (rego) | |
| Road User Charges | Road User Charges (RUC), de kilometerheffing voor diesel | W: Nieuw-Zeeland.nl. |
| ferry | veerboot, overtocht | Interislander, Bluebridge, Spirit of Tasmania stay. |
| driver licence | rijbewijs | S: rijbewijs nieuw zeeland. International Driving Permit → internationaal rijbewijs. |
| speed limit | maximumsnelheid | |
| give way | voorrang geven/verlenen | |
| one-lane bridge | eenbaansbrug | |
| gravel road | gravelweg, onverharde weg | |
| school holidays | schoolvakanties | |
| long weekend | lang weekend | |
| Traditional Owners, Country | de traditionele eigenaren (Traditional Owners), het land (Country) | Keep the capitalised "Country" where the source uses it as a concept: "Country, het land in de zin van de Aboriginal eigenaren". |
| sandflies | sandflies (zandvliegjes) | |
| kauri dieback | kauri dieback (kauri-sterfte) | |
| long drop | long drop (droogtoilet) | |
| tap water, potable water | kraanwater, drinkwater | U: Waterpunten. |
| the big lap | de Big Lap, de grote ronde om Australië | |
| app screens and labels | as in the app (U) | Liked = Vond ik leuk, Starred = Met ster, Want to visit = Wil bezoeken, Visited = Bezocht, Collections = Collecties, Explore = Ontdek, Filters = Filters, Map = Kaart, Saved = Opgeslagen, Campgrounds = Campings, Rest areas = Rustplaatsen, Dump points = Lozingspunten (AU), Dump stations = Dumpstations (NZ), Holiday parks = Vakantieparken, Water filling points = Waterpunten, Public toilets = Openbare toiletten, Weather = Weer, Pins = Pinnen, All saved = Allemaal opgeslagen, Smart collections = Slimme collecties, Itinerary = Reisplan, Directions = Routebeschrijving, Settings = Instellingen, Look Around = Kijk rond. Put list names in quotes in running text (‘Vond ik leuk’, ‘Wil bezoeken’). Do not use the app's mistranslations (Pincode for "pin", Duidelijk for "Clear", U-forms). |
| place screen | plekscherm, de pagina van een plek | |
| the Pass (app premium) | de Pass | Capitalised product name. |

**Place names.**
- Countries use the Dutch form: Australië, Nieuw-Zeeland (always with hyphen and capital Z, even though people search "nieuw zeeland"). Adjectives: Australisch, Nieuw-Zeelands.
- States, territories and islands stay in their original English form, as the house rules and the engine require: New South Wales, Victoria, Queensland, South Australia, Western Australia, Tasmania, Northern Territory, Australian Capital Territory, North Island, South Island, Stewart Island. With an article: "het North Island", "het South Island" (like "het eiland"). Adjectives from them are written in Dutch where the English is an adjective: "Tasmaanse parken", "Queenslandse kust" is clumsy, so prefer "de kust van Queensland".
- Cities and regions as in English: Sydney, Melbourne, Perth, Darwin, Cairns, Christchurch, Queenstown, Auckland, Wellington, Coromandel, Northland, Canterbury, the Great Ocean Road (de Great Ocean Road).
- Māori names keep their macrons exactly: Wānaka, Ōtautahi, Tāmaki Makaurau, Aoraki, Aotearoa, Taupō, Whakatāne, Ōpōtiki. Aboriginal names keep their spelling and diacritics: Uluṟu, K'gari, Ikara, Tjoritja, Kata Tjuṯa.
- Official names stay as written: Department of Conservation, NZ Transport Agency Waka Kotahi, Home Affairs, Immigration New Zealand, Tourism Australia, Interislander. Never translate a park, campground or business name.

## 3. Conventions

- **Numbers:** thousands with a point, decimals with a comma: 74.000, 2,08, 1,5 liter. "74,000+" → "ruim 74.000" in prose, "74.000+" in stat labels.
- **Currency:** prices stay in the local dollar. Symbol before the amount with a space, as Dutch writes "€ 12,50": **A$ 35**, **NZ$ 35**, **A$ 2,08 per liter**. Where the English writes a bare "$35" for a local price, write "A$ 35" (AussieCamps) or "NZ$ 35" (KiwiCamping) so Dutch readers never read US dollars. Ranges: "A$ 80 tot 140" in prose, "A$ 80–140" in tables and short tips (an en dash, never an em dash). Currency codes in table headers (AUD, NZD, EUR) stay.
- **Dates:** "5 augustus 2026", months and weekdays lowercase. "Updated" labels: "Bijgewerkt op".
- **Times:** 24-hour clock with a point: "22.00 uur", "van 17.00 tot 9.00 uur". "Midday" → "12.00 uur" or "het middaguur".
- **Units:** km, km/u (not km/h in Dutch prose), liter, °C, meter. "L" → "liter" in prose, "l" in compact tables.
- **Quotes:** single curly quotes ‘…’ for sign text, terms and quoted phrases, and the apostrophe ’ in "auto’s", "foto’s", "to-do’s". Keep straight quotes inside HTML attributes untouched.
- **Punctuation:** no space before : ; ? !. Colons are followed by a lowercase word unless a full quoted sentence or name follows. A list in a sentence uses commas and "en" or "of", no serial comma.
- **Compounds:** one word (kampeerplek, camperhuur, roadtrip, grijswater). Hyphen after an abbreviation or brand: DOC-camping, NPWS-camping, 4WD-route, iPhone-app, AussieCamps-app, KiwiCamping-app. A protected brand must stay intact; "de AussieCamps-app" is fine.
- **Capitals:** headings and titles in sentence case: "Kampeerregels in Queensland", not "Kampeerregels In Queensland".
- **Never changes:** AussieCamps, KiwiCamping, App Store, iPhone, AUD, NZD, DOC, Aotearoa, Waka Kotahi, all URLs, markup (`<a data-guide="slug">…</a>`), `{placeholders}`, official programme names (Tasmania Parks Pass, Desert Parks Pass, Campsite Pass, Great Walks), product UI names per the app.
- **Structure:** same number of sections, paragraphs, tips, FAQ items, sources and price rows as the English. Within one paragraph you may reorder, split or merge sentences.
- **Titles, H1s and meta:** lead with the Dutch search term (camper, kamperen, kampeerregels, wildkamperen, camping, rijbewijs, kosten, prijzen, boodschappen), then the place. Keep `title` under about 60 characters and `description` under about 155 where the English allows it. Example: "DOC-campings in Nieuw-Zeeland: regels die je moet kennen".

## 4. Banned

**Facts and claims**
- Any "offline map" equivalent: offline kaart, offline kaarten, offline kampeerkaart, kaart werkt offline, offline navigatie, offline routeplanner. The apps keep place details and guides offline; map tiles, routes, weather and photos need a connection. Allowed: "plekgegevens werken offline", "alle plekken staan in de app, ook zonder bereik".
- Superlatives the English does not have (de allerbeste, ultiem, perfect, dé app, onmisbaar) and promises of free access to Pass data.
- Em dashes (—) anywhere. Use a colon, a comma, brackets or a new sentence.

**Register:** u, uw, "U kunt". Mixed je/u inside one page.

**Calques and stiff constructions** (bad → good):

| Literal or stiff | Natural Dutch |
|---|---|
| Bouw de reis / bouw een reis | Stel je reis samen, stippel je route uit |
| Een aanwezige vuurplaats maakt een vuur niet legaal | Ook bij een vuurplaats mag je tijdens een stookverbod geen vuur maken |
| verspreid in de natuur kamperen (dispersed camping) | vrij in het bos staan, wildkamperen waar het mag |
| Respecteer de gedeelde tijden | Houd je aan de stiltetijden |
| het juiste product boeken (DOC product) | de juiste plek of het juiste tarief boeken |
| vat een rustige plek niet op als stilzwijgende toestemming | een rustige plek betekent nog niet dat het mag |
| Het is belangrijk om … te … | Zorg dat je … / … is belangrijk, want … (or simply the imperative) |
| Wanneer het aankomt op / als het gaat om | Bij … / Voor … |
| Dit is waar … | Hier … / Daar … |
| maak gebruik van | gebruik |
| dient te, middels, teneinde, derhalve | moet, met, om, dus |
| op de dag zelf controleren (confirm on the day) | check het die dag nog even |
| ver buiten het netwerk | ver buiten bereik |
| plekscherm opent met het detail dat de doorslag geeft | op het plekscherm zie je meteen wat telt |
| genieten van (in every second sentence) | only where someone actually enjoys something |
| jouw (unstressed) | je |
| Passive chains: wordt aangeraden dat er … wordt | Reken op …, Je doet er goed aan … |
| English word order: "Op aankomst lees de borden" | Lees bij aankomst de borden |

Never translate word for word idioms such as "the big lap", "walk-up", "book out", "first in, best dressed": write what they mean ("wie het eerst komt, het eerst maalt" is good Dutch for first in, best dressed).

## 5. Before and after (current site copy)

1. AussieCamps hero (`ui.heroTitle`, "Australia is big, your plan can be simple")
   - Before: "Australië is enorm, jouw plan mag simpel zijn"
   - After: "Australië is enorm. Je plan hoeft dat niet te zijn."
2. AussieCamps, camping rules New South Wales ("A supplied fireplace does not make a fire legal during a ban.")
   - Before: "Een aanwezige vuurplaats maakt een vuur tijdens een verbod niet legaal."
   - After: "Ook als er een vuurplaats is, mag je tijdens een stookverbod geen vuur maken."
3. KiwiCamping, DOC campsite rules ("Respect shared hours" / "Pets and drones require explicit permission. Check the exact campsite page rather than treating a quiet location as implied approval.")
   - Before: "Respecteer de gedeelde tijden" / "Voor huisdieren en drones heb je uitdrukkelijk toestemming nodig. Controleer de pagina van de camping zelf en vat een rustige locatie niet op als stilzwijgende toestemming."
   - After: "Houd rekening met de stiltetijden" / "Voor huisdieren en drones heb je altijd expliciet toestemming nodig. Kijk op de pagina van die camping zelf: dat het er rustig is, betekent nog niet dat het mag."

## 6. Checklist per unit

1. Would an ANWB or NKC editor publish this sentence unchanged?
2. Every number, price, date, link, tag and placeholder matches the English.
3. Glossary term used; the local sign name glossed once per page.
4. je-form, no em dash, no offline map, no new superlative.
5. Title and meta lead with the Dutch search term.
