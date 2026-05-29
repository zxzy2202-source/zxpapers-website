/**
 * IndexNow trigger — POST { urls: string[] } to ping Bing/Yandex/etc.
 *
 * Auth: requires the admin session cookie. Same auth wall as other /api/admin
 * routes; safer than an open public endpoint.
 *
 * GET (debug): returns current key + sample payload so you can verify
 * the key file is reachable at /<KEY>.txt before submitting URLs.
 */
import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { pingIndexNow } from "@/lib/indexnow";

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  return NextResponse.json({
    keyFile: "https://www.zxpapers.com/d010bebea5b964b02adba39366d9beab.txt",
    sample: {
      urls: ["https://www.zxpapers.com/products/linerless-labels"],
    },
  });
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  let body: { urls?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  if (!Array.isArray(body.urls) || body.urls.length === 0) {
    return NextResponse.json({ error: "urls[] required" }, { status: 400 });
  }
  const urls = body.urls.filter((u): u is string => typeof u === "string");
  const result = await pingIndexNow(urls);
  return NextResponse.json(result);
}
