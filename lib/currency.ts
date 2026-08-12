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
export const exchangeRateDate = "12 August 2026";

export function convertFromAud(aud: number, currency: DisplayCurrency) {
  return aud * currencyRates[currency];
}

export function formatMoney(value: number, currency: DisplayCurrency) {
  const maximumFractionDigits = currency === "JPY" || currency === "KRW" ? 0 : value < 10 ? 2 : 0;
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency,
    maximumFractionDigits,
  }).format(value);
}

export function formatAudRange(audLow: number, audHigh: number | undefined, currency: DisplayCurrency) {
  const low = formatMoney(convertFromAud(audLow, currency), currency);
  if (audHigh == null || audHigh === audLow) return low;
  return `${low}–${formatMoney(convertFromAud(audHigh, currency), currency)}`;
}
