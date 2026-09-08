# AussieCamps website documentation

This directory is the operating knowledge base for `aussiecamps.app`. Existing
briefs, localization guidance, evidence records, and asset manifests remain
authoritative within their scopes; the new documents connect them into a single
site and release model.

## Start here

| Work | Read |
| --- | --- |
| Product, routes, rendering, content model, or deployment architecture | [Site blueprint](SITE_BLUEPRINT.md) |
| Claims, editorial changes, releases, or incidents | [Marketing and operations](MARKETING_AND_OPERATIONS.md) |
| Public facts, audience, tone, and page requirements | [Website brief](WEBSITE-BRIEF.md) |
| Translation behavior | [Localization](LOCALIZATION.md) and [translation workflow](TRANSLATIONS.md) |
| Assets and provenance | [Asset manifest](ASSET-MANIFEST.md) and the image-source records in this directory |
| App and shared Camping architecture | [Camping documentation](../../../Apps/Camping/docs/README.md) |

## Identity

- Public product name: **AussieCamps**
- Canonical domain: `https://aussiecamps.app`
- App Store ID: `6801098680`
- Source language: Australian English
- Hosting: static export on GitHub Pages
- App source: `Apps/Camping/Aussie` with shared code in `Apps/Camping/Packages`

The Xcode target and internal regional configuration currently use
`AussieCamping`, while public website and paywall copy use `AussieCamps`. This is
an unresolved naming decision, not permission to silently rename either side.
Public site copy follows the current website brief until the product owner
resolves the system-wide identity.

All Markdown under `docs/` is included by the Nexus manifest and syncs after a
commit is pushed to main.
