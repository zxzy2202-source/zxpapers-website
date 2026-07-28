import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import PageHero from "@/components/shared/PageHero";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import {
  ArrowRight,
  Check,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Package,
  Phone,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Contact ZhixinPaper | Product & OEM Inquiries" },
  description: `Contact ${SITE.name} about thermal paper rolls, labels, NCR forms, OEM printing, specifications, samples, packing and destination requirements.`,
  openGraph: {
    title: `Contact ${SITE.name} | Product & OEM Inquiries`,
    description: "Send product specifications, application, quantity, packing, destination and document requirements for a scoped quotation review.",
    images: [
      {
        url: "https://www.zxpapers.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "ZhixinPaper | Thermal Paper Rolls Manufacturer",
        type: "image/png",
      },
    ],
  },
  alternates: { canonical: `${SITE.domain}/contact` },
};

const faqs = [
  { q: "What is the minimum order quantity?", a: "MOQ is 1 carton for standard sizes. For OEM/private label, MOQ starts from 500 rolls." },
  { q: "How long does it take to get a quote?", a: "We review complete inquiries within one business day. WhatsApp is available for quick questions during business hours." },
  { q: "Do you offer free samples?", a: "Yes, we offer free samples for qualified buyers. Shipping cost at buyer's expense." },
  { q: "What payment terms do you accept?", a: "T/T, L/C at sight, Western Union, and PayPal for small orders. Flexible terms for regular buyers." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zxpapers.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.zxpapers.com/contact" },
  ],
};

const CONTACT_HERO_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

export const revalidate = 3600;

interface ContactPageProps {
  searchParams: Promise<{ product?: string | string[] }>;
}

