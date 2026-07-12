"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterGroup {
  title: string;
  links: FooterLink[];
}

interface ResponsiveFooterNavigationProps {
  groups: FooterGroup[];
  popularSizes: FooterLink[];
}

const linkClass =
  "flex min-h-8 items-center break-words text-sm leading-snug text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink";

function FooterLinkList({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-5 gap-y-1 lg:block lg:space-y-1.5">
      {links.map((link) => (
        <li key={`${title}-${link.href}-${link.label}`}>
          <Link href={link.href} className={linkClass}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function ResponsiveFooterNavigation({ groups, popularSizes }: ResponsiveFooterNavigationProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <>
      <nav aria-label="Footer navigation" className="lg:grid lg:grid-cols-4 lg:gap-8">
        {groups.map((group) => (
          <details
            key={group.title}
            data-footer-nav-group={group.title}
            open={isDesktop || undefined}
            className="group border-b border-white/10 lg:border-0"
          >
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-400 lg:hidden [&::-webkit-details-marker]:hidden">
              {group.title}
              <ChevronDown className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div data-footer-desktop-group={group.title} className="pb-5 lg:pb-0">
              <h2 className="mb-4 hidden border-b border-white/10 pb-3 text-xs font-semibold uppercase tracking-normal text-white lg:block">
                {group.title}
              </h2>
              <FooterLinkList title={group.title} links={group.links} />
            </div>
          </details>
        ))}
      </nav>

      <details open={isDesktop || undefined} className="group mt-9 border-y border-white/10">
        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-400 lg:hidden [&::-webkit-details-marker]:hidden">
          Popular Product Sizes
          <ChevronDown className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <div className="pb-5 lg:grid lg:grid-cols-[190px_minmax(0,1fr)] lg:items-start lg:gap-5 lg:py-6">
          <div className="hidden lg:block">
            <h2 className="text-xs font-semibold uppercase tracking-normal text-white">Popular Product Sizes</h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">Direct links to frequently requested stock formats.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-2 sm:grid-cols-3 lg:grid-cols-5">
            {popularSizes.map((link) => (
              <Link key={link.href + link.label} href={link.href} className={linkClass}>{link.label}</Link>
            ))}
          </div>
        </div>
      </details>
    </>
  );
}
