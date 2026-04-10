import fs from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { clearSlotImage, deleteImageAssetCompletely, ensureSlotRecord, bindImageToSlot } from "@/lib/imageSlots.server";
import { getLegacySlotKey, normalizeSlotKey } from "@/config/imageSlots";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "缺少图片 ID" }, { status: 400 });
  }

  try {
    const body = await request.json();
    const { page, alt } = body as { page?: string; alt?: string };

    if (page !== undefined && page) {
      const normalized = normalizeSlotKey(page);
      await ensureSlotRecord(normalized);
      await bindImageToSlot(normalized, id);
    }

    if (page !== undefined && !page) {
      const bindings = await prisma.imageSlotRecord.findMany({ where: { imageAssetId: id } });
      for (const binding of bindings) {
        await clearSlotImage(binding.slotKey);
      }
    }

    const updated = await prisma.imageAsset.update({
      where: { id },
      data: {
        ...(page !== undefined ? { page: page || null } : {}),
        ...(alt !== undefined ? { alt: alt || null } : {}),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, image: updated });
  } catch (error) {
    console.error("Error updating image:", error);
    return NextResponse.json({ error: "更新失败，请重试" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "缺少图片 ID" }, { status: 400 });
  }

  try {
    const deleted = await deleteImageAssetCompletely(id);
    if (!deleted) {
      return NextResponse.json({ error: "图片不存在" }, { status: 404 });
    }

    // 兼容新版路径 /uploads/images/ 和旧版路径 /images/uploads/
    if (deleted.path?.startsWith("/uploads/") || deleted.path?.startsWith("/images/uploads/")) {
      const filePath = path.join(process.cwd(), "public", deleted.path.replace(/^\//, ""));
      await fs.unlink(filePath).catch(() => null);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting image:", error);
    return NextResponse.json({ error: "删除失败，请重试" }, { status: 500 });
  }
}
