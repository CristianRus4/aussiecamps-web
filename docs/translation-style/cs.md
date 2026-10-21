# Czech (cs) translation style guide

Shared by AussieCamps (`/cs`, Australia) and KiwiCamping (`/cs`, New Zealand). This file is identical
in both repositories. Every Czech unit on both sites follows it; judges score against it.

Engine locale: `cs` (Czech as written in Czechia). Register: formal **vy**, written in lowercase
(`docs/translation.config.json`, same as the apps' `cs` register).

## 1. Who we write for and how we sound

**Readers.** Czechs planning or already on the road in Australia or New Zealand:

- Couples, friends and families renting a campervan or motorhome for a 2 to 5 week holiday
  (the classic Czech „obytným autem po Novém Zélandu“ trip).
- Working-holiday travellers, mostly 18 to 30: Czechia has an Australian Work and Holiday visa
  (subclass 462) and a New Zealand Working Holiday scheme, so many readers live in a car or van for
  months, on a budget, between farm, fruit-picking and hospitality jobs.
- Experienced Czech caravanners (karavanisté) who know European campsites and want to know what is
  different down under.

**Voice.** A Czech travel writer who has driven these roads, writing for readers who are about to:

- Practical and concrete. Lead with what the reader has to do or decide. Verbs over nouns:
  „Rezervujte si místo předem“, not „Provedení rezervace se doporučuje“.
- Calm, factual, a little dry. Czech travel writing is less excitable than English marketing copy:
  no exclamation marks, no hype, no superlatives the English does not support. Warm through
  usefulness, not adjectives.
- Rhythm: medium-length sentences joined with proper Czech subordinate clauses, broken by a short
  sentence when something matters. Merge two choppy English sentences into one where Czech flows
  better; split a long one that would need three nested clauses.
- Czech word order: known information first, the new or important information at the end
  („O letních prázdninách bývají kempy u pobřeží plné už týdny předem“). Do not copy English subject-first order.
- Address: **vy**, always lowercase in web copy (vy, vás, vám, váš). Imperatives in the second
  person plural: Zkontrolujte, Rezervujte, Počítejte s tím, Vezměte si. **Never** tykání.
- Czech often says rules impersonally, which is natural and less preachy: „V národních parcích se
  oheň rozdělávat nesmí“, „Platí se na místě“, „Rezervace je povinná“. Use this for rules and keep
  direct „vy“ for advice.
- Drop possessives Czech does not need: „Zkontrolujte pneumatiky“, not „Zkontrolujte vaše
  pneumatiky“. Use reflexive **svůj** when ownership matters („Nechte svůj stan…“ only if needed).
- Do not open every paragraph with the reader. Vary: start with the place, the rule, the number.

**Why vy and not ty.** Czech informational travel copy uses vykání, including copy aimed at young
travellers: visa and Australia guides (jakdoaustralie.cz: „Podívejte se na přehledný návod“),
agencies (cestujlevne.com, go2australia.cz), campervan rental (camperchamp.com/cs: „Najděte si ve svém
okolí bezplatné nebo levné kempy“) and the article body of youth blogs (svetjecool.cz: „Připravily
jsme si pro vás 15 tipů“). Tykání shows up in some rental and work-and-travel promo blocks
(roadgenius.com/cs, czech-us.cz), often mixed with vykání on the same page, which is exactly what we
must avoid. Our pages give rules, fees and safety advice, and the AussieCamps and KiwiCamping apps
are formal in Czech, so the site uses vykání throughout. Lowercase „vy/váš“: the capital is a
courtesy for letters (ÚJČ, Internetová jazyková příručka); web copy, guides and articles use lowercase.
Vykání stays friendly when the sentences are plain and short.

## 2. Vocabulary (glossary)

Sources: **GSC** = Search Console (no Czech-language queries yet on either site; Czechia already sends
KiwiCamping traffic with a 5.3 % CTR on English queries, re-checked 2026-10-19); **ASO** = live App
Store `cs` keyword sets (AussieCamps: obytné, auto, karavan, kempování, roadtrip, itinerář, plánovač,
trasy, národní, parky, stan, spaní; KiwiCamping: kempy, trasy, karavan, DOC, chaty, průvodce, počasí,
toalety, seznamy); **App** = the apps' `Localizable.xcstrings` (`cs`); **Web** = Czech-language
sources about Australia and New Zealand: czechkiwis.cz, svetjecool.cz, aotearoa.cz, pelipecky.cz,
silverontheroad.com (Czech caravanners in NZ), jakdoaustralie.cz, go2australia.cz, travelbible.cz,
travel-akademie.cz, camperchamp.com/cs, roadgenius.com/cs, camplinq.com/cs, cs.wikivoyage.org, mzv.gov.cz.

The pattern in Czech AU/NZ travel writing: where Australians or Kiwis use a term Czechs meet on signs,
booking sites and rental contracts, Czech writers keep the English word, decline it with Czech endings
and gloss it once („holiday parky“, „dump pointy“, „freedom kempy“, „Great Walks“). We do the same for
those terms, and use plain Czech everywhere else.

**First use per page** means the first time the term appears in that page's body (intro or first
section), not in the title or meta description. Glosses go in parentheses, short.

