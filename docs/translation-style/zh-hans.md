# Simplified Chinese (zh-Hans) style guide

Shared by AussieCamps (aussiecamps.app) and KiwiCamping (campingapp.nz). The file is identical in
both repos. Every zh-Hans unit, whoever writes it, follows this contract. Engine locale id:
`zh-Hans`; site file: `lib/translations/zh-hans.json`.

## 1. Who we write for and how

**Reader.** Mainland Chinese travellers planning a self-drive or campervan trip in Australia or New
Zealand, Chinese students and residents already living there (weekend campers, working-holiday
makers on 打工度假), and Chinese readers in Singapore and Malaysia. Most of them read 马蜂窝, 穷游
and 小红书-style trip guides (攻略) before they go, and they search Baidu and Google in Chinese.

**Voice.** A seasoned Chinese self-driver who has done the big lap and several South Island loops
and now writes practical 攻略: 实在、直接、靠谱. Calm and specific, never breathless.

- **Address the reader as 你**, everywhere, including support, privacy and terms. 您 reads like a
  bank or a call centre; mainland travel content and modern app copy (WeChat's own privacy guide
  included) use 你. Do not drop into 您 halfway through a page. Engine register setting:
  `informal` (the engine does not check zh register; this guide does).
- **Short clauses, topic first.** Chinese prose runs on short comma-joined clauses. Split long
  English sentences. Put time, place and condition before the verb: 如果……就……, 到了营地之后……,
  旺季（12月至2月）……. Never mirror English clause order.
- **Verbs, not nouns.** English stacks nouns ("route, distance, dates, notes and to-dos"); Chinese
  carries the same list fine, but rewrite noun-heavy abstractions as actions: "Check the latest
  closure updates" → 出发前再查一下最新的封闭通知.
- **Drop what Chinese leaves implicit.** Most English "your", "it", "the", "a", "there is" vanish.
  你的房车 → 房车; 它会显示…… → 会显示……; 一个营地 → 营地.
- **Colloquial connectors in moderation:** 其实、一般、基本上、记得、别、千万别、说白了. One or two
  per paragraph at most. No internet slang (绝绝子、yyds、天花板、宝藏营地), no emoji, no 小编,
  no strings of exclamation marks. The register is 马蜂窝 long-form 攻略, not a 小红书 caption.
- **Safety tone:** firm and plain (务必、一定要、别冒险), never frightening.
- **Honesty:** never add a claim, superlative or count the English does not make.

**Lengths.**
- Page titles and H1s: lead with the term people search, about 30 characters or fewer.
- Meta descriptions: about 60 to 80 characters.
- Section headings: noun phrase or short statement, about 16 characters or fewer, no full stop.
- Tips (要点 bullets): short phrase, about 14 characters or fewer, no full stop.
- Buttons and nav: 2 to 6 characters.

## 2. Search terms that lead titles and H1s

Evidence: App Store keyword sets (AussieCamps zh-Hans: 露营地, 营地, 露营车, 自驾游, 自由行, 行程规划,
国家公园, 攻略, 澳洲自驾游, 假日公园, 房车营地, 休息区, 排污站; KiwiCamping zh-Hans: 露营地, 路线规划,
房车, 自由露营, DOC, 小屋, 旅游指南, 排污站, 公共厕所), mainland guide titles (携程 "新西兰17天环岛游
房车自驾推荐", 知乎 "澳大利亚房车营地全攻略", 知乎 "新西兰自驾全攻略", motorhomerepublic 中文
"澳大利亚免费营地指南"), Tourism NSW Chinese pages (房车和露营, 假日公园, 免费露营, 四驱车, 豪华露营)
and the only Chinese GSC queries so far (Kiwi: 紐西蘭沙蠅季節, i.e. people search 沙蝇 + 季节).

