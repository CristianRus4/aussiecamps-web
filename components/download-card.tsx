import { APP_STORE_URL } from "@/lib/site";
import { FaApple } from "react-icons/fa6";

export function DownloadCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`download-card ${compact ? "download-card-compact" : ""}`}>
      {!compact && <div className="qr-image" style={{ "--qr": "url(/images/aussie-qr.png)" } as React.CSSProperties} role="img" aria-label="QR code to download AussieCamps" />}
      <a className="store-button" href={APP_STORE_URL} aria-label="Download AussieCamps for iOS">
        <FaApple aria-hidden="true" />
        <span>Download app</span>
      </a>
    </div>
  );
}
