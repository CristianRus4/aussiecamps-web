# AussieCamps marketing and operations

## Public-message rules

Write in direct, calm Australian English with real places, roads, conditions,
and tradeoffs. Avoid unsupported absolutes, generic SEO filler, invented
ratings, unverified prices, guaranteed bookings, and claims of exhaustive
coverage or completely offline maps.

The public product name is currently **AussieCamps**, per the website brief.
Engineering names the app target **AussieCamping**. Do not propagate either name
across the boundary until the open identity decision is resolved and app,
website, App Store, bundle-facing metadata, Nexus, and RevenueCat copy can be
changed deliberately.

## Editorial operations

- Use official state/territory transport, parks, fire, emergency, biosecurity,
  local-government, land-manager, and operator sources for changing facts.
- Review rules and safety content at least every six months and immediately
  after relevant legal, booking, road, fire, or agency changes.
- Date price and driving-cost assumptions; derive currency values mechanically
  from documented AUD inputs.
- Keep articles distinct and useful. Passing a similarity threshold does not
  establish editorial quality.
- Use the documented local WebP assets and preserve source/licence records.
- Replace the acknowledged KiwiCamping placeholder product screenshots with
  verified Australian app captures before treating the marketing surface as
  final.

## Claim-change checklist

1. Verify the feature or count in `Apps/Camping`, including region, free/premium
   boundary, connectivity requirement, and availability limits.
2. Find duplicates in copy, metadata, FAQ, schema, guides, `llms.txt`, QR/App
   Store elements, and translations.
3. Update the website brief and evidence records where appropriate.
4. Run the full check and review source and localized rendered pages.
5. Coordinate publication with the relevant app release.

## Release gate

```bash
npm ci
npm run check
npm run build:pages
```

Serve `pages-dist` locally, then verify:

- homepage, guide index, one article per category, tools, support, privacy, terms;
- mobile/desktop layout, keyboard use, focus, contrast, headings, and assets;
- App Store ID `6801098680`, QR code, smart banner, schema URLs, and `/download`;
- canonical, sitemap, robots, language alternates, social metadata, and JSON-LD;
- representative locale pages and English-only road-trip behavior;
- no placeholder New Zealand imagery, internal notes, missing attribution,
  unsubstantiated testimonials, or stale product counts.

## Deployment and rollback

Pushing to `main` triggers the Pages workflow with Node 22, locked dependency
installation, the static export, and deployment at the custom-domain root.
Afterward, verify the workflow, certificate, homepage, a deep article, localized
routes, and static assets.

Rollback by reverting the faulty commit and allowing Pages to deploy the last
known-good source. Remove or correct inaccurate safety/legal material urgently,
then audit related pages and translations.

## Nexus

The Nexus docs workflow is independent of Pages. It ingests the root README and
all `docs/**/*.md` after a commit is pushed. A green Pages deployment does not
prove the documentation sync succeeded, and vice versa.
