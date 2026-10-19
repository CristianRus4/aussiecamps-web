# European Portuguese (pt-PT) style guide: AussieCamps and KiwiCamping

This is the contract for every Portuguese unit on aussiecamps.app/pt and campingapp.nz/pt. The same
file lives in both repositories. Engine locale id: `pt` (variety `pt-PT` in
`docs/translation.config.json`).

The reader is Portuguese, from Portugal, usually 20 to 35, planning a campervan, car or backpacking
trip to Australia or New Zealand, sometimes on a Work and Holiday visa, sometimes a family or a
couple with a hired autocaravana. They already know what a parque de campismo is and have often
done a road trip in Portugal or Spain. They do not know the Australian or New Zealand system:
councils, DOC, self-contained certification, total fire bans, station stays. The writer is a
Portuguese travel journalist who has driven these roads and writes for them in the voice of a good
travel magazine or a practical camper blog: direct, concrete, warm, never solemn, never salesy.

## 1. Voice

**Address the reader as tu.** Second-person singular imperative and verbs: *Confirma*, *Leva*,
*Não te fies*, *Se fores*, *o teu plano*. Never *você*, never *o senhor*, never third-person
imperatives (*Confirme*, *Consulte*). Evidence: the existing pt translations on both sites already
use tu throughout (0 occurrences of *você*); Portuguese-market camper brands use tu (roadsurfer.com/pt:
"Aqui encontras roteiros inspiradores… para a tua primeira viagem de camper ou autocaravana";
camperchamp.com/pt-pt: "Reserva a tua autocaravana com bastante antecedência"). Formal *você*
belongs to banks and institutional guides (santander.pt, repsol.pt), not to this audience. The
`register` entry `"pt": "informal"` is set in both configs.

Where a sentence does not need the reader, prefer an impersonal or neutral construction over
forcing *tu* into it: *Convém reservar*, *Vale a pena*, *É obrigatório*, *Não é permitido*.
Legal pages (privacy, terms) use tu where the reader acts and neutral statements elsewhere.

**Rhythm.** Portuguese sentences run a little longer than English, but not by much. Keep one idea
per sentence, join two short English sentences with *e*, *mas*, *por isso*, *porque* when that is
how a Portuguese writer would say it, and split a long English one when it stacks clauses. Lead
with the information, not with a preamble. Verbs over nouns: *antes de partir* rather than *antes
da partida*, *quando chegares* rather than *à chegada*. Vary sentence openings; do not start three
consecutive sentences with the subject.

**Register of vocabulary.** Everyday Portuguese, not administrative Portuguese. *Sítio* and *local*
both work (*sítio* is warmer, use it in tips and conversational lines; *local* in descriptive or
rule text). *Dormir*, *passar a noite* and *pernoitar* (the autocaravanistas' word, good for rules).
*Carrinha* for a van in general. *Barato* not *económico* for prices. Avoid bureaucratic noun chains
(*a realização da verificação da disponibilidade*).

**Titles, H1s and meta.** Lead with the term a Portuguese traveller types into Google: *campismo
na Austrália*, *campismo livre na Nova Zelândia*, *autocaravana*, *parques de campismo*, *preços*,
*custo de vida*, *carta de condução*, *regras*. Sentence case (only the first word and proper
nouns capitalised: *Regras de campismo em Queensland*, not *Regras De Campismo*). Meta descriptions
150 to 160 characters, a full natural sentence, no keyword lists. Titles up to about 65
characters.

**The brand.** *a AussieCamps*, *a KiwiCamping* (feminine, like *a app*): *na AussieCamps*, *da
KiwiCamping*. Never *o AussieCamps*. The app is *a app* (pt-PT web usage) or *a aplicação* when
a sentence needs variety; never *o aplicativo*.

## 2. Glossary

Sources: S = existing site usage kept; A = App Store pt-PT keyword set (AussieCamps:
`autocaravana, caravana, parques, acampar, planeador, road trip, carro, tenda, campervan,
nacionais, campismos`); U = app UI label (the app's `pt` localisation is Brazilian Portuguese, see
§2.3); W = Portuguese web usage (Visit Portugal/Turismo de Portugal ASA rules, santander.pt and
repsol.pt motorhome guides, roadsurfer.com/pt, camperchamp.com/pt-pt, Código da Estrada).

Search Console (export of 2026-10-19, last 3 months) gives little direct evidence: no
Portuguese-language query reaches the export's 4-impression threshold on either site (most
impressions are anonymised long tail). The /pt/ pages still drew impressions, led on AussieCamps by
sleeping-in-car, drink prices and public transport costs, and on KiwiCamping by public transport
costs, biosecurity, eating out, groceries and DOC campsite rules. Titles therefore lead with the
plain terms Portuguese travellers use for those topics (*preços*, *quanto custa*, *dormir no carro*,
*regras*, *parques de campismo do DOC*).

