import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArticleCard } from "@/components/article-card";
import { articles, categories } from "@/lib/site";

export const metadata: Metadata = { title: "Camping and road trip journal", description: "Practical Australian camping rules, road trip itineraries, planning guides and AussieCamps tutorials.", alternates:{canonical:"/journal"} };
export default function JournalPage(){return <><Header/><main><section className="page-hero"><p className="eyebrow">The AussieCamps journal</p><h1>Plan less blindly.<br/><em>Travel more wisely.</em></h1><p>{articles.length} practical guides for camps, roads, rules and the places between.</p></section><section className="content-shell">{categories.map(category=><section className="category-section" key={category}><div className="category-heading"><h2>{category}</h2><span>{articles.filter(a=>a.category===category).length} guides</span></div><div className="article-grid">{articles.filter(a=>a.category===category).map(a=><ArticleCard article={a} key={a.slug}/>)}</div></section>)}</section></main><Footer/></>}
