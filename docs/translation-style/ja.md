# Japanese (ja) style guide for AussieCamps and KiwiCamping

This file is identical in `aussiecamps-web` and `kiwicamping-web`. Every Japanese unit on both sites follows it. The engine catalogs are `aussiecamps-website-ja` and `kiwicamping-website-ja` in `docs/translation.config.json`.

## 1. Who we write for

The reader is a Japanese traveller planning a self-drive trip in Australia or New Zealand:
- a ワーホリ (working holiday) maker in their 20s or early 30s who has bought or rented a car or van;
- a couple or family renting a キャンピングカー for one to four weeks;
- a solo traveller who wants to sleep in the car (車中泊) to keep costs down.

They read on an iPhone, often before the trip and sometimes on the road. They know Japanese camping (オートキャンプ場, RVパーク, 道の駅) but not Australian or New Zealand rules. They need straight, practical answers and the English words they will meet on signs and booking sites.

## 2. Voice

Write like an experienced Japanese travel writer who has driven these roads, writing for 地球の歩き方 or a good ワーホリ media site. Not like a manual, not like a translation.

- **です・ます throughout** (configured register `formal`). No だ・である in body copy. No keigo beyond plain polite: no させていただきます, ございます or お客様.
- **Calm, direct and practical.** Say what to do and why, then stop. Specific beats general. Advice ends in 〜しましょう, 〜しておくと安心です, 〜のがおすすめです, or 〜が必要です; vary them and do not end every sentence the same way.
- **Do not address the reader with a pronoun.** Never あなた or あなたの; Japanese drops the subject. Use 自分の車, 旅の予定, or nothing.
- **Sentences of roughly 30 to 60 characters.** Split an English sentence with three clauses into two Japanese sentences. Merge two short English sentences when Japanese reads better as one. Reordering inside a paragraph is allowed; the paragraph count is not.
- **Lead with the point.** Japanese guide writing puts the conclusion first: 「無料キャンプ場でも、実際にはお金がかかります。」 then the reasons.
- **Warm, not cute.** No ！ in body copy (one is fine in a hero line), no emoji, no ですよね！ chattiness, no 〜ちゃいましょう.
- **Honest about uncertainty.** Keep every hedge in the English (may, usually, often): 〜場合があります, 〜ことが多いです, 一般的に.
- **No meta talk.** Never このガイドでは, この記事では, 本ページ or 以下で説明します, even where the English has it. Say the fact instead.

### Rhythm by element

| Element | How to write it |
|---|---|
| `title` (guide H1 and `<title>`; the site appends the brand) | Lead with the term Japanese travellers search: 地名 + topic. Aim for 30 characters or fewer, 35 at most. Noun phrase or question, no 。 at the end. Example: 「ニューサウスウェールズ州のキャンプのルール」. |
| `description` (meta) | One or two です・ます sentences, 60 to 110 characters. Front-load the search term. |
| `region` | The place in katakana with its suffix: ニューサウスウェールズ州, オーストラリア, 南島. |
| `imageAlt` | A plain description of the photo, ending in a noun (体言止め), no 。. |
| `intro` | Two to three sentences that give the answer up front. |
| `heading` | Short noun phrase or question, no 。. |
| `body` paragraphs | です・ます prose following the rhythm above. |
| `tips` | Short checklist items in 体言止め or 〜する form, with no 。, about 20 characters or fewer. Examples: 「到着したら標識を確認」, 「アクセス道路をふさがない」. |
| `faq` question | A natural question a Japanese traveller would type: 「〜できますか？」, 「〜はいくら？」. |
| `faq` answer | Answer first (はい、 / いいえ、 / 目安は〜です), then the detail. |
| `sources[].label` | The official page name. Translate the descriptive part and keep the agency or brand name as written. Example: 「Parks Victoria 料金表 2025〜27年」. |
| `priceTable.note`, row `label`, row `unit` | Short and factual. Units as 1人1泊, 1サイト1泊, 1リットル. |
| UI buttons and nav | Short noun or verb stems: ダウンロード, ガイドを読む, 使い方を見る. |
| UI eyebrows and taglines | Rewrite as a Japanese catch line. Never a literal calque of an English slogan (see §8). |

