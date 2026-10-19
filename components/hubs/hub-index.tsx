import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { mainData } from "@/lib/analytics";
import { SITE_URL, sitePath } from "@/lib/site";
import { hubData } from "@/lib/hubs/gate";
import { formatDataDate, hubPath, indexableParksOf, sectionCopy, sectionHubs, sectionPageKey, type HubSection } from "@/lib/hubs/pages";

const number = (value: number) => new Intl.NumberFormat("en-AU").format(value);

/**
 * The index for one hub type (/camping/, /dump-points/, /rest-areas/): the crawlable top of the
 * hierarchy. It links only indexable hubs; states whose page is still below the quality gate are
 * named without a link so the list stays honest about what the app covers.
 */
export function HubIndex({ section }: { section: HubSection }) {
  const copy = sectionCopy[section];
  const hubs = sectionHubs(section);
  const linked = new Set(hubs.map((hub) => hub.id));
  const unlinked = hubData.hubs.filter((hub) => hub.parent === null && hub.id.startsWith(`${section}/`) && !linked.has(hub.id) && hub.placeCount > 0);
  const parks = section === "camping" ? indexableParksOf() : [];
  const url = `${SITE_URL}${sitePath(`/${section}`)}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ItemList", "@id": `${url}#hubs`, name: copy.h1, itemListElement: [...hubs, ...parks].map((hub, index) => ({ "@type": "ListItem", position: index + 1, name: hub.name, url: `${SITE_URL}${hubPath(hub)}` })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: copy.label, item: url }] },
    ],
  };
  return <>
    <Header />
    <main {...mainData({ kind: "hub", slug: section })}>
      <article className="article-page hub-page">
        <nav className="article-breadcrumb" aria-label="Breadcrumb"><Link href="/"><ArrowLeft />Home</Link><span>{copy.label}</span></nav>
        <header className="article-header">
          <p className="eyebrow">{copy.label} · Australia</p>
          <h1>{copy.h1}</h1>
          <p>{copy.intro}</p>
        </header>
        <div className="article-layout hub-layout">
          <div className="article-body">
            <section className="sources">
              <h2>By state</h2>
              <ul>{hubs.map((hub) => <li key={hub.id}><Link href={hubPath(hub)}>{hub.name}<span className="hub-count">{number(hub.placeCount)} {copy.many}</span><ArrowRight /></Link></li>)}</ul>
              {unlinked.length > 0 && <p>The app also lists {unlinked.map((hub) => `${number(hub.placeCount)} in ${hub.stateName}`).join(", ")}. Those states are not covered in depth here yet; the app has every place.</p>}
            </section>
            {parks.length > 0 && <section className="sources">
              <h2>Parks with their own page</h2>
              <ul>{parks.map((hub) => <li key={hub.id}><Link href={hubPath(hub)}>{hub.name}<span className="hub-count">{number(hub.placeCount)} campgrounds</span><ArrowRight /></Link></li>)}</ul>
            </section>}
            <section className="hub-data-note"><p>Data as of {formatDataDate()}, from the AussieCamps app. Facts only, with the official page linked wherever the source gives one. <Link href="/credits/#data-sources">Data sources</Link>.</p></section>
          </div>
        </div>
      </article>
    </main>
    <Footer pageKey={sectionPageKey(section)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}
