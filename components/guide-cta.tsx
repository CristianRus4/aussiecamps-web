import { FaApple } from "react-icons/fa6";
import { appStoreUrl, type CtaPlacement } from "@/lib/app-store";
import { qrSvg } from "@/lib/qr";

type Placement = Extract<CtaPlacement, "card" | "listicle" | "place" | "hub" | "trip">;
type Copy = { locale: string; placement: Placement; label: string };

/**
 * The download boxes every guide carries in every language: one beside the article that stays in view
 * while reading, one inside the text and one at the end. On a desktop, hovering a store button grows it
 * upward into the QR code (`ct=w_qr_<locale>`); the code is drawn once per page and the others reuse it.
 */
const QR_ID = "guide-qr";

function QrCode({ locale, reuse }: { locale: string; reuse: boolean }) {
  const { viewBox, path } = qrSvg(appStoreUrl({ placement: "qr", locale }));
  return <svg className="qr-morph-code" viewBox={viewBox} focusable="false" shapeRendering="crispEdges">{reuse ? <use href={`#${QR_ID}`} /> : <path id={QR_ID} d={path} />}</svg>;
}

function StoreButton({ locale, placement, label }: Copy) {
  return <a className="store-button" href={appStoreUrl({ placement, locale })} data-cta={placement}><FaApple aria-hidden="true" /><span>{label}</span></a>;
}

/** The store button; on a desktop, hovering it morphs it into the QR code with the label kept below. */
export function StoreWithQr({ reuse = false, ...copy }: Copy & { reuse?: boolean }) {
  return <div className="store-qr">
    <StoreButton {...copy} />
    <div className="qr-morph" aria-hidden="true"><QrCode locale={copy.locale} reuse={reuse} /><span className="qr-morph-label"><FaApple />{copy.label}</span></div>
  </div>;
}

export function GuideSideCard({ eyebrow, title, ...copy }: Copy & { eyebrow: string; title: string }) {
  return <div className="article-side-card"><p className="eyebrow">{eyebrow}</p><h3>{title}</h3><StoreWithQr {...copy} /></div>;
}

/** `reuse` borrows the side box's QR code; a page without a side box draws its own. */
export function GuideEndCta({ eyebrow, title, text, reuse = true, ...copy }: Copy & { eyebrow: string; title: string; text: string; reuse?: boolean }) {
  return <div className="article-end-cta">
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>
    <StoreWithQr {...copy} reuse={reuse} />
  </div>;
}

/**
 * The one download box inside a guide's text, in the end box's style but smaller: after the second
 * paragraph of the first section. Its text sits in <div>s, not <p>s, so the
 * similarity audit never reads it as prose.
 */
export function GuideMidCta({ eyebrow, title, ...copy }: Copy & { eyebrow: string; title: string }) {
  return <div className="article-mid-cta"><div><div className="eyebrow">{eyebrow}</div><div className="article-mid-cta-title">{title}</div></div><StoreWithQr {...copy} reuse /></div>;
}

/** The box sits in the first section, after its second paragraph (or its only one). */
export const midAfter = (paragraphs: number) => Math.min(2, paragraphs) - 1;
