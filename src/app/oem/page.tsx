import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { SITE } from "@/config/siteData";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Shield, Printer, Package, Palette, Award, Lock, MessageSquare, Phone } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { getSlotImage } from "@/lib/imageSlotUtils";

export const metadata: Metadata = {
  title: "OEM Thermal Paper | Custom Printing & Labels",
  description: "OEM thermal paper rolls and labels manufacturer. Custom printing, private label packaging, design support. ISO 9001 certified. MOQ 1,000 rolls. NDA available.",
  alternates: { canonical: `${SITE.domain}/oem` },
};

const OEM_FACTORY_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

const services = [
  { icon: Printer, title: "Custom Printing & Specifications", desc: "Print your logo, brand colors, promotional messages, or QR codes on thermal paper rolls and labels.", href: "/oem/custom-printing" },
  { icon: Package, title: "Packaging & Private Label", desc: "Custom packaging design with your brand identity. Full private label solutions for distributors.", href: "/oem/packaging" },
  { icon: Palette, title: "Design Support", desc: "Our in-house design team helps create artwork, packaging layouts, and brand guidelines.", href: "/oem/design-support" },
  { icon: Award, title: "Quality Assurance & Traceability", desc: "Batch traceability system, quality inspection reports, and pre-shipment sampling for every order.", href: "/oem/quality-assurance" },
  { icon: Lock, title: "IP Protection & NDA", desc: "Strict NDA agreements and IP protection protocols to safeguard your brand and product designs.", href: "/oem/ip-protection" },
  { icon: Shield, title: "Case Studies", desc: "See how global distributors and retailers have grown their business with our OEM solutions.", href: "/oem/case-studies" },
];

const process = [
  { step: "01", title: "Submit Requirements", desc: "Tell us your product specs, quantity, and branding requirements." },
  { step: "02", title: "Design & Quotation", desc: "We prepare artwork proofs and a detailed quotation within 24 hours." },
  { step: "03", title: "Sample Approval", desc: "Physical samples delivered in 3–5 days for your approval." },
  { step: "04", title: "Mass Production", desc: "Full production begins after sample sign-off. Lead time 10–20 days." },
  { step: "05", title: "Quality Inspection", desc: "100% quality check before shipment. Batch reports provided." },
  { step: "06", title: "Global Delivery", desc: "Reliable shipping to your warehouse with full tracking." },
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
      "name": "OEM Services",
      "item": "https://www.zhixinpaper.com/oem"
    }
  ]
};
export default async function OEMPage() {
  const oemHeroImg = await getSlotImage("oem:hero", OEM_FACTORY_IMG_FB);
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <PageHero
        bgImage={oemHeroImg}
        overlayDir="left"
        overlayOpacity={50}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "OEM Services" }]}
        badge={{ text: "Private Label & OEM", color: "purple" }}
        eyebrow="Custom Thermal Paper Manufacturing"
        title={<>OEM Thermal Paper<br /><span className="text-amber-400">Private Label Solutions</span></>}
        subtitle="Build your own brand with our factory. Custom logo, packaging, and core printing. MOQ from 1 carton. NDA available. 2,000+ OEM clients worldwide."
        trustBadges={["Custom Logo & Packaging", "NDA Available", "MOQ from 1 Carton", "ISO 9001", "BPA-Free"]}
        ctas={[
          { label: "Start OEM Project", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp OEM Team", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'm interested in OEM / private label thermal paper. Please send me details.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={[
          { value: "2,000+", label: "OEM Clients" },
          { value: "MOQ 1 Carton", label: "Low Minimum" },
          { value: "7–14 Days", label: "Sample Lead Time" },
          { value: "NDA", label: "IP Protection" },
        ]}
      />

      <div className="container py-16">
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="section-title">OEM Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Complete OEM solutions from design to delivery — all under one roof.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link key={href} href={href} className="group p-6 bg-white border border-slate-200 hover:border-blue-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-blue-600 font-semibold">
                  Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-slate-50 rounded-3xl p-10">
          <div className="text-center mb-10">
            <h2 className="section-title">OEM Process</h2>
            <p className="section-subtitle">From inquiry to delivery in as little as 3 weeks</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0F2B5B] text-white rounded-xl flex items-center justify-center font-extrabold text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{step}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{title}</h3>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-5">Why Partner With Us?</h2>
            <ul className="space-y-3">
              {[
                "20+ years of OEM manufacturing experience",
                "ISO 9001:2015 certified quality management",
                "MOQ as low as 1,000 units for custom orders",
                "In-house design team for artwork support",
                "Strict NDA and IP protection protocols",
                "Batch traceability for every production run",
                "Dedicated account manager for each OEM client",
                "Competitive pricing with volume discounts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Start Your OEM Partnership</h3>
            <p className="text-sm text-slate-500 mb-6">Tell us about your requirements and we will prepare a customized proposal.</p>
            <InquiryForm productName="OEM Partnership Inquiry" compact />
          </div>
        </div>
      </div>
    </Layout>
  );
}
