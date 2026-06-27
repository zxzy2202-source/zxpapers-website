/**
 * IndexNow — instant URL submission to Bing, Yandex, Seznam, Naver, Yep.
 * Google does NOT support IndexNow, but Bing covers ~3% direct + powers many
 * AI engines (ChatGPT search, Copilot). Free, no quota, fire-and-forget.
 *
 * Spec: https://www.indexnow.org/documentation
 *
 * Key file must be live at /<KEY>.txt at the site root and contain only KEY.
 * We generated /public/d010bebea5b964b02adba39366d9beab.txt — when rotating
 * the key, update KEY below AND rename the .txt file accordingly.
 */

const KEY = "d010bebea5b964b02adba39366d9beab";
const HOST = "www.zxpapers.com";
const ENDPOINT = "https://api.indexnow.org/IndexNow";

export interface IndexNowResult {
  ok: boolean;
  status: number;
  submitted: number;
  error?: string;
}

/**
 * Ping IndexNow with one or more URLs. Fire-and-forget — never throws,
 * never blocks the caller. Returns a result for debugging only.
 *
 * Limits: up to 10,000 URLs per request, but we cap at 200 per call
 * to stay well under typical Vercel response-size limits.
 */
export async function pingIndexNow(urls: string[]): Promise<IndexNowResult> {
  const valid = Array.from(
    new Set(
      urls
        .filter((u) => typeof u === "string" && u.startsWith("https://" + HOST)),
    ),
  ).slice(0, 200);

  if (valid.length === 0) {
    return { ok: false, status: 0, submitted: 0, error: "no valid urls" };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Host: "api.indexnow.org",
      },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList: valid,
      }),
      // IndexNow can be slow when degraded; 8s is enough for normal traffic
      signal: AbortSignal.timeout(8000),
    });
    return { ok: res.ok, status: res.status, submitted: valid.length };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      submitted: valid.length,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

/**
 * Convenience: ping a single page (typical use after CMS publish / SEO edit).
 */
export function pingIndexNowOne(url: string): Promise<IndexNowResult> {
  return pingIndexNow([url]);
}
