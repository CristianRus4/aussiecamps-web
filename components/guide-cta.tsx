import { FaApple } from "react-icons/fa6";
import { appStoreUrl, type CtaPlacement } from "@/lib/app-store";
import { qrSvg } from "@/lib/qr";

type Placement = Extract<CtaPlacement, "card" | "listicle">;
type Copy = { locale: string; placement: Placement; label: string };

/**
 * The download boxes every guide carries in every language: one beside the article that stays in view
 * while reading, one at the end. On desktop, hovering the store button shows the QR code
 * (`ct=w_qr_<locale>`) above it; the path is drawn once per page and the second box reuses it.
 */
const QR_ID = "guide-qr";

function GuideQr({ locale, reuse = false }: { locale: string; reuse?: boolean }) {
  const { viewBox, path } = qrSvg(appStoreUrl({ placement: "qr", locale }));
  return <div className="qr-image guide-qr" aria-hidden="true"><svg viewBox={viewBox} focusable="false" shapeRendering="crispEdges">{reuse ? <use href={`#${QR_ID}`} /> : <path id={QR_ID} d={path} />}</svg></div>;
}

function StoreButton({ locale, placement, label }: Copy) {
  return <a className="store-button" href={appStoreUrl({ placement, locale })} data-cta={placement}><FaApple aria-hidden="true" /><span>{label}</span></a>;
}

/** The store button with its QR code, which appears above it while a desktop pointer hovers the button. */
export function StoreWithQr({ reuse = false, ...copy }: Copy & { reuse?: boolean }) {
  return <div className="store-qr"><StoreButton {...copy} /><GuideQr locale={copy.locale} reuse={reuse} /></div>;
}

export function GuideSideCard({ eyebrow, title, ...copy }: Copy & { eyebrow: string; title: string }) {
  return <div className="article-side-card"><p className="eyebrow">{eyebrow}</p><h3>{title}</h3><StoreWithQr {...copy} /></div>;
}

export function GuideEndCta({ eyebrow, title, text, ...copy }: Copy & { eyebrow: string; title: string; text: string }) {
  return <div className="article-end-cta">
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>
    <StoreWithQr {...copy} reuse />
  </div>;
}
