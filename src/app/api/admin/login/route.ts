import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, setAuthCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    if (!password || typeof password !== "string") {
      return NextResponse.json({ error: "请输入密码" }, { status: 400 });
    }

    if (!verifyPassword(password)) {
      // 故意延迟避免暴力破解
      await new Promise((r) => setTimeout(r, 800));
      return NextResponse.json({ error: "密码错误" }, { status: 401 });
    }

    await setAuthCookie();
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "登录失败" }, { status: 500 });
  }
}