### 2.1 Vehicles, places to stay, services

| English | pt-PT | Notes and source |
|---|---|---|
| camping (activity) | campismo | Always *campismo*, never *camping* in prose (pt-BR). *Acampar* as the verb. A, W |
| campground / campsite (the place) | parque de campismo (the generic Portuguese word for any campground, and for DOC campsites: *parque de campismo do DOC*); área de campismo (basic Australian national-park, forest or council ground, or wherever the English stresses that it is basic) | *Campismo* alone is not a place. App says "Áreas de camping" (pt-BR), do not copy |
| campsite (one pitch) | lugar | *lugar com eletricidade*, *lugar sem eletricidade*. Not *alvéolo* (too formal), not *site* |
| powered site / unpowered site | lugar com eletricidade / lugar sem eletricidade | App "Alimentado" is a mistranslation; do not use |
| caravan park (AU) | parque de campismo; *caravan park* in italics-free English only where the guide contrasts it with a holiday park | Gloss on first use in the comparison guide: *caravan park (o parque de campismo clássico australiano)*. App "Parques de caravanas" is a calque; avoid |
| holiday park (AU, NZ) | holiday park (kept, masculine: *o holiday park*), glossed on first use per page: *holiday park (parque de campismo com bungalows, piscina e mais serviços)* | Travellers see the English name on every sign. S (NZ uses it 38 times) |
| free camp / free camping (AU, free of charge) | campismo gratuito; área de campismo gratuita; sítio gratuito para pernoitar | *Gratuito* in prose; *grátis* only in short UI tags. A Portuguese reader searching uses "campismo gratuito". S |
| freedom camping (NZ, legal camping outside campgrounds) | campismo livre (freedom camping) on first use per page, then *campismo livre* | camperchamp.com/pt-pt: "É permitido fazer campismo livre?" Never *campismo selvagem* for NZ freedom camping: in Portugal it implies illegal camping |
| wild camping / bush camping (illegal or dispersed) | campismo selvagem (illegal, anywhere); campismo disperso (permitted dispersed camping in state forests) | W |
| overnight stay / to stay overnight | pernoita / pernoitar, passar a noite, dormir | *Pernoita* is the legal pt-PT term (Código da Estrada: occupancy 22h–7h). W |
| set up camp (awning, chairs, levelling ramps) | montar acampamento; abrir o toldo, pôr mesa e cadeiras cá fora | Portuguese autocaravanistas know the *estacionar / aparcar* distinction; use the plain description, not *aparcar*, which a non-camper misreads |
| rest area | área de descanso | U ("Áreas de descanso"), S. Not *área de serviço* (that is a motorway service station in Portugal) |
| roadhouse | roadhouse (posto de abastecimento isolado no Outback) on first use | Keep the local word, glossed |
| servo / petrol station | bomba de gasolina, posto de abastecimento | *Bomba de gasolina* is what Portuguese people say |
| dump point (AU) / dump station (NZ) | ponto de despejo | Both sites. U (AU "Pontos de despejo"). W uses *despejo de cassetes*, *águas cinzentas*, *águas negras* |
| grey water / black water | águas cinzentas / águas negras | W (Turismo de Portugal ASA rules) |
| cassette toilet / chemical toilet | sanita de cassete / sanita química (WC químico) | W |
| fresh water / potable water | água potável; *água limpa* for the tank | |
| campervan | campervan (feminine: *a campervan*), *carrinha camper*, *carrinha* | A ("campervan"), W (camperchamp "carrinhas camper"). Small hire vans of the Jucy/Wicked type |
| motorhome | autocaravana | A, W. The bigger vehicle with a cab-over or integrated body |
| caravan (towed) | caravana | A. *Roulote* is colloquial; use *caravana* |
| camper trailer | atrelado de campismo (tenda-atrelado) | |
| big rig | caravana ou autocaravana grande, conjunto comprido | Never *grande equipamento* |
| van (generic) | carrinha | |
| 4WD | 4x4, todo-o-terreno | *4WD* only inside official names |
| road train | road train (camião com vários atrelados, até 53,5 m) on first use | |
| self-contained (NZ) | autónomo; *certificado de autonomia (self-contained)*; *veículo autónomo certificado* | One word everywhere: *autónomo*. Not *autossuficiente*, not *independente*. NZ green warrant: *warrant verde de autonomia* glossed once |
| hut (NZ DOC backcountry) | refúgio (do DOC) | pt-PT mountain-hut word. S (87 uses). Not *cabana* (U says "Cabana", a pt-BR calque), not *abrigo* (use *abrigo* only for a basic shelter) |
| Great Walk | Great Walk (um dos percursos pedestres de referência do DOC), plural *Great Walks* | Official name, kept |
| track / walking track / tramp | trilho, percurso pedestre; caminhada (tramping) | |
| national park | parque nacional | U, A |
| state forest | floresta estadual | |
| council / shire / local government | the council itself: câmara municipal; its area: município; *shire* kept when the source names one | *Conselho* is a false friend; *concelho* is a Portuguese administrative unit, so do not use it for Australian or NZ councils |
| bylaw | regulamento municipal | |
| ranger | guarda do parque (ranger) | |
| station stay (AU) | estadia numa station (grande herdade de gado) on first use | Not *estação* |
| farm stay | estadia numa quinta | |
| roofed accommodation | alojamento com teto, alojamento (hotéis, motéis, cabanas) | Not *alojamento com telhado* |
| backpacker hostel | hostel | |
| rideshare (Uber, DiDi) | TVDE (Uber e afins) on first use | The Portuguese legal term for app-based rides |
| bottle shop (AU) | bottle shop (loja de bebidas alcoólicas) on first use | |
| honesty box | caixa de pagamento por confiança (honesty box) on first use | |
| amenities (AU) / facilities (NZ) | comodidades / instalações | Each site keeps its own source word |
| holiday (vacation) | férias | |
| booking / book | reserva / reservar | |
| fee / fees | preço (general); taxa (official fees set by an authority: *taxa de campismo do DOC*, *taxa de entrada*); tarifa only for transport fares | |
| toll | portagem | W (roadsurfer.com/pt "Portagens") |
| fuel / petrol / diesel | combustível / gasolina / gasóleo | Never *diesel* as a fuel name in prose |
| fuel station | bomba de gasolina, posto de combustível | |
| speed camera | radar | |
| driving licence / International Driving Permit | carta de condução / licença internacional de condução | The IDP is issued in Portugal by the IMT as *Licença Internacional de Condução*; use that in body text. People also search *carta de condução internacional*, which is fine in an FAQ question or title |
| left-hand driving | conduzir pela esquerda | |
| one-lane bridge | ponte de uma via | |
| gravel road | estrada de terra batida, estrada de gravilha | |
| road trip | viagem de carro, road trip | Both used in Portugal. Titles may use *road trip* when it is the search term; body text prefers *viagem*, *volta*, *percurso* |
| big lap (AU) | a grande volta à Austrália (the Big Lap) | |
| itinerary | itinerário, percurso | |
| leg (of a trip) | troço, etapa | |
| stop | paragem | Not *parada* (pt-BR, U) |
| working holiday | Working Holiday (visto de férias e trabalho) | Portugal has a Work and Holiday (subclass 462) arrangement with Australia; keep visa names as in the source |
| bushfire | incêndio florestal, fogo | |
| total fire ban | proibição total de fogo (total fire ban) | Glossed first use |
| fire danger rating | índice de perigo de incêndio | |
| flood / flash flood | cheia / cheia repentina | |
| the bush | o mato | |
| the Outback | o Outback | Proper noun, kept |
| biosecurity | biossegurança | |
| sandflies (NZ) | sandflies (pequenas moscas negras que picam) on first use | NZ sandflies are blackflies, not biting midges; do not call them *mosquitos-pólvora* |
| reception / signal | rede, cobertura de rede | *sem rede* is how Portuguese say "no signal" |
| download (app) | transferir | Apple pt-PT wording |
| screen | ecrã | Never *tela* |
| phone | telemóvel | |
| save (a place) | guardar | Never *salvar* |
| settings | definições | Apple pt-PT |

