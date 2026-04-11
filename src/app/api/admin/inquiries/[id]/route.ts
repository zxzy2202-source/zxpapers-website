import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const VALID_STATUSES = ["NEW", "REPLIED", "CLOSED"] as const;

// PATCH /api/admin/inquiries/[id] - 更新询盘状态/备注
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const body = await request.json();
    const { status, notes } = body;

    // 校验 status 白名单
    if (status !== undefined && !VALID_STATUSES.includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Must be one of: ${VALID_STATUSES.join(", ")}` },
        { status: 400 }
      );
    }

    // 校验 notes 类型
    if (notes !== undefined && typeof notes !== "string") {
      return NextResponse.json(
        { error: "Notes must be a string" },
        { status: 400 }
      );
    }

    const inquiry = await prisma.inquiry.update({
      where: { id },
      data: {
        ...(status !== undefined ? { status } : {}),
        ...(notes !== undefined ? { notes: notes.trim() } : {}),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, inquiry });
  } catch (error) {
    console.error("Error updating inquiry:", error);
    // Prisma P2025: Record not found
    if ((error as { code?: string }).code === "P2025") {
      return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE /api/admin/inquiries/[id] - 删除询盘
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await prisma.inquiry.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    if ((error as { code?: string }).code === "P2025") {
      return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
