# French style guide (fr) for AussieCamps and KiwiCamping

This file is the contract for every French unit on aussiecamps.app and campingapp.nz. The same file
lives in both repositories. Translators, subagents and judges follow it; when it disagrees with an
older translation, this file wins.

## 1. Who we write for

- **Market:** France first, then Belgium, Switzerland and Quebec. The site serves `fr-FR`. Write
  standard French of France; avoid Quebec-only words (courriel, char, magasiner) and Belgian or Swiss
  numbers (septante, nonante).
- **Readers:** French-speaking travellers aged roughly 18 to 35 heading to Australia or New Zealand
  for a road trip, often on a PVT (Programme Vacances-Travail, the working holiday visa), plus couples
  and families renting a van or a camping-car for a few weeks. Many will buy and fit out their own
  van. They read PVTistes.net, Routard forums, Lonely Planet and van-life blogs, and they arrive with
  French reflexes: in France a « camping » is a commercial site with pitches and sanitaires, an
  « aire de camping-car » is a parking area with services, and « camping sauvage » means sleeping
  outside an official site.
- **Writer we imitate:** a French travel journalist who has driven the lap or the length of the
  South Island and now writes practical pages for compatriots. Precise, calm, a little dry humour at
  most, never salesy.

## 2. Voice

- **Register: formal « vous »** everywhere (configured in `docs/translation.config.json`). Never
  « tu », never « on » as a substitute for the reader. « On » is fine for a general truth
  (« on roule à gauche »), and « nous » is fine for the AussieCamps/KiwiCamping team in support and
  legal pages.
- **Direct and concrete.** Lead with the useful fact. French guide writing tolerates slightly
  longer sentences than English, but cut filler: no « il est important de noter que », « il convient
  de », « n’hésitez pas à », « en effet » used as glue.
- **Rhythm.** Mix one longer explanatory sentence with a short punchy one. Two English sentences
  may become one French sentence (or the reverse) inside the same paragraph.
- **Imperatives for advice:** « Vérifiez les panneaux », « Faites le plein avant… ». Prefer the
  imperative to « vous devez » / « il faut que vous ». Use « il faut » sparingly for real
  obligations.
- **Verbs over nouns.** English stacks nouns (« fire danger rating checks »); French uses a verb:
  « vérifiez le niveau de risque d’incendie ».
- **No English sentence order.** Do not start sentences with participles calqued from English
  (« Situé à… », « Combinant… ») unless it is genuinely natural.
- **Tips and headings** are short noun phrases or imperatives, French sentence case (capital on
  the first word and proper nouns only): « Lisez les panneaux à l’arrivée », « Prévoir une solution
  de repli ».
- **Product copy (home page, app guides):** confident, concrete, no hype. « La meilleure app »
  only where the English makes that claim.

## 3. Titles, H1 and meta descriptions

- Lead with the words French travellers actually type. Evidence from Search Console (French queries
  on campingapp.nz): « camping nouvelle zélande », « carte camping nouvelle-zélande »,
  « camping gratuit nouvelle zelande », « doc nouvelle zelande », « sandflies nouvelle zélande »;
  on aussiecamps.app: « tarif camping car australie ». The App Store keyword sets use van,
  camping-car, aire, bivouac, road trip, circuit, parcs nationaux, tente, vidange.
- Pattern: `<sujet recherché> en Australie / en Nouvelle-Zélande : <angle>` or a natural question.
  Example: « Camping gratuit en Australie : ce qui est légal, État par État ».
- Keep the country in full in titles where the English names the country or the topic is
  country-specific. Titles stay under about 65 characters; descriptions about 150 to 160.
- French sentence case in titles (no Title Case): « Les règles du camping en Tasmanie », not
  « Les Règles Du Camping ».
- Dated pages keep the year: « Budget road trip en Australie 2026 » / « … en 2026 ».

## 4. Glossary

Sources: (GSC) Search Console queries, (ASO) App Store keyword sets, (APP) in-app French label,
(PVT) PVTistes.net and other French PVT/van-life sites, (FR) common French usage.

