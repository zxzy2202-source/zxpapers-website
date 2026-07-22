import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getBlogAssetQuery } from "@/content/blogCampaigns/blogAssetQueries";
import { rankFeishuAssets, type FeishuAssetCandidate } from "@/lib/blogAssetMatching";
import type { PostRecord } from "@/lib/postsStore";
import { R2_BUCKET_NAME, R2_PUBLIC_BASE, r2Client, r2Configured } from "@/lib/r2";

const FEISHU_API_BASE = (process.env.FEISHU_OPEN_API_BASE || "https://open.feishu.cn").replace(/\/+$/, "");
const ASSET_FIELDS = [
  "Asset ID",
  "素材标题",
  "文件/预览",
  "媒体格式",
  "内容类型",
  "产品主线",
  "规格/SKU",
  "应用场景",
  "适用渠道",
  "素材状态",
  "版权状态",
  "来源类型",
  "授权/使用限制",
  "市场/语言",
  "英文 Alt Text",
  "英文 Caption",
  "保密风险",
] as const;
const MAX_IMAGE_BYTES = 20 * 1024 * 1024;
const IMAGE_EXTENSIONS = new Set(["jpg", "jpeg", "png", "webp", "gif", "avif"]);

interface FeishuConfig {
  appId: string;
  appSecret: string;
  baseToken: string;
  tableId: string;
  attachmentFieldId: string;
}

interface FeishuApiEnvelope<T> {
  code?: number;
  msg?: string;
  data?: T;
  tenant_access_token?: string;
  expire?: number;
}

interface FeishuRecord {
  record_id?: string;
  fields?: Record<string, unknown>;
}

interface FeishuSearchData {
  has_more?: boolean;
  page_token?: string;
  items?: FeishuRecord[];
}

let tokenCache: { token: string; expiresAt: number } | null = null;

function getConfig(): FeishuConfig {
  const config = {
    appId: process.env.FEISHU_APP_ID?.trim() || "",
    appSecret: process.env.FEISHU_APP_SECRET?.trim() || "",
    baseToken: process.env.FEISHU_ASSET_BASE_TOKEN?.trim() || "",
    tableId: process.env.FEISHU_ASSET_TABLE_ID?.trim() || "",
    attachmentFieldId: process.env.FEISHU_ASSET_ATTACHMENT_FIELD_ID?.trim() || "",
  };
  const missing = Object.entries(config).filter(([, value]) => !value).map(([key]) => key);
  if (missing.length > 0) {
    throw new Error(`飞书素材库自动配图未配置：${missing.join(", ")}`);
  }
  return config;
}

async function readJson<T>(response: Response, operation: string): Promise<FeishuApiEnvelope<T>> {
  const body = await response.json().catch(() => null) as FeishuApiEnvelope<T> | null;
  if (!response.ok || !body || (typeof body.code === "number" && body.code !== 0)) {
    const code = body?.code ?? response.status;
    const message = body?.msg || response.statusText || "unknown error";
    throw new Error(`${operation}失败（${code}）：${message}`);
  }
  return body;
}

async function getTenantAccessToken(config: FeishuConfig): Promise<string> {
  if (tokenCache && tokenCache.expiresAt > Date.now() + 60_000) return tokenCache.token;

  const response = await fetch(`${FEISHU_API_BASE}/open-apis/auth/v3/tenant_access_token/internal`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ app_id: config.appId, app_secret: config.appSecret }),
    signal: AbortSignal.timeout(10_000),
    cache: "no-store",
  });
  const body = await readJson<never>(response, "获取飞书应用凭证");
  const token = body.tenant_access_token;
  if (!token) throw new Error("获取飞书应用凭证失败：响应缺少 tenant_access_token");

  tokenCache = {
    token,
    expiresAt: Date.now() + Math.max(60, (body.expire || 7200) - 120) * 1000,
  };
  return token;
}

