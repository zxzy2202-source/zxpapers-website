"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { SITE } from "@/config/siteData";

const MAX_MESSAGE_LENGTH = 2000;

function buildWhatsAppTarget() {
  const fragment = window.location.hash.slice(1).replace(/^\?/, "");
  const message = new URLSearchParams(fragment)
    .get("text")
    ?.trim()
    .slice(0, MAX_MESSAGE_LENGTH);
  const target = new URL("https://api.whatsapp.com/send");

  target.searchParams.set("phone", SITE.whatsapp.replace(/\D/g, ""));
  if (message) target.searchParams.set("text", message);
  target.searchParams.set("type", "phone_number");
  target.searchParams.set("app_absent", "0");
  return target.toString();
}

export default function WhatsAppRedirect() {
  const [fallbackUrl, setFallbackUrl] = useState("");

  useEffect(() => {
    const target = buildWhatsAppTarget();
    setFallbackUrl(target);
    window.location.replace(target);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase text-emerald-700">WhatsApp</p>
        <h1 className="mt-3 font-sora text-2xl font-semibold text-slate-950">Opening your sales conversation</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Your product context is being added before WhatsApp opens.
        </p>
        {fallbackUrl && (
          <a
            href={fallbackUrl}
            rel="nofollow noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          >
            Open WhatsApp
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </main>
  );
}
