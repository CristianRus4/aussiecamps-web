# AussieCamps website

Product and search website for AussieCamps, the iPhone app for finding places to camp, saving collections and planning road trips across Australia.

## Run locally

```bash
npm install
npm run dev
```

The local site opens at `http://localhost:3000`.

## Verify

```bash
npm run check
```

This builds the site, runs rendered-route tests and audits the content and image manifest.

## Add images

The code already links every required product and article image. Add the matching `.webp` files under `public/images`. Article image names match their URL slug.

See `docs/ASSET-MANIFEST.md` for dimensions, crops and naming rules.

## Content

All 52 articles live in `lib/site.ts`. Each entry controls its URL, metadata, category, image filename, introduction, sections, places and official sources.

See `docs/WEBSITE-BRIEF.md` before changing public copy, structure or product claims.
