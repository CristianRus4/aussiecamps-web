/**
 * Exports the place pages' data (one page per campground, holiday park and park) from the AussieCamps
 * app database.
 *
 *   npm run places:export    (CAMPING_APP_DATA defaults to /Users/cristian/Developer/Apps/AppStore/Camping)
 *
 * What it writes:
 *   lib/data/places.json.enc       committed. AES-256-GCM with PLACES_KEY (the environment, or the macOS
 *                                  keychain item "camping-places-key", account "aussiecamps-web").
 *   lib/data/places.json           the plain copy the build reads. Gitignored: this repo is public, so the
 *                                  readable data never leaves this Mac or CI (scripts/decrypt-places.mjs).
 *   lib/data/places.photos.json    gitignored cache of which photo links load, and how wide they are.
 *   lib/data/place-stubs.json(.enc)  the same pair for the small pages (scripts/build-place-stubs.mjs),
 *                                  gzipped before it is encrypted.
 *   place-pages.json               every app place id to its page path, into the app's bundle
 *                                  (scripts/place-links.mjs; `npm run places:links` writes it alone).
 *
 * Pages load up to three photos per place straight from their source, as the app does (Cristian, 12 Nov
 * 2026), checked here so a dead link never reaches a page; the widest comes first.
 *
 * What a page may show was Cristian's call on 12 Nov 2026: photos and a description excerpt from every
 * parks agency, everything from the BookEasy partner feed (our agent agreement), each with a small
 * credit. Pages show part of the description and amenities and send readers to the app for the rest, so
 * the export keeps only that part: the full text and amenity lists never enter the data.
 *
 * Every place the app lists (every row of the database the app ships, Aussie/Resources/australia_db.sqlite,
 * with or without coordinates: the app opens any place by id) gets a page, so the app can share any of them
 * as a link that opens in the app (Cristian, 14 Nov 2026):
 *   - a full page (the React template, indexed) for an open campground, park, reserve, walking track,
 *     marine park or historic site from a parks agency with a photo that loads and a description of 80
 *     characters or more, and for a live holiday park on our BookEasy agent link;
 *   - a small plain page (scripts/build-place-stubs.mjs: noindex, out of the sitemaps) for everything
 *     else: rest areas, dump points, water, toilets, stays, tours, activities, closed places and thin pages.
 * A place keeps the URL it had in the last export, and a place that had a full page always keeps one.
 *
 * The same place can come from two sources: only the richer record gets a page, and the other record's id
 * is kept in its `aliases`, so place-pages.json sends both ids to the one page. Like
 * scripts/export-app-data.mjs, the database is copied to a temporary directory and only the copy is
 * opened, read-only.
 */
import { createCipheriv, randomBytes } from "node:crypto";
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";
import { gzipSync } from "node:zlib";
import sharp from "sharp";
import { placePagesOut, writePlacePages } from "./place-links.mjs";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const appRepo = resolve(process.env.CAMPING_APP_DATA ?? "/Users/cristian/Developer/Apps/AppStore/Camping");
/** The database the app ships (Aussie/Resources, in the AussieCamping target), so every place it lists has a page. */
const sourcePath = resolve(appRepo, "Aussie/Resources/australia_db.sqlite");
const plainPath = resolve(repo, "lib/data/places.json");
const encryptedPath = resolve(repo, "lib/data/places.json.enc");
const probePath = resolve(repo, "lib/data/places.photos.json");
const probes = existsSync(probePath) ? JSON.parse(readFileSync(probePath, "utf8")) : {};
const stubsPath = resolve(repo, "lib/data/place-stubs.json");
const stubsEncryptedPath = resolve(repo, "lib/data/place-stubs.json.enc");
/** Each place's page in the last export (`<state>/<slug>` by id), so a place keeps its URL. */
const pathsIn = (file) => new Map(existsSync(file) ? JSON.parse(readFileSync(file, "utf8")).places.map((place) => [place.id, `${place.stateSlug}/${place.slug}`]) : []);
const previous = pathsIn(plainPath);
const previousSmall = pathsIn(stubsPath);

const TYPES = ["campground", "holiday_park", "national_park", "state_park", "regional_park", "recreation_area", "conservation_area",
  "nature_reserve", "wildlife_reserve", "scenic_reserve", "marine_park", "aboriginal_area", "historic_site", "walking_track"];
