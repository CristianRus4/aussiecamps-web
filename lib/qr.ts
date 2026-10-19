import { create } from "qrcode/lib/core/qrcode.js";

/**
 * A QR code as an SVG path, generated at build time.
 *
 * The download card used to show a fixed PNG, which could only ever encode one URL. The code now
 * carries the same campaign link as the store button beside it (`ct=w_qr_<locale>`), so scans are
 * counted per language in App Store Connect, and it scales without blurring.
 *
 * Each run of dark modules in a row becomes one rectangle, which keeps the path short. The viewBox
 * adds a one-module margin; the card's own padding supplies the rest of the quiet zone.
 */
export function qrSvg(text: string): { viewBox: string; path: string } {
  const { modules } = create(text, { errorCorrectionLevel: "M" });
  const { size } = modules;
  let path = "";
  for (let row = 0; row < size; row += 1) {
    let column = 0;
    while (column < size) {
      if (!modules.get(row, column)) { column += 1; continue; }
      const start = column;
      while (column < size && modules.get(row, column)) column += 1;
      path += `M${start} ${row}h${column - start}v1h-${column - start}z`;
    }
  }
  return { viewBox: `-1 -1 ${size + 2} ${size + 2}`, path };
}
