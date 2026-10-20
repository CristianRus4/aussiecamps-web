# i18n-ja progress (Max)

Thread i18n-ja: Japanese for both sites. Branches `i18n/a-ja` (aussiecamps-web, worktree `~/.t3/worktrees/aussiecamps-web/i18n-a-ja`) and `i18n/k-ja` (kiwicamping-web, worktree `~/.t3/worktrees/kiwicamping-web/i18n-k-ja`). The same file is kept in both repos.

## Done
- Research: GSC (no ja queries yet), ASO ja keyword sets, app ja strings, native Japanese web sources (Tourism Australia JP, Visit NSW JP, Tourism NZ JP, 地球の歩き方, NZ/AU ワーホリ and rental blogs).
- `docs/translation-style/ja.md` (identical in both repos).
- `lib/translations/ja.json` created in both repos.
- `docs/translation.config.json`: separate `aussiecamps-website-ja` / `kiwicamping-website-ja` catalogs (see blockers).

- Milestone 1: UI (220/220, testimonials excluded) + support/privacy/terms on both sites.
- AU privacy realigned with A-foundation's Website analytics section; consent strings translated.
- Guides applied: A 23/50 (batches a01-a06, a16, a17); K 31/43 (batches k01-k08, k13, k14).
- K privacy realigned with K-foundation's analytics section; K consent strings translated.

## In progress (updated 2026-10-20, evening)
- All first-pass guides and road trips are applied: A 70/70, K 78/78 at the time of writing; plus tools namespace. Both branches merged with origin/main again (second merge); `locales:sync` + `translations:source` regenerated.
- SECOND PASS (orchestrator go-live note): main moved a lot, so (a) units whose English changed, found by diffing en.json (old English the ja was written from vs now; script /tmp/ja-work/tools/stale.mjs, results /tmp/ja-work/stale-{a,k}.json), and (b) new English (A 7 new app-comparison guides, K ~9 new guides, extra sections in rewritten guides) must be re-translated, then `translations:stamp -- --locale ja`, then content:check with zero stale and zero number-parity errors. Counts: A 843 stale + ~1570 untranslated; K 579 stale + ~971 untranslated.
- Packets: /tmp/ja-work/src/upd/{ua1..ua7,uk1..uk5}.pkt.json (built by tools/mkupd.mjs + tools/group.mjs from the audit; format {key:{en,oldEn?,ja?}}); brief /tmp/ja-work/upd-brief.md. Per batch: drafter writes out/<b>.values.json, reviewer writes out/review-<b>.fixes.json, tools/merge.mjs, tools/apply.sh a|k file --real, commit. Done so far in this pass: see git log.
- If /tmp is lost: re-run the audit, rebuild the stale list by diffing en.json at the old merge-base (c474064 for A, 3204bd0 for K) and at the first merge commit against now, and make packets from missing + stale keys.
- Also pending after the pass: remove `extra` units (ja keys with no English) if the audit lists them; NZ drift to carry (blue warrants ended 7 June 2026, Apple Look Around, licence 18/12 months, holiday park NZ$56); `npm run check` once; handoff message.
- English inconsistencies for A-content (not fixed in ja): best-time-camping-australia May to October vs May to September; NT wet season Dec-Mar vs Nov-Apr; NZ severe-weather FAQ "exhausted alpine passes"; water guide five litres vs four to five; left-side driving guide assumes right-hand-traffic readers; Victoria High Country still says Queen's Birthday; K DOC guide four vs five categories; Glenorchy 46 vs 45 km.
- Style notes: first-mention （） glosses for agency names and sign terms follow the style guide; drafters were told to add no other glosses. Traditional Owners = 先住民の伝統的土地所有者（Traditional Owners）, which the style guide lacks (add an entry).

