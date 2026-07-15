import type { Metadata } from "next";
import { Printer, RefreshCcw, ScanLine, ShieldAlert } from "lucide-react";
import ShippingLabelsDetailPage, {
  type ShippingLabelApplication,
  type ShippingLabelCompatibilityRow,
  type ShippingLabelFailureRisk,
  type ShippingLabelFaq,
  type ShippingLabelFormat,
  type ShippingLabelSpecificationGroup,
  type ShippingLabelWorkflowStep,
} from "@/components/products/ShippingLabelsDetailPage";
import { SITE } from "@/config/siteData";
import { getSlotImages } from "@/lib/imageSlotUtils";

const PAGE_DESCRIPTION =
  "Bulk direct thermal shipping labels for 3PL and warehouse operations, including 4x6 rolls and fanfold, printer matching, adhesive selection, pallet packing, samples, and repeat-order control.";

const SHIPPING_LABELS_IMAGE = "/images/shipping-labels/shipping-labels-hero.webp";
const FACTORY_LINE_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";

export const metadata: Metadata = {
  title: "4x6 Shipping Labels for 3PL and Warehouses | Rolls and Fanfold",
  description: PAGE_DESCRIPTION,
  keywords:
    "4x6 shipping labels bulk, direct thermal shipping labels, fanfold shipping labels, shipping label rolls, 3PL shipping labels, warehouse shipping labels, thermal printer compatible labels, wholesale shipping labels",
  alternates: { canonical: `${SITE.domain}/products/shipping-labels` },
  openGraph: {
    title: "4x6 Shipping Labels for 3PL and Warehouses | ZhixinPaper",
    description:
      "Printer-matched 4x6 rolls and fanfold labels for high-volume fulfillment, with adhesive, packing and repeat-SKU control.",
    url: `${SITE.domain}/products/shipping-labels`,
    type: "website",
    images: [
      {
        url: `${SITE.domain}/og-default.png`,
        width: 1200,
        height: 630,
        alt: "Bulk 4x6 shipping labels for 3PL and warehouse operations",
      },
    ],
  },
};

const failureRisks: ShippingLabelFailureRisk[] = [
  {
    title: "Barcode will not scan",
    symptom: "Operators reprint labels or key tracking numbers by hand.",
    cause: "Low image contrast, incorrect print density, coating mismatch or poor barcode quiet zones.",
    control: "Approve a printer-matched sample and verify the live carrier barcode before the bulk run.",
    icon: ScanLine,
  },
  {
    title: "Labels jam or skip",
    symptom: "The printer misses labels, pauses the line or feeds two labels at once.",
    cause: "Wrong gap, sensor method, core, roll diameter, perforation or winding tension.",
    control: "Confirm printer model, sensing method, gap, core, outer diameter and unwind direction.",
    icon: Printer,
  },
  {
    title: "Labels lift from parcels",
    symptom: "Corners rise or the label detaches during sorting and final-mile handling.",
    cause: "The adhesive does not match recycled cartons, rough corrugated board, poly mailers or temperature.",
    control: "Test permanent, high-tack or all-temperature adhesive on the real parcel surface.",
    icon: ShieldAlert,
  },
  {
    title: "Teams change media too often",
    symptom: "Packing stations stop repeatedly to replace rolls or fanfold stacks.",
    cause: "Label count, core and supply format were chosen without daily throughput data.",
    control: "Size roll capacity or fanfold stack count from labels per shift and available printer space.",
    icon: RefreshCcw,
  },
];

const compatibilityRows: ShippingLabelCompatibilityRow[] = [
  {
    printer: "Zebra desktop",
    commonModels: "ZD220, ZD230, ZD420, GK420d",
    confirm: "4-inch media width, 1-inch core, outer diameter, gap sensing and DPI",
  },
  {
    printer: "Zebra industrial",
    commonModels: "ZT230, ZT411, ZT510",
    confirm: "3-inch core, large roll diameter, winding direction, speed and sensor setup",
  },
  {
    printer: "Rollo and Munbyn",
    commonModels: "Desktop 4x6 direct thermal",
    confirm: "Fanfold or roll feed, label width, gap, perforation and driver size",
  },
  {
    printer: "Dymo",
    commonModels: "4XL and 5XL workflows",
    confirm: "Model-specific media path, label dimensions and compatible supply format",
  },
  {
    printer: "Generic industrial",
    commonModels: "203, 300 or 600 DPI direct thermal",
    confirm: "Maximum width, core, roll diameter, sensing method, speed and image density",
  },
];

