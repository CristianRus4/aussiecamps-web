import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { sitePath, type Article } from "@/lib/site";
import { CoverImage } from "@/components/site-image";

export function ArticleCard({ article, priority = false }: { article: Article; priority?: boolean }) {
  return <Link className={`article-card ${priority ? "article-card-featured" : ""}`} href={sitePath(`/guides/${article.slug}`)}>
    <div className="article-image">
      <CoverImage src={article.image} alt={article.imageAlt} priority={priority} sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 380px" />
      <span>{article.category}</span>
    </div>
    <div className="article-card-copy"><div className="eyebrow"><MapPin size={13}/>{article.region} · {article.readTime} min</div><h3>{article.title}</h3><p>{article.description}</p><span className="text-link">Read guide <ArrowUpRight size={15}/></span></div>
  </Link>
}
