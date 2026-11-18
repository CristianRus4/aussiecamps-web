# The extra place pages on Cloudflare

Every place in the app has a page. The 2,435 full listings are built and served by GitHub Pages like the
rest of the site. The other ~19,300 places (rest areas, dump points, water, toilets, stays, tours,
activities, closed and thin places) don't fit in GitHub Pages' 1 GB, so they are served by a Cloudflare
Worker on the free plan, `aussiecamps-places` (places-worker/).

- **Same template.** `npm run places:worker` renders them with components/places/place-page.tsx into the
  shell of an exported place page (scripts/export-place-pages.tsx `--out worker-dist`), after the Pages
  export. They load the site's scripts and fonts from aussiecamps.app like every page, but their stylesheet is
  the bucket's own copy at `/places/_assets/<file>.css` (scripts/r2-stylesheets.ts): CI fills R2 before GitHub
  Pages has deployed the same build, so a link to that build's `/assets/` CSS would load nothing for 10–20
  minutes. The sync uploads `places/_assets/` first and keeps a dropped stylesheet a week. noindex, in no
  sitemap, not in IndexNow.
- **Routing.** The Worker answers `/places/<state>/<slug>/` for those pages from the R2 bucket (a slash-less
  path gets a 301 to the slash); any other path passes through to GitHub Pages unchanged.
- **Deploy.** pages.yml renders and deploys the Worker in the same build as the Pages artifact, so its
  pages always carry the CSS of the build that is going live. It uses the repository secrets
  `CLOUDFLARE_API_TOKEN` (Workers Scripts, Workers Routes and R2 edit) and `CLOUDFLARE_ACCOUNT_ID`; without the
  token the step is skipped.
- **Free plan.** R2: 10 GB storage and no file limit (about 881 MB used). Workers: 100,000 requests a day;
  every `/places/*` request runs the Worker.

## Cutover (14 Nov 2026)

The domain's apex `A` records are proxied through Cloudflare (orange cloud) and SSL/TLS is Full; `www`
stays DNS only (GitHub redirects it). The Worker runs on the route `aussiecamps.app/places/*`
(places-worker/wrangler.jsonc), so every deploy keeps it. Test address:
`https://aussiecamps-places.cristianrus.workers.dev/places/…`, which passes any other path through to aussiecamps.app.

- A slash-less path redirects to its slash with a 307 from the Worker (GitHub Pages answers 301): same
  page, and these pages are noindex.
- Cloudflare's Email Address Obfuscation (Scrape Shield) is on for the zone: on proxied pages the footer's
  mailto link becomes a `/cdn-cgi/l/email-protection` link decoded by a small script. Turn it off in the
  dashboard to serve the pages byte for byte as GitHub Pages does.

Rollback: remove the route in places-worker/wrangler.jsonc and deploy (the extra pages then 404,
everything else is unaffected), or set the `A` records back to DNS only.

## R2 (14 Nov 2026)

The pages are objects in the R2 bucket `aussiecamps-places` (free: 10 GB, no file limit), bound to the Worker
as PLACES. CI renders them with `PLACES_R2=1`, and scripts/sync-places-r2.mjs uploads only the pages whose
MD5 changed (and deletes removed ones) over R2's S3 endpoint, with keys derived from CLOUDFLARE_API_TOKEN.
The Worker answers `/places/<state>/<slug>/` from the bucket (a slash-less path gets a 301), and passes
everything else through to GitHub Pages.

## Live trip and collection links (15 Nov 2026)

The app's "Send link" publishes a trip or a collection to a page that follows later changes:
`https://aussiecamps.app/trip/<id>` or `/collection/<id>`. The same Worker runs the API and the pages on the
routes `/api/links/*`, `/trip/*` and `/collection/*` (places-worker/wrangler.jsonc). The old
`/trip/#<payload>` links are untouched: anything under `/trip/` or `/collection/` that isn't a 12-character id
passes through to GitHub Pages.

**API.** `id` is 12 letters or digits; the token is 43 base64url characters the app makes and keeps.

| Request | Answer |
|---|---|
| `PUT /api/links/<id>`, `Authorization: Bearer <token>`, JSON body ≤ 64 KB | 200 `{"url":"https://aussiecamps.app/trip/<id>"}` (or `/collection/<id>`); 400 `{"error":"…"}` for a bad body or id, 401 no token, 403 another token, 413 too big |
| `DELETE /api/links/<id>`, same token | 204; the page then answers 410 "This link was removed", and a later PUT with the same token restores it |
| `GET /api/links/<id>` | the stored link, `no-store`; 404 unknown, 410 removed |
| `GET /api/links/stats/<yyyy-mm-dd>` | that UTC day's totals: `writes`, `creates`, `removes`, `capped`, `clients` (counts only) |
| anything under `/api/links/<id>/` | 404 |

