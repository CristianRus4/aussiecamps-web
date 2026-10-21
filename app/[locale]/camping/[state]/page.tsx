import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedHubPage } from "@/components/hubs/localized-hub-page";
import { isLocale } from "@/lib/localized";
import { localeEntry, routedLocales } from "@/lib/locales";
import { localizedHubMetadata, localizedHubs } from "@/lib/hubs/localized";

export const dynamicParams = false;

const hubs = localizedHubs.filter((hub) => hub.kind === "camping-state");
const find = (state: string) => hubs.find((hub) => hub.id === `camping/${state}`);

export function generateStaticParams() {
  return routedLocales.flatMap((locale) => hubs.map((hub) => ({ locale: localeEntry(locale).segment, state: hub.id.split("/")[1] })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; state: string }> }): Promise<Metadata> {
  const { locale, state } = await params;
  const hub = find(state);
  return hub && isLocale(locale) ? localizedHubMetadata(hub, locale) : {};
}

export default async function LocalizedStateHub({ params }: { params: Promise<{ locale: string; state: string }> }) {
  const { locale, state } = await params;
  const hub = find(state);
  if (!hub || !isLocale(locale)) notFound();
  return <LocalizedHubPage hub={hub} locale={locale} />;
}
