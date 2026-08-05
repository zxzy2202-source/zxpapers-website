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
  "flex min-h-11 items-center break-words py-2 text-sm leading-snug text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink motion-reduce:transition-none";

function FooterLinkList({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <ul className="grid gap-x-5 sm:grid-cols-2 lg:block">
      {links.map((link) => (
        <li key={`${title}-${link.href}-${link.label}`}>
          <Link href={link.href} className={linkClass}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function PopularSizeLinks({ popularSizes }: { popularSizes: FooterLink[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-3 lg:grid-cols-5">
      {popularSizes.map((link) => (
        <Link key={link.href + link.label} href={link.href} className={linkClass}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default function ResponsiveFooterNavigation({ groups, popularSizes }: ResponsiveFooterNavigationProps) {
  return (
    <div data-component="footer-navigation">
      <nav aria-label="Footer navigation" className="hidden lg:grid lg:grid-cols-4 lg:gap-8">
        {groups.map((group) => (
          <section key={group.title} data-footer-desktop-group={group.title}>
            <h2 className="mb-2 border-b border-white/10 pb-3 text-sm font-semibold text-white">
              {group.title}
            </h2>
            <FooterLinkList title={group.title} links={group.links} />
          </section>
        ))}
      </nav>

      <nav aria-label="Footer navigation" className="border-t border-white/10 lg:hidden">
        {groups.map((group) => (
          <details key={group.title} data-footer-nav-group={group.title} className="group border-b border-white/10">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-400 [&::-webkit-details-marker]:hidden">
              {group.title}
              <ChevronDown className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            <div className="pb-5">
              <FooterLinkList title={group.title} links={group.links} />
            </div>
          </details>
        ))}
      </nav>

      <div data-component="footer-popular-sizes" className="hidden border-y border-white/10 lg:mt-8 lg:grid lg:grid-cols-[190px_minmax(0,1fr)] lg:items-start lg:gap-5 lg:py-5">
        <div>
          <h2 className="text-sm font-semibold text-white">Popular product sizes</h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">Frequently requested stock formats.</p>
        </div>
        <PopularSizeLinks popularSizes={popularSizes} />
      </div>

      <details data-component="footer-popular-sizes" className="group border-b border-white/10 lg:hidden">
        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-400 [&::-webkit-details-marker]:hidden">
          Popular product sizes
          <ChevronDown className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
        </summary>
        <div className="pb-5">
          <PopularSizeLinks popularSizes={popularSizes} />
        </div>
      </details>
    </div>
  );
}