- The first PUT claims the id: it stores the SHA-256 of the token with the link, as a conditional create, so
  of two racing creators only one wins. Later PUTs and DELETEs must bring the same token.
- Body: trip `{"v":1,"kind":"trip","n","sym","col","sd","ed","dist","dur","u","s":[{"t","id","la","lo","d"}]}` (≤ 300
  stops), collection `{"v":1,"kind":"collection","n","sym","col","u","p":[{"t","id","la","lo"}]}` (≤ 500
  places). Unknown keys are refused; every limit is in places-worker/src/validate.js. A trip's optional `dist`
  is its total driving distance in metres (a finite number, 0–20,000,000) and `dur` its total driving time in
  seconds (0–10,000,000). `col` (6 hex digits) and `sym` (an SF Symbol name) are accepted and stored for the
  app; the page doesn't use them and always shows the site's own green.
- Rate limits per client (an IPv4 address, or an IPv6 /64): 30 writes and 300 reads (API and pages) a minute, then 429 with `Retry-After: 60`.
  Other methods get 405.
  Each site has its own counters (rate-limit namespace ids: AussieCamps 1001 and 1002, KiwiCamping 2001 and
  2002; both sites are in one Cloudflare account). See "Write limits" for the daily caps.
- Storage: the R2 bucket `aussiecamps-links` (binding LINKS), objects `links/<id>.json`. pages.yml creates
  the bucket if it is missing; nothing in the build ever syncs or empties it.

**Pages.** The Worker fills the shell `shells/link.html` (app/link-shell/page.tsx, copied by
`npm run links:assets -- --out worker-dist` after the place export) with the link's name, stats (a trip's
dates, stops, distance and driving time when the app sent them; a collection's places), map and list, and its
own title, description, Open Graph tags and canonical; noindex. `og:image` and `twitter:image` are always the
site's own image (`homeOgImage`), as for a shared pin. The 404 and 410 pages keep Open in app (it opens the app
itself) and a line linking to the contact address. Each stop with an app place id shows
its place card (`cards/<encodeURIComponent(id)>.json`, same script): name, photo, type line, rating or fee,
linking to its place page. Pins and addresses are plain rows. Both live in the places bucket, so the sync
must carry them. Pages are cached for 60 seconds with an ETag.
Only the first 100 distinct ids in the app's place-id format (`SITE.placeId`) are looked up, and each card
read goes through the data centre's cache for an hour (missing cards too), so repeat views cost no R2 reads.
The page sends only the origin as referrer, and analytics reports `/trip/` or `/collection/` without the id:
the id is the link's only key.

Local test: `npx wrangler dev --config places-worker/wrangler.jsonc --compatibility-date 2026-05-22` (the
local runtime may be older than the config's date), after putting the shell and some cards into the local
bucket with `npx wrangler r2 object put aussiecamps-places/<key> --file <file> --local`.

## Taking a page down (16 Nov 2026)

Every live link's page ends with a small **Report** link: a mail to support@cntxtlabs.co with the page's
address in the subject. To take a page down:

1. Read the report and open the page (`https://aussiecamps.app/trip/<id>` or `/collection/<id>`).
2. GitHub → Actions → **Links admin** → Run workflow, action `remove`, id = the 12 letters or digits after
   `/trip/` or `/collection/`. Or locally, with the Cloudflare secrets in the environment:
   `CLOUDFLARE_API_TOKEN=… CLOUDFLARE_ACCOUNT_ID=… node scripts/remove-link.mjs <id>`.
3. The page and `GET /api/links/<id>` answer 410 "This link was removed" within a minute (the page's cache).

It leaves the same tombstone as the owner's DELETE plus `b: "1"`: the owner's app can't put the page back (its
PUT answers 410). Undo by hand only: in the Cloudflare dashboard, delete `links/<id>.json` from `aussiecamps-links`; the
owner's next change then publishes it again. Action `report` lists what the bucket holds, including anything
left under `images/`.

## Write limits (16 Nov 2026)

Anyone can call the API, and the first PUT to an unused id claims it, so writes are limited three ways:

- Per minute, per client: 30 writes, 300 reads (above).
- Per UTC day, per client (`counters/<day>/<hash of the address>.json`): 300 writes and 50 new links. The app
  sends a link a few seconds after each change and nothing while it is unchanged, so one person editing all day
  stays far below both. Over either: 429 until midnight UTC.
- The day's totals (`stats/<day>.json`, `GET /api/links/stats/<day>`). `node scripts/link-stats.mjs [day]`
  prints yesterday's and, above 2,000 writes, 200 new links or 20 capped requests, raises the Ops banner
  "Check unusual AussieCamps link traffic…" and exits 2. It belongs in the daily morning task (Links admin → `stats`
  runs it on GitHub). The totals are read, add, write: two writes at once can lose a count.

pages.yml adds R2 lifecycle rules so counters go after 2 days and totals after 400.

**Later, with the app:** App Attest on the first PUT. The app would ask DeviceCheck's `DCAppAttestService` for a
key and an attestation once per install, send them with the first PUT of a new id, and the Worker would verify
the attestation against Apple's root (and keep the key's public key with the link, so later PUTs can be
asserted too). A website-only check can't do it: the app has to produce the attestation.

