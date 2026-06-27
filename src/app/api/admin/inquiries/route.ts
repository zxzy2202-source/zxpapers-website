import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readAll, updateStatus, remove } from "@/lib/inquiryStore";

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const list = await readAll();
  return NextResponse.json({ list });
}

export async function PATCH(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const { id, status, notes } = await req.json();
  if (!id || !status) return NextResponse.json({ error: "缺少参数" }, { status: 400 });
  await updateStatus(id, status, notes);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "缺少 id" }, { status: 400 });
  await remove(id);
  return NextResponse.json({ success: true });
}