### 2.2 Agencies and official bodies

Agency names stay in English. Give a short gloss on first use per page, then the acronym only.

- **DOC**: *o DOC (Department of Conservation, o serviço público que gere os parques e as áreas
  protegidas)*. Masculine: *do DOC*, *no DOC*.
- **NPWS**: *o NPWS (NSW National Parks and Wildlife Service, os parques nacionais de New South
  Wales)*. Same pattern for Parks Victoria, QPWS, Parks Australia, DBCA, Parks and Wildlife NT.
- **NZTA Waka Kotahi**, **MBIE**, **Home Affairs**, **Immigration New Zealand**, **RBA**, **RBNZ**:
  name kept, gloss once (*a agência de transportes neozelandesa*, *o Departamento de Assuntos
  Internos australiano*, *o banco central*).
- Councils keep their names: *Queenstown Lakes District Council*, *Byron Shire Council*.

### 2.3 App UI labels

The app's `pt` localisation (`Localizable.xcstrings`) is Brazilian Portuguese with some
mistranslations, so a Portuguese iPhone shows it. Use the app's wording where it is correct and
neutral, so the reader can find the button; use the pt-PT form where the app is pt-BR or wrong, but
stay recognisably close.

| App screen or label (en) | Website pt-PT | App shows | Why |
|---|---|---|---|
| Explore | Explorar | Explorar | Same |
| Collections | Coleções | Coleções | Same |
| Smart collections | coleções inteligentes | Coleções inteligentes | Same |
| Liked | Gosto | Gostou | *Gosto* is the pt-PT "Like" everyone knows; *Gostou* is a mistranslation |
| Starred | Com estrela | Com estrela | Same |
| Want to visit | Quero visitar | Quer visitar | First person reads naturally; recognisable |
| Visited | Visitados | Visitado | |
| Pins | Pins | Alfinetes | Portuguese map users say *pin*; the collection is short and recognisable |
| All saved | Todos os guardados | Todos salvos | *Salvos* is pt-BR |
| Trips / Planner | Viagens / planeador de viagens | Viagens / Planejador | *Planejador* is pt-BR; A uses *planeador* |
| Filters | Filtros | Filtros | Same |
| Satellite | Satélite | Satélite | Same |
| Street View (Apple Look Around) | Street View | Olhe ao redor | The site calls the feature Street View in every language |
| Pass / Premium pass | o Pass (AussieCamps Pass, KiwiCamping Pass) | Passe | Product name kept as in the English source; *o Pass* (masculine). Never promise free access to Pass data |
| to-do | tarefa | tarefa | Same |
| packing list | lista de bagagem / lista do que levar | | |
| place screen | ficha do local | | Not *ecrã de local* |
| Calendar (iOS) | Calendário | | Apple pt-PT |

