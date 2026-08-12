import Link from "next/link";
import { APP_STORE_URL, SUPPORT_EMAIL } from "@/lib/site";
import { BrandMark } from "./brand-mark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><BrandMark /><p>One map for the places, plans and practical details that make an Australian road trip work.</p></div>
        <div><strong>Explore</strong><Link href="/guides">Travel guides</Link><Link href="/journal">Camping journal</Link><Link href="/#features">Features</Link></div>
        <div><strong>Help</strong><Link href="/support">Support & FAQ</Link><a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a><Link href="/privacy">Privacy</Link></div>
        <div><strong>Get the app</strong><a href={APP_STORE_URL}>Download for iPhone</a><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} AussieCamps</span><span>Made for the long way around Australia.</span></div>
    </footer>
  );
}
