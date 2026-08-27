import type { Metadata } from "next";
import Link from "next/link";
import { Camera } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import credits from "@/lib/image-credits.json";
import { articles, sitePath } from "@/lib/site";

type Credit = { slug: string; subject: string; creator: string; licence: string; licenceUrl?: string; sourceUrl?: string };

export const metadata: Metadata = {
  title: "Photo credits",
  description: "Attribution and licence details for every photograph used in the AussieCamps guides.",
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
export default function CreditsPage() {
  const rows = credits as Credit[];
  return <>
    <Header />
    <main>
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
    </main>
    <Footer />
  </>;
}
