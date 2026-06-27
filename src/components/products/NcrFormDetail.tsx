import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Layers } from "lucide-react";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { NCR_FORMS_IMG, ncrFormParts, type NcrFormPart } from "@/app/products/ncr-forms/ncr-forms-data";

/**
 * 共享的 NCR 联数详情页组件（被各 /products/ncr-forms/[part]/page.tsx 调用）。
 * 设计与 SizeDetailPage 一致：瘦 page.tsx + 共享布局组件。
 */
export default async function NcrFormDetail({ part }: { part: NcrFormPart }) {
  const ncrImage = await getSlotImage("ncr-forms:hero", NCR_FORMS_IMG);
  const url = `${SITE.domain}/products/ncr-forms/${part.slug}`;
  const others = ncrFormParts.filter((p) => p.slug !== part.slug);

  const faqs = [
    { q: `What is a ${part.label} carbonless form?`, a: `${part.intro}` },
    { q: `Who uses ${part.shortName.toLowerCase()}?`, a: `They are typically used for ${part.bestFor.join(", ").toLowerCase()}.` },
    { q: "Can you custom print our logo, fields, and numbering?", a: "Yes. Every form is fully customizable — your logo, brand colors, table fields, sequential numbering, multiple languages, paper size, ply colors, and binding (book, pad, loose set, or continuous)." },
    { q: "What is the minimum order quantity and lead time?", a: "MOQ is available from low volume for stock formats; custom printed forms typically start around 5,000 sets. Standard production runs 10–18 days; rush orders ship faster. We export worldwide on FOB, CIF, and DDP terms." },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.domain },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": `${SITE.domain}/products` },
      { "@type": "ListItem", "position": 3, "name": "NCR Forms & Business Forms", "item": `${SITE.domain}/products/ncr-forms` },
      { "@type": "ListItem", "position": 4, "name": part.shortName, "item": url },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": part.shortName,
    "description": part.metaDescription,
    "url": url,
    "category": "NCR / Carbonless Business Forms",
    "brand": { "@type": "Brand", "name": SITE.name },
    "manufacturer": { "@id": `${SITE.domain}/#organization` },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a },
    })),
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-slate-50 py-10">
        <div className="container">
          <div className="text-sm text-slate-500 mb-3">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <span className="mx-1">/</span>
            <Link href="/products/ncr-forms" className="hover:text-blue-600">NCR Forms</Link>
            <span className="mx-1">/</span>
            <span>{part.shortName}</span>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Hero */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Image
                src={ncrImage}
                alt={`${part.shortName} — custom printed carbonless business forms`}
                className="w-full sm:w-64 h-48 object-cover rounded-2xl flex-shrink-0"
                width={256}
                height={192}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div>
                <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  <Layers className="w-3.5 h-3.5" /> {part.label}
                </span>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-3">{part.h1}</h1>
                <p className="text-slate-600 leading-relaxed mb-4">{part.intro}</p>
                <div className="flex flex-wrap gap-2">
                  {["Custom Numbering", "Logo Printing", "Books or Sets", "Multi-Language"].map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Copy breakdown */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">How the Copies Are Distributed</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700">Ply / Color</th>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700">Goes To</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {part.copies.map((c) => (
                      <tr key={c.color} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-medium text-slate-700">{c.color}</td>
                        <td className="px-4 py-3 text-slate-600">{c.goesTo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Best for */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Best For</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {part.bestFor.map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended forms */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Common {part.label} Documents</h2>
              <div className="flex flex-wrap gap-2">
                {part.recommendedForms.map((f) => (
                  <span key={f} className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg font-medium">{f}</span>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Standard Specifications</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700">Parameter</th>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Plies", part.label],
                      ["Paper", "Carbonless (CB / CFB / CF) 50–60 gsm, wood-free"],
                      ["Ply Colors", "White, pink, yellow, blue, green (configurable per copy)"],
                      ["Format", "Loose sets, books/pads, or continuous (sprocket-fed)"],
                      ["Binding", "Glue, wire-O, stitched, or padded with tear-off perforation"],
                      ["Numbering", "Sequential / custom numbering, barcoding optional"],
                      ["Printing", "1–4 color offset; custom logo, fields, and languages"],
                      ["Size", "A4, A5, A6, letter, or custom dimensions"],
                      ["MOQ", "From low volume; custom printing from ~5,000 sets"],
                      ["Lead Time", "10–18 days (standard); rush available"],
                    ].map(([param, spec]) => (
                      <tr key={param} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-medium text-slate-700">{param}</td>
                        <td className="px-4 py-3 text-slate-600">{spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Other part counts */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Other Numbers of Parts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/products/ncr-forms/${o.slug}`}
                    className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50 rounded-xl transition-all"
                  >
                    <span className="font-semibold text-slate-800 group-hover:text-amber-700 text-sm">{o.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Not sure which you need?{" "}
                <Link href="/products/ncr-forms" className="font-medium text-brand-navy hover:underline">
                  See the full NCR Forms &amp; Business Forms overview
                </Link>.
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="group rounded-xl border border-slate-200 bg-white p-4 open:bg-amber-50/40">
                    <summary className="cursor-pointer list-none font-semibold text-slate-800 marker:hidden group-open:text-amber-700">
                      {q}
                    </summary>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{a}</p>
                  </details>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Get a Quote</h3>
              <p className="text-sm text-slate-500 mb-5">Response within {SITE.responseTime}</p>
              <InquiryForm compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
