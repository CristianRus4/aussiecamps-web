# Polish (pl) style guide for AussieCamps and KiwiCamping

This is the contract for every Polish unit on aussiecamps.app/pl and campingapp.nz/pl. The same file
lives in both repositories. Write Polish that reads as if a Polish travel writer who has driven a
kamper around Australia and New Zealand wrote it for readers from Poland. Nobody should be able to
tell that an English page came first.

## 1. Reader and voice

**Who reads this.** Poles planning a kamper or car trip, people on a Work and Holiday visa in
Australia or a Working Holiday visa in New Zealand who buy an old van or sleep in the car, couples
and families on a three to six week trip, and caravanning people who know European kempingi and
kamperowiska. They know Polish camping words (kemping, parcela, przyczepa, zrzut szarej wody,
kaseta). They do not know Australian or New Zealand systems (councils, DOC, Total Fire Ban,
self-contained, WOF, rego), so those get a short Polish gloss the first time they appear on a page.

**Register: ty**, singular and lower case (ty, cię, ci, twój), as configured in
`docs/translation.config.json` and in the app (`aussiecamps.translation.config.json`: pl informal).
This is how Polish travel apps and camper media talk to readers. Never Pan/Pani/Państwo, never the
plural wy (some blogs use it, but the app and the site speak to one reader).

- **Drop pronouns.** Polish verbs already carry the person: "Sprawdź znaki", not "Ty sprawdź znaki".
  Use "twój" only when the sentence needs it; "Sprawdź opony przed wyjazdem", not "Sprawdź swoje
  opony swojego auta".
- **No gendered forms for the reader.** Past tense and some adjectives force a gender (byłeś/byłaś,
  zmęczony/zmęczona). Rephrase: "jeśli masz za sobą długi dzień", "gdy zmęczenie daje o sobie znać",
  "jeśli zdarzyło ci się", impersonal "warto", "trzeba", "można", or the plural of the people in the
  car ("jeśli jedziecie we dwoje" only when the English talks about a group). Never "Odwiedziłem".
- **Impersonal forms** are natural in rules and in questions that mirror searches: "Czy w Australii
  można spać w samochodzie?", "W Nowej Zelandii jeździ się lewą stroną". Advice to the reader uses
  the imperative or "warto", "lepiej", "trzeba".

**Rhythm.** Calm, direct and practical, like a friend who has done the trip and tells you what
matters. Medium sentences. Split an English sentence when Polish would pile up subordinate clauses;
merge two short English ones when Polish reads choppy. Lead with what the reader acts on. One idea
per sentence beats a perfect echo of English clause order.

**Verbs, not nouns.** Polish machine translation drifts into officialese: "dokonanie rezerwacji",
"w celu zapewnienia", "przeprowadzenie kontroli". Write "zarezerwuj", "żeby mieć pewność",
"sprawdź".

**Imperatives and tips.** Body text uses the imperative (Sprawdź, Zarezerwuj, Zatankuj, Zaplanuj) or
"warto/lepiej/trzeba". Tips are short noun phrases or short imperatives, whichever matches the
English tip ("Legalne miejsce", "Wentylacja", "Parkuj przodem do wyjazdu"). Never the bureaucratic
infinitive ("Sprawdzić znaki").