### Vehicles and ways of travelling

| English | French | Notes |
|---|---|---|
| campervan (rental, small) | van ; « campervan » once to name the rental category | PVT and blogs say « van », « louer un van ». « campervan » is understood and appears in rental names. (PVT, ASO) |
| converted van, self-build | van aménagé | Standard French van-life term. (PVT) |
| motorhome | camping-car | Searched: « tarif camping car australie ». Plural « camping-cars ». (GSC, ASO) |
| caravan | caravane | |
| camper trailer | remorque tente / camper trailer | First mention: « camper trailer (remorque tente) ». |
| big rig | grand camping-car ou caravane et son véhicule tracteur ; « gros gabarit » | Never « grosse plateforme ». |
| 4WD / four-wheel drive | 4x4 | Write « 4x4 », with an x. « piste 4x4 », « accès 4x4 uniquement ». |
| 2WD | deux-roues motrices / véhicule de tourisme | « accessible en deux-roues motrices » |
| towing | tracter, remorquer ; « attelage » for the rig | |
| road trip | road trip (m.), plural road trips | Fully French usage; no italics. « un road trip », never « voyage en voiture ». |
| the big lap (AU) | le tour de l’Australie ; « le Big Lap » once if the English uses the name | (PVT) « faire le tour de l’Australie » |
| van life | vanlife | (PVT) |
| backpacker | backpacker ; « routard » for the generic traveller | PVT readers call themselves backpackers or PVTistes. |
| working holiday (visa) | PVT (Programme Vacances-Travail) ; visa vacances-travail ; AU visa: « Working Holiday visa (sous-classe 417) » | First mention: « PVT (Programme Vacances-Travail) ». « PVTistes » for holders. |
| road train (AU) | road train (camion à plusieurs remorques) | Gloss on first use per page. |

### Places to stay

| English | French | Notes |
|---|---|---|
| campground (generic) | camping ; « aire de camping » for basic park/council sites | French « camping » covers both, so add the type when it matters: « camping de parc national », « aire de camping communale ». |
| campsite (= a pitch) | emplacement | « réserver un emplacement ». |
| campsite (= the site) | camping | Decide from context. |
| caravan park (AU) | caravan park ; plural caravan parks | Keep the Australian term (on every sign, used by PVTistes). Gloss once per page: « caravan park (camping privé avec sanitaires, souvent des bungalows) ». Never « parc pour caravanes » or « parc de caravanes ». |
| holiday park (AU, NZ) | holiday park ; plural holiday parks | Same logic. Gloss: « holiday park (camping privé tout équipé) ». The app label « Villages vacances » is misleading; do not reuse it in prose. |
| free camp / free camping | camping gratuit ; « free camp » kept once in parentheses if helpful | (GSC « camping gratuit nouvelle zelande ») |
| freedom camping (NZ) | freedom camping (camping libre) | The legal NZ term stays in English. Gloss on first use per page: « le freedom camping (camping libre, sur terrain public, hors camping aménagé) ». Use « camping sauvage » only as the reader’s own term: « ce que l’on appelle souvent camping sauvage ». (PVT, GSC) |
| wild/bush/dispersed camping | camping sauvage ; « bush camping » once if the English uses it | |
| self-contained (vehicle, NZ) | self-contained (certifié autonome) | Certification name stays in English: « véhicule certifié self-contained ». The app label « Logements indépendants » is a mistranslation; never reuse it. (PVT) |
| self-contained (AU, generic) | autonome (avec toilettes, eau et réservoir d’eaux grises) | |
| powered site | emplacement avec électricité | |
| unpowered site | emplacement sans électricité | |
| cabin | bungalow (caravan/holiday park) ; cabane (basic) | |
| hut (NZ backcountry) | refuge ; « hut » once in quotes if the page names DOC products | (PVT: « les huts », « refuges ») |
| Great Walk(s) | Great Walks (les grandes randonnées emblématiques) | Keep the name; gloss once. |
| tramping | randonnée | « tramping » only when quoting the Kiwi word. |
| track (walking) | sentier ; « piste » for 4x4 tracks | |
| roofed accommodation | hébergement en dur | |
| farm stay / station stay | séjour à la ferme / séjour dans une station (grande exploitation d’élevage) | |
| backpacker hostel | auberge de jeunesse ; « backpacker » | |
| showground (AU) | showground (terrain de foire agricole) | Gloss once. |
| day-use area | aire de pique-nique (usage de jour) | |
| rest area | aire de repos | (APP) |
| dump point (AU) / dump station (NZ) | aire de vidange ; « point de vidange » acceptable | Same French term on both sites. (APP, ASO « vidange ») Never transliterate « dump ». |
| grey water / black water | eaux grises / eaux noires | Cassette toilet: « cassette (WC chimique) ». |
| potable/drinking water | eau potable ; « point d’eau » for a tap | |
| laundromat | laverie | |
| information centre / i-SITE | office de tourisme ; i-SITE (NZ) kept as name + « office de tourisme » | |

