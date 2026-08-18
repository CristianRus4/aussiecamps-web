import { Clock } from "lucide-react";

export function DriveTimeCalculator() {
  return <section className="tool-card" data-drive-tool>
    <div className="tool-heading"><Clock/><div><p className="eyebrow">Driving day estimator</p><h2>How long that day really takes.</h2></div></div>
    <p>Routing apps give moving time on an ideal road. This adds the road character and your actual stops, which is where a day usually runs over.</p>
    <div className="converter-grid">
      <label><span>Distance (km)</span><input data-drive-distance inputMode="decimal" defaultValue="250" /></label>
      <label><span>Road type</span><select data-drive-speed defaultValue="60"><option value="85">Motorway or open straight</option><option value="70">Main highway</option><option value="60">Winding or coastal</option><option value="45">Narrow, steep or gravel</option></select></label>
      <label><span>Stops</span><input data-drive-stops inputMode="numeric" defaultValue="3" /></label>
    </div>
    <output className="tool-output" data-drive-output>4 h 32 min</output>
  </section>;
}
