import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Package, Globe, ShieldCheck, Tag, BarChart3, Printer, ChevronRight, Clock } from "lucide-react";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Application Cases | Retail & Logistics",
  description: "In-depth thermal paper application guide for 6 major industries: retail POS, food service, e-commerce logistics, healthcare, parking & transportation, and.",
  keywords: "thermal paper applications, POS receipt paper, shipping label thermal paper, healthcare thermal labels, restaurant kitchen printer paper",
  alternates: { canonical: `${SITE.domain}/resources/application-cases` },
};

const appCases = [
  {
    industry: "Retail & POS",
    icon: Package,
    color: "blue",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    desc: "From supermarkets to boutique stores, thermal paper receipts are the backbone of retail POS systems worldwide. The global retail POS printer market processes an estimated 300 billion receipts annually, with thermal printing accounting for over 95% of all receipt output.",
    detail: "Retail environments place demanding requirements on thermal paper. High-volume checkout lanes print continuously for 8–12 hours per day, requiring paper with consistent coating density to maintain print quality across the full roll. Paper that prints darkly at the start of a roll but fades toward the end — a sign of inconsistent coating application — is a common complaint in high-volume retail. The paper must also be compatible with the wide range of printer models deployed across a retail estate, from legacy Epson TM-T88III units installed 15 years ago to the latest high-speed models. For EU retailers, BPA-free paper is now mandatory under Regulation (EU) 2016/2235, which banned BPA in thermal paper from January 2020. Retailers sourcing from non-EU suppliers should verify BPA-free compliance with third-party lab test reports, not just supplier declarations.",
    products: ["80mm x 80mm Rolls", "57mm x 50mm Rolls", "3⅛\" x 230′ (US market)"],
    keyReq: "High print speed compatibility (150–250mm/s), consistent roll diameter, BPA-free for EU markets, optical density ≥1.0",
    clients: "Supermarkets, convenience stores, fashion retail, electronics chains",
    volumes: "50,000–500,000 rolls/month",
  },
  {
    industry: "Food Service & Restaurants",
    icon: Printer,
    color: "amber",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    desc: "Kitchen order printers and customer receipt printers in restaurants require paper that performs reliably in high-heat, high-humidity environments — conditions that are uniquely challenging for thermal paper chemistry.",
    detail: "The food service environment is one of the most demanding for thermal paper. Kitchen printers operate near cooking equipment where ambient temperatures can reach 40–50°C, and steam from commercial kitchens creates humidity levels of 80–90%. Standard thermal paper begins to fog (develop a gray background) at sustained temperatures above 60°C, making heat-resistant formulations essential. For customer-facing receipt printers, BPA-free paper is increasingly required by major restaurant chains as part of their corporate sustainability commitments. The paper must also be compatible with the wide range of kitchen printer models used in the industry, including Epson TM-U220 (impact printer, not thermal) and Epson TM-T88 (thermal). Distributors supplying restaurant chains should verify compatibility with both printer types, as many chains use a mix. Food delivery platforms have also created a new demand segment: thermal paper for order confirmation receipts printed at restaurant partner locations, which requires reliable performance in the full range of restaurant environments.",
    products: ["80mm x 80mm Rolls", "80mm x 70mm Rolls", "57mm x 50mm Rolls"],
    keyReq: "Heat-resistant coating (stable to 70°C), moisture resistance, fast-activation for high-speed kitchen printers, BPA-free",
    clients: "Restaurant chains, fast food, cafes, food delivery platforms",
    volumes: "10,000–200,000 rolls/month",
  },
  {
    industry: "Logistics & E-Commerce Shipping Labels",
    icon: Globe,
    color: "green",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    desc: "Shipping labels must produce scannable barcodes that survive the entire logistics journey — from warehouse to doorstep — through temperature extremes, moisture, and physical abrasion.",
    detail: "The e-commerce logistics boom has made thermal shipping labels one of the fastest-growing segments in the thermal paper market. Global parcel volumes exceeded 160 billion in 2022 and are projected to reach 260 billion by 2027, with each parcel requiring at least one thermal label. The barcode scanning requirements for logistics labels are more stringent than for POS receipts: labels must scan reliably at conveyor belt speeds of 2–3 meters per second, often under poor lighting conditions, and must remain scannable after exposure to rain, condensation, and physical handling. This requires optical density ≥1.2 (versus ≥1.0 for standard receipts) and a coating formulation that resists smearing when wet. The adhesive specification is equally critical: labels must adhere firmly to corrugated cardboard, polybag mailers, and rigid plastic containers — three surfaces with very different adhesive requirements. For cold-chain logistics (refrigerated or frozen shipments), freezer-grade adhesive is essential. Standard adhesive fails at temperatures below 5°C, causing labels to peel off in transit.",
    products: ["4\" x 6\" Shipping Labels", "100mm x 150mm Labels", "2\" x 4\" Address Labels"],
    keyReq: "High OD (≥1.2) for barcode scanning, strong adhesive (corrugated + polybag compatible), compatible with Zebra/Dymo/Rollo printers",
    clients: "E-commerce fulfillment centers, 3PL warehouses, courier companies, cross-border logistics",
    volumes: "100,000–2,000,000 labels/month",
  },
  {
    industry: "Healthcare & Pharmacy",
    icon: ShieldCheck,
    color: "teal",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    desc: "Patient wristbands, prescription labels, and specimen tracking labels require phenol-free paper with long image life, chemical resistance, and compliance with healthcare regulatory standards.",
    detail: "Healthcare is the most specification-sensitive application for thermal labels. Patient wristband labels must remain readable for the duration of a hospital stay — potentially 30+ days — while exposed to water, disinfectants, and physical abrasion. Prescription labels must maintain barcode scannability for the full shelf life of the medication, which can be 2–5 years. Specimen tracking labels in diagnostic laboratories must withstand exposure to chemical reagents, centrifuge forces, and temperature cycling between -80°C (frozen storage) and room temperature. These requirements drive demand for synthetic face stock (polyester or polypropylene) rather than paper, and for phenol-free coating chemistry to comply with hospital procurement policies that restrict bisphenol compounds in patient-contact materials. The FDA's 21 CFR 176.170 regulation governs paper materials in food contact applications and is often cited by healthcare procurement as a baseline compliance requirement. For EU healthcare buyers, REACH compliance documentation is required. We provide full compliance documentation packages for healthcare customers, including material safety data sheets, migration test reports, and certificate of conformance.",
    products: ["2\" x 1\" Barcode Labels", "3\" x 1\" Specimen Labels", "1\" x 1\" Mini Labels"],
    keyReq: "Phenol-free coating, image stability ≥10 years, chemical resistance, FDA 21 CFR 176.170 and REACH compliant",
    clients: "Hospitals, pharmacies, diagnostic labs, medical device manufacturers",
    volumes: "5,000–100,000 labels/month",
  },
  {
    industry: "Parking & Transportation",
    icon: Tag,
    color: "purple",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80",
    desc: "Parking tickets, transit passes, and toll receipts need compact rolls with reliable performance in outdoor kiosk environments — including extreme temperatures, UV exposure, and moisture.",
    detail: "Parking and transportation kiosks operate in outdoor environments that expose thermal paper to the full range of weather conditions. In northern climates, paper must perform at temperatures as low as -20°C; in Middle Eastern markets, kiosk temperatures can reach 60°C in direct summer sunlight. UV exposure from sunlight degrades standard thermal coatings within hours, making UV-resistant formulations essential for outdoor applications. The compact core size (12mm) used in most parking kiosk printers is a specific requirement that many standard paper suppliers cannot accommodate — most commercial thermal paper is produced on 25mm cores. We maintain dedicated production lines for 12mm core paper to serve this market. Transit applications (bus and rail ticket printers) have additional requirements: the paper must be compatible with magnetic stripe encoding for some legacy ticketing systems, and the printed barcode must remain scannable through the plastic window of a ticket validator. This requires a specific combination of optical density, surface smoothness, and dimensional stability.",
    products: ["57mm x 40mm Rolls (12mm core)", "57mm x 50mm Rolls (12mm core)", "80mm x 80mm Rolls"],
    keyReq: "Compact core (12mm), UV-resistant coating, wide temperature range (-20°C to 70°C), outdoor kiosk compatible",
    clients: "Parking operators, transit authorities, toll management companies, airport ground transport",
    volumes: "20,000–300,000 rolls/month",
  },
  {
    industry: "Banking & Financial Services",
    icon: BarChart3,
    color: "indigo",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80",
    desc: "ATM receipts, credit card terminals, and bank teller printers require high-quality paper with long archival life — financial records must remain legible for regulatory compliance periods of 5–10 years.",
    detail: "Banking and financial services applications have the most stringent archival requirements of any thermal paper use case. ATM receipts and credit card transaction records are subject to regulatory retention requirements that vary by jurisdiction — typically 5–7 years in most markets, up to 10 years for certain transaction types. This requires premium-grade paper with image life specifications that match or exceed the retention period. The paper must also be compatible with the specific printer models used in banking infrastructure: Verifone and Ingenico payment terminals use US-standard paper sizes (2¼\" × 50′), while bank teller printers typically use 80mm rolls. ATM receipt printers are a specialized category with very specific requirements for paper stiffness (the paper must feed reliably through the ATM's paper path without jamming) and print density (ATM receipts are often read in poor lighting conditions). For banking customers, we provide premium-grade paper with certified image life of 10+ years, tested to ANSI/AIIM MS23 standards for document preservation. We also provide batch-level traceability documentation to support compliance audits.",
    products: ["2¼\" × 50′ Rolls (US terminals)", "3⅛\" × 230′ Rolls (US POS)", "80mm × 80mm Rolls (international)"],
    keyReq: "Premium image stability (10+ years), ANSI/AIIM MS23 compliance, compatibility with Verifone/Ingenico/NCR terminals",
    clients: "Banks, credit unions, payment terminal distributors, ATM operators, financial services firms",
    volumes: "10,000–150,000 rolls/month",
  },
];