/** Holiday parks on our BookEasy agent link: the only booking links a page carries. */
const BOOKEASY_AGENT = /^https:\/\/book\.bookeasy\.com\/agent\/cntxt-limited-australia-camping\//;
const PHOTOS = 5;
const EXCERPT = 300;
const SHOWN_AMENITIES = 6;
const MIN_DESCRIPTION = 80;
const MIN_PHOTO_WIDTH = 560;
const CONCURRENCY = 12;

const STATES = {
  ACT: { slug: "act", name: "ACT" }, NSW: { slug: "new-south-wales", name: "New South Wales" },
  NT: { slug: "northern-territory", name: "Northern Territory" }, QLD: { slug: "queensland", name: "Queensland" },
  SA: { slug: "south-australia", name: "South Australia" }, TAS: { slug: "tasmania", name: "Tasmania" },
  VIC: { slug: "victoria", name: "Victoria" }, WA: { slug: "western-australia", name: "Western Australia" },
  NI: { slug: "norfolk-island", name: "Norfolk Island" },
};
/** For a place with no state, no coordinates and no locality the database can place. */
const NOWHERE = { slug: "australia", name: "Australia" };

/** The credit line under each page's photos and description: short, with the licence where there is one. */
const CREDITS = {
  "NSW National Parks and Wildlife Service": "NSW NPWS, CC BY 4.0",
  "Parks Victoria": "Parks Victoria, CC BY 4.0",
  "Victoria DEECA": "DEECA Victoria",
  "Department of Biodiversity, Conservation and Attractions": "DBCA WA",
  "Queensland Parks and Wildlife Service": "QPWS",
  "Tasmania Parks and Wildlife Service": "Tasmania PWS",
  "Department for Environment and Water": "DEW SA",
  "National Parks and Wildlife Service South Australia": "NPWS SA",
  "Northern Territory Parks and Wildlife": "NT Parks and Wildlife",
  "Parks and Wildlife Commission of the Northern Territory": "NT Parks and Wildlife",
  "ACT Parks and Conservation Service": "ACT Parks",
  BookEasy: "the operator, via BookEasy",
};

/** The key from the environment (CI) or the macOS keychain; undefined when neither has it. */
export function placesKey(account = "aussiecamps-web") {
  let value = process.env.PLACES_KEY;
  if (!value) {
    try { value = execFileSync("security", ["find-generic-password", "-s", "camping-places-key", "-a", account, "-w"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); } catch { return undefined; }
  }
  const key = Buffer.from(value, "base64");
  if (key.length !== 32) throw new Error("PLACES_KEY must be 32 bytes, base64");
  return key;
}

/** Like encrypt(), of the gzipped text: the small pages' data is several megabytes of repetitive JSON. */
export function encryptGzip(text, key) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  const data = Buffer.concat([cipher.update(gzipSync(text, { level: 9 })), cipher.final()]);
  return JSON.stringify({ v: 1, gzip: true, iv: iv.toString("base64"), tag: cipher.getAuthTag().toString("base64"), data: data.toString("base64") });
}

export function encrypt(text, key) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  const data = Buffer.concat([cipher.update(text, "utf8"), cipher.final()]);
  return JSON.stringify({ v: 1, iv: iv.toString("base64"), tag: cipher.getAuthTag().toString("base64"), data: data.toString("base64") });
}

