// OEM Partnership Inquiry Page
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle } from "lucide-react";

export default function OEMPartnership() {
  return (
    <Layout>
      <div className="bg-[#0F2B5B] text-white py-14">
        <div className="container">
          <Breadcrumb items={[{ label: "Contact", href: "/contact" }, { label: "OEM Partnership" }]} />
          <h1 className="text-4xl font-extrabold mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
            OEM Partnership <span className="text-amber-400">Inquiry</span>
          </h1>
          <p className="text-slate-300 max-w-xl">
            Tell us about your OEM requirements and we'll prepare a customized partnership proposal.
          </p>
        </div>
      </div>
      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>What to Expect</h2>
              <ul className="space-y-3">
                {[
                  "Response within 12 business hours",
                  "Customized OEM proposal and pricing",
                  "Sample arrangement within 3–5 days",
                  "Dedicated account manager assigned",
                  "NDA signed before design sharing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <h3 className="font-bold text-amber-900 mb-2 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>
                OEM Partnership Benefits
              </h3>
              <ul className="space-y-2 text-xs text-amber-800">
                {["Priority production scheduling", "Volume discount pricing", "Dedicated quality control", "Flexible payment terms"].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>OEM Partnership Inquiry</h2>
              <p className="text-sm text-slate-500 mb-6">Please provide as much detail as possible about your requirements.</p>
              <InquiryForm productName="OEM Partnership" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