## 3. Conventions

### Punctuation and spacing
- Full-width 、。「」『』（）！？： inside Japanese text. Half-width only inside Latin tokens and numbers: `AUD/L`, `L/100km`, `A$30`, URLs.
- No spaces between Japanese characters, or between Japanese and Latin words or numbers: 「AussieCampsで」, 「iPhone向け」, 「74,000か所」. Keep the spaces inside an English proper name: 「Tidal River Campground」.
- Quotes and in-app labels use 「」. Nested quotes use 『』. Never "" or “”.
- Ranges use 〜: 「2〜3泊」, 「2025〜27年度」.
- Lists inside a sentence use 、 or ・ for short noun lists: 「トイレ・シャワー・電源」.
- No em dash (U+2014) and no horizontal bar (U+2015). Use 、, （）, ： or two sentences instead.
- Middle dot ・ between the words of a multi-word foreign name with no established solid form: グレート・オーシャン・ロード, ミルフォード・サウンド. Established solid forms keep theirs: ニューサウスウェールズ州, ゴールドコースト, クイーンズタウン, ニュージーランド.

### Numbers, money, dates and units
- Arabic numerals with comma thousands separators, exactly as in the English: 74,000, 6,500. Do not convert to 万. The parity check compares numbers.
- "74,000+" becomes 「74,000か所以上」 in prose. A stat tile keeps `74,000+` as written.
- Australian money in running text is 「30豪ドル」. New Zealand money is 「30NZドル」. The amount comes first and nothing goes between the number and the unit. If the English shows `A$30` or `NZ$30` inside a table or label, keep that token. Currency codes in labels stay: 「燃料価格（AUD/L）」. Do not add yen conversions, because the site's currency table does that.
- Dates are 2026年10月19日, months are 10月, and financial years are 2025〜26年度. Times are 午前10時 and 午後5時.
- Distances are 60km, 100km/h and 3,000km, with no space. Volumes are 11リットル in prose and 11L in labels. Temperatures are 15℃. Fuel use is L/100km.
- Ordinals and counts take Japanese counters: 3泊, 2人, 7か所, 2週間, 1区間.

### Place names
- Use the established katakana exonym. Section 6 lists the ones we use.
- For a lesser-known place, write katakana and add the English spelling in （） on its first mention in a guide, so readers can match signs and maps. Keep macrons and exact spellings inside the parentheses: 「タウポ（Taupō）」, 「ウルル（Uluṟu）」, 「K'gari（ガリ、旧フレーザー島）」.
- Māori and Aboriginal names in katakana carry no macrons, because katakana marks the long vowels. Never write a Latin name without its macron.
- A name the app shows in English (campgrounds, holiday parks, businesses) stays in English: 「Tidal River Campground」, 「BIG4」, 「Top 10」. National parks take katakana + 国立公園, as Tourism Australia does: カカドゥ国立公園, with the English in （） on first mention when it is not famous.

### Agencies and official names
Keep the English name, or its usual abbreviation, and add a short Japanese gloss in （） on the first mention in each guide. After that, use the English name or abbreviation alone. Examples:
- AU: 「NSW National Parks（ニューサウスウェールズ州の国立公園局）」, 「Parks Victoria（ビクトリア州の公園管理局）」, 「QPWS（クイーンズランド州公園野生生物局）」, 「BOM（オーストラリア気象局）」, 「Home Affairs（オーストラリア内務省）」.
- NZ: 「環境保全省（DOC）」 is the one reversed form, following Tourism New Zealand Japan; after that write DOC. Also 「NZ交通局（Waka Kotahi）」 or 「NZTA（NZ交通局）」, 「MetService（ニュージーランド気象局）」, 「第一次産業省（MPI）」, 「ニュージーランド移民局（Immigration New Zealand）」, 「MBIE（ビジネス・イノベーション・雇用省）」.
- Two bodies take their Japanese names: Tourism Australia is オーストラリア政府観光局 and the Reserve Bank of Australia is オーストラリア準備銀行（RBA）.

