import { NextRequest, NextResponse } from "next/server";
import { getAdminSession } from "@/lib/session";
import { ensureDbSchema } from "@/lib/prisma";
import { loadAiRelayConfig, saveAiRelayConfig } from "@/lib/aiConfig";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await ensureDbSchema();
  const config = await loadAiRelayConfig();
  return NextResponse.json({
    ...config,
    apiKey: config.apiKey ? "********" : "",
    hasApiKey: Boolean(config.apiKey),
  });
}

export async function PUT(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await ensureDbSchema();
  const body = await request.json();

  const next = await saveAiRelayConfig({
    apiKey: typeof body.apiKey === "string" ? body.apiKey : undefined,
    baseUrl: typeof body.baseUrl === "string" ? body.baseUrl : undefined,
    model: typeof body.model === "string" ? body.model : undefined,
    reasoningEffort: typeof body.reasoningEffort === "string" ? body.reasoningEffort : undefined,
  });

  return NextResponse.json({
    success: true,
    ...next,
    apiKey: next.apiKey ? "********" : "",
    hasApiKey: Boolean(next.apiKey),
  });
}
