import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { r2Client, R2_BUCKET_NAME, r2Configured } from "@/lib/r2";
import { isAuthenticated } from "@/lib/auth";

/**
 * R2 图片上传
 * 文件命名规范：
 *   {dir}/{YYYYMMDD}-{semantic-name}-{shortRand}.{ext}
 *
 * 其中 dir 优先级：
 *   1. formData.slot 提供 → 用 slot 替换 ":" 为 "-" 作为目录（如 home:product-labels → home-product-labels/）
 *   2. formData.folder 提供 → 用 folder 作为目录
 *   3. 默认 uploads/
 *
 * semantic-name 优先级：
 *   1. formData.alt 提供（老板手填的语义化名）
 *   2. 否则从原始文件名提取（去掉扩展名 + sanitize）
 */

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // 去重音符号
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60); // 限制长度
}

function todayStamp(): string {
  const d = new Date();
  return `${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, "0")}${String(d.getUTCDate()).padStart(2, "0")}`;
}

function shortRand(): string {
  return Math.random().toString(36).slice(2, 8);
}

export async function POST(request: NextRequest) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  if (!r2Configured || !R2_BUCKET_NAME) {
    return NextResponse.json({ error: "R2 not configured" }, { status: 500 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const slotKey = (formData.get("slot") as string) || "";
    const folder = (formData.get("folder") as string) || "uploads";
    const alt = (formData.get("alt") as string) || "";

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // 目录：slot 优先（slot 形如 "home:product-labels" → "home-product-labels/"）
    const dir = slotKey
      ? slotKey.replace(/:/g, "-")
      : folder;

    // 文件名：扩展名 + 语义化短名
    const rawExt = (file.name.split(".").pop() || "jpg").toLowerCase();
    const ext = rawExt.replace(/[^a-z0-9]/g, "").slice(0, 5) || "jpg";

    const semanticSource =
      alt ||
      file.name.replace(/\.[^.]+$/, "") ||
      "image";
    const semanticName = slugify(semanticSource) || "image";

    const key = `${dir}/${todayStamp()}-${semanticName}-${shortRand()}.${ext}`;

    const command = new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: file.type || "image/jpeg",
      CacheControl: "public, max-age=31536000, immutable",
    });

    await r2Client.send(command);

    return NextResponse.json({
      success: true,
      path: key,
      url: `${process.env.NEXT_PUBLIC_R2_URL}/${key}`,
    });
  } catch (error) {
    console.error("R2 Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
