import Link from "next/link";
import { ArrowLeft, ArrowRight, Calculator } from "lucide-react";
import { FaApple } from "react-icons/fa6";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LocalizedFooter, LocalizedHeader } from "@/components/localized-site";
import { CurrencyConverter } from "@/components/currency-converter";
import { FuelCalculator } from "@/components/fuel-calculator";
import { DriveTimeCalculator } from "@/components/drive-time-calculator";
import { TankDurationCalculator } from "@/components/tank-duration-calculator";
import { CampsiteCostCalculator } from "@/components/campsite-cost-calculator";
import { SITE_URL, articles, sitePath } from "@/lib/site";
import { appStoreUrl } from "@/lib/app-store";
import { mainData } from "@/lib/analytics";
import { getTranslation, localizedArticles, type LocaleCode } from "@/lib/localized";
import { htmlLang, intlLocale, localeRoot } from "@/lib/locales";
import { toolKeys, uiStrings, type ToolKey, type UiStrings } from "@/lib/source-strings";
import { defaultOutputs, toolScript } from "@/lib/tools/calc";
import { toolCopy } from "@/lib/tools/strings";
import { fillCounts, toolEyebrow, toolGuides, toolPageKey, toolPath, toolSources } from "@/lib/tools/pages";

export const calculators: Record<ToolKey, (props: { ui?: UiStrings; output: string; children?: React.ReactNode; locale?: LocaleCode | "en" }) => React.ReactNode> = {
  "fuel-cost-calculator": FuelCalculator,
  "drive-time-calculator": DriveTimeCalculator,
  "campsite-cost-calculator": CampsiteCostCalculator,
  "currency-converter": CurrencyConverter,
  "water-tank-calculator": TankDurationCalculator,
};

/**
 * One calculator on its own page: the tool, how it is calculated, a worked example with the default
 * inputs, the assumptions, questions, the matching guides and an honest app CTA.
 *
 * A localised URL renders the whole body in its language only when that tool's strings are complete;
 * otherwise everything below the header is English (and the page is noindex, see lib/tools/pages.ts).
 */
export function ToolPage({ tool, locale }: { tool: ToolKey; locale: "en" | LocaleCode }) {
  const { common, copy, translated } = toolCopy(locale, tool);
  const native = locale !== "en" && translated;
  const ui: UiStrings = native ? getTranslation(locale as LocaleCode) : uiStrings;
  const pageLang = native ? htmlLang(locale) : htmlLang("en");
  const numberLocale = native ? intlLocale(locale) : intlLocale("en");
  const prefix = localeRoot(locale);
  const url = `${SITE_URL}${toolPath(tool, locale)}`;
  const Widget = calculators[tool];
  const guideList = native ? localizedArticles(locale as LocaleCode) : articles;
  const guides = toolGuides[tool].map((slug) => guideList.find((article) => article.slug === slug)).filter((article) => !!article);
  const sources = toolSources[tool] ?? [];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: copy.title, description: copy.metaDescription, inLanguage: pageLang, isPartOf: { "@id": `${SITE_URL}/#website` } },
      { "@type": "FAQPage", "@id": `${url}#faq`, inLanguage: pageLang, mainEntity: copy.faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: common.home, item: `${SITE_URL}${sitePath(prefix || "/")}` },
        { "@type": "ListItem", position: 2, name: common.tools, item: `${SITE_URL}${sitePath(`${prefix}/tools`)}` },
        { "@type": "ListItem", position: 3, name: copy.title, item: url },
      ] },
    ],
  };

  return <>
    {locale === "en" ? <Header /> : <LocalizedHeader locale={locale} />}
    <main {...mainData({ kind: "tool", locale, slug: tool })} lang={locale !== "en" && !native ? "en" : undefined}>
      <article className="article-page tool-page">
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href={sitePath(`${prefix}/tools`)}><ArrowLeft />{common.tools}</Link>
          <span>{common.calculator}</span>
        </nav>
        <header className="article-header">
          <p className="eyebrow">{ui[toolEyebrow[tool]]}</p>
          <h1>{copy.title}</h1>
          <p>{copy.intro}</p>
        </header>
        <div className="tool-page-widget"><Widget ui={ui} locale={native ? locale : "en"} output={defaultOutputs(numberLocale, ui)[tool]} /></div>
        <div className="article-layout">
          <div className="article-body">
            <section id="how-its-calculated">
              <span className="section-count">01</span>
              <h2>{common.howItWorks}</h2>
              <ul className="tool-formula">{copy.formula.map((line) => <li key={line}><code>{line}</code></li>)}</ul>
              <p>{copy.formulaNote}</p>
            </section>
            <section id="worked-example">
              <span className="section-count">02</span>
              <h2>{common.workedExample}</h2>
              {copy.example.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
            <section id="assumptions">
              <span className="section-count">03</span>
              <h2>{common.assumptions}</h2>
              <ul className="tool-list">{copy.assumptions.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            {guides.length > 0 && <section className="sources">
              <h2>{common.readNext}</h2>
              <ul>{guides.map((article) => <li key={article.slug}><a href={sitePath(`${prefix}/guides/${article.slug}`)} data-guide={article.slug}>{article.title}<ArrowRight /></a></li>)}</ul>
            </section>}
            {sources.length > 0 && <section className="sources">
              <h2>{common.sources}</h2>
              <ul>{sources.map((source) => <li key={source.url}><a href={source.url}>{source.label}<ArrowRight /></a></li>)}</ul>
            </section>}
            <section className="article-faq">
              <span className="section-count">FAQ</span>
              <h2>{common.commonQuestions}</h2>
              {copy.faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
            </section>
            <div className="article-end-cta tool-cta">
              <div>
                <p className="eyebrow">{common.ctaEyebrow}</p>
                <h2>{copy.ctaTitle}</h2>
                <p>{fillCounts(copy.ctaText, numberLocale)}</p>
                <p className="tool-cta-note">{common.passNote} {common.iphoneOnly}</p>
              </div>
              <div className="download-card download-card-compact">
                <a className="store-button" href={appStoreUrl({ placement: "tool", locale })} data-cta="tool" aria-label={`${ui.download}: AussieCamps`}><FaApple aria-hidden="true" /><span>{ui.download}</span></a>
              </div>
            </div>
          </div>
          <aside>
            <nav className="on-this-page tool-siblings" aria-label={common.allTools}>
              <strong><Calculator size={13} /> {common.allTools}</strong>
              {toolKeys.filter((other) => other !== tool).map((other) => <Link key={other} href={toolPath(other, locale)}>{ui[toolEyebrow[other]]}</Link>)}
              <Link href={sitePath(`${prefix}/tools`)}>{common.tools}</Link>
            </nav>
          </aside>
        </div>
      </article>
    </main>
    {locale === "en" ? <Footer pageKey={toolPageKey(tool)} /> : <LocalizedFooter locale={locale} pageKey={toolPageKey(tool)} />}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <script data-static-tools dangerouslySetInnerHTML={{ __html: toolScript([tool], numberLocale, ui) }} />
  </>;
}
