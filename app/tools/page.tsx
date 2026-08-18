import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, CircleDollarSign } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CurrencyConverter } from "@/components/currency-converter";
import { FuelCalculator } from "@/components/fuel-calculator";
import { DriveTimeCalculator } from "@/components/drive-time-calculator";
import { TankDurationCalculator } from "@/components/tank-duration-calculator";
import { CampsiteCostCalculator } from "@/components/campsite-cost-calculator";
import { currencyRates } from "@/lib/currency";

export const metadata: Metadata = { title: "Australia road trip tools", description: "Convert Australian prices, calculate road trip fuel, estimate a realistic driving day, plan tank capacity and compare campsite pricing.", alternates: { canonical: "/tools" } };

export default function ToolsPage() {
  // One inline script drives every calculator. It is marked data-static-tools so the static export
  // keeps it, and each tool is guarded so a missing element cannot break the others.
  const script = `(function(){
const rates=${JSON.stringify(currencyRates)};
const money=(value,currency)=>new Intl.NumberFormat('en-AU',{style:'currency',currency,maximumFractionDigits:currency==='JPY'||currency==='KRW'?0:value<10?2:0}).format(value);
const aud=(value)=>'A$'+value.toFixed(2);
const num=(root,name)=>Number(root.querySelector('[data-'+name+']').value);
const bind=(selector,update)=>{const root=document.querySelector(selector);if(!root)return;root.addEventListener('input',update.bind(null,root));root.addEventListener('change',update.bind(null,root));update(root)};

bind('[data-currency-tool]',(root)=>{const amount=num(root,'currency-amount');const from=root.querySelector('[data-currency-from]').value;const to=root.querySelector('[data-currency-to]').value;root.querySelector('[data-currency-output]').textContent=Number.isFinite(amount)&&amount>=0?money(amount/rates[from]*rates[to],to):'Enter a valid amount'});

bind('[data-fuel-tool]',(root)=>{const distance=num(root,'fuel-distance'),consumption=num(root,'fuel-consumption'),price=num(root,'fuel-price');const valid=[distance,consumption,price].every(v=>Number.isFinite(v)&&v>=0);const litres=distance*consumption/100;root.querySelector('[data-fuel-output]').textContent=valid?litres.toFixed(1)+' L · '+aud(litres*price):'Enter valid values'});

bind('[data-drive-tool]',(root)=>{const distance=num(root,'drive-distance'),speed=Number(root.querySelector('[data-drive-speed]').value),stops=num(root,'drive-stops');const valid=[distance,speed,stops].every(v=>Number.isFinite(v)&&v>=0)&&speed>0;if(!valid){root.querySelector('[data-drive-output]').textContent='Enter valid values';return}
const minutes=Math.round(distance/speed*60+stops*20);root.querySelector('[data-drive-output]').textContent=Math.floor(minutes/60)+' h '+String(minutes%60).padStart(2,'0')+' min'});

bind('[data-tank-tool]',(root)=>{const fresh=num(root,'tank-fresh'),grey=num(root,'tank-grey'),people=num(root,'tank-people');const valid=[fresh,grey,people].every(v=>Number.isFinite(v)&&v>=0)&&people>0;if(!valid){root.querySelector('[data-tank-output]').textContent='Enter valid values';return}
const freshDays=fresh/(people*11),greyDays=grey/(people*9);root.querySelector('[data-tank-output]').textContent=freshDays.toFixed(1)+' days fresh · '+greyDays.toFixed(1)+' days grey'});

bind('[data-camp-tool]',(root)=>{const adults=num(root,'camp-adults'),nights=num(root,'camp-nights'),perPerson=num(root,'camp-per-person'),perSite=num(root,'camp-per-site');const valid=[adults,nights,perPerson,perSite].every(v=>Number.isFinite(v)&&v>=0);if(!valid){root.querySelector('[data-camp-output]').textContent='Enter valid values';return}
const a=adults*nights*perPerson,b=nights*perSite;root.querySelector('[data-camp-output]').textContent=aud(a)+' vs '+aud(b)+' · '+(a===b?'the same':(a<b?'per-adult is cheaper':'per-site is cheaper'))});
})();`;

  return <><Header/><main>
    <section className="page-hero tools-hero">
      <p className="eyebrow">Useful numbers</p>
      <h1>Road trip tools.<br/>No mystery maths.</h1>
      <p>Quick planning calculators for Australian prices, distances and capacity. Every assumption stays visible so you can replace it with the number that fits your route.</p>
    </section>
    <section className="tools-shell">
      <CurrencyConverter/>
      <FuelCalculator/>
      <DriveTimeCalculator/>
      <TankDurationCalculator/>
      <CampsiteCostCalculator/>
      <section className="tools-reading">
        <div><CircleDollarSign/><h2>Build the budget from current benchmarks.</h2></div>
        <p>The tools calculate exactly what you enter. Our cost guides explain where the starting figures came from, when they were checked and what can change the final price.</p>
        <Link href="/guides" className="text-link">Explore cost guides <ArrowRight/></Link>
      </section>
      <section className="tools-note"><Calculator/><p>These calculators are planning aids, not live booking, fuel-station or foreign-exchange quotes. Tank estimates assume roughly 11 litres of fresh water and 9 litres of grey water per person per day, which varies with showering and cooking. Confirm current prices before purchase.</p></section>
    </section>
  </main><Footer/><script data-static-tools dangerouslySetInnerHTML={{__html:script}}/></>;
}