Lead with: 澳洲自驾 / 新西兰自驾, 房车, 露营, 营地 / 露营地, 免费露营 (AU), 自由露营 (NZ), 房车营地,
假日公园, DOC 营地, 小屋, 排污站, 打工度假, 攻略 (sparingly, for guide-type pages), 2026 (dated
cost pages keep the year in the title).

## 3. Glossary

Use these renderings consistently. "First mention" means the first time in a page (article or
static page), not in every paragraph.

### Places and exonyms

| English | zh-Hans | Notes |
|---|---|---|
| Australia | 澳洲 (default); 澳大利亚 in formal names | 澳洲 is what mainland travellers say and search (澳洲自驾游, 澳洲打工度假, 澳洲露营; App Store name 澳洲露营地图). Use 澳大利亚 inside official names (澳大利亚储备银行, 澳大利亚内政部, 澳大利亚旅游局) and in the privacy and terms pages. |
| New Zealand | 新西兰 | Never 纽西兰 (HK/TW). |
| Aotearoa | Aotearoa | Keep (protected); gloss as 新西兰的毛利语名称 if the sentence needs it. |
| New South Wales / NSW | 新南威尔士州; 新州 after first mention | 新州 is universal shorthand in Chinese AU media. |
| Victoria / VIC | 维多利亚州; 维州 | |
| Queensland / QLD | 昆士兰州; 昆州 | |
| South Australia / SA | 南澳大利亚州; 南澳 | |
| Western Australia / WA | 西澳大利亚州; 西澳 | |
| Tasmania / TAS | 塔斯马尼亚州; 塔州 (island: 塔斯马尼亚岛) | |
| Northern Territory / NT | 北领地 | |
| Australian Capital Territory / ACT | 澳大利亚首都领地; 首都领地 | |
| Central Australia / the Red Centre | 澳洲中部 / 红土中心 | |
| North Island / South Island / Stewart Island | 北岛 / 南岛 / 斯图尔特岛 | 新西兰南岛自驾 is the core NZ query. |
| Sydney, Melbourne, Brisbane, Perth, Adelaide, Darwin, Hobart, Canberra, Cairns | 悉尼, 墨尔本, 布里斯班, 珀斯, 阿德莱德, 达尔文, 霍巴特, 堪培拉, 凯恩斯 | Not 雪梨, 柏斯, 布里斯本, 坎培拉. |
| Gold Coast, Sunshine Coast, Alice Springs, Broome, Townsville, Byron Bay, Great Ocean Road, Twelve Apostles | 黄金海岸, 阳光海岸, 爱丽丝泉, 布鲁姆, 汤斯维尔, 拜伦湾, 大洋路, 十二门徒岩 | |
| Auckland, Wellington, Christchurch, Queenstown, Dunedin, Rotorua, Taupō, Nelson, Wānaka, Tekapo, Picton, Kaikōura, Milford Sound / Piopiotahi | 奥克兰, 惠灵顿, 基督城, 皇后镇, 但尼丁, 罗托鲁瓦, 陶波, 尼尔森, 瓦纳卡, 特卡波, 皮克顿, 凯库拉, 米尔福德峡湾 | 基督城 is the travel-writer form (official 克赖斯特彻奇 only in consulate contexts). |
| Aoraki / Mount Cook | Aoraki/库克山 | Aoraki is protected: always keep it. |
| Uluṟu, K'gari, Ikara, Tjoritja, Kakadu, Namadgi | 乌鲁鲁（Uluṟu）, K'gari 岛, Ikara, Tjoritja, 卡卡杜（Kakadu）, 纳玛吉（Namadgi） | Exact spelling and diacritics on first mention; never revert to colonial names unless the English gives both. |
| Small towns, roads, campgrounds, parks and businesses without an established Chinese name | keep the English | Travellers navigate by English road signs. Do not invent transliterations. Registered names (Tidal River Campground, Apollo Bay Holiday Park, Interislander) stay in English. A Chinese descriptor may follow: Cervantes 小镇, Stuart Highway 公路. |
| Well-known parks/landmarks with an established Chinese name | Chinese name, English in brackets on first mention | 大堡礁, 蓝山国家公园（Blue Mountains）, 峡湾国家公园（Fiordland）, 亚伯塔斯曼（Abel Tasman）, 汤加里罗（Tongariro）. |
| Māori words and names | keep spelling and macrons exactly | whenua → 土地（whenua）on first mention. Never strip macrons (Taupō, Kaikōura, Wānaka, Whakatāne). |

