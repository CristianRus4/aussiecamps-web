import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const locales = ["de", "es", "fr", "it", "nl", "pt"];

async function fetchPage(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the AussieCamps homepage with product copy and SEO", async () => {
  const response = await fetchPage();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Australia is big/);
  assert.match(html, /74,000\+/);
  assert.match(html, /4,000\+/);
  assert.match(html, /routes, distance, dates, notes and to-dos/i);
  assert.match(html, /Offline/);
  assert.match(html, /trip planner/i);
  assert.doesNotMatch(html, /section-number|useful place categories|01 \/ 03/i);
  assert.match(html, /M318\.7 268\.7/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|not available yet/i);
});

test("renders an article with unique travel content and app CTA", async () => {
  const response = await fetchPage("/guides/perth-to-broome-road-trip");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /White dunes, coral reefs, red gorges/);
  assert.match(html, /Ningaloo and Karijini/);
  const body = html.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<aside/)?.[1] ?? "";
  assert.ok((body.match(/<p[ >]/g) ?? []).length >= 5, "Guide must render substantial prose");
  // Every heading must carry its own prose rather than pushing it into one undifferentiated blob.
  for (const section of body.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/g)) {
    if (!/<h2/.test(section[1]) || /place-chips|price-table|sources/.test(section[1])) continue;
    assert.match(section[1], /<p[ >]/, "every heading needs prose under it");
  }
  assert.match(html, /Save the stops\. Plan the whole trip\./);
  assert.doesNotMatch(html, /These names are intentionally explicit|Editorial landscape image|Reviewed 12 August/i);
});

test("every guide renders as a long-form article", async () => {
  const sources = await Promise.all(["../lib/site.ts", "../lib/expanded-articles.ts"].map((path) => readFile(new URL(path, import.meta.url), "utf8")));
  const slugs = sources.flatMap((source) => [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
  assert.equal(slugs.length, 70);
  for (const slug of slugs) {
    const response = await fetchPage(`/guides/${slug}`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    const body = html.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<aside/)?.[1] ?? "";
    assert.ok((body.match(/<p[ >]/g) ?? []).length >= 5, `${slug} must render substantial prose`);
    for (const section of body.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/g)) {
      if (!/<h2/.test(section[1]) || /place-chips|price-table|sources/.test(section[1])) continue;
      assert.match(section[1], /<p[ >]/, `${slug} has a heading with no prose under it`);
    }
    // The generated editorial blob duplicated section prose and described the article to itself.
    assert.doesNotMatch(body, /named reference points|The route through this subject is specific|The details worth carrying into the plan are/, `${slug} still contains templated filler`);
  }
});

test("publishes crawler surfaces", async () => {
  const [robots, sitemap, llms] = await Promise.all([fetchPage("/robots.txt"), fetchPage("/sitemap.xml"), fetchPage("/llms.txt")]);
  assert.equal(robots.status, 200);
  assert.equal(sitemap.status, 200);
  assert.equal(llms.status, 200);
  assert.match(await robots.text(), /Sitemap:/);
  assert.match(await sitemap.text(), /perth-to-broome-road-trip/);
  assert.match(await llms.text(), /Core place details are available offline/);
});

test("renders dated multi-currency price tables", async () => {
  const response = await fetchPage("/guides/australia-grocery-prices-2026");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Price table in 10 currencies/);
  assert.match(html.replace(/<!-- -->/g, ""), /Prices checked 12 August 2026/);
  for (const currency of ["AUD", "NZD", "USD", "GBP", "EUR", "CNY", "INR", "SGD", "JPY", "KRW"]) assert.match(html, new RegExp(`>${currency}<`));
  assert.match(html, /Reserve Bank of Australia exchange rates/);
});

test("renders standalone road trip tools", async () => {
  const response = await fetchPage("/tools");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Currency converter/);
  assert.match(html, /Fuel calculator/);
  assert.match(html, /data-static-tools/);
  assert.match(html, /120\.0 L · A\$249\.60/);
});

test("publishes a localised edition per language, road trips excluded", async () => {
  for (const locale of locales) {
    for (const route of ["", "/guides", "/tools", "/support", "/privacy", "/terms"]) {
      assert.equal((await fetchPage(`/${locale}${route}`)).status, 200, `${locale}${route}`);
    }
    // Road trips stay English-only, so no locale may ever serve one.
    assert.equal((await fetchPage(`/${locale}/guides/perth-to-broome-road-trip`)).status, 404, `${locale} must not publish a translated road trip`);
  }
});

test("never serves a half-translated guide", async () => {
  // A localised guide URL exists only where that locale's translation is complete. Anything partial
  // or structurally stale must 404 rather than render a mixture of two languages.
  for (const locale of locales) {
    const file = JSON.parse(await readFile(new URL(`../lib/translations/${locale}.json`, import.meta.url), "utf8"));
    const index = await (await fetchPage(`/${locale}/guides`)).text();
    for (const slug of ["australia-grocery-prices-2026", "camping-rules-queensland", "australia-travel-cost-2026"]) {
      const complete = Boolean(file.articles?.[slug]);
      assert.equal((await fetchPage(`/${locale}/guides/${slug}`)).status, complete ? 200 : 404, `${locale}/${slug}`);
      if (!complete) assert.ok(!index.includes(`/${locale}/guides/${slug}"`), `${locale} lists ${slug} it cannot serve`);
    }
    if (Object.keys(file.articles ?? {}).length === 0) assert.match(index, /Not available in this language yet/);
  }
});

test("keeps untranslated locales out of the sitemap and index", async () => {
  const sitemap = await (await fetchPage("/sitemap.xml")).text();
  for (const locale of locales) {
    const file = JSON.parse(await readFile(new URL(`../lib/translations/${locale}.json`, import.meta.url), "utf8"));
    const published = Object.keys(file.ui ?? {}).length > 0;
    assert.equal(sitemap.includes(`/${locale}/guides`), published, `${locale} sitemap presence must match its translation state`);
    const html = await (await fetchPage(`/${locale}`)).text();
    assert.match(html, published ? /name="robots" content="index/ : /name="robots" content="noindex/, `${locale} robots meta must match its translation state`);
  }
  // Whatever a translator delivers, a road trip must never reach a localised URL.
  for (const locale of locales) assert.ok(!sitemap.includes(`/${locale}/guides/perth-to-broome-road-trip`));
});