const specificationGroups: ShippingLabelSpecificationGroup[] = [
  {
    title: "Label geometry",
    items: [
      { label: "Standard size", value: "4 x 6 inch / 100 x 150 mm" },
      { label: "Die cut", value: "Width, height, corner radius and tolerance confirmed" },
      { label: "Feed control", value: "Gap, perforation and black-mark option" },
    ],
  },
  {
    title: "Printer fit",
    items: [
      { label: "Printer", value: "Brand, model and 203 / 300 / 600 DPI" },
      { label: "Roll hardware", value: "Core, maximum outer diameter and unwind direction" },
      { label: "Sensing", value: "Gap, transmissive or black-mark sensor" },
    ],
  },
  {
    title: "Face stock",
    items: [
      { label: "Print method", value: "Direct thermal, no ribbon required" },
      { label: "Coating", value: "Standard or top-coated by friction and moisture exposure" },
      { label: "Compliance", value: "BPA-free standard; phenol-free option on request" },
    ],
  },
  {
    title: "Adhesive",
    items: [
      { label: "Standard", value: "Permanent acrylic for common cartons and mailers" },
      { label: "Difficult surfaces", value: "High-tack for recycled or uneven corrugated board" },
      { label: "Temperature", value: "All-temperature or freezer adhesive for cold workflows" },
    ],
  },
  {
    title: "Supply format",
    items: [
      { label: "Rolls", value: "Labels per roll, rolls per carton and cartons per pallet" },
      { label: "Fanfold", value: "Labels per stack, stacks per carton and stack direction" },
      { label: "Packing", value: "Neutral or private-label carton and pallet marks" },
    ],
  },
  {
    title: "Commercial brief",
    items: [
      { label: "Order", value: "Sample quantity, initial volume and repeat forecast" },
      { label: "Delivery", value: "Destination and EXW, FOB, CIF or DDP term" },
      { label: "Control", value: "Approved SKU, batch reference and peak-season plan" },
    ],
  },
];

const workflowSteps: ShippingLabelWorkflowStep[] = [
  {
    name: "Send printer and label details",
    description: "Share the model, size, format, core, diameter, sensing method, surface and expected volume.",
  },
  {
    name: "Approve sample and packing specification",
    description: "Confirm print response, feeding, adhesion, label count, carton data and pallet plan.",
  },
  {
    name: "Verify the first production batch",
    description: "Check barcode contrast, die-cut position, winding, quantity and batch reference before release.",
  },
  {
    name: "Reorder by the approved SKU",
    description: "Reuse the controlled specification and batch reference for stable peak-season replenishment.",
  },
];

const qualityControls = [
  "Barcode contrast and print-density check on the confirmed printer class",
  "Die-cut position, label gap, perforation and sensing-mark verification",
  "Adhesive coat and peel test on the buyer's target parcel surface",
  "Roll tension, winding direction, edge alignment and fanfold stacking check",
  "Core, label count, carton count and pallet-mark verification",
  "Batch reference retained for repeat-order comparison",
];

