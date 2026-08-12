import { Fuel } from "lucide-react";

export function FuelCalculator() {
  return <section className="tool-card" data-fuel-tool>
    <div className="tool-heading"><Fuel/><div><p className="eyebrow">Fuel calculator</p><h2>Price the driving distance.</h2></div></div>
    <p>Enter the full route distance, the vehicle’s loaded fuel use and the expected price per litre. Remote prices can exceed city benchmarks.</p>
    <div className="converter-grid">
      <label><span>Distance (km)</span><input data-fuel-distance inputMode="decimal" defaultValue="1000" /></label>
      <label><span>Consumption (L/100 km)</span><input data-fuel-consumption inputMode="decimal" defaultValue="12" /></label>
      <label><span>Fuel price (AUD/L)</span><input data-fuel-price inputMode="decimal" defaultValue="2.08" /></label>
    </div>
    <output className="tool-output" data-fuel-output>120.0 L · A$249.60</output>
  </section>;
}
