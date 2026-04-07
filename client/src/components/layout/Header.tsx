// ThermalRollPro Header Component
// Design: Global Trade Authority — Deep navy header with dropdown navigation
// Features: Sticky header, mega dropdown, mobile menu, CTA button

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, Mail, Package } from "lucide-react";
import { mainNav, type NavDropdown } from "@/config/navigation";

function isDropdown(item: any): item is NavDropdown {
  return "items" in item;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}>
      {/* Top bar */}
      <div className="bg-[#0a1f44] text-slate-300 text-xs">
        <div className="container flex items-center justify-between py-1.5">
          <div className="flex items-center gap-4">
            <a href="tel:+8615891766700" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Phone className="w-3 h-3" />
              +86 158 9176 6700
            </a>
            <a href="mailto:Sales@zxpapers.com" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Mail className="w-3 h-3" />
              Sales@zxpapers.com
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span>ISO 9001 Certified</span>
            <span className="text-slate-600">|</span>
            <span>Global Shipping</span>
            <span className="text-slate-600">|</span>
            <span>MOQ 1000 Rolls</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-[#0F2B5B] text-white">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-slate-900" />
            </div>
            <div>
              <div className="font-extrabold text-lg leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>
                ThermalRoll<span className="text-amber-400">Pro</span>
              </div>
              <div className="text-[10px] text-slate-400 leading-tight tracking-wide uppercase">Thermal Paper Manufacturer</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => {
              if (isDropdown(item)) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors rounded-md hover:bg-white/5">
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>

                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-0 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50"
                        style={{ minWidth: item.featured ? "580px" : "220px" }}>
                        <div className={item.featured ? "flex" : ""}>
                          {/* Main items */}
                          <div className={`py-2 ${item.featured ? "w-56 border-r border-slate-100 bg-slate-50" : "w-full"}`}>
                            <div className="px-4 py-2 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                              {item.label}
                            </div>
                            {item.items.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>

                          {/* Featured sizes */}
                          {item.featured && (
                            <div className="flex-1 py-2">
                              <div className="px-4 py-2 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                                Popular Sizes
                              </div>
                              {item.featured.map((feat) => (
                                <Link
                                  key={feat.href}
                                  href={feat.href}
                                  className="flex items-center justify-between px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors group"
                                >
                                  <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-150 transition-transform" />
                                    {feat.label}
                                  </span>
                                  {feat.badge && (
                                    <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                                      {feat.badge}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5 ${
                    location === item.href ? "text-amber-400" : "text-slate-200 hover:text-amber-400"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-slate-200 hover:text-amber-400 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#0a1f44] border-t border-white/10 max-h-[80vh] overflow-y-auto">
            <div className="container py-4 space-y-1">
              {mainNav.map((item) => {
                if (isDropdown(item)) {
                  return (
                    <div key={item.label}>
                      <button
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-amber-500/30 pl-3">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-3 py-2 text-sm text-slate-400 hover:text-amber-400 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-white/10">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
