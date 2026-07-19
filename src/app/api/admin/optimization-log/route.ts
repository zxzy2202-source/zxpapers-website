import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readAllEntries, addEntry, deleteEntry } from "@/lib/optimizationLogStore";

export const dynamic = "force-dynamic";

// GET /api/admin/optimization-log — 读取所有日志条目
export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const entries = await readAllEntries();
  return NextResponse.json({ entries });
}

// POST /api/admin/optimization-log — 新增日志条目
export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  try {
    const body = await req.json();
    if (!body.date || !body.category || !body.title || !body.description) {
      return NextResponse.json(
        { error: "日期、分类、标题和说明为必填项" },
        { status: 400 }
      );
    }
    const entry = await addEntry({
      date: body.date,
      category: body.category,
      title: body.title,
      description: body.description,
      commit: body.commit ?? "",
      files: body.files ?? "",
      result: body.result ?? "",
    });
    return NextResponse.json({ entry }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

// DELETE /api/admin/optimization-log — 删除指定条目
export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "缺少 id" }, { status: 400 });
    }
    await deleteEntry(id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
