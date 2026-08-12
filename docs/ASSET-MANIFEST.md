# Image asset manifest

Add files under `public/images`. Keep the exact filenames so no code change is needed.

## Product images

| File | Use | Recommended crop |
| --- | --- | --- |
| `aussiecamps-app-icon.webp` | Header, favicon and Apple touch icon | 1024 x 1024 square |
| `aussie-hero.webp` | Homepage hero product screenshot | 1010 x 1515 portrait |
| `aussie-feature-1.webp` | Explore map screenshot | 1010 x 1515 portrait |
| `aussie-feature-2.webp` | Place details screenshot | 1010 x 1515 portrait |
| `aussie-feature-3.webp` | Trip planner screenshot | 1010 x 1515 portrait |
| `aussie-download.webp` | Final download section | 1600 x 1400 landscape or square |
| `aussie-qr.webp` | App Store QR | 600 x 600 square |
| `aussie-og.webp` | Social share preview | 1200 x 630 landscape |

Use clean screenshots or real photography. Do not add text inside product screenshots unless it is part of the actual app interface.

## Article images

Every article uses:

`public/images/articles/<article-slug>.webp`

Example:

`public/images/articles/perth-to-broome-road-trip.webp`

The required slug list is audited by `npm run assets:check`. Run it to see every missing filename.

Recommended article size: 1600 x 1000 or larger, landscape, WebP, roughly 200 KB to 450 KB after compression.

Choose a genuinely different image for every article. The subject should match the route, state, rule or app feature. Avoid generic tent photos repeated across multiple pages.

## Image quality rules

- Use real travel photography for route and camping pages.
- Use real app screenshots for product and app-guide pages.
- Obtain the right to publish every image and retain attribution records where the licence requires them.
- Remove location metadata from personal photos if it creates a privacy or conservation risk.
- Keep important subjects away from the extreme edges for mobile crops.
- Do not add watermarks, AI-generated artwork or illustrated device mockups.
