/**
 * 通用 KV 存储抽象层
 *
 * 自动驱动：
 * - 生产 + 设置了 KV_REST_API_URL/KV_REST_API_TOKEN → Vercel KV (Upstash Redis)
 * - 其他情况（本地开发）→ data/*.json 本地文件
 *
 * 这样：本地开发零依赖，部署到 Vercel 只需在控制台 Connect KV Store。
 */

import fs from "fs/promises";
import path from "path";

// ============== 公共接口 ==============
export interface KVStorage {
  get<T = unknown>(key: string): Promise<T | null>;
  set<T = unknown>(key: string, value: T): Promise<void>;
  delete(key: string): Promise<void>;
}

// ============== 文件驱动（本地开发） ==============
class FileStorage implements KVStorage {
  private dir = path.join(process.cwd(), "data");

  private filePath(key: string): string {
    // key 形如 "hero", "seo", "posts" → data/hero.json
    const safe = key.replace(/[^a-zA-Z0-9_-]/g, "_");
    return path.join(this.dir, `${safe}.json`);
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const raw = await fs.readFile(this.filePath(key), "utf-8");
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  async set<T>(key: string, value: T): Promise<void> {
    await fs.mkdir(this.dir, { recursive: true });
    await fs.writeFile(this.filePath(key), JSON.stringify(value, null, 2), "utf-8");
  }

  async delete(key: string): Promise<void> {
    try {
      await fs.unlink(this.filePath(key));
    } catch {
      /* ignore */
    }
  }
}

// ============== Vercel KV 驱动（生产） ==============
class VercelKVStorage implements KVStorage {
  private url: string;
  private token: string;

  constructor(url: string, token: string) {
    this.url = url.replace(/\/$/, "");
    this.token = token;
  }

  private async req(cmd: string[], revalidate = 3600): Promise<any> {
    const res = await fetch(this.url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cmd),
      // 使用 Next.js 扩展的 fetch 缓存：读操作缓存 1 小时，与页面 revalidate 策略一致。
      // 写操作（SET/DEL）会传入 revalidate=0 跳过缓存。
      next: { revalidate },
    });
    if (!res.ok) throw new Error(`KV request failed: ${res.status} ${await res.text()}`);
    const json = await res.json();
    return json.result;
  }

  async get<T>(key: string): Promise<T | null> {
    const raw = await this.req(["GET", `zxp:${key}`]);
    if (raw === null || raw === undefined) return null;
    try {
      return typeof raw === "string" ? (JSON.parse(raw) as T) : (raw as T);
    } catch {
      return raw as T;
    }
  }

  async set<T>(key: string, value: T): Promise<void> {
    await this.req(["SET", `zxp:${key}`, JSON.stringify(value)], 0); // 写操作不缓存
  }

  async delete(key: string): Promise<void> {
    await this.req(["DEL", `zxp:${key}`], 0); // 写操作不缓存
  }
}

// ============== 工厂 ==============
let _storage: KVStorage | null = null;

export function getStorage(): KVStorage {
  if (_storage) return _storage;

  const kvUrl = process.env.KV_REST_API_URL;
  const kvToken = process.env.KV_REST_API_TOKEN;

  if (kvUrl && kvToken) {
    _storage = new VercelKVStorage(kvUrl, kvToken);
    if (process.env.NODE_ENV !== "production") {
      console.log("[storage] Using Vercel KV");
    }
  } else {
    _storage = new FileStorage();
    if (process.env.NODE_ENV !== "production") {
      console.log("[storage] Using local file storage (data/*.json)");
    }
  }
  return _storage;
}

/** 测试用：注入自定义存储 */
export function _setStorage(s: KVStorage) {
  _storage = s;
}
