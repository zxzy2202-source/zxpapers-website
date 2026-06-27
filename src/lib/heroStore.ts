/**
 * 首页 Hero 区文案与图片管理
 * 存储 key: "hero"
 */
import { getStorage } from "@/lib/storage";

const KEY = "hero";

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

export async function readHero(): Promise<HomeHeroSettings> {
  if (cache && Date.now() - cache.ts < CACHE_MS) return cache.data;
  const data = (await getStorage().get<HomeHeroSettings>(KEY)) || {};
  cache = { data, ts: Date.now() };
  return data;
}

export async function writeHero(data: HomeHeroSettings): Promise<HomeHeroSettings> {
  const next: HomeHeroSettings = { ...data, updatedAt: new Date().toISOString() };
  await getStorage().set(KEY, next);
  cache = { data: next, ts: Date.now() };
  return next;
}

export function clearHeroCache() {
  cache = null;
}
