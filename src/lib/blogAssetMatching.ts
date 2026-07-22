import type { BlogAssetQuery } from "@/lib/blogAssetTypes";

export interface FeishuAssetCandidate {
  recordId: string;
  assetId: string;
  title: string;
  attachments: Array<{
    fileToken: string;
    name: string;
    size?: number;
    mimeType?: string;
    extra?: string;
  }>;
  mediaFormats: string[];
  contentTypes: string[];
  productLines: string[];
  specifications: string;
  applications: string[];
  channels: string[];
  status: string[];
  copyrightStatus: string[];
  sourceTypes: string[];
  usageRestrictions: string;
  markets: string[];
  altText: string;
  caption: string;
  confidentialityRisks: string[];
}

export interface RankedFeishuAsset extends FeishuAssetCandidate {
  score: number;
  matchReasons: string[];
}

const APPROVED_COPYRIGHT = new Set(["公司原创", "客户已授权", "供应商已授权", "已购买版权"]);
const IMAGE_FORMATS = new Set(["Photo", "Infographic", "3D/Render"]);

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function overlaps(left: string[], right: string[]): string[] {
  const rightSet = new Set(right.map(normalize));
  return left.filter((value) => rightSet.has(normalize(value)));
}

export function isPublishableWebsiteAsset(asset: FeishuAssetCandidate): boolean {
  if (!asset.status.includes("已批准")) return false;
  if (!asset.channels.includes("Website")) return false;
  if (!asset.mediaFormats.some((format) => IMAGE_FORMATS.has(format))) return false;
  if (asset.attachments.length === 0) return false;
  if (!asset.altText.trim()) return false;
  if (!asset.copyrightStatus.some((status) => APPROVED_COPYRIGHT.has(status))) return false;
  if (asset.copyrightStatus.includes("限制使用") || asset.copyrightStatus.includes("待确认")) return false;
  if (asset.sourceTypes.includes("公开参考")) return false;
  if (asset.confidentialityRisks.some((risk) => risk !== "无")) return false;
  if (/禁止.*(?:网站|独立站)|不可.*(?:网站|公开)|仅限.*(?:内部|阿里)/i.test(asset.usageRestrictions)) return false;
  return true;
}

export function scoreFeishuAsset(asset: FeishuAssetCandidate, query: BlogAssetQuery): RankedFeishuAsset {
  let score = 0;
  const matchReasons: string[] = [];

  if (asset.productLines.map(normalize).includes(normalize(query.productLine))) {
    score += 40;
    matchReasons.push(`产品主线：${query.productLine}`);
  }

  const marketMatches = overlaps(asset.markets, query.markets);
  if (marketMatches.length > 0) {
    const hasRegionalMatch = marketMatches.some((value) => normalize(value) === "middle east");
    score += hasRegionalMatch ? 20 : Math.min(12, marketMatches.length * 6);
    matchReasons.push(`市场/语言：${marketMatches.join(", ")}`);
  }

  const contentMatches = overlaps(asset.contentTypes, query.contentTypes);
  if (contentMatches.length > 0) {
    score += Math.min(20, contentMatches.length * 10);
    matchReasons.push(`内容类型：${contentMatches.join(", ")}`);
  }

  const applicationMatches = overlaps(asset.applications, query.applications);
  if (applicationMatches.length > 0) {
    score += Math.min(15, applicationMatches.length * 8);
    matchReasons.push(`应用场景：${applicationMatches.join(", ")}`);
  }

  const searchable = normalize([
    asset.title,
    asset.specifications,
    asset.altText,
    asset.caption,
    ...asset.contentTypes,
    ...asset.applications,
  ].join(" "));
  const keywordMatches = query.keywords.filter((keyword) => searchable.includes(normalize(keyword)));
  if (keywordMatches.length > 0) {
    score += Math.min(25, keywordMatches.length * 5);
    matchReasons.push(`关键词：${keywordMatches.join(", ")}`);
  }

  return { ...asset, score, matchReasons };
}

export function rankFeishuAssets(
  assets: FeishuAssetCandidate[],
  query: BlogAssetQuery,
  minimumScore = 55,
): RankedFeishuAsset[] {
  return assets
    .filter(isPublishableWebsiteAsset)
    .map((asset) => scoreFeishuAsset(asset, query))
    .filter((asset) => asset.score >= minimumScore)
    .sort((left, right) => right.score - left.score || left.assetId.localeCompare(right.assetId));
}
