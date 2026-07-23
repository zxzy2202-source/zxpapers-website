/**
 * SEO 配置存储
 * key: "seo"
 */
import { getStorage } from "@/lib/storage";
import { revalidateTag, unstable_cache } from "next/cache";

const KEY = "seo";
const PUBLIC_SEO_CACHE_TAG = "public-seo-settings";
const PUBLIC_SEO_CACHE_SECONDS = 60 * 60;

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
 * SEO 兜底默认值（由 GPT-5.5 基于 B2B 海外采购商搜索意图研究生成）
 *
 * 意图分层（按购买信号强度）：
 *  1. Identity   — manufacturer / supplier / factory China
 *  2. Spec       — 80x80, 57x40, 57x30, 4x6 等具体尺寸
 *  3. Compliance — BPA-free / FSC / ISO 9001
 *  4. Format     — labels / rolls / custom printed / blank
 *  5. Commercial — wholesale / bulk / OEM / private label
 *
 * 校验：title 55/60 字符，desc 145/160 字符，keywords 26 个。
 * 任何字段为空时使用此默认；用户在 /admin/seo 填的值会覆盖。
 */
export const SEO_DEFAULTS: Required<
  Pick<SeoSettings, "siteTitle" | "siteTitleTemplate" | "siteDescription" | "siteKeywords" | "ogImage">
> = {
  siteTitle: "Thermal Paper Rolls & Labels Manufacturer | ZhixinPaper",
  siteTitleTemplate: "%s | ZhixinPaper",
  siteDescription:
    "Factory-direct thermal paper rolls and labels from China. BPA-free, FSC, ISO certified OEM supply, fast FCL lead time. Request a wholesale quote.",
  siteKeywords: [
    // Identity (首位决策)
    "thermal paper manufacturer",
    "China thermal paper supplier",
    "thermal paper factory China",
    // Spec (高购买意图)
    "POS receipt paper rolls wholesale",
    "80x80 thermal paper rolls",
    "57x40 thermal paper rolls",
    "57x30 thermal paper rolls",
    "cash register paper rolls supplier",
    "bulk receipt paper rolls",
    // Compliance (采购验证)
    "BPA free thermal paper rolls",
    "FSC certified thermal paper",
    "ISO 9001 thermal paper supplier",
    // Format - Rolls
    "custom printed thermal paper rolls",
    "blank thermal paper rolls bulk",
    // Format - Labels
    "thermal labels manufacturer",
    "direct thermal labels wholesale",
    "4x6 thermal shipping labels",
    "2x1 thermal labels supplier",
    "custom printed thermal labels",
    "blank thermal labels bulk",
    // Differentiation (差异化产品)
    "machine ready roll labels",
    "automatic labeling machine labels",
    "detergent labels supplier",
    "custom detergent labels wholesale",
    // Commercial (B2B 询盘意图)
    "OEM thermal paper rolls",
    "private label thermal paper",
  ],
  ogImage: "https://www.zxpapers.com/og-default.png",
};


let cache: SeoSettings | null = null;
let cacheTime = 0;
const CACHE_TTL = 30 * 1000;

const readPublicSeoCached = unstable_cache(
  async (): Promise<SeoSettings> => {
    return (await getStorage().get<SeoSettings>(KEY)) || {};
  },
  ["public-seo-settings"],
  { revalidate: PUBLIC_SEO_CACHE_SECONDS, tags: [PUBLIC_SEO_CACHE_TAG] },
);

export async function readSeo(): Promise<SeoSettings> {
  if (cache && Date.now() - cacheTime < CACHE_TTL) return cache;
  const data = (await getStorage().get<SeoSettings>(KEY)) || {};
  cache = data;
  cacheTime = Date.now();
  return data;
}

/** Public pages use the shared Next Data Cache instead of hitting KV per request. */
export async function readPublicSeo(): Promise<SeoSettings> {
  return readPublicSeoCached();
}

/**
 * 读取生效配置（用户填值优先，空字段自动用 SEO_DEFAULTS 兜底）
 * 业务页面 / metadata 工厂应当用此函数，确保即使用户没填也有专业默认。
 */
export async function readEffectiveSeo(): Promise<SeoSettings> {
  const user = await readPublicSeo();
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
  revalidateTag(PUBLIC_SEO_CACHE_TAG);
  cache = merged;
  cacheTime = Date.now();
  return merged;
}

export function invalidateSeoCache() {
  cache = null;
  cacheTime = 0;
}
