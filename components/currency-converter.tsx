import { ArrowRightLeft } from "lucide-react";
import { displayCurrencies, exchangeRateDate } from "@/lib/currency";
import { uiStrings, type UiStrings } from "@/lib/source-strings";
import { formatArticleDate } from "@/lib/article-dates";

export function CurrencyConverter({ ui = uiStrings, output, children }: { ui?: UiStrings; output: string; children?: React.ReactNode }) {
  return <section className="tool-card" data-currency-tool>
    <div className="tool-heading"><ArrowRightLeft/><div><p className="eyebrow">{ui.currencyEyebrow}</p><h2>{ui.currencyTitle}</h2></div></div>
    <p>{ui.currencyText} {ui.conversionsUse} {formatArticleDate(exchangeRateDate)}.</p>
    <div className="converter-grid">
      <label><span>{ui.amount}</span><input data-currency-amount inputMode="decimal" defaultValue="100" aria-label={ui.amount} /></label>
      <label><span>{ui.from}</span><select data-currency-from defaultValue="AUD">{displayCurrencies.map((currency) => <option value={currency} key={currency}>{currency}</option>)}</select></label>
      <label><span>{ui.to}</span><select data-currency-to defaultValue="NZD">{displayCurrencies.map((currency) => <option value={currency} key={currency}>{currency}</option>)}</select></label>
    </div>
    <output className="tool-output" data-currency-output>{output}</output>
    {children}
  </section>;
}