### Vehicles

| English | Czech | Notes and source |
|---|---|---|
| campervan, motorhome (generic, "a van") | **obytné auto** (obytného auta, v obytném autě) | Neutral umbrella term. ASO AU „obytné, auto“; Web: roadgenius „cestu obytným autem“, travel-akademie |
| campervan (smaller van with bed) | **campervan** (v campervanu, campervany), or **obytná dodávka** | Kept in English by Czech NZ/AU blogs (svetjecool „cestování v campervanu“) and rental listings. Use it where the English contrasts campervan with motorhome |
| motorhome | **obytný vůz** (obytného vozu, obytné vozy) | Standard Czech term; camperchamp, travel-akademie „karavan/obytný vůz“ |
| RV | **obytný vůz** | |
| obytňák | colloquial for any of the above | Fine in one relaxed sentence; never in titles, meta, rules or legal text |
| caravan (towed) | **karavan** (obytný přívěs) | First use in towing pages: „karavan (obytný přívěs)“. Energozrouti: „Karavan, neboli obytný přívěs“ |
| camper trailer | **stanový přívěs (camper trailer)** | No Czech AU evidence; camplinq says „přívěsný stan“ |
| big rig | **velká souprava** (auto s velkým karavanem), „dlouhý obytný vůz“ | Never „velká plošina“ |
| tow vehicle | **tažné vozidlo** | |
| 4WD / 4x4 | **4x4** („auto 4x4“, „terénní auto s pohonem 4x4“); keep **4WD** when quoting a sign („4WD only“ → „jen pro 4WD“) | Web: go2australia „náhon na všechna čtyři kola (4WD)“, travelbible „pohonem 4 x 4“ |
| 4WD track | **terénní cesta jen pro 4x4** | |
| 2WD | **auto bez pohonu 4x4**, „běžné auto“ | |
| ute | **ute (pick-up)** on first use, then „pick-up“ | |
| road train | **road train (kamion s několika návěsy)** on first use | |
| hire / rental car or van | **půjčovna** (company), **pronájem**, **půjčit si** | Not „renta“ |
| insurance excess | **spoluúčast** | Web: camperchamp „spoluúčasti“, „nulová spoluúčast“ |
| bond / deposit | **kauce**, „blokace na kartě“ | Web: camperchamp „kauce“, travelbible „zablokování depozitu“ |

### Places to stay and camp

