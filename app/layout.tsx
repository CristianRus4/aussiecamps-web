import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { localeCodes } from "@/lib/localized";
import { ogLocale, seoLanguageTags } from "@/lib/seo";

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
    "camps Australia app", "offline camping map Australia", "big lap app", "caravan app Australia",
    "dump points Australia", "rest areas Australia", "road trip planner Australia", "best camping app Australia",
    "campsites near me Australia", "Queensland free camping", "Western Australia camping",
  ],
  category: "travel",
  authors: [{ name: "AussieCamps" }],
  creator: "AussieCamps",
  publisher: "AussieCamps",
  alternates: { canonical: "/", languages: seoLanguageTags("") },
  openGraph: {
    type: "website",
    locale: "en_AU",
    alternateLocale: localeCodes.map((code) => ogLocale[code]),
    siteName: "AussieCamps",
    title: "AussieCamps: the camping map and road trip planner for Australia",
    description:
      "74,000+ campgrounds, caravan parks, free camps and useful stops, bundled offline. Filter, save and plan the whole lap.",
    url: SITE_URL,
    images: [{ url: "/images/aussie-og.webp", width: 1200, height: 630, alt: "AussieCamps, the camping and road trip app for Australia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AussieCamps: Australia camping map and road trip planner",
    description: "74,000+ Australian places offline. Filter, save and plan the whole road trip.",
    images: ["/images/aussie-og.webp"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" }, { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" }],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: { "apple-itunes-app": "app-id=6748379680" },
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
  return <html lang="en-AU"><body className={sans.variable}>{children}<script data-static-tools dangerouslySetInnerHTML={{ __html: headerScroll }} /></body></html>;
}