## 3. Conventions

- **Spelling:** Acordo Ortográfico de 1990 as used in Portugal: *atual*, *ação*, *direção*,
  *ótimo*, *receção*, *exceção*, *projeto*; but *contacto*, *facto*, *receção*. Never Brazilian
  *contato*, *fato* (for fact), *recepção*, *ônibus*, *trem*, *banheiro*, *geladeira*, *celular*.
- **Continuous aspect:** *estar a + infinitivo* (*está a chover*), never the gerund.
- **Numbers:** thousands with a dot, decimals with a comma: *74.000*, *6.500*, *2,47*. Four-digit
  numbers too (*4.000*), except years. Do not convert units.
- **Currency:** prices stay in AUD or NZD, written after the amount with a space: *25 AUD*, *2,47
  AUD/l*, *entre 80 e 140 AUD*. In running prose *dólares australianos* / *dólares neozelandeses*
  is fine when it reads better. Keep every number and its range exactly; *A$80–A$140* becomes
  *80–140 AUD* or *entre 80 e 140 AUD*. Ranges may use an en dash (–) with no spaces. Euros only
  where the source gives euros.
- **Units:** *km*, *km/h*, *m*, *l* (litre, lowercase), *l/100 km*, *°C*, *kWh*. Space between the
  number and the unit (*100 km*, *20 °C* is acceptable as *20 °C*).