**iPhone actions.** "Stuknij" (Apple's Polish), never "kliknij" for a touch screen. "Przeciągnij",
"przesuń", "otwórz".

**Headings** use Polish sentence case (only the first word and proper names capitalised), no full
stop, no colon chains. A short statement or a question, whatever a Polish magazine would print.

**Titles, H1 and meta.** Lead with the words Poles actually type into Google (section 4). Titles up
to about 60 characters, meta descriptions about 140 to 160. Concrete beats clever: "Spanie w
samochodzie w Australii: gdzie wolno, a gdzie grozi mandat" beats a literal echo of "Can you sleep in
your car in Australia?".

## 2. Glossary

Sources: the App Store keyword sets (`listing-checks/2026-10-14T1141-live.json`, pl: kamper,
kamperem, camping, pole namiotowe, biwak, trasa, planer, noclegi, parki narodowe, przyczepa,
kempingi, dziki, DOC, schroniska, przewodnik, pogoda, zrzut, toalety), the Polish app strings
(`Localizable.xcstrings`, largely machine translated, so many labels are overridden below), Polish
travel writing about AU and NZ (juliaandsam.com "Kemping w Australii", "Kemping w australijskich
parkach narodowych"; patrycjagalinska.pl "Nowa Zelandia kamperem"; Polish caravanning vocabulary:
stacja serwisowa, zrzut szarej wody, opróżnianie kasety). Search Console had no Polish queries on
either site at 2026-10-19 (no Polish pages yet); re-check later exports.

### Vehicles and ways of travelling

| English | Polish | Notes and evidence |
|---|---|---|
| campervan | **kamper** | The Polish word for any camper vehicle (ASO: kamper, kamperem; blogs: "Nowa Zelandia kamperem", "podróżowanie kamperem po Australii"). Declines normally: kampera, kamperem, kamperze. |
| campervan vs motorhome (when the English contrasts them) | **kamper typu van** / **duży kamper (motorhome)** | Polish caravanning: kamper = motorhome; a converted van is "van" or "kamper typu van". |
| van, converted van | **van**, **bus** | "wan" also appears in blogs; write "van". |
| motorhome | **kamper**, **duży kamper** | "autokamper" only if needed for contrast. |
| caravan | **przyczepa kempingowa**, **przyczepa** | ASO: przyczepa. Never "karawan" (hearse). |
| camper trailer (AU) | **przyczepa namiotowa (camper trailer)** | Gloss once. |
| big rig | **duży zestaw** (auto z przyczepą), **duży kamper** | |
| towing | **jazda z przyczepą**, **holowanie** | |
| 4WD | **4WD**, **auto z napędem 4WD**, **terenówka** | Keep "4WD" where a sign or track grading says it ("4WD only" = tylko dla aut z napędem 4WD). Do not write "4x4": it adds digits the English does not have. |
| AWD | **AWD** (napęd na wszystkie koła, ale to nie terenówka) | Gloss when contrasted with 4WD. |
| road trip | **road trip** (plural road tripy), **podróż samochodem**, **wyprawa** | Common in Polish travel writing. "objazdówka" is fine for a loop ("objazdówka po Wyspie Południowej (South Island)"). |
| the big lap (AU) | **objazd całej Australii (Big Lap)** | Gloss once. |
| grey nomads (AU) | **grey nomads** | Gloss once: australijscy emeryci, którzy miesiącami jeżdżą z przyczepą lub kamperem. |
| backpacker | **backpacker** | Polish uses it; plural backpackerzy. |
| working holiday | AU: **Work and Holiday** (wiza Work and Holiday); NZ: **Working Holiday** (wiza Working Holiday) | The visa names Poles use. Do not add subclass numbers or quotas the English does not give. |
| camper (person) | **kamperowicz**, **turysta** | |

### Places to stay

| English | Polish | Notes and evidence |
|---|---|---|
| campground, campsite (the place) | **kemping** (plural kempingi) | PWN spelling, ASO keyword "kempingi", blogs "kemping w Australii". "camping" only inside proper names. |
| basic bush or national park campground | **kemping w parku narodowym**, **pole biwakowe** | "pole biwakowe" is what Poles know from Lasy Państwowe: basic, few facilities. |
| tent area, tent ground | **pole namiotowe** | ASO keyword. Use for tent-only places, not as the general word. |
| site, pitch | **miejsce**, **parcela** | "parcela" is standard Polish kemping vocabulary. |
| powered / unpowered site | **miejsce z prądem / bez prądu**, **parcela z prądem** | |
| caravan park (AU) | **caravan park** (w caravan parku, caravan parki) | Used by Polish writers ("Caravan Parks (czy też Holiday Parks)"). Gloss once per page: kemping z miejscami dla przyczep i kamperów, zwykle też z domkami. App: "Parki dla przyczep kempingowych" (literal, avoid). |
| holiday park | **holiday park** (w holiday parku, holiday parki) | Proper names keep capitals: "TOP 10 Holiday Park". Gloss once: duży kemping z domkami, kuchnią i pralnią. App: "Parki wakacyjne" (mistranslation). |
| cabin (holiday park) | **domek** (domek kempingowy) | Natural Polish. "chata" only for rustic buildings. |
| hut (NZ DOC, backcountry) | **schronisko**, **schronisko DOC** | ASO: schroniska. Gloss once: proste schronisko bez obsługi, z pryczami. App: "Chata", "Chaty wiejskie" (avoid). |
| roofed accommodation | **noclegi pod dachem** | ASO: noclegi. |
| hostel, backpackers | **hostel** | |
| farm stay, station stay | **nocleg na farmie**, **station stay** | Gloss station once: ogromna farma bydła lub owiec w outbacku. |
| showground (AU) | **showground** | Gloss once: teren wystawowy i targowy miasteczka, często z tanimi miejscami dla kamperów. |
| rest area | **miejsce odpoczynku (rest area)**, **przydrożny parking** | Gloss once with the sign wording; "odpowiednik naszego MOP-u" is a fine gloss. App: "Strefy odpoczynku", "Miejsca odpoczynku" (use the latter). A roadside pull-off is a **zatoczka**. |
| day-use area | **miejsce piknikowe** (bez noclegu), **teren dzienny** | |
| free camp(s), free camping (AU) | **darmowe kempingi**, **bezpłatne miejsca noclegowe**, **free campy** (slang, in quotes or as a gloss) | Blogs: "darmowe kempingi", "darmowy kemping przy drodze". App: "Bezpłatne obozy" (obóz is a scout or military camp, avoid). |
| freedom camping (NZ) | **freedom camping** | The legal term; keep it, gloss once: legalny, bezpłatny nocleg poza kempingiem, tam gdzie przepisy na to pozwalają. App: "kemping wolności", "Obszary kempingowe Freedom" (mistranslations). |
| wild camping, sleeping rough outside rules | **nocleg na dziko**, **spanie na dziko**, **biwak na dziko** | What Poles search ("nocleg na dziko Nowa Zelandia"). Use it in titles, meta and FAQs where the page answers that question, and say plainly where it is illegal. Never as a neutral synonym for legal freedom camping. |
| park up for the night | **stanąć na noc**, **przenocować** | Camper idiom. |
| self-contained (NZ certification) | **self-contained**, **certyfikat self-contained** | Verbatim in Polish NZ writing. Gloss once: kamper z certyfikatem samowystarczalności, czyli z zamontowaną na stałe toaletą oraz zbiornikami na czystą i szarą wodę. "pojazd z certyfikatem self-contained". App: "Samodzielny", "pojazdy autonomiczne", "Apartamenty i domy" (mistranslations). |
| self-sufficient (in general) | **samowystarczalny**, **autonomia kampera** | Caravanning usage. |
| dump point (AU) | **punkt zrzutu nieczystości** (dump point) | Short form later: punkt zrzutu. Gloss once: miejsce, gdzie opróżnisz kasetę toalety i zbiornik szarej wody. App: "Punkty zrzutu". |
| dump station (NZ) | **stacja zrzutu nieczystości** (dump station) | Short form: stacja zrzutu. App: "Stacja zrzutowa" (avoid). "stacja serwisowa dla kamperów" is also correct. |
| grey water / black water | **szara woda / czarna woda** | Caravanning standard. |
| cassette toilet | **toaleta kasetowa**, **kaseta** | "opróżnić kasetę". |
| potable water, drinking water | **woda pitna** | |
| water filling point | **punkt poboru wody**, **kran z wodą pitną** | App: Punkty poboru wody. |
| long-vehicle parking | **parking dla długich pojazdów** | |

### Land, agencies and rules

| English | Polish | Notes |
|---|---|---|
| DOC (Department of Conservation) | **DOC** | Protected term. Gloss on first use per page: DOC (Department of Conservation, nowozelandzki urząd ochrony przyrody). Do not decline it ("DOC-u"): write "na stronie DOC", "kempingi DOC", "urząd DOC". |
| DOC campsite | **kemping DOC** | |
| Great Walk(s) | **Great Walk(s)** | Proper name. Gloss once: najsłynniejsze wielodniowe szlaki Nowej Zelandii, schroniska i pola namiotowe tylko z rezerwacją. Give a number only if the English does. |
| track (NZ) | **Track** in names (Milford Track), otherwise **szlak** | |
| tramping | **trekking**, **wędrówka**, **wielodniowy trekking** | "tramping" once with gloss if the English leans on the word. |
| national park | **park narodowy**; names: **Park Narodowy Kakadu**, **Park Narodowy Tongariro** | The proper name stays exactly as written; only the generic "National Park" becomes Polish, as Polish writers and Wikipedia do. Campground, reserve and business names stay English (Tidal River Campground, Discovery Parks). |
| NPWS, Parks Victoria, QPWS, DBCA, Parks and Wildlife Tasmania | unchanged, gloss once | e.g. NPWS (National Parks and Wildlife Service, zarząd parków narodowych w Nowej Południowej Walii (New South Wales)). |
| council (AU, NZ) | **samorząd (council)**, **władze lokalne**, **gmina** | "gmina" is a fair Polish equivalent of an Australian local council. Names stay English: "Queenstown Lakes District Council". |
| bylaw | **przepisy lokalne**, **lokalna uchwała (bylaw)** | |
| land manager | **zarządca terenu**, **właściciel lub zarządca** | Never "menedżer ziemi". |
| Crown land, state forest (AU) | **ziemia państwowa (Crown land)**, **las stanowy (state forest)** | Blogs: "w wielu lasach stanowych". |
| Traditional Owners, Country (AU) | **tradycyjni właściciele ziemi (Traditional Owners)**, **Country** with gloss: ziemia, z którą dana społeczność aborygeńska jest związana | "Aborygeni", "aborygeński", "rdzenni mieszkańcy", "First Nations" are all fine in Polish. |
| Māori | **Māori** (indeclinable: kultura Māori, nazwy Māori, dla Māori) | Keep the macron. Do not switch between Māori and Maorysi on one page; use Māori. |
| iwi, whenua, hapū, marae | keep, gloss: iwi (plemię), whenua (ziemia) | Keep macrons in every te reo word. |
| ranger | **strażnik parku (ranger)**, **ranger** | |
| honesty box | **skrzynka na opłaty (honesty box)** | Blogs: system „honesty box”. |
| permit | **pozwolenie**, **zezwolenie**, **karnet wstępu** (park pass) | |
| fine, infringement | **mandat** | "grzywna" only for court penalties. |
| total fire ban (AU) | **Total Fire Ban** (całkowity zakaz używania ognia) | Official term on signs and apps. |
| fire danger rating | **stopień zagrożenia pożarowego** | |
| bushfire | **pożar buszu** | NZ wildfire: **pożar roślinności**. |
| campfire | **ognisko** | |
| fire restrictions, fire season | **ograniczenia w używaniu ognia**, **sezon pożarowy** | |
| biosecurity | **bioasekuracja**, **kontrola biologiczna**, **przepisy fitosanitarne** | Quarantine: **kwarantanna**. Plain wording beats jargon: "nie wolno przewozić owoców". |
| sandflies | **meszki (sandflies)** | Polish blogs: "muszki", "meszki"; gloss once with the English word Poles will see on signs. |
| kauri dieback | **zamieranie kauri (kauri dieback)** | |

### Roads and money

| English | Polish | Notes |
|---|---|---|
| driving on the left | **ruch lewostronny**, **jazda lewą stroną** | |
| licence, International Driving Permit | **prawo jazdy**, **międzynarodowe prawo jazdy** | |
| give way | **ustąp pierwszeństwa** | Same as the Polish sign. |
| roundabout | **rondo** | |
| one-lane bridge | **most jednopasmowy** | |
| unsealed road, gravel road | **droga szutrowa**, **szuter**, **droga gruntowa** (outback) | |
| road train | **road train** | Gloss once: ciężarówka z kilkoma naczepami (keep the English length figures). |
| roadhouse | **roadhouse** | Gloss once: stacja paliw z barem, często z miejscami na nocleg, na odludziu. |
| toll, toll road | **opłata za przejazd**, **płatna droga** | |
| speed camera | **fotoradar** | |
| demerit points | **punkty karne** | |
| fatigue, Driver Reviver | **zmęczenie za kierownicą**; "Driver Reviver" stays, gloss: punkty z darmową kawą dla kierowców | |
| fuel, petrol, diesel | **paliwo**, **benzyna**, **diesel** (olej napędowy) | "ceny paliwa", "tankowanie". |
| petrol station | **stacja paliw**, **stacja benzynowa** | |
| WOF (NZ) | **WOF** | Gloss once: Warrant of Fitness, nowozelandzki odpowiednik przeglądu technicznego. |
| registration, rego | **rejestracja** ("rego" once in brackets if useful) | |
| RUC (NZ) | **RUC** | Gloss once: Road User Charges, opłata drogowa dla aut z silnikiem Diesla. |
| groceries | **zakupy spożywcze**, **ceny w sklepach** | |
| eating out | **jedzenie na mieście**, **ceny w restauracjach** | |
| bottle shop | **bottle shop (sklep monopolowy)** | |
| GST | **GST** (podatek od towarów i usług, odpowiednik VAT) | |
| tipping | **napiwki** | |

### App and site vocabulary

Use the app's Polish label when a page names a button, tab or screen, unless the label is a
mistranslation (listed with the replacement; reported for the app).

| English | Polish | App label |
|---|---|---|
| guide, guides (site articles) | **poradnik**, **poradniki** | When naming the app's tab: zakładka „Przewodniki”. Never "przewodnik" for a site article. |
| place (app record) | **miejsce** | Miejsca |
| place screen | **karta miejsca** | |
| Explore | „Eksploruj” | Eksploruj |
| Search | „Szukaj” | Szukaj |
| collections, smart collections | **kolekcje**, **inteligentne kolekcje** | Kolekcje, Inteligentne kolekcje |
| Liked | „Polubione” | App: "Podobało się" (awkward, reported) |
| Starred | „Oznaczone gwiazdką” | Oznaczone gwiazdką |
| Want to visit | „Do odwiedzenia” | App: "Chcesz odwiedzić" (reported) |
| Visited | „Odwiedzone” | App: "Odwiedziłem" (gendered, reported) |
| Pins | „Pinezki” | App: "Kołki" (tent pegs, reported); the app's own "Dodaj pinezkę" confirms the word |
| All saved | „Wszystkie zapisane” | App: "Wszystko zapisane" |
| trip, trip planner | **podróż**, **planer podróży** | Nowa podróż; tab "Planista" is a mistranslation, write „Planer” |
| itinerary | **plan podróży** | Plan podróży |
| stop | **przystanek** (app feature), **postój**, **nocleg** (prose) | Przystanek |
| to-do, packing list | **zadanie**, **lista zadań**, **lista rzeczy do spakowania** | Dodaj zadanie |
| Pass (app subscription) | **karnet** (karnet Premium) | Paywall: "Karnet premium". App also says "przepustka" and, once, "Przełęcz" (mountain pass, reported). |
| filters | **filtry** | Filtry |
| map, satellite, 3D | **mapa**, **widok satelitarny**, **3D** | |
| Look Around (Apple) | „Rozejrzyj się” | Apple's Polish name |
| Street View (as the site names the feature) | **Street View** | |
| widget | **widżet** | Apple's Polish spelling |
| Calendar (Apple app) | **Kalendarz** | |
| settings | **Ustawienia** | Ustawienia |
| Download | **Pobierz** | |

## 3. Conventions

- **Numbers:** a non-breaking space (U+00A0) groups thousands, a comma marks decimals: 74 000, 6 500,
  1 393, 2,08. "74,000+" is "ponad 74 000" in prose and "74 000+" in stat tiles. Years have no space
  (2026). Keep every number exactly; never round or convert.
- **Currency:** amount, space, ISO code: "35 AUD", "2,08 AUD za litr", "15 NZD". "A$", "AU$" and "$"
  in an Australian context become AUD; "NZ$" and "$" in a New Zealand context become NZD. Never
  convert to złoty or euro. Ranges in prose: "od 80 do 130 AUD"; in tables and tips "80–130 AUD"
  (en dash, no spaces). Polish declension after numbers is not needed with ISO codes.
- **Dates and times:** "5 sierpnia 2026", "1 czerwca", "od maja do września", "w 2026 roku". Times
  "21:00", "o 21". Months and weekdays lower case. Seasons are southern: write "latem (w Australii to
  grudzień–luty)" only when the English says "summer" and the month matters to a reader from the
  northern hemisphere; do not add facts beyond that.
