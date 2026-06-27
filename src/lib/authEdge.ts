/**
 * Edge runtime 安全的认证工具（仅用于 middleware）
 * 使用 Web Crypto API（subtle）而不是 Node crypto，避免在 Edge runtime 报错。
 *
 * 注意：必须与 src/lib/auth.ts 中的 sign() 算法保持完全一致（HMAC-SHA256, hex 输出）。
 */

export const COOKIE_NAME = "zx_admin_session";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 天

function getSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.ADMIN_PASSWORD ||
    "zxpaper-dev-secret"
  );
}

function bufToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function signEdge(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return bufToHex(sig);
}

/** Edge 环境校验 session token */
export async function verifySessionTokenEdge(
  token: string | undefined
): Promise<boolean> {
  if (!token) return false;
  const [issuedAt, signature] = token.split(".");
  if (!issuedAt || !signature) return false;

  const ts = parseInt(issuedAt, 10);
  if (!ts || Date.now() - ts > COOKIE_MAX_AGE * 1000) return false;

  const expected = await signEdge(issuedAt);
  return expected === signature;
}
