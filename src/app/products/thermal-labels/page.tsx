import type { Metadata } from "next";
import ThermalLabelsCatalogPage from "@/components/products/ThermalLabelsCatalogPage";
import { labelSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImages } from "@/lib/imageSlotUtils";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const OVERVIEW_IMAGE = "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=1200&q=82";
const CUSTOM_IMAGE = "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=82";
const QUALITY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";

export const metadata: Metadata = {
  title: "Thermal Labels Manufacturer for Shipping, Barcode and Food",
  description:
    "Factory-direct direct thermal and thermal transfer labels for shipping, barcode, food, freezer and industrial applications. Choose compatible sizes, adhesives, compliance documents and private-label printing.",
  keywords:
    "thermal labels manufacturer, direct thermal labels, thermal transfer labels, 4x6 shipping labels, fanfold labels, FNSKU barcode labels, BPA-Free thermal labels, freezer labels, custom printed thermal labels",
  alternates: { canonical: `${SITE.domain}/products/thermal-labels` },
  openGraph: {
    title: "Thermal Labels for Shipping, Barcode, Food and Industrial Use",
    description:
      "Source printer-compatible thermal labels with clear barcode readability, application-matched adhesives, compliance-ready materials and private-label support.",
    url: `${SITE.domain}/products/thermal-labels`,
    type: "website",
    images: [{ url: HERO_IMAGE, alt: "Thermal labels for shipping and barcode printing" }],
  },
};