- **Units:** km, km/h, m, °C, l (litr), "l/100 km". "per litre" is "za litr".
- **Percent:** "15%" (no space, Polish usage).
- **Quotes:** „…” with nested ‚…’. App labels and sign wording go in „…”.
- **Punctuation:** Polish comma rules (always before że, który, żeby, gdy, bo, ale, więc, jeśli;
  not before a single "i" or "oraz"). Colons are fine. **No em dashes (—).** No spaced en dash used as
  a myślnik either: use a comma, colon, parentheses or a new sentence. The en dash is only for ranges.
- **Capitals:** sentence case in headings; nationality adjectives lower case (australijski,
  nowozelandzki); people and nations upper case (Polacy, Australijczycy).
- **Place names.** English and official forms stay: Great Ocean Road, Gold Coast, Byron Bay, Blue
  Mountains, Milford Sound, Bay of Islands, Cape Reinga, Fiordland. Aboriginal and Māori names stay
  exactly, with diacritics and macrons: Uluṟu, K'gari, Ikara, Tjoritja, Aotearoa, Aoraki, Wānaka,
  Whakatāne, Rakiura, te reo Māori. Established Polish exonyms are used for: **Australia**, **Nowa
  Zelandia**, **Adelajda**, **Wielka Rafa Koralowa**, **Cieśnina Cooka**, **Morze Tasmana**,
  **Wielkie Góry Wododziałowe** (Great Dividing Range, or keep the English with a gloss). Cities
  keep their English form and decline the Polish way where usual: w Sydney, w Melbourne, w Perth, w
  Canberze, w Adelajdzie, w Auckland, w Christchurch, w Queenstown. Where a name does not decline
  naturally, put a generic noun before it: "na trasie Great Ocean Road", "w okolicach Byron Bay",
  "w regionie Kimberley".
