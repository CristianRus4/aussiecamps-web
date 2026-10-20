# i18n-zh-hans progress (Max account)

Language: Simplified Chinese. Site file `lib/translations/zh-hans.json`, engine locale `zh-Hans`.
Branches: `i18n/a-zh-hans` (aussiecamps-web), `i18n/k-zh-hans` (kiwicamping-web).
Style guide: `docs/translation-style/zh-hans.md` (identical in both repos).

## Status (2026-10-20, second session)
- Both branches were replayed onto origin/main as one squashed commit each (the 14/13-commit rebase
  conflicted on the generated config and the empty locale skeleton). Old history: branches
  `backup/i18n-a-zh-hans-pre-rebase` and `backup/i18n-k-zh-hans-pre-rebase`.
- The dedicated catalog is now `aussiecamps-website-zh-Hans` / `kiwicamping-website-zh-Hans` with locale
  `zh-hans` and `varieties {"zh-hans": "zh-Hans"}`, so `locales:sync` leaves it alone.
- NZ COMPLETE (engine 3919/3919, 78/78 guides, stamped). Each batch was drafted by one Opus subagent and
  edited by another (negation/number check) before apply.
- AU COMPLETE (engine 4383/4383, 70/70 guides, stamped with translations:stamp, meta/zh-hans.json committed). Each drafted batch was edited by a separate reviewer subagent (negation/number check) before apply.
- Working files: /tmp/zhhans/work-au-12, /tmp/zhhans/work-nz-12 (b-* sources, v-* values).
  Apply with /tmp/zhhans/tools/apply.sh au|nz FILE [--real] (locale id is now zh-hans).

## Next (orchestrator go-live note, 2026-10-20 evening)
Both branches have origin/main merged. Stale units are found by diffing English (NOT stamps):
`python3 /tmp/zhhans/tools/stale.py au|nz` writes /tmp/zhhans/stale-<repo>.json and base-<repo>.json
(English each unit was translated from: old merge-base, or the 9cc735f/e6c3de2 commit for units done in
this session); `plan.py` splits articles into WHOLE (>=8 stale units or structure changed), NEW (no zh), UNIT.
Packets: `refpack.py au|nz PREFIX slug...` (PREFIX.en.json current English, PREFIX.ref.json {key:{en_old,zh}}).
Per batch: draft subagent writes v-<batch>.json + .changed.txt, a separate editor subagent writes p-<batch>.json
(negation/number check), then patch.py, lint.py --complete, apply.sh --real, commit. Extra rules: /tmp/zhhans/lessons.md.
Work dirs: /tmp/zhhans/work-nz-14 (z1..z4 whole batches, zu.json unit packet), /tmp/zhhans/work-au-14 (to create).
Done so far (2026-10-21): NZ whole z1..z4 and NZ unit-level updates (all 78 existing NZ guides current;
NZ content:check passes, 0 stale, stamped). AU y1 (camping-rules NSW, Victoria, ACT, WA, Tasmania) and y2 (camping-rules SA/NT/QLD, campfires, is-free-camping-legal) done.
Overnight rule (until 09:00 on 2026-10-21): no subagents; the main session drafts and self-reviews by hand
with /tmp/zhhans/tools/todo.py (writes PREFIX.todo.json / .auto.json), /tmp/zhhans/work-au-14/me/<slug>.py
(S slug, V dict of Chinese values) and tools/assemble.py PREFIX OUT mod... (merges reused units + mine).
y3 (sleeping-in-car, dump-points, caravan-park-vs-holiday-park, camping-fees-2026, best-camping-app-australia) done.
y4 (the 5 cost pages) and the support page / small units are done; AU content:check passes except the structure-stale
guides still queued in y5.
Still to do AU: y5 (road rules state differences, road signs,
towing, visitor road rules, darwin-kakadu, adelaide-uluru, alps), yu (AU unit packet /tmp/zhhans/work-au-14/yu.json:
support page, 9 units), then NEW guides AU 7 and NZ 7. NZ best-nz-camping-apps and wastewater tips were pruned with prune.py.
Remaining at the end: NEW guides (AU 7, NZ 7), then `translations:stamp -- --locale zh-hans`, `content:check`
(zero stale, zero number-parity errors) and one `npm run check` per repo (needs `qrcode` in node_modules:
`cp -cRn <main>/node_modules/ ./node_modules/`). NZ check currently fails until best-nz-camping-apps is updated.

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

## English source issues found in the second session (translated faithfully)
- NZ best-nz-camping-apps: says the free tier lets you "find places on the map", with lists, details, planning and
  advanced filters behind the Pass; this does not match the THREADS.md Pass boundary.
- NZ holiday-parks guide section 0: "a $45 site for two and a $28-per-person rate are the same price for a couple"
  (2 x $28 = $56).
- NZ where-to-camp: "four land types" vs FAQ "broadly five"; basic DOC sites "can be free or a few dollars" vs "are free".
- NZ freedom-camping-rules: self-containment "transition is now complete" but blue warrants stay valid to 31 Dec 2027.
- NZ best-time-camping: FAQ vs body disagree on the best months and the shoulder season.
- NZ Glenorchy road trip: 46 km in the intro, 45 km in section 3; Whakatipu vs Wakatipu spellings.
- NZ two-week itinerary: "driving the Lindis at dawn" on the Catlins to Queenstown day (not on that route).
- NZ severe weather FAQ: "exhausted alpine passes" (probably "exposed").
- AU Sydney to Cairns: 2,500 km in the intro vs 2,400 km direct in section 3; Melbourne to Adelaide: 900 km to Mount
  Gambier compared with 730 km to Adelaide; the last tip says "free ferry crossings" which the body never says.
- AU fuel planning: "refuel when the next stop would use too much of the reserve" vs "top up whenever above half a tank".
- AU Kangaroo Island: "2020 fires" heading vs "2019 to 2020" body; four or five nights vs three days minimum.
- AU Gibb River Road: spare-tyre tip "where recommended" vs body "standard rather than optional".
