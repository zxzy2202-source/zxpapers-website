"use client";

import { useState, FormEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") || "/admin";

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "登录失败");
        return;
      }
      router.push(redirect);
      router.refresh();
    } catch (err) {
      setError("网络错误，请重试");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-3xl font-bold tracking-wide">
            ZhixinPaper
          </div>
          <p className="text-slate-400 mt-2 text-sm">网站管理后台</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          <label className="block text-slate-200 text-sm font-medium mb-2">
            管理员密码
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="请输入密码"
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            autoFocus
            required
          />
          {error && (
            <p className="text-red-400 text-sm mt-3 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "登录中..." : "登 录"}
          </button>
          <p className="text-slate-500 text-xs mt-6 text-center">
            首次使用？密码在服务器 <code className="text-blue-400">.env</code> 文件
            <br />
            <code className="text-blue-400">ADMIN_PASSWORD</code> 字段中设置
          </p>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900" />}>
      <LoginForm />
    </Suspense>
  );
}
