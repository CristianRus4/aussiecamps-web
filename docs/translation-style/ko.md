# Korean (ko) translation style guide

This guide is the contract for every Korean string on AussieCamps (aussiecamps.app) and KiwiCamping (campingapp.nz). The same file lives in both repos. Engine locale id: `ko`. Catalog ids: `aussiecamps-website-ko` and `kiwicamping-website-ko` (see "Engine setup" at the end).

## 1. Who we write for and how we sound

**Reader.** A Korean in their 20s or 30s planning a campervan or car trip in Australia or New Zealand. Often a 워홀러 (working-holiday maker) who will buy a cheap van or 차박 in a station wagon. Sometimes a couple or family who has booked a rental 캠핑카 for two or three weeks. They have read Naver blogs and 카페 posts, and they know the loanwords those communities use: 캠퍼밴, 홀리데이 파크 (홀팍), 프리덤 캠핑, 덤프 스테이션, 레스트 에어리어, 리로케이션. They are practical, budget-aware and slightly nervous about rules and fines in a foreign country.

**Writer.** An experienced Korean travel writer who has done these roads, writing for a quality travel magazine or a trusted long-form blog. Not a rental-agency ad, not a government notice, not a translated brochure.

**Register: 해요체 throughout.** Every sentence that addresses the reader ends in 해요체 (-아요/-어요, -세요, -죠, -네요 sparingly). No 합니다체 in body copy, no 반말, no mixing within a page.
- Headings, titles, table labels, chips and short tips use noun or -기 endings (명사형): `도착하면 표지판부터 확인`, `진입로 막지 않기`, `요금 단위 확인하기`. They are not sentences, so they carry no speech level.
- FAQ questions are 해요체 questions: `호주에서 차에서 자도 되나요?`, `국립공원 입장료를 따로 내야 하나요?`
- Buttons and nav items are short nouns or verbs: `다운로드`, `가이드`, `도구`, `고객 지원`, `App Store에서 받기`.
- Legal pages (privacy, terms) also use 해요체, slightly more careful: `수집하지 않아요`, `책임지지 않아요`. Korean consumer apps (토스, 당근, 카카오) write their policies this way now; it keeps one voice across the site.

**Addressing the reader.** Korean drops the subject. Never write `당신` (it reads as machine translation or as hostile). Use `여러분` at most once per page, and only where a native writer would (an intro or a closing line). Most sentences simply have no subject: `도착하면 표지판부터 확인하세요.`

**Rhythm.** Korean travel writing is direct and concrete. Prefer two short sentences to one long one with three clauses chained by -고 ... -며 ... -는데. Put the practical point first, then the reason. Use numbers and place names, not adjectives. A sentence of 40 to 60 characters is typical; above 90 characters, split it.

**Tone markers we allow.** `꼭`, `미리`, `보통`, `대부분`, `생각보다`, `의외로`, `현지에서는`. We do not use internet slang (`꿀팁` only if the English is literally "tips" in a casual heading, never in body copy), emoticons, `~답니다`, `~랍니다`, or exclamation marks the English does not have.

## 2. Glossary

"Evidence" codes: **TNZ** = Tourism New Zealand Korean site (newzealand.com/kr); **TA** = Tourism Australia Korean site (australia.com/ko-kr, signs itself 호주정부관광청); **DNSW** = Destination NSW Korean (visitnsw.com Korean pages); **NB** = Naver blogs and cafés on AU/NZ campervan trips (2024 to 2026 posts, e.g. 김치군 blog, 뉴질랜드 여행 카페, 호주생활 실전가이드); **KR-RV** = Korean domestic RV and camping community (고캠핑 gocamping.or.kr, 캠핑카 blogs); **ASO** = our own Korean App Store keyword set; **APP** = the KiwiCamping/AussieCamps app's Korean UI; **NIKL** = 국립국어원 외래어 표기법 / 표준국어대사전.

### Vehicles and travel

