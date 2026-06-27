/**
 * 轻量限流工具（存储无关）
 *
 * 复用 getStorage() 抽象层：本地开发用 data/*.json，生产用 Vercel KV。
 * 采用「固定窗口计数」，窗口与计数都存为 JSON，不依赖 Redis 原生 TTL/INCR，
 * 因此两种后端行为一致。
 *
 * 注意：这是「足够好」的应用层限流，用于挡住脚本化的暴力破解 / 询盘轰炸。
 * 它不是分布式强一致方案（高并发下计数可能有少量竞态偏差），但对本站场景足够。
 */
import { getStorage } from "@/lib/storage";

export interface RateLimitResult {
  /** 是否放行 */
  allowed: boolean;
  /** 本窗口剩余可用次数 */
  remaining: number;
  /** 若被限流，建议多少秒后重试 */
  retryAfterSeconds: number;
}

interface WindowRecord {
  count: number;
  /** 窗口结束的时间戳（ms） */
  resetAt: number;
}

/**
 * 从请求头解析客户端 IP。站点跑在 Vercel / Cloudflare 之后，
 * 真实 IP 在 x-forwarded-for（取第一个）或 x-real-ip。
 */
export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

/**
 * 固定窗口限流。
 * @param bucket   业务桶名（如 "login" / "inquiry"），用于隔离不同接口的计数
 * @param identifier 限流主体（通常是 IP）
 * @param opts     max=窗口内最大次数，windowSeconds=窗口长度（秒）
 */
export async function rateLimit(
  bucket: string,
  identifier: string,
  opts: { max: number; windowSeconds: number }
): Promise<RateLimitResult> {
  const storage = getStorage();
  const key = `ratelimit:${bucket}:${identifier}`;
  const now = Date.now();
  const windowMs = opts.windowSeconds * 1000;

  // 存储不可用时「失败放行」，避免因限流后端故障把正常用户全挡在外面。
  const record = await storage.get<WindowRecord>(key).catch(() => null);

  // 无记录或窗口已过期 → 开新窗口
  if (!record || typeof record.resetAt !== "number" || now >= record.resetAt) {
    await storage
      .set(key, { count: 1, resetAt: now + windowMs } satisfies WindowRecord)
      .catch(() => {});
    return { allowed: true, remaining: opts.max - 1, retryAfterSeconds: 0 };
  }

  // 窗口内仍有额度
  if (record.count < opts.max) {
    await storage
      .set(key, { count: record.count + 1, resetAt: record.resetAt } satisfies WindowRecord)
      .catch(() => {});
    return {
      allowed: true,
      remaining: opts.max - record.count - 1,
      retryAfterSeconds: 0,
    };
  }

  // 超额 → 限流
  return {
    allowed: false,
    remaining: 0,
    retryAfterSeconds: Math.max(1, Math.ceil((record.resetAt - now) / 1000)),
  };
}

/** 主动清空某主体的计数（如登录成功后重置失败次数）。 */
export async function resetRateLimit(bucket: string, identifier: string): Promise<void> {
  await getStorage()
    .delete(`ratelimit:${bucket}:${identifier}`)
    .catch(() => {});
}
