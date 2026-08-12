import { APP_STORE_URL } from "@/lib/site";
import { Apple, ArrowUpRight } from "lucide-react";

export function DownloadCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`download-card ${compact ? "download-card-compact" : ""}`}>
      {!compact && <div className="qr-image" style={{backgroundImage:"url(/images/aussie-qr.webp)"}} role="img" aria-label="QR code to download AussieCamps" />}
      <a className="store-button" href={APP_STORE_URL} aria-label="Download AussieCamps on the App Store">
        <Apple size={25} fill="currentColor" />
        <span><small>Download on the</small><strong>App Store</strong></span>
        <ArrowUpRight size={18} />
      </a>
    </div>
  );
}
