import type { Metadata } from "next";
import Link from "next/link";
import { getSlotImages } from "@/lib/imageSlotUtils";
import Layout from "@/components/layout/Layout";
import { FACTORY, SITE } from "@/config/siteData";
import {
  ArrowRight, Globe, Users, Award, Factory, Shield,
  CheckCircle, Zap, Package, Truck, MessageSquare, Star,
  Clock, BarChart3, Layers, Phone,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "About ZhixinPaper | Thermal Paper Manufacturer",
  description: "ISO 9001 & FSC certified thermal paper manufacturer in Xi'an, China. 10,000sqm factory, 20 production lines, 50+ countries.",
  openGraph: {
    title: `About Us | Thermal Paper Manufacturer Since ${SITE.founded}`,
    description: "ZhixinPaper: Founded 2009 in Xi'an, China. 10,000sqm facility, 20 production lines, 50+ countries served.",
    type: "website",
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
  alternates: { canonical: `${SITE.domain}/about` },
};

const FACTORY_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-aerial-overview-Ck4AoJiKqjGKsLxnYqGRbU.webp";
const FACTORY_LINE_IMG_FB = "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80";

const milestones = [
  { year: "2009", event: `Founded in Xi'an, Shaanxi, China with 2 production lines`, color: "bg-blue-500" },
  { year: "2011", event: "Achieved ISO 9001:2015 certification", color: "bg-green-500" },
  { year: "2013", event: "Expanded facility to 20,000 m² and added 8 production lines", color: "bg-amber-500" },
  { year: "2015", event: "Launched BPA-free product line — first in region", color: "bg-purple-500" },
  { year: "2018", event: "Achieved FSC certification and entered European & African markets", color: "bg-teal-500" },
  { year: "2020", event: `Reached ${FACTORY.oemClients} OEM clients globally`, color: "bg-orange-500" },
  { year: "2023", event: `Expanded to ${FACTORY.productionLines} production lines, ${FACTORY.annualOutput} rolls/year capacity`, color: "bg-red-500" },
];

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management System", icon: Shield, color: "text-blue-600 bg-blue-50" },
  { name: "FSC Certified", desc: "Forest Stewardship Council", icon: Award, color: "text-green-600 bg-green-50" },
  { name: "BPA-Free", desc: "Safe & Eco-Friendly Coating", icon: CheckCircle, color: "text-teal-600 bg-teal-50" },
  { name: "CE Marking", desc: "European Conformity", icon: Star, color: "text-purple-600 bg-purple-50" },
  { name: "RoHS Compliant", desc: "Hazardous Substance Free", icon: Shield, color: "text-orange-600 bg-orange-50" },
  { name: "SGS Tested", desc: "Third-Party Lab Verified", icon: Award, color: "text-red-600 bg-red-50" },
];

const capabilities = [
  { icon: Factory, title: `${FACTORY.area} Facility`, desc: "Modern manufacturing complex in Xi'an Industrial Park with climate-controlled production zones." },
  { icon: Zap, title: `${FACTORY.productionLines} Production Lines`, desc: "High-speed slitting, coating, and packaging lines running 24/7 to meet bulk order demands." },
  { icon: BarChart3, title: FACTORY.annualOutputLabel, desc: "Annual production capacity ensures we never miss a delivery deadline, even for large container orders." },
  { icon: Layers, title: "Full Vertical Integration", desc: "From raw paper coating to finished packaging — everything done in-house for quality control." },
  { icon: Package, title: "OEM & Private Label", desc: "Custom logo, packaging design, and core printing for your brand. MOQ from 1 carton." },
  { icon: Truck, title: `FCL Ready in ${FACTORY.fclLoadingLabel}`, desc: "Warehouse stock for all popular sizes. 20ft & 40ft container loading available year-round." },
];

