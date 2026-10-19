import { Clock } from "lucide-react";
import { uiStrings, type UiStrings } from "@/lib/source-strings";

export function DriveTimeCalculator({ ui = uiStrings, output, children }: { ui?: UiStrings; output: string; children?: React.ReactNode }) {
  return <section className="tool-card" data-drive-tool>
    <div className="tool-heading"><Clock/><div><p className="eyebrow">{ui.driveEyebrow}</p><h2>{ui.driveTitle}</h2></div></div>
    <p>{ui.driveText}</p>
    <div className="converter-grid">
      <label><span>{ui.labelDistance}</span><input data-drive-distance inputMode="decimal" defaultValue="250" /></label>
      <label><span>{ui.labelRoadType}</span><select data-drive-speed defaultValue="60"><option value="85">{ui.roadMotorway}</option><option value="70">{ui.roadHighway}</option><option value="60">{ui.roadWinding}</option><option value="45">{ui.roadNarrow}</option></select></label>
      <label><span>{ui.labelStops}</span><input data-drive-stops inputMode="numeric" defaultValue="3" /></label>
    </div>
    <output className="tool-output" data-drive-output>{output}</output>
    {children}
  </section>;
}
