import { FaApple } from "react-icons/fa6";
import { appStoreUrl, type CtaPlacement } from "@/lib/app-store";
import { QrCode } from "@/components/qr-code";

export function DownloadCard({ compact = false, placement = "card" }: { compact?: boolean; placement?: Extract<CtaPlacement, "hero" | "card"> }) {
  return (
    <div className={`download-card ${compact ? "download-card-compact" : ""}`}>
      {!compact && <QrCode label="QR code to download AussieCamps" />}
      <a className="store-button" href={appStoreUrl({ placement })} data-cta={placement} aria-label="Download AussieCamps for iOS">
        <FaApple aria-hidden="true" />
        <span>Download app</span>
      </a>
    </div>
  );
}
