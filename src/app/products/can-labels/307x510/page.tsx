import type { Metadata } from "next";
import SizeDetailPage from "@/components/products/SizeDetailPage";
import { CAN_LABELS_IMG, apps307x510 } from "../can-labels-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "307×510 Can Labels | Wide Body Can Labels",
  description:
    "307×510 can labels for wide-body food cans and industrial containers. Food-safe, solvent-resistant options. CMYK printing. MOQ 5,000. ISO 9001 certified.",
  alternates: { canonical: `${SITE.domain}/products/can-labels/307x510` },
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
      "name": "Can Labels",
      "item": "https://www.zhixinpaper.com/products/can-labels"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "307×510",
      "item": "https://www.zhixinpaper.com/products/can-labels/307x510"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "307×510 Can Labels | Wide Body Food & Industrial Can Labels",
  "description": "307×510 can labels for wide-body food cans and industrial containers. Food-safe, solvent-resistant options. CMYK printing. MOQ 5,000. ISO 9001 certified.",
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
  "url": "https://www.zhixinpaper.com/products/can-labels/307x510"
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
        sizeLabel="307 × 510"
        slug="307x510"
        fullTitle="307×510 Can Labels (Wide Body)"
        badge="Wide Body"
        description="The 307×510 is a wide-body label format used for larger food cans (canned fruit, beans, meat) and industrial containers (paint, lubricants). The wider profile accommodates more product information, ingredient lists, and regulatory compliance text. Available in food-safe and solvent-resistant variants."
        specs={[
          { label: "Can Size", value: "307×510 (wide-body food / industrial can)" },
          { label: "Label Dimensions", value: "Approx. 86mm × 130mm (full-wrap)" },
          { label: "Face Stock", value: "White gloss, matte, kraft, or BOPP" },
          { label: "Adhesive", value: "Permanent acrylic (food-safe or industrial)" },
          { label: "Print Method", value: "Flexo / offset CMYK + Pantone" },
          { label: "Coating", value: "Gloss, matte, or solvent-resistant lamination" },
          { label: "MOQ", value: "5,000 labels" },
          { label: "Lead Time", value: "10–18 days" },
          { label: "Certifications", value: "ISO 9001, FDA 21 CFR (food variant), GHS compliant" },
        ]}
        applications={apps307x510}
        markets={["Global", "Americas"]}
        productImage={CAN_LABELS_IMG}
      />
    </>
  );
}
