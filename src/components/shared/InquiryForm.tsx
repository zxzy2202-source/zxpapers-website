"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Send, CheckCircle, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE } from "@/config/siteData";
import { readInquiryAttribution } from "@/lib/inquiryAttribution";
import { trackConversionEvent } from "@/lib/analytics";

interface InquiryFormProps {
  productName?: string;
  compact?: boolean;
  wide?: boolean;
  initialMessage?: string;
  formId?: string;
  responseNote?: string;
  successMessage?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";
type ProductLine = "thermal-paper-rolls" | "thermal-labels" | "printing-packaging-labels" | "ncr-business-forms" | "other" | "not-sure" | "";

const compactFieldClass = "h-10 rounded-md";
const regularFieldClass = "h-11 rounded-md";
const compactTextareaClass = "min-h-[104px] rounded-md";
const regularTextareaClass = "min-h-[132px] rounded-md";
const compactSelectClass = "flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy";
const regularSelectClass = "flex h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy";

function inferProductLine(productName?: string): ProductLine {
  if (!productName) return "";
  if (/thermal paper|receipt paper|till roll|pos paper/i.test(productName)) return "thermal-paper-rolls";
  if (/ncr|carbonless|business form/i.test(productName)) return "ncr-business-forms";
  if (/thermal label|shipping label|barcode label|linerless/i.test(productName)) return "thermal-labels";
  if (/packaging label|product label|machine-ready roll label|filling line label|can label|bottle label|detergent/i.test(productName)) return "printing-packaging-labels";
  return "other";
}

async function submitInquiryToBackend(payload: {
  name: string;
  email: string;
  company?: string;
  country?: string;
  phone?: string;
  subject?: string;
  productLine?: string;
  purchaseTask?: string;
  estimatedQuantity?: string;
  targetTimeline?: string;
  rollSize?: string;
  printerModel?: string;
  paperRequirement?: string;
  formSize?: string;
  formParts?: string;
  formFinishing?: string;
  referenceAvailable?: string;
  message: string;
  source?: string;
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}): Promise<{ id: string }> {
  const res = await fetch("/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({} as { error?: string }));
    throw new Error(data.error ?? "Submission failed");
  }
  return res.json();
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function InquiryForm({
  productName,
  compact,
  wide = false,
  initialMessage,
  formId,
  responseNote = "We aim to reply within one business day after receiving sufficient inquiry details. NDA review is available on request. No spam.",
  successMessage = "We'll review your inquiry and confirm the next steps.",
}: InquiryFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [highlighted, setHighlighted] = useState(false);
  const [productLine, setProductLine] = useState<ProductLine>(() => inferProductLine(productName));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    // Detect country via /api/geo (does not set cookies, cache-friendly)
    // Cache result in sessionStorage to avoid redundant requests within the same tab.
    const CACHE_KEY = "zx_geo_country";
    const cached = typeof sessionStorage !== "undefined"
      ? sessionStorage.getItem(CACHE_KEY)
      : null;

    if (cached) {
      if (countryRef.current && !countryRef.current.value.trim()) {
        countryRef.current.value = cached;
      }
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
        if (countryRef.current && !countryRef.current.value.trim()) {
          countryRef.current.value = countryName;
        }
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
      trackConversionEvent("inquiry_validation_failed", {
        form_id: formId || "inquiry-form",
        invalid_field_count: Object.keys(validationErrors).length,
      });
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

      const source = typeof window !== "undefined" ? window.location.pathname : undefined;
      const result = await submitInquiryToBackend({
        name: (data.get("name") as string).trim(),
        email: (data.get("email") as string).trim(),
        company: ((data.get("company") as string) || "").trim() || undefined,
        country: ((data.get("country") as string) || "").trim() || undefined,
        phone: ((data.get("phone") as string) || "").trim() || undefined,
        subject,
        productLine: ((data.get("productLine") as string) || "").trim() || undefined,
        purchaseTask: ((data.get("purchaseTask") as string) || "").trim() || undefined,
        estimatedQuantity: ((data.get("estimatedQuantity") as string) || "").trim() || undefined,
        targetTimeline: ((data.get("targetTimeline") as string) || "").trim() || undefined,
        rollSize: ((data.get("rollSize") as string) || "").trim() || undefined,
        printerModel: ((data.get("printerModel") as string) || "").trim() || undefined,
        paperRequirement: ((data.get("paperRequirement") as string) || "").trim() || undefined,
        formSize: ((data.get("formSize") as string) || "").trim() || undefined,
        formParts: ((data.get("formParts") as string) || "").trim() || undefined,
        formFinishing: ((data.get("formFinishing") as string) || "").trim() || undefined,
        referenceAvailable: ((data.get("referenceAvailable") as string) || "").trim() || undefined,
        message: (data.get("message") as string).trim(),
        source,
        ...readInquiryAttribution(),
      });

      trackConversionEvent("inquiry_submit_success", {
        inquiry_id: result.id,
        form_id: formId || "inquiry-form",
        source,
      });

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("[InquiryForm] submission error:", err);
      trackConversionEvent("inquiry_submit_failed", {
        form_id: formId || "inquiry-form",
        source: typeof window !== "undefined" ? window.location.pathname : undefined,
      });
      setStatus("error");
    }
  };

  const handleFormFocus = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackConversionEvent("inquiry_form_started", {
      form_id: formId || "inquiry-form",
      product_context: productName ? "product" : "general",
    });
  };

