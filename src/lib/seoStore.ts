/**
 * SEO 配置存储
 * key: "seo"
 */
import { getStorage } from "@/lib/storage";

const KEY = "seo";

export interface SeoSettings {
  // 全站默认
  siteTitle?: string;
  siteTitleTemplate?: string;
  siteDescription?: string;
  siteKeywords?: string[];
  ogImage?: string;

  // 验证码
  googleSiteVerification?: string;
  baiduSiteVerification?: string;
  bingSiteVerification?: string;

  // 第三方
  googleAnalyticsId?: string;
  googleTagManagerId?: string;

  // 通知渠道（在 SEO 设置里也展示，方便测试）
  wecomWebhookConfigured?: boolean;
  feishuWebhookConfigured?: boolean;
  serverchanConfigured?: boolean;
}

let cache: SeoSettings | null = null;
let cacheTime = 0;
const CACHE_TTL = 30 * 1000;

export async function readSeo(): Promise<SeoSettings> {
  if (cache && Date.now() - cacheTime < CACHE_TTL) return cache;
  const data = (await getStorage().get<SeoSettings>(KEY)) || {};
  cache = data;
  cacheTime = Date.now();
  return data;
}

export async function writeSeo(data: Partial<SeoSettings>): Promise<SeoSettings> {
  const existing = await readSeo();
  const merged = { ...existing, ...data };
  await getStorage().set(KEY, merged);
  cache = merged;
  cacheTime = Date.now();
  return merged;
}

export function invalidateSeoCache() {
  cache = null;
  cacheTime = 0;
}