### Land, agencies and rules

| English | French | Notes |
|---|---|---|
| national park | parc national | Official names stay English: « Kakadu National Park » may become « le parc national de Kakadu » in prose; keep the English when it is the name on a booking site or source label. |
| state forest (AU) | State Forest (forêt domaniale) | Gloss once. |
| Crown land | Crown land (terres publiques) | |
| council | municipalité ; « council » once in parentheses | AU councils are large shires; « commune » is acceptable for a small town. NZ: « conseil de district » / « conseil municipal » for district/city councils, « conseil régional » for regional councils. |
| bylaw | arrêté municipal / règlement municipal | |
| land manager | gestionnaire du site / gestionnaire du terrain | |
| ranger | ranger (m.) | (PVT) |
| Traditional Owners (AU) | propriétaires traditionnels (Traditional Owners) | Respectful, capitalised in English gloss. |
| Country (Aboriginal sense) | Country (la terre ancestrale) ; « respecter la terre » | Never « le pays ». |
| Aboriginal and Torres Strait Islander peoples | peuples aborigènes et insulaires du détroit de Torres ; Aborigènes (n.), aborigène (adj.) | « Premières Nations » is also current. |
| Māori | Māori (n., invariable), māori (adj., invariable) | Keep the macron: « la culture māori », « les Māori ». |
| DOC | le DOC (Department of Conservation) | First use per page: « le DOC (Department of Conservation, l’organisme public qui gère les espaces naturels protégés) ». Masculine. (GSC « doc nouvelle zelande ») |
| NPWS / Parks Victoria / QPWS / DBCA | keep the agency name; gloss once: « le NPWS (le service des parcs nationaux de Nouvelle-Galles du Sud) » | |
| total fire ban | Total Fire Ban (interdiction totale de feu) | Keep the official term, gloss once; then « interdiction totale de feu ». |
| fire danger rating | niveau de danger d’incendie | |
| fire restrictions / fire season | restrictions sur les feux / saison des incendies | « feux de camp » for campfires. |
| fine / infringement | amende / infraction | « une amende de 400 $ » |
| permit | permis / autorisation | |
| booking / book | réservation / réserver | |
| biosecurity / quarantine | biosécurité / quarantaine ; « contrôle de quarantaine » | Fruit fly: « mouche des fruits ». |
| WOF / rego (NZ, AU) | Warrant of Fitness (contrôle technique) / rego (immatriculation) | Gloss once. |
| fuel / petrol / diesel | carburant / essence (sans-plomb) / diesel (gazole) | « faire le plein » ; « station-service » (servo). |
| toll / toll road | péage / route à péage | |
| speed limit | limitation de vitesse | « 100 km/h » |
| one-lane bridge | pont à voie unique | |
| gravel road / unsealed | route en gravier / piste non goudronnée | |
| floodway / causeway | radier / zone inondable | |
| no signal / no reception / black spot | sans réseau ; zone blanche | « zone blanche » is the natural French term for no coverage. |
| sandflies (NZ) | sandflies (petits moucherons piqueurs) | (GSC « sandflies nouvelle zélande ») Keep the English word, gloss once. |
| outback | l’Outback (m.) ; « le bush » for bushland | |
| school holidays | vacances scolaires | |
| peak season / shoulder season | haute saison / intersaison | |

