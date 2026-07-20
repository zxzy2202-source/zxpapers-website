import type { Metadata } from "next";
import { getSlotImages } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import { paperRollSizes, labelSizes, detergentLabelSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import ProductsCatalogPage from "@/components/products/ProductsCatalogPage";
import type { CatalogFamily } from "@/components/products/ProductsCatalogPage";
import { CAN_LABELS_IMG } from "./can-labels/can-labels-data";
import { DETERGENT_LABELS_IMG } from "./detergent-labels/detergent-labels-data";
import { ncrApplicationPages } from "./ncr-applications-data";
import { ncrFormParts } from "./ncr-forms/ncr-forms-data";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls, Labels & NCR Forms | Factory-Direct Pricing | ZhixinPaper",
  description:
    "Browse 50+ SKUs: thermal paper rolls, direct thermal labels, bottle labels, and NCR forms. ISO 9001 factory. Free samples · MOQ 1 pallet · CIF worldwide. Get a quote in 24h.",
  keywords:
    "thermal paper rolls, thermal labels, shipping labels, machine ready roll labels, automatic labeling machine labels, bottle labels, NCR forms, custom printed thermal paper, thermal paper manufacturer, OEM thermal paper",
  alternates: { canonical: `${SITE.domain}/products` },
};

const ROLLS_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const LABELS_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const CAN_LABELS_IMG_FB = CAN_LABELS_IMG;
const DETERGENT_LABELS_IMG_FB = DETERGENT_LABELS_IMG;
const NCR_FORMS_IMG_FB = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80";
const HERO_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

// Keep structured data generated from the same navigation config used by the catalog.
const catalogEntries: { name: string; path: string }[] = [
  { name: "Blank Thermal Paper Rolls", path: "/products/thermal-paper-rolls/blank" },
  { name: "Custom Printed Thermal Rolls", path: "/products/thermal-paper-rolls/custom-printed" },
  { name: "Receipt Paper Rolls", path: "/products/receipt-paper-rolls" },
  { name: "Till Rolls", path: "/products/till-rolls" },
  { name: "BPA-Free Thermal Paper", path: "/products/bpa-free-thermal-paper" },
  { name: "BPS-Free Thermal Paper", path: "/products/bps-free-thermal-paper" },
  { name: "Phenol-Free Thermal Paper", path: "/products/phenol-free-thermal-paper" },
  { name: "Colored Thermal Paper", path: "/products/colored-thermal-paper" },
  ...paperRollSizes.map((size) => ({ name: `${size.label} Thermal Paper Roll`, path: `/products/thermal-rolls/${size.slug}` })),
  { name: "Blank Thermal Labels", path: "/products/thermal-labels/blank" },
  { name: "Custom Printed Thermal Labels", path: "/products/custom-printed-thermal-labels" },
  { name: "Custom Printed Direct Thermal Labels", path: "/products/thermal-labels/custom-printed" },
  ...labelSizes.map((size) => ({ name: `${size.label} Thermal Label`, path: `/products/thermal-labels/${size.slug}` })),
  { name: "Barcode & Variable-Data Labels", path: "/products/barcode-labels" },
  { name: "Product & Packaging Labels", path: "/products/product-labels" },
  { name: "Machine-Ready Roll Labels for Filling Lines", path: "/products/can-labels" },
  { name: "Blank Detergent & Household Labels", path: "/products/detergent-labels/blank" },
  { name: "Custom Printed Detergent & Household Labels", path: "/products/detergent-labels/custom-printed" },
  ...detergentLabelSizes.map((size) => ({ name: `${size.label} Detergent & Household Label`, path: `/products/detergent-labels/${size.slug}` })),
  { name: "NCR Forms & Carbonless Paper", path: "/products/ncr-forms" },
  { name: "Custom NCR Forms", path: "/products/custom-ncr-forms" },
  { name: "Delivery Note Forms", path: "/products/delivery-note-forms" },
  { name: "Continuous Computer Forms", path: "/products/continuous-computer-forms" },
  ...ncrFormParts.map((part) => ({ name: `${part.label} NCR Forms`, path: `/products/ncr-forms/${part.slug}` })),
  ...ncrApplicationPages.map((page) => ({ name: page.name, path: `/products/${page.slug}` })),
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Thermal Paper, Labels and NCR Form Products",
  description:
    "Factory catalog of thermal paper rolls, direct thermal labels, can and bottle labels, and NCR forms in blank, stock, and custom printed options.",
  url: `${SITE.domain}/products`,
  isPartOf: { "@id": `${SITE.domain}/#website` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: catalogEntries.length,
    itemListElement: catalogEntries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      url: `${SITE.domain}${entry.path}`,
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
  ],
};

