import outline from "@/lib/data/au-outline.json";

type Outline = { bounds: Record<string, [number, number, number, number]>; states: Record<string, [number, number][][]> };
const data = outline as unknown as Outline;

/**
 * A static dot map, drawn at build time as inline SVG: the state's outline (Natural Earth, public
 * domain) with one dot per place in the hub. Neighbouring states are drawn faintly so the coast and
 * borders read correctly. No tiles, no script and no third-party request.
 */
export function HubMap({ state, dots, label }: { state: string; dots: [number, number][]; label: string }) {
  const [minLng, minLat, maxLng, maxLat] = data.bounds[state];
  const padLng = (maxLng - minLng) * 0.06;
  const padLat = (maxLat - minLat) * 0.06;
  const west = minLng - padLng;
  const north = maxLat + padLat;
  const scaleX = Math.cos((((minLat + maxLat) / 2) * Math.PI) / 180);
  const width = 600;
  const unit = width / ((maxLng - minLng + 2 * padLng) * scaleX);
  const height = Math.round((maxLat - minLat + 2 * padLat) * unit);
  const x = (lng: number) => ((lng - west) * scaleX * unit).toFixed(1);
  const y = (lat: number) => ((north - lat) * unit).toFixed(1);
  const path = (rings: [number, number][][]) => rings.map((ring) => `M${ring.map(([lng, lat]) => `${x(lng)} ${y(lat)}`).join("L")}Z`).join("");
  const dotPath = dots.map(([lng, lat]) => `M${x(lng)} ${y(lat)}h0`).join("");
  const radius = Math.max(4, Math.min(9, 900 / Math.sqrt(dots.length + 40)));
  return <figure className="hub-map">
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={label} preserveAspectRatio="xMidYMid meet">
      {Object.entries(data.states).filter(([code]) => code !== state).map(([code, rings]) => <path key={code} d={path(rings)} className="hub-map-other" />)}
      <path d={path(data.states[state])} className="hub-map-state" />
      <path d={dotPath} className="hub-map-dots" strokeWidth={radius} />
    </svg>
    <figcaption>{label}</figcaption>
  </figure>;
}
