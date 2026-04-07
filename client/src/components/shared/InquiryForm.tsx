// ThermalRollPro Inquiry / Quote Form
// Used on product pages, size pages, and contact page
// Supports initialMessage prop for pre-filling from Lightbox application scenario CTA

import { useState, useEffect } from "react";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface InquiryFormProps {
  productName?: string;
  compact?: boolean;
  initialMessage?: string;
}

export default function InquiryForm({ productName, compact = false, initialMessage }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: productName || "",
    quantity: "",
    message: initialMessage || "",
  });

  // Update message when initialMessage changes (e.g. from Lightbox CTA)
  useEffect(() => {
    if (initialMessage) {
      setForm((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    toast.success("Inquiry sent! We'll respond within 12 hours.");
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <CheckCircle className="w-14 h-14 text-green-500 mb-4" />
        <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
          Inquiry Received!
        </h3>
        <p className="text-slate-600 max-w-sm">
          Thank you, <strong>{form.name}</strong>. Our sales team will contact you within <strong>12 hours</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!compact && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Smith"
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Your Company Ltd."
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      )}
      {compact && (
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@company.com"
          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
        />
      </div>
      {!compact && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone / WhatsApp</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 555 000 0000"
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Country</label>
            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="United States"
              className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Product Interest</label>
          <input
            name="product"
            value={form.product}
            onChange={handleChange}
            placeholder="e.g. 80mm x 80mm Thermal Rolls"
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
          <input
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="e.g. 10,000 rolls/month"
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Message / Requirements *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={compact ? 3 : 4}
          placeholder="Please describe your requirements, including size, quantity, packaging, and any special specifications..."
          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Inquiry
          </>
        )}
      </button>
      <p className="text-xs text-slate-400 text-center">
        We respond within <strong>12 hours</strong>. Your information is kept confidential.
      </p>
    </form>
  );
}
