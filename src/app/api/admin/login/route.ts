import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, setAuthCookie } from "@/lib/auth";
import { rateLimit, resetRateLimit, getClientIp } from "@/lib/rateLimit";

// 每个 IP 在 10 分钟内最多 10 次登录尝试，超过即拒绝（挡住脚本化暴力破解）。
const LOGIN_MAX_ATTEMPTS = 10;
const LOGIN_WINDOW_SECONDS = 10 * 60;

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    // 1. 限流：先于密码校验，避免并发暴力破解绕过延迟
    const limit = await rateLimit("login", ip, {
      max: LOGIN_MAX_ATTEMPTS,
      windowSeconds: LOGIN_WINDOW_SECONDS,
    });
    if (!limit.allowed) {
      return NextResponse.json(
        { error: "尝试过于频繁，请稍后再试" },
        { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } }
      );
    }

    const { password } = await req.json();
    if (!password || typeof password !== "string") {
      return NextResponse.json({ error: "请输入密码" }, { status: 400 });
    }

    if (!verifyPassword(password)) {
      // 故意延迟增加单次试错成本（与限流配合）
      await new Promise((r) => setTimeout(r, 800));
      return NextResponse.json({ error: "密码错误" }, { status: 401 });
    }

    // 2. 登录成功 → 重置该 IP 的失败计数，避免连续多次输错后成功的正常用户被锁
    await resetRateLimit("login", ip);
    await setAuthCookie();
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "登录失败" }, { status: 500 });
  }
}
