import Link from "next/link";
import { MessageSquare, Phone, CheckCircle, Globe, Package, Ship, Truck, ArrowRight } from "lucide-react";

import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";
import { CountryFlag } from "@/components/ui/country-flag";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import type { MarketRegionPageData } from "@/config/marketCountryPages";

interface MarketRegionPageTemplateProps {
  data: MarketRegionPageData;
}

function buildBreadcrumbSchema(data: MarketRegionPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      { "@type": "ListItem", position: 2, name: "Markets", item: `${SITE.domain}/markets` },
      { "@type": "ListItem", position: 3, name: data.regionName, item: `${SITE.domain}/markets/${data.slug}` },
    ],
  };
}

function buildFaqSchema(data: MarketRegionPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export default async function MarketRegionPageTemplate({ data }: MarketRegionPageTemplateProps) {
  const heroImage = await getSlotImage(data.slot, data.heroFallback);
  const breadcrumbSchema = buildBreadcrumbSchema(data);
  const faqSchema = buildFaqSchema(data);
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(data.whatsappMessage)}`;

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        bgImage={heroImage}
        overlayDir="left"
        overlayOpacity={56}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: data.regionName },
        ]}
        badge={{ text: `${data.regionName} Market`, color: "amber", icon: <Globe className="w-5 h-5" /> }}
        eyebrow={data.eyebrow}
        title={
          <>
            {data.title.replace(` ${data.titleHighlight}`, "")}
            <br />
            <span className="text-amber-400">{data.titleHighlight}</span>
          </>
        }
        subtitle={data.subtitle}
        trustBadges={data.trustBadges}
        ctas={[
          { label: data.primaryCtaLabel, href: data.primaryCtaHref, variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: whatsappHref, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={data.stats}
      />

      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-sora text-3xl font-extrabold text-slate-900 mb-3">Why this region matters</h2>
            <p className="text-slate-600 leading-relaxed">{data.marketHighlightsNote}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.marketHighlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-brand-navy mb-2">{item.value}</div>
                <div className="text-sm font-medium text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-sora text-3xl font-extrabold text-slate-900 mb-3">Priority markets in {data.regionName}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Each country card highlights the port, transit time, terminal base, and top-size fit so buyers can get to the right quote faster.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.countries.map((country) => (
              <Link key={country.name} href={country.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-[0.18em]">
                      <CountryFlag code={country.code} label={country.name} className="w-5" />
                      {country.badge}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-navy">{country.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{country.highlight}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-slate-50 p-3"><div className="text-xs text-slate-400">Port</div><div className="font-semibold text-slate-900">{country.port}</div></div>
                  <div className="rounded-xl bg-slate-50 p-3"><div className="text-xs text-slate-400">Transit</div><div className="font-semibold text-slate-900">{country.transitDays}</div></div>
                  <div className="rounded-xl bg-slate-50 p-3"><div className="text-xs text-slate-400">POS</div><div className="font-semibold text-slate-900">{country.posTerminals}</div></div>
                  <div className="rounded-xl bg-slate-50 p-3"><div className="text-xs text-slate-400">Top Size</div><div className="font-semibold text-slate-900">{country.topSize}</div></div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${country.badgeClassName}`}>{country.badge}</span>
                  <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">View country page <ArrowRight className="inline-block w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-sora text-3xl font-extrabold text-slate-900 mb-3">Popular products for {data.regionName}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Products are selected to cover the most common receipt-roll and logistics-label demand across the region.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.products.map((product) => (
              <div key={product.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-sora text-xl font-bold text-slate-900">{product.name}</h3>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${product.badgeClassName}`}>{product.badge}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 mb-4">{product.desc}</p>
                <div className="space-y-2 mb-5 text-sm">
                  {product.specs.map((spec) => <div key={spec} className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-4 h-4 text-green-500" />{spec}</div>)}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href={product.href} className="inline-flex items-center gap-2 rounded-xl bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-light">
                    View details <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent(product.quoteMessage)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-600">
                    WhatsApp <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-sora text-3xl font-extrabold text-slate-900 mb-3">Shipping & trade terms</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Each region has its own routing and trade-document logic. These summaries keep the quote conversation grounded in reality.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {data.shippingRows.map((row, index) => (
                <div key={row.label} className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    {index % 3 === 0 ? <Ship className="w-4 h-4 text-blue-500" /> : index % 3 === 1 ? <Truck className="w-4 h-4 text-green-500" /> : <Package className="w-4 h-4 text-amber-500" />}
                    <span>{row.label}</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900 sm:text-right">{row.value}</div>
                </div>
              ))}
            </div>
            <div className="grid gap-4">
              {data.shippingCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="mb-2 flex items-center gap-2 font-sora text-base font-bold text-slate-900"><Globe className="w-4 h-4 text-blue-500" />{card.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{card.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-sora text-3xl font-extrabold text-slate-900 mb-3">Why buyers choose ZhixinPaper in {data.regionName}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600"><CheckCircle className="w-5 h-5" /></div>
                <h3 className="mb-2 font-sora text-lg font-bold text-slate-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-sora text-3xl font-extrabold text-slate-900 mb-3">FAQ — {data.regionName} buyers</h2>
            <p className="text-slate-500">Frequently asked questions from buyers comparing regional routes, product fit, and payment terms.</p>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 flex items-start gap-2 font-sora text-lg font-bold text-slate-900"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />{faq.q}</h3>
                <p className="pl-7 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white">
        <div className="container max-w-5xl">
          <div className={`grid gap-10 ${data.showInquiryForm ? "lg:grid-cols-[0.95fr_1.05fr]" : "grid-cols-1"}`}>
            <div className="text-center lg:text-left">
              <h2 className="font-sora text-3xl font-extrabold mb-4">{data.ctaTitle}</h2>
              <p className="text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">{data.ctaDescription}</p>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link href={data.primaryCtaHref} className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 font-bold text-slate-900 transition-colors hover:bg-amber-400">
                  <MessageSquare className="w-5 h-5" />
                  {data.primaryCtaLabel}
                </Link>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 font-bold text-white transition-colors hover:bg-green-400">
                  <Phone className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
            {data.showInquiryForm ? <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-xl"><InquiryForm /></div> : null}
          </div>
        </div>
      </section>
    </Layout>
  );
}
