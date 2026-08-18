import { Wallet } from "lucide-react";

export function CampsiteCostCalculator() {
  return <section className="tool-card" data-camp-tool>
    <div className="tool-heading"><Wallet/><div><p className="eyebrow">Campsite comparison</p><h2>Per person or per site?</h2></div></div>
    <p>A national park camp usually charges per adult and a holiday park usually charges per site. The cheaper option flips with party size, which catches families out.</p>
    <div className="converter-grid">
      <label><span>Adults</span><input data-camp-adults inputMode="numeric" defaultValue="2" /></label>
      <label><span>Nights</span><input data-camp-nights inputMode="numeric" defaultValue="5" /></label>
      <label><span>Per adult (AUD)</span><input data-camp-per-person inputMode="decimal" defaultValue="20" /></label>
      <label><span>Per site (AUD)</span><input data-camp-per-site inputMode="decimal" defaultValue="50" /></label>
    </div>
    <output className="tool-output" data-camp-output>A$200 vs A$250 · per-adult is cheaper</output>
  </section>;
}