## The page's language (16 Nov 2026)

The page's own words (its stats, the headings and messages of a missing or removed link, the contact line and
Report) follow the visitor's `Accept-Language`, in the 28 languages the site has, falling back to English
(places-worker/src/labels.js; machine-translated, not reviewed by a person). Dates and numbers use the language's
own format, and distances are in miles for visitors whose first locale is in the US, the UK, Liberia or Myanmar.
The rest of the page (header, footer, Open in app) is the English shell. Answers carry `Vary: Accept-Language`
and an ETag per language and unit. The link preview's text (`og:description`) stays English.

## Expiry: not yet (16 Nov 2026)

Pages don't expire. Expiring links not updated for 12 months would delete pages people still use: the app sends a
link only when its content changes (`CampingPublicLink.publish`: an unchanged payload's hash matches the record's
and nothing is sent), so an unchanged trip is never written again. Before an expiry rule is added, the app must
write each link again when its last successful PUT is older than about 3 months, even unchanged (keep the date of
the last PUT with the record). Then a lifecycle rule on `links/` with a 12-month age can go in pages.yml.

## The listings by type (18 Nov 2026)

Every place page, full or extra, is reachable from `/places/`: the state page's **By type** section links a
listing per type, `/places/<state>/<listing>/` (for example `/places/victoria/rest-areas/`), and the listing
links every place of its types in that state, A to Z, with the map and the state page's search. 77 listings
cover all 22,450 place pages; Norfolk Island, which has only stays, has a small noindex state page so it is
reachable too. The dump point and rest area hubs end their list with "All dump points in <state>" (English on
the translated hubs too, as the footer does).

- **One place to change:** lib/place-directory.ts. It names each listing, the app types it holds, and its
  `indexed` switch. A new app type fails the build until someone checks its source and licence and adds it to a
  listing (or to `unlisted`).
- **Search engines:** only dump points are on. A dump point listing is indexable when it has at least one
  indexable place; a dump point page is indexable when it has a name, a locality, coordinates, at least one
  facility other than "Dump Point" or a fee, and is not closed (`hasEnoughFacts`): 1,352 of 1,393, and 7 state listings (the ACT's one dump point falls short). Those 1,359
  pages are in the English sitemap (lib/sitemaps.ts) and get the place's structured data; they are not sent to
  IndexNow. Everything else stays noindex and out of the sitemaps.
- **Build:** `npm run prebuild` runs scripts/build-place-directory.ts, which writes the committed
  lib/data/place-directory.json (each state's listings and the indexable Worker paths: public URLs only) and
  fails if a listing's slug is also a place's slug. scripts/export-place-pages.tsx renders the listings into the
  shell of an exported state page, after proving the state page rebuilt there matches the export, and fails if
  the indexable pages differ from that file or any place page is in no listing. scripts/audit-seo.mjs accepts
  the Worker's indexable URLs in the sitemap and, with `WORKER_DIST` (or worker-dist) present, checks each
  Worker page's robots against it.
- **Routing:** none changed. The Worker already answers `/places/<state>/<slug>/` from R2, so a listing is just
  one more object, `places/<state>/<listing>/index.html`.
- **Free plan:** 77 more R2 objects, about 8 MB (the largest, Western Australia's 3,108 rest areas, is 770 KB).
  Storage stays near 900 MB of the 10 GB. No change to Worker requests per page view. GitHub Pages gains one
  small page (Norfolk Island's state page).
