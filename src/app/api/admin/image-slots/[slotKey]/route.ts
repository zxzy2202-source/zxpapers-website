import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { clearSlotImage, ensureSlotRecord, getSlotRecordByKey } from "@/lib/imageSlots.server";
import { normalizeSlotKey } from "@/config/imageSlots";
import { prisma } from "@/lib/prisma";

interface RouteContext {
  params: Promise<{ slotKey: string }>;
}

export async function GET(_request: NextRequest, context: RouteContext) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slotKey } = await context.params;
  const record = await getSlotRecordByKey(decodeURIComponent(slotKey));

  if (!record) {
    return NextResponse.json({ error: "槽位不存在" }, { status: 404 });
  }

  return NextResponse.json({ success: true, slot: record });
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slotKey } = await context.params;
  const normalized = normalizeSlotKey(decodeURIComponent(slotKey));
  const body = await request.json().catch(() => ({}));

  try {
    await ensureSlotRecord(normalized);

    const updated = await prisma.imageSlotRecord.update({
      where: { slotKey: normalized },
      data: {
        isActive: typeof body.isActive === "boolean" ? body.isActive : undefined,
        label: typeof body.label === "string" && body.label.trim() ? body.label.trim() : undefined,
        description:
          typeof body.description === "string"
            ? body.description.trim() || null
            : undefined,
      },
      include: { imageAsset: true },
    });

    return NextResponse.json({ success: true, slot: updated });
  } catch (error) {
    console.error("Failed to update image slot", error);
    return NextResponse.json({ error: "更新槽位失败" }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, context: RouteContext) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slotKey } = await context.params;

  try {
    const slot = await clearSlotImage(decodeURIComponent(slotKey));
    return NextResponse.json({ success: true, slot });
  } catch (error) {
    console.error("Failed to clear image slot", error);
    return NextResponse.json({ error: "清空槽位失败" }, { status: 500 });
  }
}
