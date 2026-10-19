import { currencyRates } from "../currency";
import type { ToolKey } from "../source-strings";

/**
 * The five calculators: the server-rendered first result and the inline script that updates it. `intl` is the page’s Intl locale (en-AU for English).
 *
 * The static export strips every script except JSON-LD and ones marked data-static-tools, so each tool
 * page ships one small inline script with only its own handler. The same arithmetic is written twice,
 * once here in TypeScript for the HTML a crawler or a no-JS visitor sees, and once in the script
 * string below; `defaultOutputs` and the script must agree, and the worked examples on the pages use
 * the same default inputs.
 */
export type ToolUi = {
  enterValidValues: string; enterValidAmount: string; daysFresh: string; daysGrey: string;
  theSame: string; perAdultCheaper: string; perSiteCheaper: string;
};

export const toolDefaults = {
  "fuel-cost-calculator": { distance: 1000, consumption: 12, price: 2.08 },
  "drive-time-calculator": { distance: 250, speed: 60, stops: 3 },
  "campsite-cost-calculator": { adults: 2, nights: 5, perPerson: 20, perSite: 50 },
  "currency-converter": { amount: 100, from: "AUD", to: "NZD" },
  "water-tank-calculator": { fresh: 100, grey: 90, people: 2 },
} as const;

/** Which element each tool's script binds to (the calculator components carry these attributes). */
export const toolSelector: Record<ToolKey, string> = {
  "fuel-cost-calculator": "[data-fuel-tool]",
  "drive-time-calculator": "[data-drive-tool]",
  "campsite-cost-calculator": "[data-camp-tool]",
  "currency-converter": "[data-currency-tool]",
  "water-tank-calculator": "[data-tank-tool]",
};

