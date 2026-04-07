// OEM Sub-pages — all exported from one file for convenience
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InquiryForm from "@/components/shared/InquiryForm";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Shield, Lock, Award } from "lucide-react";

// Unique scene images per OEM sub-page
const IMG_CUSTOM_PRINTING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-custom-printing-LUkP5mysubyQvqY9CtfS3J.webp";
const IMG_PACKAGING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-packaging-hhtzW7wquosmF8ub6HjVJV.webp";
const IMG_DESIGN_SUPPORT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-design-support-3ErwNj8AAPNCZznzshZHYk.webp";
const IMG_QA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-quality-assurance-Pwu2McsmguyFm5utPMJ5EB.webp";
const IMG_IP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-ip-protection-Uwn4kemj8yUAfAExTZNJkb.webp";
const IMG_CASES = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-case-studies-9rH8TwtueWnEYR6AtotPsw.webp";

// ── Custom Printing ──────────────────────────────────────────
export function CustomPrinting() {
  return (
    <Layout>
      <div className="relative bg-[#0F2B5B] text-white py-14 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMG_CUSTOM_PRINTING})` }} />
        <div className="relative container">
          <Breadcrumb items={[{ label: "OEM", href: "/oem" }, { label: "Custom Printing" }]} />
          <h1 className="text-4xl font-extrabold mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Custom Printing & Specifications</h1>
          <p className="text-slate-300 max-w-xl">Print your brand on every roll and label. Full-color flexographic and digital printing available.</p>
        </div>
      </div>
      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>What We Can Print</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Company logo and brand colors", "Promotional messages and offers", "Website URL and QR codes", "Social media handles", "Legal disclaimers", "Custom background patterns", "Variable data printing", "Sequential numbering"].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Printing Specifications</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Print Method", "Flexographic / Digital"],
                    ["Colors", "1–4 spot colors"],
                    ["Registration Accuracy", "±0.5mm"],
                    ["Min. MOQ (Custom Print)", "5,000 rolls / 10,000 labels"],
                    ["Sample Lead Time", "5–7 days"],
                    ["Production Lead Time", "10–20 days"],
                  ].map(([label, value], i) => (
                    <tr key={label} className={i % 2 === 0 ? "bg-white" : ""}>
                      <td className="px-4 py-2.5 font-medium text-slate-600 w-44">{label}</td>
                      <td className="px-4 py-2.5 text-slate-900 font-semibold">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm"
              style={{ fontFamily: "Sora, sans-serif" }}>
              Request Custom Print Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Get a Quote</h3>
              <p className="text-sm text-slate-500 mb-5">Response within 12 hours</p>
              <InquiryForm productName="Custom Printing" compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// ── Packaging & Private Label ──────────────────────────────
export function Packaging() {
  return (
    <Layout>
      <div className="relative bg-[#0F2B5B] text-white py-14 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMG_PACKAGING})` }} />
        <div className="relative container">
          <Breadcrumb items={[{ label: "OEM", href: "/oem" }, { label: "Packaging & Private Label" }]} />
          <h1 className="text-4xl font-extrabold mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Packaging & Private Label</h1>
          <p className="text-slate-300 max-w-xl">Complete private label solutions — from custom box design to branded packaging.</p>
        </div>
      </div>
      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-slate-600 leading-relaxed">
              Build your own brand with our private label packaging service. We design and produce custom boxes, sleeves, and labels with your brand identity. Perfect for distributors who want to sell under their own brand.
            </p>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Packaging Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Individual roll shrink wrap with custom label", "Box packaging (10/50/100 rolls per box)", "Display box for retail shelf placement", "Custom sleeve packaging", "Bulk poly bag packaging", "Eco-friendly kraft paper packaging"].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Get a Quote</h3>
              <p className="text-sm text-slate-500 mb-5">Response within 12 hours</p>
              <InquiryForm productName="Packaging & Private Label" compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// ── Design Support ─────────────────────────────────────────
export function DesignSupport() {
  return (
    <Layout>
      <div className="relative bg-[#0F2B5B] text-white py-14 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMG_DESIGN_SUPPORT})` }} />
        <div className="relative container">
          <Breadcrumb items={[{ label: "OEM", href: "/oem" }, { label: "Design Support" }]} />
          <h1 className="text-4xl font-extrabold mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Design Support</h1>
          <p className="text-slate-300 max-w-xl">Our in-house design team helps create artwork, packaging layouts, and brand guidelines.</p>
        </div>
      </div>
      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-slate-600 leading-relaxed">
              Don't have a design team? No problem. Our experienced graphic designers will work with you to create professional artwork for your thermal paper products and packaging.
            </p>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Design Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Logo design and brand identity", "Packaging layout and artwork", "Label design for rolls and labels", "Color matching and Pantone conversion", "Print-ready file preparation", "3D packaging mockups"].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Get Design Support</h3>
              <p className="text-sm text-slate-500 mb-5">Response within 12 hours</p>
              <InquiryForm productName="Design Support" compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// ── Quality Assurance ──────────────────────────────────────
export function QualityAssurance() {
  return (
    <Layout>
      <div className="relative bg-[#0F2B5B] text-white py-14 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMG_QA})` }} />
        <div className="relative container">
          <Breadcrumb items={[{ label: "OEM", href: "/oem" }, { label: "Quality Assurance" }]} />
          <h1 className="text-4xl font-extrabold mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Quality Assurance & Traceability</h1>
          <p className="text-slate-300 max-w-xl">ISO 9001 certified quality management with full batch traceability for every order.</p>
        </div>
      </div>
      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Quality Control Process</h2>
              <div className="space-y-3">
                {[
                  { step: "01", title: "Incoming Material Inspection", desc: "All raw materials tested before production begins." },
                  { step: "02", title: "In-Process Quality Checks", desc: "Continuous monitoring during coating and slitting." },
                  { step: "03", title: "Finished Product Inspection", desc: "100% visual inspection and sampling tests." },
                  { step: "04", title: "Pre-Shipment Sampling", desc: "Final batch sampling before shipment approval." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-[#0F2B5B] text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ fontFamily: "Sora, sans-serif" }}>{step}</div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{title}</div>
                      <div className="text-xs text-slate-600">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 p-5 bg-green-50 border border-green-200 rounded-2xl">
              <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-green-900 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>ISO 9001:2015 Certified</div>
                <div className="text-xs text-green-700">Certified quality management system since 2008</div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Request Quality Documents</h3>
            <p className="text-sm text-slate-500 mb-5">Get our ISO certificate, test reports, and quality documentation.</p>
            <InquiryForm productName="Quality Documents Request" compact />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// ── IP Protection ──────────────────────────────────────────
export function IPProtection() {
  return (
    <Layout>
      <div className="relative bg-[#0F2B5B] text-white py-14 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMG_IP})` }} />
        <div className="relative container">
          <Breadcrumb items={[{ label: "OEM", href: "/oem" }, { label: "IP Protection" }]} />
          <h1 className="text-4xl font-extrabold mb-3" style={{ fontFamily: "Sora, sans-serif" }}>IP Protection & NDA</h1>
          <p className="text-slate-300 max-w-xl">Your brand and product designs are protected with strict NDA and IP protocols.</p>
        </div>
      </div>
      <div className="container py-14 max-w-3xl">
        <div className="space-y-8">
          <div className="flex items-start gap-4 p-6 bg-blue-50 border border-blue-100 rounded-2xl">
            <Lock className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-bold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Our IP Protection Commitment</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We understand that your brand designs and product specifications are valuable intellectual property. We have strict protocols in place to ensure your information is never shared with competitors or third parties.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Protection Measures</h2>
            <div className="space-y-3">
              {[
                "NDA signed before any design files are shared",
                "Dedicated production lines for exclusive OEM clients",
                "Design files stored in encrypted, access-controlled systems",
                "Staff NDAs for all employees involved in OEM production",
                "No sharing of client designs with other customers",
                "Secure destruction of design files upon contract termination",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <Shield className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm"
            style={{ fontFamily: "Sora, sans-serif" }}>
            Request NDA Agreement <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

// ── Case Studies ───────────────────────────────────────────
export function CaseStudies() {
  const cases = [
    {
      client: "European Retail Chain",
      country: "Germany",
      product: "Custom printed 80x80 thermal rolls",
      challenge: "Needed branded receipt paper for 500+ store locations with consistent quality.",
      solution: "Developed custom printing with brand logo and promotional messages. Established monthly supply contract.",
      result: "Reduced receipt paper cost by 18% while improving brand visibility.",
    },
    {
      client: "US E-commerce Distributor",
      country: "United States",
      product: `4" x 6" thermal shipping labels`,
      challenge: "Required private label shipping labels compatible with all major carriers.",
      solution: "Produced private label thermal labels with custom packaging and branding.",
      result: "Successfully launched own-brand label product line, generating 30% margin improvement.",
    },
    {
      client: "Southeast Asia Distributor",
      country: "Singapore",
      product: "57mm x 50mm thermal rolls",
      challenge: "Needed reliable supply of BPA-free rolls for food service clients.",
      solution: "Established dedicated BPA-free production line with monthly supply agreement.",
      result: "Secured long-term contracts with 3 major food service chains.",
    },
  ];

  return (
    <Layout>
      <div className="relative bg-[#0F2B5B] text-white py-14 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMG_CASES})` }} />
        <div className="relative container">
          <Breadcrumb items={[{ label: "OEM", href: "/oem" }, { label: "Case Studies" }]} />
          <h1 className="text-4xl font-extrabold mb-3" style={{ fontFamily: "Sora, sans-serif" }}>OEM Case Studies</h1>
          <p className="text-slate-300 max-w-xl">See how global distributors and retailers have grown with our OEM solutions.</p>
        </div>
      </div>
      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {cases.map((c) => (
            <div key={c.client} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">{c.country.slice(0, 2).toUpperCase()}</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{c.client}</div>
                  <div className="text-xs text-slate-400">{c.country}</div>
                </div>
              </div>
              <div className="text-xs font-medium text-blue-600 mb-3">{c.product}</div>
              <div className="space-y-3 text-xs text-slate-600">
                <div><span className="font-semibold text-slate-700">Challenge:</span> {c.challenge}</div>
                <div><span className="font-semibold text-slate-700">Solution:</span> {c.solution}</div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-green-700">{c.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/contact/oem-partnership" className="inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ fontFamily: "Sora, sans-serif" }}>
            Start Your OEM Partnership
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
