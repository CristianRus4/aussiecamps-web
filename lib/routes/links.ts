import type { ExportRoute } from "@/lib/routes";

/**
 * /link-shell/, the page the Cloudflare Worker fills in for a live trip or collection link (/trip/<id>,
 * /collection/<id>; app/link-shell/page.tsx). It is exported only so scripts/export-link-assets.tsx can copy
 * it to the Worker's bucket and take it out of the Pages export: noindex, English only, in no sitemap.
 */
export function linkRoutes(): ExportRoute[] {
  return [{ path: "/link-shell/", locale: "en", kind: "link-shell", indexable: false, pageKey: "link-shell" }];
}
