import Link from "next/link";
import { Menu } from "lucide-react";
import { appStoreUrl } from "@/lib/app-store";
import { BrandMark } from "./brand-mark";
import { Button } from "./ui/button";
import { OPEN_APP_LABEL } from "@/lib/open-app";

/** `openApp` (place pages, /place/, /trip/): its store links become "Open in app" for that place or trip. */
export function Header({ openApp }: { openApp?: string } = {}) {
  const store = appStoreUrl({ placement: "hdr" });
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand-link"><BrandMark /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#features">Features</Link>
          <Link href="/places/">Places</Link><Link href="/guides/">Guides</Link>
          <Link href="/tools/">Tools</Link>
          <Link href="/support/">Support</Link>
        </nav>
        <Button asChild size="sm" className="desktop-download"><a href={store} data-cta="hdr" data-open-app={openApp}>{openApp ? OPEN_APP_LABEL : "Download app"}</a></Button>
        <Button asChild size="sm" className="mobile-download"><a href={store} data-cta="hdr" data-open-app={openApp}>{openApp ? OPEN_APP_LABEL : "Download"}</a></Button>
        <details className="mobile-menu">
          <summary aria-label="Open menu"><Menu size={22} /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/#features">Features</Link>
            <Link href="/places/">Places</Link><Link href="/guides/">Guides</Link>
            <Link href="/tools/">Tools</Link>
            <Link href="/support/">Support</Link>
            <a href={store} data-cta="hdr" data-open-app={openApp}>{openApp ? OPEN_APP_LABEL : "Download app"}</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
