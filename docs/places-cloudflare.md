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

- The first PUT claims the id: it stores the SHA-256 of the token with the link, as a conditional create, so
  of two racing creators only one wins. Later PUTs and DELETEs must bring the same token.
- Body: trip `{"v":1,"kind":"trip","n","sym","col","sd","ed","dist","dur","u","s":[{"t","id","la","lo","d"}]}` (≤ 300
  stops), collection `{"v":1,"kind":"collection","n","sym","col","u","p":[{"t","id","la","lo"}]}` (≤ 500
  places). Unknown keys are refused; every limit is in places-worker/src/validate.js. A trip's optional `dist`
  is its total driving distance in metres (a finite number, 0–20,000,000) and `dur` its total driving time in
  seconds (0–10,000,000). `col` is 6 hex digits (the app's colours: 30A46C, the default, 3478F6 0FA5B5 8B5CF6
  EC4899 EF4444 F59E0B 8B6B4A) and `sym` an SF Symbol name; the page draws each symbol with the closest lucide
  icon (places-worker/src/symbols.js, made by `npm run links:symbols`), and an unknown one as the default (car.fill
  for a trip, folder.fill for a collection).
- Rate limits per client (an IPv4 address, or an IPv6 /64): 30 writes and 300 reads (API and pages) a minute, then 429 with `Retry-After: 60`.
  Other methods get 405.
- Storage: the R2 bucket `aussiecamps-links` (binding LINKS), objects `links/<id>.json`. pages.yml creates
  the bucket if it is missing; nothing in the build ever syncs or empties it.

**Pages.** The Worker fills the shell `shells/link.html` (app/link-shell/page.tsx, copied by
`npm run links:assets -- --out worker-dist` after the place export) with the link's colour, badge (its symbol on
its colour), name, stats (a trip's dates, stops, distance and driving time when the app sent them; a
collection's places), map and list, and its own title, description, Open Graph tags and canonical; noindex. The
404 and 410 pages keep Open in app (it opens the app itself) and a line linking to the contact address. Each stop with an app place id shows
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