  const errorInputClass = "border-red-400 focus-visible:ring-red-400 bg-red-50";
  const fieldClass = compact ? compactFieldClass : regularFieldClass;
  const textareaClass = compact ? compactTextareaClass : regularTextareaClass;
  const selectClass = compact ? compactSelectClass : regularSelectClass;
  const showPurchaseBrief = !compact;
  const showCompanyField = !compact;

  if (compact) {
    const quoteMessage = encodeURIComponent(
      productName
        ? `Hello, I need a quote for ${productName}.`
        : "Hello, I need a factory quote.",
    );
    return (
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3">
        <p className="text-xs leading-relaxed text-slate-500">
          Share product, size, quantity and destination.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/contact"
            className="inline-flex min-h-9 items-center gap-1.5 rounded-md bg-brand-navy px-3 text-xs font-semibold text-white transition-colors hover:bg-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
          >
            Request a quote <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <a
            href={`${SITE.whatsappUrl}?text=${quoteMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 items-center rounded-md border border-slate-300 px-3 text-xs font-semibold text-brand-navy transition-colors hover:border-brand-navy hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy"
          >
            WhatsApp
          </a>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-center justify-center py-6 text-center border border-slate-200 rounded-lg bg-slate-50">
        <div className="w-12 h-12 bg-white border border-slate-200 rounded-md flex items-center justify-center mb-3">
          <CheckCircle className="w-7 h-7 text-amber-500" aria-hidden="true" />
        </div>
        <h3 className="font-semibold text-slate-900 mb-1 text-base">Inquiry Sent</h3>
        <p className="text-sm text-slate-600 mb-4">{successMessage}</p>
        <Button
          type="button"
          variant="link"
          onClick={() => setStatus("idle")}
          className="text-[11px] text-brand-navy"
        >
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      id={formId}
      ref={formRef}
      onSubmit={handleSubmit}
      onFocusCapture={handleFormFocus}
      noValidate
      className={`scroll-mt-28 ${compact ? "space-y-2" : "space-y-2.5"} ${highlighted ? "ring-2 ring-brand-navy rounded-md p-3 bg-slate-50" : ""}`}
    >
      {!compact && (
        <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-900 mb-4">
          Get a Free Quote
        </h3>
      )}

      {status === "error" && (
        <div role="alert" className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-sm text-red-700">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>Something went wrong. Please try again or contact us directly at <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.</span>
        </div>
      )}

      <div className={compact && !wide ? "space-y-2.5" : "grid grid-cols-1 gap-3 sm:grid-cols-2"}>
        <div>
          <Label htmlFor="inquiry-name" className="block text-xs font-medium text-slate-700 mb-1.5">
            Your Name <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Input
            id="inquiry-name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your full name..."
            required
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "inquiry-name-error" : undefined}
            className={`${fieldClass} ${errors.name ? errorInputClass : ""}`}
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
            placeholder="you@company.com..."
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "inquiry-email-error" : undefined}
            className={`${fieldClass} ${errors.email ? errorInputClass : ""}`}
          />
          {errors.email && <p id="inquiry-email-error" role="alert" className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="inquiry-country" className="block text-xs font-medium text-slate-700 mb-1.5">
          Country / Region <span className="text-red-500" aria-hidden="true">*</span>
        </Label>
        <Input
          ref={countryRef}
          id="inquiry-country"
          type="text"
          name="country"
          autoComplete="country-name"
          placeholder="Country or region..."
          required
          aria-invalid={errors.country ? true : undefined}
          aria-describedby={errors.country ? "inquiry-country-error" : undefined}
          className={`${fieldClass} ${errors.country ? errorInputClass : ""}`}
        />
        {errors.country && <p id="inquiry-country-error" role="alert" className="text-xs text-red-600 mt-1">{errors.country}</p>}
      </div>

      {showPurchaseBrief ? (
        <fieldset className="space-y-2 border-t border-slate-200 pt-2.5">
          <legend className="text-xs font-medium text-slate-900">Purchase brief</legend>
          <div className={compact && !wide ? "space-y-2" : "grid grid-cols-1 gap-2 sm:grid-cols-2"}>
            <div>
              <Label htmlFor="inquiry-product-line" className="block text-[11px] font-medium text-slate-700 mb-1">Product Line</Label>
              <select
                id="inquiry-product-line"
                name="productLine"
                value={productLine}
                onChange={(event) => setProductLine(event.target.value as ProductLine)}
                className={selectClass}
              >
                <option value="">Select a product line</option>
                <option value="thermal-paper-rolls">Thermal Paper Rolls</option>
                <option value="thermal-labels">Thermal Labels</option>
                <option value="printing-packaging-labels">Printed &amp; Packaging Labels</option>
                <option value="ncr-business-forms">NCR &amp; Business Forms</option>
                <option value="other">Other label or paper product</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
            <div>
              <Label htmlFor="inquiry-purchase-task" className="block text-[11px] font-medium text-slate-700 mb-1">Purchase Task</Label>
              <select id="inquiry-purchase-task" name="purchaseTask" className={selectClass}>
                <option value="">Select the current task</option>
                <option value="new-sourcing">New sourcing project</option>
                <option value="replacement">Replace or compare a supplier</option>
                <option value="repeat-program">Plan a repeat supply program</option>
                <option value="sample-review">Sample or compatibility review</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
            <div>
              <Label htmlFor="inquiry-quantity" className="block text-[11px] font-medium text-slate-700 mb-1">Estimated Quantity</Label>
              <Input id="inquiry-quantity" name="estimatedQuantity" placeholder="Rolls, cartons, sets, or not sure" className={fieldClass} />
            </div>
            <div>
              <Label htmlFor="inquiry-timeline" className="block text-[11px] font-medium text-slate-700 mb-1">Target Timeline</Label>
              <Input id="inquiry-timeline" name="targetTimeline" placeholder="Required date or planning stage" className={fieldClass} />
            </div>
          </div>

          {productLine === "thermal-paper-rolls" && (
            <div className="grid grid-cols-1 gap-2 border-l-2 border-amber-400 pl-2.5 sm:grid-cols-2">
              <div>
                <Label htmlFor="inquiry-roll-size" className="block text-[11px] font-medium text-slate-700 mb-1">Roll Size / Geometry</Label>
                <Input id="inquiry-roll-size" name="rollSize" placeholder="Width × OD/length × core, or not sure" className={fieldClass} />
              </div>
              <div>
                <Label htmlFor="inquiry-printer-model" className="block text-[11px] font-medium text-slate-700 mb-1">Printer / Terminal Model</Label>
                <Input id="inquiry-printer-model" name="printerModel" placeholder="Model, current sample, or not sure" className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="inquiry-paper-requirement" className="block text-[11px] font-medium text-slate-700 mb-1">Paper, Print &amp; Packing Requirements</Label>
                <Input id="inquiry-paper-requirement" name="paperRequirement" placeholder="Grade, print, chemistry/document scope, packing, or not sure" className={fieldClass} />
              </div>
            </div>
          )}

          {productLine === "ncr-business-forms" && (
            <div className="grid grid-cols-1 gap-2 border-l-2 border-amber-400 pl-2.5 sm:grid-cols-2">
              <div>
                <Label htmlFor="inquiry-form-size" className="block text-[11px] font-medium text-slate-700 mb-1">Finished Form Size</Label>
                <Input id="inquiry-form-size" name="formSize" placeholder="Width × height, existing sample, or not sure" className={fieldClass} />
              </div>
              <div>
                <Label htmlFor="inquiry-form-parts" className="block text-[11px] font-medium text-slate-700 mb-1">Number of Parts</Label>
                <Input id="inquiry-form-parts" name="formParts" placeholder="2-part, 3-part, multi-part, or not sure" className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="inquiry-form-finishing" className="block text-[11px] font-medium text-slate-700 mb-1">Printing, Numbering &amp; Finishing</Label>
                <Input id="inquiry-form-finishing" name="formFinishing" placeholder="Colors, numbering, perforation, binding, sets, or not sure" className={fieldClass} />
              </div>
            </div>
          )}

          {productLine === "thermal-labels" && (
            <div className="grid grid-cols-1 gap-2 border-l-2 border-amber-400 pl-2.5 sm:grid-cols-2">
              <div>
                <Label htmlFor="inquiry-label-size" className="block text-xs font-medium text-slate-700 mb-1.5">Label Size / Format</Label>
                <Input id="inquiry-label-size" name="rollSize" placeholder="Width × length, roll or fanfold, or not sure" className={fieldClass} />
              </div>
              <div>
                <Label htmlFor="inquiry-label-printer" className="block text-xs font-medium text-slate-700 mb-1.5">Printer / Applicator Model</Label>
                <Input id="inquiry-label-printer" name="printerModel" placeholder="Model, sensing method, or not sure" className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="inquiry-label-requirement" className="block text-xs font-medium text-slate-700 mb-1.5">Facestock, Adhesive &amp; Packing</Label>
                <Input id="inquiry-label-requirement" name="paperRequirement" placeholder="Direct thermal, adhesive type, core, roll OD, carton, or not sure" className={fieldClass} />
              </div>
            </div>
          )}

          {productLine === "printing-packaging-labels" && (
            <div className="grid grid-cols-1 gap-2 border-l-2 border-amber-400 pl-2.5 sm:grid-cols-2">
              <div>
                <Label htmlFor="inquiry-packaging-size" className="block text-xs font-medium text-slate-700 mb-1.5">Label Size / Container Type</Label>
                <Input id="inquiry-packaging-size" name="rollSize" placeholder="Width × height, container shape, or not sure" className={fieldClass} />
              </div>
              <div>
                <Label htmlFor="inquiry-packaging-substrate" className="block text-xs font-medium text-slate-700 mb-1.5">Substrate &amp; Finish</Label>
                <Input id="inquiry-packaging-substrate" name="printerModel" placeholder="Paper, film, gloss, matte, or not sure" className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="inquiry-packaging-requirement" className="block text-xs font-medium text-slate-700 mb-1.5">Printing, Adhesive &amp; Applicator</Label>
                <Input id="inquiry-packaging-requirement" name="paperRequirement" placeholder="Colors, adhesive, machine applicator, packing, or not sure" className={fieldClass} />
              </div>
            </div>
          )}

          {(productLine === "thermal-paper-rolls" || productLine === "thermal-labels" || productLine === "printing-packaging-labels" || productLine === "ncr-business-forms") && (
            <div>
              <Label htmlFor="inquiry-reference" className="block text-xs font-medium text-slate-700 mb-1.5">Reference Material Available</Label>
              <select id="inquiry-reference" name="referenceAvailable" className={selectClass}>
                <option value="">Select one</option>
                <option value="sample">Existing sample available</option>
                <option value="drawing-artwork">Drawing or artwork available</option>
                <option value="equipment-details">Printer or equipment details available</option>
                <option value="none">No reference material yet</option>
                <option value="not-sure">Not sure</option>
              </select>
              <p className="mt-1 text-xs text-slate-500">You can describe the sample, drawing, artwork, or equipment in the message below. We will confirm the transfer method after review.</p>
            </div>
          )}
        </fieldset>
      ) : null}

      <div className="border-t border-slate-200 pt-2.5">
        <p className="text-sm font-medium text-brand-navy">WhatsApp contact <span className="font-normal text-slate-500">(recommended)</span></p>
        <p className="mt-1 text-xs text-slate-500">Add WhatsApp for faster follow-up. Company name is only needed on the longer form.</p>
        {showCompanyField ? (
          <div className={compact && !wide ? "mt-2 space-y-2" : "mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2"}>
            <div>
              <Label htmlFor="inquiry-company" className="block text-xs font-medium text-slate-700 mb-1.5">
                Company Name
              </Label>
              <Input
                id="inquiry-company"
                type="text"
                name="company"
                autoComplete="organization"
                placeholder="Name your company"
                className={fieldClass}
              />
            </div>
            <div>
              <Label htmlFor="inquiry-phone" className="block text-xs font-medium text-slate-700 mb-1.5">
                WhatsApp / Phone <span className="text-slate-500">(recommended)</span>
              </Label>
              <Input
                id="inquiry-phone"
                type="tel"
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                placeholder="WhatsApp number or phone"
                className={fieldClass}
              />
            </div>
          </div>
        ) : (
          <div className="mt-2">
            <Label htmlFor="inquiry-phone" className="block text-xs font-medium text-slate-700 mb-1.5">
              WhatsApp / Phone <span className="text-slate-500">(recommended)</span>
            </Label>
            <Input
              id="inquiry-phone"
              type="tel"
              name="phone"
              inputMode="tel"
              autoComplete="tel"
              placeholder="WhatsApp number or phone"
              className={fieldClass}
            />
          </div>
        )}
      </div>

      <div>
        <Label className="block text-[11px] font-medium text-slate-700 mb-1" htmlFor="inquiry-message">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </Label>
        <Textarea
          ref={messageRef}
          id="inquiry-message"
          name="message"
          autoComplete="off"
          rows={compact ? 2 : 4}
          placeholder={productName ? `Requirements for ${productName}` : "Requirements"}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "inquiry-message-error" : undefined}
          className={`${textareaClass} resize-y ${errors.message ? errorInputClass : ""}`}
          defaultValue={initialMessage || ""}
        />
        {errors.message && <p id="inquiry-message-error" role="alert" className="text-xs text-red-600 mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-brand-navy hover:bg-brand-navy-hover disabled:bg-slate-300 text-white font-semibold text-sm py-2 h-auto rounded-md transition-colors duration-200"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" aria-hidden="true" />
            Request My Quote
          </>
        )}
      </Button>
      <p className="text-[10px] text-slate-500 text-center">{responseNote}</p>

      {/* Honeypot — invisible to humans, catches bots that auto-fill all fields */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
        <label htmlFor="inquiry-website">Website</label>
        <input id="inquiry-website" type="text" name="website" autoComplete="off" tabIndex={-1} defaultValue="" />
      </div>
    </form>
  );
}
