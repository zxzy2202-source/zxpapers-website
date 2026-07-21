import type { Metadata } from "next";
import CustomPrintingServicePage from "@/components/oem/CustomPrintingServicePage";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";

export const metadata: Metadata = {
  title: "OEM Printing Services for Thermal Rolls & Labels",
  description: "Review OEM printing for thermal rolls and labels through product selection, artwork intake, proof and sample planning, version control, packing and document requirements.",
  alternates: { canonical: `${SITE.domain}/oem/custom-printing` },
};
const IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-custom-printing-LUkP5mysubyQvqY9CtfS3J.webp";
const productPaths = [
  { id: "rolls" as const, title: "Custom Printed Thermal Paper Rolls", description: "Logo, reverse print, QR, multilingual and private-label roll programs reviewed against the complete roll specification.", href: "/products/thermal-paper-rolls/custom-printed", cta: "Review custom roll requirements" },
  { id: "labels" as const, title: "Custom Printed Thermal Labels", description: "Custom thermal label printing reviewed against facestock, adhesive, liner, dimensions, printer and application requirements.", href: "/products/custom-printed-thermal-labels", cta: "Review custom label requirements" },
];
const steps = [
  { step: "01", title: "Choose the product", description: "Confirm whether the project is a thermal roll, thermal label or a coordinated private-label range." },
  { step: "02", title: "Submit specifications and artwork", description: "Send product dimensions, application, printer, print side, artwork, versions, quantity, packing and destination." },
  { step: "03", title: "Review feasibility", description: "Confirm printable area, material, language, codes, proof route, sample needs and document scope." },
  { step: "04", title: "Approve proof and sample plan", description: "Approve copy, version, orientation and the physical test route required before production." },
  { step: "05", title: "Freeze the production reference", description: "Record the approved artwork, product, packing, NDA request and change-confirmation reference." },
  { step: "06", title: "Coordinate production and repeat supply", description: "Produce and inspect against the approved reference, then use it for packing and repeat-order control." },
];
const faqs = [
  { q: "What should an OEM printing brief include?", a: "Identify the product first, then provide the application, printer, complete specification, artwork versions, print side, colors, quantity by SKU, packing, destination and required documents." },
  { q: "How are proof and sample requirements decided?", a: "The proof route and any physical sample are confirmed after product feasibility and project risks such as feeding, cutting, adhesion, scanning, color or destination evidence are reviewed." },
  { q: "Can an NDA be requested before artwork is shared?", a: "Yes. Include the NDA request in the initial brief so confidentiality, file ownership and neutral-production requirements can be agreed before artwork exchange." },
  { q: "Does this page replace the product specification page?", a: "No. This page coordinates the OEM workflow. Thermal rolls and thermal labels still require separate product-specific material, printer and approval checks." },
  { q: "When are packing and commercial terms confirmed?", a: "Packing, MOQ, proof, sample and timing are confirmed after the selected product, quantity, SKU structure, destination and evidence scope are reviewed." },
];
const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "OEM Printing Services for Thermal Rolls and Labels", provider: { "@id": `${SITE.domain}/#organization` }, url: `${SITE.domain}/oem/custom-printing`, serviceType: "OEM printing and private-label production coordination", description: "Artwork intake, feasibility review, proof and sample planning, version control, packing coordination and product routing for custom thermal rolls and labels." };
const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.domain }, { "@type": "ListItem", position: 2, name: "OEM Services", item: `${SITE.domain}/oem` }, { "@type": "ListItem", position: 3, name: "Custom Printing", item: `${SITE.domain}/oem/custom-printing` }] };

export const revalidate = 3600; // 1 hour: slot image changes infrequently

export default async function CustomPrintingPage() {
  const heroImage = await getSlotImage("oem:custom-printing-hero", IMG);
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need an OEM printing review for thermal rolls or labels. I can send the product specification, artwork, quantity, packing and destination.")}`;
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><CustomPrintingServicePage heroImage={heroImage} whatsappHref={whatsappHref} productPaths={productPaths} steps={steps} faqs={faqs} /></>;
}
