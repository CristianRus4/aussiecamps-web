import type { ExportRoute } from "@/lib/routes";

/** /trip/, the page that shows a trip shared from the app (app/trip/page.tsx): noindex, English only. */
export function tripRoutes(): ExportRoute[] {
  return [{ path: "/trip/", locale: "en", kind: "trip", indexable: false, pageKey: "trip" }];
}
