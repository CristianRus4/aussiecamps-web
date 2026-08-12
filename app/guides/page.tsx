import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArticleCard } from "@/components/article-card";
import { articles, categories } from "@/lib/site";
import { MapPinned, Route, Save } from "lucide-react";

export const metadata: Metadata = { title: "Australian camping and road trip guides", description: "Road trip routes, camping rules, practical planning advice and AussieCamps tutorials for travelling Australia.", alternates:{canonical:"/guides"} };
export default function GuidesPage(){return <><Header/><main><section className="page-hero guides-hero"><p className="eyebrow">Australian camping guides</p><h1>Follow the road<br/><em>somewhere good.</em></h1><p>{articles.length} detailed guides for routes, camps, rules and practical trip planning across Australia.</p><div className="guide-benefits"><span><MapPinned/>Places to stop</span><span><Route/>Driving days that make sense</span><span><Save/>Keep favourites close</span></div></section><section className="content-shell">{categories.map(category=><section className="category-section" key={category}><div className="category-heading"><h2>{category}</h2><span>{articles.filter(a=>a.category===category).length} guides</span></div><div className="article-grid">{articles.filter(a=>a.category===category).map((a,i)=><ArticleCard article={a} priority={category==="Road trips"&&i===0} key={a.slug}/>)}</div></section>)}</section></main><Footer/></>}
