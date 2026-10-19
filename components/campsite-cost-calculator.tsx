import { Wallet } from "lucide-react";
import { uiStrings, type UiStrings } from "@/lib/source-strings";

export function CampsiteCostCalculator({ ui = uiStrings, output, children }: { ui?: UiStrings; output: string; children?: React.ReactNode }) {
  return <section className="tool-card" data-camp-tool>
    <div className="tool-heading"><Wallet/><div><p className="eyebrow">{ui.campEyebrow}</p><h2>{ui.campTitle}</h2></div></div>
    <p>{ui.campText}</p>
    <div className="converter-grid">
      <label><span>{ui.labelAdults}</span><input data-camp-adults inputMode="numeric" defaultValue="2" /></label>
      <label><span>{ui.labelNights}</span><input data-camp-nights inputMode="numeric" defaultValue="5" /></label>
      <label><span>{ui.labelPerAdult}</span><input data-camp-per-person inputMode="decimal" defaultValue="20" /></label>
      <label><span>{ui.labelPerSite}</span><input data-camp-per-site inputMode="decimal" defaultValue="50" /></label>
    </div>
    <output className="tool-output" data-camp-output>{output}</output>
    {children}
  </section>;
}