| English | Korean | Notes / evidence |
|---|---|---|
| campervan | 캠퍼밴 | NB, TNZ. In titles, H1 and meta lead with **캠핑카**, the Korean umbrella word people search (ASO `캠핑카여행`; NB: "캠핑카는 주로 한국에서 사용하는 명칭이고 호주는 보통 캠퍼밴"). Body copy uses 캠퍼밴 when the vehicle type matters. `캠핑카(캠퍼밴)` is fine on first mention. |
| motorhome | 모터홈 | NB, TNZ (모터홈/캠퍼밴). Larger vehicle with shower and toilet. |
| RV | RV / 캠핑카 | Keep "RV" when the English says RV. |
| caravan (towed) | 캐러밴 | NIKL standard, DNSW, APP. Korean campers also write 카라반; use it only in `metaKeywords` as a search variant. Never mix both in body copy. |
| camper trailer | 캠퍼 트레일러 | NB. |
| car / station wagon | 승용차 / 왜건 | |
| ute | 유트(픽업트럭) | Gloss once per page. |
| 4WD | 사륜구동(4WD) | First mention `사륜구동(4WD)`, then `4WD` or `사륜구동`. "4WD track" = `사륜구동 전용 트랙`. |
| road train | 로드 트레인(초대형 연결 트럭) | Gloss once per page. |
| sleeping in the car | 차박 | ASO subtitle `캠핑카, 차박, 여행 계획`; the standard Korean word. Car-camping spot = 차박지. |
| road trip | 로드트립 | ASO `로드트립`, TA. Written as one word. `자동차 여행` is the plain alternative; vary between the two. |
| campervan hire | 캠핑카 렌트 / 캠퍼밴 대여 | NB search phrasing is `호주 캠핑카 렌트`. |
| relocation deal | 리로케이션(1달러 캠핑카) | NB. |
| fuel | 연료 / 기름 | `기름값` and `주유` in casual cost sentences, `연료비` in tables. petrol = 휘발유, unleaded = 무연 휘발유, diesel = 경유, servo/petrol station = 주유소. |
| toll / toll road | 통행료 / 유료도로 | `톨게이트` only for a physical gate. Australian e-tags: `전자 통행료 단말기(e-TAG)`. |
| left-hand driving | 좌측 통행 | Korean drives on the right; say `한국과 반대로 좌측 통행` where the English explains it. |
| licence | 운전면허(증) | International Driving Permit = 국제운전면허증. Korean readers know this term. |
| WOF / rego | WOF(차량 안전 검사) / 차량 등록(rego) | Gloss once per page. |

### Places to stay

