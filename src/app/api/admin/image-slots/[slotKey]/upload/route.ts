import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { ensureSlotRecord, bindImageToSlot } from "@/lib/imageSlots.server";
import { prisma } from "@/lib/prisma";
import { normalizeSlotKey } from "@/config/imageSlots";

interface RouteContext {
  params: Promise<{ slotKey: string }>;
}

const uploadDir = path.join(process.cwd(), "public", "uploads", "images");

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
    const bytes = Buffer.from(await file.arrayBuffer());
    const safeBaseName = (file.name || "image")
      .replace(/\.[^.]+$/, "")
      .replace(/[^a-zA-Z0-9-_]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase() || "image";

    await fs.mkdir(uploadDir, { recursive: true });

    const filename = `${Date.now()}-${randomUUID()}-${safeBaseName}.webp`;
    const outputPath = path.join(uploadDir, filename);
    await fs.writeFile(outputPath, bytes);

    const imageAsset = await prisma.imageAsset.create({
      data: {
        filename,
        originalName: file.name,
        path: `/uploads/images/${filename}`,
        alt: typeof formData.get("alt") === "string" ? String(formData.get("alt")).trim() || null : null,
        label: slotRecord.label,
        page: slotRecord.slotKey,
        tags: `${slotRecord.pageKey},${slotRecord.sectionKey},${slotRecord.slotName}`,
        mimeType: file.type || "image/webp",
        storageType: "local",
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