### What never changes
- **AussieCamps** and **KiwiCamping**: Latin script, never katakana, never split. 「AussieCampsで」 is correct.
- App Store, iPhone, iOS, iCloud, Apple, MapKit, URLs, `{placeholders}` and every markup tag (`<a data-guide="slug">…</a>`, `<strong>`), all exactly as given. Translate only the visible text between the tags.
- Every number, price, date, distance, link and source in the English.
- The count of sections, paragraphs, tips, FAQ items, sources and price rows.
- Homepage testimonials (`ui.review*`, `reviewsEyebrow`, `reviewsTitle`): never translated into Japanese. They are excluded from the ja catalogs.

## 4. Glossary

Sources: TA = Tourism Australia Japan (australia.com/ja-jp); VNSW = Visit NSW Japanese; TNZ = Tourism New Zealand Japan (newzealand.com/jp); 歩き方 = 地球の歩き方 (arukikata.co.jp); blogs = native Japanese ワーホリ, rental and camping blogs, URLs in §9; app = the AussieCamps and KiwiCamping iOS ja strings; ASO = App Store ja keyword sets. Search Console had no Japanese queries for either site on 2026-10-19, so search intent below comes from the ASO keywords and native content.

### Vehicles and ways of travelling

| English | Japanese | Notes and evidence |
|---|---|---|
| campervan | キャンピングカー | The default in TA, TNZ, rental pages and ASO. Use キャンパーバン only where the English contrasts a small van with a motorhome. |
| motorhome | キャンピングカー; モーターホーム when the English contrasts it with a campervan | TA uses モーターホーム for large truck-based units. |
| caravan (towed) | キャンピングトレーラー | The standard Japanese word. A bare キャラバン reads as the Nissan van. Use キャラバン only inside キャラバンパーク. |
| towing a caravan | キャンピングトレーラーの牽引 | |
| big rig | 大型車, 大型のキャンピングカー | |
| van | バン, 車 | |
| sleeping in your car | 車中泊 | Core Japanese search term (ASO, blogs). |
| road trip | ロードトリップ, ドライブ旅行 | ロードトリップ is used by 歩き方, TA and blogs. ドライブ旅行 is fine as a variant in meta. |
| the big lap | オーストラリア一周 | |
| working holiday | ワーホリ (casual), ワーキングホリデー (visa context) | ワーキングホリデービザ. |
| backpacker | バックパッカー | |
| grey nomads | グレーノマド（リタイア後に長期旅行をするシニア層） | Gloss on first use. |
| 4WD / 2WD | 4WD車 / 2WD車 | TA uses 4WD. 四駆 is acceptable in casual lines. |

### Places to stay

| English | Japanese | Notes and evidence |
|---|---|---|
| campground, campsite (the facility) | キャンプ場 | TA, 歩き方, app. |
| campsite, pitch (the plot) | サイト, 区画 | 「1サイト1泊」. |
| holiday park | ホリデーパーク | TA, TNZ, app. |
| caravan park | キャラバンパーク | 歩き方 and app. 歩き方 notes it is also called ホリデーパーク. |
| powered site | 電源付きサイト（パワーサイト） | パワーサイト is used by 歩き方 and NZ rental pages. Give the gloss on first use. |
| unpowered site | 電源なしサイト | |
| free camping (AU), free camp | 無料キャンプ, 無料キャンプ場 | 歩き方 and ausbiznet. Never フリーキャンプ. |
| freedom camping (NZ) | フリーダムキャンプ | Native NZ blogs. TNZ writes フリーダムキャンピング, which is acceptable in a quote. Explain it once: 公共の土地で一晩過ごす「フリーダムキャンプ」. Never 自由キャンプ or 無料キャンプ for the NZ legal concept. |
| rest area | 休憩所 | VNSW 「休憩所マップ」. Use 道路沿いの休憩所 on first mention. Never パーキングエリア (in Japan that means an expressway stop). |
| showground | ショーグラウンド（地域の催事場） | Gloss on first use. |
| day-use area | デイユースエリア（日帰り利用エリア） | |
| roofed accommodation | 屋根のある宿泊施設, キャビンなど | |
| farm stay, station stay | ファームステイ, 牧場ステイ | |
| backpacker hostel | バックパッカーズホステル | |
| hut (NZ backcountry, DOC) | 山小屋 | The app label. TNZ and blogs also write ハット: use 「山小屋（ハット）」 on first mention, then 山小屋. |
| Great Walks | グレートウォーク | TNZ, Air NZ. No middle dot. |
| tramping | トランピング（ニュージーランドでいう山歩き） | Gloss once. |
| self-contained (vehicle, NZ) | セルフコンテインド | Native NZ blogs. Explain it once: 「トイレと給排水タンクを備えた、セルフコンテインド認証の車両」. Never 自己完結型 or 自給式. |
| certified self-contained (CSC) | セルフコンテインド認証 | The warrant sticker is グリーンステッカー（緑のステッカー）; the old one is 青のステッカー. |
| self-contained stays (AU app category: apartments) | 一棟貸し・アパートタイプの宿 | A different meaning from the NZ vehicle term. |

