# i18n-pt progress (European Portuguese, both sites)

Thread: i18n-pt (Ava). Branches: `i18n/a-pt` (aussiecamps-web), `i18n/k-pt` (kiwicamping-web).
Worktrees: `~/.t3/worktrees/aussiecamps-web/i18n-a-pt`, `~/.t3/worktrees/kiwicamping-web/i18n-k-pt`.
Engine locale id: `pt` (variety pt-PT). Register: informal (tu), now set in both configs.

## Done
- 2026-10-19: style guide `docs/translation-style/pt.md` (identical in both repos), `"pt": "informal"`
  added to the register map of both `docs/translation.config.json`.

## In progress
- Re-review of all existing pt units (both sites were already at 100% coverage).
  Order: UI, then support/privacy/terms, then guides by GSC impressions (pages-3m.tsv).

## Next
- Road trips, K legacy pages, `consent`/`article`/`tools` namespaces and `<a data-guide>` markup once
  the foundation milestones merge to main (wait for the orchestrator's message).

## Notes for the orchestrator
- The app's `pt` localisation (`Localizable.xcstrings`) is Brazilian Portuguese with several
  mistranslations ("Gostou" for Liked, "Alimentado" for Powered, "Olhe ao redor" for Look Around,
  "Alfinete caído" for Dropped pin). Portugal users see it, since iOS falls back from pt-PT to pt.
  The website uses pt-PT labels close to the app's (see the style guide §2.3).
- KiwiCamping App Store pt-PT metadata is a byte copy of pt-BR (`Planejador`, `banheiros`); the
  AussieCamps pt-PT subtitle says "Mapa offline e roteiro", which breaks the no-offline-map rule.
- English `ui.metaKeywords` on both sites contains "offline camping map"; the pt value avoids it.
