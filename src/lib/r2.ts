import { S3Client } from "@aws-sdk/client-s3";

// 强制使用绝对 CDN 地址，因为 Vercel 上的 /r2-assets 转发配置可能失效或被拦截。
// 显示端与上传端（upload-r2 route）必须用同一个 base，否则上传地址与展示地址会分裂，
// 所以这里统一读取 NEXT_PUBLIC_R2_URL，仅在缺失时回退到历史默认值。
const DEFAULT_R2_BASE = "https://pub-529e97a14b4f4353b8b72301cfd8b481.r2.dev";
export const R2_PUBLIC_BASE = (
  process.env.NEXT_PUBLIC_R2_URL || DEFAULT_R2_BASE
).replace(/\/+$/, "");
const R2_BASE = R2_PUBLIC_BASE;

export function r2Image(path: string): string {
  if (!path) return "";
  
  // 如果已经是正确的 CDN 地址，直接返回
  if (path.startsWith(R2_BASE)) return path;

  // 关键修复：如果路径是旧的转发地址（可能是数据库里存的绝对路径），强制转换为 CDN 地址
  if (path.includes("/r2-assets/")) {
    const parts = path.split("/r2-assets/");
    const fileName = parts[parts.length - 1];
    return `${R2_BASE}/${fileName}`;
  }

  // 如果是其他外部链接，保持原样
  if (path.startsWith("http")) return path;
  
  // 相对路径处理
  const cleanPath = path.replace(/^\//, "");
  return `${R2_BASE}/${cleanPath}`;
}

const accountId = process.env.R2_ACCOUNT_ID;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

export const r2Configured = !!(accountId && accessKeyId && secretAccessKey);

export const r2Client = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: accessKeyId || "",
    secretAccessKey: secretAccessKey || "",
  },
});

export const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
