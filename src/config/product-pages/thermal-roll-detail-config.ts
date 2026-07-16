import type {
  ProductApplication,
  ProductDetailConfig,
  ProductSpecificationRow,
} from "@/components/products/templates/product-detail-types";
import type { SlotKey } from "@/config/imageSlots";

const THERMAL_ROLL_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const POS_IMAGE = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80";
const QUALITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";
const RETAIL_IMAGE = "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80";
const PACKING_IMAGE =
  "/uploads/images/1778755819135-456d030e-f44b-453b-86bb-69c736ef4e12-32b6c697519b48fc814b3a4712323de2.webp";

export interface ThermalRollReferencePacking {
  rollsPerBox: number;
  boxesPerPallet: number;
  rollsPerPallet: number;
  weightKg: number;
  palletDimensions: string;
  palletsPer20ft: number;
  palletsPer40ft: number;
  rollsPer20ft: number;
  rollsPer40ft: number;
}

interface RelatedThermalRoll {
  id: string;
  title: string;
  description: string;
  buyerFit: string;
  href: string;
}

export interface ThermalRollDetailInput {
  slug: string;
  canonicalPath: `/products/thermal-rolls/${string}`;
  sizeLabel: string;
  productName: string;
  badge: string;
  metadataTitle: string;
  metadataDescription: string;
  keywords: string[];
  heroSlot: SlotKey;
  heroDescription: string;
  directAnswer: string;
  buyerFit: string;
  markets: string[];
  rollSpecification: ProductSpecificationRow[];
  applications: ProductApplication[];
  applicationImage?: string;
  referencePacking: ThermalRollReferencePacking;
  relatedSizes: [RelatedThermalRoll, RelatedThermalRoll];
}

const formatNumber = (value: number) => value.toLocaleString("en-US");

