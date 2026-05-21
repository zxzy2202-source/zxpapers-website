"use client";

import { useState, useEffect, useRef } from "react";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface InquiryFormProps {
  productName?: string;
  compact?: boolean;
  initialMessage?: string;
  formId?: string;
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
export default function InquiryForm({ productName, compact, initialMessage, formId }: InquiryFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [highlighted, setHighlighted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [defaultCountry, setDefaultCountry] = useState("");

  useEffect(() => {
    // Detect country from cookie set by middleware
    const getCookie = (name: string) => {
      if (typeof document === "undefined") return null;
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };

    const countryCode = getCookie("NEXT_LOC_COUNTRY");
    if (countryCode) {
      // Basic mapping for common countries
      const mapping: Record<string, string> = {
        US: "United States", GB: "United Kingdom", CA: "Canada", AU: "Australia",
        DE: "Germany", FR: "France", IT: "Italy", ES: "Spain", NL: "Netherlands",
        AE: "United Arab Emirates", SA: "Saudi Arabia", TR: "Turkey",
        TH: "Thailand", ID: "Indonesia", VN: "Vietnam", PH: "Philippines",
        MY: "Malaysia", SG: "Singapore", IN: "India", PK: "Pakistan",
        NG: "Nigeria", KE: "Kenya", ZA: "South Africa", EG: "Egypt",
      };
      setDefaultCountry(mapping[countryCode] || countryCode);
    }
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
      <div className="flex flex-col items-center justify-center py-8 text-center border border-slate-200 rounded-lg bg-slate-50">
        <div className="w-14 h-14 bg-white border border-slate-200 rounded-md flex items-center justify-center mb-4">
          <CheckCircle className="w-7 h-7 text-amber-500" />
        </div>
        <h3 className="font-semibold text-slate-900 mb-1 text-lg">Inquiry Sent</h3>
        <p className="text-sm text-slate-600 mb-4">We&apos;ll respond within 12 hours.</p>
        <Button
          variant="link"
          onClick={() => setStatus("idle")}
          className="text-xs text-[#0F2B5B]"
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
      className={`space-y-3 transition-all duration-300 ${highlighted ? "ring-2 ring-[#0F2B5B] rounded-md p-3 bg-slate-50" : ""}`}
    >
      {!compact && (
        <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-900 mb-4">
          Get a Free Quote
        </h3>
      )}

      {status === "error" && (
        <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2.5 text-sm text-red-700">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>Something went wrong. Please try again or contact us directly at <a href="mailto:Sales@zxpapers.com" className="underline">Sales@zxpapers.com</a>.</span>
        </div>
      )}

      <div className={compact ? "space-y-2.5" : "grid grid-cols-1 sm:grid-cols-2 gap-3"}>
        <div>
          <Label htmlFor="inquiry-name" className="sr-only">Your Name</Label>
          <Input
            id="inquiry-name"
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            className={errors.name ? errorInputClass : ""}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="inquiry-email" className="sr-only">Email Address</Label>
          <Input
            id="inquiry-email"
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            className={errors.email ? errorInputClass : ""}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="inquiry-company" className="sr-only">Company Name</Label>
        <Input
          id="inquiry-company"
          type="text"
          name="company"
          placeholder="Company Name"
        />
      </div>

      <div>
        <Label htmlFor="inquiry-country" className="sr-only">Country / Region</Label>
        <Input
          id="inquiry-country"
          type="text"
          name="country"
          placeholder="Country / Region *"
          required
          defaultValue={defaultCountry}
          key={defaultCountry} // Force re-render when defaultCountry is set
          className={errors.country ? errorInputClass : ""}
        />
        {errors.country && <p className="text-xs text-red-500 mt-1">{errors.country}</p>}
      </div>

      <div>
        <Label htmlFor="inquiry-phone" className="sr-only">Phone / WhatsApp</Label>
        <Input
          id="inquiry-phone"
          type="tel"
          name="phone"
          placeholder="Phone / WhatsApp (optional)"
        />
      </div>

      <div>
        <Label htmlFor="inquiry-message" className="sr-only">Message</Label>
        <Textarea
          ref={messageRef}
          id="inquiry-message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder={`Message${productName ? ` about ${productName}` : ""} — quantity, size, customization...`}
          className={`resize-none ${errors.message ? errorInputClass : ""}`}
          defaultValue={initialMessage || ""}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#0F2B5B] hover:bg-[#12346d] disabled:bg-slate-300 text-white font-semibold text-sm py-3 h-auto rounded-md transition-colors duration-200"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Inquiry
          </>
        )}
      </Button>
      <p className="text-xs text-slate-500 text-center">Response within 12 hours · NDA available · No spam</p>
    </form>
  );
}
