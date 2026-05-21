import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readOverrides, writeOverride, deleteOverride } from "@/lib/imageSlotStore";
import { revalidatePath } from "next/cache";

/** GET 当前所有覆盖图配置 */
export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const overrides = await readOverrides();
  return NextResponse.json({ overrides });
}

/** POST 设置某个槽位的图片 URL */
export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  try {
    const { slot, url } = await req.json();
    if (!slot || !url) {
      return NextResponse.json({ error: "缺少 slot 或 url" }, { status: 400 });
    }
    await writeOverride(slot, url);
    // 触发全站缓存重建
    revalidatePath("/", "layout");
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "保存失败" }, { status: 500 });
  }
}

/** DELETE 删除某个槽位的覆盖（恢复 fallback） */
export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  try {
    const { slot } = await req.json();
    if (!slot) {
      return NextResponse.json({ error: "缺少 slot" }, { status: 400 });
    }
    await deleteOverride(slot);
    revalidatePath("/", "layout");
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "删除失败" }, { status: 500 });
  }
}
