import { FaApple } from "react-icons/fa6";
import { appStoreUrl, type CtaPlacement } from "@/lib/app-store";
import { qrSvg } from "@/lib/qr";

type Placement = Extract<CtaPlacement, "card" | "listicle">;
type Copy = { locale: string; placement: Placement; label: string };

/**
 * The download boxes every guide carries in every language: one beside the article that stays in view
 * while reading, one at the end. On desktop both show the QR code (`ct=w_qr_<locale>`); the path is
 * drawn once per page and the second box reuses it, so the code adds one SVG to each page, not two.
 */
const QR_ID = "guide-qr";

function GuideQr({ locale, reuse = false }: { locale: string; reuse?: boolean }) {
  const { viewBox, path } = qrSvg(appStoreUrl({ placement: "qr", locale }));
  return <div className="qr-image guide-qr" aria-hidden="true"><svg viewBox={viewBox} focusable="false" shapeRendering="crispEdges">{reuse ? <use href={`#${QR_ID}`} /> : <path id={QR_ID} d={path} />}</svg></div>;
}

function StoreButton({ locale, placement, label }: Copy) {
  return <a className="store-button" href={appStoreUrl({ placement, locale })} data-cta={placement}><FaApple aria-hidden="true" /><span>{label}</span></a>;
}

export function GuideSideCard({ eyebrow, title, ...copy }: Copy & { eyebrow: string; title: string }) {
  return <div className="article-side-card"><p className="eyebrow">{eyebrow}</p><h3>{title}</h3><GuideQr locale={copy.locale} /><StoreButton {...copy} /></div>;
}

export function GuideEndCta({ eyebrow, title, text, ...copy }: Copy & { eyebrow: string; title: string; text: string }) {
  return <div className="article-end-cta">
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>
    <div className="end-cta-actions"><GuideQr locale={copy.locale} reuse /><StoreButton {...copy} /></div>
  </div>;
}
