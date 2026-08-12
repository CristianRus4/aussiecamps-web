import Link from "next/link";
import { APP_STORE_URL, SUPPORT_EMAIL } from "@/lib/site";
import { BrandMark } from "./brand-mark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><BrandMark /><p>Find 74,000+ places, save the ones that matter and build complete Australian road trips with routes, distance, notes and to-dos.</p></div>
        <div><strong>Explore</strong><Link href="/guides">Travel guides</Link><Link href="/#features">Features</Link></div>
        <div><strong>Help</strong><Link href="/support">Support & FAQ</Link><a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a><a href="https://github.com/CristianRus4/aussiecamps-web/tree/main/docs">Photo credits</a></div>
        <div><strong>Get the app</strong><a href={APP_STORE_URL}>Download for iOS</a><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} AussieCamps</span><span>Made for the long way around Australia.</span></div>
    </footer>
  );
}
