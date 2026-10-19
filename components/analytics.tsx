import { analyticsBootstrap, analyticsEnabled } from "@/lib/analytics";
import { getConsentStrings, type LocaleCode } from "@/lib/localized";
import { sitePath } from "@/lib/site";

/**
 * The one analytics script per page (see lib/analytics.ts). `data-static-keep` is what tells the
 * static exporter to keep it while it strips every other script.
 */
export function AnalyticsScript() {
  if (!analyticsEnabled) return null;
  return <script data-static-keep="analytics" dangerouslySetInnerHTML={{ __html: analyticsBootstrap() }} />;
}

/**
 * The consent bar, rendered hidden on every page. The analytics script shows it to visitors in a
 * European time zone who have not chosen yet, and whenever "Privacy choices" is used. Accept and
 * Decline carry the same weight on purpose.
 */
export function ConsentBar({ locale = "en" }: { locale?: LocaleCode | "en" }) {
  if (!analyticsEnabled) return null;
  const copy = getConsentStrings(locale);
  const privacy = `${sitePath(locale === "en" ? "/privacy" : `/${locale}/privacy`)}#website-analytics`;
  return <div className="consent-bar" data-consent-bar hidden role="region" aria-label={copy.label}>
    <p>{copy.message} <a href={privacy}>{copy.learnMore}</a></p>
    <div className="consent-actions">
      <button type="button" className="consent-button" data-consent-choice="denied">{copy.decline}</button>
      <button type="button" className="consent-button" data-consent-choice="granted">{copy.accept}</button>
    </div>
  </div>;
}

/** Reopens the consent bar. Without JavaScript it still leads to the analytics section of the policy. */
export function PrivacyChoicesLink({ locale = "en" }: { locale?: LocaleCode | "en" }) {
  if (!analyticsEnabled) return null;
  const copy = getConsentStrings(locale);
  return <a href={`${sitePath(locale === "en" ? "/privacy" : `/${locale}/privacy`)}#website-analytics`} data-consent-open>{copy.privacyChoices}</a>;
}