### App vocabulary (use the app’s French label where it is correct)

| English | French on the site | App label and notes |
|---|---|---|
| Explore (tab) | Explorer | (APP) « Explorer » |
| Collections | Collections | (APP) |
| Planner / trip planner | Planificateur ; « le planificateur de voyage » | (APP) « Planificateur » |
| Guides (tab) | Guides | (APP) |
| Liked | J’ai aimé | (APP) label, write in « » when naming the list |
| Starred | Favoris | (APP) The old site used « Épinglés »; align with the app. |
| Want to visit | Envie de visiter | (APP) |
| Visited | Visité / Visités (the list) | (APP) |
| Pins | Épingles | (APP) |
| All saved | the list of « tous les lieux enregistrés » | The app label « Tous sauvés » is a mistranslation; describe it instead. |
| smart collections | collections intelligentes | (APP) |
| place screen / place details | fiche du lieu | |
| stop / leg | étape / tronçon | |
| itinerary | itinéraire ; « programme » for the day plan | |
| to-dos / packing list | tâches / liste de choses à emporter | (APP) « Liste de choses à faire », « Ajouter une tâche » |
| Pass (premium) | le Pass | (APP) « Inclus avec le Pass ». Never « laissez-passer ». |
| Street View / Look Around | Street View, as the English names it | The site calls it Street View. |
| Calendar (iOS app) | Calendrier | iOS French name. |
| widgets | widgets | |
| bundled offline / works offline | embarqué dans l’app, consultable sans réseau | See banned list: never a « carte hors ligne ». |

## 5. Conventions

- **Typography.** Non-breaking space U+00A0 before `: ; ! ?`, after `«` and before `»`, between a
  number and its unit or symbol (`74 000`, `100 km`, `15 %`, `40 °C`, `35 $`), and inside thousands
  (`74 000`, `1 450`). Typographic apostrophe `’` everywhere (never `'`). Quotes « » with nested
  “ ”. Ellipsis `…`. No space before `.` or `,`.
- **Numbers.** Decimal comma: `2,08`. Thousands with U+00A0. Ordinals `1er`, `2e`. Ranges in
  prose: « de 80 à 130 $ »; in tight tips or tables « 80 à 130 $ ». En dash `–` only in tables or
  compact ranges; **never an em dash**.
- **Currency.** Amount first, symbol after: `35 $`. Australian dollars: `$` alone when the page is
  clearly about Australia, `$ AU` where the English writes `A$` or the context mixes currencies.
  New Zealand: `$` alone or `$ NZ` where the English writes `NZ$`. ISO codes stay codes and follow
  the amount: `35 AUD`, `20 NZD`. Never convert prices; the numbers stay exactly as in English.
- **Dates and times.** « 5 août 2026 », « 1er juillet », month and weekday in lower case.
  « 22 h », « 7 h 30 », « 10 h ». « du 7 juin 2026 ».
- **Units.** km, km/h, m, l (litre, `l/100 km`), kg, °C. Keep the metric values exactly.
- **Countries.** Always « Australie » and « Nouvelle-Zélande » in full, with the hyphen and accents
  (« en Nouvelle-Zélande », « néo-zélandais », « australien »). « NZ » only inside a code or a
  compact label that already uses it.
