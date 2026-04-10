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
  { q: "What is the minimum order quantity (MOQ)?", a: "Our standard MOQ is 1,000 rolls for blank thermal paper rolls and 5,000 labels for thermal labels. For custom/OEM orders, MOQ may vary depending on specifications. Contact us for small trial orders." },
  { q: "Are your thermal papers BPA-free?", a: "Yes, all our thermal papers are available in BPA-free formulations. We use a proprietary BPA-free thermal coating that meets EU and US safety standards. BPA-free products are available at a small premium." },
  { q: "What certifications do your products hold?", a: "Our products are ISO 9001:2015 certified. We hold FSC certification for sustainable forestry. All products comply with RoHS, REACH, and CE standards. BPA-free certification is available upon request." },
  { q: "How long is the image life of your thermal paper?", a: "Standard thermal paper has an image life of 3–5 years under normal conditions. Our archival-grade thermal paper offers 7–10 years of image life. Image life depends on storage conditions — avoid heat, humidity, and direct sunlight." },
  { q: "What printer brands are your products compatible with?", a: "Our thermal paper rolls are compatible with all major POS printer brands including Epson, Star, Bixolon, Citizen, Seiko, and others. Our thermal labels are compatible with Zebra, DYMO, Honeywell, SATO, Datamax, and all standard thermal label printers." },
  { q: "Can you produce custom sizes?", a: "Yes, we can manufacture any width, length, and core size to your specifications. Custom sizes are available with MOQ 1,000 rolls. Please contact our OEM team with your exact requirements." },
];

const oemFAQs = [
  { q: "What does your OEM service include?", a: "Our OEM service includes: custom printing (logo, text, QR codes), private label packaging, custom size manufacturing, design support, batch traceability, and IP protection. We handle everything from design to delivery." },
  { q: "How long does OEM production take?", a: "Sample production takes 3–5 days. Mass production lead time is typically 10–20 business days depending on order quantity and complexity. Rush orders can be accommodated — contact us for details." },
  { q: "Do you sign NDA agreements?", a: "Yes, we sign Non-Disclosure Agreements (NDA) with all OEM clients before sharing any design files or proprietary information. Your brand designs and product specifications are kept strictly confidential." },
  { q: "What is the MOQ for OEM custom printing?", a: "For custom printed thermal paper rolls, the MOQ is 5,000 rolls. For custom printed thermal labels, the MOQ is 10,000 labels. Lower quantities may be possible for specific products — please inquire." },
  { q: "Can you help with packaging design?", a: "Yes, our in-house design team can create custom packaging designs including box design, label artwork, and brand identity. We provide design proofs for approval before production. Design fees may apply for complex projects." },
  { q: "How do you ensure product quality for OEM orders?", a: "Every OEM order goes through our multi-stage quality control process: incoming material inspection, in-process quality checks, finished product inspection, and pre-shipment sampling. We provide quality inspection reports and batch traceability documentation." },
];


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.zhixinpaper.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "FAQ",
      "item": "https://www.zhixinpaper.com/faq"
    }
  ]
};

export default function FAQPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-[#0F2B5B] text-white py-16">
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
                <AccordionContent className="text-sm text-slate-600 leading-relaxed">
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
                <AccordionContent className="text-sm text-slate-600 leading-relaxed">
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
