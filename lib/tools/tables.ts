import type { ToolKey } from "../source-strings";

/**
 * The figures behind the reference tables on the tool pages. The words (heading, column heads, row
 * labels, note) live in `toolStrings` and are translated; the numbers live here, once, and are
 * formatted for each page's language. A row may name the guide it links to; the link appears only
 * while that guide is published (scheduled guides render as plain text until their day).
 */
export type ToolTableRow = { cells: (intl: string) => string[]; guide?: string };

const duration = (minutes: number) => {
  const rounded = Math.round(minutes / 5) * 5;
  return `${Math.floor(rounded / 60)} h ${String(rounded % 60).padStart(2, "0")} min`;
};

/**
 * OSRM routing on OpenStreetMap data between city centres, checked 2026-11-03: [km, minutes, guide].
 * Breaks: 15 minutes for every full two hours of driving (Queensland Government, Road Safety
 * Commission WA, Tasmanian Road Safety Advisory Council). Days: no more than 8 hours of driving a day.
 */
const drives: [number, number, string | undefined][] = [
  [162, 134, undefined],
  [165, 125, "brisbane-to-byron-bay-drive"],
  [202, 152, "hobart-to-launceston-drive"],
  [286, 210, "sydney-to-canberra-drive"],
  [435, 294, "alice-springs-to-uluru-drive"],
  [652, 473, "melbourne-to-canberra-drive"],
  [726, 555, "adelaide-to-melbourne-drive"],
  [865, 613, "sydney-to-melbourne-drive"],
  [909, 654, "brisbane-to-sydney-drive"],
  [1374, 997, "sydney-to-adelaide-drive"],
  [1492, 912, "darwin-to-alice-springs-drive"],
  [1655, 1257, "melbourne-to-brisbane-drive"],
  [1693, 1319, "brisbane-to-cairns-drive"],
  [2215, 1547, "perth-to-broome-road-trip"],
  [2608, 1824, "nullarbor-crossing-camping-guide"],
];

export const toolTables: Partial<Record<ToolKey, ToolTableRow[][]>> = {
  "drive-time-calculator": [drives.map(([km, minutes, guide]) => ({
    guide,
    cells: (intl) => [
      `${new Intl.NumberFormat(intl).format(km)} km`,
      duration(minutes),
      duration(minutes + 15 * Math.floor(minutes / 120)),
      new Intl.NumberFormat(intl).format(Math.ceil(minutes / 480)),
    ],
  }))],
};