function sanitizeProductContext(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw?.replace(/[\r\n\t<>]/g, " ").replace(/\s+/g, " ").trim().slice(0, 120) || undefined;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const [{ product }, contactHeroImg] = await Promise.all([
    searchParams,
    getSlotImage("contact:hero", CONTACT_HERO_FB),
  ]);
  const productContext = sanitizeProductContext(product);
  const initialMessage = productContext
    ? `Product: ${productContext}\nSize / specification:\nQuantity:\nDestination:`
    : undefined;
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need a quote for thermal paper rolls. Please send me pricing and MOQ.")}`;

  const contactMethods = [
    { icon: MessageSquare, label: "WhatsApp", value: SITE.whatsapp, href: whatsappHref, external: true },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
  ];

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        bgImage={contactHeroImg}
        bgImageAlt="ZhixinPaper thermal paper production team supporting wholesale and OEM inquiries"
        overlayDir="left"
        overlayOpacity={58}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Factory inquiry desk"
        title={<>Request a Thermal Paper <span className="text-amber-400">Quote</span></>}
        subtitle="Share your specifications, quantity, and destination. Our team will review the details and prepare the right production and delivery options."
        ctas={[
          { label: "Start Your Quote", href: "#inquiry-form", variant: "primary", icon: <ArrowRight className="h-4 w-4" /> },
        ]}
        compact
        minHeight="min-h-[300px] sm:min-h-[340px]"
      />

      <section className="border-b border-slate-200 bg-white" aria-label="Contact options">
        <div className="container grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {contactMethods.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex min-w-0 items-center gap-3 px-1 py-4 sm:px-5 lg:px-6"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-brand-navy transition-colors group-hover:border-amber-300 group-hover:bg-amber-50">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-slate-500">{label}</span>
                <span className="block truncate text-sm font-semibold text-slate-900 group-hover:text-brand-navy">{value}</span>
              </span>
            </a>
          ))}
          <div className="flex items-center gap-3 px-1 py-4 sm:px-5 lg:px-6">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-md border border-emerald-200 bg-emerald-50 text-emerald-700">
              <Clock className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs font-medium text-slate-500">Response target</span>
              <span className="block text-sm font-semibold text-slate-900">Within one business day</span>
            </span>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-10 sm:py-14 lg:py-16">
        <div className="container">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <aside className="order-2 lg:order-1 lg:col-span-4" aria-label="Inquiry support information">
              <div className="border border-slate-200 bg-white">
                <div className="border-b border-slate-200 p-5 sm:p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy">Before you submit</p>
                  <h2 className="text-xl font-semibold text-slate-900">Four details help us quote faster</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">A short, specific request is enough. Attachments and final drawings can follow by email.</p>
                </div>

                <ol className="divide-y divide-slate-200">
                  {["Product or paper type", "Size or specification", "Required quantity", "Delivery country or port"].map((item, index) => (
                    <li key={item} className="flex items-center gap-3 px-5 py-4 sm:px-6">
                      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-brand-navy text-xs font-semibold text-white">{index + 1}</span>
                      <span className="text-sm font-medium text-slate-800">{item}</span>
                    </li>
                  ))}
                </ol>

                <div className="space-y-4 border-t border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-brand-navy" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">Commercial details stay private</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">NDA review is available for custom products and private-label projects.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-none text-brand-navy" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">Factory contact</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{SITE.address}</p>
                      <p className="mt-1 text-xs text-slate-500">{SITE.businessHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <nav className="mt-5 border-t border-slate-300 pt-5" aria-label="Related inquiry resources">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Related resources</p>
                <div className="space-y-1">
                  {[
                    { icon: Package, label: "OEM partnership inquiry", href: "/contact/oem-partnership" },
                    { icon: ShieldCheck, label: "NDA and IP protection", href: "/oem/ip-protection" },
                    { icon: MessageSquare, label: "All frequently asked questions", href: "/faq" },
                  ].map(({ icon: Icon, label, href }) => (
                    <Link key={href} href={href} className="group flex min-h-11 items-center gap-3 py-2 text-sm font-medium text-brand-navy">
                      <Icon className="h-4 w-4 flex-none" aria-hidden="true" />
                      <span>{label}</span>
                      <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </nav>
            </aside>

            <section className="order-1 lg:order-2 lg:col-span-8" aria-labelledby="quote-form-title">
              <div className="border border-slate-300 bg-white">
                <div className="border-b border-slate-200 px-5 py-5 sm:px-8 sm:py-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">Step 1 of 1</p>
                      <h2 id="quote-form-title" className="text-2xl font-semibold text-slate-900">Tell us what you need</h2>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Required fields are marked with an asterisk. You can send company and WhatsApp details only when useful.</p>
                    </div>
                    <div className="inline-flex w-fit items-center gap-2 border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-800">
                      <Check className="h-4 w-4" aria-hidden="true" />
                      No account required
                    </div>
                  </div>
                </div>
                <div className="p-5 sm:p-8">
                  <InquiryForm
                    compact
                    wide
                    formId="inquiry-form"
                    productName={productContext}
                    initialMessage={initialMessage}
                    responseNote="Your request goes directly to our sales team. Reply within one business day."
                    successMessage="We'll respond within one business day."
                  />
                </div>
              </div>

              <section className="mt-8 border-t border-slate-300 pt-7" aria-labelledby="contact-faq-title">
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Common questions</p>
                    <h2 id="contact-faq-title" className="text-xl font-semibold text-slate-900">Before requesting a quote</h2>
                  </div>
                  <Link href="/faq" className="hidden items-center gap-2 text-sm font-semibold text-brand-navy sm:inline-flex">
                    View all <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="divide-y divide-slate-200 border-y border-slate-200">
                  {faqs.map(({ q, a }) => (
                    <div key={q} className="grid gap-2 py-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-6">
                      <h3 className="flex items-start gap-2 text-sm font-semibold text-slate-900">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-none text-amber-600" aria-hidden="true" />
                        {q}
                      </h3>
                      <p className="text-sm leading-6 text-slate-600 sm:pl-0">{a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
