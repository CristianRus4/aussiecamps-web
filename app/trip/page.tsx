import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StoreWithQr } from "@/components/guide-cta";
import { mainData } from "@/lib/analytics";
import { uiStrings } from "@/lib/source-strings";
import { tripScript } from "@/lib/trip-link";
import { smartBannerContent } from "@/lib/app-store";
import { SITE_URL } from "@/lib/site";
import { appLink, openAppScript } from "@/lib/open-app";

const openApp = appLink("/trip/#");

/**
 * A trip shared from the app as a read-only link (lib/trip-link.ts). One static page for every trip:
 * the trip lives in the URL's hash, which the inline script decodes. Never indexed, never in the
 * sitemaps, English only (lib/routes/trip.ts).
 */
export const metadata: Metadata = {
  title: "Shared trip",
  description: "A road trip shared from the AussieCamps app: its stops, dates and notes.",
  alternates: { canonical: "/trip/" },
  robots: { index: false, follow: true },
  // The banner's app-argument gets the hash from a script in <head> (scripts/export-github-pages.mjs).
  other: { "apple-itunes-app": smartBannerContent("en", `${SITE_URL}/trip/`) },
};

export default function Trip() {
  return <>
    <Header openApp={openApp} />
    <main {...mainData({ kind: "trip" })}>
      <article className="pl-page trip-page">
        <div className="pl-wrap">
          <header className="pl-header">
            <h1 id="trip-name">Shared trip</h1>
            <p className="pl-meta" id="trip-meta" />
          </header>
          <div className="trip-cta"><StoreWithQr locale="en" placement="trip" label={uiStrings.download} openApp={openApp} /></div>
          <p className="trip-status" id="trip-status"><noscript>Turn on JavaScript to see this trip.</noscript></p>
          <ol className="trip-stops" id="trip-stops" hidden />
        </div>
      </article>
    </main>
    <Footer pageKey="trip" openApp={openApp} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: tripScript("en-AU") }} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: openAppScript }} />
  </>;
}