const faqs: ShippingLabelFaq[] = [
  {
    question: "What is the standard size for a shipping label?",
    answer:
      "The most common parcel format is 4 x 6 inch, approximately 100 x 150 mm. Confirm the exact driver size and printer media width before ordering because some workflows use a true 100 x 150 mm metric die.",
  },
  {
    question: "Should a 3PL use shipping-label rolls or fanfold labels?",
    answer:
      "Use rolls when the printer has the correct spindle and roll capacity. Use fanfold when the station needs a larger continuous supply, has no roll holder or benefits from fewer media changes. The printer path and labels per shift decide the better format.",
  },
  {
    question: "How do I confirm compatibility with Zebra, Rollo, Munbyn or Dymo?",
    answer:
      "Send the exact printer model, DPI, maximum media width, core, outer diameter, sensing method and preferred roll or fanfold format. Compatibility should be approved from those specifications and a print sample, not from brand name alone.",
  },
  {
    question: "Do direct thermal shipping labels need a ribbon?",
    answer:
      "No. Direct thermal face stock darkens under the printer's heat and requires no ink, toner or ribbon. Thermal transfer is better only when the label needs longer image life or resistance to demanding outdoor, chemical or abrasion exposure.",
  },
  {
    question: "Which adhesive works on cartons and poly mailers?",
    answer:
      "Permanent acrylic works for many clean standard surfaces. Recycled corrugated board, rough cartons and low-energy plastics may need high-tack adhesive. Temperature changes or cold storage may require all-temperature or freezer adhesive. Test the real parcel surface before a bulk order.",
  },
  {
    question: "Why do shipping-label barcodes sometimes fail to scan?",
    answer:
      "Common causes include weak thermal coating response, incorrect print density, dirty printheads, barcode scaling, insufficient quiet zones, wrinkling or abrasion. Approve the sample on the production printer and scan the live carrier barcode before release.",
  },
  {
    question: "How many labels can be supplied per roll or fanfold stack?",
    answer:
      "Counts depend on label size, core, maximum roll diameter, printer space and required stack height. Common programs use 250, 500 or 1,000 labels, but high-volume industrial formats should be specified from the installed equipment and labels per shift.",
  },
  {
    question: "Can I test shipping labels before a pallet order?",
    answer:
      "Yes. Provide the printer and application details so the sample uses the intended size, coating, adhesive, core and format. Test feeding, barcode output and adhesion on the real parcel before approving bulk production.",
  },
  {
    question: "What are the MOQ and lead time for bulk shipping labels?",
    answer:
      "Stock specifications can start at lower volumes. Custom construction, packing or private-label programs depend on the approved specification and production quantity. Send the initial order and repeat forecast for an accurate MOQ and lead-time quotation.",
  },
  {
    question: "How do repeat orders stay consistent?",
    answer:
      "The approved specification records face stock, coating, adhesive, die, gap, core, winding, label count, carton data and pallet mark. Reorders reference the same SKU and batch-control record, with the first production batch checked against the approval.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Shipping Labels",
      item: `${SITE.domain}/products/shipping-labels`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to set up a repeat shipping-label supply program",
  description:
    "A four-step process for confirming printer fit, approving the label and packing specification, verifying production and reordering a controlled shipping-label SKU.",
  step: workflowSteps.map(({ name, description }, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name,
    text: description,
  })),
};

