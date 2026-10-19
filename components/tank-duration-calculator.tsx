import { Droplets } from "lucide-react";
import { uiStrings, type UiStrings } from "@/lib/source-strings";

export function TankDurationCalculator({ ui = uiStrings, output, children }: { ui?: UiStrings; output: string; children?: React.ReactNode }) {
  return <section className="tool-card" data-tank-tool>
    <div className="tool-heading"><Droplets/><div><p className="eyebrow">{ui.tankEyebrow}</p><h2>{ui.tankTitle}</h2></div></div>
    <p>{ui.tankText}</p>
    <div className="converter-grid">
      <label><span>{ui.labelFresh}</span><input data-tank-fresh inputMode="decimal" defaultValue="100" /></label>
      <label><span>{ui.labelGrey}</span><input data-tank-grey inputMode="decimal" defaultValue="90" /></label>
      <label><span>{ui.labelPeople}</span><input data-tank-people inputMode="numeric" defaultValue="2" /></label>
    </div>
    <output className="tool-output" data-tank-output>{output}</output>
    {children}
  </section>;
}
