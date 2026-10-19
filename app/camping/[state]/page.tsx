import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubPage } from "@/components/hubs/hub-page";
import { builtHubsOf, hubById, hubMetadata } from "@/lib/hubs/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return builtHubsOf("camping-state").map((hub) => ({ state: hub.id.split("/")[1] }));
}

const find = (state: string) => { const hub = hubById.get(`camping/${state}`); return hub && builtHubsOf("camping-state").includes(hub) ? hub : undefined; };

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const hub = find((await params).state);
  return hub ? hubMetadata(hub) : {};
}

export default async function CampingStateHub({ params }: { params: Promise<{ state: string }> }) {
  const hub = find((await params).state);
  if (!hub) notFound();
  return <HubPage hub={hub} />;
}
