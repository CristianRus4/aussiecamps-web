import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StoreWithQr } from "@/components/guide-cta";
import { mainData } from "@/lib/analytics";
import { smartBannerContent } from "@/lib/app-store";
import { SITE_URL } from "@/lib/site";
import { pageQrScript } from "@/lib/qr-source";
import { uiStrings } from "@/lib/source-strings";
import { openAppScript, placeAppLink, placeScript } from "@/lib/place-link";

/**
 * A place shared from the app that has no page of its own (lib/place-link.ts): the place lives in the
 * URL's hash, which the inline script decodes. Never indexed, never in the sitemaps, English only
 * (lib/routes/trip.ts). The banner's app-argument gets the hash from a script in <head>
 * (scripts/export-github-pages.mjs).
 */
export const metadata: Metadata = {
  title: "Shared place",
  description: "A place shared from the AussieCamps app.",
  alternates: { canonical: "/place/" },
  robots: { index: false, follow: true },
  other: { "apple-itunes-app": smartBannerContent("en", `${SITE_URL}/place/`) },
};

export default function SharedPlace() {
  return <>
    <Header openApp={placeAppLink} />
    <main {...mainData({ kind: "place-link" })}>
      <article className="pl-page trip-page">
        <div className="pl-wrap">
          <header className="pl-header">
            <h1 id="place-name">Shared place</h1>
            <p className="pl-meta" id="place-type" />
          </header>
          <div className="place-photo" id="place-photo" hidden />
          <div className="trip-cta place-actions">
            <StoreWithQr locale="en" placement="shared" label={uiStrings.download} openApp={placeAppLink} liveQr />
            <a className="store-button place-secondary" id="place-directions" href="https://maps.apple.com/" rel="nofollow noopener" target="_blank" hidden><MapPin aria-hidden="true" /><span>Directions</span></a>
            <a className="store-button place-secondary" id="place-book" href="https://maps.apple.com/" rel="sponsored nofollow noopener" target="_blank" hidden>Book</a>
          </div>
          <p className="trip-status" id="place-status"><noscript>Turn on JavaScript to see this place.</noscript></p>
        </div>
      </article>
    </main>
    <Footer pageKey="place-link" openApp={placeAppLink} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: placeScript }} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: openAppScript }} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: pageQrScript }} />
  </>;
}