| English | Korean | Notes / evidence |
|---|---|---|
| campground (a whole site, any operator) | 캠핑장 | KR-RV, NB, ASO `캠핑장찾기`. Korean says 캠핑장 for every campground; 야영장 only in official Korean contexts. TNZ and APP use 캠프장: we prefer 캠핑장 because it is what Koreans type and say. |
| campsite (a pitch inside a campground) | 사이트 / 자리 | KR-RV ("A53 사이트"). When English "campsite" means a whole campground (e.g. "DOC campsite"), use 캠핑장. |
| holiday park | 홀리데이 파크 | TNZ (홀리데이파크), APP, NB (`홀팍` colloquially; never use 홀팍 in our copy). Spaced. |
| caravan park | 캐러밴 파크 | DNSW. Never `캐러밴 공원` (APP calque). |
| tourist park | 투어리스트 파크 | Keep the operator's own wording. |
| powered / unpowered site | 전기 사이트 / 전기 없는 사이트 | KR-RV phrasing. |
| cabin | 캐빈 | |
| free camp / free camping (AU) | 무료 캠핑장 / 무료 캠핑 | NB `무료캠핑장`. |
| freedom camping (NZ) | 프리덤 캠핑 | NB (`프리덤 캠핑`, `#푸카키호수 프리덤 캠핑`), mycampervan.co.kr. TNZ says `책임 있는 자유 캠핑` and APP `자유 캠핑`; we use 프리덤 캠핑 because it is the legal concept (Freedom Camping Act = `프리덤 캠핑법`) and what Korean travellers search. First mention per page: `프리덤 캠핑(캠핑장이 아닌 공공장소에서 하룻밤 머무는 것)`. |
| bush camping / dispersed camping | 노지 캠핑 | NB, KR-RV. The exact Korean word for camping without facilities outside a campground. |
| rest area (AU/NZ roadside) | 레스트 에어리어 | NB ("FRENCH REST AREA", "레스트 에어리어(무료)"). First mention: `레스트 에어리어(도로변 휴게 구역)`. Where English stresses "fatigue stop", `졸음쉼터` is the exact Korean equivalent and may be used as a comparison: `한국의 졸음쉼터 같은 곳이에요`. Never `휴게소` alone: in Korea that means a large motorway service area with food courts, which these are not. |
| showground | 쇼그라운드(지역 행사장) | Gloss once per page. |
| council reserve | 지자체 보호구역 / 카운슬 보호구역 | |
| state forest | 주립 숲(State Forest) | Gloss with the English once per page. |
| Crown land | 국유지(크라운 랜드) | |
| hut (NZ backcountry) | 산장 | APP Kiwi (`DOC 산장`), NB. "DOC hut" = `DOC 산장`. Great Walk hut = `그레이트 워크 산장`. Serviced/standard/basic hut = `서비스 산장 / 일반 산장 / 기본 산장`. |
| Great Walk(s) | 그레이트 워크 | TNZ (`그레이트 워크 하이킹 트랙`). |
| track / walk / tramp | 트랙 / 트레킹 / 하이킹 | `트램핑` only when the English quotes the NZ word. |
| BookEasy / BookIt | BookEasy / BookIt | Partner names, unchanged. |

### Water, waste, facilities

| English | Korean | Notes / evidence |
|---|---|---|
| dump station (NZ) | 덤프 스테이션 | NB uses it constantly ("덤프 스테이션(오수 버리는 곳)", "무료 덤프스테이션"), KR-RV too ("덤프스테이션은 캠핑카의 오수를 처리할 수 있는 장소이다"). It is what NZ signs say. **First mention on every page: `덤프 스테이션(오수 처리장)`.** Always the full compound; **bare `덤프` is banned** (it reads as 덤프트럭). TNZ's `오물처리장` is correct but rarer; `오수 처리장` is the plain gloss. |
| dump point (AU) | 덤프 포인트 | NB ("화장실 오수는 지정된 덤프 포인트에서만 비우세요"); AU signs say "Dump Point". First mention per page: `덤프 포인트(오수 처리장)`. |
| grey water / black water | 생활 오수(그레이워터) / 화장실 오수(블랙워터) | KR-RV uses 그레이탱크/블랙탱크. |
| cassette toilet | 카세트 화장실 | |
| self-contained (NZ) | 셀프 컨테인드 | NB (`셀프 컨테인드(Self-Contained) 인증`). First mention: `셀프 컨테인드(자체 화장실과 물탱크를 갖춘 인증) 차량`. Never APP's `독립 차량` or `독립형 숙소` (calques). |
| green warrant / blue warrant | 그린 워런트 / 블루 워런트 | Gloss: `셀프 컨테인드 인증서(그린 워런트)`. Facts come from the English; never add rules. |
| drinking water / potable water | 식수 | APP. |
| toilets / flush toilets / long-drop | 화장실 / 수세식 화장실 / 재래식 화장실 | |
| showers | 샤워실 | |
| rubbish | 쓰레기 | `쓰레기는 모두 가져가세요` (TNZ uses the same idea). |
| laundry | 세탁실 | |

### Parks, agencies, rules

