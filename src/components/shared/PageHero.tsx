"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

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
  /** Background image carousel URLs */
  bgImages?: string[];
  /** Carousel interval in milliseconds */
  bgCarouselInterval?: number;
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
  /** Compact slot rendered below hero content on mobile/tablet */
  mobileRightSlot?: ReactNode;
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
  bgImages,
  bgCarouselInterval = 5000,
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
  mobileRightSlot,
  minHeight = "min-h-[520px]",
  className = "",
}: PageHeroProps) {
  const heroImages = (bgImages?.length ? bgImages : bgImage ? [bgImage] : []).filter(Boolean);
  const hasCarousel = heroImages.length > 1;
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(media.matches);

    updateMotionPreference();
    media.addEventListener("change", updateMotionPreference);

    return () => media.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!hasCarousel || isPaused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroImages.length);
    }, bgCarouselInterval);

    return () => window.clearInterval(timer);
  }, [bgCarouselInterval, hasCarousel, heroImages.length, isPaused, reduceMotion]);

  const baseOpacity = Math.max(0.5, Math.min(overlayOpacity / 100, 0.9));
  const strong = Math.min(baseOpacity + 0.22, 0.96);
  const medium = Math.min(baseOpacity + 0.05, 0.82);
  const light = Math.max(baseOpacity - 0.38, 0.08);

  const overlayGradient =
    overlayDir === "center"
      ? `linear-gradient(90deg, rgba(7,17,36,${medium}) 0%, rgba(7,17,36,${strong}) 50%, rgba(7,17,36,${medium}) 100%)`
      : overlayDir === "right"
      ? `linear-gradient(90deg, rgba(7,17,36,${light}) 0%, rgba(7,17,36,${medium}) 45%, rgba(7,17,36,${strong}) 100%)`
      : `linear-gradient(90deg, rgba(7,17,36,${strong}) 0%, rgba(7,17,36,${medium}) 44%, rgba(7,17,36,${light}) 100%)`;

  const statsGridClass =
    !stats || stats.length <= 1
      ? "sm:grid-cols-1"
      : stats.length === 2
      ? "sm:grid-cols-2"
      : stats.length === 3
      ? "sm:grid-cols-3"
      : "sm:grid-cols-4";
  const renderedHeroImages = hasMounted && hasCarousel ? heroImages : heroImages.slice(0, 1);

  return (
    <div
      className={`relative bg-brand-navy-deep text-white overflow-hidden border-b border-slate-200 ${minHeight} flex items-center ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Background image / carousel */}
      {heroImages.length > 0 && (
        <div className="absolute inset-0">
          {renderedHeroImages.map((image, index) => {
            const slideIndex = hasMounted && hasCarousel ? index : 0;

            return (
              <div
                key={`${image}-${slideIndex}`}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  slideIndex === activeSlide ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={slideIndex !== activeSlide}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  priority={slideIndex === 0}
                  loading={slideIndex === 0 ? "eager" : undefined}
                  fetchPriority={slideIndex === 0 ? "high" : undefined}
                  quality={72}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="absolute inset-0" style={{ background: overlayGradient }} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,36,0.08)_0%,rgba(7,17,36,0.22)_100%)]" />

      {hasCarousel && (
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              className="group relative flex h-11 w-11 items-center justify-center"
              aria-label={`Show hero image ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
            >
              <span
                className={`block h-2 rounded-full border border-white/40 transition-[width,background-color] duration-200 motion-reduce:transition-none ${
                  index === activeSlide ? "w-7 bg-amber-400" : "w-2 bg-white/40 group-hover:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative w-full">
        <div className="container py-16 sm:py-24">
          <div className={`grid ${rightSlot ? "grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16" : "grid-cols-1"} items-center`}>
            {/* Left: text content */}
            <div className={rightSlot ? "max-w-2xl" : "max-w-3xl"}>
              {/* Breadcrumbs */}
              {breadcrumbs && breadcrumbs.length > 0 && (
                <nav className="flex items-center gap-1.5 text-sm text-slate-400 mb-5">
                  {breadcrumbs.map((crumb, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      {i > 0 && <span className="text-slate-500">/</span>}
                      {crumb.href ? (
                        <Link href={crumb.href} className="hover:text-slate-100 transition-colors">
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
                  className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-md mb-5 border ${
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
                  <div className="w-10 h-px bg-amber-400" />
                  <span className="text-amber-300 text-[11px] font-semibold uppercase tracking-[0.22em]">
                    {eyebrow}
                  </span>
                </div>
              )}

              {/* Title */}
              <h1 className="max-w-full text-[2.25rem] sm:text-[3.5rem] lg:text-[4.15rem] font-semibold tracking-normal sm:tracking-[-0.03em] leading-[1.06] sm:leading-[1.02] mb-5 text-white">
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
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-7 max-w-2xl">
                  {subtitle}
                </p>
              )}

              {/* Trust badges */}
              {trustBadges && trustBadges.length > 0 && (
                <div className="flex flex-wrap gap-2.5 mb-7">
                  {trustBadges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] bg-white/5 border border-white/15 text-slate-200 px-3 py-2 rounded-md"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* CTAs */}
              {ctas && ctas.length > 0 && (
                <div className="flex flex-col min-[420px]:flex-row min-[420px]:flex-wrap gap-3 mb-8">
                  {ctas.map((cta) => {
                    const base =
                      "inline-flex items-center justify-center gap-2 font-semibold px-5 sm:px-6 py-3 rounded-md transition-colors duration-200 text-sm";
                    const variants = {
                      primary:
                        "bg-amber-500 hover:bg-amber-400 text-slate-950",
                      whatsapp:
                        "bg-[#225d47] hover:bg-[#2b775a] text-white border border-white/10",
                      outline:
                        "border border-white/25 hover:border-white/45 text-white hover:bg-white/8",
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
                <div className={`grid grid-cols-1 min-[380px]:grid-cols-2 ${statsGridClass} gap-3`}>
                  {stats.map(({ value, label, sub }) => (
                    <div
                      key={label}
                      className="min-w-0 border border-white/12 bg-black/20 rounded-md px-4 py-4 text-left"
                    >
                      <div className="text-base sm:text-xl font-semibold text-white mb-1">
                        {value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-300 font-semibold uppercase tracking-[0.08em] sm:tracking-[0.14em]">{label}</div>
                      {sub && <div className="text-[11px] text-slate-500 mt-1">{sub}</div>}
                    </div>
                  ))}
                </div>
              )}

              {mobileRightSlot && (
                <div className="mt-6 lg:hidden">
                  {mobileRightSlot}
                </div>
              )}
            </div>

            {/* Right: visual slot */}
            {rightSlot && (
              <div className="hidden lg:flex items-center justify-end">
                {rightSlot}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
