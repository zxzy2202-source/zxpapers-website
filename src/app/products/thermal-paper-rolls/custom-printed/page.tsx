import type { Metadata } from "next";
import CustomPrintedThermalRollsCatalogPage from "@/components/products/CustomPrintedThermalRollsCatalogPage";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";

export const metadata: Metadata = {
  title: "Custom Printed Thermal Paper Rolls | OEM & Private Label",
  description: "Review custom printed thermal paper rolls by specification, artwork, print side, repeat, QR or barcode use, packing and sample-approval requirements.",
  keywords: "custom printed thermal paper rolls, branded receipt rolls, private label thermal rolls, logo printed receipt paper, back printed receipt rolls, OEM thermal paper printing",
  alternates: { canonical: `${SITE.domain}/products/thermal-paper-rolls/custom-printed` },
};

const FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const printingRequirements = [
  { label: "Roll specification", value: "Width, outer diameter or length, core, paper grade, winding and any sensor mark" },
  { label: "Print side", value: "Thermal side, reverse side or both, subject to feasibility review" },
  { label: "Artwork", value: "Vector artwork preferred; fonts, language, live-print area and repeat must be confirmed" },
  { label: "Colors", value: "Color references and approval method are confirmed during artwork review" },
  { label: "QR / barcode", value: "Code size, position, destination and scanner or app must be included in the test plan" },
  { label: "Proof and sample", value: "Proof route and physical sample requirement are confirmed after feasibility review" },
];
const orderRequirements = [
  { label: "Quantity", value: "Provide quantity by size, artwork version and packing SKU" },
  { label: "Packing", value: "Neutral, distributor or private-label configuration reviewed by channel and destination" },
  { label: "Documents", value: "Material and document requirements confirmed by exact product and scope" },
  { label: "Commercial terms", value: "MOQ, proof, sample, production timing and payment are confirmed after review" },
];
const approvalSteps = [
  { step: "01", title: "Submit the brief", desc: "Send the roll specification, printer, print side, artwork, colors, repeat, live-print area, quantity, packing and destination." },
  { step: "02", title: "Review feasibility", desc: "Confirm printable area, paper, winding, code use, packing and any sample or test requirement." },
  { step: "03", title: "Approve the proof", desc: "Approve copy, language, artwork version, color reference, repeat and orientation." },
  { step: "04", title: "Test when required", desc: "Use a physical sample for printer feeding, cutting, QR or barcode scanning and environment-specific review." },
  { step: "05", title: "Freeze the master specification", desc: "Record the approved product, artwork, packing and change-confirmation reference before production." },
  { step: "06", title: "Produce, inspect and pack", desc: "Inspect against the approved reference and confirmed shipment configuration." },
];
const projectReviewAreas = [
  { title: "Multilingual Layout", badge: "Copy and version review", items: ["Confirm languages, text ownership and approved copy", "Keep every language version tied to the artwork revision"] },
  { title: "Tax or Fiscal Fields", badge: "Target-market review", items: ["Collect the required text, code, issuer and destination", "Do not claim approval until the exact requirement and evidence are verified"] },
  { title: "QR and Barcode Use", badge: "Position and scan plan", items: ["Confirm code destination, size, contrast, live-print area and scanner or app", "Agree on proof, physical sample and scan-test scope"] },
  { title: "Destination Documents", badge: "Product-scope evidence", items: ["List the required material, report or certificate fields", "Confirm issuer, product scope, date, batch relationship and verification method"] },
];
const faqs = [
  { q: "What information is required for a custom printed roll review?", a: "Send the complete roll specification, printer, print side, artwork, language, colors, repeat, code use, quantity by SKU, packing, destination and document requirements." },
  { q: "When are MOQ and production timing confirmed?", a: "MOQ and timing are confirmed after the roll specification, artwork, quantity, packing, proof route, sample requirement and destination have been reviewed." },
  { q: "Is a physical sample always required?", a: "Not always. A physical sample is planned when printer feeding, cutting, color, QR or barcode scanning, material or destination-specific risk needs to be tested." },
  { q: "Can you review multilingual artwork?", a: "Yes. The buyer supplies or approves the final copy, and each language version is tied to the artwork revision and proof approval." },
  { q: "How are repeat orders controlled?", a: "Repeat orders should reference the approved roll specification, artwork version, packing configuration, master sample where used and any confirmed change notice." },
];
const productSchema = { "@context": "https://schema.org", "@type": "Product", name: "Custom Printed Thermal Paper Rolls", description: metadata.description, brand: { "@type": "Brand", name: "ZhixinPaper" }, manufacturer: { "@type": "Organization", name: "ZhixinPaper", url: SITE.domain }, image: FALLBACK, url: `${SITE.domain}/products/thermal-paper-rolls/custom-printed`, additionalProperty: [...printingRequirements, ...orderRequirements].map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })) };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain }, { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` }, { "@type": "ListItem", position: 3, name: "Thermal Paper Rolls", item: `${SITE.domain}/products/thermal-paper-rolls` }, { "@type": "ListItem", position: 4, name: "Custom Printed", item: `${SITE.domain}/products/thermal-paper-rolls/custom-printed` },
] };

export default async function CustomPrintedRollsPage() {
  const heroImage = await getSlotImage("thermal-paper-rolls:custom-hero", FALLBACK);
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need a custom printed thermal roll review. I can send the specification, printer, artwork, quantity, packing and destination.")}`;
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} /><CustomPrintedThermalRollsCatalogPage heroImage={heroImage} whatsappHref={whatsappHref} printingRequirements={printingRequirements} orderRequirements={orderRequirements} approvalSteps={approvalSteps} projectReviewAreas={projectReviewAreas} sizes={paperRollSizes.map((size) => ({ label: size.label, href: `/products/thermal-rolls/${size.slug}`, badge: size.badge }))} faqs={faqs} /></>;
}