const whyUs = [
  { icon: Clock, stat: `${FACTORY.yearsExperience}+`, label: "Years Experience", desc: "Deep expertise in thermal paper manufacturing" },
  { icon: Globe, stat: `${FACTORY.countriesServed}+`, label: "Countries Served", desc: "Global export network across 6 continents" },
  { icon: Users, stat: FACTORY.oemClients, label: "OEM Clients", desc: "Trusted by distributors and retailers worldwide" },
  { icon: Zap, stat: "24h", label: "Quote Response", desc: "Fast response to all pricing inquiries" },
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
      "name": "About",
      "item": "https://www.zhixinpaper.com/about"
    }
  ]
};
export default async function AboutPage() {
  const imgs = await getSlotImages([
    { slot: "about:factory-aerial", fallback: FACTORY_IMG_FB },
    { slot: "about:factory-line", fallback: FACTORY_LINE_IMG_FB },
  ]);
  const FACTORY_IMG = imgs["about:factory-aerial"];
  const FACTORY_LINE_IMG = imgs["about:factory-line"];
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <PageHero
        bgImage={FACTORY_IMG}
        overlayDir="left"
        overlayOpacity={50}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        badge={{ icon: <Factory className="w-4 h-4" />, text: `Founded ${SITE.founded} · Xi'an, Shaanxi, China`, color: "amber" }}
        title={<>About <span className="text-amber-400">{SITE.name}</span></>}
        subtitle={`${FACTORY.yearsExperience}+ years of thermal paper manufacturing excellence. ISO 9001 & FSC certified factory trusted by ${FACTORY.oemClients} clients in ${FACTORY.countriesServed}+ countries.`}
        ctas={[
          { label: "Send Inquiry Now", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp Us", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'd like to learn more about ZhixinPaper.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={[
          { value: `${FACTORY.yearsExperience}+`, label: "Years Experience" },
          { value: `${FACTORY.countriesServed}+`, label: "Countries Served" },
          { value: FACTORY.oemClients, label: "OEM Clients" },
          { value: "24h", label: "Quote Response" },
        ]}
        rightSlot={
          <div className="w-full max-w-sm space-y-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">Factory at a Glance</div>
              <div className="space-y-3">
                {[
                  { icon: Factory, label: "Factory Area", value: FACTORY.area },
                  { icon: Zap, label: "Production Lines", value: FACTORY.productionLines },
                  { icon: BarChart3, label: "Annual Output", value: FACTORY.annualOutput },
                  { icon: Globe, label: "Countries Served", value: `${FACTORY.countriesServed}+` },
                  { icon: Users, label: "OEM Clients", value: `${FACTORY.oemClients}+` },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center justify-between py-1.5 border-b border-white/10 last:border-0">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 bg-amber-500/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <span className="text-xs text-slate-300">{label}</span>
                    </div>
                    <span className="text-sm font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["ISO 9001", "FSC", "BPA-Free"].map((cert) => (
                <div key={cert} className="bg-green-500/20 border border-green-500/30 rounded-xl p-2.5 text-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mx-auto mb-1" />
                  <div className="text-green-300 font-bold text-xs">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* ── Our Story ────────────────────────────────────────────── */}
      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-blue-600" />
              Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              From 2 Lines to a{" "}
              <span className="text-[#0F2B5B]">Global Manufacturer</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-lg">
              Founded in {SITE.founded} in Xi&apos;an, Shaanxi, China, {SITE.name} started as a small thermal paper converter with a vision to become the most trusted OEM partner for global distributors.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Today, we operate a {FACTORY.area} facility with {FACTORY.productionLines} production lines and serve clients in {FACTORY.countriesServed}+ countries across Africa, the Middle East, Southeast Asia, Europe, and the Americas.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our commitment to quality, innovation, and customer service has made us the preferred thermal paper manufacturer for retailers, distributors, and e-commerce platforms worldwide. We specialize in OEM solutions — helping brands build their own product lines with our manufacturing expertise.
            </p>
            {/* Key advantages */}
            <div className="space-y-3">
              {[
                "Factory direct pricing — no middlemen, save 15–30%",
                "BPA-free coating options for health-conscious markets",
                "Full OEM support: logo, packaging, custom core printing",
                "FOB Shenzhen / CIF destination port pricing available",
                "L/C, T/T, and flexible payment terms accepted",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <img
              src={FACTORY_IMG}
              alt={`${SITE.name} Factory Aerial View — Xi'an, China`}
              className="w-full rounded-2xl shadow-xl object-cover"
              loading="lazy"
              width={640}
              height={427}
            />
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: FACTORY.area, label: "Factory Floor Area" },
                { value: FACTORY.productionLines, label: "Production Lines" },
                { value: FACTORY.annualOutput, label: "Annual Output" },
                { value: `${FACTORY.countriesServed}+`, label: "Countries Served" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-[#0F2B5B] text-white rounded-xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-amber-400 mb-1">{value}</div>
                  <div className="text-xs text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Manufacturing Capabilities ───────────────────────────── */}
      <div className="bg-slate-50 py-20">
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-blue-600" />
              Manufacturing Capabilities
              <div className="w-8 h-0.5 bg-blue-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Built for Bulk Orders
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our facility is purpose-built for high-volume export orders — from single containers to multi-container monthly programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-[#0F2B5B]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#0F2B5B]" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <img
              src={FACTORY_LINE_IMG}
              alt="ZhixinPaper Production Line"
              className="w-full rounded-2xl shadow-lg object-cover max-h-72"
              loading="lazy"
              width={1200}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* ── Certifications ───────────────────────────────────────── */}
      <div className="container py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
            <div className="w-8 h-0.5 bg-blue-600" />
            Quality & Compliance
            <div className="w-8 h-0.5 bg-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Certifications &amp; Standards
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our products meet international quality and safety standards, accepted by buyers in 80+ countries.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map(({ name, desc, icon: Icon, color }) => (
            <div key={name} className="text-center p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="font-bold text-slate-900 text-sm mb-1">{name}</div>
              <div className="text-xs text-slate-400">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Timeline ─────────────────────────────────────────────── */}
      <div className="bg-[#0F2B5B] py-20">
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-amber-400" />
              Our Journey
              <div className="w-8 h-0.5 bg-amber-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {FACTORY.yearsExperience}+ Years of Growth
            </h2>
          </div>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 hidden lg:block" />
            <div className="space-y-8">
              {milestones.map(({ year, event, color }, i) => (
                <div key={year} className={`flex items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 inline-block max-w-sm">
                      <div className="font-extrabold text-amber-400 text-xl mb-2">{year}</div>
                      <p className="text-slate-300 text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 ${color} rounded-full border-4 border-[#0F2B5B] shadow-lg flex-shrink-0 hidden lg:block ring-2 ring-white/20`} />
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ────────────────────────────────────────── */}
      <div className="container py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
            <div className="w-8 h-0.5 bg-blue-600" />
            Why Buyers Choose Us
            <div className="w-8 h-0.5 bg-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            The Trusted Choice for Distributors
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map(({ icon: Icon, stat, label, desc }) => (
            <div key={label} className="text-center p-8 bg-gradient-to-br from-[#0F2B5B] to-[#1a3a6b] text-white rounded-2xl">
              <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-amber-400" />
              </div>
              <div className="text-3xl font-extrabold text-amber-400 mb-1">{stat}</div>
              <div className="font-bold text-white mb-2">{label}</div>
              <div className="text-slate-300 text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <div className="bg-amber-500 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Ready to Start a Partnership?
          </h2>
          <p className="text-slate-800 mb-8 max-w-xl mx-auto text-lg">
            Join {FACTORY.oemClients} clients who trust {SITE.name} for their thermal paper needs.
            Get a quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1a3a6b] text-white font-bold px-8 py-4 rounded-xl transition-colors text-base">
              Send Inquiry Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'd like to discuss a partnership for thermal paper rolls.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors text-base">
              <MessageSquare className="w-5 h-5 text-green-600" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
