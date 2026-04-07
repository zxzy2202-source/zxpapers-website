"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";

export interface HeroBadge {
  icon?: ReactNode;
  text: string;
  color?: "amber" | "green" | "blue" | "red" | "purple";
}

export interface HeroStat {
  value: string;
  label: string;
  sub?: string;
}

export interface HeroCTA {
  label: string;
  href: string;
  variant: "primary" | "whatsapp" | "outline";
  icon?: ReactNode;
  external?: boolean;
}

export interface HeroBreadcrumb {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  /** Background image URL */
  bgImage?: string;
  /** Overlay gradient direction: left (default) | center | right */
  overlayDir?: "left" | "center" | "right";
  /** Overlay opacity 0–100 */
  overlayOpacity?: number;
  /** Small label badge above title */
  badge?: HeroBadge;
  /** Breadcrumb navigation */
  breadcrumbs?: HeroBreadcrumb[];
  /** Eyebrow text (small caps above title) */
  eyebrow?: string;
  /** Main title — can include <br/> */
  title: ReactNode;
  /** Highlighted part of title (rendered in amber) */
  titleHighlight?: string;
  /** Subtitle / description */
  subtitle?: string;
  /** Trust badges row */
  trustBadges?: string[];
  /** Stat cards row */
  stats?: HeroStat[];
  /** CTA buttons */
  ctas?: HeroCTA[];
  /** Right-side visual slot */
  rightSlot?: ReactNode;
  /** Min height class */
  minHeight?: string;
  /** Extra class names */
  className?: string;
}

const badgeColors = {
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  green: "bg-green-500/20 text-green-300 border-green-500/30",
  blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  red: "bg-red-500/20 text-red-300 border-red-500/30",
  purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

export default function PageHero({
  bgImage,
  overlayDir = "left",
  overlayOpacity = 50,
  badge,
  breadcrumbs,
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  trustBadges,
  stats,
  ctas,
  rightSlot,
  minHeight = "min-h-[520px]",
  className = "",
}: PageHeroProps) {
  // 优化后的渐变遮罩：左侧文字区保持可读性，右侧快速淡出让背景图透出
  const leftOpacity = Math.min(overlayOpacity + 25, 95);   // 文字区更不透明，确保可读性
  const midOpacity = Math.round(overlayOpacity * 0.6);     // 中间过渡区
  const rightOpacity = Math.round(overlayOpacity * 0.15);  // 右侧几乎完全透明，背景图清晰可见

  const overlayGradient =
    overlayDir === "center"
      ? `from-[#0F2B5B]/${leftOpacity} via-[#0F2B5B]/${midOpacity} to-[#0F2B5B]/${leftOpacity}`
      : overlayDir === "right"
      ? `from-[#0F2B5B]/${rightOpacity} via-[#0F2B5B]/${midOpacity} to-[#0F2B5B]/${leftOpacity}`
      : `from-[#0F2B5B]/${leftOpacity} via-[#0F2B5B]/${midOpacity} to-[#0F2B5B]/${rightOpacity}`;

  return (
    <div
      className={`relative bg-[#0F2B5B] text-white overflow-hidden ${minHeight} flex items-center ${className}`}
    >
      {/* Background image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Main gradient overlay — strong on text side, fades to transparent */}
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayGradient}`} />

      {/* Bottom vignette — adds depth and grounds the content */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F2B5B]/40 to-transparent pointer-events-none" />

      {/* Top vignette — subtle darkening at top edge */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0F2B5B]/30 to-transparent pointer-events-none" />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative glow — increased visibility */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-amber-400/60 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative w-full">
        <div className="container py-16 sm:py-20">
          <div className={`grid ${rightSlot ? "grid-cols-1 lg:grid-cols-2 gap-12" : "grid-cols-1"} items-center`}>
            {/* Left: text content */}
            <div className={rightSlot ? "max-w-xl" : "max-w-3xl"}>
              {/* Breadcrumbs */}
              {breadcrumbs && breadcrumbs.length > 0 && (
                <nav className="flex items-center gap-1.5 text-sm text-slate-400 mb-5">
                  {breadcrumbs.map((crumb, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      {i > 0 && <span className="text-slate-600">/</span>}
                      {crumb.href ? (
                        <Link href={crumb.href} className="hover:text-white transition-colors">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-slate-300">{crumb.label}</span>
                      )}
                    </span>
                  ))}
                </nav>
              )}

              {/* Badge */}
              {badge && (
                <div
                  className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-5 border ${
                    badgeColors[badge.color ?? "amber"]
                  }`}
                >
                  {badge.icon}
                  {badge.text}
                </div>
              )}

              {/* Eyebrow */}
              {eyebrow && (
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-amber-400" />
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em]">
                    {eyebrow}
                  </span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                {typeof title === "string" && titleHighlight ? (
                  <>
                    {title.split(titleHighlight)[0]}
                    <span className="text-amber-400">{titleHighlight}</span>
                    {title.split(titleHighlight)[1]}
                  </>
                ) : (
                  title
                )}
              </h1>

              {/* Subtitle */}
              {subtitle && (
                <p className="text-lg text-slate-300 leading-relaxed mb-6 max-w-xl">
                  {subtitle}
                </p>
              )}

              {/* Trust badges */}
              {trustBadges && trustBadges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {trustBadges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/10 border border-white/20 text-slate-200 px-3 py-1.5 rounded-full backdrop-blur-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* CTAs */}
              {ctas && ctas.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-8">
                  {ctas.map((cta) => {
                    const base =
                      "inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm";
                    const variants = {
                      primary:
                        "bg-amber-500 hover:bg-amber-400 text-slate-900 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5",
                      whatsapp:
                        "bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5",
                      outline:
                        "border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 backdrop-blur-sm hover:-translate-y-0.5",
                    };
                    return cta.external ? (
                      <a
                        key={cta.label}
                        href={cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${base} ${variants[cta.variant]}`}
                      >
                        {cta.icon}
                        {cta.label}
                        {cta.variant === "primary" && <ArrowRight className="w-4 h-4" />}
                      </a>
                    ) : (
                      <Link
                        key={cta.label}
                        href={cta.href}
                        className={`${base} ${variants[cta.variant]}`}
                      >
                        {cta.icon}
                        {cta.label}
                        {cta.variant === "primary" && <ArrowRight className="w-4 h-4" />}
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Stats */}
              {stats && stats.length > 0 && (
                <div className={`grid grid-cols-2 sm:grid-cols-${Math.min(stats.length, 4)} gap-3`}>
                  {stats.map(({ value, label, sub }) => (
                    <div
                      key={label}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-colors"
                    >
                      <div className="text-xl sm:text-2xl font-extrabold text-amber-400 mb-0.5">
                        {value}
                      </div>
                      <div className="text-xs text-slate-300 font-medium">{label}</div>
                      {sub && <div className="text-[10px] text-slate-500 mt-0.5">{sub}</div>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: visual slot */}
            {rightSlot && (
              <div className="hidden lg:flex items-center justify-center">
                {rightSlot}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
