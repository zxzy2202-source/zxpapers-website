import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { bootstrapLegacyHomeImages } from "@/lib/imageSlots.server";

export async function POST() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await bootstrapLegacyHomeImages();
    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("Failed to bootstrap legacy home images", error);
    return NextResponse.json({ error: "恢复旧首页图片失败" }, { status: 500 });
  }
}
