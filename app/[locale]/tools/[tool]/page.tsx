import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPage } from "@/components/tools/tool-page";
import { isLocale } from "@/lib/localized";
import { localeEntry, routedLocales } from "@/lib/locales";
import { toolKeys } from "@/lib/source-strings";
import { isToolKey } from "@/lib/tools/strings";
import { toolMetadata } from "@/lib/tools/pages";

export const dynamicParams = false;

/** Every locale serves every tool; one whose `tools` strings are not finished is English and noindex. */
export function generateStaticParams() {
  return routedLocales.flatMap((locale) => toolKeys.map((tool) => ({ locale: localeEntry(locale).segment, tool })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; tool: string }> }): Promise<Metadata> {
  const { locale, tool } = await params;
  return isLocale(locale) && isToolKey(tool) ? toolMetadata(tool, locale) : {};
}

export default async function LocalizedToolRoute({ params }: { params: Promise<{ locale: string; tool: string }> }) {
  const { locale, tool } = await params;
  if (!isLocale(locale) || !isToolKey(tool)) notFound();
  return <ToolPage tool={tool} locale={locale} />;
}
