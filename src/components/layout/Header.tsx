"use client";

import { useState, useEffect, useRef, type FocusEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import { mainNav, type NavItem, type NavDropdown, type NavRegionGroup } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { CountryFlag, type CountryCode } from "@/components/ui/country-flag";

function isDropdown(item: NavItem | NavDropdown): item is NavDropdown {
  return "items" in item;
}

/** Badge color map */
const BADGE_COLORS: Record<string, string> = {
  amber:  "bg-amber-100 text-amber-700",
  blue:   "bg-slate-100 text-slate-700",
  green:  "bg-slate-100 text-slate-700",
  purple: "bg-slate-100 text-slate-700",
};

const BADGE_COLORS_DARK: Record<string, string> = {
  amber:  "bg-amber-500/15 text-amber-300",
  blue:   "bg-white/10 text-slate-200",
  green:  "bg-white/10 text-slate-200",
  purple: "bg-white/10 text-slate-200",
};

/** Render a nav label with an optional SVG country flag or emoji icon */
function NavLabelWithIcon({
  label,
  countryCode,
  icon,
  textClassName = "",
}: {
  label: string;
  countryCode?: CountryCode;
  icon?: string;
  textClassName?: string;
}) {
  if (countryCode) {
    return (
      <span className="flex items-center gap-2 min-w-0">
        <CountryFlag code={countryCode} label={label} />
        <span className={textClassName}>{label}</span>
      </span>
    );
  }

  if (icon) {
    return (
      <span className="flex items-center gap-2 min-w-0">
        <span className="inline-flex items-center justify-center text-[1.05em] leading-none flex-shrink-0" aria-hidden="true">
          {icon}
        </span>
        <span className={textClassName}>{label}</span>
      </span>
    );
  }

  return <span className={textClassName}>{label}</span>;
}

export default function Header() {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled]             = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const pathname = usePathname();

  const cancelDropdownClose = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openDropdown = (label: string) => {
    cancelDropdownClose();
    setActiveDropdown(label);
  };

  const scheduleDropdownClose = () => {
    cancelDropdownClose();
    closeTimerRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
      closeTimerRef.current = null;
    }, 220);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    cancelDropdownClose();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    return () => cancelDropdownClose();
  }, []);

  const handleDropdownBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActiveDropdown(null);
      cancelDropdownClose();
    }
  };

  const handleDropdownKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      setActiveDropdown(null);
      cancelDropdownClose();
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-sm" : ""}`}>

      {/* ── Top bar ── */}
      <div className="bg-[#0b1f42] text-slate-300 text-[11px] border-b border-white/10">
        <div className="container flex items-center justify-between py-1.5">
          <div className="flex items-center gap-4">
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />{SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1 hover:text-white transition-colors">
              <Mail className="w-3 h-3" />{SITE.email}
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span>ISO 9001 Certified</span>
            <span className="text-slate-600">|</span>
            <span>Global Shipping</span>
            <span className="text-slate-600">|</span>
            <span>MOQ 1 Pallet</span>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className="bg-white/95 text-slate-900 border-b border-slate-200 backdrop-blur">
        <div className="container flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 mr-4" aria-label="Zhi Xin Paper - Home">
            <Image
              src="/images/logo-dark.png"
              alt="Zhi Xin Paper"
              width={40}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-slate-900 font-semibold text-base tracking-[0.01em] whitespace-nowrap">ZhixinPaper</span>
              <span className="text-yellow-500 text-[9px] font-semibold tracking-[0.22em] uppercase whitespace-nowrap">Thermal Solutions Since 2009</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {mainNav.map((item) => {
              if (!isDropdown(item)) {
                return (
                  <Link
                    key={(item as NavItem).href}
                    href={(item as NavItem).href}
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ${
                      pathname === (item as NavItem).href
                        ? "text-[#0F2B5B] bg-slate-100"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0F2B5B]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              const hasSizeGroups   = !!(item as NavDropdown).sizeGroups?.length;
              const hasRegionGroups = !!(item as NavDropdown).regionGroups?.length;

              return (
                <div
                  key={item.label}
                  className="relative flex h-[68px] items-center"
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={scheduleDropdownClose}
                  onBlur={handleDropdownBlur}
                  onKeyDown={handleDropdownKeyDown}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0F2B5B] transition-colors rounded-md hover:bg-slate-50 whitespace-nowrap"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                    onClick={() => {
                      cancelDropdownClose();
                      setActiveDropdown(activeDropdown === item.label ? null : item.label);
                    }}
                    onFocus={() => openDropdown(item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>

                  {activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 bg-white rounded-md shadow-xl border border-slate-200 overflow-hidden z-50"
                      style={{
                        minWidth: hasRegionGroups ? "860px" : hasSizeGroups ? "920px" : (item.featured ? "580px" : "220px"),
                        // For Markets menu, align to avoid going off-screen
                        ...(hasRegionGroups ? { left: "50%", transform: "translateX(-50%)" } : {}),
                      }}
                      role="menu"
                      onMouseEnter={cancelDropdownClose}
                      onMouseLeave={scheduleDropdownClose}
                    >
                      {/* ── Markets Mega Menu: three-column region layout ── */}
                      {hasRegionGroups ? (
                        <div className="flex">
                          {/* Left sidebar: overview links */}
                          <div className="py-3 w-44 border-r border-slate-100 bg-slate-50 flex-shrink-0">
                            <div className="px-4 py-2 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                              Markets
                            </div>
                            {item.items.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-[#0F2B5B] transition-colors"
                                role="menuitem"
                              >
                                <NavLabelWithIcon label={sub.label} countryCode={sub.countryCode} />
                              </Link>
                            ))}
                            {/* CTA panel */}
                            <div className="mx-3 mt-4 p-3 bg-slate-100 rounded-md border border-slate-200">
                              <div className="text-[10px] font-bold text-[#0F2B5B] uppercase tracking-wider mb-1">
                                Get CIF Quote
                              </div>
                              <div className="text-[11px] text-slate-600 mb-2 leading-snug">
                                Door-to-port pricing for all regions
                              </div>
                              <Link
                                href="/contact"
                                className="flex items-center gap-1 text-[11px] font-semibold text-[#0F2B5B] hover:text-[#12346d] transition-colors"
                              >
                                Request Quote <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>

                          {/* Right: three region columns */}
                          <div className="flex-1 py-3 px-1 grid grid-cols-3 divide-x divide-slate-100">
                            {(item as NavDropdown).regionGroups!.map((rg: NavRegionGroup) => (
                              <div key={rg.region} className="px-4 pb-2">
                                {/* Region header */}
                                <Link
                                  href={rg.regionHref}
                                  className="flex items-center gap-2 mb-2 group"
                                >
                                  <NavLabelWithIcon
                                    label={rg.region}
                                    icon={rg.regionIcon}
                                    textClassName="text-sm font-semibold text-slate-800 group-hover:text-[#0F2B5B] transition-colors"
                                  />
                                  {rg.badge && (
                                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-semibold ${BADGE_COLORS[rg.badgeColor ?? "amber"] ?? BADGE_COLORS.amber}`}>
                                      {rg.badge}
                                    </span>
                                  )}
                                </Link>
                                {/* Country links */}
                                <div className="space-y-0.5">
                                  {rg.countries.map((country) => (
                                    <Link
                                      key={country.href}
                                      href={country.href}
                                      className="flex items-center justify-between py-2 px-2 rounded-md text-sm text-slate-600 hover:bg-slate-100 hover:text-[#0F2B5B] transition-colors group"
                                      role="menuitem"
                                    >
                                      <span className="flex items-center gap-2 min-w-0">
                                        {country.countryCode ? (
                                          <CountryFlag code={country.countryCode} label={country.label} className="w-5" />
                                        ) : (
                                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#0F2B5B] transition-colors flex-shrink-0" />
                                        )}
                                        <span className="truncate">{country.label}</span>
                                      </span>
                                      {country.badge && (
                                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-semibold whitespace-nowrap ml-1 ${BADGE_COLORS[country.badgeColor ?? "amber"] ?? BADGE_COLORS.amber}`}>
                                          {country.badge}
                                        </span>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                                {/* View all link */}
                                <Link
                                  href={rg.regionHref}
                                  className="flex items-center gap-1 mt-2 px-2 text-[11px] font-semibold text-[#0F2B5B] hover:text-[#12346d] transition-colors"
                                >
                                  View all <ArrowRight className="w-3 h-3" />
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* ── Standard / Products Mega Menu ── */
                        <div className="flex">
                          {/* Left: product categories */}
                          <div className="py-2 w-64 border-r border-slate-100 bg-slate-50 flex-shrink-0">
                            <div className="px-4 py-2 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                              {item.label}
                            </div>
                            {item.items.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="flex items-center px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-[#0F2B5B] transition-colors whitespace-nowrap"
                                role="menuitem"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>

                          {/* Right: size groups (mega-menu) */}
                          {hasSizeGroups && (
                            <div className="flex-1 py-2 px-2">
                              <div className="px-3 py-2 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                                Popular Sizes
                              </div>
                              <div className="grid grid-cols-3 gap-0 divide-x divide-slate-100">
                                {(item as NavDropdown).sizeGroups!.map((group) => (
                                  <div key={group.groupLabel} className="px-3 pb-2">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 pt-1 whitespace-nowrap">
                                      {group.groupLabel}
                                    </div>
                                    {group.items.map((sz) => (
                                      <Link
                                        key={sz.href + sz.label}
                                        href={sz.href}
                                        className="flex items-center justify-between py-2 px-2 rounded-md text-sm text-slate-700 hover:bg-slate-100 hover:text-[#0F2B5B] transition-colors group whitespace-nowrap"
                                        role="menuitem"
                                      >
                                        <span className="flex items-center gap-2 whitespace-nowrap">
                                          <span className="w-1.5 h-1.5 rounded-full bg-[#0F2B5B] group-hover:scale-150 transition-transform flex-shrink-0" />
                                          {sz.label}
                                        </span>
                                        {sz.badge && (
                                          <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-semibold whitespace-nowrap ml-1 ${BADGE_COLORS[sz.badgeColor ?? "amber"] ?? BADGE_COLORS.amber}`}>
                                            {sz.badge}
                                          </span>
                                        )}
                                      </Link>
                                    ))}
                                  </div>
                                ))}
                              </div>

                              {/* Footer CTA inside dropdown */}
                              <div className="mx-3 mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-xs text-slate-400">Need a custom size?</span>
                                <Link
                                  href="/oem/custom-printing"
                                  className="text-xs font-semibold text-[#0F2B5B] hover:text-[#12346d] transition-colors"
                                >
                                  OEM Custom Printing →
                                </Link>
                              </div>
                            </div>
                          )}

                          {/* Legacy featured list (non-Products menus) */}
                          {!hasSizeGroups && item.featured && (
                            <div className="flex-1 py-2">
                              <div className="px-4 py-2 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                                Popular Sizes
                              </div>
                              {item.featured.map((feat) => (
                                <Link
                                  key={feat.href}
                                  href={feat.href}
                                  className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-[#0F2B5B] transition-colors group"
                                  role="menuitem"
                                >
                                  <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F2B5B] group-hover:scale-150 transition-transform" />
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
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0 ml-2">
            <Link
              href="/contact"
              className="bg-[#0F2B5B] hover:bg-[#12346d] text-white font-semibold text-sm px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:text-[#0F2B5B] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 max-h-[80vh] overflow-y-auto">
            <div className="container py-4 space-y-1">
              {mainNav.map((item) => {
                if (!isDropdown(item)) {
                  return (
                    <Link
                      key={(item as NavItem).href}
                      href={(item as NavItem).href}
                      className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                        pathname === (item as NavItem).href
                          ? "text-[#0F2B5B] bg-slate-100"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#0F2B5B]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const hasSizeGroups   = !!(item as NavDropdown).sizeGroups?.length;
                const hasRegionGroups = !!(item as NavDropdown).regionGroups?.length;

                return (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-[#0F2B5B] hover:bg-slate-50 rounded-md transition-colors"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      aria-expanded={activeDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>

                    {activeDropdown === item.label && (
                      <div className="ml-4 mt-1 border-l-2 border-slate-200 pl-3 space-y-1">
                        {/* Category / overview links */}
                        {item.items.map((sub) => (
                          <Link
                            key={sub.href + sub.label}
                            href={sub.href}
                            className="block px-3 py-2.5 text-sm text-slate-600 hover:text-[#0F2B5B] transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}

                        {/* Region groups on mobile */}
                        {hasRegionGroups && (
                          <div className="pt-2 mt-2 border-t border-slate-200 space-y-3">
                            {(item as NavDropdown).regionGroups!.map((rg: NavRegionGroup) => (
                              <div key={rg.region}>
                                <div className="px-3 text-[10px] font-bold text-[#0F2B5B] uppercase tracking-wider mb-1 flex items-center gap-2">
                                  {rg.regionIcon && <span aria-hidden="true">{rg.regionIcon}</span>}
                                  {rg.region}
                                  {rg.badge && (
                                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-semibold ${BADGE_COLORS_DARK[rg.badgeColor ?? "amber"] ?? BADGE_COLORS_DARK.amber}`}>
                                      {rg.badge}
                                    </span>
                                  )}
                                </div>
                                {rg.countries.map((country) => (
                                  <Link
                                    key={country.href}
                                    href={country.href}
                                    className="flex items-center justify-between px-3 py-2.5 text-sm text-slate-600 hover:text-[#0F2B5B] transition-colors"
                                  >
                                    <span className="flex items-center gap-2">
                                      {country.countryCode ? (
                                        <CountryFlag code={country.countryCode} label={country.label} className="w-4" />
                                      ) : (
                                          <span className="w-1 h-1 rounded-full bg-[#0F2B5B]/60 flex-shrink-0" />
                                      )}
                                      {country.label}
                                    </span>
                                    {country.badge && (
                                      <span className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full">
                                        {country.badge}
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Size groups on mobile */}
                        {hasSizeGroups && (
                          <div className="pt-2 mt-2 border-t border-slate-200 space-y-3">
                            <div className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                              Popular Sizes
                            </div>
                            {(item as NavDropdown).sizeGroups!.map((group) => (
                              <div key={group.groupLabel}>
                                <div className="px-3 text-[10px] font-semibold text-[#0F2B5B] uppercase tracking-wider mb-1">
                                  {group.groupLabel}
                                </div>
                                {group.items.map((sz) => (
                                  <Link
                                    key={sz.href + sz.label}
                                    href={sz.href}
                                    className="flex items-center justify-between px-3 py-2.5 text-sm text-slate-600 hover:text-[#0F2B5B] transition-colors"
                                  >
                                    <span className="flex items-center gap-2">
                                      <span className="w-1 h-1 rounded-full bg-[#0F2B5B]/60 flex-shrink-0" />
                                      {sz.label}
                                    </span>
                                    {sz.badge && (
                                      <span className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full">
                                        {sz.badge}
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-3 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-[#0F2B5B] hover:bg-[#12346d] text-white font-semibold text-sm px-5 py-3 rounded-md transition-colors"
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
