import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPage } from "@/components/tools/tool-page";
import { toolKeys } from "@/lib/source-strings";
import { isToolKey } from "@/lib/tools/strings";
import { toolMetadata } from "@/lib/tools/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return toolKeys.map((tool) => ({ tool }));
}

export async function generateMetadata({ params }: { params: Promise<{ tool: string }> }): Promise<Metadata> {
  const { tool } = await params;
  return isToolKey(tool) ? toolMetadata(tool, "en") : {};
}

export default async function ToolRoute({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params;
  if (!isToolKey(tool)) notFound();
  return <ToolPage tool={tool} locale="en" />;
}
