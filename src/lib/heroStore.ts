/**
 * 首页 Hero 区文案与图片管理
 * 存储 key: "hero"
 */
import { getStorage } from "@/lib/storage";
import { revalidateTag, unstable_cache } from "next/cache";
import { HERO_LIMITS } from "@/lib/heroLimits";

const KEY = "hero";
const PUBLIC_HERO_CACHE_TAG = "public-hero-settings";
const PUBLIC_HERO_CACHE_SECONDS = 60 * 60;

export interface HeroBanner {
  url: string;
  alt?: string;
}

export interface HeroCTA {
  label?: string;
  href?: string;
}

export interface HomeHeroSettings {
  badgeText?: string;
  eyebrow?: string;
  titleMain?: string;
  titleHighlight?: string;
  subtitle?: string;
  trustBadges?: string[];
  ctaPrimary?: HeroCTA;
  ctaSecondary?: HeroCTA;
  banners?: HeroBanner[];
  carouselIntervalMs?: number;
  updatedAt?: string;
}

export function validateHeroSettings(value: unknown): asserts value is HomeHeroSettings {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("Hero 配置格式无效");
  }

  const data = value as Record<string, unknown>;
  const textFields = [
    ["badgeText", HERO_LIMITS.badgeText],
    ["eyebrow", HERO_LIMITS.eyebrow],
    ["titleMain", HERO_LIMITS.titleMain],
    ["titleHighlight", HERO_LIMITS.titleHighlight],
    ["subtitle", HERO_LIMITS.subtitle],
  ] as const;

  for (const [field, max] of textFields) {
    if (data[field] !== undefined && (typeof data[field] !== "string" || data[field].length > max)) {
      throw new Error(`${field} 不能超过 ${max} 个字符`);
    }
  }

  if (data.trustBadges !== undefined) {
    if (!Array.isArray(data.trustBadges) || data.trustBadges.length > HERO_LIMITS.trustBadges) {
      throw new Error(`信任徽章最多 ${HERO_LIMITS.trustBadges} 个`);
    }
    if (data.trustBadges.some((item) => typeof item !== "string" || item.length > HERO_LIMITS.trustBadge)) {
      throw new Error(`每个信任徽章不能超过 ${HERO_LIMITS.trustBadge} 个字符`);
    }
  }

  for (const field of ["ctaPrimary", "ctaSecondary"] as const) {
    const cta = data[field];
    if (cta === undefined) continue;
    if (!cta || typeof cta !== "object" || Array.isArray(cta)) throw new Error(`${field} 格式无效`);
    const item = cta as Record<string, unknown>;
    if (item.label !== undefined && (typeof item.label !== "string" || item.label.length > HERO_LIMITS.ctaLabel)) {
      throw new Error(`${field}.label 不能超过 ${HERO_LIMITS.ctaLabel} 个字符`);
    }
    if (item.href !== undefined && (typeof item.href !== "string" || item.href.length > HERO_LIMITS.ctaHref)) {
      throw new Error(`${field}.href 不能超过 ${HERO_LIMITS.ctaHref} 个字符`);
    }
  }

  if (data.banners !== undefined) {
    if (!Array.isArray(data.banners) || data.banners.length > HERO_LIMITS.banners) {
      throw new Error(`轮播图最多 ${HERO_LIMITS.banners} 张`);
    }
    for (const banner of data.banners) {
      if (!banner || typeof banner !== "object" || Array.isArray(banner)) throw new Error("轮播图格式无效");
      const item = banner as Record<string, unknown>;
      if (typeof item.url !== "string") throw new Error("轮播图 URL 格式无效");
      if (item.alt !== undefined && (typeof item.alt !== "string" || item.alt.length > HERO_LIMITS.bannerAlt)) {
        throw new Error(`轮播图说明不能超过 ${HERO_LIMITS.bannerAlt} 个字符`);
      }
    }
  }

  if (data.carouselIntervalMs !== undefined &&
      (typeof data.carouselIntervalMs !== "number" ||
        !Number.isInteger(data.carouselIntervalMs) ||
        data.carouselIntervalMs < HERO_LIMITS.carouselIntervalMs.min ||
        data.carouselIntervalMs > HERO_LIMITS.carouselIntervalMs.max)) {
    throw new Error(`轮播间隔必须为 ${HERO_LIMITS.carouselIntervalMs.min} 至 ${HERO_LIMITS.carouselIntervalMs.max} 毫秒的整数`);
  }
}

let cache: { data: HomeHeroSettings; ts: number } | null = null;
const CACHE_MS = 30_000;

const readPublicHeroCached = unstable_cache(
  async (): Promise<HomeHeroSettings> => {
    return (await getStorage().get<HomeHeroSettings>(KEY)) || {};
  },
  ["public-hero-settings"],
  { revalidate: PUBLIC_HERO_CACHE_SECONDS, tags: [PUBLIC_HERO_CACHE_TAG] },
);

export async function readHero(): Promise<HomeHeroSettings> {
  if (cache && Date.now() - cache.ts < CACHE_MS) return cache.data;
  const data = (await getStorage().get<HomeHeroSettings>(KEY)) || {};
  cache = { data, ts: Date.now() };
  return data;
}

/** Homepage rendering uses the shared Next Data Cache rather than a per-request KV read. */
export async function readPublicHero(): Promise<HomeHeroSettings> {
  return readPublicHeroCached();
}

export async function writeHero(data: HomeHeroSettings): Promise<HomeHeroSettings> {
  const next: HomeHeroSettings = { ...data, updatedAt: new Date().toISOString() };
  await getStorage().set(KEY, next);
  revalidateTag(PUBLIC_HERO_CACHE_TAG);
  cache = { data: next, ts: Date.now() };
  return next;
}

export function clearHeroCache() {
  cache = null;
}
