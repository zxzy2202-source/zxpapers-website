import { prisma } from "@/lib/prisma";

const KEY = "ai_relay_config";

export interface AiRelayConfig {
  apiKey: string;
  baseUrl: string;
  model: string;
  reasoningEffort: string;
}

export const DEFAULT_AI_CONFIG: AiRelayConfig = {
  apiKey: "",
  baseUrl: "https://api.openai.com/v1",
  model: "gpt-5.5",
  reasoningEffort: "high",
};

function normalizeBaseUrl(baseUrl: string): string {
  return (baseUrl || DEFAULT_AI_CONFIG.baseUrl).trim().replace(/\/$/, "");
}

export async function loadAiRelayConfig(): Promise<AiRelayConfig> {
  const envConfig: AiRelayConfig = {
    apiKey: (process.env.OPENAI_API_KEY || "").trim(),
    baseUrl: normalizeBaseUrl(process.env.OPENAI_BASE_URL || DEFAULT_AI_CONFIG.baseUrl),
    model: (process.env.AI_ARTICLE_MODEL || DEFAULT_AI_CONFIG.model).trim(),
    reasoningEffort: (process.env.AI_ARTICLE_REASONING_EFFORT || DEFAULT_AI_CONFIG.reasoningEffort).trim(),
  };

  try {
    const row = await prisma.systemConfig.findUnique({ where: { key: KEY } });
    if (!row?.value) return envConfig;

    const parsed = JSON.parse(row.value) as Partial<AiRelayConfig>;
    return {
      apiKey: String(parsed.apiKey ?? envConfig.apiKey).trim(),
      baseUrl: normalizeBaseUrl(String(parsed.baseUrl ?? envConfig.baseUrl)),
      model: String(parsed.model ?? envConfig.model).trim() || envConfig.model,
      reasoningEffort:
        String(parsed.reasoningEffort ?? envConfig.reasoningEffort).trim() || envConfig.reasoningEffort,
    };
  } catch {
    return envConfig;
  }
}

export async function saveAiRelayConfig(input: Partial<AiRelayConfig>): Promise<AiRelayConfig> {
  const current = await loadAiRelayConfig();
  const incomingKey = typeof input.apiKey === "string" ? input.apiKey.trim() : undefined;
  const next: AiRelayConfig = {
    apiKey: incomingKey === "" ? current.apiKey : String(incomingKey ?? current.apiKey).trim(),
    baseUrl: normalizeBaseUrl(String(input.baseUrl ?? current.baseUrl)),
    model: String(input.model ?? current.model).trim() || current.model,
    reasoningEffort: String(input.reasoningEffort ?? current.reasoningEffort).trim() || current.reasoningEffort,
  };

  await prisma.systemConfig.upsert({
    where: { key: KEY },
    create: { key: KEY, value: JSON.stringify(next) },
    update: { value: JSON.stringify(next) },
  });

  return next;
}
