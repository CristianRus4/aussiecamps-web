# AussieCamps website brief

## Purpose

AussieCamps helps travellers find suitable places to stay across Australia, understand what is available, save useful places and turn them into a road trip.

The website has two jobs:

1. Present the product clearly enough that a traveller wants to download it.
2. Answer useful camping and road-trip questions well enough to earn search traffic and introduce the app naturally.

## Primary audiences

- International travellers aged roughly 18 to 35 planning a campervan, car or backpacking trip.
- Australian and New Zealand weekend campers.
- Caravan and motorhome travellers who care about access, services and route distance.
- Families comparing holiday parks, campgrounds and roofed stays.
- Travellers from the United Kingdom, Germany, France, the Netherlands, Spain, Italy and other western European markets.

## Product facts

- 74,000+ bundled Australian places.
- 4,000+ accommodation options.
- Core place details remain available offline.
- Live maps, weather, routing and external websites can require reception.
- Nineteen place categories, including campgrounds, caravan parks, roofed accommodation, roadside rest areas, dump points, potable water, experiences and useful stops.
- Explore with map and list views, search, sorting and detailed filters.
- Save Liked, Starred, Visited and Want to Visit places.
- Create custom collections with names, icons and notes.
- Build trips with ordered stops, dates, notes, route distance, visited progress and packing tasks.
- Check place details, fee reports, features, weather and nearby useful stops.
- Use trip, collection and nearby-place widgets.
- Use place-based road-trip routes inside the app.

Do not claim that live map tiles are fully available offline. Do not claim every Australian campsite is included. Do not invent App Store ratings, prices, booking availability or review counts.

## Brand

Product name: `AussieCamps`

Never write Aussie Camping, AussieCamping or Aussie Camps in public-facing copy.

Core colours:

- Eucalyptus: `#7F9B44`
- Deep bush: `#1E2B18`
- Offer green: `#A6BD68`
- Mid bush: `#3B572B`
- Warm cream: `#F4F1E8`

Use one sans-serif family throughout. Do not introduce serif display type, italic display type or hand-drawn interface illustrations. Interface icons come from the installed Lucide library.

Product screenshots and travel photos are external assets linked by filename. Do not generate replacement artwork.

## Tone

Write like an experienced Australian road-trip companion:

- Direct, calm and practical.
- Specific about places, roads, conditions and tradeoffs.
- Warm without trying to sound quirky.
- Safety-aware without sounding frightened.
- Honest about uncertainty and live conditions.

Avoid:

- Copy that explains how the website, article, schema or app data model is assembled.
- Phrases such as “this guide,” “in this article,” “the website,” “place-linked,” “ready to save” or “names practical places.”
- Generic SEO filler such as “a realistic itinerary,” “everything you need to know” or “the ultimate guide.”
- Em dashes.
- Unverified superlatives and absolute claims.
- Developer notes, client notes, placeholder explanations or launch caveats in public copy.

## Site structure

### Home

1. Product hero and App Store call to action.
2. Place coverage strip.
3. Find, inspect and plan workflow.
4. Feature presentation with screenshot slots.
5. Trip planner section.
6. Featured Australian routes.
7. Audience use cases.
8. Five paywall testimonials.
9. Trust and responsible-use principles.
10. Product FAQ.
11. Final download section and QR.

### Guides

The `/guides` page presents the 20 road-trip routes. Each route has its own image and named places that can later match place records inside the app.

### Guides

The `/guides` page contains 52 long-form pages across:

- Road trips
- Camping guides
- Rules and safety
- Trip planning
- App guides

Each page has its own title, description, local image filename, introduction, topic-specific sections, named places, related reading and download call to action.

### Support and legal

- `/support`
- `/privacy`
- `/terms`

## Search and crawler system

- Route-specific metadata and canonical URLs.
- Open Graph and X social metadata.
- `SoftwareApplication`, `WebSite`, `FAQPage` and `Article` structured data.
- Generated sitemap with every article.
- Robots file for major search and AI crawlers.
- `llms.txt` with product facts and canonical article URLs.
- Strong internal links from home to guide categories, related articles and the app.
- Server-rendered article content with no client-only dependency.

## Content maintenance

- Review rules and safety pages at least every six months.
- Recheck official source links whenever a state booking system changes.
- Update the bundled-place count when the app database changes.
- Replace a route image without changing its filename.
- Add a new article as one new object in `lib/site.ts`.
- Use only public claims supported by the current app.
- Keep the five website testimonials identical to the app paywall until verified customer reviews replace both surfaces together.

## App Store handoff

The temporary App Store link uses the txtpod product URL requested for the client preview. At launch, replace only `APP_STORE_URL` in `lib/site.ts` and generate a matching QR at `public/images/aussie-qr.webp`.
