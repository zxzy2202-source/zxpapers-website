import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Printer, Package, Clock, ShieldCheck, Layers, Star } from "lucide-react";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "OEM Custom Printing | Thermal Rolls & Labels",
  description: "Full OEM custom printing service for thermal paper rolls and labels. Logo, brand colors, QR codes, Arabic/English bilingual, TRA/ZATCA compliance.",
  keywords: [
    "OEM thermal paper printing",
    "custom printed thermal rolls manufacturer",
    "private label thermal paper rolls",
    "thermal paper logo printing China factory",
    "branded thermal receipt paper OEM",
    "ZATCA compliant thermal paper Saudi Arabia",
    "TRA thermal paper Tanzania",
    "Arabic thermal paper printing",
    "flexographic thermal paper printing",
  ].join(", "),
  alternates: { canonical: `${SITE.domain}/oem/custom-printing` },
  openGraph: {
    title: "OEM Custom Printing | Thermal Rolls & Labels",
    description: "Full OEM custom printing service. Logo, brand colors, QR codes, TRA/ZATCA compliance. MOQ 1,000 rolls. Free design proof.",
    images: [{ url: `${SITE.domain}/og-default.png`, width: 1200, height: 630, alt: "ZhixinPaper OEM Custom Printing" }],
  },
};

const IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-custom-printing-LUkP5mysubyQvqY9CtfS3J.webp";

const printCapabilities = [
  { icon: "🏷️", title: "Logo & Brand Colors",       desc: "Full-color logo printing with Pantone / CMYK matching (±ΔE 2.0). Consistent brand identity on every receipt." },
  { icon: "📣", title: "Promotional Messages",       desc: "Coupons, discount codes, loyalty points, social media handles, website URLs — printed on every receipt." },
  { icon: "📱", title: "QR Codes & Barcodes",        desc: "Static or variable QR codes for loyalty programs, product authentication, digital receipts, or survey links." },
  { icon: "🌐", title: "Multilingual Printing",      desc: "Arabic + English bilingual layouts for Middle East markets. French, Swahili, Thai, Indonesian and more." },
  { icon: "📋", title: "Regulatory Compliance Text", desc: "TRA logo (Tanzania), ZATCA QR (Saudi Arabia), FIRS ETR (Nigeria), VAT registration numbers, legal disclaimers." },
  { icon: "🔒", title: "Security Features",          desc: "Watermarks, void patterns, sequential numbering, UV-reactive inks for anti-counterfeiting and secure documents." },
  { icon: "🖨️", title: "Back Side Printing",        desc: "Print on the reverse (non-thermal) side for maps, instructions, advertising, or terms without affecting thermal print quality." },
  { icon: "📦", title: "Custom Packaging",           desc: "Branded polybag, custom carton print, branded core labels — full private label packaging for your distribution brand." },
];

const printingSpecs: [string, string][] = [
  ["Print Method",          "Flexographic printing (up to 4 spot colors)"],
  ["Color Matching",        "Pantone / CMYK / RAL — ±ΔE 2.0 tolerance"],
  ["Registration Accuracy", "±0.5 mm"],
  ["Print Sides",           "Thermal side / Reverse side / Both sides"],
  ["Repeat Interval",       "Every receipt / Every N cm (custom)"],
  ["Variable Data",         "Static (standard) / Variable QR / Serial number (digital)"],
  ["Ink Type",              "Water-based food-safe / UV-cured"],
  ["Design File Format",    "AI / PDF / EPS / CDR (300 dpi minimum)"],
  ["Min. MOQ",              "1,000 rolls (5,000 for private label packaging)"],
  ["Sample Lead Time",      "5–7 business days"],
  ["Production Lead Time",  "10–20 business days"],
  ["Proof",                 "Free digital proof + physical sample before production"],
];

const complianceItems = [
  { region: "🇹🇿 Tanzania",     standard: "TRA (Tanzania Revenue Authority)",  detail: "Pre-printed TRA logo + TPIN number on every roll. Compliant with ETR receipt requirements." },
  { region: "🇸🇦 Saudi Arabia", standard: "ZATCA e-Invoicing",                 detail: "ZATCA QR code (Phase 2 compliant) printed on thermal rolls. Arabic + English bilingual layout." },
  { region: "🇳🇬 Nigeria",      standard: "FIRS ETR (Electronic Tax Receipt)",  detail: "FIRS ETR logo + TIN number pre-printed. Compatible with approved POS terminal brands." },
  { region: "🇦🇪 UAE / Egypt",  standard: "VAT Compliance",                    detail: "VAT TRN number and 'Tax Invoice' text pre-printed in Arabic + English." },
  { region: "🇰🇪 Kenya",        standard: "KRA TIMS",                           detail: "KRA TIMS-compliant receipt rolls with required header/footer text pre-printed." },
  { region: "🌏 Southeast Asia", standard: "Country-specific POS compliance",  detail: "PromptPay QR (Thailand), QRIS (Indonesia), BIR-compliant receipts (Philippines)." },
];