### Services, waste and water

| English | Japanese | Notes and evidence |
|---|---|---|
| dump point (AU), dump station (NZ) | 汚水廃棄場 | TNZ: 「汚水廃棄場に持ち込んで処理しなければなりません」. Gloss with the sign wording on first mention: 「汚水廃棄場（Dump Point）」 in AU and 「汚水廃棄場（Dump Station）」 in NZ. **Never ダンプ, ダンプステーション or ダンプポイント**, owner rule; ダンプ reads as a dump truck. Never 汚水処理場, which reads as a sewage works. The AussieCamps app category is 汚水処理ポイント; in an app how-to, name it 「汚水処理ポイント」. |
| cassette toilet | カセットトイレ | |
| toilet waste (black water) | トイレの汚物 | |
| grey water | 生活排水（グレーウォーター） | Gloss on first use. Then 生活排水. |
| fresh water | 清水, 飲料水 | Tank: 清水タンク. |
| potable water, water filling point | 飲料水, 給水ポイント | Use the app label 給水ポイント for the category. |
| public toilets | 公衆トイレ | |
| laundromat | コインランドリー | |
| information centre | 観光案内所; NZ: 「i-SITE（観光案内所）」 | |
| long-vehicle parking | 大型車用の駐車スペース | |

### Rules, land and safety

| English | Japanese | Notes and evidence |
|---|---|---|
| national park | 国立公園 | TA. |
| state forest | 州有林 | |
| council | 自治体; 「カウンシル（地方自治体）」 once when signs matter | |
| land manager | 土地の管理者 | |
| bylaw | 条例 | |
| permit | 許可証 | |
| booking (noun), book | 予約, 予約する | |
| fine, infringement notice | 罰金, 違反通知 | |
| total fire ban | 「全面火気禁止（Total Fire Ban）」 on first mention, then 全面火気禁止 | Signs and radio say Total Fire Ban. |
| fire danger rating | 「火災危険度（Fire Danger Rating）」 | Keep the English level names in （）. |
| bushfire | 山火事 | VNSW. 森林火災 is fine in formal lines. |
| campfire, fire pit | 焚き火, かまど, 焚き火台 | |
| park alerts | 公園の警報・お知らせ | |
| biosecurity, quarantine | 検疫 | AU: 州境の検疫, フルーツフライ（ミバエ）. NZ: 入国時の検疫と申告. |
| kauri dieback | カウリ・ダイバック病（カウリの立ち枯れ病） | No settled Japanese term; gloss once. |
| sandflies | サンドフライ（刺す小さな虫） | |
| Country (Aboriginal sense) | 先住民にとっての土地（Country） | |
| whenua (Māori) | この土地 | Japanese writers do not import te reo words outside names. |
| leave no trace | 来たときよりも美しく | The established Japanese outdoor phrase. Use it when the English is a slogan. |

### Driving

