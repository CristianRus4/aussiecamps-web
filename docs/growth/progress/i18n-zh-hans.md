# i18n-zh-hans progress (Max account)

Language: Simplified Chinese. Site file `lib/translations/zh-hans.json`, engine locale `zh-Hans`.
Branches: `i18n/a-zh-hans` (aussiecamps-web), `i18n/k-zh-hans` (kiwicamping-web).
Style guide: `docs/translation-style/zh-hans.md` (identical in both repos).

## Status (2026-10-20)
- Both sites: every UI string except the testimonials, the consent bar, support, privacy (new
  analytics version) and terms.
- Guides: every article currently in `en.json` on both sites (AU 50, NZ 43) once the last three
  batches land; see the commit log for the order. Each is structurally complete per the
  `isArticleComplete` rules (checked with /tmp/zhhans/tools/complete.py) and was read by the editor
  before applying.
- Not yet in scope because main has not merged them into `en.json`: road trips, the Kiwi legacy
  `.html` articles, the `article` and `tools` namespaces, `<a data-guide>` link markup and
  `translations:stamp`. Resume with: `git fetch && git rebase origin/main`, `npm run translations:source`
  if needed, then the engine packet loop for the zh-Hans catalog.

## How the work is done (for a resuming session)
- Engine: separate zh-Hans catalog per site in `docs/translation.config.json`
  (`aussiecamps-website-zh-Hans`, `kiwicamping-website-zh-Hans`).
- Working files outside the repo: /tmp/zhhans (brief.md for translators, bNN source batches, vNN
  values, tools/lint.py, tools/complete.py, tools/apply.sh, tools/regions.json for region labels).
- Translators: Opus subagents (max 4 at once) write values files; the editor reviews, patches and
  applies. Region labels are normalised from tools/regions.json on apply.

## Notes for the orchestrator
1. **Protected terms vs Chinese.** The shared catalogs protect "New South Wales", "Queensland",
   "North Island", "South Island" etc.; a missing protected term is an apply error, so natural
   Chinese (新南威尔士州, 北岛) needs its own catalog. zh-Hans (and ja, ko, zh-Hant) use per-locale
   catalogs whose protected terms are brands, AUD/NZD, DOC, Aotearoa, Aoraki and Waka Kotahi. Keep
   this if `locales:sync` regenerates the config.
2. **Testimonials vs the live gate.** `isTranslated` requires every `ui` key including `review*`,
   which new locales must not translate (excluded via `untranslatedKeys`). The gate needs a
   testimonial exemption for new locales.
3. **Not wired yet.** zh-hans is not in `lib/localized.ts` / `lib/i18n.ts`; `content:check` does not
   validate it until the locale is added.
4. **English-only dates** render inside zh pages (`formatArticleDate` en-GB, `exchangeRateDate`,
   price-table `asOf`).
5. **Privacy rewrite shifted positions.** Inserting the analytics section moved later translated
   paragraphs by one position; zh-hans was fixed (stale extra paragraph removed). Other locales
   should be checked for the same shift.
6. **Pass boundary in English:** support §5 "Map and place details are free, together with two saved
   lists" contradicts THREADS.md.
7. **App zh-Hans label mistranslations** (app repo): Planner 规划师, Visited 访问过, Want to visit
   想要参观, Pins 针脚/掉针, All saved 全部保存, Look Around 环顾四周, Showers 阵雨, Dump station 垃圾站/转储点,
   No caravans 没有商队, Works out of range 工作超出范围, Offline maps 离线地图 (false claim). The website
   uses 行程规划, 去过, 想去, 图钉, 全部收藏, 四处看看, 淋浴, 排污站.

## English source issues found while translating (translated faithfully unless noted)
- AU dump points: FAQ 1 says emptying at a public toilet is illegal; section 8 allows cassette-ready public toilets.
- AU public transport: FAQ says all four cities have tap-on caps and several accept contactless; section 4 says Melbourne mostly does not.
- AU grocery: two different solo weekly figures (A$80 to A$140 in section 2, $100 to $170 in section 6).
- AU Queensland: sections 7.2/7.3 sit under the dingo heading and repeat section 3.2.
- AU WA: sections 7.2/7.3 near-duplicates; section 1 tips do not match the section topic.
- AU campervan budget: FAQ promises dated A$ figures the article does not contain.
- AU overseas licence by state: FAQ ("length of your stay", permanent residency) contradicts sections 0 and 4.
- AU visitor road rules: imageAlt says "left-hand driving position" (Australia is right-hand drive); Chinese describes the view instead.
- AU bus/train or accommodation: still says "Fraser Island" (now K'gari).
- AU water planning: sections 6.2 and 7.3 repeat the tank-sanitising advice.
- NZ grocery: still names "Countdown" (now Woolworths NZ); FAQ gives no figure.
- NZ huts: "Huts are not staffed", yet serviced and Great Walk huts have wardens in season.
- NZ road signs: FAQ 2 says "the large arrow is your direction", contradicting section 4; the Chinese follows section 4.
- NZ overseas licence: section 0 says 18 months until 1 Nov 2026 then 12; sections 3, 7 and FAQ say 12 months with no mention of the change.
- NZ public transport FAQ 2 vs section 0 (AT HOP cap is weekly).
- Several "How much…" FAQs give no figure ("The guide prices…").
