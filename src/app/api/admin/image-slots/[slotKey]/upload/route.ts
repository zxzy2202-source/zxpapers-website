import { put } from "@vercel/blob";
import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { ensureSlotRecord, bindImageToSlot } from "@/lib/imageSlots.server";
import { prisma } from "@/lib/prisma";
import { normalizeSlotKey } from "@/config/imageSlots";

interface RouteContext {
  params: Promise<{ slotKey: string }>;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];
const allowLocalFileUploads =
  process.env.ALLOW_LOCAL_FILE_UPLOADS === "true" || process.env.NODE_ENV !== "production";

export async function POST(request: NextRequest, context: RouteContext) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slotKey } = await context.params;
  const normalized = normalizeSlotKey(decodeURIComponent(slotKey));

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "请上传图片文件" }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: `不支持的文件格式：${file.type}` }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "文件超过 10MB 限制" }, { status: 400 });
    }

    const slotRecord = await ensureSlotRecord(normalized);

    const safeBaseName = (file.name || "image")
      .replace(/\.[^.]+$/, "")
      .replace(/[^a-zA-Z0-9-_]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase() || "image";

    const filename = `${Date.now()}-${randomUUID()}-${safeBaseName}.webp`;
    const blobPath = `uploads/images/${filename}`;
    const bytes = Buffer.from(await file.arrayBuffer());

    let storedPath = "";
    let storageType = "local";

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(blobPath, file, {
        access: "public",
        contentType: file.type || "image/webp",
      });
      storedPath = blob.url;
      storageType = "blob";
    } else {
      if (!allowLocalFileUploads) {
        return NextResponse.json(
          { error: "生产环境未配置 BLOB_READ_WRITE_TOKEN，已禁用本地上传存储" },
          { status: 500 }
        );
      }

      const uploadDir = path.join(process.cwd(), "public", "uploads", "images");
      const filePath = path.join(uploadDir, filename);
      await mkdir(uploadDir, { recursive: true });
      await writeFile(filePath, bytes);
      storedPath = `/uploads/images/${filename}`;
    }

    const imageAsset = await prisma.imageAsset.create({
      data: {
        filename,
        originalName: file.name,
        path: storedPath,
        alt: typeof formData.get("alt") === "string" ? String(formData.get("alt")).trim() || null : null,
        label: slotRecord.label,
        page: slotRecord.slotKey,
        tags: `${slotRecord.pageKey},${slotRecord.sectionKey},${slotRecord.slotName}`,
        mimeType: file.type || "image/webp",
        storageType,
        source: "image-slot-admin",
        width: null,
        height: null,
        size: bytes.byteLength,
      },
    });

    const slot = await bindImageToSlot(slotRecord.slotKey, imageAsset.id);

    return NextResponse.json({ success: true, slot });
  } catch (error) {
    console.error("Failed to upload slot image", error);
    return NextResponse.json({ error: "上传图片失败" }, { status: 500 });
  }
}