| English | Czech | Notes and source |
|---|---|---|
| campground, campsite (the place) | **kemp** (kempy, v kempu) | Web: czechkiwis, camperchamp. App category „Kempy“ ✓ (but ✗ app „TÁBOR“ on the place screen) |
| basic campground in a national park / state forest | **kemp v národním parku**, **tábořiště** (a basic designated camping area) | „tábořiště“ is the right word for a no-frills site with a toilet and maybe a table |
| campsite / site (a pitch) | **místo** (místo pro stan, místo pro karavan), **stání** (for vehicles) | Web: camplinq „stání“. Not „parcela“ alone, not „kempovací místo“ |
| powered site / unpowered site | **místo s přípojkou elektřiny** / **místo bez elektřiny** | First use may add „(powered site)“. ✗ App „Powered stránky“, „Stránky bez napájení“ |
| caravan park (AU) | **caravan park** (caravan parky, v caravan parku), first use per page: „caravan park (placený kemp s místy pro karavany, obytná auta i stany, často s chatkami)“ | Same pattern as holiday park. App filter name „Karavanové parky“: quote it only when naming the filter |
| holiday park | **holiday park** (holiday parky, v holiday parku), first use: „holiday park (komerční kemp s chatkami a zázemím)“ | Web: czechkiwis „Holiday parky… Tyto komerční kempy“. ✗ App „Rekreační park“, „Prázdninový areál“ |
| cabin | **chatka** | Web: czechkiwis „pronájmy chatek“ |
| free camp (AU noun) | **free kemp** (free kempy, na free kempu), first use: „free kempy (místa, kde se dá kempovat zdarma)“ | Web: go2australia „Síť kempů, free kempů a dump pointů“ |
| free camping (activity) | **kempování zdarma** | Searchable, neutral. Never „bezplatné kempování“ |
| freedom camping (NZ legal term) | **freedom camping** (activity), **místa pro freedom camping**, first use: „freedom camping (volné kempování mimo placené kempy, které upravuje zákon Freedom Camping Act)“ | Web: svetjecool „freedom kempy“, silverontheroad. Czech gloss „volné kempování“ is fine as a synonym |
| wild / bush camping, camping off-grid where it is not a campground | **kempování na divoko**, „spaní na divoko“ | Only where the English means camping outside any campground |
| self-contained (NZ vehicle certification) | **self-contained**, first use: „certifikace self-contained (soběstačné vozidlo s pevně instalovaným WC a nádržemi na vodu; potvrzuje ji nálepka na skle)“; then „self-contained vozidlo“, „soběstačné auto“ | Web: silverontheroad „soběstačný obytný vůz“, czechkiwis |
| green warrant / blue warrant | **zelený štítek (green warrant)** / **modrý štítek (blue warrant)** | |
| sleeping in the car | **spaní v autě**, **přespat v autě** | Search phrase |
| rest area | **odpočívadlo** (odpočívadla, na odpočívadle) | App „Odpočívadla“ ✓. Web: kolemkolem.cz |
| day-use area | **místo jen pro denní pobyt** (bez přespání) | |
| dump point (AU), dump station (NZ) | **výlevka** (výlevky, na výlevce), first use: „výlevka (dump point / dump station, místo pro vylití WC kazety a šedé vody)“ | App AU „Výlevky“ ✓. Caravan Czech: silverontheroad „servisní místo… výlevka na WC kazetu“; „servisní místo“ is fine for a full service point with water. ✗ App „Dump body“, „Výsypná stanice“, „Skládkové stanice“ |
| grey water / black water | **šedá voda** / **černá voda** (z toalety) | Web: camplinq, hrabovjanka |
| cassette toilet, chemical toilet | **WC kazeta**, **chemické WC** | Web: camplinq „Kazetová toaleta“ |
| fresh / drinking / potable water | **pitná voda** | App ✓ |
| toilets / showers | **toalety** (WC in tables) / **sprchy** | ✗ App „Přeháňky“ (that is rain showers) |
| camp kitchen | **společná kuchyňka** | |
| laundry / laundromat | **prádelna** | App ✓ |
| showground | **výstaviště (showground)** | |
| station stay / farm stay | **pobyt na farmě** („na dobytkářské farmě“ for a station) | |
| roofed accommodation | **ubytování pod střechou** | |
| backpacker hostel | **hostel** | |
| hut (NZ backcountry) | **chata** (chaty, na chatě), first use: „chaty DOC (horské chaty v přírodě, bez obsluhy)“ | ASO NZ „chaty“; Web: czechkiwis „tzv. huty, což jsou horské chaty“, pelipecky „horských chatách“. Never „bouda“; „hut“ only inside official names |
| bunk / mattress platform | **palanda** / **společné lůžko (matracová plošina)** | |

### Parks, land and agencies