- **States, territories and NZ islands.** The Polish-only catalog (`<site>-website-pl` in
  `docs/translation.config.json`) renders them with Polish names, so write and decline them the way a
  Polish travel writer does: Nowa Południowa Walia, Wiktoria, Australia Południowa, Australia
  Zachodnia, Terytorium Północne, Australijskie Terytorium Stołeczne, Czerwone Centrum (Central
  Australia), Tasmania (na Tasmanii), Wyspa Północna, Wyspa Południowa, Wyspa Stewart. No English name
  in brackets, no "w stanie Victoria" pattern. **Queensland** stays as is ("w Queensland" or "w
  Queenslandzie"). If the engine rejects an inflected form because the glossary term has to appear,
  use the nominative with a generic noun ("w stanie Wiktoria", "na wyspie Tasmania").
  Abbreviations (NSW, VIC, QLD, WA, SA, NT, ACT, TAS) only where the English uses them.
- **Gender of borrowed nouns:** ten kemping, ten caravan park, ten holiday park, ten kamper, ten van,
  ten karnet, ta aplikacja, to schronisko, ten Great Walk, ten szlak, ten freedom camping, ten punkt
  zrzutu, ta stacja zrzutu, ten roadhouse, ten road train, ten WOF, ten DOC (avoid declining it).
- **Never change:** AussieCamps, KiwiCamping, App Store, iPhone, iOS, BookEasy, BookIt, product and
  park proper names, agency names and abbreviations (DOC, NPWS, MBIE, NZTA, Waka Kotahi, RBA, RBNZ,
  Reserve Bank of Australia, Tourism Australia), AUD and NZD, URLs, `<a data-guide="…">…</a>`
  markup and `{placeholders}`. Translate the link text inside markup and keep the tag and its
  attributes byte for byte. Brands do not decline: "w aplikacji AussieCamps", "z KiwiCamping".
- **Counts:** structure identical to English: same number of sections, paragraphs, tips, FAQ items,
  sources, table rows and price rows. Sentences may move, split or merge inside one paragraph only.
- **Testimonials** (ui.review1… review9*, reviewsEyebrow, reviewsTitle) are never translated into
  Polish. Leave them out of every values file.

## 4. Search terms to lead with

Australia: "kemping Australia", "kempingi w Australii", "kamperem po Australii", "kamper
Australia", "darmowe kempingi Australia", "nocleg na dziko Australia", "spanie w samochodzie
Australia", "road trip Australia", "przepisy drogowe Australia", "prawo jazdy w Australii",
"ceny w Australii 2026", "ceny jedzenia w Australii", "ile kosztuje piwo w Australii", "koszty
podróży po Australii", "ceny paliwa Australia", "Work and Holiday Australia", "parki narodowe
Australia".

New Zealand: "kamperem po Nowej Zelandii", "kempingi Nowa Zelandia", "kemping Nowa Zelandia",
"freedom camping Nowa Zelandia", "nocleg na dziko Nowa Zelandia" (with the legal answer), "kempingi
DOC", "schroniska DOC", "Great Walks Nowa Zelandia", "meszki Nowa Zelandia", "przepisy drogowe Nowa
Zelandia", "znaki drogowe Nowa Zelandia", "jazda po lewej stronie", "ceny w Nowej Zelandii 2026",
"ceny jedzenia w Nowej Zelandii", "koszty podróży Nowa Zelandia", "Working Holiday Nowa Zelandia".

## 5. Banned

- **"Offline map" in any form:** "mapa offline", "mapy offline", "offline'owa mapa", "mapa kempingów
  offline", "nawigacja offline", "działa offline" about the map. The apps are not offline maps. Write
  what is true: "Szczegóły miejsc i poradniki działają bez zasięgu; mapa, wyznaczanie trasy, pogoda i
  zdjęcia potrzebują internetu." The App Store subtitle "Mapa offline i plan podróży" is wrong; never
  copy it.
- **Pan, Pani, Państwo** and plural wy as forms of address; gendered past forms aimed at the reader.
- **Em dashes**, and spaced en dashes used as dashes.
- **Superlatives the English does not make:** najlepszy, wyjątkowy, niesamowity, zapierający dech w
  piersiach, raj, bajeczny, magiczny. Keep the enthusiasm at the English level.
- **App mistranslations:** "Bezpłatne obozy", "kemping wolności", "Obszary kempingowe Freedom",
  "Parki wakacyjne", "Parki dla przyczep kempingowych", "Strefy odpoczynku", "przystanki
  wypoczynkowe", "Stacja zrzutowa", "Chaty wiejskie", "pojazdy autonomiczne", "Samodzielny" (for
  self-contained), "Kołki", "Planista", "Przełęcz" (for Pass), "witryny" (for sites), "Upuszczona
  szpilka".
