# i18n-zh-hant progress (Max account)

Language: Traditional Chinese, Taiwan first (`zh-hant` file, engine id `zh-Hant`). Branches: `i18n/a-zh-hant` (aussiecamps-web) and `i18n/k-zh-hant` (kiwicamping-web). This file is identical in both repos.

## Setup decisions
- Style guide: `docs/translation-style/zh-hant.md` (identical in both repos).
- Engine config: zh-Hant has its **own catalog** in each `docs/translation.config.json` (`aussiecamps-website-zh-Hant`, `kiwicamping-website-zh-Hant`), same pattern as the zh-hans thread. Reasons: (1) the shared catalog protects state and island names (Queensland, North Island…) as errors, which forces Latin script into Chinese copy; my catalog protects only brands/codes (AU: AussieCamps, AussieCamping, AUD; NZ: KiwiCamping, NZD, DOC, Aotearoa, Aoraki, Waka Kotahi) and uses a glossary (warning level) to keep 昆士蘭/北島 etc. consistent; (2) testimonials are listed in `untranslatedKeys`, so they never count as missing for this new locale.
- Locale file: `lib/translations/zh-hant.json` with `"locale": "zh-hant"`. The site code does not know the locale yet (foundation adds `lib/locales.json`), so `content:check` does not read it yet.
- Values files and packets live outside the repos in `/tmp/zhhant/` (src/, out/, bin/qa.py, bin/wrap.py, bin/split.py).

## Done
- [x] Style guide + glossary (research notes summarised in the guide)
- [x] AU: UI (220 units, testimonials excluded) + support/privacy/terms (58)
- [x] NZ: UI (220) + support/privacy/terms (58)

## Next
- Guides by search value (pages-3m.tsv order), both repos interleaved, up to 4 Opus subagents writing values files; I edit and apply.
- After foundation merges: road trips, K legacy pages, consent/article/tools namespaces, data-guide link markup; `translations:stamp`.

## Blockers / notes for the orchestrator
- Separate per-locale catalog in the engine config (see above): please confirm.
- Support page English says "Map and place details are free, together with two saved lists", which may conflict with the Pass boundary in THREADS.md. Translated faithfully; English owner should check.
- App zh-Hant labels have several mistranslations (針腳 for Pins, 過濾器 for Filters, 訪問過 for Visited, 轉儲點/垃圾站 for dump points/stations, 房車公園, 規劃師, 註解). The site uses natural Taiwan terms instead; listed in the style guide section 3.