| English | Czech | Notes and source |
|---|---|---|
| national park | **národní park**; names: **Národní park Kakadu**, **Národní park Fiordland** (proper part unchanged) | cs.wikivoyage „Národní park Kakadu“. Keep the full English name where the descriptive part is not a place name (Royal National Park) |
| state forest | **státní les (state forest)** on first use | |
| conservation land (NZ) | **chráněná území DOC** | |
| council | **místní samospráva** / **obec** / **okresní úřad**; first use: „místní samospráva (council)“; bylaw: **obecní vyhláška (bylaw)** | NZ district and city councils; AU shires and councils |
| land manager | **správce území** | |
| ranger | **ranger** (rangeři), or „strážce parku“ | |
| DOC | **DOC**, first use per page: „DOC (Department of Conservation, novozélandský úřad pro ochranu přírody)“; „kempy DOC“, „chaty DOC“ | Protected term. Web: svetjecool, czechkiwis „Kempy DOC“ |
| NPWS, Parks Victoria, QPWS, DBCA, Parks and Wildlife Tasmania, Parks Australia | agency name in English, short gloss on first use: „NPWS (správa národních parků v New South Wales)“ | |
| Waka Kotahi / NZTA | **Waka Kotahi (NZTA, novozélandský úřad pro dopravu)** | Protected term |
| Home Affairs | **Department of Home Affairs (australské ministerstvo vnitra)** | |
| Immigration New Zealand | **Immigration New Zealand (novozélandský imigrační úřad)** | |
| Traditional Owners | **tradiční vlastníci půdy (Traditional Owners)** | |
| Aboriginal, First Nations | **aboridžinský**, **Aboridžinci**, **původní obyvatelé** | |
| Country (Aboriginal sense) | **Country (země a vše, co pro Aboridžince znamená)** on first use | |
| Māori; iwi, hapū; whenua | **Maorové**, **maorský**; **iwi a hapū (maorské kmeny a rody)**; **whenua (země v maorském pojetí)** | |
| Great Walk | **Great Walks** (na Great Walks), first use: „Great Walks (nejznámější vícedenní treky, které spravuje DOC)“ | Web: czechkiwis „na populárních trasách Great Walks“ |
| tramping, hiking, multi-day walk | **trek**, **túra**, **vícedenní trek**, **pěší turistika** | Web: pelipecky „trek Te Araroa“. Not „tramping“ |
| track (walking) | **trasa**, **stezka**; official names stay („Milford Track“) | |
| i-SITE | **i-SITE (informační centrum)** on first use | Web: czechkiwis keeps i-SITE |
| visitor centre | **informační centrum** | |
| the outback, the bush | **outback** (v outbacku), **buš** (v buši) | cs.wikivoyage; roadgenius „požáry buše“ |
| roadhouse | **roadhouse (odlehlá benzinka s občerstvením)** on first use | |

### Roads, driving and money

