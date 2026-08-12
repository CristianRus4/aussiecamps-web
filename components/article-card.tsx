import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Article } from "@/lib/site";

export function ArticleCard({ article, priority = false }: { article: Article; priority?: boolean }) {
  return <Link className={`article-card ${priority ? "article-card-featured" : ""}`} href={`/guides/${article.slug}`}>
    <div className="article-image" style={{backgroundImage:`linear-gradient(180deg, transparent 35%, rgba(16,26,13,.45)), url(${article.image})`}}><span>{article.category}</span></div>
    <div className="article-card-copy"><div className="eyebrow"><MapPin size={13}/>{article.region} · {article.readTime} min</div><h3>{article.title}</h3><p>{article.description}</p><span className="text-link">Read guide <ArrowUpRight size={15}/></span></div>
  </Link>
}
