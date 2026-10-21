import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedHubPage } from "@/components/hubs/localized-hub-page";
import { isLocale } from "@/lib/localized";
import { localeEntry, routedLocales } from "@/lib/locales";
import { localizedHubMetadata, localizedHubs } from "@/lib/hubs/localized";

export const dynamicParams = false;

const hubs = localizedHubs.filter((hub) => hub.kind === "camping-park");
const find = (state: string, park: string) => hubs.find((hub) => hub.id === `camping/${state}/${park}`);

export function generateStaticParams() {
  return routedLocales.flatMap((locale) => hubs.map((hub) => ({ locale: localeEntry(locale).segment, state: hub.id.split("/")[1], park: hub.id.split("/")[2] })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; state: string; park: string }> }): Promise<Metadata> {
  const { locale, state, park } = await params;
  const hub = find(state, park);
  return hub && isLocale(locale) ? localizedHubMetadata(hub, locale) : {};
}

export default async function LocalizedParkHub({ params }: { params: Promise<{ locale: string; state: string; park: string }> }) {
  const { locale, state, park } = await params;
  const hub = find(state, park);
  if (!hub || !isLocale(locale)) notFound();
  return <LocalizedHubPage hub={hub} locale={locale} />;
}