function stringValues(value: unknown): string[] {
  if (typeof value === "string") return value.trim() ? [value.trim()] : [];
  if (typeof value === "number") return [String(value)];
  if (Array.isArray(value)) return value.flatMap(stringValues);
  if (value && typeof value === "object") {
    const object = value as Record<string, unknown>;
    for (const key of ["text", "name", "value"]) {
      if (typeof object[key] === "string") return stringValues(object[key]);
    }
  }
  return [];
}

function firstText(value: unknown): string {
  return stringValues(value).join(" ").trim();
}

function attachmentValues(value: unknown): FeishuAssetCandidate["attachments"] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((entry) => {
    if (!entry || typeof entry !== "object") return [];
    const item = entry as Record<string, unknown>;
    const fileToken = firstText(item.file_token || item.fileToken || item.token);
    if (!fileToken) return [];
    return [{
      fileToken,
      name: firstText(item.name) || "feishu-asset",
      size: typeof item.size === "number" ? item.size : undefined,
      mimeType: firstText(item.mime_type || item.mimeType || item.type) || undefined,
      extra: firstText(item.extra) || undefined,
    }];
  });
}

function recordToAsset(record: FeishuRecord): FeishuAssetCandidate | null {
  const fields = record.fields || {};
  const recordId = record.record_id || "";
  const assetId = firstText(fields["Asset ID"]);
  if (!recordId || !assetId) return null;

  return {
    recordId,
    assetId,
    title: firstText(fields["素材标题"]),
    attachments: attachmentValues(fields["文件/预览"]),
    mediaFormats: stringValues(fields["媒体格式"]),
    contentTypes: stringValues(fields["内容类型"]),
    productLines: stringValues(fields["产品主线"]),
    specifications: firstText(fields["规格/SKU"]),
    applications: stringValues(fields["应用场景"]),
    channels: stringValues(fields["适用渠道"]),
    status: stringValues(fields["素材状态"]),
    copyrightStatus: stringValues(fields["版权状态"]),
    sourceTypes: stringValues(fields["来源类型"]),
    usageRestrictions: firstText(fields["授权/使用限制"]),
    markets: stringValues(fields["市场/语言"]),
    altText: firstText(fields["英文 Alt Text"]),
    caption: firstText(fields["英文 Caption"]),
    confidentialityRisks: stringValues(fields["保密风险"]),
  };
}

