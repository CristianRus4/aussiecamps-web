import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, CircleDollarSign } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { calculators } from "@/components/tools/tool-page";
import { mainData } from "@/lib/analytics";
import { alternatesFor } from "@/lib/seo";
import { toolKeys, toolStrings, uiStrings } from "@/lib/source-strings";
import { defaultOutputs, toolScript } from "@/lib/tools/calc";
import { toolPath } from "@/lib/tools/pages";

export const metadata: Metadata = { title: toolStrings.index.metaTitle, description: toolStrings.index.metaDescription, alternates: { canonical: "/tools/", languages: alternatesFor("tools") } };

/** The campsite comparison has four inputs, so it goes last, where the grid gives it the full width. */
const indexOrder = ["currency-converter", "fuel-cost-calculator", "drive-time-calculator", "water-tank-calculator", "campsite-cost-calculator"] as const;

/**
 * The tools index: all five calculators, each linking to its own page with the formula, a worked
 * example and questions. The calculators work here too, driven by one inline script marked
 * data-static-tools so the static export keeps it.
 */
export default function ToolsPage() {
  const outputs = defaultOutputs("en-AU", uiStrings);
  return <><Header/><main {...mainData({ kind: "tools" })}>
    <section className="page-hero tools-hero">
      <p className="eyebrow">Useful numbers</p>
      <h1>Road trip tools.<br/>No mystery maths.</h1>
      <p>Quick planning calculators for Australian prices, distances and capacity. Every assumption stays visible so you can replace it with the number that fits your route.</p>
    </section>
    <section className="tools-shell">
      {indexOrder.map((tool) => {
        const Widget = calculators[tool];
        return <Widget key={tool} output={outputs[tool]}>
          <Link href={toolPath(tool, "en")} className="text-link tool-more">{toolStrings.common.openTool} <ArrowRight/></Link>
        </Widget>;
      })}
      <section className="tools-reading">
        <div><CircleDollarSign/><h2>Build the budget from current benchmarks.</h2></div>
        <p>The tools calculate exactly what you enter. Our cost guides explain where the starting figures came from, when they were checked and what can change the final price.</p>
        <Link href="/guides/" className="text-link">Explore cost guides <ArrowRight/></Link>
      </section>
      <section className="tools-note"><Calculator/><p>These calculators are planning aids, not live booking, fuel-station or foreign-exchange quotes. Tank estimates assume roughly 11 litres of fresh water and 9 litres of grey water per person per day, which varies with showering and cooking. Confirm current prices before purchase.</p></section>
    </section>
  </main><Footer pageKey="tools"/><script data-static-tools dangerouslySetInnerHTML={{__html:toolScript(toolKeys, "en-AU", uiStrings)}}/></>;
}
