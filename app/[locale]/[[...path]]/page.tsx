import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL, sitePath } from "@/lib/site";
import { LocalizedArticle, LocalizedGuides, LocalizedHome, LocalizedInformationPage, LocalizedTools } from "@/components/localized-site";
import { getTranslation, isLocale, localizedArticles } from "@/lib/localized";
import { localeEntry, localeRoot } from "@/lib/locales";
import { alternatesFor, articleOgImage, homeOgImage, ogAlternates, ogLocale } from "@/lib/seo";
import { smartBannerContent } from "@/lib/app-store";
import { exportRoutes, routeAt, type RouteKind } from "@/lib/routes";
import type { StaticPageKind } from "@/lib/source-strings";

export const dynamicParams = false;

/** The page kinds this catch-all renders. Other features (tools, hubs) have their own routes. */
const handled: RouteKind[] = ["home", "guides", "guide", "tools", "support", "privacy", "terms"];

export function generateStaticParams() {
  // Every routed locale publishes every page; ones it has not finished translating are served whole
  // in English and noindexed (see lib/routes/), so no localised URL is ever missing.
  return exportRoutes()
    .filter((route) => route.locale !== "en" && handled.includes(route.kind))
    .map((route) => {
      const [locale, ...path] = route.path.split("/").filter(Boolean);
      return { locale, path };
    });
}

export async function generateMetadata({params}:{params:Promise<{locale:string;path?:string[]}>}):Promise<Metadata>{
  const {locale,path=[]}=await params;
  if(!isLocale(locale))return{};
  const route=routeAt(sitePath(`${localeRoot(locale)}/${path.join("/")}`));
  if(!route)return{};
  const ui=getTranslation(locale);
  const slug=path[0]==="guides"?path[1]:undefined;
  const article=slug?localizedArticles(locale).find((item)=>item.slug===slug):undefined;
  const section=path[0];
  const title=article?article.title
    :section==="guides"?ui.metaGuidesTitle
    :section==="tools"?ui.metaToolsTitle
    :section==="support"?ui.metaSupportTitle
    :section==="privacy"?`${ui.privacy} | AussieCamps`
    :section==="terms"?`${ui.terms} | AussieCamps`
    :ui.metaTitle;
  const description=article?article.description
    :section==="guides"?ui.metaGuidesDescription
    :section==="tools"?ui.metaToolsDescription
    :section==="support"?ui.metaSupportDescription
    :ui.metaDescription;
  const url=`${SITE_URL}${route.path}`;
  const image={...(article?articleOgImage(article.slug):homeOgImage),alt:article?article.imageAlt:"AussieCamps"};
  // An English fallback (an unfinished guide or legal page, or a draft locale being previewed) still
  // builds and renders, but must not compete with the English site, and a noindexed page is never
  // offered as an alternate.
  const indexable=route.indexable;
  return {
    // The locale root already carries the brand; every other page gets it from the layout template.
    title: path.length ? title : { absolute: title },
    description,
    keywords:ui.metaKeywords.split(", "),
    alternates:{canonical:route.path,languages:indexable?alternatesFor(route.pageKey):undefined},
    openGraph:{
      type:article?"article":"website",
      siteName:"AussieCamps",
      locale:ogLocale(locale),
      alternateLocale:ogAlternates(locale),
      title:article?article.title:ui.ogTitle,
      description:article?article.description:ui.ogDescription,
      url,
      images:[image],
    },
    twitter:{card:"summary_large_image",title:article?article.title:ui.ogTitle,description:article?article.description:ui.ogDescription,images:[image]},
    robots:{index:indexable,follow:true,googleBot:{index:indexable,follow:true,"max-image-preview":"large","max-snippet":-1}},
    other:{"apple-itunes-app":smartBannerContent(localeEntry(locale).code)},
  };
}

export default async function LocalizedRoute({params}:{params:Promise<{locale:string;path?:string[]}>}){
  const {locale,path=[]}=await params;
  if(!isLocale(locale))notFound();
  if(!routeAt(sitePath(`${localeRoot(locale)}/${path.join("/")}`)))notFound();
  if(path.length===0)return <LocalizedHome locale={locale}/>;
  if(path.length===1&&path[0]==="guides")return <LocalizedGuides locale={locale}/>;
  if(path.length===2&&path[0]==="guides")return <LocalizedArticle locale={locale} slug={path[1]}/>;
  if(path.length===1&&path[0]==="tools")return <LocalizedTools locale={locale}/>;
  if(path.length===1&&["support","privacy","terms"].includes(path[0]))return <LocalizedInformationPage locale={locale} kind={path[0] as StaticPageKind}/>;
  notFound();
}