| English | Korean | Notes / evidence |
|---|---|---|
| national park | 국립공원 | Everywhere. |
| DOC (Department of Conservation) | DOC | TNZ: `자연보호부(DoC)`. First mention per page: `뉴질랜드 자연보호부(DOC)`, then `DOC`. `DOC` is protected and must appear. |
| NPWS (NSW) | NPWS | First mention: `NSW 국립공원·야생동물청(NPWS)`. |
| Parks Victoria, Parks and Wildlife Tasmania, QPWS, Parks Australia, DBCA | keep English | First mention gloss: `빅토리아주 공원 관리청(Parks Victoria)`, `퀸즐랜드 공원·야생동물청(QPWS)`. |
| council | 지자체 | Natural Korean for "local council". First mention per page may be `지자체(카운슬)`; never `위원회` (APP calque). Bylaw = `조례`. |
| MBIE, NZTA Waka Kotahi, Immigration NZ | MBIE / NZTA Waka Kotahi / 뉴질랜드 이민성 | Gloss MBIE once: `뉴질랜드 기업혁신고용부(MBIE)`. `Waka Kotahi` is protected. |
| Home Affairs | 호주 내무부 | |
| Tourism Australia | 호주정부관광청 | TA's own Korean name. |
| Reserve Bank of Australia | 호주중앙은행(RBA) | |
| total fire ban | 전면 화기 금지(Total Fire Ban) | Gloss once per page; `화기 금지일` afterwards. |
| fire danger rating | 산불 위험 등급 | bushfire = 산불 (`부시파이어` only when quoting). |
| fine / infringement | 벌금 / 범칙금 | |
| permit | 허가증 / 퍼밋 | 허가증 by default. |
| park entry fee / park pass | 국립공원 입장료 / 국립공원 패스 | Named passes keep their names: `All Parks Pass(NSW 국립공원 연간 패스)`. |
| biosecurity / quarantine | 생물 보안 / 검역 | `과일 반입 금지 구역(fruit fly zone)`. |
| school holidays | 방학 기간 | Add `(현지 학교 방학)` where it matters. |
| long weekend / public holiday | 연휴 / 공휴일 | |
| working holiday | 워킹홀리데이 | One word. Colloquial `워홀`, `워홀러` are fine in body copy and in titles where they are the search term (`호주 워홀 차 구매`). Visa = `워킹홀리데이 비자(417/462)`. |

### App and product terms (match the app's Korean UI)

| English | Korean | Notes |
|---|---|---|
| AussieCamps / KiwiCamping | AussieCamps / KiwiCamping | Never translated, never transliterated. A particle attaches directly: `AussieCamps에서`, `KiwiCamping으로`. |
| the Pass | 패스 / AussieCamps 패스 / KiwiCamping 패스 | APP (`패스 받기`, `패스 필요`). |
| Explore | 탐색 | APP tab name. |
| Collections | 컬렉션 | APP. |
| trip / trip planner | 여행 / 여행 플래너 | APP (`여행 플래너`, `여행에 추가`). |
| stop (on a trip) | 경유지 | APP uses both 경유지 and 정류장; **정류장 is a bus stop, never use it**. |
| Liked / Starred / Visited / Want to Visit | 좋아요 / 별표 / 방문함 / 가고 싶은 곳 | APP labels are `좋아요를 누른`, `별표 표시됨`, `방문함`, `방문하고 싶다`. The first two and the last are clumsy, so we name the lists in natural Korean that a user still recognises in the app: `좋아요`, `별표`, `방문함`, `가고 싶은 곳`. When quoting as UI labels use single curly quotes: ‘좋아요’. |
| Look Around | 둘러보기 | Apple's own Korean name. |
| filters | 필터 | |
| widgets | 위젯 | |
| place details | 장소 정보 | |
| fee reports | 요금 제보 | |
| offline (place details work offline) | 오프라인에서도 장소 정보와 가이드를 볼 수 있어요 | Never `오프라인 지도` (see banned list). |
| iPhone / App Store | iPhone / App Store | Apple's Korean marketing keeps both in Latin. `App Store에서 다운로드`. |

## 3. Place names

Korean has established Hangul exonyms for Australian and New Zealand places. Use them; Latin-script place names mid-sentence look untranslated. Follow 국립국어원 standard spelling unless the official Korean tourism site uses another form.

