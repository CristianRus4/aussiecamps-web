import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guide-article";
import { SITE_URL, articles, getArticle, sitePath } from "@/lib/site";
import { seoLanguageTags } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getArticle(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/guides/${item.slug}/`, languages: seoLanguageTags(`/guides/${item.slug}`) },
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
