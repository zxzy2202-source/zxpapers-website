import { S3Client } from "@aws-sdk/client-s3";

const R2_BASE = process.env.NEXT_PUBLIC_R2_URL || "/r2-assets";

export function r2Image(path: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  // 移除路径开头的斜杠，并拼接到 R2_BASE
  return `${R2_BASE.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
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
