import Link from "next/link";
import { SUPPORT_MAILTO } from "@/lib/site";
import { appStoreUrl } from "@/lib/app-store";
import { ConsentBar, PrivacyChoicesLink } from "@/components/analytics";
import { LanguageSwitcher } from "@/components/language-switcher";
import { BrandMark } from "./brand-mark";

/** `pageKey` is the route-manifest key of the page, so the language list can link to its translations. */
export function Footer({ pageKey = "home" }: { pageKey?: string }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><BrandMark /><p>Find 74,000+ Australian places offline, save the ones that matter and build complete road trips with routes, distance, dates, notes and to-dos.</p></div>
        <div><strong>Explore</strong><Link href="/guides/">Travel guides</Link><Link href="/tools/">Tools</Link><Link href="/#features">Features</Link></div>
        <div><strong>Help</strong><Link href="/support/">Support & FAQ</Link><a href={SUPPORT_MAILTO}>Contact</a></div>
        <div><strong>Get the app</strong><a href={appStoreUrl({ placement: "foot" })} data-cta="foot">Download app</a><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link><PrivacyChoicesLink /></div>
      </div>
      <LanguageSwitcher pageKey={pageKey} current="en" />
      <div className="footer-bottom"><span>© {new Date().getFullYear()} <a href="https://cntxtlabs.co/">Cntxt Labs</a></span><span>Made for the long way around Australia.</span></div>
      <ConsentBar />
    </footer>
  );
}