const faqs = [
  {
    q: "What thermal paper and label products do you manufacture?",
    a: "We manufacture thermal paper rolls for POS, ATM, kiosk, and till applications; direct thermal shipping and barcode labels; can and bottle labels; and custom NCR business forms. Each range includes stock, blank, or custom printed options where applicable.",
  },
  {
    q: "Do you supply blank and custom printed options?",
    a: "Yes. Blank stock is available for in-house or variable-data printing. Custom production can include logos, Pantone or CMYK artwork, numbering, adhesives, die-cut shapes, and private-label packaging.",
  },
  {
    q: "What sizes are available?",
    a: "Popular stock formats include 57mm and 80mm thermal rolls, 4 x 6 inch shipping labels, standard can and bottle label dimensions, and 2-part to multi-part NCR forms. Custom widths, shapes, and form sizes can be produced to specification.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Stock sizes are available from low volume. Custom sizes, printing, adhesives, numbering, or private-label packaging typically start at 5,000 units. MOQ depends on the material and conversion process, so send the product and quantity for confirmation.",
  },
  {
    q: "Where do you ship and how fast?",
    a: "We export worldwide on FOB, CIF, or DDP terms. Stock items normally ship in 3 to 7 days, while custom production normally takes 10 to 18 days after artwork and specification approval.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const revalidate = 3600; // 1 hour: slot images change infrequently

export default async function ProductsPage() {
  const images = await getSlotImages([
    { slot: "products:hero", fallback: HERO_IMG_FB },
    { slot: "products:thermal-rolls", fallback: ROLLS_IMG_FB },
    { slot: "products:thermal-labels", fallback: LABELS_IMG_FB },
    { slot: "products:can-labels", fallback: CAN_LABELS_IMG_FB },
    { slot: "products:detergent-labels", fallback: DETERGENT_LABELS_IMG_FB },
    { slot: "products:ncr-forms", fallback: NCR_FORMS_IMG_FB },
  ]);

  const rollsImage = r2Image(images["products:thermal-rolls"]);
  const labelsImage = r2Image(images["products:thermal-labels"]);
  const canImage = r2Image(images["products:can-labels"]);
  const bottleImage = r2Image(images["products:detergent-labels"]);
  const ncrImage = r2Image(images["products:ncr-forms"]);

  const families: CatalogFamily[] = [
    {
      id: "thermal-rolls",
      navLabel: "Thermal Paper Rolls",
      title: "Thermal Paper Rolls",
      badge: "POS, ATM & Kiosk",
      description: "Receipt rolls for retail, banking, parking, kiosk, and mobile POS systems, supplied blank or printed for wholesale and distribution programs.",
      href: "/products/thermal-paper-rolls",
      image: rollsImage,
      imageAlt: "Thermal paper rolls in standard POS and receipt sizes",
      facts: ["57mm, 80mm, and custom widths", "Documented chemistry and retention routes by paper grade", "White, colored, and pre-printed rolls"],
      applications: ["Supermarket, restaurant, and retail POS receipts", "ATM, bank counter, and payment-terminal records", "Parking, ticketing, kiosk, and mobile POS systems"],
      buyers: ["POS consumable and office-supply distributors", "Retail-chain procurement and merchant-service teams", "Payment-terminal, ATM, and kiosk service companies"],
      groups: [
        {
          title: "Choose by format",
          links: [
            { label: "All Thermal Paper Rolls", href: "/products/thermal-paper-rolls", badge: "Overview" },
            { label: "Blank Thermal Rolls", href: "/products/thermal-paper-rolls/blank" },
            { label: "Custom Printed Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
            { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
          ],
        },
        {
          title: "Popular stock sizes",
          links: paperRollSizes.map((size) => ({
            label: size.label,
            href: `/products/thermal-rolls/${size.slug}`,
            note: size.markets,
            badge: size.badge,
          })),
        },
        {
          title: "Material & application",
          links: [
            { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper" },
            { label: "BPS-Free Thermal Paper", href: "/products/bps-free-thermal-paper" },
            { label: "Phenol-Free Thermal Paper", href: "/products/phenol-free-thermal-paper" },
            { label: "Colored Thermal Paper", href: "/products/colored-thermal-paper" },
            { label: "Till Rolls", href: "/products/till-rolls" },
        { label: "Custom Printed Range", href: "/products/thermal-paper-rolls/custom-printed" },
          ],
        },
      ],
    },
    {
      id: "thermal-labels",
      navLabel: "Thermal Labels",
      title: "Direct Thermal & Shipping Labels",
      badge: "Shipping, Barcode & Product",
      description: "Direct thermal labels for courier, warehouse, inventory, barcode, food, and product identification workflows in rolls or fanfold packs.",
      href: "/products/thermal-labels",
      image: labelsImage,
      imageAlt: "Direct thermal shipping and barcode labels in rolls and fanfold packs",
      facts: ["4 x 6 inch shipping labels and custom sizes", "Permanent, removable, and application-specific adhesives", "Roll, fanfold, blank, and pre-printed supply"],
      applications: ["Courier dispatch and last-mile shipping labels", "E-commerce warehouse picking, packing, and barcode workflows", "Inventory, food traceability, and product identification"],
      buyers: ["Logistics consumable and label distributors", "E-commerce fulfillment and warehouse operations", "Packaging integrators and barcode-system suppliers"],
      groups: [
        {
          title: "Choose by format",
          links: [
            { label: "All Thermal Labels", href: "/products/thermal-labels", badge: "Overview" },
            { label: "Blank Thermal Labels", href: "/products/thermal-labels/blank" },
            { label: "Custom Printed Labels", href: "/products/thermal-labels/custom-printed" },
            { label: "Linerless Labels", href: "/products/linerless-labels" },
          ],
        },
        {
          title: "Popular stock sizes",
          links: labelSizes.map((size) => ({
            label: size.label,
            href: `/products/thermal-labels/${size.slug}`,
            note: size.markets,
            badge: size.badge,
          })),
        },
        {
          title: "Choose by application",
          links: [
            { label: "Shipping Labels", href: "/products/shipping-labels" },
            { label: "Barcode Labels", href: "/products/barcode-labels" },
            { label: "Product & Packaging Labels", href: "/products/product-labels" },
            { label: "Custom Printed Range", href: "/products/custom-printed-thermal-labels" },
          ],
        },
      ],
    },
    {
      id: "can-labels",
      navLabel: "Filling Line Labels",
      title: "Machine-Ready Roll Labels for Filling Lines",
      badge: "Automatic Label Applicators",
      description: "Pressure-sensitive roll labels specified for automatic filling and labeling lines by applicator, core, roll diameter, unwind, gap, liner, sensor, speed, and container condition.",
      href: "/products/can-labels",
      image: canImage,
      imageAlt: "Machine-ready roll labels for automatic filling and labeling lines",
      facts: ["Applicator and line-speed review", "Controlled core, roll, unwind, liner, and sensor specification", "First-roll trial planning"],
      applications: ["Beverage and food filling lines", "Personal-care and household-product bottling", "Multi-SKU co-packer and OEM lines"],
      buyers: ["Filling plants and production engineers", "Co-packers and private-label manufacturers", "Packaging procurement teams and label distributors"],
      groups: [
        {
          title: "Start the line review",
          links: [
            { label: "Machine-Ready Roll Labels", href: "/products/can-labels", badge: "Overview" },
            { label: "Custom Printed Thermal Labels", href: "/products/custom-printed-thermal-labels" },
            { label: "Linerless Labels", href: "/products/linerless-labels" },
          ],
        },
        {
          title: "Related packaging programs",
          links: [
            { label: "Bottle & Household Labels", href: "/products/detergent-labels" },
            { label: "Product & Packaging Labels", href: "/products/product-labels" },
            { label: "OEM & Private Label Supply", href: "/oem" },
          ],
        },
      ],
    },
    {
      id: "bottle-labels",
      navLabel: "Detergent & Household Labels",
      title: "Detergent & Household Product Labels",
      badge: "Bottle, Formula & Process Review",
      description: "Custom printed and blank labels for detergent, cleaner, disinfectant, hand-soap, and industrial-cleaner containers, specified by bottle, formula exposure, handling, and application method.",
      href: "/products/detergent-labels",
      image: bottleImage,
      imageAlt: "Detergent and household cleaning product bottles prepared for custom labels",
      facts: ["HDPE, LDPE, PET, glass, and flexible-pack review", "Formula-contact and wet-hand test planning", "Printed, blank, manual, and machine-applied routes"],
      applications: ["Laundry, fabric-care, and dishwashing bottles", "Household cleaner, disinfectant, and trigger-spray packaging", "Hand-soap, refill-pack, and industrial-cleaner containers"],
      buyers: ["Detergent and cleaning-product brand owners", "OEM/ODM manufacturers and co-packers", "Packaging procurement, quality teams, and label distributors"],
      groups: [
        {
          title: "Choose a supply route",
          links: [
            { label: "All Detergent & Household Labels", href: "/products/detergent-labels", badge: "Overview" },
            { label: "Blank Bottle Labels", href: "/products/detergent-labels/blank" },
            { label: "Custom Printed Bottle Labels", href: "/products/detergent-labels/custom-printed" },
          ],
        },
        {
          title: "Reference label formats",
          links: detergentLabelSizes.map((size) => ({
            label: size.label,
            href: `/products/detergent-labels/${size.slug}`,
            note: size.markets,
            badge: size.badge,
          })),
        },
      ],
    },
    {
      id: "ncr-forms",
      navLabel: "NCR Forms",
      title: "NCR Forms & Business Forms",
      badge: "Carbonless Multi-Copy Forms",
      description: "Custom printed carbonless forms for invoices, receipts, delivery records, field service, public-sector documentation, and other signed multi-party workflows.",
      href: "/products/ncr-forms",
      image: ncrImage,
      imageAlt: "NCR carbonless forms and multi-copy business documents",
      facts: ["2-part to 6-part copy sets", "Numbering, perforation, books, pads, and continuous forms", "Custom copy colors, fields, terms, and packaging"],
      applications: ["Invoices, receipt books, purchase orders, and delivery notes", "Field-service, repair, and signed proof-of-service records", "Government, utility, transport, and multi-party documentation"],
      buyers: ["Commercial printers and business-form distributors", "Field-service software, equipment, and form suppliers", "Institutional procurement teams and trade wholesalers"],
      groups: [
        {
          title: "Choose by format",
          links: [
            { label: "All NCR Forms", href: "/products/ncr-forms", badge: "Overview" },
            { label: "Custom NCR Forms", href: "/products/custom-ncr-forms" },
            { label: "Receipt Books", href: "/products/ncr-receipt-books" },
            { label: "Invoice Books", href: "/products/ncr-invoice-books" },
            { label: "Delivery Note Forms", href: "/products/delivery-note-forms" },
            { label: "Continuous Computer Forms", href: "/products/continuous-computer-forms" },
          ],
        },
        {
          title: "Choose by copy count",
          links: ncrFormParts.map((part) => ({
            label: part.label,
            href: `/products/ncr-forms/${part.slug}`,
            badge: part.badge,
          })),
        },
        {
          title: "Industry applications",
          links: ncrApplicationPages.map((page) => ({
            label: page.name,
            href: `/products/${page.slug}`,
          })),
        },
      ],
    },
  ];

  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hello, I need a quote for your paper or label products. I can send the product, size, quantity, and destination.",
  )}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductsCatalogPage
        heroImage={r2Image(images["products:hero"])}
        whatsappHref={whatsappHref}
        families={families}
        faqs={faqs}
      />
    </>
  );
}
