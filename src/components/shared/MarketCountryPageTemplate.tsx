import Link from "next/link";
import { MessageSquare, Phone, CheckCircle, Globe, Package, Ship, Truck, ArrowRight } from "lucide-react";

import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";
import { CountryFlag } from "@/components/ui/country-flag";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import type { MarketCountryPageData } from "@/config/marketCountryPages";

interface MarketCountryPageTemplateProps {
  data: MarketCountryPageData;
}

function buildBreadcrumbSchema(data: MarketCountryPageData) {
  const baseUrl = SITE.domain;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Markets",
        item: `${baseUrl}/markets`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.regionName,
        item: `${baseUrl}/markets/${data.regionSlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: data.countryName,
        item: `${baseUrl}/markets/${data.regionSlug}/${data.slug}`,
      },
    ],
  };
}

function buildFaqSchema(data: MarketCountryPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export default async function MarketCountryPageTemplate({ data }: MarketCountryPageTemplateProps) {
  const heroImage = await getSlotImage(data.slot, data.heroFallback);
  const breadcrumbSchema = buildBreadcrumbSchema(data);
  const faqSchema = buildFaqSchema(data);
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(data.whatsappMessage)}`;

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        bgImage={heroImage}
        overlayDir="left"
        overlayOpacity={56}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: data.regionName, href: `/markets/${data.regionSlug}` },
          { label: data.countryName },
        ]}
        badge={{
          text: data.heroBadge.text,
          color: data.heroBadge.color,
          icon: <CountryFlag code={data.countryCode} label={data.countryName} className="w-5" />,
        }}
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
          {
            label: data.primaryCtaLabel,
            href: data.primaryCtaHref,
            variant: "primary",
            icon: <MessageSquare className="w-4 h-4" />,
          },
          {
            label: "WhatsApp for Quote",
            href: whatsappHref,
            variant: "whatsapp",
            icon: <Phone className="w-4 h-4" />,
            external: true,
          },
        ]}
        stats={data.stats}
      />

      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-sora text-3xl font-extrabold text-slate-900 mb-3">Why {data.countryName} Matters</h2>
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
            <h2 className="font-sora text-3xl font-extrabold text-slate-900 mb-3">Popular Products for {data.countryName}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Products and sizes selected for how buyers in this market usually purchase, distribute, and resell thermal paper and labels.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.products.map((product) => (
              <div key={product.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-sora text-xl font-bold text-slate-900">{product.name}</h3>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${product.badgeClassName}`}>{product.badge}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 mb-4">{product.desc}</p>
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 mb-5 text-sm">
                  <div className="text-slate-500"><span className="font-semibold text-slate-700">Use case:</span> {product.useCase}</div>
                  {product.moq ? <div className="text-slate-500"><span className="font-semibold text-slate-700">MOQ:</span> {product.moq}</div> : null}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href={product.href} className="inline-flex items-center gap-2 rounded-xl bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-light">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent(product.quoteMessage)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-600">
                    WhatsApp Quote
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-sora text-3xl font-extrabold text-slate-900 mb-3">Local Buying Preferences</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">This is the information buyers typically care about before they ask for a full price list or sample shipment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.buyingPreferences.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">{item.label}</div>
                <div className="text-sm leading-relaxed font-medium text-slate-800">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-sora text-3xl font-extrabold text-slate-900 mb-3">Shipping & Trade Terms</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Clear logistics information helps buyers move faster from interest to a practical quote request.</p>
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
                  <h3 className="mb-2 flex items-center gap-2 font-sora text-base font-bold text-slate-900">
                    <Globe className="w-4 h-4 text-blue-500" />
                    {card.title}
                  </h3>
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
            <h2 className="font-sora text-3xl font-extrabold text-slate-900 mb-3">Why Buyers in {data.countryName} Choose ZhixinPaper</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Country pages should not just rank — they should explain why a buyer in this market should talk to you instead of a generic trader.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <CheckCircle className="w-5 h-5" />
                </div>
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
            <h2 className="font-sora text-3xl font-extrabold text-slate-900 mb-3">FAQ — {data.countryName} Buyers</h2>
            <p className="text-slate-500">Questions buyers usually ask before requesting a quote, sample, or first shipment.</p>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 flex items-start gap-2 font-sora text-lg font-bold text-slate-900">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
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
            {data.showInquiryForm ? (
              <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-xl">
                <InquiryForm />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </Layout>
  );
}
