import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * The pieces every listing page shares (the places directory, its state pages and the camping hubs),
 * so they look the same on both sites: one container (`pl-wrap pl-index`), the breadcrumb, a title and a
 * few plain sentences, the map, then blocks of cards or links, then the end box.
 */
export function Crumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return <nav className="pl-crumbs" aria-label="Breadcrumb">{trail.map((crumb, index) => <Fragment key={crumb.path}>
    {index > 0 && <span aria-hidden="true">/</span>}
    {index === trail.length - 1 ? <span aria-current="page">{crumb.name}</span> : <Link href={crumb.path}>{crumb.name}</Link>}
  </Fragment>)}</nav>;
}

export function LinkList({ title, links }: { title: string; links: { href: string; label: string; external?: boolean }[] }) {
  if (links.length === 0) return null;
  return <section className="pl-block pl-links">
    <h2>{title}</h2>
    <ul>{links.map((link) => <li key={link.href}>{link.external ? <a href={link.href} rel="noopener">{link.label}<ArrowRight aria-hidden="true" /></a> : <Link href={link.href}>{link.label}<ArrowRight aria-hidden="true" /></Link>}</li>)}</ul>
  </section>;
}