| English | Czech | Notes |
|---|---|---|
| road trip | **road trip** (road tripu, road tripy), or „cesta autem“, „cesta obytným autem“ | ASO AU „roadtrip“; Web: travelbible „12denní road trip“. Write „road trip“ as two words |
| trip (the app object and in general) | **cesta** | App's „výlet“ ✗ for a multi-week trip; quote app buttons exactly when naming them („Nový výlet“, „Přidat k výletu“) |
| tours (BookEasy/BookIt, free) | **organizované zájezdy (tours)** | Judge rule: never the same word as for the Pass-only trips. Never „výlet/výlety“ for tours, and never „zájezd“ for trips (Pass) |
| trip planner | **plánovač cest** | ASO KiwiCamping subtitle „Plánovač cest po NZ“ |
| itinerary | **itinerář**, „plán cesty“ | ASO, App ✓ |
| stop (on a trip) | **zastávka** | |
| leg | **úsek** | |
| Big Lap | **Big Lap (objezd celé Austrálie)** on first use | |
| highway | **silnice**, „hlavní silnice“; names stay („Stuart Highway“, „State Highway 1 (SH1)“) | Most are two-lane: not „dálnice“ |
| motorway / freeway | **dálnice** | |
| sealed / unsealed road | **zpevněná / nezpevněná silnice**, gravel: **šotolinová cesta** | Web: jakdoaustralie „Nezpevněné silnice“ |
| corrugations | **vymleté vlny na šotolině (corrugations)** | |
| floodway, causeway | **brod přes silnici**, „úsek, který se zaplavuje“ | |
| one-lane bridge | **jednoproudý most** | |
| give way | **dát přednost** | |
| roundabout | **kruhový objezd** | |
| speed camera / average speed camera | **radar** / **úsekové měření** | |
| random breath testing | **namátkové dechové zkoušky** | |
| blood alcohol limit | **limit alkoholu v krvi**; the English „0.05“ is grams per 100 ml: write **„0,05 (tedy 0,5 promile)“** once per page, because Czechs think in promile. „0,05 promile“ is WRONG | The added promile figure is a conversion, not a new fact |
| driver licence, IDP | **řidičský průkaz** / **mezinárodní řidičský průkaz** | mzv.gov.cz |
| fuel / petrol / diesel / LPG | **palivo** / **benzín** / **nafta** / **LPG** | |
| petrol station | **čerpací stanice**, colloquial „benzinka“ | |
| toll / toll road | **mýtné** / **zpoplatněná silnice** | Web: jakdoaustralie „Mýtné si můžete předplatit“ |
| fine, infringement | **pokuta** | |
| rego (registration) | **registrace vozidla (rego)** | |
| WOF / COF (NZ) | **WoF (Warrant of Fitness, pravidelná technická kontrola)** | Czech „STK“ is a fine comparison in a gloss, not a translation |
| RUC (NZ road user charges) | **RUC (silniční poplatek za ujeté kilometry pro dieselová vozidla)** | |
| booking | **rezervace**, **rezervovat (si)** | |
| fee | **poplatek**, „cena“ | |
| per person per night | **za osobu a noc** | |
| school holidays / long weekend / public holiday | **školní prázdniny** / **prodloužený víkend** / **státní svátek** | |
| peak season / off season | **hlavní sezona** / **mimo sezonu** | |
| working holiday (generic) | **pracovní prázdniny (working holiday)** | ternvisa „Pracovní prázdniny“ |
| AU Working Holiday visa (subclass 417) / Work and Holiday visa (subclass 462) | **vízum Working Holiday (subclass 417)** / **vízum Work and Holiday (subclass 462)**; Czech citizens use 462 | mzv.gov.cz „Program práce a dovolené pro mládež“, jakdoaustralie „Work and Holiday vízum subclass 462“. Translate whichever the English names; do not change it |
| NZ Working Holiday visa | **vízum Working Holiday** („novozélandské Working Holiday vízum“) | cestujlevne „Working Holiday vízum“ |
| backpacker | **baťůžkář**, „backpacker“ in community contexts | |
| mobile reception / signal | **signál**, **pokrytí** („bez signálu“, „mimo pokrytí“) | |
| offline (place details, guides) | **offline**, „bez připojení“ | Never with „mapa“: see banned list |
| esky / cooler | **chladicí box** | |
| BBQ | **gril**, „veřejný gril“ (free public BBQs) | |
| campfire | **táborák**, „oheň“ („rozdělávat oheň“) | |
| fire danger rating / total fire ban | **stupeň požárního nebezpečí** / **úplný zákaz ohně (total fire ban)** | |
| bushfire | **požár buše**, „lesní požár“ | roadgenius |
| sandflies | **sandflies**, first use: „sandflies (drobné kousavé mušky, muchničky)“ | aotearoa.cz glosses „písečné mouchy“; „muchničky“ is the correct Czech name of the family |
| biosecurity | **karanténní pravidla**, first use: „karanténní pravidla (biosecurity)“, „karanténní kontrola“ | aotearoa.cz „celní a karanténní předpisy“ |

### App and product names

Quote the app's Czech label when a page names an in-app screen or button, unless the app label is a
mistranslation (✗: use the fix).

