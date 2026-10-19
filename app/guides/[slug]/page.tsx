import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guide-article";
import { SITE_URL, getArticle, sitePath } from "@/lib/site";
import { alternatesFor } from "@/lib/seo";
import { exportRoutes } from "@/lib/routes";
import { guidePageKey } from "@/lib/routes/guides";

export function generateStaticParams() {
  return exportRoutes().filter((route) => route.kind === "guide" && route.locale === "en").map((route) => ({ slug: route.pageKey.slice("guide:".length) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getArticle(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/guides/${item.slug}/`, languages: alternatesFor(guidePageKey(item.slug)) },
    openGraph: {
      type: "article",
      siteName: "AussieCamps",
      locale: "en_AU",
      title: item.title,
      description: item.description,
      url: `${SITE_URL}${sitePath(`/guides/${item.slug}`)}`,
      images: [{ url: item.image, alt: item.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: item.title, description: item.description, images: [item.image] },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getArticle(slug);
  if (!item) notFound();
  return <GuideArticle item={item} />;
}
