// Contact Us Page — Main inquiry entry point
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InquiryForm from "@/components/shared/InquiryForm";
import { Phone, Mail, MapPin, Clock, MessageSquare, Package } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-[#0F2B5B] text-white py-16">
        <div className="container">
          <Breadcrumb items={[{ label: "Contact Us" }]} />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            Get in <span className="text-amber-400">Touch</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Ready to discuss your thermal paper requirements? Our team responds within 12 hours.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-5" style={{ fontFamily: "Sora, sans-serif" }}>Contact Information</h2>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Phone", value: "+86 158 9176 6700", href: "tel:+8615891766700" },
                  { icon: MessageSquare, label: "WhatsApp", value: "+86 180 9211 7618", href: "https://wa.me/8618092117618" },
                  { icon: Mail, label: "Email", value: "Sales@zxpapers.com", href: "mailto:Sales@zxpapers.com" },
                  { icon: MapPin, label: "Address", value: "Building 15, Phase 1 Zone 2, Ronghao Industrial Park, Gaoling District, Xi'an, Shaanxi, China", href: null },
                  { icon: Clock, label: "Business Hours", value: "Mon–Fri 9:00–18:00 (GMT+8)", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-slate-800 hover:text-blue-600 transition-colors">{value}</a>
                      ) : (
                        <div className="text-sm font-medium text-slate-800">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>Quick Links</h3>
              <div className="space-y-2">
                <Link href="/contact/oem-partnership" className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  <Package className="w-4 h-4" />
                  OEM Partnership Inquiry
                </Link>
                <Link href="/faq" className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  Frequently Asked Questions
                </Link>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <span className="font-bold text-amber-900 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>Response Guarantee</span>
              </div>
              <p className="text-sm text-amber-800">
                We respond to all inquiries within <strong>12 business hours</strong>. For urgent requests, please call us directly.
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Send an Inquiry</h2>
              <p className="text-sm text-slate-500 mb-6">Fill in your requirements and we'll prepare a customized quote.</p>
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
