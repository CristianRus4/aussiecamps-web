import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/site";
import { MapPinned, Route, Save } from "lucide-react";

export const metadata: Metadata = { title: "Australian road trip guides", description: "Camp your way along Australia's best coastlines, outback crossings, mountain roads and tropical routes.", alternates:{canonical:"/guides"} };
export default function GuidesPage(){const guides=articles.filter(a=>a.category==="Road trips");return <><Header/><main><section className="page-hero guides-hero"><p className="eyebrow">Australian road trips</p><h1>Follow the road<br/><em>somewhere good.</em></h1><p>Coastal bends, outback crossings, rainforest mornings and camps beneath a very big sky.</p><div className="guide-benefits"><span><MapPinned/>Places to stop</span><span><Route/>Driving days that make sense</span><span><Save/>Keep favourites close</span></div></section><section className="content-shell"><div className="article-grid">{guides.map((a,i)=><ArticleCard article={a} priority={i===0} key={a.slug}/>)}</div></section></main><Footer/></>}
