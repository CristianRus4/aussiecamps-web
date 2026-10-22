# Translated hubs (Linear CNTXT-877)

## The switch
`LOCALIZED_HUBS_LIVE` in `lib/hubs/localized.ts`, default **false**.

- **Off (now):** every localised hub page (`/<locale>/…` for each hub section index and every hub whose English page is indexable) is built and exported for preview, but is noindex, out of every sitemap, out of hreflang and out of the language switcher.
- **On:** a localised hub is indexable only when its English page is indexable, its locale is live and published, and its translation is complete. Hreflang pairs only indexable editions, so it stays reciprocal. The English hub pages gain hreflang automatically at the same moment.
- **Who turns it on:** the owner, once Search Console shows the English hubs being indexed (see indexing-check.md). One-line change, then the normal deploy checks.

## How completeness works
Copy lives in `lib/translations/hubs/<code>.json` (the `hubs` namespace, own files so the main locale files are untouched). A page uses its translation only when the shared strings, every label its own tables show and its own prose are filled, every {placeholder} survives and every prose paragraph has exactly the English numbers (thousand/decimal separators, 24-hour clock and "4x4" for "4WD" allowed). Otherwise the whole page body is English. `npm run content:check` (audit-hubs) prints per-locale completeness and the switch state. `npm run hubs:source` regenerates the English source and the Decoder config.

## Translation run (2026-10-22)
All 15 live languages, complete for every translatable hub. Drafted through Decoder packets by three Sonnet helpers and applied through Decoder's validation (0 errors, 0 warnings). The shared local model was saturated by other sessions, so it was not used for drafting. Machine translated, **not reviewed by a person**; Danish, Swedish, Norwegian and Czech deserve a native read first.

### Spot-check (one per language, both sites)
- fr: AU 12 items. Meaning, names, numbers, formal vous, French typography all correct. No changes.
- nl: AU 7 + NZ 7. Correct and natural; names and numbers kept. No changes.
- pl: AU 7 + NZ 7. Correct; labels drop "listed" ("Prysznice") which reads fine under the table caption. No changes.
- da: AU 10 + NZ 10 (first-time language, closer check). Accurate and natural; names, numbers and $ amounts intact; "self-contained" kept as the NZ term. No changes.
- sv: AU 10 + NZ 10 (first-time language). Accurate and natural; numbers and names intact. Pattern found: NZ "freedom camping" rendered "vildcamping" while the main site keeps "freedom camping" in English; same pattern in nl/da (and some ja). Fixed at the cause: all helpers told to keep the English term and revise applied units; term added to the NZ hub config's protected terms after the run.
- German NZ: time written twice ("5 pm und 9 am, also 17 bis 9 Uhr"); helper told to write it once. Check now accepts 24-hour times.
- ja/zh AU: three idiom-driven number drifts ("1泊", repeated "25", dropped "16"); sent back for rewording.
- de: AU 8 + NZ 8. Natural, informal du, correct; one parenthetical inside a campground name translated ("Trailer-Stellplatz"), one-off and accurate, left. No changes.
- ja: AU 8 + NZ 8. Natural polite register; names kept in Latin script; numbers and $ amounts intact; freedom camping now kept as on the main site (50 uses). No changes.
- nb: AU 10 + NZ 10 (first-time language). Natural and correct; names, numbers, $ amounts intact. No changes beyond the shared fix below.
- es: AU 6 + NZ 6. Correct; Spanish state names per the es style guide. Found the NZ notice conditions left in English (my config protected them as names): pattern in every locale; fixed the config and had all helpers translate those 8 units.
- it: AU 7 + NZ 7. Correct and natural; names, numbers, $ amounts intact. No changes. Condition strings checked in de/it/nl/ja after the fix: correct.
- pt: AU 6 + NZ 6. Correct European Portuguese (casas de banho, duches, camiões); names, numbers intact. No changes.
- ko: AU 6 + NZ 6. Natural polite 해요체; one meaning error (both campgrounds placed in Coffin Bay National Park), sent back and fixed. One-off.
- cs: AU 10 + NZ 10 (first-time language). Correct, formal; count phrasing uses "Počet …: {count}" to avoid wrong plural forms. No changes.
- zh-hans: AU 5 + NZ 5. Natural; names in Latin script; freedom camping kept. Mixes 澳洲/澳大利亚 like the main site does. No changes.
- zh-hant: AU 5 + NZ 5. Natural Traditional Chinese (公尺, 資料); names and numbers intact. No changes.
