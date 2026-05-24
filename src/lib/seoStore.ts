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

/**
 * SEO 兜底默认值（基于海外 B2B 采购商搜索意图研究）
 *
 * 命中关键搜索词：
 *  - thermal paper manufacturer / supplier / factory China
 *  - 80x80 / 57x40 thermal paper rolls
 *  - POS receipt paper / cash register paper
 *  - BPA-free / FSC certified
 *  - thermal labels / jumbo rolls / custom printed
 *  - wholesale / bulk / OEM / ODM
 *
 * 任何字段为空时使用此默认，用户在 /admin/seo 填的值会覆盖。
 */
export const SEO_DEFAULTS: Required<
  Pick<SeoSettings, "siteTitle" | "siteTitleTemplate" | "siteDescription" | "siteKeywords" | "ogImage">
> = {
  siteTitle: "Thermal Paper Rolls Factory & Wholesale Manufacturer | ZhixinPaper",
  siteTitleTemplate: "%s | ZhixinPaper",
  siteDescription:
    "Zhixin Paper supplies ISO 9001 thermal paper rolls and 4x6 labels at factory-direct wholesale prices. OEM/private label, BPA-free options, fast global shipping.",
  siteKeywords: [
    "thermal paper rolls manufacturer",
    "thermal paper rolls wholesale",
    "thermal paper rolls factory",
    "POS receipt rolls supplier",
    "80x80 thermal paper rolls wholesale",
    "57x50 POS receipt rolls manufacturer",
    "BPA free thermal paper rolls",
    "custom thermal labels manufacturer",
    "4x6 shipping labels wholesale",
    "thermal label supplier OEM",
    "private label thermal paper rolls",
    "cash register paper rolls bulk",
    "receipt paper rolls distributor",
    "factory direct thermal paper supplier",
    "ISO 9001 thermal paper manufacturer",
  ],
  ogImage: "https://www.zxpapers.com/og-default.png",
};


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

/**
 * 读取生效配置（用户填值优先，空字段自动用 SEO_DEFAULTS 兜底）
 * 业务页面 / metadata 工厂应当用此函数，确保即使用户没填也有专业默认。
 */
export async function readEffectiveSeo(): Promise<SeoSettings> {
  const user = await readSeo();
  return {
    ...user,
    siteTitle: user.siteTitle?.trim() || SEO_DEFAULTS.siteTitle,
    siteTitleTemplate: user.siteTitleTemplate?.trim() || SEO_DEFAULTS.siteTitleTemplate,
    siteDescription: user.siteDescription?.trim() || SEO_DEFAULTS.siteDescription,
    siteKeywords:
      user.siteKeywords && user.siteKeywords.length > 0
        ? user.siteKeywords
        : SEO_DEFAULTS.siteKeywords,
    ogImage: user.ogImage?.trim() || SEO_DEFAULTS.ogImage,
  };
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
