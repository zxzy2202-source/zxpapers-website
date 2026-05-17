"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState("");
  const [baseUrl, setBaseUrl] = useState("https://api.openai.com/v1");
  const [model, setModel] = useState("gpt-5.5");
  const [reasoningEffort, setReasoningEffort] = useState("high");
  const [loading, setLoading] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    void (async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/admin/ai-config");
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "加载失败");
        setBaseUrl(data.baseUrl || "https://api.openai.com/v1");
        setModel(data.model || "gpt-5.5");
        setReasoningEffort(data.reasoningEffort || "high");
        setHasApiKey(Boolean(data.hasApiKey));
      } catch (error) {
        toast.error((error as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function onSave() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/ai-config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey, baseUrl, model, reasoningEffort }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "保存失败");
      setApiKey("");
      setHasApiKey(Boolean(data.hasApiKey));
      toast.success("AI 中转参数已保存");
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">AI 参数配置</h1>
        <p className="text-sm text-gray-500 mt-1">用于文章 AI 生成的中转 API 配置。</p>
      </div>

      <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-5">
        <div className="space-y-2">
          <Label>API Key {hasApiKey ? "（已配置）" : "（未配置）"}</Label>
          <Input
            type="password"
            placeholder="留空表示不修改"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Base URL</Label>
          <Input value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label>Model</Label>
          <Input value={model} onChange={(e) => setModel(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label>Reasoning Effort</Label>
          <Input value={reasoningEffort} onChange={(e) => setReasoningEffort(e.target.value)} />
        </div>

        <Button onClick={() => void onSave()} disabled={loading}>
          {loading ? "保存中..." : "保存配置"}
        </Button>
      </div>
    </div>
  );
}
