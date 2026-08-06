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
}

const linkClass =
  "flex min-h-9 items-center break-words py-1 text-sm leading-snug text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink motion-reduce:transition-none";

function FooterLinkList({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <ul className="grid gap-x-4 sm:grid-cols-2 lg:block">
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

export default function ResponsiveFooterNavigation({ groups }: ResponsiveFooterNavigationProps) {
  return (
    <div data-component="footer-navigation">
      <nav aria-label="Footer navigation" className="hidden lg:grid lg:grid-cols-4 lg:gap-4">
        {groups.map((group) => (
          <section key={group.title} data-footer-desktop-group={group.title}>
            <h2 className="mb-1.5 border-b border-white/10 pb-1.5 text-sm font-semibold text-white">
              {group.title}
            </h2>
            <FooterLinkList title={group.title} links={group.links} />
          </section>
        ))}
      </nav>

      <nav aria-label="Footer navigation" className="border-t border-white/10 lg:hidden">
        {groups.map((group) => (
          <details key={group.title} data-footer-nav-group={group.title} className="group border-b border-white/10">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-2 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-400 [&::-webkit-details-marker]:hidden">
              {group.title}
              <ChevronDown className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            <div className="pb-3">
              <FooterLinkList title={group.title} links={group.links} />
            </div>
          </details>
        ))}
      </nav>
    </div>
  );
}
