import { FaApple } from "react-icons/fa6";
import { socialScript } from "@/lib/social";

/**
 * The social-link script (see lib/social.ts). `data-static-keep` tells the static exporter to keep it.
 * It sits right after the analytics script so `acTrack` exists when it records the route.
 */
export function SocialScript() {
  return <script data-static-keep="social" dangerouslySetInnerHTML={{ __html: socialScript() }} />;
}

/**
 * The full-screen App Store overlay, rendered hidden on every page. Only the social script shows it: in
 * TikTok's in-app browser, or as a fallback in Instagram's when the App Store did not open. It holds the app
 * icon, the App Store button and a way on to the website. The icon is the header's, so it is already cached.
 */
export function SocialOverlay() {
  return <div className="social-overlay" lang="en" data-social-overlay hidden role="dialog" aria-modal="true" aria-label="Get AussieCamps on the App Store">
    <div className="social-overlay-card">
      <img className="social-overlay-icon" src="/images/aussiecamps-app-icon.png" width="96" height="96" alt="AussieCamps" />
      {/* The script fills in the App Store link for the platform; without JavaScript the overlay never shows. */}
      <a className="store-button social-overlay-store" data-social-store href="#"><FaApple aria-hidden="true" /><span>Download on the App Store</span></a>
      <button type="button" className="social-overlay-close" data-social-close>Continue to the website</button>
    </div>
  </div>;
}
