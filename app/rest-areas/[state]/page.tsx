import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubPage } from "@/components/hubs/hub-page";
import { builtHubsOf, hubById, hubMetadata } from "@/lib/hubs/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return builtHubsOf("rest-areas-state").map((hub) => ({ state: hub.id.split("/")[1] }));
}

const find = (state: string) => { const hub = hubById.get(`rest-areas/${state}`); return hub && builtHubsOf("rest-areas-state").includes(hub) ? hub : undefined; };

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const hub = find((await params).state);
  return hub ? hubMetadata(hub) : {};
}

export default async function RestAreasHub({ params }: { params: Promise<{ state: string }> }) {
  const hub = find((await params).state);
  if (!hub) notFound();
  return <HubPage hub={hub} />;
}
