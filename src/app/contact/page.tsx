import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { SITE } from "@/config/siteData";
import {
  Phone, Mail, MapPin, Clock, MessageSquare, Package,
  CheckCircle, ArrowRight, Zap, Globe, Shield,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote Within 24h",
  description: `Contact ${SITE.name} for thermal paper rolls and labels quotes. Response within ${SITE.responseTime}. WhatsApp, phone, email, and OEM partnership inquiries welcome. Factory in Xi'an, China.`,
  openGraph: {
    title: `Contact ${SITE.name} | Get a Quote Within 24 Hours`,
    description: `WhatsApp, email, or phone — we respond within ${SITE.responseTime}. Free samples available. OEM inquiries welcome.`,
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
  { q: "How long does it take to get a quote?", a: "We reply to all inquiries within 24 hours. WhatsApp for an instant response." },
  { q: "Do you offer free samples?", a: "Yes, we offer free samples for qualified buyers. Shipping cost at buyer's expense." },
  { q: "What payment terms do you accept?", a: "T/T, L/C at sight, Western Union, and PayPal for small orders. Flexible terms for regular buyers." },
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
      "name": "Contact",
      "item": "https://www.zhixinpaper.com/contact"
    }
  ]
};
export default function ContactPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <PageHero
        bgImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp"
        overlayDir="center"
        overlayOpacity={50}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        eyebrow="Get in Touch"
        title={<>Contact <span className="text-amber-400">ZhixinPaper</span></>}
        subtitle="Get your price quote within 24 hours. WhatsApp for instant response. Our team is ready to help you source the right thermal paper for your market."
        trustBadges={["24h Quote Response", "Free Samples Available", "OEM Support", "CIF Pricing"]}
        ctas={[
          { label: "WhatsApp — Instant Reply", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need a price quote for thermal paper rolls.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
          { label: "Send Inquiry Form", href: "#inquiry-form", variant: "outline", icon: <MessageSquare className="w-4 h-4" /> },
        ]}
        stats={[
          { value: "< 30 min", label: "WhatsApp Response" },
          { value: "< 24h", label: "Email Response" },
          { value: "Free", label: "Sample Available" },
          { value: "24/7", label: "Support Hours" },
        ]}
      />
      {/* ── WhatsApp Priority Banner ─────────────────────────────── */}
      <div className="bg-green-600 py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-base">Fastest Response: WhatsApp</div>
              <div className="text-green-100 text-sm">Typically replies within 30 minutes · 7 days/week</div>
            </div>
          </div>
          <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need a quote for thermal paper rolls. Please send me pricing and MOQ.")}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors whitespace-nowrap">
            <MessageSquare className="w-5 h-5" />
            WhatsApp: {SITE.whatsapp}
          </a>
        </div>
      </div>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left sidebar */}
          <div className="space-y-6">
            {/* Contact info card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-5 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                </div>
                Contact Information
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}`, color: "bg-blue-100 text-blue-600" },
                  { icon: MessageSquare, label: "WhatsApp", value: SITE.whatsapp, href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need a quote for thermal paper rolls.")}`, color: "bg-green-100 text-green-600" },
                  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, color: "bg-amber-100 text-amber-600" },
                  { icon: MapPin, label: "Address", value: SITE.address, href: null, color: "bg-red-100 text-red-600" },
                  { icon: Clock, label: "Business Hours", value: SITE.businessHours, href: null, color: "bg-purple-100 text-purple-600" },
                ].map(({ icon: Icon, label, value, href, color }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-0.5 uppercase tracking-wide">{label}</div>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-medium text-slate-800 hover:text-blue-600 transition-colors break-all">
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-slate-800">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time visual */}
            <div className="bg-gradient-to-br from-[#0F2B5B] to-[#1a3a6b] text-white rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-base">Response Guarantee</span>
              </div>
              <div className="space-y-3">
                {[
                  { channel: "WhatsApp", time: "< 30 min", color: "bg-green-500", width: "w-[15%]" },
                  { channel: "Email", time: "< 12 hours", color: "bg-amber-500", width: "w-[50%]" },
                  { channel: "Inquiry Form", time: "< 24 hours", color: "bg-blue-500", width: "w-full" },
                ].map(({ channel, time, color, width }) => (
                  <div key={channel}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-300">{channel}</span>
                      <span className="text-white font-semibold">{time}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${color} rounded-full ${width}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Quick Links</h3>
              <div className="space-y-2.5">
                {[
                  { icon: Package, label: "OEM Partnership Inquiry", href: "/contact/oem-partnership" },
                  { icon: MessageSquare, label: "Frequently Asked Questions", href: "/faq" },
                  { icon: Shield, label: "Request NDA / IP Protection", href: "/oem/ip-protection" },
                  { icon: Globe, label: "Africa Market Info", href: "/markets/africa" },
                ].map(({ icon: Icon, label, href }) => (
                  <Link key={href} href={href}
                    className="flex items-center gap-2.5 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors group">
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    {label}
                    <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Inquiry form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Send an Inquiry</h2>
                  <p className="text-sm text-slate-500">Fill in your requirements and we will prepare a customized quote.</p>
                </div>
              </div>
              <InquiryForm formId="contact-form" />
            </div>

            {/* FAQ preview */}
            <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-5 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="bg-white rounded-xl p-4 border border-slate-100">
                    <div className="font-semibold text-slate-900 text-sm mb-1.5 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {q}
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed pl-6">{a}</p>
                  </div>
                ))}
              </div>
              <Link href="/faq"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold mt-4 transition-colors">
                View all FAQs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
