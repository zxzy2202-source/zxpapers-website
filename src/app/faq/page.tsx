"use client";

import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const productFAQs = [
  { q: "What is the minimum order quantity (MOQ)?", a: "MOQ is confirmed by product grade, dimensions, packaging, printing requirements, and available materials. Share the required specification and trial-order quantity so our team can confirm the applicable minimum before quotation." },
  { q: "Are your thermal papers BPA-free?", a: "BPA-free grades are available for selected thermal paper specifications. BPA-free, BPS-free, and phenol-free are separate claims, so we confirm the exact paper grade, requested substance scope, report or declaration, and destination requirement before order approval." },
  { q: "What compliance documents are available?", a: "Available evidence may include a quality-management certificate, FSC chain-of-custody documentation for eligible products, product- or batch-specific test reports, supplier declarations, and regulatory references. Scope and applicability depend on the legal entity, product specification, material, destination market, and document date; request the relevant copies for verification before ordering." },
  { q: "How long is the image life of your thermal paper?", a: "Expected image life varies by paper grade, print density, storage, handling, heat, humidity, light, plasticizers, and other chemical exposure. Confirm the required retention period and operating conditions so we can recommend a grade and provide the applicable supporting specification." },
  { q: "What printer brands are your products compatible with?", a: "Compatibility is checked against the printer model, print method, paper or label dimensions, core, sensing method, adhesive, and operating conditions. Share the exact printer model and media specification so we can confirm a suitable product or sample test before ordering." },
  { q: "Can you produce custom sizes?", a: "Custom widths, lengths, core sizes, materials, and packaging can be evaluated against equipment limits, material availability, tolerances, and order quantity. Send the complete specification so our OEM team can confirm feasibility, MOQ, sample requirements, and schedule." },
];

const oemFAQs = [
  { q: "What does your OEM service include?", a: "OEM scope can include custom printing, private-label packaging, size configuration, artwork support, and agreed production records. Deliverables, responsibilities, intellectual-property controls, logistics scope, and approval steps are confirmed in the quotation or contract before work begins." },
  { q: "How long does OEM production take?", a: "Sample and mass-production schedules are confirmed after artwork, product specifications, quantity, packaging, materials, approval steps, and production-slot availability are known. Any expedited schedule is subject to a separate feasibility review and written confirmation." },
  { q: "Do you sign NDA agreements?", a: "A mutual Non-Disclosure Agreement can be reviewed when confidential designs or proprietary information will be exchanged. The protected information, permitted use, recipients, term, exclusions, and handling obligations must be agreed in the signed document before disclosure." },
  { q: "What is the MOQ for OEM custom printing?", a: "OEM MOQ is confirmed by product type, print process, color count, artwork, dimensions, packaging, setup requirements, and material availability. Share the complete specification and target quantity for a product-specific quotation." },
  { q: "Can you help with packaging design?", a: "Packaging artwork or structural-design support can be included when agreed in the project scope. Required files, approvals, responsibilities, fees, and production-ready specifications are confirmed before design work or manufacturing begins." },
  { q: "How do you ensure product quality for OEM orders?", a: "The approved product specification and order quality plan define applicable incoming-material checks, in-process controls, finished-product inspection, sampling, acceptance criteria, traceability records, and report availability. Required evidence should be agreed before production." },
];


// FAQPage schema built from the on-page Q&A (all answers are visible on the page → compliant)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...productFAQs, ...oemFAQs].map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.zxpapers.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "FAQ",
      "item": "https://www.zxpapers.com/faq"
    }
  ]
};

export default function FAQPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-brand-navy text-white py-16">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 font-sora">
            Frequently Asked <span className="text-amber-400">Questions</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Find answers to common questions about our products, OEM services, and ordering process.
          </p>
        </div>
      </div>

      <div className="container py-16 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 font-sora">Product FAQ</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {productFAQs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`product-${i}`}
                className="border border-slate-200 rounded-xl overflow-hidden px-5"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 text-sm font-sora hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent forceMount className="text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 font-sora">OEM Cooperation FAQ</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {oemFAQs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`oem-${i}`}
                className="border border-slate-200 rounded-xl overflow-hidden px-5"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 text-sm font-sora hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent forceMount className="text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2 font-sora">Still Have Questions?</h3>
          <p className="text-slate-600 mb-5">Our team is ready to answer any specific questions about your requirements.</p>
          <Link href="/contact" className="btn-navy font-sora">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