## Second pass status (update at each batch)
- Overnight rule (until 09:00 on 2026-10-21): one worker only, no subagents; drafting by the main session in small batches.
- Done in second pass: A ua1 (working-holiday and fuel-price app guides), drink prices, eating out, grocery, public transport, domestic flights, Darwin/Kakadu, road signs, towing, alps, driving rules, state differences, biosecurity, support page (Pass boundary corrected), and all small stale units. K uk1 (camping apps, travel apps).
- Drafts lost when a limit hit: ua2 (best-free-camping, wikicamps-alternatives, campermate-alternatives) and uk2 (best-campervan, road-trip-planner, wikicamps-alternatives) were not written; packets still in /tmp/ja-work/src/upd/.
- AussieCamps second pass COMPLETE: engine shows ja 5923/5923 (only source-equal, glossary and script warnings), 77/77 guides complete, content audit passes. A remaining: `npm run translations:stamp -- --locale ja`, a final negation/number read of a sample, `npm run check` once. K second pass: all existing guides updated; content audit passes, 84/85 guides complete (campervan, road-trip-planner, wikicamps-alternatives, campermate-alternatives, rankers-alternatives done). Remaining K: only one new app guide (free-camping-apps-new-zealand; packets /tmp/ja-work/src/upd/uk-*.json, ~88 units). Then `translations:stamp -- --locale ja` in both repos, sample read, `npm run check` once, handoff.
- After all units: trim ja `extra` units (arrays longer than English), `translations:stamp -- --locale ja`, content:check zero stale, `npm run check`.

## Guide order (pages-3m.tsv impressions)
- A: alcohol-coffee-drink-prices, sleeping-in-car, camping-rules-nsw, public-transport-costs, eating-out, camping-rules-wa, dump-points, camping-rules-victoria, grocery-prices, interstate-biosecurity, campervan-budget, accommodation-costs, rules-sa, domestic-flights, rules-act, rules-qld, road-signs, caravan-vs-holiday-park, towing, best-time, rules-nt, state-differences, camping-fees, travel-cost, fuel-cost, rules-tas, is-free-camping-legal, without-signal, campervan-driving-safety, water-planning, bus-train-costs, campfires, overseas-licence-state, best-camping-app, driving-road-rules-visitors, then the zero-impression rest.
- K: grocery-prices, doc-huts, public-transport-costs, road-signs, biosecurity-gear, doc-campsite-rules, fuel-cost, campervan-road-rules, eating-out, travel-cost, speed-limits, beer-wine-coffee, towing, wof-registration, accommodation-costs, overseas-licence, sandflies, volcanic-safety, dogs, domestic-flights, cook-strait-ferry, kauri-dieback, bus-ferry-train, alcohol-fatigue, hut-etiquette, river-crossing, left-side-driving, driving-day-planner, wildlife-livestock, then the zero-impression rest.

## Blockers / notes for the orchestrator
- **Protected terms block natural CJK.** The shared catalogs protect "New South Wales", "Queensland", "Victoria", "Tourism Australia", "North Island", "South Island", "Stewart Island", "Aoraki" and others. A miss is an error, so the engine rejects ニューサウスウェールズ州 or 南島. That affects about 150 AU units. Fix used, the same one the zh-hans thread uses: a separate ja-only catalog per repo. It protects only the brands, AUD/NZD, DOC and Waka Kotahi, puts the exonyms in a ja glossary, and lists the testimonial keys under `untranslatedKeys`. If `locales:sync` generates the config, it needs to carry per-locale protected terms or exemptions, or an engine option such as `exceptLocales`.
- **Testimonials.** `isTranslated` (lib/localized.ts) requires every ui key, including review1..9 and reviewsEyebrow/reviewsTitle. ja never fills them, so the foundation thread's platform has to exempt them for new locales, or ja can never go live.
- `content:check` does not see ja until the platform registers it (`localeCodes`). Until then, completeness is verified with the engine audit plus a local structure check.
- App ja strings (read-only, for the app team): 状態によるフィルター (Filter by state), 訪問しました (Visited), すべて保存されました (All saved), 探検する (Explore), ダンプステーション, 自己完結型 and 自給式車両 are mistranslations. The ASO ja subtitle claims オフライン地図.
