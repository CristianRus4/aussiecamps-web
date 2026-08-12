import type { MetadataRoute } from "next";import { SITE_URL } from "@/lib/site";
export default function robots():MetadataRoute.Robots{return{rules:[{userAgent:"*",allow:"/"},{userAgent:["GPTBot","OAI-SearchBot","ChatGPT-User","ClaudeBot","PerplexityBot","Google-Extended","Applebot"],allow:"/"}],sitemap:`${SITE_URL}/sitemap.xml`,host:SITE_URL}}
