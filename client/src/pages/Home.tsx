// ThermalRollPro Home Page
// Design: Global Trade Authority — Hero + Stats + Products + OEM + Trust sections
// Images: hero-banner, product-thermal-rolls, product-thermal-labels, oem-factory

import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import {
  ArrowRight, CheckCircle, Shield, Award, Globe, Truck,
  Factory, Users, Package, Zap, Star, ChevronRight
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/hero-banner-gTkdxz2D6bvxUbHgH5fGGX.webp";
const ROLLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const LABELS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const FACTORY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

const stats = [
  { value: "20+", label: "Years Experience", icon: Factory },
  { value: "80+", label: "Countries Served", icon: Globe },
  { value: "500M+", label: "Rolls Produced/Year", icon: Package },
  { value: "2,000+", label: "OEM Clients", icon: Users },
];

const products = [
  {
    title: "Thermal Paper Rolls",
    desc: "BPA-free thermal paper rolls for POS, ATM, kiosks and receipt printers. Available in all standard and custom sizes.",
    image: ROLLS_IMG,
    href: "/products/thermal-paper-rolls/blank",
    badge: "Most Popular",
    features: ["80mm x 80mm", "57mm x 50mm", "3 1/8\" x 230'", "Custom Sizes"],
  },
  {
    title: "Thermal Labels",
    desc: "Direct thermal labels for shipping, barcodes, and product labeling. Compatible with Zebra, DYMO, and all major printers.",
    image: LABELS_IMG,
    href: "/products/thermal-labels/blank",
    badge: "High Demand",
    features: ['4" x 6" Shipping', '2" x 1" Barcode', "100mm x 150mm", "Custom Sizes"],
  },
];

const whyUs = [
  { icon: Shield, title: "ISO 9001 Certified", desc: "Rigorous quality management system ensuring consistent product quality across every batch." },
  { icon: Zap, title: "Fast Turnaround", desc: "Sample delivery in 3-5 days. Mass production lead time 7-15 days with flexible MOQ from 1,000 rolls." },
  { icon: Award, title: "FSC & BPA-Free", desc: "Environmentally responsible materials. All products are BPA-free and FSC certified." },
  { icon: Truck, title: "Global Logistics", desc: "Reliable shipping to 80+ countries. DHL, FedEx, sea freight options with full tracking." },
  { icon: Users, title: "Dedicated OEM Team", desc: "Experienced OEM engineers for private label, custom printing, and packaging design support." },
  { icon: Star, title: "IP Protection", desc: "Strict NDA agreements and IP protection protocols to safeguard your brand and designs." },
];

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management" },
  { name: "FSC", desc: "Forest Stewardship" },
  { name: "BPA-Free", desc: "Safe & Eco-Friendly" },
  { name: "RoHS", desc: "Hazardous Substances" },
  { name: "REACH", desc: "Chemical Safety" },
  { name: "CE", desc: "European Compliance" },
];

export default function Home() {
  return (
    <Layout>
      {/* ── Hero Section ── */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B5B]/90 via-[#0F2B5B]/70 to-transparent" />
        <div className="relative container py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              ISO 9001 Certified Manufacturer Since 2009
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-up-delay-1"
              style={{ fontFamily: "Sora, sans-serif" }}>
              Professional<br />
              <span className="text-amber-400">Thermal Paper</span><br />
              Manufacturer
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 animate-fade-up-delay-2">
              OEM thermal paper rolls & labels for global distributors. BPA-free, FSC certified, MOQ 1,000 rolls. 
              Serving 80+ countries with fast delivery and dedicated support.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/30 text-base"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-base"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Browse Products
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-slate-400 animate-fade-up-delay-3">
              {["MOQ 1,000 Rolls", "Sample in 3-5 Days", "12h Response", "NDA Available"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#0F2B5B] text-white py-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center lg:px-8">
                <Icon className="w-6 h-6 text-amber-400 mb-2" />
                <div className="text-3xl font-extrabold text-white" style={{ fontFamily: "Sora, sans-serif" }}>{value}</div>
                <div className="text-sm text-slate-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Section ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
              <span className="w-8 h-0.5 bg-blue-600" />
              Our Products
              <span className="w-8 h-0.5 bg-blue-600" />
            </div>
            <h2 className="section-title">Thermal Paper & Label Solutions</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              From standard POS receipt rolls to custom-printed shipping labels — we manufacture to your exact specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.title} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{product.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((f) => (
                      <span key={f} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={product.href}
                      className="flex-1 text-center bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      View Product
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 text-center border border-[#0F2B5B] text-[#0F2B5B] hover:bg-[#0F2B5B] hover:text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              View All Products & Sizes
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── OEM Section ── */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4">
                <span className="w-8 h-0.5 bg-blue-600" />
                OEM & Custom Solutions
              </div>
              <h2 className="section-title mb-5">
                Your Brand,<br />
                <span className="text-blue-600">Our Expertise</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We specialize in OEM manufacturing for global distributors and retailers. From custom printing and private labeling to unique packaging design — we handle everything so you can focus on selling.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Custom logo printing on rolls and labels",
                  "Private label packaging design",
                  "Batch traceability & quality reports",
                  "NDA & IP protection guaranteed",
                  "MOQ as low as 1,000 units",
                  "Sample approval before mass production",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Link
                  href="/oem"
                  className="inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Explore OEM Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact/oem-partnership"
                  className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 hover:border-blue-400 hover:text-blue-600 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  OEM Partnership Inquiry
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={FACTORY_IMG}
                alt="OEM Manufacturing Facility"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-5 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>Quality Guaranteed</div>
                    <div className="text-xs text-slate-500">ISO 9001 Certified Process</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
              <span className="w-8 h-0.5 bg-blue-600" />
              Why ThermalRollPro
              <span className="w-8 h-0.5 bg-blue-600" />
            </div>
            <h2 className="section-title">Built for Global B2B Buyers</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We understand what distributors and retailers need: consistent quality, reliable delivery, and responsive support.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-6 bg-slate-50 hover:bg-white border border-transparent hover:border-blue-100 rounded-2xl transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base" style={{ fontFamily: "Sora, sans-serif" }}>{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-16 bg-[#0F2B5B]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-white mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
              Certifications & Compliance
            </h2>
            <p className="text-slate-400 text-sm">Meeting the highest international standards</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {certifications.map(({ name, desc }) => (
              <div key={name} className="flex flex-col items-center text-center p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10">
                <Award className="w-6 h-6 text-amber-400 mb-2" />
                <div className="font-bold text-white text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{name}</div>
                <div className="text-[11px] text-slate-400 mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 bg-amber-500">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            Ready to Start Your Order?
          </h2>
          <p className="text-slate-800 text-lg mb-8 max-w-xl mx-auto">
            Get a customized quote within 12 hours. Our team is ready to assist with samples, pricing, and OEM solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl text-base"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/oem"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl text-base"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              OEM Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
