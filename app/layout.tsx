import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "AussieCamps | Explore Australia", template: "%s | AussieCamps" },
  description: "Find campsites, caravan parks, stays and useful road trip stops across Australia.",
  applicationName: "AussieCamps",
  keywords: ["Australia camping app", "campgrounds Australia", "caravan parks Australia", "road trip planner Australia", "free camping Australia"],
  authors: [{ name: "AussieCamps" }],
  creator: "AussieCamps",
  publisher: "AussieCamps",
  alternates: { canonical: "/", languages: { "en-AU": "/", "x-default": "/" } },
  openGraph: { type: "website", locale: "en_AU", siteName: "AussieCamps", title: "Australia is big. Your plan can be simple.", description: "Find 73,945 places, know what is there and plan the road trip.", url: SITE_URL, images: [{ url: "/images/aussie-og.webp", width: 1200, height: 630, alt: "AussieCamps, the camping and road trip app for Australia" }] },
  twitter: { card: "summary_large_image", title: "AussieCamps", description: "Find camps. Know what is there. Build the road trip.", images: ["/images/aussie-og.webp"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/images/aussiecamps-app-icon.webp", shortcut: "/images/aussiecamps-app-icon.webp", apple: "/images/aussiecamps-app-icon.webp" },
  other: { "apple-itunes-app": "app-id=6748379680" },
};

export const viewport: Viewport = { themeColor: "#f4f1e8", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AU"><body className={sans.variable}>{children}</body></html>;
}
