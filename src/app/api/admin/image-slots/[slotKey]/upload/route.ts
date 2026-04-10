import { put } from "@vercel/blob";
import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { ensureSlotRecord, bindImageToSlot } from "@/lib/imageSlots.server";
import { prisma } from "@/lib/prisma";
import { normalizeSlotKey } from "@/config/imageSlots";

interface RouteContext {
  params: Promise<{ slotKey: string }>;
}

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

    const slotRecord = await ensureSlotRecord(normalized);

    const safeBaseName = (file.name || "image")
      .replace(/\.[^.]+$/, "")
      .replace(/[^a-zA-Z0-9-_]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase() || "image";

    const filename = `${Date.now()}-${randomUUID()}-${safeBaseName}.webp`;
    const blobPath = `uploads/images/${filename}`;

    // 上传到 Vercel Blob（持久化存储，Serverless 友好）
    const blob = await put(blobPath, file, {
      access: "public",
      contentType: file.type || "image/webp",
    });

    const bytes = Buffer.from(await file.arrayBuffer());

    const imageAsset = await prisma.imageAsset.create({
      data: {
        filename,
        originalName: file.name,
        path: blob.url,           // 使用 Blob 的公开 URL 作为路径
        alt: typeof formData.get("alt") === "string" ? String(formData.get("alt")).trim() || null : null,
        label: slotRecord.label,
        page: slotRecord.slotKey,
        tags: `${slotRecord.pageKey},${slotRecord.sectionKey},${slotRecord.slotName}`,
        mimeType: file.type || "image/webp",
        storageType: "blob",
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
