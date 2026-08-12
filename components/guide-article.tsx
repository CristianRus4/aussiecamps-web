import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, MapPin } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DownloadCard } from "@/components/download-card";
import { ArticleCard } from "@/components/article-card";
import { SITE_URL, articles, getEditorialHeading, getEditorialPassages, getPullQuote, type Article } from "@/lib/site";

export function GuideArticle({ item }: { item: Article }) {
  const related = articles.filter((candidate) => candidate.slug !== item.slug && (candidate.category === item.category || candidate.region === item.region)).slice(0, 3);
  const editorial = getEditorialPassages(item);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.description,
    image: `${SITE_URL}${item.image}`,
    author: { "@type": "Organization", name: "AussieCamps" },
    publisher: { "@type": "Organization", name: "AussieCamps" },
    mainEntityOfPage: `${SITE_URL}/guides/${item.slug}`,
    about: item.places,
  };

  return <>
    <Header />
    <main>
      <article className="article-page">
        <div className="article-breadcrumb"><Link href="/guides"><ArrowLeft />Guides</Link><span>{item.category}</span></div>
        <header className="article-header">
          <p className="eyebrow">{item.category} · {item.region}</p>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div><span><Clock />{item.readTime} minute read</span><span><MapPin />{item.places.length} places</span></div>
        </header>
        <div className="article-hero-image" style={{ backgroundImage: `url(${item.image})` }} role="img" aria-label={item.imageAlt} />
        <div className="article-layout">
          <div className="article-body">
            <p className="article-intro">{item.intro}</p>
            <section className="editorial-opening">
              <h2>{getEditorialHeading(item)}</h2>
              <p>{editorial[0]}</p>
              <p>{editorial[1]}</p>
              <blockquote>{getPullQuote(item)}</blockquote>
              <p>{editorial[2]}</p>
              <p>{editorial[3]}</p>
            </section>
            {item.sections.map((part, index) => <section key={part.heading}>
              <span className="section-count">{String(index + 1).padStart(2, "0")}</span>
              <h2>{part.heading}</h2>
              {part.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
            <div className="article-end-cta">
              <div><p className="eyebrow">Take it on the road</p><h2>Find the stop. Build the trip.</h2><p>Keep 74,000+ places, saved camps and trip notes close in AussieCamps.</p></div>
              <DownloadCard compact />
            </div>
          </div>
          <aside>
            <div className="article-side-card"><p className="eyebrow">Plan it in AussieCamps</p><h3>Save the places. Build the route.</h3><p>Keep camps, trip stops and useful details together.</p><DownloadCard compact /></div>
            <nav className="on-this-page" aria-label="Page contents"><strong>On this page</strong><span>{getEditorialHeading(item)}</span>{item.sections.map((part) => <span key={part.heading}>{part.heading}</span>)}</nav>
          </aside>
        </div>
      </article>
      <section className="related-section"><p className="eyebrow">Keep planning</p><h2>Related guides</h2><div className="article-grid">{related.map((candidate) => <ArticleCard article={candidate} key={candidate.slug} />)}</div></section>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
