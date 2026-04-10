import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, Mail, Phone, Clock } from "lucide-react";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "OEM Partnership Inquiry | Private Label",
  description: "Start your thermal paper OEM partnership. Tell us your requirements and we will respond within 12 hours with a detailed quote, sample timeline, and NDA.",
  alternates: { canonical: `${SITE.domain}/contact/oem-partnership` },
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.zhixinpaper.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://www.zhixinpaper.com/contact"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "OEM Partnership",
      "item": "https://www.zhixinpaper.com/contact/oem-partnership"
    }
  ]
};
export default function OEMPartnershipPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-[#0F2B5B] text-white py-14">
        <div className="container">
          <div className="flex items-center gap-2 mb-3">
            <Link href="/contact" className="text-amber-400 text-xs font-bold uppercase tracking-wider hover:underline">Contact</Link>
            <span className="text-slate-500">·</span>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">OEM Partnership</span>
          </div>
          <h1 className="font-sora text-4xl sm:text-5xl font-extrabold mb-4">
            Start Your<br /><span className="text-amber-400">OEM Partnership</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-lg">Tell us your requirements and we will respond within 12 hours with a detailed quote, sample timeline, and NDA for your review.</p>
        </div>
      </div>

      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-6">OEM Partnership Inquiry</h2>
              <InquiryForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-sora font-bold text-slate-900 mb-4">What Happens Next?</h3>
              <div className="space-y-3">
                {[
                  { step: "01", text: "We review your inquiry and sign an NDA within 2 hours" },
                  { step: "02", text: "Our OEM team sends a detailed quote within 12 hours" },
                  { step: "03", text: "We arrange a video call to discuss your requirements" },
                  { step: "04", text: "Sample production begins within 3–5 business days" },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className="font-sora w-7 h-7 bg-[#0F2B5B] text-white rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0">{step}</div>
                    <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="font-sora font-bold text-slate-900 mb-4">Contact Directly</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <a href="mailto:oem@zxpapers.com" className="hover:text-blue-600">oem@zxpapers.com</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>+86 755 1234 5678</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Mon–Fri 9:00–18:00 CST</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5">
              <h4 className="font-sora text-sm font-bold text-slate-900 mb-3">OEM Capabilities</h4>
              <ul className="space-y-2">
                {["MOQ from 1,000 rolls", "Custom sizes and coating grades", "Private label packaging", "Free design support", "NDA protection", "ISO 9001 certified production"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