export async function listFeishuAssetCandidates(): Promise<FeishuAssetCandidate[]> {
  const config = getConfig();
  const token = await getTenantAccessToken(config);
  const records: FeishuRecord[] = [];
  let pageToken = "";

  do {
    const query = new URLSearchParams({ page_size: "200" });
    if (pageToken) query.set("page_token", pageToken);
    const response = await fetch(
      `${FEISHU_API_BASE}/open-apis/bitable/v1/apps/${encodeURIComponent(config.baseToken)}/tables/${encodeURIComponent(config.tableId)}/records/search?${query}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ field_names: ASSET_FIELDS }),
        signal: AbortSignal.timeout(15_000),
        cache: "no-store",
      },
    );
    const body = await readJson<FeishuSearchData>(response, "读取飞书素材库");
    const data = body.data || {};
    records.push(...(data.items || []));
    pageToken = data.has_more ? data.page_token || "" : "";
  } while (pageToken);

  return records.map(recordToAsset).filter((asset): asset is FeishuAssetCandidate => Boolean(asset));
}

function imageExtension(fileName: string, contentType: string): string {
  const fromName = fileName.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "") || "";
  if (IMAGE_EXTENSIONS.has(fromName)) return fromName === "jpeg" ? "jpg" : fromName;
  const subtype = contentType.split("/")[1]?.split(";")[0]?.toLowerCase() || "";
  if (IMAGE_EXTENSIONS.has(subtype)) return subtype === "jpeg" ? "jpg" : subtype;
  throw new Error(`飞书素材不是支持的图片格式：${fileName}`);
}

async function downloadAttachment(
  token: string,
  config: FeishuConfig,
  recordId: string,
  attachment: FeishuAssetCandidate["attachments"][number],
): Promise<{ body: Buffer; contentType: string; extension: string }> {
  if (attachment.size && attachment.size > MAX_IMAGE_BYTES) {
    throw new Error(`飞书素材超过 20MB：${attachment.name}`);
  }
  const query = new URLSearchParams();
  const permissionContext = attachment.extra || JSON.stringify({
    bitablePerm: {
      tableId: config.tableId,
      attachments: {
        [config.attachmentFieldId]: {
          [recordId]: [attachment.fileToken],
        },
      },
    },
  });
  query.set("extra", permissionContext);
  const suffix = query.size > 0 ? `?${query}` : "";
  const response = await fetch(
    `${FEISHU_API_BASE}/open-apis/drive/v1/medias/${encodeURIComponent(attachment.fileToken)}/download${suffix}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(20_000),
      cache: "no-store",
    },
  );
  if (!response.ok) {
    throw new Error(`下载飞书素材失败（${response.status}）：${attachment.name}`);
  }
  const body = Buffer.from(await response.arrayBuffer());
  if (body.byteLength === 0 || body.byteLength > MAX_IMAGE_BYTES) {
    throw new Error(`飞书素材文件大小无效：${attachment.name}`);
  }
  const headerType = response.headers.get("content-type")?.split(";")[0] || "";
  const declaredType = attachment.mimeType?.startsWith("image/") ? attachment.mimeType : "";
  const contentType = headerType.startsWith("image/") ? headerType : declaredType || "application/octet-stream";
  const extension = imageExtension(attachment.name, contentType);
  return { body, contentType: contentType === "application/octet-stream" ? `image/${extension}` : contentType, extension };
}

function safeSegment(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70) || "asset";
}

export async function prepareBlogPostCover(post: PostRecord): Promise<PostRecord> {
  if (post.cover) return post;
  const assetQuery = post.assetQuery || getBlogAssetQuery(post.slug);
  if (!assetQuery) return post;
  if (!r2Configured || !R2_BUCKET_NAME) {
    throw new Error("飞书素材已启用，但 R2 图片存储未配置");
  }

  const config = getConfig();
  const token = await getTenantAccessToken(config);
  const ranked = rankFeishuAssets(await listFeishuAssetCandidates(), assetQuery);
  if (ranked.length === 0) {
    throw new Error("飞书素材库暂无符合已批准、Website、版权和相关性门禁的图片");
  }

  const failures: string[] = [];
  for (const asset of ranked) {
    for (const attachment of asset.attachments) {
      try {
        const image = await downloadAttachment(token, config, asset.recordId, attachment);
        const key = `blog/feishu/${safeSegment(asset.assetId)}-${safeSegment(post.slug)}.${image.extension}`;
        await r2Client.send(new PutObjectCommand({
          Bucket: R2_BUCKET_NAME,
          Key: key,
          Body: image.body,
          ContentType: image.contentType,
          CacheControl: "public, max-age=31536000, immutable",
          Metadata: {
            "feishu-asset-id": asset.assetId.slice(0, 128),
            "feishu-record-id": asset.recordId.slice(0, 128),
          },
        }));
        const syncedAt = new Date().toISOString();
        return {
          ...post,
          assetQuery,
          cover: `${R2_PUBLIC_BASE}/${key}`,
          coverAlt: asset.altText,
          coverAsset: {
            provider: "feishu-base",
            baseRecordId: asset.recordId,
            assetId: asset.assetId,
            assetTitle: asset.title,
            matchScore: asset.score,
            altText: asset.altText,
            caption: asset.caption || undefined,
            syncedAt,
          },
        };
      } catch (error) {
        failures.push(error instanceof Error ? error.message : "unknown attachment error");
      }
    }
  }

  throw new Error(`飞书图片候选无法转存到 R2：${failures.slice(0, 2).join("；")}`);
}
