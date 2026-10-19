# i18n-pt progress (European Portuguese, both sites)

Thread: i18n-pt (Ava). Branches: `i18n/a-pt` (aussiecamps-web), `i18n/k-pt` (kiwicamping-web).
Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-pt`, `~/.t3/worktrees/kiwicamping-web/i18n-k-pt`.
Engine locale id: `pt` (variety pt-PT). Register: informal (tu), now set in both configs.

## Done (2026-10-19)
- Style guide `docs/translation-style/pt.md` (identical in both repos), `"pt": "informal"` added to
  the register map of both `docs/translation.config.json`.
- UI strings rewritten on both sites (127 of 219 changed per site).
- Support, privacy, terms rewritten on both sites (35 of 58 units changed per site).
- Guides re-reviewed and rewritten:
  - AU: alcohol-coffee-drink-prices-australia, sleeping-in-car-australia,
    camping-rules-new-south-wales, public-transport-costs-australia-2026,
    eating-out-australia-prices-2026, camping-rules-western-australia,
    dump-points-australia-guide, camping-rules-victoria, australia-grocery-prices-2026,
    interstate-biosecurity-road-trip.
  - NZ: new-zealand-grocery-prices-2026, doc-huts-new-zealand-guide,
    public-transport-costs-new-zealand-2026, new-zealand-road-signs-visitors,
    new-zealand-biosecurity-camping-gear, doc-campsite-rules,
    new-zealand-road-trip-fuel-cost-2026, campervan-road-rules-new-zealand,
    eating-out-new-zealand-prices-2026, new-zealand-travel-cost-2026.

- Judge round 1 (docs/growth/judge/pt.json, both repos): every failing unit fixed; privacy page
  realigned to the 7-section English (analytics section, effective 19 October 2026); consent.*
  translated on both sites. pt now 3/3 pages on both sites.

## In progress
- Re-review of the remaining guides in GSC-impression order (pages-3m.tsv), 5 per batch, up to 4
  Opus subagents writing values files under /tmp/ptwork/out; this thread edits and applies.
- Working files (rebuildable): /tmp/ptwork/work/<site>-<slug>.json (en + current pt per unit),
  /tmp/ptwork/BRIEF.md (worker brief), /tmp/ptwork/scripts/check.py (lint: banned terms, numbers,
  markup, protected terms).

## Next
- Road trips, K legacy pages, `article`/`tools` namespaces and `<a data-guide>` markup once the
  foundation milestones that add them merge to main.
- Old app labels (Destacados, Quero ir, Marcadores, salvar, autossuficiente, conselho) remain in the
  untouched app-guide articles; they are fixed as those batches come up. `ui.review*` testimonials
  stay as they are by rule, although review1Quote contains "salvar" and "offline".

## Notes for the orchestrator
- The app's `pt` localisation (`Localizable.xcstrings`) is Brazilian Portuguese with several
  mistranslations ("Gostou" for Liked, "Alimentado" for Powered, "Olhe ao redor" for Look Around,
  "Alfinete caído" for Dropped pin). Portugal users see it, since iOS falls back from pt-PT to pt.
  The website uses pt-PT labels close to the app's (see the style guide §2.3).
- KiwiCamping App Store pt-PT metadata is a byte copy of pt-BR (`Planejador`, `banheiros`); the
  AussieCamps pt-PT subtitle says "Mapa offline e roteiro", which breaks the no-offline-map rule.
- English `ui.metaKeywords` on both sites contains "offline camping map"; the pt value avoids it.
- English support page (both sites): "Map and place details are free, together with two saved
  lists." conflicts with the Pass boundary in THREADS.md. The pt mirrors the English.
- Possible English errors found while translating (translated as written, worth a content fix):
  - K fuel cost FAQ 1 promises petrol and diesel prices, only petrol is given; FAQ 2 says to
    "divide by" consumption in L/100 km (should multiply).
  - K road signs FAQ on one-lane bridges contradicts itself about the large/small arrow; Limited
    Speed Zones have been phased out; the 5-queued-vehicles pull-over rule is unconfirmed.
  - K groceries still say Countdown (now Woolworths NZ); K public transport "Wellington uses
    Snapper" may be outdated (national Motu Move ticketing).
  - K DOC huts: "Huts are not staffed" is not true of Great Walk huts in season.
  - K biosecurity: "no land mammals" ignores native bats; myrtle rust established in NZ in 2017.
  - A/K drinks and eating-out FAQs name items (schooner, carton, brunch, pub meal) that are not rows
    in the price tables.
  - A public transport: "contactless not accepted on most Melbourne services" may be outdated.
