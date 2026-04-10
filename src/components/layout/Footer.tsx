import Link from "next/link";
import {
  Package, Mail, Phone, MapPin, Globe, Shield, Award,
  MessageSquare, Clock, ChevronRight,
} from "lucide-react";
import { paperRollSizes, labelSizes } from "@/config/navigation";
import { SITE, FACTORY } from "@/config/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060f24] text-slate-300">
      {/* ── Trust bar ────────────────────────────────────────────── */}
      <div className="border-b border-white/5 bg-[#0a1f44]">
        <div className="container py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: Shield, label: "ISO 9001:2015", sub: "Quality Certified" },
              { icon: Award, label: "FSC Certified", sub: "Sustainable Sourcing" },
              { icon: Globe, label: "BPA-Free", sub: "Safe & Eco-Friendly" },
              { icon: Clock, label: "15+ Years", sub: "Manufacturing Experience" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 justify-center">
                <div className="w-9 h-9 bg-amber-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4.5 h-4.5 text-amber-400" />
                </div>
                <div className="text-left">
                  <div className="text-white text-sm font-semibold leading-tight">{label}</div>
                  <div className="text-slate-500 text-xs">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main footer ──────────────────────────────────────────── */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <Package className="w-5 h-5 text-slate-900" />
              </div>
              <div>
                <div className="font-extrabold text-xl text-white leading-tight">
                  Zhixin<span className="text-amber-400">Paper</span>
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Thermal Paper Manufacturer</div>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Professional manufacturer of thermal paper rolls and thermal labels since {SITE.founded}.
              ISO 9001 certified, serving {FACTORY.countriesServed}+ countries worldwide.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm mb-6">
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors group">
                <div className="w-8 h-8 bg-white/5 group-hover:bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                </div>
                {SITE.phone}
              </a>
              <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need a quote for thermal paper rolls.")}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors group">
                <div className="w-8 h-8 bg-white/5 group-hover:bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <MessageSquare className="w-3.5 h-3.5 text-green-500" />
                </div>
                WhatsApp: {SITE.whatsapp}
              </a>
              <div className="flex items-center gap-3 text-slate-400 group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#07C160]" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.306A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.073-1.117l-.292-.174-3.03.796.808-2.96-.19-.303A7.944 7.944 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.884c-.242-.121-1.43-.706-1.652-.786-.222-.081-.383-.121-.545.121-.161.242-.624.786-.765.948-.14.161-.282.181-.524.06-.242-.12-1.02-.376-1.943-1.198-.718-.64-1.203-1.431-1.344-1.673-.14-.242-.015-.373.106-.493.108-.108.242-.282.363-.423.12-.14.16-.242.242-.403.08-.161.04-.302-.02-.423-.061-.12-.545-1.314-.747-1.798-.196-.472-.396-.408-.545-.415l-.464-.008c-.161 0-.423.06-.645.302-.222.242-.847.828-.847 2.02 0 1.19.867 2.34.988 2.502.12.161 1.706 2.604 4.134 3.651.578.25 1.029.398 1.38.51.58.184 1.108.158 1.525.096.465-.069 1.43-.585 1.632-1.15.201-.564.201-1.047.14-1.149-.06-.1-.222-.161-.464-.282z"/>
                  </svg>
                </div>
                WeChat: {SITE.wechat}
              </div>
              <a href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors group">
                <div className="w-8 h-8 bg-white/5 group-hover:bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-amber-500" />
                </div>
                {SITE.email}
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <span className="text-xs leading-relaxed">{SITE.address}</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need a quote for thermal paper rolls.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors w-full justify-center">
              <MessageSquare className="w-4 h-4" />
              WhatsApp for Quick Quote
            </a>
          </div>

          {/* Products & OEM */}
          <div>
            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Products</h4>
            <ul className="space-y-2 text-sm mb-6">
              {[
                { label: "All Products", href: "/products" },
                { label: "Blank Thermal Rolls", href: "/products/thermal-paper-rolls/blank" },
                { label: "Custom Printed Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
                { label: "Blank Thermal Labels", href: "/products/thermal-labels/blank" },
                { label: "Custom Printed Labels", href: "/products/thermal-labels/custom-printed" },
                { label: "Blank Can Labels", href: "/products/can-labels/blank" },
                { label: "Detergent Labels", href: "/products/detergent-labels/blank" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-500 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest border-b border-white/10 pb-2">OEM Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "OEM Overview", href: "/oem" },
                { label: "Private Label", href: "/oem/packaging" },
                { label: "Design Support", href: "/oem/design-support" },
                { label: "Quality Assurance", href: "/oem/quality-assurance" },
                { label: "IP Protection", href: "/oem/ip-protection" },
                { label: "Case Studies", href: "/oem/case-studies" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-500 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Sizes */}
          <div>
            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Popular Sizes</h4>
            <div className="mb-5">
              <p className="text-[10px] text-amber-500/70 uppercase tracking-widest mb-2.5 font-medium">Thermal Paper Rolls</p>
              <ul className="space-y-2 text-sm">
                {paperRollSizes.map((size) => (
                  <li key={size.slug}>
                    <Link href={`/products/thermal-rolls/${size.slug}`}
                      className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-500 transition-colors" />
                      {size.label}
                      {size.badge && (
                        <span className="text-[9px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded font-medium ml-1">{size.badge}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] text-amber-500/70 uppercase tracking-widest mb-2.5 font-medium">Thermal Labels</p>
              <ul className="space-y-2 text-sm">
                {labelSizes.slice(0, 5).map((size) => (
                  <li key={size.slug}>
                    <Link href={`/products/thermal-labels/${size.slug}`}
                      className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-500 transition-colors" />
                      {size.label}
                      {size.badge && (
                        <span className="text-[9px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded font-medium ml-1">{size.badge}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Markets */}
          <div>
            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Markets</h4>
            <ul className="space-y-2 text-sm mb-6">
              {[
                { label: "🌍 Africa Overview", href: "/markets/africa" },
                { label: "🇳🇬 Nigeria", href: "/markets/africa/nigeria" },
                { label: "🇰🇪 Kenya", href: "/markets/africa/kenya" },
                { label: "🇿🇦 South Africa", href: "/markets/africa/south-africa" },
                { label: "🇬🇭 Ghana", href: "/markets/africa/ghana" },
                { label: "🌙 Middle East & Africa", href: "/markets/middle-east-africa" },
                { label: "🌏 Southeast Asia", href: "/markets/southeast-asia" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Manufacturing", href: "/manufacturing" },
                { label: "Certifications", href: "/manufacturing/certifications" },
                { label: "Quality Control", href: "/manufacturing/quality-control" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-500 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest border-b border-white/10 pb-2">Support</h4>
            <ul className="space-y-2 text-sm mb-6">
              {[
                { label: "Contact Us", href: "/contact" },
                { label: "OEM Partnership", href: "/contact/oem-partnership" },
                { label: "FAQ", href: "/faq" },
                { label: "OEM Guide", href: "/resources/oem-guide" },
                { label: "Specifications", href: "/specifications" },
                { label: "Resource Center", href: "/resources" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-500 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Business hours */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-white text-xs font-semibold">Business Hours</span>
              </div>
              <div className="text-xs text-slate-400 space-y-1">
                <div>Mon–Fri: 9:00–18:00 (GMT+8)</div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-green-400 font-medium">WhatsApp: 7 days/week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────── */}
      <div className="border-t border-white/5">
        <div className="container flex flex-col sm:flex-row items-center justify-between py-5 gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-amber-500 rounded flex items-center justify-center">
              <Package className="w-3 h-3 text-slate-900" />
            </div>
            <p>© {currentYear} ZhixinPaper. All rights reserved. | Factory in Xi&apos;an, Shaanxi, China</p>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">Sitemap</Link>
            <Link href="/faq" className="hover:text-slate-300 transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