- **Time:** 24-hour, *às 20h*, *entre as 22h e as 7h*, *20h30*.
- **Dates:** *19 de outubro de 2026*, months and weekdays lowercase. *junho de 2026*. Seasons
  lowercase (*verão*, *inverno*). Remind the reader once when it matters that the southern
  hemisphere seasons are inverted (*o verão australiano, de dezembro a fevereiro*) only if the
  source says the months.
- **Quotes:** « » for quotations and search examples, " " inside them. No quotes around app labels;
  capitalise them instead (*a coleção Quero visitar*).
- **Punctuation:** no space before ? ! : ;. No em dashes (—) anywhere; use a comma, colon,
  parentheses or a new sentence. Lists in prose with *e* before the last item, no Oxford comma.
- **Capitalisation:** sentence case in headings. Lowercase nationalities, languages, months,
  seasons, points of the compass (*norte*, *a costa leste*), and *parque nacional* unless part of an
  official name (*Kakadu National Park*, or *o parque nacional de Kakadu* in running prose).
- **Place names:** stay in their original form, as the project rules require, including the
  states and territories (*New South Wales*, *Western Australia*, *Northern Territory*, *Tasmania*,
  *Victoria*, *Queensland*, *South Australia*, *Australian Capital Territory*) and the NZ islands
  (*North Island*, *South Island*, *Stewart Island*), which the engine protects. Use them with the
  Portuguese article: *em New South Wales*, *na North Island*, *na South Island*, *no Northern
  Territory*, *na Tasmania*. Cities, parks, roads and regions keep their English names (*Sydney*,
  *Canberra*, *Gold Coast*, *Great Ocean Road*, *Bay of Islands*). Only the countries use the
  Portuguese form: *Austrália*, *Nova Zelândia*; adjectives *australiano*, *neozelandês*. Common
  Portuguese exonyms for large natural features are fine where the source uses the feature, not a
  park name: *Grande Barreira de Coral*, *mar da Tasmânia*, *estreito de Cook* (but *Cook Strait
  ferry* stays as the service name, *o ferry do Cook Strait*).
- **Māori and Aboriginal names:** exact spelling and diacritics: *Taupō*, *Whangārei*, *Aoraki*,
  *Aotearoa*, *Ōhakune*, *Uluṟu*, *K'gari*, *Ikara*, *Tjoritja*. *Māori* keeps the macron; as a
  Portuguese adjective it is lowercase and invariable (*a cultura māori*, *os māori*). Māori words
  the source uses (*whenua*, *tapu*, *rāhui*) stay, with a short gloss in Portuguese the first
  time: *a whenua (a terra)*.
- **Never changes:** AussieCamps, KiwiCamping, App Store, iPhone, iOS, Apple, Street View,
  agency names, protected terms in the config, URLs, `{placeholders}`, HTML tags and attributes
  (`<a data-guide="slug">…</a>`), source titles of cited documents, price-row item order.

## 4. Banned