### Vehicles and trip types

| English | zh-Hans | Notes |
|---|---|---|
| campervan | 房车 (default); 小型房车 / 露营车 when contrasted with a motorhome | Mainland umbrella word is 房车 (租房车, 房车自驾). |
| motorhome | 房车; 自行式房车 / 大型房车 when the distinction matters | |
| caravan | 拖挂式房车 / 拖挂房车 | Never 大篷车, 商队. |
| camper trailer | 帐篷拖车 | |
| big rig | 大型房车 / 大车 | |
| van (as in "commit the van") | 房车 / 车 | |
| 4WD / four-wheel drive | 四驱车 / 四驱 | "4WD-only track" → 仅限四驱车通行. |
| road trip | 自驾 / 自驾游; 公路旅行 in feature copy | Search term is 自驾. |
| the big lap | 环澳自驾 / 环澳 | |
| road trip planner | 自驾行程规划 / 行程规划 | |
| working holiday / working holiday maker | 打工度假 / 打工度假者 | Visa: 打工度假签证（417/462）, colloquial 二签/三签 only if the English mentions second/third visas. |
| backpacker | 背包客 | hostel → 青旅 |
| grey nomads | 退休房车族 | |
| weekend campers | 周末露营族 | |
| road train | 公路列车 | |

### Places to stay and stop

