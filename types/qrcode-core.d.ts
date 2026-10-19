/** The QR encoder inside the `qrcode` package, used without its PNG and terminal renderers. */
declare module "qrcode/lib/core/qrcode.js" {
  export function create(
    text: string,
    options?: { errorCorrectionLevel?: "L" | "M" | "Q" | "H" },
  ): { modules: { size: number; get(row: number, column: number): number | boolean } };
}