| Banned | Why | Write instead |
|---|---|---|
| *mapa offline*, *mapas offline*, *mapa sem rede*, *funciona offline* about the map | The apps are not offline maps. Place details and guides open without signal; map tiles, routing, weather and photos need a connection | *os detalhes dos locais abrem sem rede*, *a ficha de cada local funciona offline* |
| Em dash (—) | House rule | comma, colon, parentheses |
| *você*, *o senhor*, third-person imperatives | Register is tu | *Confirma*, *Leva*, *Tens de* |
| Brazilianisms: *salvar*, *tela*, *celular*, *banheiro*, *ônibus*, *trem*, *parada*, *planejar*, *aplicativo*, *usuário*, *equipe*, *registro*, *contato*, *trilha*, *camping* (as a noun for a place), *acampamento* for a campground, *motorhome* | Wrong variety | *guardar*, *ecrã*, *telemóvel*, *casa de banho*, *autocarro*, *comboio*, *paragem*, *planear*, *app*, *utilizador*, *equipa*, *registo*, *contacto*, *trilho*, *parque de campismo*, *autocaravana* |
| Gerund for ongoing action (*estando dirigindo*) | Brazilian structure | *estar a conduzir* |
| *Há duas espécies* | Calque of "two kinds" | *Há dois tipos* |
| *alojamento com telhado* | Calque of "roofed accommodation" | *alojamento com teto*, *hotéis, motéis e cabanas* |
| *estadias em estações* | "station" mistranslated | *estadias em stations (grandes herdades de gado)* |
| *Verificar o atual conta*, *Primeiro útil. Sempre honesta.* | Word-for-word slogans | Rewrite the idea: *Útil primeiro, honesta sempre* only if it reads; otherwise *Útil, e sempre honesta* |
| *Cada local abre com o detalhe que decide* | Literal | *Cada ficha mostra logo o que precisas para decidir* |
| *conselho* for a council | False friend | *câmara municipal*, *município* |
| *autossuficiente*, *independente* for self-contained | Inconsistent | *autónomo* |
| *realizar*, *efetuar*, *proceder a* where a plain verb works | Bureaucratic | *fazer*, *pagar*, *reservar* |
| *de forma a*, *a nível de*, *em termos de* | Filler and calques | rephrase |
| *é importante notar que*, *tenha em atenção que* before every fact | Padding | state the fact |
| *experiência única*, *paraíso*, *imperdível*, *o melhor* without a source | Unsupported superlatives | the concrete fact |
| *datado(s)* for "dated figures" | Reads as "outdated" in Portugal | *com a data de verificação*, *preços com data* |
| *eventualmente* for "eventually" | False friend (means "possibly") | *acabar por*, *mais cedo ou mais tarde* |
| *assumir* for "assume" | Calque | *partir do princípio*, *contar com* |
| *suportar* for "support" (a feature) | Calque | *permitir*, *ser compatível com* |
| *atualmente* for "actually" | False friend | *na verdade*, *mesmo* |
| *excitante* | False friend | *emocionante* |
| *Tu podes* with the pronoun everywhere | Portuguese drops the subject pronoun | *Podes* |
| Possessive overload (*o teu carro, a tua carrinha, as tuas coisas*) in one sentence | English pattern | drop possessives where context is clear |
| Passive with *ser* copied from English (*é recomendado que*) | Stiff | *convém*, *recomenda-se*, active voice |

## 5. Before and after (current site text)

1. AussieCamps `ui.faq5a`
   - Before: *Há duas espécies. As coleções inteligentes (Gosto, Destacados, Quero ir, Visitados,
     Marcadores e Tudo o que guardaste) enchem-se sozinhas…*
   - After: *Há dois tipos. As coleções inteligentes (Gosto, Com estrela, Quero visitar, Visitados,
     Pins e Todos os guardados) enchem-se sozinhas à medida que marcas locais…*
   - Calque fixed, and the six labels now match the app's screens and each other.

2. AussieCamps `ui.faq2a`
   - Before: *…alojamento com telhado, estadias em quintas e estações, hostels…*
   - After: *…hotéis e outros alojamentos com teto, estadias em quintas e em stations (grandes
     herdades de gado), hostels…*
   - "Roofed" and "station stays" were translated word by word; "estações" reads as train stations.

3. AussieCamps `ui.principle2Title` / `ui.featureMainTitle`
   - Before: *Verificar o atual conta* / *Cada local abre com o detalhe que decide.*
   - After: *Confirma sempre o mais recente* / *Cada ficha mostra logo o que te faz decidir.*
   - The English slogans were mirrored word for word and no longer meant anything in Portuguese.

## 6. Process checklist for each unit

1. Read the English for meaning; read the whole section before writing any paragraph.
2. Write it as the Portuguese travel writer would. Reorder, split or merge sentences inside the
   paragraph freely; never move content between paragraphs, tips or FAQ items.
3. Same number of sections, paragraphs, tips, FAQ items, sources and price rows as English. Every
   fact, number, date, price, unit, link and markup tag survives exactly.
4. Terms from §2, one rendering per concept on the whole site.
5. Read it aloud. If a Portuguese reader would notice it was translated, rewrite it.
