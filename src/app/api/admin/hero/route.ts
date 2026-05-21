import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readHero, writeHero } from "@/lib/heroStore";
import { revalidatePath } from "next/cache";

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const data = await readHero();
  return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const body = await req.json();
  const saved = await writeHero(body);
  revalidatePath("/", "layout");
  return NextResponse.json({ success: true, data: saved });
}
