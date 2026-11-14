import type { ExportRoute } from "@/lib/routes";

/**
 * /trip/ and /place/, the pages that show a trip or a place shared from the app (app/trip/page.tsx,
 * app/place/page.tsx): noindex, English only.
 */
export function tripRoutes(): ExportRoute[] {
  return [
    { path: "/trip/", locale: "en", kind: "trip", indexable: false, pageKey: "trip" },
    { path: "/place/", locale: "en", kind: "place-link", indexable: false, pageKey: "place-link" },
  ];
}
