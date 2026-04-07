import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { DETERGENT_LABELS_IMG, apps80x150 } from "../detergent-labels-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "80×150mm Detergent Labels | Tall Bottle Labels",
  description:
    "80×150mm detergent labels for tall cleaning product bottles. Water-resistant, chemical-resistant. CMYK printing, gloss/matte lamination. MOQ 5,000.",
  alternates: { canonical: `${SITE.domain}/products/detergent-labels/80x150mm` },
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
      "name": "80×150Mm",
      "item": "https://www.zhixinpaper.com/products/detergent-labels/80x150mm"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "80×150mm Detergent Labels | Tall Bottle Labels",
  "description": "80×150mm detergent labels for tall cleaning product bottles. Water-resistant, chemical-resistant. CMYK printing, gloss/matte lamination. MOQ 5,000.",
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
  "url": "https://www.zhixinpaper.com/products/detergent-labels/80x150mm"
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
        sizeLabel="80 × 150mm"
        slug="80x150mm"
        fullTitle="80×150mm Detergent Labels (Tall Bottle)"
        badge="Tall Bottle"
        description="The 80×150mm is designed for tall-format cleaning product bottles — 750ml to 1.5L sizes commonly used for bathroom cleaners, kitchen degreasers, and spray-style cleaners. The taller profile provides ample space for branding, ingredient lists, and regulatory compliance text. Water-resistant BOPP with chemical-resistant adhesive."
        specs={[
          { label: "Size", value: "80mm × 150mm" },
          { label: "Face Stock", value: "White/clear BOPP, PE, or vinyl" },
          { label: "Adhesive", value: "Permanent acrylic (water & chemical resistant)" },
          { label: "Liner", value: "Silicone-coated PET" },
          { label: "Print Method", value: "Flexo / offset / digital CMYK + Pantone" },
          { label: "Coating", value: "Gloss or matte lamination" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "10–18 days" },
          { label: "Certifications", value: "ISO 9001, GHS / CLP compliant" },
        ]}
        applications={apps80x150}
        markets={["Global", "Europe", "Americas"]}
        productImage={DETERGENT_LABELS_IMG}
      />
    </>
  );
}
