export const currencyRates = {
  AUD: 1,
  NZD: 1.2033,
  USD: 0.7061,
  GBP: 0.5228,
  EUR: 0.6122,
  CNY: 4.7638,
  INR: 67.38,
  SGD: 0.9044,
  JPY: 112.57,
  KRW: 999.58,
} as const;

export type DisplayCurrency = keyof typeof currencyRates;
export const displayCurrencies = Object.keys(currencyRates) as DisplayCurrency[];
/** ISO date of the RBA rates above; format it with formatArticleDate for the reader's language. */
export const exchangeRateDate = "2026-08-12";

export function convertFromAud(aud: number, currency: DisplayCurrency) {
  return aud * currencyRates[currency];
}

/** Money in the reader's conventions: `intl` is the page's Intl locale (en-AU, de-DE, ja-JP). */
export function formatMoney(value: number, currency: DisplayCurrency, intl = "en-AU") {
  const maximumFractionDigits = currency === "JPY" || currency === "KRW" ? 0 : value < 10 ? 2 : 0;
  return new Intl.NumberFormat(intl, {
    style: "currency",
    currency,
    maximumFractionDigits,
  }).format(value);
}

export function formatAudRange(audLow: number, audHigh: number | undefined, currency: DisplayCurrency, intl = "en-AU") {
  const low = formatMoney(convertFromAud(audLow, currency), currency, intl);
  if (audHigh == null || audHigh === audLow) return low;
  return `${low}–${formatMoney(convertFromAud(audHigh, currency), currency, intl)}`;
}
