import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { DETERGENT_LABELS_IMG, apps120x80 } from "../detergent-labels-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "120×80mm Detergent Labels | Back Panel",
  description:
    "120×80mm detergent back labels for ingredient lists, GHS compliance, and bilingual text. Water-resistant, chemical-resistant. CMYK printing. MOQ 5,000.",
  alternates: { canonical: `${SITE.domain}/products/detergent-labels/120x80mm` },
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
      "name": "Products",
      "item": "https://www.zhixinpaper.com/products"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Detergent Labels",
      "item": "https://www.zhixinpaper.com/products/detergent-labels"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "120×80Mm",
      "item": "https://www.zhixinpaper.com/products/detergent-labels/120x80mm"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "120×80mm Detergent Labels | Back Panel & Compliance Labels",
  "description": "120×80mm detergent back labels for ingredient lists, GHS compliance, and bilingual text. Water-resistant, chemical-resistant. CMYK printing. MOQ 5,000.",
  "brand": {
    "@type": "Brand",
    "name": "ZhixinPaper"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "ZhixinPaper",
    "url": "https://www.zhixinpaper.com"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "ZhixinPaper"
    }
  },
  "url": "https://www.zhixinpaper.com/products/detergent-labels/120x80mm"
};
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      <SizeDetailPage
        type="labels"
        sizeLabel="120 × 80mm"
        slug="120x80mm"
        fullTitle="120×80mm Detergent Labels (Back Label)"
        badge="Back Label"
        description="The 120×80mm landscape format is the standard back panel label for detergent and cleaning product bottles. Designed to accommodate ingredient lists, safety warnings, GHS hazard pictograms, dosage instructions, and bilingual regulatory text. Water-resistant BOPP with chemical-resistant adhesive ensures label integrity throughout the product lifecycle."
        specs={[
          { label: "Size", value: "120mm × 80mm (landscape)" },
          { label: "Face Stock", value: "White BOPP or PE" },
          { label: "Adhesive", value: "Permanent acrylic (water & chemical resistant)" },
          { label: "Liner", value: "Silicone-coated PET" },
          { label: "Print Method", value: "Flexo / offset / digital CMYK" },
          { label: "Coating", value: "Gloss or matte lamination" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "10–18 days" },
          { label: "Certifications", value: "ISO 9001, GHS / CLP compliant, REACH" },
        ]}
        applications={apps120x80}
        markets={["Global", "Europe", "Americas"]}
        productImage={DETERGENT_LABELS_IMG}
      />
    </>
  );
}
