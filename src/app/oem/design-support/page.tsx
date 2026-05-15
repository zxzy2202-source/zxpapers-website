import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { SITE } from "@/config/siteData";
import { Palette, FileImage, Layers, CheckCircle, ArrowRight, Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "OEM Design Support | Custom Artwork & Printing",
  description: "Professional design support for OEM thermal paper orders. Custom artwork, logo printing, color matching, and pre-press services.",
  alternates: {
    canonical: `${SITE.domain}/oem/design-support`,
  },
};

const services = [
  {
    icon: Palette,
    title: "Custom Artwork Design",
    desc: "Our in-house design team can create custom artwork for your thermal paper rolls and labels, including logos, patterns, and promotional content.",
  },
  {
    icon: FileImage,
    title: "Pre-Press File Review",
    desc: "We review your artwork files before production to ensure optimal print quality, correct color profiles, and proper bleed/safe zones.",
  },
  {
    icon: Printer,
    title: "Color Matching",
    desc: "Pantone color matching available for brand-consistent printing. We provide physical proofs before full production runs.",
  },
  {
    icon: Layers,
    title: "Multi-Layer Printing",
    desc: "Support for single-color to full-color printing on thermal paper. Flexographic printing with up to 4 colors.",
  },
];

const formats = [
  { name: "AI (Adobe Illustrator)", preferred: true },
  { name: "EPS (Vector)", preferred: true },
  { name: "PDF (High Resolution)", preferred: true },
  { name: "PNG (300 DPI minimum)", preferred: false },
  { name: "JPG (300 DPI minimum)", preferred: false },
];


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
      "name": "OEM Services",
      "item": "https://www.zhixinpaper.com/oem"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Design Support",
      "item": "https://www.zhixinpaper.com/oem/design-support"
    }
  ]
};
export default function DesignSupportPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="text-xs text-amber-400 font-semibold uppercase tracking-widest mb-3">
            <Link href="/oem" className="hover:text-amber-300 transition-colors">OEM Services</Link>
            {" "}&rsaquo;{" "}Design Support
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            OEM <span className="text-amber-400">Design Support</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Professional artwork and pre-press services to ensure your custom thermal paper looks exactly as intended — every print run.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Services */}
            <h2 className="section-title mb-8">Design Services We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {services.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* File formats */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-8">
              <h3 className="font-extrabold text-slate-900 text-lg mb-4">Accepted File Formats</h3>
              <div className="space-y-3">
                {formats.map(({ name, preferred }) => (
                  <div key={name} className="flex items-center gap-3">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 ${preferred ? "text-green-500" : "text-slate-400"}`} />
                    <span className="text-sm text-slate-700">{name}</span>
                    {preferred && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Preferred</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-4">
                All fonts must be outlined/embedded. Minimum resolution 300 DPI for raster images.
              </p>
            </div>

            {/* Process */}
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-6">Design-to-Production Process</h3>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Submit Your Artwork", desc: "Send your design files via email or our inquiry form." },
                  { step: "02", title: "Free Design Review", desc: "Our team reviews your files within 24 hours and provides feedback." },
                  { step: "03", title: "Digital Proof", desc: "We send a digital proof for your approval before production." },
                  { step: "04", title: "Physical Sample (Optional)", desc: "Request a physical print sample before full production run." },
                  { step: "05", title: "Production & Delivery", desc: "Approved designs go into production with your confirmed specifications." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#0F2B5B] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {step}
                    </div>
                    <div className="pt-1">
                      <div className="font-semibold text-slate-900 text-sm mb-1">{title}</div>
                      <div className="text-sm text-slate-600">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <InquiryForm productName="OEM Design Support" formId="design-support-form" />
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <h4 className="font-bold text-amber-900 mb-2 text-sm">Free Design Review</h4>
              <p className="text-sm text-amber-800">
                We offer free artwork review for all OEM orders. Send us your files and we&apos;ll check them within 24 hours.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5">
              <h4 className="font-bold text-slate-900 mb-3 text-sm">Related Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/oem/custom-printing" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" /> Custom Printing & Specs
                  </Link>
                </li>
                <li>
                  <Link href="/oem/packaging" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" /> Packaging & Private Label
                  </Link>
                </li>
                <li>
                  <Link href="/oem/ip-protection" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" /> IP Protection & NDA
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
