import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/session";
import { listImageSlots } from "@/lib/imageSlots.server";

export async function GET(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const pageKey = searchParams.get("page") || "all";
  const keyword = searchParams.get("keyword") || "";

  try {
    const data = await listImageSlots({ pageKey, keyword });
    return NextResponse.json({ success: true, ...data });
  } catch (error) {
    console.error("Error loading image slots:", error);
    return NextResponse.json({ error: "Database error" }, { status: 503 });
  }
}
