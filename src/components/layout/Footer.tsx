import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Clock3,
  Factory,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { footerLinks } from "@/config/navigation";
import { FACTORY, SITE } from "@/config/siteData";
import ResponsiveFooterNavigation from "./ResponsiveFooterNavigation";

type FooterLink = { label: string; href: string };

const productLabels = new Set([
  "All Products",
  "Thermal Paper Rolls",
  "Thermal Labels",
  "Printed & Packaging Labels",
]);

const marketLabels = new Set([
  "Africa Overview",
  "Nigeria",
  "Middle East",
  "UAE",
  "Southeast Asia",
]);

const footerGroups: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: "Products",
    links: footerLinks.products.filter((link) => productLabels.has(link.label)).slice(0, 3),
  },
  {
    title: "OEM & Support",
    links: [
      { label: "OEM Services", href: "/oem" },
      { label: "Custom Printing", href: "/oem/custom-printing" },
      { label: "Contact Sales", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources Hub", href: "/resources" },
      { label: "FAQ", href: "/faq" },
      { label: "Specifications", href: "/specifications" },
    ],
  },
  {
    title: "Markets",
    links: footerLinks.markets.filter((link) => marketLabels.has(link.label)).slice(0, 3),
  },
];

const footerHighlights = [
  { icon: Award, label: "ISO 9001 & FSC", sub: "Verified manufacturing system" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const quoteMessage = encodeURIComponent(
    "Hello, I need a factory quote. I can send the product, size, quantity, and destination.",
  );
  const whatsappHref = `${SITE.whatsappUrl}?text=${quoteMessage}`;

  return (
    <footer className="bg-brand-ink text-slate-300">
      <div data-footer-redesign="true" className="container py-6 lg:py-7">
        <div className="grid gap-6 lg:grid-cols-[minmax(220px,0.78fr)_minmax(0,1.72fr)] lg:gap-8">
          <div data-component="footer-identity">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:ring-offset-brand-ink"
            >
              <Image
                src="/images/logo-dark.png"
                alt="Zhi Xin Paper"
                width={64}
                height={64}
                className="h-12 w-auto object-contain"
              />
              <span className="min-w-0 leading-tight" translate="no">
                <span className="block font-sora text-xl font-semibold text-white">ZhixinPaper</span>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-normal text-amber-300">Thermal Solutions Since 2009</span>
              </span>
            </Link>

            <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-slate-400">
              Thermal paper and labels for export buyers who need fast specification review.
            </p>

            <div className="mt-3 grid gap-2">
              {footerHighlights.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex min-w-0 items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-md border border-white/10 bg-brand-ink text-amber-300">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-tight text-white">{label}</span>
                    <span className="mt-1 block text-xs leading-tight text-slate-400">{sub}</span>
                  </span>
                </div>
              ))}
            </div>

            <div data-component="footer-contact-list" className="mt-3 grid gap-1">
              <a href={`mailto:${SITE.email}`} className="flex min-h-9 items-center gap-2.5 rounded-md text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink motion-reduce:transition-none">
                <span className="break-words">{SITE.email}</span>
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex min-h-9 items-center gap-2.5 rounded-md text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink motion-reduce:transition-none">
                <MessageCircle className="h-4 w-4 flex-none text-amber-300" aria-hidden="true" />
                <span className="break-words">WhatsApp Quote</span>
              </a>
            </div>

            <div className="mt-3 flex items-start gap-3 border-t border-white/10 pt-3 text-xs leading-relaxed text-slate-400">
              <Clock3 className="mt-0.5 h-4 w-4 flex-none text-amber-300" aria-hidden="true" />
              <span><span className="font-semibold text-slate-200">Business hours:</span> {SITE.businessHours}. WhatsApp is monitored during business hours.</span>
            </div>
          </div>

          <div>
            <ResponsiveFooterNavigation groups={footerGroups} />
          </div>
        </div>
      </div>

      <div data-component="footer-legal-bar" className="border-t border-white/10 bg-black/10">
        <div className="container py-4">
          <div className="grid gap-4 text-xs text-slate-400 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="flex items-start gap-3 leading-relaxed">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-amber-300" aria-hidden="true" />
              <span className="break-words">{SITE.address}</span>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-1 lg:justify-end">
              <Link href="/products" className="inline-flex min-h-10 items-center rounded-md px-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 motion-reduce:transition-none">Products</Link>
              <Link href="/faq" className="inline-flex min-h-10 items-center rounded-md px-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 motion-reduce:transition-none">FAQ</Link>
              <Link href="/contact" className="inline-flex min-h-10 items-center rounded-md px-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 motion-reduce:transition-none">Contact</Link>
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {currentYear} ZhixinPaper. All rights reserved.</p>
            <p className="inline-flex items-center gap-2"><Factory className="h-4 w-4 text-amber-300" aria-hidden="true" /> Factory in Xi&apos;an, Shaanxi, China</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
