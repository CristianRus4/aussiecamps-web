import Link from "next/link";
import { Menu } from "lucide-react";
import { APP_STORE_URL } from "@/lib/site";
import { BrandMark } from "./brand-mark";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand-link"><BrandMark /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#features">Features</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/support">Support</Link>
        </nav>
        <Button asChild size="sm" className="desktop-download"><a href={APP_STORE_URL}>Download app</a></Button>
        <Button asChild size="sm" className="mobile-download"><a href={APP_STORE_URL}>Download</a></Button>
        <details className="mobile-menu">
          <summary aria-label="Open menu"><Menu size={22} /></summary>
          <nav aria-label="Mobile navigation">
            <Link href="/#features">Features</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/support">Support</Link>
            <a href={APP_STORE_URL}>Download app</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
