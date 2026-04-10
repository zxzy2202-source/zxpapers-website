import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { initializeImageSlots } from "@/lib/imageSlots.server";

export async function POST() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const total = await initializeImageSlots();
    return NextResponse.json({ success: true, total });
  } catch (error) {
    console.error("Failed to initialize image slots", error);
    return NextResponse.json({ error: "初始化槽位失败" }, { status: 500 });
  }
}