const appColorMap: Record<string, { bg: string; text: string; badge: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-700",   badge: "bg-blue-100 text-blue-700" },
  amber:  { bg: "bg-amber-50",  text: "text-amber-700",  badge: "bg-amber-100 text-amber-700" },
  green:  { bg: "bg-green-50",  text: "text-green-700",  badge: "bg-green-100 text-green-700" },
  teal:   { bg: "bg-teal-50",   text: "text-teal-700",   badge: "bg-teal-100 text-teal-700" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", badge: "bg-purple-100 text-purple-700" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-700", badge: "bg-indigo-100 text-indigo-700" },
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
      "name": "Resources",
      "item": "https://www.zhixinpaper.com/resources"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Application Cases",
      "item": "https://www.zhixinpaper.com/resources/application-cases"
    }
  ]
};
export default function ApplicationCasesPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-[#0F2B5B] text-white py-14">
        <div className="container">
          <div className="flex items-center gap-2 mb-3">
            <Link href="/resources" className="text-amber-400 text-xs font-bold uppercase tracking-wider hover:underline">Resources</Link>
            <span className="text-slate-500">·</span>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Application Cases</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> 16 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
            Thermal Paper Applications<br /><span className="text-amber-400">Across Industries</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-base">From retail POS to hospital wristbands — an in-depth guide to how thermal paper products serve 6 major industries, with specific requirements, product recommendations, volume benchmarks, and the technical details that matter for procurement decisions.</p>
        </div>
      </div>

      <div className="container py-14">
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <p className="text-slate-600 leading-relaxed mb-4">Thermal printing technology serves a remarkably diverse range of industries, each with distinct performance requirements that go far beyond the basic specification of paper width and roll diameter. A shipping label that must survive a cross-country logistics journey has fundamentally different requirements from a restaurant receipt printed in a high-humidity kitchen, which in turn differs from a patient wristband that must remain readable through 30 days of hospital care.</p>
          <p className="text-slate-600 leading-relaxed">This guide examines the six largest application segments for thermal paper, with detailed analysis of the specific requirements, common failure modes, and product selection criteria for each. Whether you are a distributor building a product range for a specific vertical, or a buyer evaluating suppliers for a new application, this guide provides the technical foundation for informed sourcing decisions.</p>
        </div>

        <div className="space-y-16">
          {appCases.map(({ industry, icon: Icon, color, image, desc, detail, products, keyReq, clients, volumes }) => {
            const c = appColorMap[color];
            return (
              <article key={industry} className="border-b border-slate-100 pb-16 last:border-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start mb-6">
                  <div className="lg:col-span-2">
                    <img src={image} alt={industry} className="w-full h-56 object-cover rounded-2xl shadow-md" />
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${c.text}`} />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>{industry}</h2>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Recommended Products</div>
                        <ul className="space-y-1">
                          {products.map((p) => (
                            <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                              <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Typical Clients</div>
                        <p className="text-sm text-slate-700">{clients}</p>
                        <div className="mt-2 text-xs text-slate-500">Monthly volume: <strong className="text-slate-700">{volumes}</strong></div>
                      </div>
                    </div>
                    <div className={`${c.bg} rounded-xl px-4 py-3 text-sm ${c.text}`}>
                      <strong>Key Requirements:</strong> {keyReq}
                    </div>
                  </div>
                </div>
                {/* Deep article content */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>In-Depth: Sourcing for {industry}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{detail}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Procurement Framework */}
        <div className="max-w-3xl mt-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>A Universal Procurement Framework for Thermal Paper</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Regardless of the specific industry, a rigorous procurement process for thermal paper should follow the same fundamental steps. The most common and costly mistakes in thermal paper sourcing — ordering the wrong grade, discovering incompatibility after a large purchase, or receiving inconsistent quality across batches — are all preventable with a structured approach.</p>
          <div className="space-y-4">
            {[
              { step: "1", title: "Define the End-Use Environment", desc: "Document the ambient temperature range, humidity level, chemical exposure (cleaning products, oils, solvents), and UV exposure at the point of use. This determines the minimum performance specification required." },
              { step: "2", title: "Identify Regulatory Requirements", desc: "Determine which regulations apply: EU REACH (BPA/phenol restrictions), California Prop 65, FDA 21 CFR 176.170, or industry-specific standards (ANSI/AIIM for financial records). Specify the required compliance documentation." },
              { step: "3", title: "Match Paper to Printer", desc: "Confirm the printer model(s) and their paper width, core diameter, maximum roll diameter, and print speed. Request a sample that has been tested on your specific printer model, not just a generic compatibility claim." },
              { step: "4", title: "Test Under Real Conditions", desc: "Run a field trial with at least 500 prints in the actual end-use environment before committing to a production order. Store a printed sample under end-use conditions for 30 days and verify image retention." },
              { step: "5", title: "Establish Quality Benchmarks", desc: "Define minimum acceptable optical density, dimensional tolerances, and image life. Request batch Certificate of Conformance documentation with each shipment, and retain a reference sample for comparison against future batches." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="w-9 h-9 bg-[#0F2B5B] text-white rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ fontFamily: "Sora, sans-serif" }}>{step}</div>
                <div>
                  <div className="font-bold text-slate-900 text-sm mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{title}</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar CTA row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
          <div className="lg:col-span-2">
            <div className="bg-[#0F2B5B] rounded-3xl p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-extrabold mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Don&apos;t See Your Industry?</h2>
                <p className="text-slate-300 text-sm max-w-lg">We serve 30+ industries. Contact us with your application requirements and we will recommend the right product and specifications within 12 hours.</p>
              </div>
              <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-3.5 rounded-xl transition-all whitespace-nowrap" style={{ fontFamily: "Sora, sans-serif" }}>
                Contact Our Team <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Get a Free Quote</h3>
              <p className="text-xs text-slate-500 mb-4">12-hour response guaranteed</p>
              <InquiryForm compact />
            </div>
            <div className="bg-slate-50 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Related Resources</h4>
              <ul className="space-y-2">
                {[{ label: "Product Knowledge Guide", href: "/resources/product-knowledge" }, { label: "OEM Guide", href: "/resources/oem-guide" }, { label: "Blank Thermal Rolls", href: "/products/thermal-paper-rolls/blank" }, { label: "Thermal Labels", href: "/products/thermal-labels/blank" }].map(({ label, href }) => (
                  <li key={href}><Link href={href} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"><ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />{label}</Link></li>
                ))}
              </ul>
            </div>
            <Link href="/resources" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">← Back to Resource Center</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
