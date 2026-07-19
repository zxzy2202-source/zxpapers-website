import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, Leaf, MessageSquare, Phone, ShieldCheck, Truck } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

export const metadata: Metadata = {
  title: "Phenol-Free Thermal Paper | BPS-Free Receipt Paper Manufacturer",
  description:
    "Phenol-free (BPS-free) thermal paper rolls using a non-phenol, Vitamin C based developer — the safest receipt paper for EU REACH, California Prop 65 & food contact. Factory direct, full compliance docs.",
  keywords:
    "phenol free thermal paper, bps free thermal paper, non phenol thermal paper, phenol free receipt paper, vitamin c thermal paper, phenol free pos paper, bpa and bps free thermal paper, reach compliant thermal paper, prop 65 thermal paper, food contact thermal paper",
  alternates: { canonical: `${SITE.domain}/products/phenol-free-thermal-paper` },
};

const ROLLS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const specs = [
  { label: "Developer", value: "Phenol-free — Vitamin C (ascorbic acid) based, no BPA or BPS" },
  { label: "Common Widths", value: "57mm (2¼\") / 80mm (3⅛\") / Custom" },
  { label: "Paper Weight", value: "48 g/m² / 55 g/m² / 65 g/m²" },
  { label: "Image Life", value: "5–7 years (standard) / 10 years (archival)" },
  { label: "Food Contact", value: "Suitable for indirect food contact (FDA)" },
  { label: "Compliance", value: "EU REACH, US FDA, California Prop 65, RoHS" },
  { label: "Certification", value: "ISO 9001:2015, FSC (on request)" },
  { label: "MOQ", value: "1,000 rolls (samples: 50–100 rolls)" },
  { label: "Lead Time", value: "7–15 business days" },
  { label: "Documentation", value: "Test reports & declarations supplied per order" },
];

