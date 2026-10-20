import assert from "node:assert/strict";
import test from "node:test";
import { spawnSync } from "node:child_process";
import { mkdtemp, readFile, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { buildDate, isPublished } from "../lib/publish.ts";
import { getArticle } from "../lib/site.ts";

/**
 * Drip publishing (lib/publish.ts), end to end over the built site: a fixture guide dated
 * PUBLISH_AT is exported twice, the day before (it must not exist anywhere) and on the day (it must
 * be a normal, indexable guide). Both exports go to temporary directories and pass the SEO audit.
 * Needs `npm run build` first, like the rest of `npm test`.
 */
const root = resolve(import.meta.dirname, "..");
const tsx = resolve(root, "node_modules/.bin/tsx");
const PUBLISH_AT = "2031-05-01";
const SLUG = "scheduled-fixture-guide";
// The fixture shares every place, the region and the category of this guide, so it tops its related list.
const HOST = "tasmania-camping-loop";

const host = getArticle(HOST);
const fixture = JSON.stringify({
  ...host, slug: SLUG, publishAt: PUBLISH_AT, related: undefined, faq: undefined,
  title: "Scheduled fixture guide for the publish test", description: "A guide that exists only inside the drip publishing test.",
});

function run(script, env) {
  const result = spawnSync(tsx, [script], { cwd: root, encoding: "utf8", env: { ...process.env, SCHEDULE_FIXTURE: fixture, ...env } });
  assert.equal(result.status, 0, `${script} failed:\n${result.stdout}\n${result.stderr}`);
  return result.stdout;
}

async function files(dir) {
  const entries = await readdir(dir, { recursive: true, withFileTypes: true });
  return entries.filter((entry) => entry.isFile() && /\.(html|xml|txt)$/.test(entry.name)).map((entry) => join(entry.parentPath, entry.name));
}

/** Exports the site for one publish day into a temporary directory and audits it. */
async function exportFor(day) {
  const dir = await mkdtemp(join(tmpdir(), "aussiecamps-schedule-"));
  const env = { BUILD_DATE: day, PAGES_DIST: dir };
  run("scripts/export-github-pages.mjs", env);
  const audit = run("scripts/audit-seo.mjs", env);
  return { dir, audit, read: (path) => readFile(join(dir, path), "utf8") };
}

function renderLink(day) {
  const code = `import("./lib/internal-links.ts").then((m) => process.stdout.write(m.renderGuideLinks('Read <a data-guide="${SLUG}">the new guide</a> first.', "/de")))`;
  const result = spawnSync(tsx, ["-e", code], { cwd: root, encoding: "utf8", env: { ...process.env, SCHEDULE_FIXTURE: fixture, BUILD_DATE: day } });
  assert.equal(result.status, 0, result.stderr);
  return result.stdout;
}

test("a guide is published from its publishAt day, and a guide without one always is", () => {
  assert.equal(isPublished({}, "2000-01-01"), true);
  assert.equal(isPublished({ publishAt: PUBLISH_AT }, "2031-04-30"), false);
  assert.equal(isPublished({ publishAt: PUBLISH_AT }, PUBLISH_AT), true);
  assert.equal(isPublished({ publishAt: PUBLISH_AT }, "2031-05-02"), true);
  assert.match(buildDate(), /^\d{4}-\d{2}-\d{2}$/);
});

test("before its publishAt a guide exists nowhere in the export", async () => {
  const site = await exportFor("2031-04-30");
  try {
    assert.match(site.audit, /SEO audit passed/);
    // Not exported, in English or any locale, and not named by any page, sitemap, hreflang,
    // related strip, listing, language switcher, credit or llms.txt.
    for (const file of await files(site.dir)) {
      assert.doesNotMatch(await readFile(file, "utf8"), new RegExp(SLUG), `${file.slice(site.dir.length)} mentions the unpublished guide`);
    }
    assert.match(await site.read(`guides/${HOST}/index.html`), /<section class="related-section">/, `${HOST} still has related guides`);
    assert.equal(renderLink("2031-04-30"), "Read the new guide first.", "a data-guide link to it is plain text");
  } finally {
    await rm(site.dir, { recursive: true, force: true });
  }
});

test("on its publishAt day the guide is a normal, indexable page", async () => {
  const site = await exportFor(PUBLISH_AT);
  try {
    assert.match(site.audit, /SEO audit passed/);
    const page = await site.read(`guides/${SLUG}/index.html`);
    assert.match(page, /<meta name="robots" content="index, follow"\/>/, "the guide is indexable");
    assert.match(page, new RegExp(`<link rel="canonical" href="https://aussiecamps.app/guides/${SLUG}/"`), "the guide is self-canonical");
    // Untranslated, so it has no other indexable edition to advertise in hreflang.
    assert.doesNotMatch(page, new RegExp(`hrefLang="de" href="https://aussiecamps.app/de/guides/${SLUG}/"`), "an English-only guide advertises no locale edition");
    // Never committed, so its only date is the publish day; a committed one takes the later of the two.
    assert.match(await site.read("sitemaps/en.xml"), new RegExp(`<loc>https://aussiecamps.app/guides/${SLUG}/</loc><lastmod>${PUBLISH_AT}</lastmod>`), "in the English sitemap, dated its publish day");
    assert.match(await site.read("llms.txt"), new RegExp(`/guides/${SLUG}`), "listed in llms.txt");
    assert.match(await site.read("guides/index.html"), new RegExp(`href="/guides/${SLUG}/"`), "listed on the guides index");
    const related = (await site.read(`guides/${HOST}/index.html`)).match(/<section class="related-section">[\s\S]*?<\/section>/)?.[0] ?? "";
    assert.match(related, new RegExp(`href="/guides/${SLUG}/"`), `in the related guides of ${HOST}`);
    // Untranslated, so each locale serves it in English and noindex, like any new guide.
    assert.match(await site.read(`de/guides/${SLUG}/index.html`), /<meta name="robots" content="noindex, follow"\/>/, "the untranslated German edition is noindex");
    assert.equal(renderLink(PUBLISH_AT), `Read <a href="/de/guides/${SLUG}/">the new guide</a> first.`);
  } finally {
    await rm(site.dir, { recursive: true, force: true });
  }
});