| English | Japanese | Notes and evidence |
|---|---|---|
| overseas / international driving licence | 国際運転免許証 | TA, NZ blogs. Use 国外運転免許証 only when naming the legal document issued in Japan. |
| translation of licence | 免許証の英語翻訳 | NZ: 「公認の英語翻訳」. |
| left-side driving | 左側通行 | |
| road train | ロードトレイン | |
| unsealed / gravel road | 未舗装路, 砂利道 | |
| toll road | 有料道路 | e-tag is 「電子タグ（e-TAG）」. |
| fuel, petrol, diesel | 燃料, ガソリン, 軽油（ディーゼル） | |
| servo, petrol station | ガソリンスタンド | |
| fatigue, fatigue stop | 疲労, 居眠り運転, 休憩 | Driver Reviver is 「Driver Reviver（ドライバー向けの無料休憩所）」. |
| wildlife collision | 野生動物との衝突 | |
| one-lane bridge (NZ) | 一車線の橋 | TNZ/skygate. Give Way is 「Give Way（譲れ）」. |
| speed limit | 制限速度 | |
| WoF (NZ) | 「WoF（Warrant of Fitness、日本の車検にあたる定期点検）」 | Gloss once. |
| rego | 車両登録（rego） | |
| RUC (NZ) | 「道路使用料（RUC）」 | Paid by diesel vehicles. |
| Cook Strait ferry | クック海峡フェリー | インターアイランダー（Interislander）, ブルーブリッジ（Bluebridge） |

### Money and daily costs

| English | Japanese |
|---|---|
| cost of living, prices | 物価 |
| budget | 予算 |
| groceries | 食料品, スーパーでの買い物 |
| eating out | 外食 |
| Woolworths, Coles, Aldi, IGA | ウールワース（Woolworths）, コールズ（Coles）, アルディ（Aldi）, IGA. Gloss on first mention. |
| Countdown, New World, Pak'nSave (NZ) | Woolworths（旧Countdown）, New World, PAK'nSAVE | Keep in Latin script, as on signage. |
| flat white | フラットホワイト |
| per person per night | 1人1泊 |
| per site | 1サイトあたり |
| school holidays | スクールホリデー（学校の休暇期間） |
| peak / shoulder season | 繁忙期, ハイシーズン / ショルダーシーズン（繁忙期の前後） |

### App and product UI (match the iOS app where its label is sound)

| English | Japanese | Note |
|---|---|---|
| place (app sense) | スポット | Use 場所 in prose where more natural. |
| place screen, place details | スポットの詳細画面, 詳細情報 | |
| Explore | 探す画面, 一覧 | The app label 探検する is a mistranslation, so describe the screen instead. |
| filters | フィルター | app |
| collections, smart collections | コレクション, スマートコレクション | app |
| Liked, Starred, Want to visit, Pins | 「気に入った」, 「スター付き」, 「訪問したい」, 「ピン」 | app labels |
| Visited, All saved | 「訪問済み」, 「保存済みすべて」 | The app shows 訪問しました and すべて保存されました, which are mistranslations; reported to the owner. |
| trip, trip planner | 旅行, 旅行プランナー | app |
| itinerary | 旅程 | |
| stop | 立ち寄り先 | |
| leg | 区間 | |
| to-dos, packing list | やることリスト, 持ち物リスト | |
| Pass, premium | パス | Explain it once as 有料の「パス」. Never imply that Pass data is free. |
| Street View | ストリートビュー | Built on Apple's Look Around: 「AppleのLook Aroundを使ったストリートビュー」. Keep Look Around in English, as Apple Japan does. |
| satellite, standard map | 航空写真, 標準の地図 | |
| widgets, Home Screen | ウィジェット, ホーム画面 | Apple JP |
| Calendar | 「カレンダー」 | iOS app name |
| Settings | 設定 | |
| download | ダウンロード | |
| no signal, no reception | 圏外, 電波が届かない | |
| bundled offline | アプリ内に収録, 圏外でも見られる | Never オフライン地図 (see §8). |

## 5. What is and isn't offline

The apps are not offline maps. Place details and guides are bundled and open without signal. Map tiles, routing, weather, Street View and photos need a connection. Write 「スポットの詳細は圏外でも見られます」 or 「アプリ内に収録」. Never write オフライン地図, オフラインマップ, オフラインで使える地図 or 地図もオフラインで.

