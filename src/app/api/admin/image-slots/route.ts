import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { initializeImageSlots, listImageSlots } from "@/lib/imageSlots.server";

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const pageKey = searchParams.get("page") || "all";
  const keyword = searchParams.get("keyword") || "";

  await initializeImageSlots();
  const data = await listImageSlots({ pageKey, keyword });

  return NextResponse.json({
    success: true,
    ...data,
  });
}
