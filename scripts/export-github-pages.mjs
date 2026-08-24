import assert from "node:assert/strict";
import { access, cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "pages-dist");
// aussiecamps.app is a custom domain, so the site is served from the root. Only set
// PAGES_BASE_PATH when deploying to a project-page subpath instead.
const basePath = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "");
const sources = await Promise.all(["lib/site.ts", "lib/expanded-articles.ts"].map((path) => readFile(resolve(root, path), "utf8")));
const slugs = sources.flatMap((source) => [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));
const pageRoutes = ["/guides", ...slugs.map((slug) => `/guides/${slug}`), "/tools", "/support", "/privacy", "/terms"];
// Every locale exports every guide; ones it has not translated are served in English.
const localeRoutes = ["de", "es", "fr", "it", "nl", "pt"].flatMap((locale) => ["", "/guides", ...slugs.map((slug) => `/guides/${slug}`), "/tools", "/support", "/privacy", "/terms"].map((route) => `/${locale}${route}`));
const htmlRoutes = ["/", ...pageRoutes, ...localeRoutes];
const textRoutes = ["/robots.txt", "/sitemap.xml", "/llms.txt"];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, "dist/client"), output, { recursive: true });

const serverUrl = pathToFileURL(resolve(root, "dist/server/index.js"));
serverUrl.searchParams.set("pages-export", Date.now().toString());
const { default: worker } = await import(serverUrl.href);
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const ctx = { waitUntil() {}, passThroughOnException() {} };

function prepareHtml(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (script) => {
      const openingTag = script.slice(0, script.indexOf(">") + 1);
      return /type="application\/ld\+json"|data-static-tools/i.test(openingTag) ? script : "";
    })
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "")
    .replace(/(href|src)="\/(?!\/)/g, `$1="${basePath}/`)
    .replace(/url\(\/(?!\/)/g, `url(${basePath}/`);
}

for (const route of htmlRoutes) {
  const response = await worker.fetch(new Request(`https://pages.local${route}`, { headers: { accept: "text/html" } }), env, ctx);
  assert.equal(response.status, 200, `Could not export ${route}`);
  const target = route === "/" ? resolve(output, "index.html") : resolve(output, route.slice(1), "index.html");
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, prepareHtml(await response.text()));
}

for (const route of textRoutes) {
  const response = await worker.fetch(new Request(`https://pages.local${route}`), env, ctx);
  assert.equal(response.status, 200, `Could not export ${route}`);
  await writeFile(resolve(output, route.slice(1)), await response.text());
}

for (const name of await readdir(resolve(output, "assets"))) {
  if (name.endsWith(".js")) {
    await rm(resolve(output, "assets", name));
    continue;
  }
  if (!name.endsWith(".css")) continue;
  const path = resolve(output, "assets", name);
  const css = await readFile(path, "utf8");
  await writeFile(path, css.replace(/url\(\/(?!\/)/g, `url(${basePath}/`));
}

await writeFile(resolve(output, ".nojekyll"), "");
await cp(resolve(output, "index.html"), resolve(output, "404.html"));

// Without CNAME in the artifact GitHub Pages drops the aussiecamps.app custom domain on deploy.
if (!basePath) await cp(resolve(root, "CNAME"), resolve(output, "CNAME"));

const exportedHtml = [];
for (const route of htmlRoutes) {
  const target = route === "/" ? resolve(output, "index.html") : resolve(output, route.slice(1), "index.html");
  const html = await readFile(target, "utf8");
  assert.doesNotMatch(html, /self\.__VINEXT|__VINEXT_RSC/, `${route} contains runtime navigation code`);
  if (basePath) assert.doesNotMatch(html, new RegExp(`(?:href|src)="/(?!/|${basePath.slice(1)}(?:/|"))`), `${route} contains a root-dependent internal URL`);
  exportedHtml.push([route, html]);
}

function localTarget(reference) {
  const clean = reference.split("#")[0].split("?")[0];
  if (!clean.startsWith(`${basePath}/`) || clean === `${basePath}/`) return clean === `${basePath}/` ? resolve(output, "index.html") : null;
  const local = clean.slice(basePath.length + 1);
  return /\.[a-z0-9]+$/i.test(local) ? resolve(output, local) : resolve(output, local, "index.html");
}

for (const [route, html] of exportedHtml) {
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = localTarget(match[1]);
    if (target) await access(target).catch(() => assert.fail(`${route} links to missing ${match[1]}`));
  }
}

console.log(`Exported ${htmlRoutes.length} HTML pages and ${textRoutes.length} crawler files for ${basePath}.`);
