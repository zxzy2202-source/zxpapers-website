import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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
  const body = await request.json();
  const { status, notes } = body;

  const inquiry = await prisma.inquiry.update({
    where: { id },
    data: { status, notes, updatedAt: new Date() },
  });

  return NextResponse.json({ success: true, inquiry });
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
  await prisma.inquiry.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
