import { APP_STORE_URL } from "@/lib/site";
import { Apple } from "lucide-react";

export function DownloadCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`download-card ${compact ? "download-card-compact" : ""}`}>
      {!compact && <div className="qr-image" style={{backgroundImage:"url(/images/aussie-qr.webp)"}} role="img" aria-label="QR code to download AussieCamps" />}
      <a className="store-button" href={APP_STORE_URL} aria-label="Download AussieCamps for iOS">
        <Apple aria-hidden="true" fill="currentColor" />
        <span>Download for iOS</span>
      </a>
    </div>
  );
}
