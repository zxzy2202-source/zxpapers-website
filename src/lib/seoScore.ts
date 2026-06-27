/**
 * SEO 健康度评分（纯函数 - 边界安全，可被 'use client' 引用）
 *
 * v2.1 评分公式（满分 100，基础 40）：
 *   +15 siteTitle    +15 siteDescription    +12 ogImage
 *   +8  keywords     +5  googleVerification +3 bingVerification
 *   +2  twitter (此项目用 baidu 替代)
 */
import type { SeoSettings } from "./seoStore";

export function calculateSeoScore(seo: SeoSettings | null | undefined): number {
  if (!seo) return 40;

  let score = 40; // 基础分

  if (seo.siteTitle?.trim()) score += 15;
  if (seo.siteDescription?.trim()) score += 15;
  if (seo.ogImage?.trim()) score += 12;
  if (Array.isArray(seo.siteKeywords) && seo.siteKeywords.length > 0) score += 8;
  if (seo.googleSiteVerification?.trim()) score += 5;
  if (seo.bingSiteVerification?.trim()) score += 3;
  if (seo.baiduSiteVerification?.trim()) score += 2;

  return Math.min(score, 100);
}

export function getSeoScoreLevel(score: number): {
  label: string;
  color: string;
} {
  if (score >= 90) return { label: "优秀", color: "text-emerald-600" };
  if (score >= 75) return { label: "良好", color: "text-blue-600" };
  if (score >= 60) return { label: "及格", color: "text-amber-600" };
  return { label: "待优化", color: "text-rose-600" };
}