function formatters(htmlLang: string) {
  const fixed = (digits: number) => new Intl.NumberFormat(htmlLang, { minimumFractionDigits: digits, maximumFractionDigits: digits });
  // Australian English writes A$ so a visitor from another dollar country is never left guessing.
  const aud = (value: number) => (htmlLang === "en-AU" ? `A$${fixed(2).format(value)}` : new Intl.NumberFormat(htmlLang, { style: "currency", currency: "AUD" }).format(value));
  const money = (value: number, currency: string) => {
    if (currency === "AUD") return aud(value);
    const digits = currency === "JPY" || currency === "KRW" ? 0 : 2;
    return new Intl.NumberFormat(htmlLang, { style: "currency", currency, minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
  };
  return { fixed, aud, money };
}

/** The result each calculator shows for its default inputs, formatted for the page language. */
export function defaultOutputs(htmlLang: string, ui: ToolUi): Record<ToolKey, string> {
  const { fixed, aud, money } = formatters(htmlLang);
  const fuel = toolDefaults["fuel-cost-calculator"];
  const litres = (fuel.distance * fuel.consumption) / 100;
  const drive = toolDefaults["drive-time-calculator"];
  const minutes = Math.round((drive.distance / drive.speed) * 60 + drive.stops * 20);
  const camp = toolDefaults["campsite-cost-calculator"];
  const perAdult = camp.adults * camp.nights * camp.perPerson;
  const perSite = camp.nights * camp.perSite;
  const currency = toolDefaults["currency-converter"];
  const tank = toolDefaults["water-tank-calculator"];
  return {
    "fuel-cost-calculator": `${fixed(1).format(litres)} L · ${aud(litres * fuel.price)} · ${aud((litres * fuel.price) / fuel.distance)}/km`,
    "drive-time-calculator": `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, "0")} min`,
    "campsite-cost-calculator": `${aud(perAdult)} vs ${aud(perSite)} · ${perAdult === perSite ? ui.theSame : perAdult < perSite ? ui.perAdultCheaper : ui.perSiteCheaper}`,
    "currency-converter": money((currency.amount / currencyRates[currency.from]) * currencyRates[currency.to], currency.to),
    "water-tank-calculator": `${fixed(1).format(tank.fresh / (tank.people * 11))} ${ui.daysFresh} · ${fixed(1).format(tank.grey / (tank.people * 9))} ${ui.daysGrey}`,
  };
}

const handlers: Record<ToolKey, string> = {
  "fuel-cost-calculator": `const distance=num('fuel-distance'),consumption=num('fuel-consumption'),price=num('fuel-price');
if(![distance,consumption,price].every(ok)||distance<=0)return T.enterValidValues;
const litres=distance*consumption/100,cost=litres*price;return fx(1).format(litres)+' L · '+aud(cost)+' · '+aud(cost/distance)+'/km'`,
  "drive-time-calculator": `const distance=num('drive-distance'),speed=Number(root.querySelector('[data-drive-speed]').value),stops=num('drive-stops');
if(![distance,speed,stops].every(ok)||speed<=0)return T.enterValidValues;
const minutes=Math.round(distance/speed*60+stops*20);return Math.floor(minutes/60)+' h '+String(minutes%60).padStart(2,'0')+' min'`,
  "campsite-cost-calculator": `const adults=num('camp-adults'),nights=num('camp-nights'),perPerson=num('camp-per-person'),perSite=num('camp-per-site');
if(![adults,nights,perPerson,perSite].every(ok))return T.enterValidValues;
const a=adults*nights*perPerson,b=nights*perSite;return aud(a)+' vs '+aud(b)+' · '+(a===b?T.theSame:(a<b?T.perAdultCheaper:T.perSiteCheaper))`,
  "currency-converter": `const amount=num('currency-amount'),from=root.querySelector('[data-currency-from]').value,to=root.querySelector('[data-currency-to]').value;
if(!ok(amount))return T.enterValidAmount;return money(amount/R[from]*R[to],to)`,
  "water-tank-calculator": `const fresh=num('tank-fresh'),grey=num('tank-grey'),people=num('tank-people');
if(![fresh,grey,people].every(ok)||people<=0)return T.enterValidValues;
return fx(1).format(fresh/(people*11))+' '+T.daysFresh+' · '+fx(1).format(grey/(people*9))+' '+T.daysGrey`,
};
const outputAttribute: Record<ToolKey, string> = {
  "fuel-cost-calculator": "fuel-output", "drive-time-calculator": "drive-output", "campsite-cost-calculator": "camp-output",
  "currency-converter": "currency-output", "water-tank-calculator": "tank-output",
};

/**
 * The inline script for one or more calculators on a page. Each tool reports `tool_used` once per page
 * view, on the visitor's first change, through the analytics helper when it is present.
 */
export function toolScript(tools: readonly ToolKey[], htmlLang: string, ui: ToolUi): string {
  const T = JSON.stringify({ enterValidValues: ui.enterValidValues, enterValidAmount: ui.enterValidAmount, daysFresh: ui.daysFresh, daysGrey: ui.daysGrey, theSame: ui.theSame, perAdultCheaper: ui.perAdultCheaper, perSiteCheaper: ui.perSiteCheaper });
  const bindings = tools.map((tool) => `bind(${JSON.stringify(toolSelector[tool])},${JSON.stringify(tool)},${JSON.stringify(outputAttribute[tool])},(root,num)=>{${handlers[tool]}});`).join("\n");
  return `(function(){
const L=${JSON.stringify(htmlLang)},T=${T},R=${JSON.stringify(currencyRates)};
const fx=(d)=>new Intl.NumberFormat(L,{minimumFractionDigits:d,maximumFractionDigits:d});
const aud=(v)=>L==='en-AU'?'A$'+fx(2).format(v):new Intl.NumberFormat(L,{style:'currency',currency:'AUD'}).format(v);
const money=(v,c)=>{if(c==='AUD')return aud(v);const d=c==='JPY'||c==='KRW'?0:2;return new Intl.NumberFormat(L,{style:'currency',currency:c,minimumFractionDigits:d,maximumFractionDigits:d}).format(v)};
const ok=(v)=>Number.isFinite(v)&&v>=0;
const bind=(selector,tool,output,compute)=>{const root=document.querySelector(selector);if(!root)return;let used=false;
const num=(name)=>{const value=String(root.querySelector('[data-'+name+']').value).trim().replace(',','.');return value===''?NaN:Number(value)};
const update=(event)=>{root.querySelector('[data-'+output+']').textContent=compute(root,num);
if(event&&!used){used=true;if(typeof window.acTrack==='function')window.acTrack('tool_used',{tool:tool})}};
root.addEventListener('input',update);root.addEventListener('change',update);update()};
${bindings}
})();`;
}