- **Place names.**
  - AU states and territories: established French forms are what French readers know and search for:
    Nouvelle-Galles du Sud (NSW), Victoria (« le Victoria » or « l’État de Victoria »), Queensland
    (« le Queensland »), Australie-Méridionale (SA), Australie-Occidentale (WA), Tasmanie (TAS),
    Territoire du Nord (NT), Territoire de la capitale australienne (ACT), « le Centre rouge » or
    « l’Australie centrale » for Central Australia. Abbreviations NSW, WA, SA, NT, QLD, VIC, TAS, ACT
    are fine after first mention, as on road signs and plates. **See the open issue in section 9:
    the engine currently forces the English names.**
  - NZ: « l’île du Nord », « l’île du Sud », « l’île Stewart (Rakiura) » are the French forms used by
    every French guide. **Same open issue.**
  - Cities: Sydney, Melbourne, Brisbane, Perth, Darwin, Hobart, Canberra, Cairns, Alice Springs;
    « Adélaïde » takes its French accents. Auckland, Wellington, Christchurch, Queenstown unchanged.
  - Established French forms: la Grande Barrière de corail, le détroit de Cook (Cook Strait),
    le détroit de Bass, la côte Ouest (West Coast, NZ) or « la West Coast » on first mention, le
    Centre rouge (Red Centre), la mer de Tasman.
  - Road and park names stay English with a French article: « la Great Ocean Road », « la Stuart
    Highway », « la Gibb River Road », « le Kakadu National Park » or « le parc national de
    Kakadu ». Roads are feminine (« la route »), parks masculine.
  - Aboriginal and Māori names keep their exact spelling and diacritics: Uluṟu, K’gari, Kata Tjuṯa,
    Budj Bim, Aotearoa, Aoraki, Rakiura, Taupō, Kaikōura, Ōtautahi, Whakaari, Te Anau. Never revert
    to colonial names unless the English gives both.
- **Never translated:** AussieCamps, KiwiCamping, App Store, iPhone, iOS, iCloud, BookEasy,
  BookIt, Street View, agency and programme names (DOC, NPWS, Parks Victoria, MetService,
  Waka Kotahi, NZTA, MBIE, Home Affairs, Immigration New Zealand, Fuel Plan, RBA), names of
  campgrounds, parks and businesses, URLs, markup tags (`<a data-guide="…">…</a>`), `{placeholders}`.
  Give a short French gloss on first use of an agency per page.
- **Gender of borrowed words:** le road trip, le van, le camping-car, le caravan park, le holiday
  park, le freedom camping, le DOC, le Pass, la Great Ocean Road, la Stuart Highway, l’Outback (m.).

## 6. Banned

- **Em dashes** (—) anywhere, including escaped. Use a colon, a comma, parentheses or a new sentence.
- **Any offline-map claim:** « carte hors ligne », « cartes hors connexion », « carte disponible
  sans réseau », « navigation hors ligne ». The apps are not offline maps. What works offline:
  « les fiches des lieux et les guides restent consultables sans réseau ». Map tiles, itinéraires,
  météo et photos need a connection. This holds even where the English source is looser.
- **Superlatives the English does not make** (« incontournable », « le meilleur », « magique »,
  « paradis ») and travel-brochure filler (« partez à l’aventure », « vivez une expérience
  inoubliable », « tout ce qu’il faut savoir », « le guide ultime »).
- **Machine-translation calques** (bad → good):
  - « parc pour caravanes » → « caravan park »
  - « parc de vacances » / « village vacances » → « holiday park »
  - « Ces règles existent parce que… » → « Ces règles s’expliquent : … » / « Si ces règles sont si strictes, c’est que… »
  - « Réservez honnêtement » (Use the booking honestly) → « Ne réservez que ce que vous utiliserez »
  - « faire du sens » → « avoir du sens »
  - « adresser un problème » → « régler / traiter un problème »
  - « opportunité » (= chance) → « occasion »
  - « éventuellement » (= eventually) → « finalement, à terme »
  - « définitivement » (= definitely) → « sans aucun doute, vraiment »
  - « supporter » (= support) → « prendre en charge, être compatible avec »
  - « location » (= place) → « lieu, emplacement » (« location » means rental)
  - « dans le cas où » chains, « au niveau de » used for « regarding » → « pour », « côté… »
  - « basé sur » → « fondé sur, d’après, à partir de »
  - « une pause contre la fatigue » (fatigue stop) → « une pause pour se reposer »
  - « votre prochain lieu est quelque part dehors » (Your next place is out there) → « Votre prochain spot vous attend »
  - « la table de préparation » (the planning table) → « la phase de préparation »
  - Possessives everywhere (« votre van, vos réservoirs, votre itinéraire ») → keep only those French needs.
  - Passive chains (« il est recommandé que les réservations soient effectuées ») → active imperative.
  - « Il est important de noter que », « Il convient de noter » → delete.
