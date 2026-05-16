import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { COOKIE_NAME, generateToken, MAX_AGE } from "@/lib/session";

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body as { password?: string };

    const adminPassword = process.env.ADMIN_PASSWORD?.trim() || "";
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH?.trim() || "";

    if (!password) {
      return NextResponse.json({ error: "Missing password" }, { status: 400 });
    }

    if (!adminPassword && !adminPasswordHash) {
      return NextResponse.json({ error: "Admin password is not configured" }, { status: 500 });
    }

    let passwordOk = false;

    if (adminPasswordHash.startsWith("$2")) {
      try {
        passwordOk = await bcrypt.compare(password, adminPasswordHash);
      } catch (error) {
        console.error("[auth/login] bcrypt compare failed:", error);
      }
    }

    if (!passwordOk && adminPassword) {
      passwordOk = safeEqual(password, adminPassword);
    }

    if (!passwordOk) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = generateToken();
    const response = NextResponse.json({ success: true });
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: MAX_AGE,
      path: "/",
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
