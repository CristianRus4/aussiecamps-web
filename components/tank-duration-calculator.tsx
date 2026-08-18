import { Droplets } from "lucide-react";

export function TankDurationCalculator() {
  return <section className="tool-card" data-tank-tool>
    <div className="tool-heading"><Droplets/><div><p className="eyebrow">Water and waste planner</p><h2>How many days off grid.</h2></div></div>
    <p>Capacity in litres only becomes useful once it is expressed in days. Grey water usually fills before fresh water empties, so both are shown.</p>
    <div className="converter-grid">
      <label><span>Fresh water (L)</span><input data-tank-fresh inputMode="decimal" defaultValue="100" /></label>
      <label><span>Grey water (L)</span><input data-tank-grey inputMode="decimal" defaultValue="90" /></label>
      <label><span>People</span><input data-tank-people inputMode="numeric" defaultValue="2" /></label>
    </div>
    <output className="tool-output" data-tank-output>4.5 days fresh · 4.5 days grey</output>
  </section>;
}
