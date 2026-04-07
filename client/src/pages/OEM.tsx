// OEM & Custom Solutions Overview Page — Core conversion page
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Shield, Printer, Package, Palette, Award, Lock } from "lucide-react";

const FACTORY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

const services = [
  {
    icon: Printer,
    title: "Custom Printing & Specifications",
    desc: "Print your logo, brand colors, promotional messages, or QR codes on thermal paper rolls and labels.",
    href: "/oem/custom-printing",
  },
  {
    icon: Package,
    title: "Packaging & Private Label",
    desc: "Custom packaging design with your brand identity. Full private label solutions for distributors.",
    href: "/oem/packaging",
  },
  {
    icon: Palette,
    title: "Design Support",
    desc: "Our in-house design team helps create artwork, packaging layouts, and brand guidelines.",
    href: "/oem/design-support",
  },
  {
    icon: Award,
    title: "Quality Assurance & Traceability",
    desc: "Batch traceability system, quality inspection reports, and pre-shipment sampling for every order.",
    href: "/oem/quality-assurance",
  },
  {
    icon: Lock,
    title: "IP Protection & NDA",
    desc: "Strict NDA agreements and IP protection protocols to safeguard your brand and product designs.",
    href: "/oem/ip-protection",
  },
  {
    icon: Shield,
    title: "Case Studies",
    desc: "See how global distributors and retailers have grown their business with our OEM solutions.",
    href: "/oem/case-studies",
  },
];

const process = [
  { step: "01", title: "Submit Requirements", desc: "Tell us your product specs, quantity, and branding requirements." },
  { step: "02", title: "Design & Quotation", desc: "We prepare artwork proofs and a detailed quotation within 24 hours." },
  { step: "03", title: "Sample Approval", desc: "Physical samples delivered in 3–5 days for your approval." },
  { step: "04", title: "Mass Production", desc: "Full production begins after sample sign-off. Lead time 10–20 days." },
  { step: "05", title: "Quality Inspection", desc: "100% quality check before shipment. Batch reports provided." },
  { step: "06", title: "Global Delivery", desc: "Reliable shipping to your warehouse with full tracking." },
];

export default function OEM() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative bg-[#0F2B5B] text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${FACTORY_IMG})` }}
        />
        <div className="relative container">
          <Breadcrumb items={[{ label: "OEM & Custom Solutions" }]} />
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              OEM & Custom Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5" style={{ fontFamily: "Sora, sans-serif" }}>
              Your Brand,<br />
              <span className="text-amber-400">Our Manufacturing</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We are your trusted OEM partner for thermal paper rolls and labels. From custom printing to full private label packaging — we handle everything with precision and confidentiality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact/oem-partnership" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/30"
                style={{ fontFamily: "Sora, sans-serif" }}>
                Start OEM Partnership
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/oem/case-studies" className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-colors"
                style={{ fontFamily: "Sora, sans-serif" }}>
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        {/* OEM Services Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="section-title">OEM Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Complete OEM solutions from design to delivery — all under one roof.
            </p>
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

        {/* OEM Process */}
        <div className="mb-16 bg-slate-50 rounded-3xl p-10">
          <div className="text-center mb-10">
            <h2 className="section-title">OEM Process</h2>
            <p className="section-subtitle">From inquiry to delivery in as little as 3 weeks</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0F2B5B] text-white rounded-xl flex items-center justify-center font-extrabold text-sm" style={{ fontFamily: "Sora, sans-serif" }}>
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{title}</h3>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why OEM with us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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
            <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
              Start Your OEM Partnership
            </h3>
            <p className="text-sm text-slate-500 mb-6">Tell us about your requirements and we'll prepare a customized proposal.</p>
            <InquiryForm productName="OEM Partnership Inquiry" compact />
          </div>
        </div>
      </div>
    </Layout>
  );
}