export default async function ShippingLabelsPage() {
  const images = await getSlotImages([
    { slot: "shipping-labels:hero", fallback: SHIPPING_LABELS_IMAGE },
    {
      slot: "shipping-labels:overview",
      fallback: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=1200&q=80",
    },
    {
      slot: "shipping-labels:failure-risks",
      fallback: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80",
    },
    {
      slot: "shipping-labels:rolls",
      fallback: SHIPPING_LABELS_IMAGE,
    },
    {
      slot: "shipping-labels:fanfold",
      fallback: SHIPPING_LABELS_IMAGE,
    },
    {
      slot: "shipping-labels:applications",
      fallback: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
    },
    { slot: "shipping-labels:quality-control", fallback: FACTORY_LINE_IMAGE },
    {
      slot: "shipping-labels:packing",
      fallback:
        "/uploads/images/1778755819135-456d030e-f44b-453b-86bb-69c736ef4e12-32b6c697519b48fc814b3a4712323de2.webp",
    },
    {
      slot: "thermal-labels:applications:ecommerce",
      fallback: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=900&q=80",
    },
    {
      slot: "thermal-labels:applications:warehouse",
      fallback: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80",
    },
    {
      slot: "thermal-labels:applications:shipping",
      fallback:
        "/uploads/images/1778749791640-3b5c725a-937d-48a1-bdad-b0331d9c9dca-image.webp",
    },
  ]);

  const formats: ShippingLabelFormat[] = [
    {
      title: "Shipping label rolls",
      bestFor: "Desktop and industrial printers with spindle support",
      description:
        "Compact, controlled media supply with a core and outer diameter matched to the installed printer.",
      checks: ["1-inch or 3-inch core", "Maximum roll diameter", "Labels per roll", "Unwind direction"],
      image: images["shipping-labels:rolls"],
      imageAlt: "Direct thermal shipping-label rolls for warehouse printers",
      objectPosition: "34% center",
    },
    {
      title: "Fanfold shipping labels",
      bestFor: "High-throughput stations and printers without a roll holder",
      description:
        "Z-fold stacks provide a larger continuous supply and can reduce media changes at busy packing stations.",
      checks: ["Labels per stack", "Fold direction", "Gap and perforation", "Feed path and stack space"],
      image: images["shipping-labels:fanfold"],
      imageAlt: "Fanfold 4x6 shipping labels for high-volume fulfillment",
      objectPosition: "88% center",
    },
  ];

  const applications: ShippingLabelApplication[] = [
    {
      title: "3PL packing stations",
      description: "Standardize labels across multiple customers and carrier workflows.",
      decision: "Confirm printer fleet, labels per shift and carton or poly-mailer surfaces.",
      image: images["shipping-labels:applications"],
      imageAlt: "3PL packing station using direct thermal shipping labels",
    },
    {
      title: "Overseas warehouse replenishment",
      description: "Hold a repeatable SKU for daily outbound parcels and peak-season demand.",
      decision: "Confirm pallet quantity, local buffer stock and reorder trigger.",
      image: images["thermal-labels:applications:warehouse"],
      imageAlt: "Overseas warehouse shipping-label replenishment",
    },
    {
      title: "Marketplace fulfillment",
      description: "Print carrier and marketplace labels with stable barcode contrast.",
      decision: "Confirm driver size, barcode scaling, DPI and live scan result.",
      image: images["thermal-labels:applications:ecommerce"],
      imageAlt: "Marketplace fulfillment parcel with 4x6 shipping label",
    },
    {
      title: "Courier sorting and consolidation",
      description: "Keep labels attached and readable through handling and route transfers.",
      decision: "Confirm parcel surface, friction, moisture and storage temperature.",
      image: images["thermal-labels:applications:shipping"],
      imageAlt: "Courier parcel sorting with readable shipping labels",
    },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Direct Thermal Shipping Labels",
    description: PAGE_DESCRIPTION,
    url: `${SITE.domain}/products/shipping-labels`,
    image: images["shipping-labels:hero"].startsWith("/")
      ? `${SITE.domain}${images["shipping-labels:hero"]}`
      : images["shipping-labels:hero"],
    brand: { "@type": "Brand", name: "ZhixinPaper" },
    manufacturer: { "@type": "Organization", name: "Xi'an Zhi Xin Paper Co., Ltd." },
    category: "Direct thermal shipping labels",
    additionalProperty: specificationGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "PropertyValue",
        name: `${group.title}: ${item.label}`,
        value: item.value,
      })),
    ),
  };

  const whatsappMessage =
    "Hello, I need bulk shipping labels. Printer model: __. Label size: __. Roll or fanfold: __. Core / roll diameter / label count: __. Parcel surface and temperature: __. Monthly volume: __. Destination: __.";
  const whatsappUrl = `https://wa.me/8618092117618?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <ShippingLabelsDetailPage
        heroImage={images["shipping-labels:hero"]}
        overviewImage={images["shipping-labels:overview"]}
        failureRisksImage={images["shipping-labels:failure-risks"]}
        qualityControlImage={images["shipping-labels:quality-control"]}
        packingImage={images["shipping-labels:packing"]}
        failureRisks={failureRisks}
        formats={formats}
        compatibilityRows={compatibilityRows}
        specificationGroups={specificationGroups}
        applications={applications}
        workflowSteps={workflowSteps}
        qualityControls={qualityControls}
        faqs={faqs}
        whatsappUrl={whatsappUrl}
      />
    </>
  );
}
