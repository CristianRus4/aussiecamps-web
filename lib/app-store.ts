import { APP_ID, APP_STORE_URL, APPLE_PROVIDER_TOKEN } from "@/lib/site";

/**
 * App Store campaign links.
 *
 * App Store Connect attributes a download to a web page only when the store link carries the
 * provider token (`pt`) and a campaign token (`ct`). Every clickable store link on the site goes
 * through `appStoreUrl()`, so App Store Connect's Campaigns report splits downloads by where on the
 * site the click happened and in which language, as `w_<placement>_<locale>`.
 *
 * Placements:
 *   hdr   header buttons and mobile menu      stick  sticky mobile CTA
 *   hero  hero download card                   foot   footer link
 *   card  download cards and article end CTAs  inl    in-article CTA
 *   tool  tool pages                           hub    data hubs
 *   sb    Smart App Banner (affiliate-data)    qr     QR code
 *   dl    the /download/ redirect page         llms   /llms.txt
 *   listicle  "best apps" and "alternatives" comparison guides (their in-article and end CTAs)
 */
export const ctaPlacements = ["hdr", "hero", "card", "stick", "foot", "inl", "tool", "hub", "sb", "qr", "dl", "llms", "listicle"] as const;
export type CtaPlacement = (typeof ctaPlacements)[number];

/** Apple truncates longer campaign tokens, which would merge distinct placements in the report. */
export const CAMPAIGN_TOKEN_MAX = 30; // App Store Connect limit for ct
export const campaignTokenPattern = /^w_[a-z]+_[a-z-]+$/;

/** `w_<placement>_<locale>`. English is `en`; other locales use their code (`de`, `zh-hans`). */
export function campaignToken(placement: CtaPlacement, locale = "en"): string {
  const token = `w_${placement}_${locale}`;
  if (token.length > CAMPAIGN_TOKEN_MAX || !campaignTokenPattern.test(token)) throw new Error(`Invalid App Store campaign token: ${token}`);
  return token;
}

/**
 * The store URL for one CTA. With no provider token configured it is the plain APP_STORE_URL, so a
 * half-configured site never sends a malformed campaign to Apple.
 */
export function appStoreUrl({ placement, locale = "en" }: { placement: CtaPlacement; locale?: string }): string {
  const ct = campaignToken(placement, locale);
  if (!APPLE_PROVIDER_TOKEN) return APP_STORE_URL;
  return `${APP_STORE_URL}?pt=${encodeURIComponent(APPLE_PROVIDER_TOKEN)}&ct=${ct}&mt=8`;
}

/** The `apple-itunes-app` meta content for the Smart App Banner Safari shows on iPhone. */
export function smartBannerContent(locale = "en"): string {
  const base = `app-id=${APP_ID}`;
  if (!APPLE_PROVIDER_TOKEN) return base;
  return `${base}, affiliate-data=pt=${encodeURIComponent(APPLE_PROVIDER_TOKEN)}&ct=${campaignToken("sb", locale)}`;
}
