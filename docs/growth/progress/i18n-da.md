# i18n-da progress (Danish, both sites)

Thread: i18n-da (Kai account). Branches: `i18n/a-da` (aussiecamps-web), `i18n/k-da` (kiwicamping-web).
Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-da`, `~/.t3/worktrees/kiwicamping-web/i18n-k-da`.
Style guide: `docs/translation-style/da.md` (identical in both repos). New locale on both sites.
Working files (packets, batches, subagent values): `/tmp/da-i18n` (batches/, out/).

## Done
- Style guide and glossary (research: GSC, ASO da keywords, app xcstrings da, Danish AU/NZ travel media).
- `da` added to `docs/translation.config.json` (locales, targets, register informal, glossary Australia -> Australien) and an empty `lib/translations/da.json` in both repos.

- Milestone 1: UI (220 strings per site; testimonials deliberately absent), consent bar, support/privacy/terms (privacy incl. the 7-section analytics version) on both sites.
- Milestone 2: the 6 highest-impression guides per site. AU: alcohol-coffee-drink-prices, sleeping-in-car, camping-rules-nsw, public-transport-costs, eating-out-prices, camping-rules-wa. NZ: grocery-prices, doc-huts, public-transport-costs, road-signs, biosecurity-gear, doc-campsite-rules.

## In progress (run 2026-10-20, main account background agent)
- Rebased both branches onto origin/main (M2). Own `da`-only catalog (`aussiecamps-website-da`, `kiwicamping-website-da`) in `docs/translation.config.json`: Tasmanien, Centralaustralien, Nordøen, Sydøen are now allowed.
- Tools namespace translated (AU 116, NZ 152). data-guide links restored in 15 paragraphs. Brand genitive (Apples, KiwiCampings) removed because the content audit rejects it. Orchestrator rule applied to all done units: negation sweep (no reversals found; "må selv tjekke" changed to "skal selv tjekke") and glosses/added facts removed (see style guide section 0).
- Working files in /tmp/da-i18n (batches/, out/, full-a3.json, full-k3.json, mkbatch.py, mkvals.py, ap.sh, qa.py, neg*.py, degloss.py).

- Guide batches this run (4 of 4): K 6 guides (fuel cost, campervan rules, eating out, travel cost, speed limits, drinks), AU 5 (grocery, interstate biosecurity, campervan budget, accommodation, domestic flights), K 5 (East Cape, towing, WoF, accommodation, overseas licence), AU 5 (bus and train costs, best camping app, best time, Brisbane to Cape Tribulation, Great Ocean Road). Totals: AU 16 guides, NZ 17 guides, UI 220/220, tools, support, privacy (analytics section), terms, consent.

## Next
- Guides in impression order from `/tmp/da-i18n/prio-a2.tsv` and `prio-k2.tsv` (rebuild with `python3 prio.py` if /tmp is gone), skipping the 23 AU pages being rewritten by the paired release. AU next: melbourne-to-adelaide-coastal-route, perth-to-broome-road-trip, east-coast-road-trip-sydney-cairns, camping-without-phone-signal, campervan-driving-australia-safety-guide, camping-water-planning. NZ next: sandflies-new-zealand-camping, volcanic-safety-new-zealand-travel, coromandel-rotorua-road-trip, dogs-camping-new-zealand, domestic-flight-costs-new-zealand-2026.
- Retranslate sleeping-in-car-australia, camping-rules-new-south-wales, camping-rules-western-australia when the new English lands (15 paragraphs lack the data-guide links, some glosses remain there).
- Then road trips, K legacy articles, `translations:stamp`.
- Workflow: packet from `translation-engine packet --locale da`, batch with mkbatch.py, write `ALIAS.key|||value` lines, mkv2.py, strip.py (no added parentheses), qa.py (negations, brand genitive, numbers), patch.py, ap.sh dry run then apply, `LOCALES_PREVIEW=1 npm run content:check`.

## English source issues found while translating (Danish follows the English unless noted)
- NZ new-zealand-road-signs-visitors faq[1][1]: "The large arrow is your direction" contradicts sections[4].body[0]. The Danish says what section 4 says (large arrow = direction with priority). Suggested EN: "The large arrow shows the direction with priority and the small red arrow the direction that gives way."
- NZ new-zealand-biosecurity-camping-gear sections[7].body[1]: foot and mouth has never established in NZ and myrtle rust has been established since 2017, so "each intercepted at the border more than once" needs a fact check; sections[7].body[0] "no land mammals" (NZ has native bats).
- NZ new-zealand-grocery-prices-2026: Countdown is now Woolworths NZ; FAQ promises "dated figures per item" the table does not give.
- NZ public-transport-costs-new-zealand-2026 FAQ mentions Wellington/Christchurch fares the table does not have.
- AU alcohol-coffee-drink-prices FAQ lists schooner, craft beer, carton and wine by the glass, but the price table has different rows. AU eating-out FAQ promises café breakfast and pub meal prices the table lacks.
- AU camping-rules-western-australia FAQ "holiday park pass": DBCA's product is probably the "Holiday Pass"; worth checking.

## Blockers and open questions for the orchestrator
- Testimonials (review1..review9*, reviewsEyebrow, reviewsTitle) are deliberately left out of da.json. The current `isTranslated` gate requires every UI key, so the locale-registry change must exempt them for new locales.
- Resolved: Danish exonyms now come from the da-only catalog (existing text had none of the four terms).
- `ui.trustFreedomCamping` (KiwiCamping) is "Freedom camping" in Danish too (the established Danish usage); the engine flags it as source-equal.
- Orchestrator: `scripts/audit-content.mjs` genitive set is only de/nl; if da should allow KiwiCampings/Apples, add da there (protected file).
- NZ overseas-driver-licence-new-zealand: the English says 18 months (reducing to 12 from 1 November 2026) in section 0 but "twelve months" in sections 3 and faq. The Danish follows the English as written; fix the English.
- Spelled-out amounts in English ("Fifty dollars", "a hundred to a hundred and seventy dollars") must stay words in Danish or the content audit flags the digits.