const faqs = [
  {
    q: "What is the difference between direct thermal and thermal transfer labels?",
    a: "Direct thermal labels use a heat-sensitive coating and do not require a ribbon. They are suited to shipping labels, receipts, stock labels and other short-term applications. Thermal transfer labels use a ribbon to create a more durable image for industrial, medical, asset and outdoor identification.",
  },
  {
    q: "Which thermal labels are best for Amazon FBA?",
    a: "Amazon FBA programs commonly use 4x6 shipping labels and FNSKU barcode labels. A matte, high-contrast face stock, accurate die-cutting and a verified fit for Zebra, Rollo, Munbyn or another printer help reduce scan and feeding issues.",
  },
  {
    q: "Do you offer BPA-Free, BPS-Free and phenol-free labels?",
    a: "Yes. We can supply BPA-Free, BPS-Free and phenol-free thermal labels with compliance documents for customers selling into North America, Europe and other regulated markets. The required document set is confirmed with the quotation.",
  },
  {
    q: "What adhesive should I choose for shipping labels?",
    a: "Permanent adhesive is suitable for common cartons and mailers. All-temperature adhesive is better for variable warehouse conditions. Freezer-grade adhesive is used for frozen food, seafood, cold-chain and medical logistics where condensation and low temperatures are expected.",
  },
  {
    q: "Can you make fanfold labels for high-volume fulfillment?",
    a: "Yes. Fanfold labels are available for 3PLs, overseas warehouses and high-volume shippers that want fewer roll changes and a predictable stack format. We confirm sheet size, perforation, stack count and printer feed direction before production.",
  },
  {
    q: "Which printer brands are compatible with your labels?",
    a: "We support common desktop and industrial thermal printers, including Zebra, Rollo, Munbyn, TSC, Dymo, Brother and other models. Send the printer model, label dimensions, core and maximum roll diameter so we can confirm compatibility before sampling.",
  },
  {
    q: "Can you print logos, barcodes and warning information?",
    a: "Yes. Custom programs can include logos, FNSKU or other barcode areas, QR codes, warning text, multilingual instructions, variable fields and private-label packaging. A digital proof is approved before mass production.",
  },
  {
    q: "What is the MOQ and lead time for custom thermal labels?",
    a: "MOQ depends on the material, size, print coverage, packing and order mix. Stock sizes can be quoted for low-volume trial orders. Custom programs are scheduled after artwork and specification approval, with the exact production window stated in the quotation.",
  },
  {
    q: "Can you provide samples and quality documents?",
    a: "Yes. We can arrange sample labels for printer feeding, barcode readability, adhesion and environmental checks. Depending on the application, we can also provide material declarations, BPA or BPS reports, REACH or FSC documents and batch quality records.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Thermal Labels", item: `${SITE.domain}/products/thermal-labels` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE.domain}/products/thermal-labels#product`,
  name: "Thermal Labels",
  alternateName: ["Direct Thermal Labels", "Thermal Transfer Labels", "Shipping Labels", "Barcode Labels"],
  description: metadata.description,
  url: `${SITE.domain}/products/thermal-labels`,
  image: [HERO_IMAGE, OVERVIEW_IMAGE, CUSTOM_IMAGE],
  category: "Thermal Labels",
  brand: { "@type": "Brand", name: SITE.name },
  manufacturer: { "@id": `${SITE.domain}/#organization` },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Distributors, 3PLs, e-commerce brands, packaging suppliers, food businesses and industrial buyers",
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Formats", value: "Roll or fanfold" },
    { "@type": "PropertyValue", name: "Applications", value: "Shipping, barcode, food, freezer, retail and industrial traceability" },
    { "@type": "PropertyValue", name: "Materials", value: "Direct thermal, thermal transfer, paper, BOPP, PET, PP and PI options" },
    { "@type": "PropertyValue", name: "Compliance options", value: "BPA-Free, BPS-Free, phenol-free, FSC and REACH-ready options" },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Thermal Labels",
  description: metadata.description,
  url: `${SITE.domain}/products/thermal-labels`,
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: labelSizes.length + 4,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blank Thermal Labels", url: `${SITE.domain}/products/thermal-labels/blank` },
      { "@type": "ListItem", position: 2, name: "Custom Printed Thermal Labels", url: `${SITE.domain}/products/thermal-labels/custom-printed` },
      { "@type": "ListItem", position: 3, name: "Shipping Labels", url: `${SITE.domain}/products/shipping-labels` },
      { "@type": "ListItem", position: 4, name: "Barcode Labels", url: `${SITE.domain}/products/barcode-labels` },
      ...labelSizes.map((size, index) => ({ "@type": "ListItem", position: index + 5, name: `${size.label} Thermal Label`, url: `${SITE.domain}/products/thermal-labels/${size.slug}` })),
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default async function ThermalLabelsPage() {
  const images = await getSlotImages([
    { slot: "thermal-labels:hero", fallback: HERO_IMAGE },
    { slot: "products:thermal-labels", fallback: OVERVIEW_IMAGE },
    { slot: "thermal-labels:applications:packaging", fallback: CUSTOM_IMAGE },
    { slot: "manufacturing:facility-line", fallback: QUALITY_IMAGE },
    { slot: "thermal-labels:applications:warehouse", fallback: OVERVIEW_IMAGE },
    { slot: "thermal-labels:applications:ecommerce", fallback: OVERVIEW_IMAGE },
    { slot: "thermal-labels:applications:amazon", fallback: OVERVIEW_IMAGE },
    { slot: "thermal-labels:applications:barcode", fallback: OVERVIEW_IMAGE },
    { slot: "thermal-labels:applications:food", fallback: OVERVIEW_IMAGE },
    { slot: "thermal-labels:applications:pharmacy", fallback: OVERVIEW_IMAGE },
    { slot: "thermal-labels:applications:asset", fallback: QUALITY_IMAGE },
    { slot: "thermal-labels:applications:shipping", fallback: OVERVIEW_IMAGE },
    { slot: "thermal-labels:applications:crossborder", fallback: OVERVIEW_IMAGE },
    { slot: "thermal-labels:applications:europe", fallback: OVERVIEW_IMAGE },
  ]);

  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hello, I need thermal label pricing. I can send the printer model, label size, core, quantity, surface, temperature, material, adhesive, destination and whether the labels are blank or custom printed.",
  )}`;

  const families = [
    { tag: "P0 range", title: "4x6 Shipping Labels", text: "Roll and fanfold formats for Amazon, Shopify, 3PL and courier fulfillment. Confirm printer, core and label count before quoting.", image: images["thermal-labels:applications:shipping"], imageAlt: "4x6 thermal shipping labels for parcel fulfillment", href: "/products/shipping-labels", featured: true },
    { tag: "P0 range", title: "Barcode and FNSKU Labels", text: "Matte, high-contrast labels for SKU, FNSKU, UPC, EAN and 2D code workflows.", image: images["thermal-labels:applications:barcode"], imageAlt: "Thermal barcode labels for inventory and FNSKU printing", href: "/products/barcode-labels" },
    { tag: "P0 range", title: "BPA-Free and Phenol-Free", text: "Compliance-ready options for North American, European and ESG-led packaging programs.", image: images["thermal-labels:applications:europe"], imageAlt: "Compliance-ready thermal labels for European packaging", href: "/products/bpa-free-thermal-paper" },
    { tag: "P1 range", title: "Food and Freezer Labels", text: "Water-resistant, oil-resistant and low-temperature adhesive options for food, drink and cold-chain packaging.", image: images["thermal-labels:applications:food"], imageAlt: "Food and freezer thermal labels for packaging", href: "/products/thermal-labels/blank" },
    { tag: "P1 service", title: "Custom Printed and Private Label", text: "Print logos, warning text, QR codes, barcodes and multilingual instructions with repeatable packing references.", image: images["thermal-labels:applications:packaging"], imageAlt: "Custom printed thermal labels and private-label packaging", href: "/products/thermal-labels/custom-printed" },
    { tag: "P2 range", title: "Industrial Thermal Transfer", text: "PET, PP and PI labels matched with wax-resin or resin ribbons for durable traceability.", image: images["thermal-labels:applications:asset"], imageAlt: "Durable industrial thermal transfer labels for asset tracking", href: "/products/thermal-labels/custom-printed" },
  ];

  const applications = [
    { title: "E-commerce fulfillment", text: "4x6 labels for Amazon, Shopify, eBay, Etsy and marketplace parcels. Reduce scan and reprint risk with a printer-matched roll.", image: images["thermal-labels:applications:ecommerce"], imageAlt: "E-commerce warehouse preparing thermal shipping labels", href: "/products/shipping-labels", linkLabel: "View shipping labels" },
    { title: "Amazon FBA and inventory", text: "FNSKU, SKU and barcode labels for inbound stock, inventory counts and warehouse location control.", image: images["thermal-labels:applications:amazon"], imageAlt: "Amazon FBA inventory labels prepared for warehouse use", href: "/products/barcode-labels", linkLabel: "View barcode labels" },
    { title: "3PL and overseas warehouses", text: "Fanfold and large-core programs for high-volume fulfillment where roll changes and printer downtime affect labor cost.", image: images["thermal-labels:applications:warehouse"], imageAlt: "Warehouse team using thermal labels for fulfillment", href: "/products/shipping-labels", linkLabel: "Plan a warehouse program" },
    { title: "Food, drink and takeout", text: "Labels for cups, meal boxes and food packaging where oil, moisture, condensation and adhesive safety matter.", image: images["thermal-labels:applications:food"], imageAlt: "Food packaging using thermal labels", href: "/products/thermal-labels/blank", linkLabel: "Discuss food labels" },
    { title: "Pharmacy and healthcare", text: "Short-term direct thermal labels or durable transfer labels for prescriptions, samples and controlled identification.", image: images["thermal-labels:applications:pharmacy"], imageAlt: "Pharmacy and healthcare thermal labels", href: "/products/thermal-labels/custom-printed", linkLabel: "Discuss medical labels" },
    { title: "Cross-border shipping", text: "Specification support for multilingual warning text, local carrier formats, compliance files and private-label packing.", image: images["thermal-labels:applications:crossborder"], imageAlt: "Cross-border parcel labeling and export packaging", href: "/products/thermal-labels/custom-printed", linkLabel: "Plan a custom program" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ThermalLabelsCatalogPage
        heroImage={images["thermal-labels:hero"]}
        overviewImage={images["products:thermal-labels"]}
        customImage={images["thermal-labels:applications:packaging"]}
        qualityImage={images["manufacturing:facility-line"]}
        whatsappHref={whatsappHref}
        families={families}
        applications={applications}
        sizes={labelSizes}
        faqs={faqs}
      />
    </>
  );
}