| English (app) | Czech on the site |
|---|---|
| AussieCamps, KiwiCamping | unchanged, never translated, declined without changing the name („v AussieCamps“, „s KiwiCamping“) |
| Explore | **Prozkoumat** (karta Prozkoumat) |
| place screen | **detail místa** |
| Collections, Smart collections | **sbírky**, **chytré sbírky** (app tab „Sbírky“) |
| Liked, Starred, Want to visit, Visited, Pins, All saved | **Líbilo se**, **S hvězdičkou**, **Chci navštívit** (✗ app „Chcete navštívit“), **Navštíveno**, **Piny**, **Vše uloženo** |
| Trips, trip planner | **cesty**, **plánovač cest**; app buttons quoted exactly („Nový výlet“, „Přidat k výletu“) |
| To-dos, packing list | **úkoly** (app „Úkoly“), **seznam věcí na cestu** |
| Directions | **navigace**, „trasa“ (✗ app „Pokyny“) |
| Look Around / Street View | **Street View** (the site's name for it), „Look Around“ only where the English names Apple's imagery |
| Settings | **Nastavení** |
| Filters | **filtry** |
| the Pass, Premium | **Pass** (Passu, s Passem), **Premium**. ✗ App „Viz Průsmyk“ (mountain pass) |
| Restore Purchases | **Obnovit nákupy** |
| widgets | **widgety** |
| App Store, iPhone, iOS, iCloud, Apple, MapKit, Street View, Look Around | unchanged |

### Names that never change, and how to write place names

- Brands: AussieCamps, KiwiCamping, BookEasy, BookIt, App Store, Street View, Apple, Google.
- **Protected state, territory and island names** (the engine rejects anything else): New South Wales,
  Victoria, Queensland, South Australia, Western Australia, Tasmania, Northern Territory, Australian
  Capital Territory, Central Australia; North Island, South Island, Stewart Island, Aotearoa, Aoraki.
  Each unit must contain the English name as many times as the English does. Czech endings of up to
  three letters are accepted, so write them as Czech does with English names:
  - Declinable with a short ending: **v Queenslandu, do Queenslandu, z Queenslandu**.
  - Keep the nominative with a Czech noun in front: **ve státě Victoria**, **ve státě Tasmania**,
    **ve státě Western Australia**, **ve státě South Australia**, **v teritoriu Northern Territory**,
    **v New South Wales** (indeclinable). Never „ve Victorii“ or „na Tasmánii“ alone: the engine
    rejects them.
  - On the page about that state (or the first time a state matters on a page), add the Czech name
    once: „New South Wales (Nový Jižní Wales)“, „Western Australia (Západní Austrálie)“, „South
    Australia (Jižní Austrálie)“, „Northern Territory (Severní teritorium)“, „Tasmania (Tasmánie)“,
    „Victoria (Viktorie)“.
  - Abbreviations stay as the English uses them: NSW, WA, SA, NT, ACT, Qld, Vic, Tas.
  - Adjectives are not protected and read naturally: „tasmánské národní parky“, „queenslandské
    pláže“, „západoaustralské silnice“.
  - NZ islands: **na Severním ostrově (North Island)**, **na Jižním ostrově (South Island)**,
    **Stewartův ostrov (Stewart Island)**: Czech name first, English in parentheses, in every unit
    where the English names the island.
- Country names: **Austrálie** (v Austrálii), **Nový Zéland** (na Novém Zélandu, novozélandský).
- Cities: Sydney, Melbourne, Brisbane, Adelaide, Cairns (not declined); Perth, Darwin, Hobart, Broome,
  Auckland, Wellington, Christchurch, Queenstown (declined: v Perthu, z Aucklandu); Canberra (v Canbeře).
- Established Czech exonyms only where they exist: Velký bariérový útes, Modré hory (Blue Mountains),
  Jižní Alpy (Southern Alps), Cookova úžina (Cook Strait), Tasmanovo moře. Everything else stays as on
  the map and the signs: Great Ocean Road, Nullarbor, Gibb River Road, Cape York, Milford Sound /
  Piopiotahi, Bay of Islands, Coromandel, West Coast.
- Aboriginal and Māori names keep exact spelling, macrons and diacritics: Uluṟu, Kata Tjuṯa, K'gari,
  Ikara, Tjoritja, Aoraki, Tāmaki Makaurau, Ōtautahi, Whanganui.
- URLs, `{placeholders}`, markup (`<a data-guide="slug">…</a>`) and numbers are copied exactly; only
  the visible link text is translated.

## 3. Conventions

- **Numbers:** space as the thousands separator, written as a no-break space (U+00A0) so the number
  never wraps: „74 000“, „6 500“, „4 000+“. Decimal comma: „0,05“, „2,08“. Years and ID numbers
  without a space (2026, subclass 462). Stat tiles keep the „+“: „74 000+“.
- **Currency:** prices stay in AUD / NZD, code after the number with a (no-break) space: „35 AUD“,
  „2,96 NZD za litr“, ranges „80–140 AUD“ (unspaced en dash) in tables and labels, „od 80 do 140
  AUD“ in prose. Where the English writes a bare „$25“, write „25 AUD“ / „25 NZD“. Cents: „centů“
  („50 centů“). Czech readers convert in their head to CZK: never add CZK figures that the English
  does not have (the site's converter does that).
- **Percent:** „15 %“ with a (no-break) space. (Only the adjective form drops the space: „15%
  sleva“, which we rarely need.)
- **Dates:** „19. října 2026“, months lowercase and in the genitive after a day number; „v prosinci“,
  „od prosince do února“, „do 30. dubna“. Never „19/10/2026“ in prose. Seasons: remember the reader is
  from the northern hemisphere: „australské léto (prosinec až únor)“ where the English assumes it.
- **Times:** 24-hour „18:00“, or „v 6 ráno“ / „do 8 večer“ in relaxed prose.
- **Units:** km, km/h, m, °C („25 °C“ with a space), l (litr, litrů; „l/100 km“ for consumption),
  kg, ml. Distances and speeds already metric; keep them exactly.
- **Quotation marks:** Czech „…“ (inner ‚…‘). In-app labels in quotes when they appear inside a
  sentence: klepněte na „Přidat k výletu“. Never "…" or “…”.
- **Dashes:** no em dash (—) anywhere. No en dash or hyphen used as a sentence dash either (even
  though Czech typography allows „ – “, the house rule bans it): use a comma, colon, parentheses or a
  full stop. An unspaced en dash is allowed only in number ranges: „80–140“, „3–4 dny“.
- **Commas:** Czech grammar, not English. Always a comma before subordinate clauses (že, který,
  když, protože, aby, pokud, kde, než, jestli). No comma after an introductory adverbial („V létě je
  potřeba rezervovat“, never „V létě, je…“). No comma before „a“ in a list.
- **Capitalisation:** sentence case in titles, headings, buttons and tips: „Pravidla kempování v
  Queenslandu“, never „Pravidla Kempování“. Lowercase vy/váš. Seasons, months and days lowercase.
- **Abbreviations:** „např.“, „tzv.“, „tj.“ sparingly; prefer the full phrase in body text.
- **Declension of English names:** decline them the Czech way where Czech normally does
  („v Queenslandu“, „v Perthu“, „z Aucklandu“, „ve Wellingtonu“, „v Canbeře“). Names Czech does not
  decline stay as they are („v Sydney“, „v Melbourne“, „v Cairns“, „v Brisbane“, „v Adelaide“).
- **Gender with English names:** take the gender of the Czech generic noun: „Great Ocean Road je
  silnice…“ (feminine), „Stuart Highway vede…“, „Milford Track je…“ (trek, masculine), „holiday
  park nabízí…“ (masculine).

## 4. Titles, H1s and meta descriptions

- Lead with the term Czechs search for: „Kempování v Austrálii…“, „Pravidla kempování v New South
  Wales“, „Spaní v autě v Austrálii…“, „Obytným autem po Novém Zélandu…“, „Ceny potravin na Novém
  Zélandu 2026“, „Kolik stojí…“, „Výlevky v Austrálii…“, „Chaty DOC na Novém Zélandu…“.
- Natural length: titles up to about 65 characters, meta descriptions about 120 to 155 characters,
  one or two plain sentences. Do not pad and do not keyword-stuff.
- A question in English stays a question if Czechs would search it that way („Je kempování zdarma
  v Austrálii legální?“).
- Keep the year where the English has it („… 2026“).

## 5. Banned (machine-translation tells and house rules)

| Do not write | Write instead | Why |
|---|---|---|
| offline mapa, offline mapy, mapa bez připojení, mapy fungují offline, offline navigace | „údaje o místech fungují i bez signálu“, „adresář míst je v aplikaci offline“ | The apps are not offline maps: map tiles, routing, weather and photos need signal. (The app's own ASO subtitle „Offline mapa…“ is wrong; never copy it) |
| — (em dash), „ – “ / „ - “ as a sentence dash | comma, colon, parentheses, new sentence | House rule |
| „Ujistěte se, že…“ at the start of tips and sentences | „Zkontrolujte…“, „Ověřte si…“, „Hlídejte…“, „Počítejte s tím, že…“ | Calque of „make sure“ |
| „Je důležité poznamenat / zmínit, že…“, „Stojí za zmínku, že…“, „Mějte na paměti, že…“ in every paragraph | say the thing; „Počítejte s tím, že…“ once if needed | Filler |
| „v rámci“, „za účelem“, „z hlediska“, „v souvislosti s“ | „při“, „během“, „aby“, „kvůli“, „pro“ | Officialese |
| „dělat smysl“ | „dávat smysl“, „mít smysl“, „vyplatí se“ | Calque |
| „budete chtít…“ (you'll want to) | „vyplatí se…“, „hodí se…“, „doporučujeme…“ | Calque |
| „je vyžadováno / je doporučeno / je povoleno“ stacks | active or reflexive: „musíte mít“, „doporučujeme“, „smí se“ | English passive |
| „váš / vaše / svůj“ on every noun | drop it where obvious | Calque of English possessives |
| „provádění“, „zajištění“, „realizace“ noun chains | verbs: „udělat“, „zajistit“, „zařídit“ | Nominal style |
| „eventuálně“ for „eventually“ | „nakonec“, „časem“ | False friend (eventuálně = possibly) |
| „aktuálně“ for „actually“, „aktuální“ for „actual“ | „ve skutečnosti“, „skutečný“ | False friend |
| „kontrolovat“ for „control“ | „mít pod kontrolou“, „hlídat“, „řídit“ | False friend |
| „adresovat problém“, „aplikovat na“ | „řešit“, „platit pro“ | Anglicism |
| „kempovací místo“, „kempovací plocha“ | „místo v kempu“, „stání“, „kemp“ | Clumsy |
| „tábor“ for campground, „bezplatné kempování“, „prázdninový park“, „rekreační park“, „karavanový park“ in prose, „výsypná / skládková stanice“, „dump bod“, „přeháňky“ for showers, „Průsmyk“ for the Pass | glossary terms | App mistranslations and calques |
| Title Case Headings | sentence case | English convention |
| tykání, capitalised „Vy/Váš“ mid-sentence | lowercase vykání | Register |
| „Vážení cestovatelé“, „Milí kempaři“, exclamation marks | plain statements | Not our voice |
| „nejlepší“, „jedinečný“, „úžasný“, „dokonalý“, „ultimátní“ where the English is not that strong | match the English | Unsupported superlatives |
| „tento průvodce“, „v tomto článku“, „na tomto webu“ | talk about the trip, not the page | House rule (WEBSITE-BRIEF) |
| English left in a Czech sentence when a glossary term exists („campgrounds“, „rest areas“) | glossary term | Untranslated |
| English comma after an introductory phrase („V Austrálii, se jezdí vlevo“) and missing comma before „který/že/když“ | Czech comma rules | Typical machine output |
| „dolar“ amounts with „$“ („$25“, „25 $“) | „25 AUD“ / „25 NZD“ | Ambiguous |

## 6. Before and after

There is no Czech version of either site yet, so these examples come from the Czech strings the apps
ship today (`Localizable.xcstrings`), which show exactly the literal style we avoid.

1. **Paywall testimonial body** (app, AussieCamps). EN: „We crossed the country with a mix of
   campsites and holiday parks, and this made choosing each stop much easier.“
   - Before (literal): „Projeli jsme celou zemi se směsí kempů a prázdninových parků, takže výběr
     každé zastávky byl mnohem jednodušší.“
   - After: „Projeli jsme celou zemi, střídali kempy a holiday parky a vybrat další zastávku bylo
     najednou mnohem snazší.“ („se směsí kempů“ is an English noun calque; „prázdninový park“ is not a
     Czech thing.)
2. **Place screen category labels** (app, both). EN: „CAMPGROUND“, „Showers“, „Powered sites“,
   „Dump stations“.
   - Before (wrong sense): „TÁBOR“, „Přeháňky“, „Powered stránky“, „Skládkové stanice“.
   - After: „KEMP“, „Sprchy“, „Místa s přípojkou elektřiny“, „Výlevky“.
3. **Paywall button and directions** (app, both). EN: „See the Pass“, „Directions“, „Want to visit“.
   - Before (literal, wrong word): „Viz Průsmyk“, „Pokyny“, „Chcete navštívit“.
   - After: „Zobrazit Pass“, „Navigace“, „Chci navštívit“.
4. **Unlock line** (app). EN: „Unlock full details, access notes, facilities and photos for
   campsites and huts.“
   - Before (stiff, possessive chain): „Odemkněte všechny podrobnosti, získejte přístup k poznámkám,
     zařízením a fotografiím pro kempy a chaty.“
   - After: „Odemkněte u kempů a chat všechny podrobnosti: poznámky k příjezdu, vybavení i fotky.“
5. **A rules sentence** (site, written for this guide). EN: „Make sure you check fire restrictions
   before you light a campfire.“
   - Before (calque): „Ujistěte se, že zkontrolujete požární omezení předtím, než zapálíte táborák.“
   - After: „Než rozděláte oheň, ověřte si, jestli zrovna neplatí zákaz.“

## 7. Structure rules (the site enforces them)

- Same number of sections, paragraphs, tips, FAQ items, sources, table rows and price rows as the
  English. You may reorder, merge or split sentences **inside** one unit only.
- Every fact, number, date, price, distance and link survives. If the English is wrong, translate it
  faithfully and report it; do not silently fix facts.
- Tips are short labels (2 to 7 words), no full stop unless the English has one.
- Homepage testimonials (`review1`…`review9*`, `reviewsEyebrow`, `reviewsTitle`) are never
  translated into Czech.
