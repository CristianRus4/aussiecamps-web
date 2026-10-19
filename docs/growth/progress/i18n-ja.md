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

## In progress
- Running: a07, a08, k09 (subagents, one writer per values file; resume a limit-paused agent with SendMessage, never relaunch). Remaining after those: a09-a15, k10-k12.
- Workflow: subagent writes /tmp/ja-work/out/<batch>.values.json, then lint (/tmp/ja-work/tools/lint.mjs), engine dry run, editor read (/tmp/ja-work/tools/read.mjs), apply (/tmp/ja-work/tools/apply.sh a|k file --real), structure check (/tmp/ja-work/tools/structure.mjs), commit.
- If /tmp is lost: regenerate batches with `packet --locale ja --catalog <id>-ja`. Applied units drop out of packets.

## Guide order (pages-3m.tsv impressions)
- A: alcohol-coffee-drink-prices, sleeping-in-car, camping-rules-nsw, public-transport-costs, eating-out, camping-rules-wa, dump-points, camping-rules-victoria, grocery-prices, interstate-biosecurity, campervan-budget, accommodation-costs, rules-sa, domestic-flights, rules-act, rules-qld, road-signs, caravan-vs-holiday-park, towing, best-time, rules-nt, state-differences, camping-fees, travel-cost, fuel-cost, rules-tas, is-free-camping-legal, without-signal, campervan-driving-safety, water-planning, bus-train-costs, campfires, overseas-licence-state, best-camping-app, driving-road-rules-visitors, then the zero-impression rest.
- K: grocery-prices, doc-huts, public-transport-costs, road-signs, biosecurity-gear, doc-campsite-rules, fuel-cost, campervan-road-rules, eating-out, travel-cost, speed-limits, beer-wine-coffee, towing, wof-registration, accommodation-costs, overseas-licence, sandflies, volcanic-safety, dogs, domestic-flights, cook-strait-ferry, kauri-dieback, bus-ferry-train, alcohol-fatigue, hut-etiquette, river-crossing, left-side-driving, driving-day-planner, wildlife-livestock, then the zero-impression rest.

## Blockers / notes for the orchestrator
- **Protected terms block natural CJK.** The shared catalogs protect "New South Wales", "Queensland", "Victoria", "Tourism Australia", "North Island", "South Island", "Stewart Island", "Aoraki" and others. A miss is an error, so the engine rejects ニューサウスウェールズ州 or 南島. That affects about 150 AU units. Fix used, the same one the zh-hans thread uses: a separate ja-only catalog per repo. It protects only the brands, AUD/NZD, DOC and Waka Kotahi, puts the exonyms in a ja glossary, and lists the testimonial keys under `untranslatedKeys`. If `locales:sync` generates the config, it needs to carry per-locale protected terms or exemptions, or an engine option such as `exceptLocales`.
- **Testimonials.** `isTranslated` (lib/localized.ts) requires every ui key, including review1..9 and reviewsEyebrow/reviewsTitle. ja never fills them, so the foundation thread's platform has to exempt them for new locales, or ja can never go live.
- `content:check` does not see ja until the platform registers it (`localeCodes`). Until then, completeness is verified with the engine audit plus a local structure check.
- App ja strings (read-only, for the app team): 状態によるフィルター (Filter by state), 訪問しました (Visited), すべて保存されました (All saved), 探検する (Explore), ダンプステーション, 自己完結型 and 自給式車両 are mistranslations. The ASO ja subtitle claims オフライン地図.
