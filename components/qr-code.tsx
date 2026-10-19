import { appStoreUrl } from "@/lib/app-store";
import { qrSvg } from "@/lib/qr";

/**
 * The download QR code, rendered as inline SVG at build time from the same campaign link the store
 * button uses (`ct=w_qr_<locale>`). With a label it is announced as an image; without one it is
 * decorative and the store button beside it is the accessible way to the App Store.
 */
export function QrCode({ locale = "en", label }: { locale?: string; label?: string }) {
  const { viewBox, path } = qrSvg(appStoreUrl({ placement: "qr", locale }));
  const a11y = label ? { role: "img", "aria-label": label } : { "aria-hidden": true as const };
  return <div className="qr-image" {...a11y}><svg viewBox={viewBox} aria-hidden="true" focusable="false" shapeRendering="crispEdges"><path d={path} /></svg></div>;
}