**Australian states and territories** (first mention per page may add the abbreviation):
뉴사우스웨일스(NSW), 빅토리아(VIC), 퀸즐랜드(QLD), 사우스오스트레일리아(SA), 웨스턴오스트레일리아(WA), 태즈메이니아(TAS), 노던 테리토리(NT), 오스트레일리아 수도 준주(ACT).
- Add `주` when it reads naturally as a state: `퀸즐랜드주에서는`, `빅토리아주 규정`. Don't add it in titles or lists where the name already stands as a state.
- `서호주` and `남호주` are common colloquially (their tourism boards use them). Use them in body copy only where the English says "WA" or "SA" informally; use the full names in titles and rules pages.
- `Central Australia` = 호주 중부 (센트럴 오스트레일리아).

**Cities and landmarks (AU):** 시드니, 멜버른, 브리즈번, 퍼스, 애들레이드, 호바트, 다윈, 캔버라, 케언스, 골드코스트, 선샤인코스트, 앨리스스프링스, 바이런베이, 그레이트 오션 로드, 블루마운틴, 그레이트 배리어 리프, 아웃백, 킴벌리, 널라버 평원(Nullarbor Plain). Gloss non-obvious ones with the English in parentheses on first mention so travellers can match road signs and booking sites: `엑스머스(Exmouth)`.