const slugify = (value) => value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/&/g, " and ").replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const clean = (value) => (value ?? "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
/** The first sentences that fit, never cut mid-sentence when a sentence ends in reach. */
function excerpt(text, limit) {
  if (text.length <= limit) return { text, more: false };
  const cut = text.slice(0, limit);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  return { text: end > limit * 0.4 ? cut.slice(0, end + 1) : `${cut.slice(0, cut.lastIndexOf(" "))}…`, more: true };
}
/** "1400", "14.00" and "14:00" all become "2:00 pm"; anything else is dropped. */
function clock(value) {
  const match = /^(\d{1,2})[:.]?(\d{2})$/.exec((value ?? "").trim());
  if (!match) return null;
  const hour = Number(match[1]), minute = match[2];
  if (hour > 23) return null;
  return `${hour % 12 || 12}:${minute} ${hour < 12 ? "am" : "pm"}`;
}
/** The access fields are free text from several sources: only the plain, recognisable answers are kept. */
const roadOf = (text) => /mixture|sealed and unsealed/i.test(text ?? "") ? "mixed" : /unsealed/i.test(text ?? "") ? "unsealed" : /sealed/i.test(text ?? "") ? "sealed" : null;
const vehicleOf = (text) => /walk-in/i.test(text ?? "") ? "walk-in" : /high clearance 4wd/i.test(text ?? "") ? "high-clearance-4wd" : /4wd/i.test(text ?? "") ? "4wd" : /2wd/i.test(text ?? "") ? "2wd" : null;
const weatherOf = (text) => /dry weather only/i.test(text ?? "") ? "dry-only" : /4wd required in wet/i.test(text ?? "") ? "4wd-when-wet" : /all weather/i.test(text ?? "") ? "all-weather" : /snow chains/i.test(text ?? "") ? "snow-chains" : null;
const km = (a, b) => {
  const rad = Math.PI / 180, dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
};

/**
 * Whether a booking link still opens the park's booking page: BookEasy sends links of operators it no
 * longer lists to its own sales page, and such a park gets no Book now button. Cached like the photos.
 */
async function bookable(url) {
  const key = `booking:${url}`;
  if (key in probes) return probes[key] === 1;
  let ok = 0;
  try {
    const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (Macintosh) camping-site-builder" }, signal: AbortSignal.timeout(25000) });
    ok = response.ok && !/solutions-for|\/operators\/?$/.test(response.url) ? 1 : 0;
  } catch {
    ok = 0;
  }
  probes[key] = ok;
  return ok === 1;
}

/**
 * Whether a photo still loads, and how wide it is, from its first 64 KB: pages load photos straight
 * from their source, like the app, so a dead link would show as a broken image. Answers are cached
 * between runs in a gitignored file.
 */
async function probe(url) {
  if (url in probes) return probes[url];
  let width = 0;
  try {
    const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (Macintosh) camping-site-builder", range: "bytes=0-65535" }, signal: AbortSignal.timeout(15000) });
    if (response.ok && /^image\//.test(response.headers.get("content-type") ?? "image/")) {
      const head = Buffer.from(await response.arrayBuffer());
      width = (await sharp(head).metadata().catch(() => ({}))).width ?? -1;
    }
  } catch {
    width = 0;
  }
  probes[url] = width;
  return width;
}

/** Up to three photos that load and are at least 560 px wide, the widest first. */
async function photosFor(urls) {
  const found = [];
  for (const url of urls.slice(0, PHOTOS * 3)) {
    if (found.length === PHOTOS) break;
    const width = await probe(url);
    // Unknown widths (-1) are kept; photos too small to show without blurring are not.
    if (width === -1 || width >= MIN_PHOTO_WIDTH) found.push({ url, width });
  }
  return found.sort((a, b) => b.width - a.width);
}

/** Runs the jobs with at most CONCURRENCY at once, keeping the order of the input. */
async function pool(items, job) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (next < items.length) { const index = next++; results[index] = await job(items[index], index); }
  }));
  return results;
}

