import Link from "next/link";
import { APP_STORE_URL, SUPPORT_EMAIL } from "@/lib/site";
import { localeLabels, publishedLocales } from "@/lib/localized";
import { BrandMark } from "./brand-mark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><BrandMark /><p>Find 74,000+ Australian places offline, save the ones that matter and build complete road trips with routes, distance, dates, notes and to-dos.</p></div>
        <div><strong>Explore</strong><Link href="/guides">Travel guides</Link><Link href="/tools">Tools</Link><Link href="/#features">Features</Link></div>
        <div><strong>Help</strong><Link href="/support">Support & FAQ</Link><a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a><a href="https://github.com/CristianRus4/aussiecamps-web/tree/main/docs">Photo credits</a></div>
        <div><strong>Get the app</strong><a href={APP_STORE_URL}>Download app</a><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
      {publishedLocales.length > 0 && <nav className="language-nav" aria-label="Languages"><Link href="/" aria-current="page">English</Link>{publishedLocales.map((code) => <Link href={`/${code}`} key={code}>{localeLabels[code]}</Link>)}</nav>}
      <div className="footer-bottom"><span>© {new Date().getFullYear()} <a href="https://cntxtlabs.co/">Cntxt Labs</a></span><span>Made for the long way around Australia.</span></div>
    </footer>
  );
}
