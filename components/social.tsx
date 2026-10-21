import { socialScript } from "@/lib/social";

/**
 * The social-link script (see lib/social.ts). `data-static-keep` tells the static exporter to keep it.
 * It sits right after the analytics script so `acTrack` exists when it records the route.
 */
export function SocialScript() {
  return <script data-static-keep="social" dangerouslySetInnerHTML={{ __html: socialScript() }} />;
}

/**
 * The full-screen "open in your browser" overlay, rendered hidden on every page. Only the social script
 * shows it, in TikTok's in-app browser (or as a fallback in Instagram's). The arrow points at the •••
 * menu in the top-right corner, where both apps put "Open in browser".
 */
export function SocialOverlay() {
  return <div className="social-overlay" data-social-overlay hidden role="dialog" aria-modal="true" aria-labelledby="social-overlay-title">
    <div className="social-overlay-arrow" aria-hidden="true">
      <svg viewBox="0 0 64 64" width="64" height="64"><path d="M12 54 C 22 30, 34 18, 52 12" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /><path d="M38 9 L 53 11 L 49 26" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </div>
    <div className="social-overlay-card">
      <p className="eyebrow">Get AussieCamps</p>
      <h2 id="social-overlay-title">Open this page in your browser</h2>
      <ol>
        <li>Tap <span className="social-overlay-dots" aria-label="the three dots">•••</span> at the top right</li>
        <li>Choose <strong>Open in browser</strong></li>
        <li>The App Store opens AussieCamps</li>
      </ol>
      {/* The script fills in the App Store link for the platform; without JavaScript the overlay never shows. */}
      <a className="store-button social-overlay-store" data-social-store href="#">Download on the App Store</a>
      <button type="button" className="social-overlay-close" data-social-close>Continue to the website</button>
    </div>
  </div>;
}