## 6. Exonyms we use

**Australia**
- States: ニューサウスウェールズ州, ビクトリア州, クイーンズランド州, 南オーストラリア州, 西オーストラリア州, タスマニア州.
- Territories: ノーザンテリトリー, オーストラリア首都特別地域（ACT）.
- Cities and towns: シドニー, メルボルン, ブリスベン, パース, アデレード, ダーウィン, ホバート, キャンベラ, ケアンズ, ゴールドコースト, サンシャインコースト, バイロンベイ, ヌーサ, タウンズビル, ブルーム, アリススプリングス, カナナラ, エクスマス.
- Landscapes and routes: グレート・オーシャン・ロード, ナラボー平原, レッドセンター, アウトバック, トップエンド, キンバリー, ギブ・リバー・ロード, グレートバリアリーフ, ブルー・マウンテンズ.
- Aboriginal names: ウルル（Uluṟu）, カタ・ジュタ, カカドゥ国立公園, K'gari（ガリ、旧フレーザー島）, イカラ（Ikara）, チョリチャ（Tjoritja）, ナマジ国立公園（Namadgi）.

**New Zealand**
- Islands: 北島, 南島, スチュワート島, チャタム諸島.
- Cities and towns: オークランド, ウェリントン, クライストチャーチ, クイーンズタウン, ロトルア, タウポ（Taupō）, ネルソン, ピクトン, ダニーデン, ワナカ（Wānaka）, テ・アナウ, インバーカーギル, ブラフ, グレイマウス, ホキティカ, カイコウラ（Kaikōura）, ファンガレイ（Whangārei）, テカポ（Takapō / Tekapo）, オアマル（Ōamaru）.
- Landscapes and routes: アオラキ／マウント・クック, ミルフォード・サウンド, フィヨルドランド, エイベル・タスマン, トンガリロ, コロマンデル, ベイ・オブ・アイランズ, ノースランド, サウスランド, マールボロ, ゴールデン・ベイ, フランツ・ジョセフ, ハースト, アーサーズ・パス, ハウラキ湾, ワイヘキ島, グレート・バリア島, クック海峡.

## 7. Before and after

Japanese is new to both sites, so there is no older site translation to correct. These examples are taken from the iOS app's current Japanese, which is machine translated, and from literal drafts of the site's own copy.

| English | Literal or machine (bad) | Natural (good) | Why |
|---|---|---|---|
| Filter by state | 状態によるフィルター | 州で絞り込む | "State" means 州 here. 絞り込む is the verb Japanese apps use for filtering. |
| Start a trip and every place you save can go on it. | 旅行を開始すると、保存したすべての場所に旅行に行くことができます。 | 旅行を作っておけば、保存したスポットをそのまま立ち寄り先に追加できます。 | The literal version says the reader will travel to every saved place. |
| Routes worth driving, night by night. | 夜ごとにドライブする価値のあるルート。 | 1泊ずつたどる、走りがいのあるルート | 走りがいのある is how Japanese drivers praise a road. Taglines drop the 。. |
| Signs beat screens | 標識は画面に勝る | 画面より現地の標識を優先 | A calqued slogan sounds odd. State the rule. |
| Self-contained vehicles only | 自給式車両のみ | セルフコンテインド認証車のみ | Use the term NZ-bound Japanese travellers know. |
| Free is only free where it is legal. | 無料は、それが合法である場所でのみ無料です。 | 無料で泊まれるのは、キャンプが認められた場所だけです。 | Rewrite the wordplay as plain meaning. |

## 8. Banned

