import { languageSitemap } from "@/lib/sitemaps";
import { sitemapNames } from "@/lib/routes/crawlers";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return sitemapNames().map((name) => ({ file: `${name}.xml` }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  return languageSitemap((await params).file);
}