| English | zh-Hans | Notes |
|---|---|---|
| campsite / campground | 露营地; 营地 in short copy | An individual pitch is 营位. |
| powered / unpowered site | 有电营位 / 无电营位 | |
| caravan park | 房车营地 | Mainland guides use 房车营地 for commercial parks. App label 房车公园 is avoided. |
| holiday park | 假日公园 | Tourism NSW Chinese, App Store keyword and the Kiwi app all use 假日公园. In NZ copy 度假营地 may appear once as a synonym. |
| caravan park vs holiday park (AU comparison page) | 房车营地 vs 假日公园 | Keep the two words distinct on that page. |
| free camp / free camping (AU) | 免费营地 / 免费露营 | |
| freedom camping (NZ) | 自由露营 | MBIE, Kiwi app and App Store term. Not 野营. |
| responsible camping | 负责任露营 | |
| self-contained (vehicle) | 自给自足（self-contained）on first mention, then 自给自足 | Mainland guides: 自给自足认证, "SC 认证". |
| certified self-contained vehicle | 持有自给自足认证的车辆 | |
| green warrant / blue warrant | 绿色认证 / 蓝色认证 (蓝色贴纸 when the English says sticker) | |
| dump station / dump point | 排污站 | App Store keyword in both apps; mainland blogs use 排污站. Never 垃圾站, 转储点, 倾倒站, 排污点. |
| rest area / roadside rest area | 休息区 / 路边休息区 | Rest stop → 休息站. Truck-only bay → 重型车辆专用休息区. |
| national park | 国家公园 | |
| state forest | 州立森林 | |
| council camp / showground | 地方政府营地 / 展会场地（showground） | |
| station stay | 牧场住宿 | |
| roadhouse | 公路驿站（roadhouse）on first mention | |
| day-use area | 日间休憩区 | |
| roofed accommodation | 有顶住宿（小木屋、汽车旅馆等） | Gloss once. |
| cabin | 小木屋 | |
| glamping | 豪华露营 | |
| hut (NZ DOC) | 小屋; DOC 小屋 | Backcountry hut → 野外小屋. Bivvy → 露宿棚. |
| Great Walk / Great Walks | Great Walks 经典步道 | Keep the English name (it is DOC's product name); do not add a count the English does not give. |
| Backcountry Hut Pass | 野外小屋通票（Backcountry Hut Pass） | |
| amenities block | 卫浴区 | |
| camp kitchen | 营地厨房 | |
| potable / drinking water | 饮用水 | Water filling point → 加水点. |
| toilets / showers | 厕所 / 淋浴 | Never 阵雨 for showers (an app bug). |
| laundromat | 自助洗衣房 | |
| information centre | 游客信息中心 | |
| long-vehicle parking | 长车停车位 | |
| useful stops | 实用停靠点 | |
| experiences | 体验活动 | |

### Agencies and official bodies (Chinese name with English acronym on first mention, then the acronym)

| English | zh-Hans |
|---|---|
| DOC (Department of Conservation) | 新西兰保护部（DOC）, then DOC; DOC campsite → DOC 营地. DOC is protected: always keep the Latin "DOC". |
| NZ Transport Agency Waka Kotahi / NZTA | 新西兰交通局（NZTA Waka Kotahi）. Waka Kotahi is protected. |
| MBIE | 新西兰商业、创新与就业部（MBIE） |
| Immigration New Zealand | 新西兰移民局 |
| Home Affairs | 澳大利亚内政部 |
| NPWS (NSW) | 新州国家公园与野生动物管理局（NPWS） |
| Parks Victoria | 维州公园管理局（Parks Victoria） |
| QPWS / Queensland Parks and Wildlife Service | 昆州公园与野生动物管理局（QPWS） |
| Parks and Wildlife (WA, NT, TAS) | 当地公园与野生动物管理部门 + the English name |
| RBA / RBNZ | 澳大利亚储备银行（RBA） / 新西兰储备银行（RBNZ） |
| Tourism Australia / Tourism New Zealand | 澳大利亚旅游局 / 新西兰旅游局 |
| council (AU) | 地方政府 / 市政府; shire → 郡 |
| council (NZ), bylaw | 地方议会; 地方条例 (freedom camping bylaw → 自由露营条例) |
| ranger | 巡护员 |
| Traditional Owners / Country | 传统所有者 / 原住民传统土地（Country） |
| land manager | 土地管理方 |

### Road, rules and safety

| English | zh-Hans |
|---|---|
| drive on the left | 靠左行驶 |
| give way | 让行 |
| one-lane bridge | 单车道桥 |
| gravel / unsealed road | 碎石路 / 未铺装路面 |
| speed limit | 限速 |
| overseas licence / International Driving Permit | 境外驾照 / 国际驾照（IDP） |
| WoF / rego | 车辆安全检验（WoF） / 车辆注册（rego） |
| toll / toll road / e-tag | 过路费 / 收费公路 / 电子标签（e-tag） |
| fuel, petrol, diesel, servo | 油, 汽油, 柴油, 加油站 |
| fatigue | 疲劳驾驶 |
| Total Fire Ban / fire danger rating | 全面禁火令 / 火险等级 |
| bushfire | 山火 |
| biosecurity / quarantine / fruit fly | 生物安全 / 检疫 / 果蝇 |
| stingers / crocodiles / cyclone / wet season | 致命水母 / 鳄鱼 / 热带气旋 / 雨季 |
| sandflies / kauri dieback | 沙蝇 / 贝壳杉枯梢病（kauri dieback） |
| grey water / fresh water / black water | 灰水 / 净水 / 黑水 |
| off-grid | 离网（不靠营地水电） |
| fine / infringement | 罚款 / 罚单 |

### Product and app UI

Use the app's own zh-Hans label when it is correct. Several current app labels are machine
mistranslations; the website uses the natural term instead and the app should be fixed (listed in
the progress file for the owner).

| English | Website zh-Hans | App label today |
|---|---|---|
| AussieCamps, KiwiCamping, App Store, iPhone, iOS, iCloud, MapKit | unchanged | |
| the app | App (e.g. AussieCamps App) | |
| Explore / Search / Guides / Collections | 探索 / 搜索 / 指南 / 收藏 | same |
| Planner / trip planner | 行程规划 | 规划师 (wrong) |
| Smart collections | 智能收藏 | same |
| Liked / Starred | 喜欢 / 星标 | 喜欢 / 已加星标 |
| Want to visit | 想去 | 想要参观 (stiff) |
| Visited | 去过 | 访问过 (wrong) |
| Pins / dropped pin | 图钉 | 针脚 / 掉针 (wrong) |
| All saved | 全部收藏 | 全部保存 (wrong) |
| the Pass / premium pass / premium access | 高级通行证 | 通行证 / 高级通行证 |
| Street View (site wording) / Look Around (Apple) | 街景 / Apple 地图的“四处看看” | 环顾四周 (wrong) |
| widgets | 小组件 | |
| Calendar (iOS) | “日历”App | |
| place screen / place details | 地点详情页 / 地点详情 | |
| filters | 筛选 / 筛选条件 | 过滤器 (stiff) |
| to-dos / packing list | 待办事项 / 行李清单 | |
| stop / leg | 站 / 每段路程 | |

## 4. Conventions

- **Script.** Simplified characters only. Zero Traditional-only characters (營 車 遊 紐 蘭 灣 島 線 劃
  …) and no Taiwan/HK vocabulary (露營車 for campervan, 軟體, 網路, 資訊, 影片, 雪梨, 紐西蘭).
- **Punctuation.** Full-width ，。：；！？、（） in Chinese text. Quotes are “ ” (inner ‘ ’); never 「」.
  Book or publication titles 《》. Ellipsis …… . Parentheses around an English gloss are full-width:
  新西兰保护部（DOC）.
- **No em dashes, ever.** The Chinese 破折号 is two U+2014 characters and the content audit rejects
  it. Use ，：or （） instead.
- **Ranges.** In prose write 至 or 到: 30 至 60 澳元, 12月至2月. Keep a source range as written inside
  price-table units only.
- **Spacing.** One half-width space between Chinese and Latin words or Arabic numerals (使用
  AussieCamps 规划, 74,000 多个地点, 约 120 公里). No space next to full-width punctuation, and none
  inside dates (2026年10月19日) or percentages (60%).
- **Numbers.** Arabic numerals; keep the source's figures and thousands separators exactly (74,000+,
  6,500+). Do not convert to 万 when that changes the printed figure. Approximations stay
  approximations: "about 300 km" → 约 300 公里.
