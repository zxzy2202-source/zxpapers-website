import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { DETERGENT_LABELS_IMG, apps100x100 } from "../detergent-labels-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "100×100mm Detergent Labels | Square Container Labels",
  description:
    "100×100mm square detergent labels for pods, powder boxes, and multi-surface cleaners. Water-resistant, chemical-resistant. CMYK printing. MOQ 5,000.",
  alternates: { canonical: `${SITE.domain}/products/detergent-labels/100x100mm` },
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
      "name": "100×100Mm",
      "item": "https://www.zhixinpaper.com/products/detergent-labels/100x100mm"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "100×100mm Detergent Labels | Square Container Labels",
  "description": "100×100mm square detergent labels for pods, powder boxes, and multi-surface cleaners. Water-resistant, chemical-resistant. CMYK printing. MOQ 5,000.",
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
  "url": "https://www.zhixinpaper.com/products/detergent-labels/100x100mm"
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
        sizeLabel="100 × 100mm"
        slug="100x100mm"
        fullTitle="100×100mm Detergent Labels (Square)"
        badge="Square"
        description="The 100×100mm square format is ideal for laundry pod containers, powder detergent boxes, dishwasher tablet packaging, and multi-surface cleaner bottles. The balanced square shape provides excellent brand visibility and accommodates product imagery, logos, and regulatory text in a compact layout."
        specs={[
          { label: "Size", value: "100mm × 100mm" },
          { label: "Face Stock", value: "White/clear BOPP, PE, or vinyl" },
          { label: "Adhesive", value: "Permanent acrylic (water & chemical resistant)" },
          { label: "Liner", value: "Silicone-coated PET" },
          { label: "Print Method", value: "Flexo / offset / digital CMYK + Pantone" },
          { label: "Coating", value: "Gloss or matte lamination" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "10–18 days" },
          { label: "Certifications", value: "ISO 9001, GHS / CLP compliant" },
        ]}
        applications={apps100x100}
        markets={["Global", "Americas", "Europe"]}
        productImage={DETERGENT_LABELS_IMG}
      />
    </>
  );
}