const temp = mkdtempSync(join(tmpdir(), "aussie-places-"));
try {
  copyFileSync(sourcePath, join(temp, "db.sqlite"));
  const db = new DatabaseSync(join(temp, "db.sqlite"), { readOnly: true });
  // Every place the app lists: every type and status, as long as it has coordinates.
  const sites = db.prepare(`SELECT s.Id, s.SiteName, s.SiteTypeId, s.SiteStatusId, s.State, s.Locality, s.Latitude, s.Longitude, s.Description,
      s.Operator, s.FeeCategory, s.ParkId, s.ParentName, s.PetsAllowed, s.NumberOfSites, s.Booking, s.BookingRequired, s.MaxVehicleLength
    FROM Site s ORDER BY s.Id`).all();
  const typeNames = new Map(db.prepare("SELECT Id, Name FROM SiteType").all().map((type) => [type.Id, type.Name]));
  // The photos the app shows, in its order (CampingPlacesDatabase.swift).
  const photos = db.prepare("SELECT Url AS url FROM Photo WHERE SiteId = ? ORDER BY IsHero DESC, SortOrder, Id");
  const amenities = db.prepare(`SELECT f.Name AS name FROM SiteFeature sf JOIN Feature f ON f.Id = sf.FeatureId JOIN FeatureGroup g ON g.Id = f.FeatureGroupId
    WHERE sf.SiteId = ? AND coalesce(f.Excluded, 0) = 0 ORDER BY g.SequenceNumber, f.Name`);
  const parks = new Map(db.prepare("SELECT Id, Name FROM Park").all().map((park) => [park.Id, park.Name]));
  const operator = db.prepare("SELECT CheckIn, CheckOut, StarRating, Active FROM BookEasyOperator WHERE SiteId = ?");
  const activities = db.prepare("SELECT DISTINCT a.Name AS name FROM SiteActivity sa JOIN Activity a ON a.Id = sa.ActivityId WHERE sa.SiteId = ? ORDER BY a.Name");
  const access = db.prepare("SELECT RoadQuality AS road, VehicleAccess AS vehicle, WeatherRestrictions AS weather FROM SiteAccess WHERE SiteId = ?");

  // A place with no state (or one outside the eight) takes the state of its nearest neighbour that has one;
  // without coordinates, the state other places in its locality have.
  const hasPoint = (site) => site.Latitude !== null && site.Longitude !== null;
  const located = sites.filter((site) => STATES[site.State] && hasPoint(site));
  const localityStates = new Map();
  for (const site of sites) if (STATES[site.State] && site.Locality) localityStates.set(site.Locality.toLowerCase(), localityStates.get(site.Locality.toLowerCase()) ?? site.State);
  const stateOf = (site) => STATES[site.State]
    ?? (hasPoint(site) ? STATES[located.reduce((best, other) => {
      const distance = km({ lat: site.Latitude, lng: site.Longitude }, { lat: other.Latitude, lng: other.Longitude });
      return distance < best.distance ? { site: other, distance } : best;
    }, { site: undefined, distance: Infinity }).site.State] : undefined)
    ?? STATES[localityStates.get((site.Locality ?? "").toLowerCase())]
    ?? NOWHERE;

  const candidates = [];
  const rest = [];
  for (const site of sites) {
    const state = stateOf(site);
    const credit = CREDITS[site.Operator];
    const description = clean(site.Description);
    const urls = photos.all(site.Id).map((row) => row.url).filter((url) => /^https:\/\//.test(url));
    const holidayPark = site.SiteTypeId === "holiday_park";
    const live = site.Operator === "BookEasy" ? operator.get(site.Id) : undefined;
    const list = [...new Set(amenities.all(site.Id).map((row) => row.name.trim()))];
    const route = access.get(site.Id);
    const entry = { site, state, credit, description, urls, list, route, live };
    // The camping places can have a full page; holiday parks only as a live listing on our BookEasy agent link.
    // A full page needs coordinates (its map); a place without them gets the same page, without the map.
    const camping = TYPES.includes(site.SiteTypeId) && site.SiteStatusId === 1 && credit && STATES[site.State] && hasPoint(site)
      && (!holidayPark || (live?.Active === 1 && BOOKEASY_AGENT.test(site.Booking ?? "") && urls.length > 0 && description.length >= MIN_DESCRIPTION));
    if (!camping) { rest.push(entry); continue; }
    const doing = activities.all(site.Id).map((row) => row.name.trim()).filter(Boolean);
    candidates.push({ ...entry, doing, hadPage: previous.has(site.Id), score: Math.min(description.length, 1200) + urls.length * 60 + list.length * 15 });
  }

  // The same place can come from two sources: keep the richer record of one name within 3 km (a place
  // that already has a page always wins), and send the other record's id to its page.
  candidates.sort((a, b) => Number(b.hadPage) - Number(a.hadPage) || b.score - a.score);
  const kept = [];
  for (const candidate of candidates) {
    const point = { lat: candidate.site.Latitude, lng: candidate.site.Longitude };
    const name = slugify(candidate.site.SiteName).replace(/-(campground|camping-area|camp|campsite)s?$/, "");
    const twin = kept.find((other) => other.site.SiteTypeId === candidate.site.SiteTypeId && other.name === name && km(other.point, point) < 3);
    if (twin) { twin.aliases.push(candidate.site.Id); continue; }
    kept.push({ ...candidate, name, point, aliases: [] });
  }

  // A full page needs a photo that loads and a real description; the rest get a small page.
  let done = 0;
  const probed = await pool(kept, async (entry) => {
    entry.files = await photosFor(entry.urls);
    if (++done % 500 === 0) console.log(`  ${done} of ${kept.length} places checked`);
    return entry;
  });
  const full = probed.filter((entry) => entry.files.length > 0 && entry.description.length >= MIN_DESCRIPTION);
  const small = [...probed.filter((entry) => !full.includes(entry)), ...rest.map((entry) => ({ ...entry, aliases: [] }))];

  // Slugs are unique within a state: a repeated name takes its locality, then its id. A place keeps the
  // slug it had in the last export, so no URL ever changes; full pages pick first.
  const used = new Set();
  const keep = (entry) => {
    const path = previous.get(entry.site.Id) ?? previousSmall.get(entry.site.Id);
    if (path && path.startsWith(`${entry.state.slug}/`) && !used.has(path)) { used.add(path); entry.slug = path.slice(entry.state.slug.length + 1); }
  };
  const assign = (entry) => {
    if (entry.slug) return;
    const { site, state } = entry;
    let slug = slugify(site.SiteName) || "place";
    if (used.has(`${state.slug}/${slug}`)) slug = `${slug}-${slugify(site.Locality ?? site.Id) || site.Id.toLowerCase()}`;
    if (used.has(`${state.slug}/${slug}`)) slug = `${slug}-${site.Id.toLowerCase()}`;
    used.add(`${state.slug}/${slug}`);
    entry.slug = slug;
  };
  full.forEach(keep); small.forEach(keep); full.forEach(assign); small.forEach(assign);

  const built = await pool(full, async (entry) => {
    const { site, state, slug, files } = entry;
    const holidayPark = site.SiteTypeId === "holiday_park";
    const text = holidayPark ? excerpt(entry.description, 1600) : excerpt(entry.description, EXCERPT);
    return {
      id: site.Id, slug, type: site.SiteTypeId, name: clean(site.SiteName), state: site.State, stateSlug: state.slug, stateName: state.name,
      park: site.SiteTypeId === "campground" ? (parks.get(site.ParkId) ?? clean(site.ParentName)) || null : null,
      locality: clean(site.Locality) || null,
      lat: hasPoint(site) ? Number(site.Latitude.toFixed(4)) : null, lng: hasPoint(site) ? Number(site.Longitude.toFixed(4)) : null,
      description: text.text, descriptionMore: text.more,
      amenities: holidayPark ? entry.list : entry.list.slice(0, SHOWN_AMENITIES), amenityCount: entry.list.length,
      fee: site.FeeCategory ?? null, pets: site.PetsAllowed ?? null, sites: site.NumberOfSites ?? null,
      bookingRequired: site.BookingRequired === 1 ? true : null, maxVehicleLength: site.MaxVehicleLength || null,
      activities: entry.doing.slice(0, SHOWN_AMENITIES), activityCount: entry.doing.length,
      road: roadOf(entry.route?.road), vehicle: vehicleOf(entry.route?.vehicle), weather: weatherOf(entry.route?.weather),
      photos: files.map((photo) => photo.url), heroWidth: files[0].width, photoCount: entry.urls.length,
      credit: entry.credit,
      booking: holidayPark && await bookable(site.Booking) ? site.Booking : null,
      checkIn: clock(entry.live?.CheckIn), checkOut: clock(entry.live?.CheckOut), stars: entry.live?.StarRating || null,
      ...(entry.aliases.length ? { aliases: entry.aliases } : {}),
    };
  });
  const places = built;
  writeFileSync(probePath, `${JSON.stringify(probes)}\n`);
  const published = new Set(places.flatMap((place) => place.photos));

  // The other places: the same fields as a full page, rendered by the same template (components/places/
  // place-page.tsx, through scripts/build-place-stubs.mjs) but noindex. A parks agency's or BookEasy's
  // place shows its photos and a description excerpt like a full page; other sources show facts only.
  const stubs = await pool(small, async (entry) => {
    const { site, state, credit, live } = entry;
    const holidayPark = site.SiteTypeId === "holiday_park";
    const text = credit ? excerpt(entry.description, holidayPark ? 1600 : EXCERPT) : { text: "", more: false };
    const doing = activities.all(site.Id).map((row) => row.name.trim()).filter(Boolean);
    const photoUrls = credit ? entry.urls.slice(0, PHOTOS) : [];
    return {
      id: site.Id, slug: entry.slug, type: site.SiteTypeId, typeName: typeNames.get(site.SiteTypeId) ?? "Place",
      name: clean(site.SiteName) || typeNames.get(site.SiteTypeId) || "Place", state: site.State ?? null, stateSlug: state.slug, stateName: state.name,
      park: site.SiteTypeId === "campground" ? (parks.get(site.ParkId) ?? clean(site.ParentName)) || null : null,
      locality: clean(site.Locality) || null,
      lat: hasPoint(site) ? Number(site.Latitude.toFixed(4)) : null, lng: hasPoint(site) ? Number(site.Longitude.toFixed(4)) : null,
      description: text.text, descriptionMore: text.more,
      amenities: entry.list.slice(0, holidayPark || live ? 40 : SHOWN_AMENITIES), amenityCount: entry.list.length,
      fee: site.FeeCategory || null, pets: site.PetsAllowed ?? null, sites: site.NumberOfSites ?? null,
      bookingRequired: site.BookingRequired === 1 ? true : null, maxVehicleLength: site.MaxVehicleLength || null,
      activities: doing.slice(0, SHOWN_AMENITIES), activityCount: doing.length,
      road: roadOf(entry.route?.road), vehicle: vehicleOf(entry.route?.vehicle), weather: weatherOf(entry.route?.weather),
      photos: photoUrls, heroWidth: 0, photoCount: credit ? entry.urls.length : 0,
      credit: credit ?? site.Operator ?? "",
      booking: BOOKEASY_AGENT.test(site.Booking ?? "") && live?.Active === 1 ? site.Booking : null,
      checkIn: clock(live?.CheckIn), checkOut: clock(live?.CheckOut), stars: live?.StarRating || null,
      indexable: false, ...(site.SiteStatusId === 0 ? { closed: true } : {}),
      ...(entry.aliases.length ? { aliases: entry.aliases } : {}),
    };
  });
  stubs.sort((a, b) => a.id.localeCompare(b.id));
  db.close();

  places.sort((a, b) => a.stateSlug.localeCompare(b.stateSlug) || a.name.localeCompare(b.name));
  const exportedAt = new Date().toISOString().slice(0, 10);
  const data = JSON.stringify({ exportedAt, places }, null, 1);
  const stubData = JSON.stringify({ exportedAt, places: stubs });
  writeFileSync(plainPath, `${data}\n`);
  writeFileSync(stubsPath, `${stubData}\n`);
  const key = placesKey();
  if (key) {
    writeFileSync(encryptedPath, `${encrypt(data, key)}\n`);
    writeFileSync(stubsEncryptedPath, `${encryptGzip(stubData, key)}\n`);
  } else console.warn("No PLACES_KEY in the environment or the keychain: wrote the plain copies only, not the .enc files.");
  const count = (list, type) => list.filter((place) => place.type === type).length;
  // The app links only to pages that are published: the places without a listing join the map once their
  // pages fit the site (scripts/export-place-pages.tsx; `npm run places:links -- --with-small`).
  console.log(`Wrote ${writePlacePages(places, process.argv.includes("--with-small") ? stubs : [], placePagesOut())} place ids to ${placePagesOut()}.`);
  console.log(`Exported ${places.length} full pages (${TYPES.map((type) => `${count(places, type)} ${type.replaceAll("_", " ")}`).filter((line) => !line.startsWith("0 ")).join(", ")}) with ${published.size} photos, and ${stubs.length} small pages (${[...typeNames.keys()].map((type) => `${count(stubs, type)} ${type.replaceAll("_", " ")}`).filter((line) => !line.startsWith("0 ")).join(", ")}).`);
} finally {
  rmSync(temp, { recursive: true, force: true });
}