const faqs = [
  { q: "What is phenol-free thermal paper?", a: "Phenol-free thermal paper forms its image without any phenol-based developer — no Bisphenol A (BPA) and no Bisphenol S (BPS). Ours uses a Vitamin C (ascorbic acid) based developer, making it the safest, most compliant receipt paper for strictly regulated markets." },
  { q: "How is phenol-free different from BPA-free?", a: "BPA-free only removes Bisphenol A — many BPA-free papers still use BPS. Phenol-free (BPS-free) removes both BPA and BPS, eliminating all phenol developers. It is the right choice where regulations or buyers require the strictest material safety." },
  { q: "Which markets require phenol-free receipt paper?", a: "The EU restricts BPA in thermal paper under REACH and is tightening on BPS; California Prop 65 lists both. Retailers, food-service brands, and importers in these markets increasingly specify fully phenol-free rolls." },
  { q: "Is phenol-free paper safe for food contact?", a: "Yes. Our phenol-free rolls are suitable for indirect food contact and meet FDA requirements, which makes them well suited to QSR, deli, bakery, and grocery receipts." },
  { q: "Do you provide compliance documentation?", a: "Yes. Every order ships with test reports and declarations for EU REACH, US FDA, California Prop 65, and RoHS to cover your import and retail compliance." },
  { q: "What is the MOQ and lead time?", a: "MOQ is 1,000 rolls with samples in 50–100 roll quantities. Lead time is 7–15 business days. We export worldwide on EXW, FOB, CIF, and DDP terms." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Phenol-Free Thermal Paper", item: `${SITE.domain}/products/phenol-free-thermal-paper` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Phenol-Free (BPS-Free) Thermal Paper Rolls",
  description: "Phenol-free thermal paper rolls using a non-phenol, Vitamin C based developer — no BPA or BPS, for EU REACH, California Prop 65, and food-contact compliance.",
  brand: { "@type": "Brand", name: SITE.name },
  manufacturer: { "@id": `${SITE.domain}/#organization` },
  image: ROLLS_IMG_FALLBACK,
  url: `${SITE.domain}/products/phenol-free-thermal-paper`,
  additionalProperty: specs.map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export const revalidate = 86400; // 24 hours: static product/market content

export default async function PhenolFreeThermalPaperPage() {
  const rollsImg = r2Image(await getSlotImage("thermal-rolls:hero", ROLLS_IMG_FALLBACK));

  const products = [
    { title: "Phenol-Free POS Rolls", desc: "80mm and 57mm phenol-free receipt rolls for cash registers and mobile terminals.", image: rollsImg, href: "/products/thermal-rolls/80x80mm", badge: "BPS-Free" },
    { title: "Food-Contact Receipt Rolls", desc: "Indirect food-contact safe rolls for QSR, deli, bakery, and grocery receipts.", image: rollsImg, href: "/products/receipt-paper-rolls", badge: "Food Safe" },
    { title: "Custom Printed Phenol-Free", desc: "Review custom printing against the exact paper, artwork, packing and document requirement.", image: rollsImg, href: "/products/thermal-paper-rolls/custom-printed", badge: "OEM" },
    { title: "BPA-Free Standard Grade", desc: "Prefer the everyday-compliance grade? See our standard BPA-free thermal paper.", image: rollsImg, href: "/products/bpa-free-thermal-paper", badge: "Standard" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Phenol-Free Roll Sizes",
      description: "Every phenol-free roll ships with full compliance documentation — pick a size or ask for a custom width.",
      cards: paperRollSizes.map((s) => ({
        image: rollsImg,
        title: s.label,
        desc: `Phenol-free (BPS-free) thermal roll size${s.markets ? ` for ${s.markets}` : ""} — non-phenol developer.`,
        href: `/products/thermal-rolls/${s.slug}`,
        badge: s.badge,
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductCategoryShowcaseTemplate
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Phenol-Free Thermal Paper" }]}
        heroImage={rollsImg}
        heroBadge={{ text: "Strictest Material Safety", color: "amber" }}
        title={<>Phenol-Free Thermal Paper<br /><span className="text-amber-400">No BPA, No BPS</span></>}
        subtitle="The safest, most compliant receipt paper — phenol-free (BPS-free) with a Vitamin C based developer, for EU REACH, California Prop 65, and indirect food contact, with full documentation and bulk pricing in 24 hours."
        trustBadges={["No BPA & No BPS", "REACH / Prop 65", "Food Contact (FDA)", "ISO 9001"]}
        stats={[
          { value: "BPS-Free", label: "Non-Phenol" },
          { value: "REACH", label: "EU Compliant" },
          { value: "FDA", label: "Food Contact" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get BPA-Free Compliance Quote", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing and compliance docs for phenol-free (BPS-free) thermal paper rolls.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Fully Phenol-Free Receipt Paper From One Factory",
          lead: "No BPA, no BPS — our phenol-free rolls use a Vitamin C (ascorbic acid) based developer for the strictest material safety, coated and slit in-house at factory-direct pricing.",
          bullets: [
            "No BPA and no BPS — all phenols removed",
            "Vitamin C (ascorbic acid) based developer",
            "EU REACH, US FDA, California Prop 65 & RoHS",
            "Indirect food contact safe — QSR, deli, grocery",
          ],
          image: rollsImg,
          imageAlt: "Phenol-free BPS-free thermal paper rolls",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Phenol-Free (BPS-Free) Thermal Paper",
          paragraphs: [
            "Phenol-free thermal paper forms its image without any phenol-based developer — no Bisphenol A (BPA) and no Bisphenol S (BPS). Ours uses a Vitamin C (ascorbic acid) based developer, making it the safest, most compliant receipt paper for strictly regulated markets and food-service environments.",
            "BPA-free only removes Bisphenol A — many BPA-free papers still use BPS. Phenol-free removes both, eliminating all phenol developers. The EU restricts BPA in thermal paper under REACH and is tightening on BPS; California Prop 65 lists both; and food-service brands increasingly specify fully phenol-free rolls.",
            "As a factory-direct manufacturer, we supply phenol-free rolls in 57mm, 80mm, and custom widths, with custom printing, indirect food-contact suitability, and test reports and declarations for EU REACH, US FDA, California Prop 65, and RoHS — exporting worldwide on EXW, FOB, CIF, and DDP terms.",
          ],
        }}
        featureSplit={{
          title: "When to Choose Phenol-Free Over BPA-Free",
          lead: "Choose phenol-free for the strictest regulations and food contact; BPA-free remains a strong choice for everyday compliance.",
          bullets: [
            "Phenol-free for EU REACH & California Prop 65",
            "Food-contact (FDA) for QSR, deli & grocery",
            "Full test reports and declarations per order",
            "Custom printing on phenol-free stock",
          ],
          image: rollsImg,
          imageAlt: "Compliance documentation for phenol-free thermal paper",
          cta: { label: "Request Compliance Docs", href: "/contact" },
        }}
        productsTitle="Browse Phenol-Free Options"
        productsDescription="Phenol-free POS, food-contact, and custom printed rolls — in stock across all popular widths with full documentation."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "BPA-Free vs Phenol-Free (BPS-Free)",
          headers: { left: "BPA-Free (Standard)", right: "Phenol-Free (Strictest)" },
          rows: [
            { factor: "Removes", left: "Bisphenol A (BPA) only", right: "BPA and BPS — all phenols" },
            { factor: "Developer", left: "Non-BPA developer", right: "Vitamin C (ascorbic acid) based" },
            { factor: "Best for", left: "General compliance", right: "EU REACH, Prop 65 & food contact" },
            { factor: "Food contact", left: "Indirect (grade-dependent)", right: "Indirect food contact (FDA)" },
            { factor: "Documentation", left: "REACH / FDA / RoHS", right: "REACH / FDA / Prop 65 / RoHS" },
          ],
        }}
        specs={{
          title: "Specifications",
          rows: specs,
          note: "* Test reports and declarations supplied with every order.",
        }}
        whyUs={{
          title: "Why Source Phenol-Free Paper From the Factory",
          subtitle: "In-house coating with the strictest material safety and complete compliance documentation.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup — coated, slit, and boxed in our own factory." },
            { icon: <Leaf />, title: "No BPA, No BPS", text: "Vitamin C based developer — the strictest phenol-free material safety." },
            { icon: <ShieldCheck />, title: "Full Documentation", text: "EU REACH, US FDA, California Prop 65, and RoHS reports with every order." },
            { icon: <Boxes />, title: "All Sizes In Stock", text: "57mm and 80mm plus custom widths in fully phenol-free grade." },
            { icon: <Truck />, title: "Global Export", text: "EXW, FOB, CIF, and DDP to 80+ countries with reliable lead times." },
            { icon: <BadgeCheck />, title: "OEM & Private Label", text: "Custom logo and printing on phenol-free stock for distributors and brands." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper" },
          { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
          { label: "Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get a Phenol-Free Compliance Quote",
          description: "Tell us your size, quantity, and target market — we'll send pricing and the matching REACH / FDA / Prop 65 documentation within 24 hours.",
        }}
      />
    </>
  );
}
