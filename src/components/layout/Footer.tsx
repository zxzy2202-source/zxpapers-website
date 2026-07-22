import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Clock3,
  Factory,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { footerLinks } from "@/config/navigation";
import { FACTORY, SITE } from "@/config/siteData";
import ResponsiveFooterNavigation from "./ResponsiveFooterNavigation";

type FooterLink = { label: string; href: string };

const productLabels = new Set([
  "All Products",
  "Thermal Paper Rolls",
  "Thermal Labels",
  "Receipt Paper Rolls / Cash Register",
  "Custom Printed Rolls",
  "Shipping Labels",
  "Blank Bottle Labels",
  "NCR Forms & Carbonless Paper",
]);

const marketLabels = new Set([
  "Africa Overview",
  "Nigeria",
  "South Africa",
  "Middle East",
  "UAE",
  "Saudi Arabia",
  "Southeast Asia",
]);

const footerGroups: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: "Products",
    links: footerLinks.products.filter((link) => productLabels.has(link.label)),
  },
  {
    title: "OEM & Manufacturing",
    links: [
      ...footerLinks.oem.slice(0, 4),
      { label: "Factory Overview", href: "/manufacturing" },
      { label: "Quality Control", href: "/manufacturing/quality-control" },
      { label: "Certifications", href: "/manufacturing/certifications" },
      { label: "Production Equipment", href: "/manufacturing/equipment" },
    ],
  },
  {
    title: "Resources & Company",
    links: [
      { label: "Product Specifications", href: "/specifications" },
      { label: "Resource Center", href: "/resources" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "OEM Guide", href: "/resources/oem-guide" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "About ZhixinPaper", href: "/about" },
      { label: "Contact Sales", href: "/contact" },
      { label: "OEM Partnership", href: "/contact/oem-partnership" },
    ],
  },
  {
    title: "Markets",
    links: footerLinks.markets.filter((link) => marketLabels.has(link.label)),
  },
];

const trustItems = [
  { icon: ShieldCheck, label: "ISO 9001:2015", sub: "Quality Management" },
  { icon: Award, label: "FSC Certified", sub: "Responsible Sourcing" },
  { icon: BadgeCheck, label: "BPA-Free", sub: "Safer Receipt Paper" },
  { icon: Clock3, label: "15+ Years", sub: "Manufacturing Experience" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const quoteMessage = encodeURIComponent(
    "Hello, I need a factory quote. I can send the product, size, quantity, and destination.",
  );
  const whatsappHref = `${SITE.whatsappUrl}?text=${quoteMessage}`;

  return (
    <footer className="bg-brand-ink text-slate-300">
      <div className="border-b border-white/10 bg-brand-navy-alt">
        <div className="container py-5">
          <div className="grid grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-4">
            {trustItems.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center border border-white/10 bg-white/5 text-amber-300">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold leading-tight text-white">{label}</span>
                  <span className="mt-1 block text-xs leading-tight text-slate-300">{sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div data-footer-redesign="true" className="container py-10 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.65fr)] lg:gap-14">
          <div>
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

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              Factory manufacturer of thermal paper rolls, direct thermal labels, packaging labels, and NCR forms. ISO 9001 certified with export supply to {FACTORY.countriesServed}+ countries.
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex min-h-11 items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                <Phone className="h-4 w-4 flex-none text-amber-300" aria-hidden="true" />
                <span className="break-all">{SITE.phone}</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex min-h-11 items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                <Mail className="h-4 w-4 flex-none text-amber-300" aria-hidden="true" />
                <span className="break-all">{SITE.email}</span>
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                <MessageCircle className="h-4 w-4 flex-none text-amber-300" aria-hidden="true" />
                <span>WhatsApp: {SITE.whatsapp}</span>
              </a>
              <div className="flex min-h-11 items-center gap-3 text-sm text-slate-400">
                <MessageCircle className="h-4 w-4 flex-none text-amber-300" aria-hidden="true" />
                <span>WeChat: {SITE.wechat}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink active:translate-y-px"
              >
                Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 active:translate-y-px"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp Quick Quote
              </a>
            </div>

            <div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-5 text-xs leading-relaxed text-slate-400">
              <Clock3 className="mt-0.5 h-4 w-4 flex-none text-amber-300" aria-hidden="true" />
              <span><span className="font-semibold text-slate-200">Business hours:</span> {SITE.businessHours}. WhatsApp is monitored during business hours.</span>
            </div>
          </div>

          <div>
            <ResponsiveFooterNavigation groups={footerGroups} popularSizes={footerLinks.popularSizes} />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/10">
        <div className="container py-5">
          <div className="grid gap-4 text-xs text-slate-400 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-amber-300" aria-hidden="true" />
              <span>{SITE.address}</span>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
              <Link href="/sitemap.xml" className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">Sitemap</Link>
              <Link href="/faq" className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">FAQ</Link>
              <Link href="/contact" className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">Contact</Link>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {currentYear} ZhixinPaper. All rights reserved.</p>
            <p className="inline-flex items-center gap-2"><Factory className="h-4 w-4 text-amber-300" aria-hidden="true" /> Factory in Xi&apos;an, Shaanxi, China</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