| Banned | Use instead | Why |
|---|---|---|
| ダンプ, ダンプステーション, ダンプポイント | 汚水廃棄場 | Owner rule; reads as a dump truck. |
| オフライン地図, オフラインマップ, 地図がオフラインで使える | スポットの詳細は圏外でも見られます | False claim. |
| em dash (U+2014), horizontal bar (U+2015) | 、 （） ： or two sentences | House rule; the audit rejects em dashes. |
| あなた, あなたの | omit the subject | Pronoun calque. |
| 〜することができます | 〜できます | Wordy calque of "can". |
| 〜を行う, 〜を実施する (for ordinary actions) | the verb itself: 予約する, 確認する | Bureaucratic. |
| 〜において, 〜に関して, 〜に対して (stacked) | で, について, or restructure | Translationese. |
| それは〜です, これは〜を意味します at sentence start | つまり, そのため, or merge the sentences | Calque of "It is" / "This means". |
| 〜することが重要です in every paragraph | 〜しておきましょう, 〜が欠かせません, 〜が大切です (vary) | Repetition from "It is important to". |
| 〜されます (passive for agentless English passives) | an active verb, or 〜になります | Calque of the English passive. |
| 彼ら, 彼女ら | 地元の人, スタッフ, or omit | Pronoun calque. |
| 自己完結型, 自給式車両 | セルフコンテインド | Not what travellers use. |
| 自由キャンプ, 無料キャンプ (for NZ freedom camping) | フリーダムキャンプ | Different concept. |
| パーキングエリア (for a rest area) | 休憩所 | In Japan that means an expressway stop. |
| キャラバン (alone, for a towed caravan) | キャンピングトレーラー | Reads as a Nissan van. |
| 究極の, 完全ガイド, 必見, 最高の, 絶対 (absent from the English) | plain statements | No unsupported superlatives. "The best camping app" stays 「キャンプアプリの決定版」 only where the English says "best". |
| Half-width ,.!?:; next to Japanese | 、。！？： | Mixed punctuation looks machine-made. |
| Spaces between Japanese words | no space | |

## 9. Evidence

- Tourism Australia Japan, car and campervan hire: https://www.australia.com/ja-jp/facts-and-planning/getting-around/how-to-hire-a-car-or-campervan.html (キャンピングカー, モーターホーム, キャラバン（トレーラーハウス）パーク, ホリデーパーク, 電源あり).
- Tourism Australia Japan, national parks: https://www.australia.com/ja-jp/things-to-do/nature-and-national-parks/national-parks-australia.html (state names, ウルル, カカドゥ国立公園, ガリ(K'gari)).
- Tourism Australia Japan, driving: https://www.australia.com/ja-jp/facts-and-planning/getting-around/driving-in-australia.html (左側通行, 国際運転免許証（IDP）, 4WD, 有料道路).
- Visit NSW Japanese, road-trip essentials: https://www.visitnsw.com/jp/things-to-do/drives-and-road-trips/road-trip-essentials (休憩所, 山火事, 燃料価格).
- 地球の歩き方 特派員: https://www.arukikata.co.jp/tokuhain/247231/ (キャラバンパーク, パワーサイト, ホリデーパーク).
- ausbiznet column: https://www.ausbiznet.com/aus/column/19346 (キャラバンパーク, 無料のキャンプサイト).
- Tourism New Zealand Japan, freedom camping and camping: https://www.newzealand.com/jp/feature/free-camping/ and https://www.newzealand.com/jp/camping/ (フリーダムキャンピング, 環境保全省（DOC）, 汚水廃棄場).
- globalnetnz campervan facilities: https://www.globalnetnz.com/recommend/camping-car/facility.html (ホリデーパーク, パワーサイト).
- koppic NZ campervan guide: https://koppic.com/nz-camping-car/ (フリーダムキャンプ, セルフコンテインド認証（グリーンステッカー）).
- BE-PAL: https://www.bepal.net/archives/240629 (ハット, トランピング).
- Apple Japan Maps: https://www.apple.com/jp/maps/ (Look Around kept in English).
- App Store ja keyword sets, 2026-10-14 listing check: キャンピングカー, ロードトリップ, 国立公園, ホリデーパーク, オートキャンプ, RVパーク (AU); キャンプ場, キャンピングカー, DOC, 山小屋 (NZ). The ASO subtitles contain オフライン地図 and the NZ keywords contain ダンプ and 自由キャンプ. Those are listing errors and must not be copied.
- Google Search Console, both sites, 3 months to 2026-10-19: no Japanese-language queries yet. Japan sent 66 impressions to aussiecamps.app.
