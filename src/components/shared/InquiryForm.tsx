"use client";

import { useState, useEffect, useRef } from "react";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE } from "@/config/siteData";

interface InquiryFormProps {
  productName?: string;
  compact?: boolean;
  initialMessage?: string;
  formId?: string;
  responseNote?: string;
  successMessage?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

async function submitInquiryToBackend(payload: {
  name: string;
  email: string;
  company?: string;
  country?: string;
  phone?: string;
  subject?: string;
  message: string;
  source?: string;
}): Promise<void> {
  const res = await fetch("/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error ?? "Submission failed");
  }
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function InquiryForm({
  productName,
  compact,
  initialMessage,
  formId,
  responseNote = "Response within 12 hours. NDA available. No spam.",
  successMessage = "We'll respond within 12 hours.",
}: InquiryFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [highlighted, setHighlighted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [defaultCountry, setDefaultCountry] = useState("");

  useEffect(() => {
    // Detect country via /api/geo (does not set cookies, cache-friendly)
    // Cache result in sessionStorage to avoid redundant requests within the same tab.
    const CACHE_KEY = "zx_geo_country";
    const cached = typeof sessionStorage !== "undefined"
      ? sessionStorage.getItem(CACHE_KEY)
      : null;

    if (cached) {
      setDefaultCountry(cached);
      return;
    }

    fetch("/api/geo")
      .then((res) => res.ok ? res.json() : null)
      .then((data: { country?: string; city?: string } | null) => {
        if (!data?.country) return;
        // Basic mapping for common country codes
        const mapping: Record<string, string> = {
          US: "United States", GB: "United Kingdom", CA: "Canada", AU: "Australia",
          DE: "Germany", FR: "France", IT: "Italy", ES: "Spain", NL: "Netherlands",
          AE: "United Arab Emirates", SA: "Saudi Arabia", TR: "Turkey",
          TH: "Thailand", ID: "Indonesia", VN: "Vietnam", PH: "Philippines",
          MY: "Malaysia", SG: "Singapore", IN: "India", PK: "Pakistan",
          NG: "Nigeria", KE: "Kenya", ZA: "South Africa", EG: "Egypt",
        };
        const countryName = mapping[data.country] || data.country;
        setDefaultCountry(countryName);
        try { sessionStorage.setItem(CACHE_KEY, countryName); } catch { /* ignore */ }
      })
      .catch(() => { /* silently ignore GEO errors */ });
  }, []);

  useEffect(() => {
    if (initialMessage && messageRef.current) {
      messageRef.current.value = initialMessage;
    }
  }, [initialMessage]);

  // Expose scroll-to-form via custom event
  useEffect(() => {
    if (!formId) return;
    const handler = (e: CustomEvent) => {
      if (e.detail?.formId === formId) {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        if (e.detail?.message && messageRef.current) {
          messageRef.current.value = e.detail.message;
        }
        setHighlighted(true);
        setTimeout(() => setHighlighted(false), 2000);
      }
    };
    window.addEventListener("inquiryScroll" as any, handler as any);
    return () => window.removeEventListener("inquiryScroll" as any, handler as any);
  }, [formId]);

  const validate = (data: FormData): Record<string, string> => {
    const errs: Record<string, string> = {};
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const country = data.get("country") as string;
    const message = data.get("message") as string;

    if (!name || name.trim().length < 2) errs.name = "Please enter your full name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email address.";
    if (!country || country.trim().length < 2) errs.country = "Please enter your country or region.";
    if (!message || message.trim().length < 10) errs.message = "Please describe your requirements (at least 10 characters).";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      requestAnimationFrame(() => {
        form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
      return;
    }
    setErrors({});
    setStatus("submitting");

    try {
      const subject = productName
        ? `Inquiry about ${productName}`
        : (data.get("subject") as string) || "General Inquiry";

      await submitInquiryToBackend({
        name: (data.get("name") as string).trim(),
        email: (data.get("email") as string).trim(),
        company: ((data.get("company") as string) || "").trim() || undefined,
        country: ((data.get("country") as string) || "").trim() || undefined,
        phone: ((data.get("phone") as string) || "").trim() || undefined,
        subject,
        message: (data.get("message") as string).trim(),
        source: typeof window !== "undefined" ? window.location.pathname : undefined,
      });

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("[InquiryForm] submission error:", err);
      setStatus("error");
    }
  };

  const errorInputClass = "border-red-400 focus-visible:ring-red-400 bg-red-50";

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-center justify-center py-8 text-center border border-slate-200 rounded-lg bg-slate-50">
        <div className="w-14 h-14 bg-white border border-slate-200 rounded-md flex items-center justify-center mb-4">
          <CheckCircle className="w-7 h-7 text-amber-500" aria-hidden="true" />
        </div>
        <h3 className="font-semibold text-slate-900 mb-1 text-lg">Inquiry Sent</h3>
        <p className="text-sm text-slate-600 mb-4">{successMessage}</p>
        <Button
          type="button"
          variant="link"
          onClick={() => setStatus("idle")}
          className="text-xs text-brand-navy"
        >
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className={`space-y-3 ${highlighted ? "ring-2 ring-brand-navy rounded-md p-3 bg-slate-50" : ""}`}
    >
      {!compact && (
        <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-900 mb-4">
          Get a Free Quote
        </h3>
      )}

      {status === "error" && (
        <div role="alert" className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2.5 text-sm text-red-700">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>Something went wrong. Please try again or contact us directly at <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.</span>
        </div>
      )}

      <div className={compact ? "space-y-2.5" : "grid grid-cols-1 sm:grid-cols-2 gap-3"}>
        <div>
          <Label htmlFor="inquiry-name" className="block text-xs font-medium text-slate-700 mb-1.5">
            Your Name <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Input
            id="inquiry-name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your full name…"
            required
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "inquiry-name-error" : undefined}
            className={`h-11 ${errors.name ? errorInputClass : ""}`}
          />
          {errors.name && <p id="inquiry-name-error" role="alert" className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="inquiry-email" className="block text-xs font-medium text-slate-700 mb-1.5">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Input
            id="inquiry-email"
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            placeholder="you@company.com…"
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "inquiry-email-error" : undefined}
            className={`h-11 ${errors.email ? errorInputClass : ""}`}
          />
          {errors.email && <p id="inquiry-email-error" role="alert" className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="inquiry-company" className="block text-xs font-medium text-slate-700 mb-1.5">
          Company Name
        </Label>
        <Input
          id="inquiry-company"
          type="text"
          name="company"
          autoComplete="organization"
          placeholder="Your company…"
          className="h-11"
        />
      </div>

      <div>
        <Label htmlFor="inquiry-country" className="block text-xs font-medium text-slate-700 mb-1.5">
          Country / Region <span className="text-red-500" aria-hidden="true">*</span>
        </Label>
        <Input
          id="inquiry-country"
          type="text"
          name="country"
          autoComplete="country-name"
          placeholder="Country or region…"
          required
          defaultValue={defaultCountry}
          key={defaultCountry} // Force re-render when defaultCountry is set
          aria-invalid={errors.country ? true : undefined}
          aria-describedby={errors.country ? "inquiry-country-error" : undefined}
          className={`h-11 ${errors.country ? errorInputClass : ""}`}
        />
        {errors.country && <p id="inquiry-country-error" role="alert" className="text-xs text-red-600 mt-1">{errors.country}</p>}
      </div>

      <div>
        <Label htmlFor="inquiry-phone" className="block text-xs font-medium text-slate-700 mb-1.5">
          Phone / WhatsApp <span className="text-slate-500 font-normal">(optional)</span>
        </Label>
        <Input
          id="inquiry-phone"
          type="tel"
          name="phone"
          inputMode="tel"
          autoComplete="tel"
          placeholder="Phone / WhatsApp…"
          className="h-11"
        />
      </div>

      <div>
        <Label htmlFor="inquiry-message" className="block text-xs font-medium text-slate-700 mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </Label>
        <Textarea
          ref={messageRef}
          id="inquiry-message"
          name="message"
          autoComplete="off"
          rows={compact ? 7 : 5}
          placeholder={`Message${productName ? ` about ${productName}` : ""}: quantity, size, customization…`}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "inquiry-message-error" : undefined}
          className={`min-h-40 resize-y ${errors.message ? errorInputClass : ""}`}
          defaultValue={initialMessage || ""}
        />
        {errors.message && <p id="inquiry-message-error" role="alert" className="text-xs text-red-600 mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-brand-navy hover:bg-brand-navy-hover disabled:bg-slate-300 text-white font-semibold text-sm py-3 h-auto rounded-md transition-colors duration-200"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" aria-hidden="true" />
            Send Inquiry
          </>
        )}
      </Button>
      <p className="text-xs text-slate-500 text-center">{responseNote}</p>
    </form>
  );
}
