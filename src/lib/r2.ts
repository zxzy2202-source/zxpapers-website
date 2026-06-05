import { S3Client } from "@aws-sdk/client-s3";

// 强制使用绝对 CDN 地址，因为 Vercel 上的 /r2-assets 转发配置可能失效或被拦截
const R2_BASE = "https://pub-529e97a14b4f4353b8b72301cfd8b481.r2.dev";

export function r2Image(path: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  
  // Clean path and combine with R2_BASE
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