- **Officialese and anglicisms Polish readers notice as translation:**

| Literal (bad) | Natural (good) |
|---|---|
| posiadać kampera | mieć kampera |
| dokonać rezerwacji / dokonać płatności | zarezerwować / zapłacić |
| w celu uniknięcia mandatu | żeby uniknąć mandatu |
| aplikować o wizę | złożyć wniosek o wizę, starać się o wizę |
| dedykowane miejsca dla kamperów | wyznaczone miejsca dla kamperów |
| bazując na / w oparciu o danych | na podstawie danych |
| to robi sens | to ma sens |
| na koniec dnia | w praktyce, ostatecznie |
| lokalizacja (for a place) | miejsce |
| Upewnij się, że… (every sentence) | Sprawdź, czy… / Zadbaj o… |
| Jest to miejsce, które… | To miejsce… |
| Kliknij przycisk | Stuknij przycisk |
| Czytaj lokalizację, nie internet | Na miejscu liczy się znak, nie wpis w internecie |
| Pojazd nie sprawia, że miejsce jest legalne. | O tym, czy wolno tu spać, nie decyduje samochód. |
| Australia jest duża, twój plan może być prosty | Australia jest ogromna, ale plan podróży może być prosty |
| Każde miejsce otwiera się ze szczegółem, który decyduje | Karta miejsca od razu pokazuje to, co przesądza o wyborze |
| Bez względu na to, jak niesiesz dom (However you carry home) | Namiot, van czy przyczepa |

