import { ArrowRightLeft } from "lucide-react";
import { displayCurrencies, exchangeRateDate } from "@/lib/currency";

export function CurrencyConverter() {
  return <section className="tool-card" data-currency-tool>
    <div className="tool-heading"><ArrowRightLeft/><div><p className="eyebrow">Currency converter</p><h2>Convert an Australian price.</h2></div></div>
    <p>Reference conversion for trip planning using Reserve Bank of Australia rates from {exchangeRateDate}. Your bank or card may use another rate and add fees.</p>
    <div className="converter-grid">
      <label><span>Amount</span><input data-currency-amount inputMode="decimal" defaultValue="100" aria-label="Amount to convert" /></label>
      <label><span>From</span><select data-currency-from defaultValue="AUD">{displayCurrencies.map((currency) => <option value={currency} key={currency}>{currency}</option>)}</select></label>
      <label><span>To</span><select data-currency-to defaultValue="NZD">{displayCurrencies.map((currency) => <option value={currency} key={currency}>{currency}</option>)}</select></label>
    </div>
    <output className="tool-output" data-currency-output>NZD 120</output>
  </section>;
}
