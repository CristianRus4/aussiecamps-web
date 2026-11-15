import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StoreWithQr } from "@/components/guide-cta";
import { mapScript } from "@/components/places/place-map";
import { mainData } from "@/lib/analytics";
import { smartBannerContent } from "@/lib/app-store";
import { appLink, openAppScript } from "@/lib/open-app";
import { pageQrScript } from "@/lib/qr-source";
import { SITE_URL } from "@/lib/site";
import { pageOpenGraph } from "@/lib/seo";
import { uiStrings } from "@/lib/source-strings";

/** Every a[data-open-app] carries this; the Worker swaps it for aussiecamps://trip/<id> or …/collection/<id>. */
const LINK_SHELL_APP = appLink("/link/");

/**
 * The page of a live trip or collection link (/trip/<id>, /collection/<id>). The Cloudflare Worker reads this
 * page from its bucket (scripts/export-link-assets.tsx copies it there) and fills in the [data-sl] hooks
 * from the link's data: the name, the dates line, the map's data-pl-map and the rows of the list, plus the
 * head's title, description, Open Graph tags and canonical. Never served from here: noindex, English only,
 * in no sitemap (lib/routes/links.ts).
 */
export const metadata: Metadata = {
  title: "Shared trip",
  description: "A trip or a list of places shared from the AussieCamps app.",
  alternates: { canonical: "/link-shell/" },
  openGraph: pageOpenGraph("Shared trip", "A trip or a list of places shared from the AussieCamps app.", "/link-shell/"),
  robots: { index: false, follow: true },
  other: { "apple-itunes-app": smartBannerContent("en", `${SITE_URL}/link-shell/`) },
};

export default function LinkShell() {
  return <>
    <Header openApp={LINK_SHELL_APP} />
    <main {...mainData({ kind: "trip" })} data-page-location="/trip/">
      <article className="pl-page trip-page sl-page">
        <div className="pl-wrap">
          <header className="pl-header">
            <h1 data-sl="name">Shared trip</h1>
            <p className="pl-meta" data-sl="meta" />
          </header>
          <p className="trip-status" data-sl="status" hidden />
          <div data-sl="body">
            <div className="trip-cta"><StoreWithQr locale="en" placement="trip" label={uiStrings.download} openApp={LINK_SHELL_APP} liveQr /></div>
            <figure className="pl-map" role="img" aria-label="Map" data-sl="map" data-pl-map="" />
            <ul className="pl-rows sl-list" data-sl="list" />
          </div>
        </div>
      </article>
    </main>
    <Footer pageKey="link-shell" openApp={LINK_SHELL_APP} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: mapScript }} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: openAppScript }} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: pageQrScript }} />
  </>;
}