**Aboriginal place names keep their exact spelling and diacritics in the Latin original**, given in parentheses on first mention: 울루루(Uluṟu), 카타추타(Kata Tjuṯa), 가리(K'gari, 옛 프레이저 아일랜드) as Korean news media write it. Where no Hangul form is established, keep the Latin name with its diacritics and add a Korean descriptor: `Ikara-Flinders Ranges 국립공원`, `Tjoritja(웨스트 맥도널 산맥)`. Never replace them with colonial names unless the English uses both.

**New Zealand:** 북섬, 남섬, 스튜어트섬, 오클랜드, 웰링턴, 크라이스트처치, 퀸스타운, 더니든, 넬슨, 픽턴, 와나카, 테아나우, 테카포 호수, 푸카키 호수, 밀포드 사운드, 피오르드랜드 국립공원, 아벨 태즈먼 국립공원, 통가리로 알파인 크로싱, 코로만델, 로토루아, 카이코우라, 그레이마우스, 프란츠 조셉 빙하.
- **Māori names keep their macrons in the Latin original**, given in parentheses on first mention per page: 타우포(Taupō), 황가레이(Whangārei), 아오라키(Aoraki)/마운트 쿡, 오타고(Otago). Write the Hangul from the Māori pronunciation the English implies; when unsure, keep the Latin with its macrons and add 지역/호수/산 as needed: `Ōhau 호수`.
- `Aotearoa`, `Aoraki` and `Waka Kotahi` are protected in the Kiwi catalog: keep the Latin form wherever the English has it, e.g. `아오라키(Aoraki)/마운트 쿡 국립공원`.
- 퀸스타운 (NIKL and TNZ), not 퀸즈타운, even though some blogs use the latter. Put 퀸즈타운 in `metaKeywords` only if a page targets it.

**Country names:** 호주 (never 오스트레일리아 for the country in running text; TA uses 호주), 뉴질랜드, 한국.

## 4. Conventions

- **Spacing (띄어쓰기).** Follow 한글 맞춤법. Dependent nouns are spaced: `할 수 있어요`, `갈 때`, `머문 적`, `3박 4일`, `10km 정도`. Korean counters attach to Arabic numerals: `3일`, `2박`, `5시간`, `20분`, `7곳`. Metric unit symbols keep the spacing the English uses (SI style): `100 km/h`, `300 km`, `20 L`; where the English writes them closed up (`10km`), keep that. Spaced loanword compounds follow the English word break: `홀리데이 파크`, `캐러밴 파크`, `덤프 스테이션`, `레스트 에어리어`, `그레이트 워크`. Single established words are joined: `로드트립`, `워킹홀리데이`, `캠핑카`, `국립공원`, `캠핑장`.
- **Particles after Latin brands and codes** attach directly and follow the final sound as read aloud: `AussieCamps를`, `KiwiCamping을`, `DOC에서`, `NPWS의`, `AUD로`, `iPhone에서`, `App Store에서`.
- **Numbers.** Keep every figure exactly as the English has it, with comma thousands separators: `74,000곳 이상`, `1,393곳`. Do not convert to 만 units (`7만 4천`) because parity checks compare digits. Decimals use a point: `2.08`.
- **Currency.** Prices stay in AUD/NZD and keep the English format: `$45`, `A$80`, `NZ$110`, `AUD`. Korean readers of AU/NZ blogs are used to `$45`. Word order changes around them: `1박에 $45`, `1인 기준 $15`. Never convert to won.
- **Ranges.** Keep the English dash type (an en dash `–` or a hyphen) between numbers: `$80–130`. Korean `~` is not used, because parity checks look for the same characters.
- **Dates.** `2026년 10월 19일`, `10월 1일부터 4월 30일까지`, `2025–27 회계연도`. Months as numbers + 월. Weekdays `월요일`. Seasons: remember AU/NZ seasons are reversed; where the English says "summer (December to February)" keep the months.
- **Time.** `오전 10시`, `오후 3시 30분`, or `10:00` in tables.
- **Units.** Metric as in the English: km, m, L, °C, km/h. `리터` only in prose where `L` looks odd: `물 20L` is fine.
- **Quotation marks.** Use “ ” for quoted speech and sign text, ‘ ’ for app labels and emphasised terms. Never 「」 or 『』.
- **Punctuation.** Korean sentences end with a full stop. Use `·` (가운뎃점) for short lists in titles and headings: `예약·요금·규칙`. Colons are fine in titles. Parentheses for glosses: `덤프 스테이션(오수 처리장)`. No space before `?` or `!`.
- **Titles, H1 and meta descriptions.** Lead with the term Korean travellers search: `호주 캠핑 규정`, `뉴질랜드 캠핑카 여행 비용`, `호주 차박`, `DOC 산장 예약`. Keep titles at or under about 32 Hangul characters plus the year where the English has one. Meta descriptions 70 to 90 Hangul characters, written as one or two 해요체 sentences, or a 명사형 summary when the English is a fragment.
- **What never changes:** AussieCamps, KiwiCamping, AussieCamping (legacy brand token where it appears in source), App Store, iPhone, BookEasy, BookIt, DOC, AUD, NZD, URLs, email addresses, markup (`<a data-guide="slug">…</a>`), `{placeholders}`, source/label titles of official documents (e.g. `Parks Victoria fees 2025–27` stays as the document title but may be glossed: `Parks Victoria 요금표 2025–27`), product UI names per the app table above.
- **Structure.** Same number of sections, paragraphs, tips, FAQ items, sources and price rows as the English. Within a paragraph, reorder, split or merge sentences freely.

## 5. Banned

- **`오프라인 지도` and any variant** (`오프라인 맵`, `인터넷 없이 지도 사용`). The apps are not offline maps. Write `장소 정보와 가이드는 오프라인에서도 볼 수 있어요` and, where the English says so, `지도·경로·날씨·사진은 데이터 연결이 필요해요`.
- **Bare `덤프`.** Only `덤프 스테이션` (NZ) or `덤프 포인트` (AU), glossed `(오수 처리장)` on first mention per page.
- **Em dashes** (—). Use a full stop, comma, colon or parentheses.
- **Unsupported superlatives:** `최고의`, `최적의`, `완벽한`, `필수`, `총정리`, `완벽 가이드`, `끝판왕`, `무조건`, `가장 ~한` unless the English makes the same claim.
- **Promises the product cannot keep:** no "free" for Pass data (`무료로 모든 캠핑장 확인` is wrong); only BookEasy/BookIt stays and tours are free.
- **Machine-translation markers in Korean** (bad → good):

| Bad (calque or stiff) | Good | Why |
|---|---|---|
| 당신은 패스를 가지고 있습니다 | 패스를 이용 중이에요 | No `당신`; `가지고 있다` is a calque of "have". |
| 여행을 계획하고 들러보세요 | 경유지를 하나씩 더하며 여행을 짜 보세요 | APP mistranslation of "Build a trip, stop by stop". |
| 밤마다 운전할 가치가 있는 경로입니다 | 하룻밤씩 끊어 달리기 좋은 루트 | "worth driving, night by night" translated word for word. |
| 독립 차량만 해당 | 셀프 컨테인드 인증 차량만 가능 | Calque of "self-contained". |
| 캐러밴 공원 | 캐러밴 파크 | "park" here is not a 공원. |
| 다음 정류장 | 다음 경유지 | 정류장 = bus stop. |
| ~하는 것을 잊지 마세요 | 꼭 ~하세요 / ~를 챙기세요 | Calque of "don't forget to". |
| ~하는 것이 중요합니다 / 중요해요 | 꼭 ~하세요, or just state the fact | Over-used translationese. |
| ~에 대해 확인하세요 | ~를 확인하세요 | `~에 대해` padding. |
| ~를 통해 예약할 수 있습니다 | ~에서 예약해요 | `~를 통해` overuse. |
| 만약 ~라면 | ~라면 / ~면 | `만약` is redundant in most cases. |
| 그것은 / 이것은 at sentence start | omit the subject | Korean drops it. |
| 캠핑장들, 규칙들, 차량들 | 캠핑장, 규칙, 차량 | Plural `들` only when needed for meaning. |
| ~되어지다, ~에 의해 관리됩니다 | ~가 관리해요 | Double passive / English passive. |
| ~할 수 있습니다 + ~할 수 있습니다 + ~할 수 있습니다 | vary: `~해도 돼요`, `~하면 돼요`, `~가 가능해요` | Repetition reads translated. |
| 이 가이드에서는 / 이 글에서는 | omit | House rule: never talk about the guide itself. |
| 또한, 그러나, 따라서 at the start of every other sentence | `또`, `하지만`, `그래서`, or no connector | Written-translation connectors. |
| 매우, 굉장히, 정말 stacked | one or none | |

## 6. Before and after (existing Korean copy in our apps)

Korean is a new locale on both sites, so these come from the apps' current Korean UI, which was machine translated. They show the gap between literal and natural.

1. **"Routes worth driving, night by night."**
   - Before: `밤마다 운전할 가치가 있는 경로입니다.`
   - After: `하룻밤씩 끊어 달리기 좋은 로드트립 루트.`
   - The English means "routes planned one overnight stop at a time", not driving at night. Korean headings drop the copula.

2. **"Self-contained vehicles only"** (freedom-camping notice)
   - Before: `독립 차량만 해당`
   - After: `셀프 컨테인드 인증 차량만 가능`
   - `독립 차량` means nothing to a Korean reader; rental companies, signs and blogs all say 셀프 컨테인드.

3. **"Start a trip and every place you save can go on it."**
   - Before: `여행을 시작하면 저장한 모든 장소를 여행할 수 있습니다.`
   - After: `여행을 하나 만들어 두면 저장한 장소를 바로 경유지로 넣을 수 있어요.`
   - The literal version says "you can travel every saved place". The point is that saved places can be added to the trip. 해요체, concrete verb.

## 7. Engine setup and workflow notes

- Both configs carry a Korean-only catalog (`aussiecamps-website-ko`, `kiwicamping-website-ko`) with the same `en.json` source. It protects only brand and currency tokens (AU: AussieCamps, AussieCamping, AUD; NZ: KiwiCamping, NZD, DOC, Aotearoa, Aoraki, Waka Kotahi). The shared catalog protects English state and island names ("Queensland", "North Island"), which would force Latin script into Korean sentences; this split lets Korean use 퀸즐랜드 and 북섬 while still checking brands, placeholders and markup. The same approach is used by the zh-hans thread.
- The homepage testimonials (`ui.review*`, `ui.reviewsEyebrow`, `ui.reviewsTitle`) are listed in `untranslatedKeys` for these catalogs: they are never translated into Korean.
- Values files name the catalog: `{ "catalog": "aussiecamps-website-ko", "locale": "ko", "values": { ... } }`.
