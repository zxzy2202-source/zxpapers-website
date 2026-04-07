// ThermalRollPro Footer Component
// Design: Global Trade Authority — Dark navy footer with SEO-rich links
// Includes: Popular Sizes section for SEO, certifications, contact info

import { Link } from "wouter";
import { Package, Mail, Phone, MapPin, Globe, Shield, Award, MessageSquare } from "lucide-react";
import { paperRollSizes, labelSizes } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#0a1f44] text-slate-300">
      {/* Main footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-slate-900" />
              </div>
              <div>
                <div className="font-extrabold text-lg text-white leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>
                  ThermalRoll<span className="text-amber-400">Pro</span>
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wide">Thermal Paper Manufacturer</div>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-xs">
              Professional manufacturer of thermal paper rolls and thermal labels since 2009. ISO 9001 certified, serving 80+ countries worldwide.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:+8615891766700" className="flex items-center gap-2.5 text-slate-400 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                +86 158 9176 6700
              </a>
              <a href="https://wa.me/8618092117618" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-slate-400 hover:text-amber-400 transition-colors">
                <MessageSquare className="w-4 h-4 text-amber-500 flex-shrink-0" />
                WhatsApp: +86 180 9211 7618
              </a>
              <a href="mailto:Sales@zxpapers.com" className="flex items-center gap-2.5 text-slate-400 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                Sales@zxpapers.com
              </a>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Building 15, Phase 1 Zone 2, Ronghao Industrial Park, Gaoling District, Xi'an, Shaanxi, China</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-1.5 text-xs text-slate-300">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                ISO 9001
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-1.5 text-xs text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                FSC Certified
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-1.5 text-xs text-slate-300">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                BPA-Free
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: "Sora, sans-serif" }}>Products</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/products" className="text-slate-400 hover:text-amber-400 transition-colors">All Products</Link></li>
              <li><Link href="/products/thermal-paper-rolls/blank" className="text-slate-400 hover:text-amber-400 transition-colors">Blank Thermal Paper Rolls</Link></li>
              <li><Link href="/products/thermal-paper-rolls/custom-printed" className="text-slate-400 hover:text-amber-400 transition-colors">Custom Printed Rolls</Link></li>
              <li><Link href="/products/thermal-labels/blank" className="text-slate-400 hover:text-amber-400 transition-colors">Blank Thermal Labels</Link></li>
              <li><Link href="/products/thermal-labels/custom-printed" className="text-slate-400 hover:text-amber-400 transition-colors">Custom Printed Labels</Link></li>
            </ul>

            <h4 className="text-white font-semibold text-sm mt-6 mb-4 uppercase tracking-wider" style={{ fontFamily: "Sora, sans-serif" }}>OEM Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/oem" className="text-slate-400 hover:text-amber-400 transition-colors">OEM Overview</Link></li>
              <li><Link href="/oem/packaging" className="text-slate-400 hover:text-amber-400 transition-colors">Private Label</Link></li>
              <li><Link href="/oem/case-studies" className="text-slate-400 hover:text-amber-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/oem/ip-protection" className="text-slate-400 hover:text-amber-400 transition-colors">IP Protection</Link></li>
            </ul>
          </div>

          {/* Popular Sizes — SEO critical section */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: "Sora, sans-serif" }}>
              Popular Sizes
            </h4>
            <div className="mb-4">
              <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-2">Thermal Paper Rolls</p>
              <ul className="space-y-2 text-sm">
                {paperRollSizes.map((size) => (
                  <li key={size.slug}>
                    <Link
                      href={`/products/thermal-paper-rolls/sizes/${size.slug}`}
                      className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                    >
                      {size.badge && (
                        <span className="text-[9px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded font-medium">{size.badge}</span>
                      )}
                      {size.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-2">Thermal Labels</p>
              <ul className="space-y-2 text-sm">
                {labelSizes.map((size) => (
                  <li key={size.slug}>
                    <Link
                      href={`/products/thermal-labels/sizes/${size.slug}`}
                      className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                    >
                      {size.badge && (
                        <span className="text-[9px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded font-medium">{size.badge}</span>
                      )}
                      {size.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: "Sora, sans-serif" }}>Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-slate-400 hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link href="/manufacturing" className="text-slate-400 hover:text-amber-400 transition-colors">Manufacturing</Link></li>
              <li><Link href="/manufacturing/certifications" className="text-slate-400 hover:text-amber-400 transition-colors">Certifications</Link></li>
              <li><Link href="/manufacturing/quality-control" className="text-slate-400 hover:text-amber-400 transition-colors">Quality Control</Link></li>
            </ul>

            <h4 className="text-white font-semibold text-sm mt-6 mb-4 uppercase tracking-wider" style={{ fontFamily: "Sora, sans-serif" }}>Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/contact" className="text-slate-400 hover:text-amber-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/contact/oem-partnership" className="text-slate-400 hover:text-amber-400 transition-colors">OEM Partnership</Link></li>
              <li><Link href="/faq" className="text-slate-400 hover:text-amber-400 transition-colors">FAQ</Link></li>
              <li><Link href="/resources/oem-guide" className="text-slate-400 hover:text-amber-400 transition-colors">OEM Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col sm:flex-row items-center justify-between py-4 gap-3 text-xs text-slate-500">
          <p>© 2024 ThermalRollPro. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-slate-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
