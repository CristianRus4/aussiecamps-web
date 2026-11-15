import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { smartBannerContent } from "@/lib/app-store";
import { AnalyticsScript } from "@/components/analytics";
import { SocialOverlay, SocialScript } from "@/components/social";
import { alternatesFor, homeOgImage, ogAlternates } from "@/lib/seo";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AussieCamps: Australia Camping Map & Road Trip Planner",
    template: "%s | AussieCamps",
  },
  description:
    "Find 74,000+ campgrounds, caravan parks, free camps, rest areas and dump points across Australia. Offline place details, sharp filters and a stop-by-stop road trip planner for iPhone.",
  applicationName: "AussieCamps",
  keywords: [
    "camping app Australia", "free camping Australia", "campgrounds Australia", "caravan parks Australia",
    "camps Australia app", "big lap app", "caravan app Australia",
    "dump points Australia", "rest areas Australia", "road trip planner Australia", "best camping app Australia",
    "campsites near me Australia", "Queensland free camping", "Western Australia camping",
  ],
  category: "travel",
  authors: [{ name: "AussieCamps" }],
  creator: "AussieCamps",
  publisher: "AussieCamps",
  alternates: { canonical: "/", languages: alternatesFor("home") },
  // Only what every page shares. A page's openGraph replaces this object whole, and the twitter tags
  // follow that page's own openGraph (Next.js fills them in), so no page ever shows another page's
  // title, description or image. Every page sets its own openGraph (pageOpenGraph in lib/seo.ts).
  openGraph: { type: "website", locale: "en_AU", alternateLocale: ogAlternates("en"), siteName: "AussieCamps", images: [{ ...homeOgImage, alt: "AussieCamps, the camping and road trip app for Australia" }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" }, { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" }],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  // The Smart App Banner. Localised pages override it with their own campaign token.
  other: { "apple-itunes-app": smartBannerContent("en"), "naver-site-verification": "c4d4fefe1bb92e0b5958a29adab9412e909dfd2d" },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f3ef" },
    { media: "(prefers-color-scheme: dark)", color: "#111410" },
  ],
};

// Kept inline and marked data-static-tools so the static export preserves it (the exporter strips
// all other scripts). Adds .is-scrolled once the page moves, so the header is invisible at the top.
const headerScroll = `(function(){var h=document.querySelector(".site-header");if(!h)return;var f=function(){h.classList.toggle("is-scrolled",window.scrollY>8)};f();addEventListener("scroll",f,{passive:true})})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Analytics comes first in <body> so the Consent Mode defaults are set before anything else runs.
  // The social script follows at once, so a social-link redirect happens before the page paints.
  return <html lang="en-AU"><body className={sans.variable}><AnalyticsScript /><SocialScript />{children}<SocialOverlay /><script data-static-tools dangerouslySetInnerHTML={{ __html: headerScroll }} /></body></html>;
}
