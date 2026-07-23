/**
 * 首页 Hero 区文案与图片管理
 * 存储 key: "hero"
 */
import { getStorage } from "@/lib/storage";
import { revalidateTag, unstable_cache } from "next/cache";

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
  updatedAt?: string;
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
