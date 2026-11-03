import { Fuel } from "lucide-react";
import { uiStrings, type UiStrings } from "@/lib/source-strings";
import { toolDefaults } from "@/lib/tools/calc";

const fuel = toolDefaults["fuel-cost-calculator"];

export function FuelCalculator({ ui = uiStrings, output, children }: { ui?: UiStrings; output: string; children?: React.ReactNode }) {
  return <section className="tool-card" data-fuel-tool>
    <div className="tool-heading"><Fuel/><div><p className="eyebrow">{ui.fuelEyebrow}</p><h2>{ui.fuelTitle}</h2></div></div>
    <p>{ui.fuelText}</p>
    <div className="converter-grid">
      <label><span>{ui.labelDistance}</span><input data-fuel-distance inputMode="decimal" defaultValue={String(fuel.distance)} /></label>
      <label><span>{ui.labelConsumption}</span><input data-fuel-consumption inputMode="decimal" defaultValue={String(fuel.consumption)} /></label>
      <label><span>{ui.labelFuelPrice}</span><input data-fuel-price inputMode="decimal" defaultValue={String(fuel.price)} /></label>
    </div>
    <output className="tool-output" data-fuel-output>{output}</output>
    {children}
  </section>;
}
