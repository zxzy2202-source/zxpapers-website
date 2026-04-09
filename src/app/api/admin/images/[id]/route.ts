import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// PATCH /api/admin/images/[id] - 更新图片元数据（alt、page 绑定槽位等）
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

// DELETE /api/admin/images/[id] - 删除图片记录
export async function DELETE(
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
    await prisma.imageAsset.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting image:", error);
    return NextResponse.json({ error: "删除失败，请重试" }, { status: 500 });
  }
}
