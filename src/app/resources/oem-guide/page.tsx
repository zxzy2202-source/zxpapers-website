import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Package, ShieldCheck, Globe, Lightbulb, Clock, ChevronRight, AlertTriangle, DollarSign, FileText, Truck } from "lucide-react";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "OEM Thermal Paper Guide | MOQ & Private Label",
  description: "Everything distributors need to know about thermal paper OEM manufacturing: MOQ, sampling process, private label packaging, customization options, lead.",
  keywords: "thermal paper OEM, custom thermal rolls, private label thermal paper, thermal paper manufacturer, BPA-free thermal paper OEM",
  alternates: { canonical: `${SITE.domain}/resources/oem-guide` },
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
      "name": "OEM Guide",
      "item": "https://www.zhixinpaper.com/resources/oem-guide"
    }
  ]
};
export default function OEMGuidePage() {
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
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">OEM Guide</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> 15 min read</span>
          </div>
          <h1 className="font-sora text-3xl sm:text-4xl font-extrabold mb-3 max-w-3xl leading-tight">
            The Complete Guide to<br /><span className="text-amber-400">Thermal Paper OEM Manufacturing</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-base">Everything a distributor or brand owner needs to know about sourcing custom thermal paper rolls and labels — from MOQ and sampling to private label packaging, quality control, and avoiding the most common sourcing pitfalls.</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">

            {/* Section 1 */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-4">What Is Thermal Paper OEM Manufacturing?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">OEM (Original Equipment Manufacturer) in the thermal paper industry means a factory produces rolls or labels to your exact specifications — your size, your coating formula, your packaging, your brand. You sell under your own label; we manufacture behind the scenes.</p>
              <p className="text-slate-600 leading-relaxed mb-4">This model is used by distributors, office supply brands, retail chains, and logistics companies worldwide to build proprietary product lines without owning a factory. The global thermal paper market was valued at approximately USD 4.2 billion in 2023 and is projected to grow at a CAGR of 5.1% through 2030, driven by expanding e-commerce logistics, food delivery, and cashless payment adoption. For distributors, OEM manufacturing is the most efficient path to capturing margin in this growing market.</p>
              <p className="text-slate-600 leading-relaxed mb-4">Unlike trading companies that resell generic stock, a true OEM partnership gives you product differentiation: your brand on the packaging, your specifications in the formulation, and your pricing power in the market. Retailers and end-users who reorder by brand name become loyal to your product, not to the underlying factory.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {[
                  { icon: Package, title: "Your Brand", desc: "Custom packaging, logo, and private label on every roll" },
                  { icon: ShieldCheck, title: "Your Specs", desc: "Exact width, length, core size, coating grade, and paper weight" },
                  { icon: Globe, title: "Your Market", desc: "Products designed for your target region's printer ecosystem" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-blue-50 rounded-xl p-5 text-center">
                    <Icon className="w-7 h-7 text-blue-600 mx-auto mb-2" />
                    <div className="font-sora font-bold text-slate-900 text-sm mb-1">{title}</div>
                    <div className="text-xs text-slate-600">{desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-4">Step-by-Step OEM Process</h2>
              <p className="text-slate-600 leading-relaxed mb-5">Understanding the full OEM workflow before you begin prevents delays and miscommunication. A well-managed OEM project from inquiry to first delivery typically takes 25–35 days. Here is what each stage involves:</p>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Initial Inquiry & NDA", desc: "Submit your requirements (size, quantity, coating, packaging). We sign an NDA before any technical discussion to protect your IP. This is non-negotiable for us — your formulation preferences and market strategy are confidential." },
                  { step: "02", title: "Technical Specification", desc: "Our engineering team works with you to define paper weight, coating grade (standard, premium, BPA-free, phenol-free), core size, and roll dimensions. We will also advise on which specifications are compatible with your target printer models." },
                  { step: "03", title: "Sample Production", desc: "We produce 3–5 sample rolls within 3–5 business days. Samples are tested on your target printers before approval. We recommend testing in the actual end-use environment — a kitchen printer in a 40°C environment behaves differently than an office POS terminal." },
                  { step: "04", title: "Packaging Design", desc: "Our design team creates packaging artwork per your brand guidelines. Shrink wrap, polybag, box, or custom display packaging available. We provide a print-ready PDF proof for your approval before production." },
                  { step: "05", title: "Production & QC", desc: "Full production runs with batch Certificate of Conformance. Each batch is tested for print density (optical density ≥1.0), dimensional accuracy (±0.3mm), and aging stability (accelerated aging at 60°C/80% RH for 24 hours)." },
                  { step: "06", title: "Shipping & Documentation", desc: "We handle export documentation (CO, packing list, invoice, BL). DDP, FOB, CIF, and EXW terms available. For EU customers, we provide REACH compliance documentation. For US customers, FDA 21 CFR 176.170 compliance letters are available on request." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <div className="font-sora w-10 h-10 bg-[#0F2B5B] text-white rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0">{step}</div>
                    <div>
                      <div className="font-sora font-bold text-slate-900 text-sm mb-1">{title}</div>
                      <div className="text-sm text-slate-600 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-4">MOQ, Lead Times & Pricing</h2>
              <p className="text-slate-600 leading-relaxed mb-5">One of the most common questions from new OEM buyers is: "What is the minimum order quantity?" The answer depends on the complexity of your specification. Standard sizes with stock paper have lower MOQs; fully custom formulations require larger runs to justify setup costs.</p>
              <div className="overflow-hidden border border-slate-200 rounded-2xl mb-5">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-5 py-3 text-left font-semibold text-slate-700">Parameter</th>
                      <th className="px-5 py-3 text-left font-semibold text-slate-700">Standard OEM</th>
                      <th className="px-5 py-3 text-left font-semibold text-slate-700">Premium OEM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["MOQ (Rolls)", "1,000 rolls", "500 rolls"],
                      ["Sample Lead Time", "3–5 business days", "3–5 business days"],
                      ["Production Lead Time", "15–20 days", "20–25 days"],
                      ["Packaging Options", "Shrink wrap, polybag", "Custom box, display pack"],
                      ["Certifications", "ISO 9001, BPA-Free", "ISO 9001, BPA-Free, FSC"],
                      ["Private Label", "Yes", "Yes + design support"],
                    ].map(([param, std, prem], i) => (
                      <tr key={param} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-5 py-3 font-medium text-slate-700">{param}</td>
                        <td className="px-5 py-3 text-slate-900">{std}</td>
                        <td className="px-5 py-3 text-slate-900 font-semibold text-blue-700">{prem}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 leading-relaxed">Pricing is quoted per roll (FOB Shenzhen) and varies by paper weight, coating type, roll dimensions, and packaging complexity. As a reference, standard 80mm x 80mm rolls in shrink-wrap packaging at 5,000-roll quantities are typically priced 15–25% below major trading company rates when sourced directly from a factory with our scale.</p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-4">Common OEM Customization Options</h2>
              <p className="text-slate-600 leading-relaxed mb-5">The range of customization available in modern thermal paper manufacturing is broader than most buyers realize. Beyond simple size changes, you can specify the chemistry of the coating, the feel of the paper, and every detail of the packaging presentation.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {["Custom width (20mm–1,200mm) and length", "Core diameter: 12mm, 25mm, 38mm, 50mm", "Paper weight: 48gsm, 55gsm, 58gsm, 65gsm, 80gsm", "Coating: Standard, BPA-Free, Phenol-Free, Premium", "Color: White, Yellow, Pink, Blue, Green base paper", "Custom printing: Logo, text, security features", "Packaging: Shrink wrap, polybag, box, display", "Labeling: Barcode, QR code, serial number"].map((opt) => (
                  <div key={opt} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{opt}
                  </div>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed">For markets with specific regulatory requirements — such as the EU's REACH regulation restricting bisphenol compounds, or California's Proposition 65 — we can provide phenol-free and BPA-free certified formulations with full third-party lab test reports. This is increasingly important for distributors supplying food service, healthcare, and government procurement channels.</p>
            </section>

            {/* Section 5 - Deep Article Content */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-4">How to Evaluate a Thermal Paper OEM Supplier</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Choosing the wrong OEM partner is one of the most expensive mistakes a distributor can make. A bad batch of thermal paper that fades within months, or rolls that jam in your customers' printers, can destroy a distribution relationship built over years. Here is a systematic framework for evaluating suppliers before committing to a production order.</p>

              <div className="space-y-5">
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="font-sora font-bold text-slate-900 text-sm">1. Verify Certifications — and Their Scope</div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">ISO 9001 certification is the baseline, but confirm that the certificate covers the specific product lines you are ordering. Some factories hold ISO 9001 for their administrative processes only, not their manufacturing lines. Request the certificate number and verify it on the issuing body's website (Bureau Veritas, SGS, TÜV Rheinland). For BPA-free claims, require a third-party lab test report (SGS or Intertek) dated within the past 12 months — not just a supplier declaration.</p>
                </div>

                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="font-sora font-bold text-slate-900 text-sm">2. Request a Factory Audit or Video Tour</div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">A legitimate factory will welcome a video tour or third-party audit. Look for: slitting machines with automatic tension control (critical for consistent roll diameter), climate-controlled storage for raw paper stock (humidity above 70% degrades thermal coating), and a dedicated QC lab with optical density meters and caliper gauges. If a supplier refuses any form of factory verification, treat this as a serious red flag.</p>
                </div>

                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                    </div>
                    <div className="font-sora font-bold text-slate-900 text-sm">3. Test Samples Under Real-World Conditions</div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">Never approve samples tested only in ideal conditions. If your customers operate kitchen printers near fryers, test the sample at 40°C with grease exposure. If you supply outdoor kiosk operators, test at -10°C. Run the sample through 500 receipts continuously to check for jamming. Store a printed receipt in a wallet for 30 days alongside a credit card (plasticizer migration is a common cause of image fading). Only approve samples that pass all conditions relevant to your end-use environment.</p>
                </div>

                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="font-sora font-bold text-slate-900 text-sm">4. Understand Total Cost of Ownership</div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">The unit price per roll is only one component of your total sourcing cost. Factor in: freight (thermal paper is bulky and heavy — a 20-foot container holds approximately 800,000 standard 80mm rolls), import duties (HS code 4809.90 applies in most markets, with duty rates ranging from 0% in free trade agreement countries to 12% in some markets), warehousing costs, and the cost of customer complaints from substandard product. A supplier quoting 8% below market price but with inconsistent quality can easily cost you more than the savings in returns and lost accounts.</p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-4">Regional Market Considerations for OEM Buyers</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Thermal paper specifications are not universal. The dominant printer brands, paper sizes, and regulatory requirements vary significantly by region. Sourcing a product optimized for one market and selling it in another is a common and costly mistake.</p>

              <div className="overflow-hidden border border-slate-200 rounded-2xl">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Region</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Dominant Sizes</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Key Printers</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Regulatory Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["North America", "2¼\" × 50′, 3⅛\" × 230′", "Epson, Star, Bixolon, Verifone", "CA Prop 65, FDA 21 CFR 176.170"],
                      ["Europe", "57mm × 40m, 80mm × 80m", "Epson, Ingenico, PAX", "REACH, BPA ban in receipts (2020)"],
                      ["Southeast Asia", "57mm × 50m, 80mm × 80m", "SNBC, Sewoo, Bixolon", "Varies by country; BPA-free preferred"],
                      ["Middle East", "80mm × 80m, 57mm × 50m", "Epson, Star, Posiflex", "Halal certification sometimes required"],
                      ["Latin America", "57mm × 40m, 80mm × 80m", "Bematech, Epson, Elgin", "INMETRO certification in Brazil"],
                    ].map(([region, sizes, printers, regs], i) => (
                      <tr key={region} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-3 font-semibold text-slate-900">{region}</td>
                        <td className="px-4 py-3 text-slate-600">{sizes}</td>
                        <td className="px-4 py-3 text-slate-600">{printers}</td>
                        <td className="px-4 py-3 text-slate-600">{regs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 leading-relaxed mt-4">When entering a new regional market, we recommend ordering a mixed sample set covering the two or three most common sizes in that market before committing to a large production run. Our sales team can advise on the specific printer models and paper specifications that dominate each market based on our existing distribution data.</p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-4">Private Label Packaging: Building a Brand That Sells</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Private label packaging is where OEM manufacturing transitions from a cost exercise to a brand-building strategy. The packaging of a thermal paper roll is the primary touchpoint between your brand and the end customer — a restaurant manager, a retail store owner, or a warehouse supervisor who reorders by brand name when they run out.</p>
              <p className="text-slate-600 leading-relaxed mb-4">Effective thermal paper packaging communicates three things at a glance: the paper size (width × length × core diameter), the key quality claims (BPA-free, image life, compatibility), and the reorder information (your website, phone number, or QR code). Packaging that omits any of these elements loses reorder opportunities.</p>
              <p className="text-slate-600 leading-relaxed mb-4">We offer four packaging formats: individual shrink wrap (lowest cost, suitable for bulk buyers), individual polybag with header card (retail-ready, allows hanging display), custom printed box (premium presentation, ideal for branded gift sets or hospitality supply), and display counter box (holds 10–50 rolls, designed for retail shelf placement). Each format has different MOQ implications and per-unit costs, which our team will detail in your quote.</p>
              <p className="text-slate-600 leading-relaxed">For distributors building a long-term brand, we recommend investing in a custom printed box even if the initial volume does not justify the premium — the brand equity built with end customers who see your logo on every roll compounds over time into reorder loyalty that is difficult for competitors to displace.</p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-4">Quality Assurance: What to Expect and Demand</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Quality in thermal paper manufacturing is multidimensional. A roll can pass a visual inspection and still fail in the field due to coating inconsistency, dimensional variation, or chemical incompatibility with specific printer models. Here is what a rigorous QA process should include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Dimensional Accuracy", desc: "Width tolerance ±0.3mm, roll diameter ±2mm, core diameter ±0.2mm. Measured with calibrated digital calipers on 5% of each production batch." },
                  { title: "Print Density", desc: "Optical density ≥1.0 measured with a densitometer at standard print energy settings. Below 0.8 produces receipts that are difficult to read in bright light." },
                  { title: "Image Stability", desc: "Accelerated aging test: 24 hours at 60°C/80% RH. Premium grade paper retains ≥80% optical density. Standard grade retains ≥60%." },
                  { title: "Chemical Compliance", desc: "BPA content <0.02% by weight (EU standard). Phenol-free formulations tested to <0.01% bisphenol S and bisphenol A combined." },
                  { title: "Printer Compatibility", desc: "Each batch tested on reference printers (Epson TM-T88VI, Star TSP143III, Bixolon SRP-350III) at standard and high-speed print settings." },
                  { title: "Packaging Integrity", desc: "Drop test (1.2m onto concrete), compression test (200kg for 24 hours), and moisture barrier test for shrink-wrap packaging." },
                ].map(({ title, desc }) => (
                  <div key={title} className="p-4 bg-slate-50 rounded-xl">
                    <div className="font-sora font-bold text-slate-900 text-sm mb-2">{title}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mt-4">Every production batch ships with a Certificate of Conformance documenting the test results for that specific batch. For premium OEM customers, we also provide a retained sample from each batch, stored in our QC archive for 24 months, enabling traceability in the event of a field complaint.</p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-4">Shipping, Logistics & Import Planning</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Thermal paper is classified as non-hazardous cargo and ships without special restrictions. However, its bulk-to-value ratio makes logistics planning critical to maintaining competitive landed costs. A 20-foot container can hold approximately 800,000 standard 80mm rolls (depending on packaging format), making full-container loads the most cost-efficient option for established distributors.</p>
              <p className="text-slate-600 leading-relaxed mb-4">For new buyers or smaller initial orders, we consolidate shipments with other customers to offer LCL (Less than Container Load) rates. Transit times from our Guangdong facility are typically 18–22 days to European ports, 20–28 days to US East Coast ports, and 14–18 days to Southeast Asian ports.</p>
              <div className="flex items-start gap-3 p-5 bg-blue-50 rounded-xl">
                <Truck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-sora font-bold text-slate-900 text-sm mb-1">Incoterms We Support</div>
                  <p className="text-sm text-slate-600">EXW (factory gate), FOB (Shenzhen or Guangzhou port), CIF (cost + insurance + freight to destination port), DDP (delivered duty paid, including customs clearance). For first-time buyers, we recommend FOB as it gives you control over freight while keeping the factory responsible for export clearance.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-sora font-bold text-amber-900 mb-1">Ready to Start Your OEM Project?</div>
                  <p className="text-sm text-amber-800 mb-3">Contact our OEM team with your specifications. We will respond within 12 hours with a detailed quote and sample timeline. No commitment required for samples.</p>
                  <Link href="/contact/oem-partnership" className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-900">
                    Start OEM Partnership <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-sora text-base font-bold text-slate-900 mb-1">Get a Free Quote</h3>
              <p className="text-xs text-slate-500 mb-4">12-hour response guaranteed</p>
              <InquiryForm compact />
            </div>
            <div className="bg-slate-50 rounded-2xl p-5">
              <h4 className="font-sora text-sm font-bold text-slate-900 mb-3">Related Resources</h4>
              <ul className="space-y-2">
                {[{ label: "OEM Services Overview", href: "/oem" }, { label: "Custom Printing & Specs", href: "/oem/custom-printing" }, { label: "Packaging & Private Label", href: "/oem/packaging" }, { label: "IP Protection & NDA", href: "/oem/ip-protection" }, { label: "OEM Case Studies", href: "/oem/case-studies" }].map(({ label, href }) => (
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
