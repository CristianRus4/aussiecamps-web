import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubPage } from "@/components/hubs/hub-page";
import { builtHubsOf, hubById, hubMetadata } from "@/lib/hubs/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return builtHubsOf("camping-park").map((hub) => ({ state: hub.id.split("/")[1], park: hub.id.split("/")[2] }));
}

const find = (state: string, park: string) => { const hub = hubById.get(`camping/${state}/${park}`); return hub && builtHubsOf("camping-park").includes(hub) ? hub : undefined; };

export async function generateMetadata({ params }: { params: Promise<{ state: string; park: string }> }): Promise<Metadata> {
  const { state, park } = await params;
  const hub = find(state, park);
  return hub ? hubMetadata(hub) : {};
}

export default async function CampingParkHub({ params }: { params: Promise<{ state: string; park: string }> }) {
  const { state, park } = await params;
  const hub = find(state, park);
  if (!hub) notFound();
  return <HubPage hub={hub} />;
}
