/**
 * The R2 pages' own copy of the build's stylesheets. CI uploads the Worker's pages (the place pages without
 * a listing, the live links' shell) to R2 before GitHub Pages has finished deploying the same build, so a
 * link to that build's /assets/<file>.css would load nothing for the 10–20 minutes in between. These pages
 * link a copy at /places/_assets/<file> instead, which the Worker serves from R2 and the sync
 * (scripts/sync-places-r2.mjs) uploads before any page that names it. Fonts and scripts keep their links.
 */
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

export const R2_STYLESHEETS = "/places/_assets/";
const STYLESHEET = /(href=")\/assets\/([A-Za-z0-9._-]+\.css)(")/g;

/** Points `html`'s stylesheet links (and any preload of them) at the R2 copy, copying each file from
 * `<pages>/assets/` into `<out>/places/_assets/`. */
export function withR2Stylesheets(html: string, pages: string, out: string) {
  return html.replace(STYLESHEET, (_match, before: string, file: string, after: string) => {
    const target = resolve(out, R2_STYLESHEETS.slice(1), file);
    if (!existsSync(target)) {
      mkdirSync(resolve(out, R2_STYLESHEETS.slice(1)), { recursive: true });
      copyFileSync(resolve(pages, "assets", file), target);
    }
    return `${before}${R2_STYLESHEETS}${file}${after}`;
  });
}
