import Link from "next/link";
import { Menu } from "lucide-react";
import { APP_STORE_URL } from "@/lib/site";
import { BrandMark } from "./brand-mark";

export function Header() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand-link"><BrandMark /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#features">Features</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/support">Support</Link>
        </nav>
        <a className="button button-small button-dark desktop-download" href={APP_STORE_URL}>Download for iPhone</a>
        <details className="mobile-menu">
          <summary aria-label="Open menu"><Menu size={22} /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/#features">Features</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/support">Support</Link>
            <a href={APP_STORE_URL}>Download for iPhone</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