const orderSteps = [
  { step: "01", title: "Submit Requirements",  desc: "Send us your size, quantity, colors, and artwork. WhatsApp or inquiry form. Response within 12 hours." },
  { step: "02", title: "Free Digital Proof",   desc: "Design team prepares a digital proof within 24 hours. Pantone color confirmation included." },
  { step: "03", title: "Approve & Deposit",    desc: "Approve proof and pay 30% T/T deposit. Physical printed sample available on request (5–7 days)." },
  { step: "04", title: "Production",           desc: "Full production starts after proof approval. 10–20 business days for custom printed orders." },
  { step: "05", title: "QC & Pre-shipment",    desc: "Pre-shipment inspection report provided. Photos and video of production batch shared." },
  { step: "06", title: "CIF Delivery",         desc: "CIF delivery to Jebel Ali, Lagos, Mombasa, Bangkok, Jakarta and 80+ countries." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum order quantity for custom printed thermal paper rolls?",
      acceptedAnswer: { "@type": "Answer", text: "Our MOQ for custom printed thermal paper rolls is 1,000 rolls. For full private label packaging (custom carton + polybag printing), the MOQ is 5,000 rolls. Samples can be arranged at lower quantities." },
    },
    {
      "@type": "Question",
      name: "What file formats do you accept for custom printing artwork?",
      acceptedAnswer: { "@type": "Answer", text: "We accept AI (Adobe Illustrator), PDF, EPS, and CDR files at 300 dpi minimum. All fonts must be outlined/embedded. If you don't have print-ready artwork, our design team can create or adapt your logo for a small fee." },
    },
    {
      "@type": "Question",
      name: "Do you support TRA, ZATCA, and FIRS compliance printing?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We support pre-printed compliance text and logos for TRA (Tanzania Revenue Authority), ZATCA e-Invoicing (Saudi Arabia), FIRS ETR (Nigeria), KRA TIMS (Kenya), and VAT compliance for UAE and Egypt. Arabic + English bilingual layouts are also available." },
    },
    {
      "@type": "Question",
      name: "How long does it take to produce custom printed thermal rolls?",
      acceptedAnswer: { "@type": "Answer", text: "Production lead time is 10–20 business days after proof approval. Physical printed samples take 5–7 business days. We provide a free digital proof within 24 hours of receiving your artwork." },
    },
    {
      "@type": "Question",
      name: "Can you print Arabic and English bilingual layouts?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We specialize in Arabic + English bilingual thermal paper printing for Middle East markets. We also support French, Swahili, Thai, Indonesian, and other languages for regional markets." },
    },
    {
      "@type": "Question",
      name: "What payment terms are available for OEM custom printing orders?",
      acceptedAnswer: { "@type": "Answer", text: "We accept T/T (30% deposit, 70% before shipment) and L/C at sight. For long-term OEM partners, we can discuss flexible payment arrangements." },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "OEM Custom Printing on Thermal Paper Rolls",
  "provider": { "@type": "Organization", "name": "ZhixinPaper", "url": SITE.domain },
  "description": "Full OEM custom printing service for thermal paper rolls and labels. Logo, brand colors, QR codes, Arabic/English bilingual, TRA/ZATCA compliance. MOQ 1,000 rolls.",
  "areaServed": ["Africa", "Middle East", "Southeast Asia", "Worldwide"],
  "serviceType": "OEM Manufacturing",
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
      "name": "OEM Services",
      "item": "https://www.zhixinpaper.com/oem"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Custom Printing",
      "item": "https://www.zhixinpaper.com/oem/custom-printing"
    }
  ]
};
export default function CustomPrintingPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <div className="relative bg-[#0F2B5B] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${IMG})` }} />
        <div className="relative container">
          <div className="text-amber-400 text-sm font-semibold mb-3">
            <Link href="/oem" className="hover:underline">OEM Services</Link> / Custom Printing
          </div>
          <h1 className="font-sora text-4xl font-extrabold mb-4 leading-tight">
            OEM Custom Printing<br />on Thermal Paper Rolls &amp; Labels
          </h1>
          <p className="text-slate-300 max-w-2xl mb-6">Turn every receipt into a brand touchpoint. Full-color flexographic printing with Pantone matching, QR codes, multilingual layouts, and regulatory compliance printing for Africa, Middle East, and Southeast Asia.</p>
          <div className="flex flex-wrap gap-3">
            {["MOQ 1,000 Rolls", "Free Design Proof", "10–20 Day Lead Time", "TRA / ZATCA / FIRS Compliant", "Arabic Bilingual Printing"].map((tag) => (
              <span key={tag} className="text-xs bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-amber-600 text-white py-2.5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-medium">
            <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 fill-white text-white" /> Free Pantone Color Matching</span>
            <span className="flex items-center gap-1.5"><Printer className="w-3.5 h-3.5" /> Up to 4-Color Flexo Print</span>
            <span className="flex items-center gap-1.5"><Package className="w-3.5 h-3.5" /> Full Private Label Packaging</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> ISO 9001 Certified Factory</span>
          </div>
        </div>
      </div>

      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">

            {/* Print Capabilities */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Layers className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">What We Can Print</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {printCapabilities.map(({ icon, title, desc }) => (
                  <div key={title} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{icon}</span>
                      <span className="font-sora font-bold text-slate-900 text-sm">{title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Printing Specifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Printer className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Printing Specifications</h2>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <tbody>
                    {printingSpecs.map(([label, value], i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="px-5 py-3 font-medium text-slate-600 w-52 whitespace-nowrap">{label}</td>
                        <td className="px-5 py-3 text-slate-900 font-semibold">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Regional Compliance */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-5">Regional Regulatory Compliance Printing</h2>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">We support pre-printed compliance text and logos for tax receipt regulations across Africa, the Middle East, and Southeast Asia.</p>
              <div className="space-y-3">
                {complianceItems.map(({ region, standard, detail }) => (
                  <div key={region} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <span className="font-sora font-bold text-slate-900 text-sm">{region}</span>
                      <span className="text-xs bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-3 py-0.5 font-medium">{standard}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Process */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-5">How to Order Custom Printed Rolls</h2>
              <div className="relative">
                <div className="hidden sm:block absolute left-[28px] top-8 bottom-8 w-0.5 bg-amber-200" />
                <div className="space-y-4">
                  {orderSteps.map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4 items-start">
                      <div className="font-sora relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md">{step}</div>
                      <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                        <div className="font-sora font-bold text-slate-900 text-sm mb-1">{title}</div>
                        <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why ZhixinPaper */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Why Choose ZhixinPaper for OEM Printing?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "ISO 9001:2015 certified printing facility",
                  "Pantone color matching — ±ΔE 2.0 tolerance",
                  "Free digital proof within 24 hours",
                  "Physical printed sample before bulk production",
                  "BPA-free, food-safe water-based inks",
                  "TRA / ZATCA / FIRS compliance printing",
                  "Arabic, English, French multilingual layouts",
                  "Variable QR code / serial number printing",
                  "Full private label packaging (carton + polybag)",
                  "CIF delivery to 80+ countries",
                  "No setup fee for orders above 5,000 rolls",
                  "Dedicated account manager for OEM clients",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <Link href="/products/thermal-paper-rolls/custom-printed" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold"><ArrowRight className="w-4 h-4" />Custom Printed Rolls Product Page →</Link>
              <Link href="/oem" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold">All OEM Services →</Link>
              <Link href="/oem/packaging" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold">Custom Packaging →</Link>
              <Link href="/markets/africa" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold">Africa Market →</Link>
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-4">
              <div className="bg-white border-2 border-amber-500 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600 font-semibold">Online — Responding within 12h</span>
                </div>
                <h3 className="font-sora text-lg font-extrabold text-slate-900 mb-1">Get a Custom Print Quote</h3>
                <p className="text-sm text-slate-500 mb-5">Tell us your size, quantity, colors, and artwork. We will reply with pricing and a free design proof.</p>
                <InquiryForm productName="Custom Printing" compact />
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-sora font-bold text-slate-900 text-sm">Order at a Glance</h4>
                {[
                  { icon: Package,     label: "MOQ",          val: "1,000 rolls" },
                  { icon: Clock,       label: "Lead Time",    val: "10–20 days" },
                  { icon: Printer,     label: "Print Colors", val: "Up to 4 colors" },
                  { icon: ShieldCheck, label: "Payment",      val: "T/T · L/C" },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-500"><Icon className="w-4 h-4" />{label}</div>
                    <span className="font-semibold text-slate-900">{val}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-3">Certifications</h4>
                <div className="space-y-2">
                  {["ISO 9001:2015", "FSC Certified", "BPA-Free Inks", "RoHS / REACH", "FDA Compliant"].map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />{cert}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-3">Compliance Printing</h4>
                <div className="space-y-2">
                  {["TRA (Tanzania)", "ZATCA (Saudi Arabia)", "FIRS (Nigeria)", "KRA TIMS (Kenya)", "VAT (UAE / Egypt)", "Arabic bilingual"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
