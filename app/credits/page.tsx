import type { Metadata } from "next";
import Link from "next/link";
import { Camera } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import credits from "@/lib/image-credits.json";
import dataMeta from "@/lib/data/hubs.meta.json";
import { articles, isScheduled, sitePath } from "@/lib/site";
import { mainData } from "@/lib/analytics";

type Credit = { slug: string; subject: string; creator: string; licence: string; licenceUrl?: string; sourceUrl?: string };
type DataSource = { operator: string; key: string; licence: string; licenceUrl: string | null; attribution: string; url: string; terms: string; rows: number };

export const metadata: Metadata = {
  title: "Photo and data credits",
  description: "Attribution and licence details for every photograph used in the AussieCamps guides and for the government data behind its place pages.",
  // English only, so it advertises no language alternates.
  alternates: { canonical: "/credits/" },
};

const titleBySlug = new Map(articles.map((article) => [article.slug, article.title]));

/**
 * One page carrying every image attribution.
 *
 * The article pages used to link their photo credit to this repository on GitHub, which put a follow
 * link off-site on every one of them and asked a reader to go and read a markdown table on a code
 * host. The records come from the same notes in docs/, via scripts/build-image-credits.mjs.
 */
const formatDate = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function CreditsPage() {
  // A scheduled guide's photograph is credited from the day the guide is published.
  const rows = (credits as Credit[]).filter((row) => !isScheduled(row.slug));
  // Every source the app data export publishes facts from, with the attribution its terms ask for.
  const dataSources = (dataMeta.sources as DataSource[]).filter((source) => source.rows > 0);
  return <>
    <Header />
    <main {...mainData({ kind: "legal" })}>
      <section className="page-hero">
        <p className="eyebrow"><Camera size={13} /> Photo credits</p>
        <h1>Whose photographs<br /><em>these are.</em></h1>
        <p>Every article photograph and the licence it is used under. Most come from Wikimedia Commons and are resized and centre-cropped to 1600 by 900 pixels for the article headers and cards; those changes are adaptations. Follow a source link for the full attribution and terms.</p>
      </section>
      <section className="content-shell">
        <div className="price-table-wrap">
          <table className="price-table credits-table">
            <thead><tr><th scope="col">Guide</th><th scope="col">Photograph</th><th scope="col">Creator</th><th scope="col">Licence</th></tr></thead>
            <tbody>
              {rows.map((row) => <tr key={row.slug} id={row.slug}>
                <th scope="row">
                  {titleBySlug.has(row.slug)
                    ? <Link href={sitePath(`/guides/${row.slug}`)}>{titleBySlug.get(row.slug)}</Link>
                    : row.slug}
                </th>
                <td>{row.sourceUrl ? <a href={row.sourceUrl}>{row.subject}</a> : row.subject}</td>
                <td>{row.creator}</td>
                <td>{row.licenceUrl ? <a href={row.licenceUrl}>{row.licence}</a> : row.licence}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </section>
      <section className="content-shell" id="data-sources">
        <h2>Data sources</h2>
        <p>Counts, place names, localities, fee summaries and facilities on the camping, dump point and rest area pages come from the AussieCamps app data as of {formatDate(dataMeta.dataAsOf)}. That data is compiled from the government agencies below. We publish facts only: no descriptions, photographs or logos from these sources are reproduced, and the official page for each place is linked so you can check current conditions, fees and closures there.</p>
        <div className="price-table-wrap">
          <table className="price-table credits-table">
            <thead><tr><th scope="col">Source</th><th scope="col">Attribution</th><th scope="col">Licence</th></tr></thead>
            <tbody>
              {dataSources.map((source) => <tr key={source.key} id={`data-${source.key}`}>
                <th scope="row"><a href={source.url}>{source.operator}</a></th>
                <td>{source.attribution}</td>
                <td>{source.licenceUrl ? <a href={source.licenceUrl}>CC BY 4.0</a> : <a href={source.terms}>Facts only</a>}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </section>
    </main>
    <Footer pageKey="credits" />
  </>;
}