## 6. Engine setup

Polish has its own catalog in each repo, so the state and island names are glossary renderings
(section 3) and not protected English terms. Everything else in `protectedTerms` (brands, agencies,
Aboriginal and Māori names, AUD/NZD) stays verbatim.

## 7. Before and after (from the app's current Polish strings)

Polish is new on both websites, so these examples come from the Polish already shipped in the apps,
which is machine translated.

**1. Onboarding subtitle (AussieCamps app)**

- English: "Free camps, caravan parks and national parks, all on one map."
- Before: "Bezpłatne obozy, przyczepy kempingowe i parki narodowe, wszystko na jednej mapie."
  (obozy are scout or army camps; "przyczepy kempingowe" are caravans, not caravan parks)
- After: "Darmowe kempingi, caravan parki i parki narodowe na jednej mapie."

**2. Paywall highlight (both apps)**

- English: "Only the sites you'd actually pull into"
- Before: "Tylko te witryny, do których faktycznie zaglądasz" (witryny are websites)
- After: "Tylko miejsca, w których naprawdę chcesz stanąć na noc"

**3. Guide category blurb (KiwiCamping app)**

- English: "How camping here actually works: huts, campsites, holiday parks and freedom camping."
- Before: "Jak właściwie działa kemping tutaj: chaty, pola namiotowe, parki wakacyjne i kemping
  wolności"
- After: "Jak naprawdę wygląda tu nocowanie: schroniska, kempingi, holiday parki i freedom camping."