- **Currency.** Prices stay in AUD/NZD. In prose: 35 澳元, 400 新西兰元; "A$45" / "NZ$400" may stay
  as written where the source uses that notation. The literal codes AUD and NZD stay as written
  wherever the source has them (they are protected terms).
- **Units.** 公里 for km in prose; 升 for litres; °C stays °C; keep L/100 km, km/h in labels and
  numbers-with-units. 时速 100 公里 is fine in prose.
- **Dates and times.** 2026年8月12日; 上午 9:30 / 下午 6 点. Southern-hemisphere seasons: when the
  English names a season and the months matter, the month range may be added in brackets
  （澳洲夏季，12月至2月）. Never add other facts.
- **Never change:** AussieCamps, KiwiCamping, App Store, iPhone, URLs, `{placeholders}`, markup such
  as `<a data-guide="slug">…</a>`, every number, every price, every date, every source title the
  English keeps in English.
- **Proper names inside link labels and sources:** translate the label meaningfully (新州国家公园与
  野生动物管理局：露营须知) unless it is a title the reader will only find in English.

## 5. Banned (with the fix)

| Don't write | Why | Write instead |
|---|---|---|
| 离线地图, 离线导航, 无网也能看地图, 离线营地地图 | The apps are not offline maps. | 没信号也能查看地点详情; 地点资料离线可用; 地图、导航、天气和照片需要网络 |
| 在你的口袋里 / 尽在掌握 (for "in your pocket") | calque | 随手就能查 |
| 进行预订 / 进行检查 / 进行规划 | 进行 + verb filler | 预订 / 检查 / 规划 |
| 被允许 / 被禁止 / 被保存 | English passive | 可以 / 不准 / 会保留 |
| 当你到达营地时 | 当……时 calque | 到了营地 |
| 对于……来说 at every turn | stiff | drop it or 想……的话 |
| 你的房车 / 你的行程 everywhere | possessive calque | 房车 / 行程 |
| 一个营地 / 一个好的选择 | article calque | 营地 / 好选择 |
| 以便, 基于, 鉴于 in travel prose | officialese | 好让 / 根据 / 因为 |
| 它 for things | pronoun calque | repeat the noun or drop it |
| 确保你…… in every tip | translationese | 记得 / 务必 / 先 |
| 开放的道路 (open road), 大圈 (big lap) | literal idiom | 上路 / 出发; 环澳 |
| 终极指南, 你需要知道的一切, 一份现实的行程 | house-banned filler | plain specific title |
| 最好的, 最全, 第一, 必去, 绝美, 宝藏, 天花板 | unsupported superlatives or slang | only when the English says it; "best" in the English hero stays 好用/首选 in measured form |
| 垃圾站, 转储点, 商队, 大篷车, 阵雨, 针脚, 规划师, 访问过 | app-string mistranslations | see glossary |
| 您 | wrong register | 你 |
| 破折号 (U+2014 U+2014), 「」, ~ for ranges, half-width ,.:;?! inside Chinese | punctuation | see conventions |

