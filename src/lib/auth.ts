/**
 * 后台认证工具
 * 极简方案：环境变量密码 + httpOnly Cookie
 */
import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "zx_admin_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 天

function getSecret(): string {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "zxpaper-dev-secret";
}

/** 生成签名 token */
function sign(payload: string): string {
  const secret = getSecret();
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

/** 创建 session token */
export function createSessionToken(): string {
  const issuedAt = Date.now().toString();
  const signature = sign(issuedAt);
  return `${issuedAt}.${signature}`;
}

/** 校验 token 合法性 */
export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const [issuedAt, signature] = token.split(".");
  if (!issuedAt || !signature) return false;

  // 校验时间（7 天内）
  const ts = parseInt(issuedAt, 10);
  if (!ts || Date.now() - ts > COOKIE_MAX_AGE * 1000) return false;

  // 校验签名
  return sign(issuedAt) === signature;
}

/** 服务端：检查当前请求是否已登录 */
export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return verifySessionToken(token);
}

/** 服务端：设置登录 Cookie */
export async function setAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
}

/** 服务端：清除登录 Cookie */
export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

/** 校验密码 */
export function verifyPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD || "zxpaper2026";
  if (!input || !expected) return false;
  if (input.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(input), Buffer.from(expected));
}

export { COOKIE_NAME };