export function createThermalRollDetailConfig(
  input: ThermalRollDetailInput,
): ProductDetailConfig {
  const canonicalPath = input.canonicalPath;
  const packing = input.referencePacking;

  return {
    kind: "detail",
    slug: input.slug,
    canonicalPath,
    productName: input.productName,
    categoryName: "Direct thermal receipt paper rolls",
    metadata: {
      title: input.metadataTitle,
      description: input.metadataDescription,
      keywords: input.keywords,
    },
    images: {
      hero: {
        slot: input.heroSlot,
        fallback: THERMAL_ROLL_IMAGE,
        alt: `${input.sizeLabel} thermal paper rolls prepared for wholesale supply`,
      },
      application: {
        slot: "thermal-rolls:detail-application",
        fallback: input.applicationImage ?? POS_IMAGE,
        alt: `${input.sizeLabel} receipt roll application and printer qualification`,
      },
      quality: {
        slot: "thermal-rolls:detail-quality",
        fallback: QUALITY_IMAGE,
        alt: "Thermal paper production and roll quality review",
      },
      risk: {
        slot: "thermal-rolls:detail-risk",
        fallback: RETAIL_IMAGE,
        alt: "Receipt printing workflow reviewed for paper roll supply risks",
      },
      specification: {
        slot: "thermal-rolls:detail-specification",
        fallback: THERMAL_ROLL_IMAGE,
        alt: `${input.sizeLabel} roll width diameter core and length specification review`,
      },
      workflow: {
        slot: "thermal-rolls:detail-workflow",
        fallback: QUALITY_IMAGE,
        alt: "Thermal paper sampling production and repeat-order approval workflow",
      },
      faq: {
        slot: "thermal-rolls:detail-faq",
        fallback: PACKING_IMAGE,
        alt: "Export cartons and pallet packing for thermal paper roll orders",
      },
    },
    hero: {
      badge: input.badge,
      title: `${input.productName} for Wholesale & OEM Supply`,
      highlight: "Wholesale & OEM Supply",
      description: input.heroDescription,
      primaryCta: { label: "Request a B2B Quote", href: "#inquiry" },
      secondaryCta: { label: "Request Samples", href: "#inquiry" },
    },
    facts: [
      { icon: "roll", label: "Nominal format", value: input.sizeLabel },
      { icon: "printer", label: "Printer qualification", value: "Model, width, core, maximum OD, feed and cutting review" },
      { icon: "approval", label: "Buyer fit", value: input.buyerFit },
      { icon: "adhesive", label: "Order control", value: "Approved roll, packing and repeat-order specification" },
    ],
    directAnswer: {
      label: "B2B buying answer",
      question: `Is ${input.sizeLabel} the correct thermal paper roll for my procurement program?`,
      answer: input.directAnswer,
      checklist: [
        "Send the exact printer or terminal model and its media specification.",
        "Confirm width, maximum outer diameter, core inner diameter and winding requirement.",
        "Define paper basis, nominal or measured roll length, print-life requirement and storage conditions.",
        "Provide quantity, carton preference, private-label artwork, destination and requested delivery window.",
      ],
    },
    supplyProgram: {
      label: "B2B supply program",
      title: "Approve the roll specification before comparing bulk quotations",
      description:
        "A repeatable supply program connects printer fit and paper performance with carton packing, private-label requirements, logistics and change control. Commercial terms are confirmed against the final specification.",
      buyers: [
        "Distributors and importers building a receipt-paper range",
        "Private-label brands requiring roll, carton and pallet identification",
        "Retail, hospitality and service groups standardizing media across locations",
        "Procurement teams qualifying an alternative or second source",
      ],
      items: [
        {
          title: "Printer and roll review",
          description: "Confirm printer model, width, outer diameter, core, winding, paper basis, length basis and cutting or feeding requirements.",
          buyerValue: "Reduces loading, feeding and premature roll-change problems before scale-up.",
        },
        {
          title: "Paper and print review",
          description: "Define base paper, thermal sensitivity, caliper, print density, storage and any documented chemical or regulatory requirement.",
          buyerValue: "Keeps print performance and published claims tied to the selected material.",
        },
        {
          title: "OEM and export packing",
          description: "Review roll wrapping, labels, carton quantity, artwork versions, pallet marks, moisture protection and destination labels.",
          buyerValue: "Creates a channel-ready packing reference for each SKU and market.",
        },
        {
          title: "Bulk and repeat-order control",
          description: "Freeze the approved material, dimensions, length basis, core, winding, artwork, packing and change-confirmation reference.",
          buyerValue: "Makes repeat deliveries easier to compare, receive and investigate.",
        },
      ],
      note: "Minimum order, sample scope, production timing, packing options and documentation are confirmed after the final roll specification, quantity, artwork and destination are reviewed.",
    },
    problems: [
      {
        question: "Will the roll load and feed correctly?",
        consequence: "A matching width does not prove that the outer diameter, core, winding, paper thickness or printer compartment is compatible.",
        response: "Review the exact printer model and current roll, then confirm width, core ID, maximum OD, winding and feed or cutting requirements.",
      },
      {
        question: "Are two quotations based on the same roll length?",
        consequence: "Rolls with the same outside dimensions can contain different lengths because paper basis, caliper, core and measurement method differ.",
        response: "Record the paper basis, core, nominal or measured length, tolerance and verification method in the approved specification.",
      },
      {
        question: "Will the print remain readable for the required period?",
        consequence: "Heat, light, plasticizers, oils, moisture and storage conditions can affect thermal image stability.",
        response: "Define the real retention and storage requirement, select the material accordingly and confirm any performance statement against supporting evidence.",
      },
      {
        question: "Does the material meet the buyer's chemical policy?",
        consequence: "BPA-free, BPS-free, phenol-free and other claims are not interchangeable and may apply only to a specific paper grade or document scope.",
        response: "Name the required statement and destination, then verify the exact material code, issuer, subject, date and scope before approval.",
      },
      {
        question: "Will the reference packing work for this order?",
        consequence: "Carton count, pallet height and container loading change with roll build, wrapping, pallet standard and route constraints.",
        response: "Use the published figures as a reference packing plan and confirm the final carton, pallet and loading calculation with the approved roll.",
      },
      {
        question: "Will repeat orders match the approved shipment?",
        consequence: "Uncontrolled paper, core, length, winding, carton or artwork changes can create printer and receiving complaints.",
        response: "Freeze an approved master specification and require confirmation before a material, dimension, artwork or packing change.",
      },
    ],
    specifications: [
      {
        title: "Roll and printer specification",
        description: "Confirm these values against the printer manual, current roll or an approved physical sample.",
        rows: input.rollSpecification,
      },
      {
        title: "Reference packing and loading plan",
        description: "These legacy planning figures are retained for initial logistics discussion and require confirmation against the final roll, carton and pallet standard.",
        rows: [
          { label: "Reference carton", value: `${formatNumber(packing.rollsPerBox)} rolls per box` },
          { label: "Reference pallet", value: `${formatNumber(packing.boxesPerPallet)} boxes / ${formatNumber(packing.rollsPerPallet)} rolls` },
          { label: "Reference pallet weight", value: `${formatNumber(packing.weightKg)} kg`, note: "Confirm net/gross basis and the final packing materials." },
          { label: "Reference pallet dimensions", value: packing.palletDimensions },
          { label: "Reference 20 ft loading", value: `${formatNumber(packing.palletsPer20ft)} pallets / ${formatNumber(packing.rollsPer20ft)} rolls` },
          { label: "Reference 40 ft loading", value: `${formatNumber(packing.palletsPer40ft)} pallets / ${formatNumber(packing.rollsPer40ft)} rolls` },
        ],
      },
      {
        title: "Commercial and approval inputs",
        description: "A comparable quotation needs the same material, packing and delivery basis.",
        rows: [
          { label: "Material and coating", value: "Confirm the direct thermal paper grade and the exact scope of any chemical or regulatory statement." },
          { label: "Sample approval", value: "Confirm loading, feeding, cutting, print density and receipt handling in the intended device." },
          { label: "Quantity", value: "Required quantity by size, paper grade, artwork version and destination." },
          { label: "Packing", value: "Roll protection, carton quantity, labels, pallet standard and moisture protection." },
          { label: "Destination", value: "Country, port or delivery point, shipping terms and required documents." },
          { label: "MOQ and timing", value: "Confirmed after specification, quantity, artwork, packing and destination review." },
        ],
      },
    ],
    applications: input.applications,
    workflow: [
      { step: "01", title: "Receive the RFQ", description: "Collect buyer type, printer model, current roll, quantity, packing, destination and requested delivery window." },
      { step: "02", title: "Qualify the printer", description: "Review width, core, maximum outer diameter, winding, feed, cutter and current media reference." },
      { step: "03", title: "Freeze the paper specification", description: "Confirm paper basis, thermal response, caliper, length basis, tolerance and required document scope." },
      { step: "04", title: "Review OEM packing", description: "Confirm wrapping, roll labels, artwork versions, cartons, pallet marks and moisture protection." },
      { step: "05", title: "Test samples", description: "Agree loading, feeding, cutting, print-density and handling checks using the intended printer." },
      { step: "06", title: "Approve the bulk order", description: "Record the accepted sample, quantity, packing, documents, commercial terms and confirmed schedule." },
      { step: "07", title: "Control repeat orders", description: "Use the approved material, dimensions, artwork, packing and change-confirmation reference for replenishment." },
    ],
    evidence: {
      label: "Quality and evidence boundary",
      title: "Approve the selected paper grade and test result, not a generic claim",
      description:
        "A credible approval record identifies the printer, roll construction, paper grade, test settings, packing and acceptance result. Product, chemical, regulatory and certification claims must match the exact material and document supplied for the order.",
      checks: [
        "Width, core, outer diameter, winding and feed result in the intended printer",
        "Paper basis, caliper and measured or nominal length verification method",
        "Thermal print density and receipt handling under the intended settings",
        "Roll edge, dust, carton protection, pallet condition and arrival review",
        "Approved material, artwork, packing and change-control reference for repeat orders",
      ],
      note: "BPA-free, BPS-free, phenol-free, FSC, ISO, food-contact and regulatory statements are separate evidence scopes. Confirm the exact material, document, subject, date and destination requirement before publishing or approving a claim.",
    },
    faq: [
      {
        q: `What does ${input.sizeLabel} describe?`,
        a: `It describes the nominal roll width and outside diameter. It does not by itself confirm core, paper basis, actual length, winding, thermal grade, tolerance or printer compatibility.`,
      },
      {
        q: `Will ${input.sizeLabel} fit every printer that accepts the same width?`,
        a: "No. Confirm the printer model, maximum roll diameter, core inner diameter, media path, winding and cutter or feed requirements before ordering.",
      },
      {
        q: "Why can rolls with the same size have different paper lengths?",
        a: "Paper basis, caliper, core diameter, winding and the length measurement method affect how much paper fits within the same outside diameter. Compare the complete roll construction, not the size name alone.",
      },
      {
        q: "What information is needed for a quotation?",
        a: "Send the printer model, current roll or specification, width, outside diameter, core, winding, paper basis, required length, quantity, packing, destination and requested delivery window.",
      },
      {
        q: "Can the rolls and cartons use private-label branding?",
        a: "Private-label roll wrapping, labels, cartons and pallet marks can be reviewed after the specification, artwork versions, pack quantity and destination requirements are defined.",
      },
      {
        q: "Should we test samples before bulk production?",
        a: "Sample testing is recommended for a new printer, paper grade, roll construction or supplier. Agree loading, feed, cutting, print density and handling checks before production approval.",
      },
      {
        q: "Is the published pallet and container quantity guaranteed?",
        a: "No. It is a reference packing plan. Final quantities depend on the approved roll build, carton protection, pallet dimensions, weight limits and shipping route.",
      },
      {
        q: "How is the minimum order confirmed?",
        a: "The minimum order depends on the paper grade, size, core, artwork versions, packing and destination. Send the estimated quantity so the production and packing basis can be reviewed.",
      },
      {
        q: "How are production and delivery timing confirmed?",
        a: "Timing depends on the approved specification, sample scope, artwork, quantity, packing and destination. Include the required delivery window in the RFQ for a feasible schedule review.",
      },
      {
        q: "How are repeat orders kept consistent?",
        a: "Use an approved master specification covering paper, dimensions, length basis, core, winding, artwork, packing and inspection references. Confirm any proposed change before production.",
      },
    ],
    inquiry: {
      label: "B2B quotation request",
      title: `Request a ${input.sizeLabel} supply review`,
      description:
        "Send the printer, roll construction, paper requirement, quantity, private-label packing and destination. We will identify missing qualification information before quotation.",
      checklist: [
        "Company, buyer type, printer or terminal model and current roll reference",
        "Width, outer diameter, core, winding, paper basis and required length",
        "Print, storage, document, sample and private-label requirements",
        "Quantity by version, packing, destination and requested delivery window",
      ],
      initialMessage:
        `Company and buyer type (distributor / importer / brand / end user):\nPrinter or terminal model:\nCurrent roll or media reference:\nRequested size: ${input.sizeLabel}\nCore inner diameter and winding:\nPaper basis and required roll length:\nPrint or storage requirement:\nRequired chemical, regulatory or certification document:\nEstimated order quantity:\nOEM roll, carton or pallet artwork:\nSample or approval requirement:\nPacking requirement:\nDestination country / port:\nRequested delivery window:\nCurrent supply problem:`,
      productName: input.productName,
    },
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: "Thermal Paper Rolls", path: "/products/thermal-paper-rolls" },
      { name: input.productName, path: canonicalPath },
    ],
    relatedLinks: [
      { label: "All Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
      { label: "Blank Thermal Rolls", href: "/products/thermal-paper-rolls/blank" },
      { label: "Custom Printed Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
      { label: "OEM Packaging", href: "/oem/packaging" },
    ],
    relatedProducts: [
      ...input.relatedSizes.map((item) => ({
        ...item,
        label: "Adjacent roll size",
        linkLabel: `Review ${item.title}`,
        image: {
          slot: "thermal-rolls:hero" as const,
          fallback: THERMAL_ROLL_IMAGE,
          alt: `${item.title} thermal paper rolls for wholesale supply`,
        },
      })),
      {
        id: "custom-printed-rolls",
        label: "OEM and private label",
        title: "Custom Printed Thermal Rolls",
        description: "Review back printing, roll wrapping, carton artwork and pallet identification against the approved roll specification.",
        buyerFit: "Best for distributors, retail groups and branded receipt programs.",
        href: "/products/thermal-paper-rolls/custom-printed",
        linkLabel: "Explore custom printed rolls",
        image: {
          slot: "thermal-paper-rolls:custom-hero",
          fallback: THERMAL_ROLL_IMAGE,
          alt: "Custom printed thermal paper rolls with private-label packing",
        },
      },
    ],
  };
}
