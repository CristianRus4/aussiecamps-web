import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DownloadCard } from "@/components/download-card";
import { ArticleCard } from "@/components/article-card";
import { CoverImage } from "@/components/site-image";
import { SITE_URL, articles, sitePath, type Article } from "@/lib/site";
import { articleSchema } from "@/lib/seo";
import { articleDates, formatArticleDate } from "@/lib/article-dates";
import { linkProse } from "@/lib/internal-links";
import { displayCurrencies, exchangeRateDate, formatAudRange } from "@/lib/currency";

export function GuideArticle({ item }: { item: Article }) {
  const related = articles.filter((candidate) => candidate.slug !== item.slug && (candidate.category === item.category || candidate.region === item.region)).slice(0, 3);
  const schema = articleSchema(item, `${SITE_URL}${sitePath(`/guides/${item.slug}`)}`);
  // A date Google can see on the page, matching the one in the Article schema.
  const dates = articleDates(item.slug);

  return <>
    <Header />
    <main>
      <article className="article-page">
        <div className="article-breadcrumb"><Link href="/guides/"><ArrowLeft />Guides</Link><span>{item.category}</span></div>
        <header className="article-header">
          <p className="eyebrow">{item.category} · {item.region}</p>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div>
            <span><Clock />{item.readTime} minute read</span>
            <span><MapPin />{item.places.length} places</span>
            {dates && <span><CalendarDays />Updated <time dateTime={dates.modified}>{formatArticleDate(dates.modified)}</time></span>}
          </div>
        </header>
        <figure className="article-hero-image">
          <CoverImage src={item.image} alt={item.imageAlt} priority sizes="(max-width: 1180px) 100vw, 1120px" />
          <figcaption className="article-photo-credit"><Link href={`/credits/#${item.slug}`}>Photo credits</Link></figcaption>
        </figure>
        <div className="article-layout">
          <div className="article-body">
            <p className="article-intro">{item.intro}</p>
            {item.priceTable && <section className="article-price-section">
              <span className="section-count">AUD</span>
              <h2>Price table in 10 currencies</h2>
              <p>{item.priceTable.note}</p>
              <div className="price-table-meta"><strong>Prices checked {item.priceTable.asOf}</strong><span>Conversions use RBA rates from {exchangeRateDate}.</span></div>
              <div className="price-table-wrap">
                <table className="price-table">
                  <thead><tr><th scope="col">Item</th>{displayCurrencies.map((currency) => <th scope="col" key={currency}>{currency}</th>)}</tr></thead>
                  <tbody>{item.priceTable.rows.map((row) => <tr key={row.label}><th scope="row"><strong>{row.label}</strong>{row.unit && <span>{row.unit}</span>}</th>{displayCurrencies.map((currency) => <td key={currency}>{formatAudRange(row.audLow, row.audHigh, currency)}</td>)}</tr>)}</tbody>
                </table>
              </div>
              <p className="price-table-disclaimer">Currency figures are mechanical conversions of the AUD benchmark, not card or cash quotes. Banks and payment providers apply their own rates and fees.</p>
            </section>}
            {item.sections.map((part, index) => <section key={part.heading} id={`step-${index + 1}`}>
              <span className="section-count">{String(index + 1).padStart(2, "0")}</span>
              <h2>{part.heading}</h2>
              {/* The only HTML here is the anchor linkProse inserted; the prose itself is escaped. */}
              {linkProse(part.body, item.slug).map((paragraph, position) => <p key={part.body[position]} dangerouslySetInnerHTML={{ __html: paragraph }} />)}
              {part.tips && <div className="article-tips"><strong>Keep in mind</strong><ul>{part.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul></div>}
            </section>)}
            {item.places.length > 0 && <section>
              <span className="section-count">MAP</span>
              <h2>Places along the way</h2>
              <div className="place-chips">{item.places.map((place) => <span key={place}><MapPin />{place}</span>)}</div>
            </section>}
            {item.sources && <section className="sources">
              <h2>Check before you go</h2>
              <p>Rules and conditions change. Recheck the official source and the page for your exact park or campground before departure.</p>
              <ul>{item.sources.map((source) => <li key={source.url}><a href={source.url}>{source.label}<ArrowRight /></a></li>)}</ul>
            </section>}
            {item.faq && <section className="article-faq">
              <span className="section-count">FAQ</span>
              <h2>Common questions</h2>
              {item.faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
            </section>}
            <div className="article-end-cta">
              <div><p className="eyebrow">Take it on the road</p><h2>Save the stops. Plan the whole trip.</h2><p>Build an ordered route from saved places, calculate the distance and keep dates, notes and to-dos attached.</p></div>
              <DownloadCard compact />
            </div>
          </div>
          <aside>
            <div className="article-side-card"><p className="eyebrow">Plan it in AussieCamps</p><h3>Save the places. Build the route.</h3><p>Order the stops, see the distance and keep notes and to-dos with the trip.</p><DownloadCard compact /></div>
            <nav className="on-this-page" aria-label="Page contents"><strong>On this page</strong>{item.sections.map((part) => <span key={part.heading}>{part.heading}</span>)}</nav>
          </aside>
        </div>
      </article>
      <section className="related-section"><p className="eyebrow">Keep planning</p><h2>Related guides</h2><div className="article-grid">{related.map((candidate) => <ArticleCard article={candidate} key={candidate.slug} />)}</div></section>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
