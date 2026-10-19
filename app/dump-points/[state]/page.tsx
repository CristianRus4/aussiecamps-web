import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubPage } from "@/components/hubs/hub-page";
import { builtHubsOf, hubById, hubMetadata } from "@/lib/hubs/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return builtHubsOf("dump-points-state").map((hub) => ({ state: hub.id.split("/")[1] }));
}

const find = (state: string) => { const hub = hubById.get(`dump-points/${state}`); return hub && builtHubsOf("dump-points-state").includes(hub) ? hub : undefined; };

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const hub = find((await params).state);
  return hub ? hubMetadata(hub) : {};
}

export default async function DumpPointsHub({ params }: { params: Promise<{ state: string }> }) {
  const hub = find((await params).state);
  if (!hub) notFound();
  return <HubPage hub={hub} />;
}