- **English left in French prose** except the glossary terms kept on purpose. No « check » for
  « vérifiez », no « spot » in formal pages (fine in home and app copy), no « booker ».
- **Inconsistent terms:** once a page says « holiday park », it does not switch to « village
  vacances » two paragraphs later.

## 7. Structure and mechanics (completeness gate)

- Same number of sections, paragraphs, tips, FAQ items, sources and price rows as English. Merge or
  split sentences only **inside** a paragraph.
- Every fact, number, date, price, distance and link stays exactly as in English. Markup tags and
  `{placeholders}` copied byte for byte. Source labels may be translated (« Parks Victoria : réserver
  un camping ») but the agency name stays.
- Homepage testimonials (`review1…review9*`, `reviewsEyebrow`, `reviewsTitle`): leave the existing
  French values unchanged.
- Road trips, legacy KiwiCamping pages and the `consent`, `article` and `tools` namespaces follow the
  same rules when they reach `en.json`.

## 8. Before and after (from the current site)

1. AussieCamps home, `ui.featuresText`
   - EN: « Explore places, compare the details, organise favourites and build a trip that stays useful after the planning table. »
   - Before: « Explorez les lieux, comparez les détails, organisez vos favoris et construisez un voyage qui sert encore une fois la table de préparation rangée. »
   - After: « Explorez les lieux, comparez les détails, classez vos favoris et préparez un voyage qui reste utile une fois sur la route. »
2. AussieCamps, camping rules in Tasmania, biosecurity paragraph
   - EN: « The rules exist because Tasmania is free of several pests and diseases present on the mainland. Complying takes a few minutes and protects an island agricultural economy. »
   - Before: « Ces règles existent parce que Tasmania est indemne de plusieurs ravageurs et maladies présents sur le continent. S’y plier prend quelques minutes et protège l’économie agricole d’une île. »
   - After: « Si la Tasmanie est aussi stricte, c’est qu’elle a échappé à plusieurs ravageurs et maladies présents sur le continent. Se mettre en règle ne prend que quelques minutes et protège toute l’agriculture de l’île. »
3. KiwiCamping, DOC campsite rules, section heading and first paragraph
   - EN: « Use the booking honestly » / « Book the correct date, party and product, then keep confirmation available offline. »
   - Before: « Réservez honnêtement » / « Réservez la bonne date, le bon nombre de personnes et la bonne prestation, puis gardez la confirmation accessible hors connexion. »
   - After: « Une réservation, ça se respecte » / « Réservez la bonne date, le bon nombre de personnes et le bon type d’emplacement, puis gardez la confirmation sur votre téléphone pour pouvoir la montrer sans réseau. »

## 9. Open issue: state and island names

`docs/translation.config.json` lists New South Wales, South Australia, Western Australia, Tasmania,
Northern Territory, Australian Capital Territory and Central Australia (AU) and North Island, South
Island and Stewart Island (NZ) as protected terms, so the engine rejects any French unit that does
not repeat them in English. The current French therefore reads « en Tasmania », « la North Island »,
which no French writer would publish and nobody searches for. PVTistes.net writes « Nouvelle-Galles
du Sud (New South Wales) » once and the French name afterwards.

Proposed fix (orchestrator decision): move these names from `protectedTerms` to the glossary with a
rendering per locale (fr: Nouvelle-Galles du Sud, Australie-Méridionale, Australie-Occidentale,
Tasmanie, Territoire du Nord, Territoire de la capitale australienne, Centre rouge; île du Nord, île
du Sud, île Stewart), or give protected terms a per-locale exception in the engine. Until then,
French units containing these names keep their current wording and their rewrite is held back.
