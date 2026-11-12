import { GuideEndCta } from "@/components/guide-cta";
import { PlaceMap } from "@/components/places/place-map";
import { Crumbs, LinkList } from "@/components/places/listing";
import { uiStrings } from "@/lib/source-strings";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { mainData } from "@/lib/analytics";
import { SITE_URL, sitePath } from "@/lib/site";
import { hubPath, indexableParksOf, sectionCopy, sectionHubs, sectionPageKey, type HubSection } from "@/lib/hubs/pages";

/**
 * The index for one hub type (/camping/, /dump-points/, /rest-areas/): the crawlable top of the
 * hierarchy. It links only indexable hubs; states whose page is still below the quality gate are
 * named without a link so the list stays honest about what the app covers.
 */
export function HubIndex({ section }: { section: HubSection }) {
  const copy = sectionCopy[section];
  const hubs = sectionHubs(section);
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
      <div className="pl-wrap pl-index">
        <Crumbs trail={[{ name: "Home", path: "/" }, { name: copy.label, path: sitePath(`/${section}`) }]} />
        <header className="pl-header"><h1>{copy.h1}</h1></header>
        <PlaceMap points={hubs.flatMap((hub) => hub.dots)} label={copy.h1} precision={1} />
        <LinkList title="By state" links={hubs.map((hub) => ({ href: hubPath(hub), label: hub.stateName }))} />
        <LinkList title="Parks with their own page" links={parks.map((hub) => ({ href: hubPath(hub), label: hub.name }))} />
        <GuideEndCta reuse={false} locale="en" placement="hub" label={uiStrings.download} eyebrow={uiStrings.takeRoad} title={uiStrings.savePlanTitle} text={uiStrings.savePlanText} />
      </div>
    </main>
    <Footer pageKey={sectionPageKey(section)} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}