## 6. Before and after

zh-Hans is new on both sites, so these come from the app's current zh-Hans strings, which are the
only existing Chinese copy and the literal style we must not repeat.

1. "Every campsite in Australia, in your pocket."
   - Before (app): 澳大利亚的每个露营地都在您的口袋里。 (calque, wrong register, overclaims every campsite)
   - After: 澳洲各地的露营地，打开手机就能查。
2. "The places stay saved, only the collection goes."
   - Before (app): 这些地方被保存下来，只有收藏被保存。 (passive, and says the opposite of the English)
   - After: 地点都还在，删掉的只是这个收藏夹。
3. "Works out of range" / "Offline maps"
   - Before (app): 工作超出范围 / 离线地图 (meaningless, and a false offline-map claim)
   - After: 没信号也能查看地点详情

Website example (written to this guide, AU FAQ answer):
- English: "Rest areas exist for driver fatigue rather than as free campgrounds, and the ones
  intended for overnight stays say so."
- Literal: 休息区的存在是为了驾驶员疲劳，而不是作为免费露营地，打算过夜停留的那些会这样说。
- Natural: 休息区是给司机缓解疲劳的，不是免费营地；允许过夜的休息区，标牌上会写明。

## 7. Structure rules (completeness gate)

- Same number of sections, paragraphs, tips, FAQ pairs, sources and price rows as the English, in
  the same order. Reorder, split or merge sentences only inside a paragraph.
- Keep every fact, number, link and markup tag. A FAQ answer must still answer the same question.
- Homepage testimonials (`review1`…`review9*`, `reviewsEyebrow`, `reviewsTitle`) are never
  translated into zh-Hans (excluded in the engine catalog via `untranslatedKeys`).
- Fragments joined by code (`minuteRead`, `guidePlural`, `places`, `guidesIntro`, `daysFresh`…) are
  written to read correctly after the number the page puts in front of them: "8 分钟读完",
  "12 个地点", "50 篇实用指南……".
