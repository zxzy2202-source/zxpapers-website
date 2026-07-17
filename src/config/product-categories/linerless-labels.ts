import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";

const LINERLESS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const FOOD_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=82";
const RETAIL_IMAGE =
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=82";
const LOGISTICS_IMAGE =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=82";
const QUALITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";
const OEM_PACKING_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=82";
const QSR_IMAGE =
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=82";

export const linerlessLabelsCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/linerless-labels",
  categoryName: "Linerless Labels",
  alternateNames: [
    "Liner-Free Labels",
    "Direct Thermal Linerless Labels",
    "Continuous Linerless Labels",
    "OEM Linerless Label Rolls",
  ],
  audience:
    "Distributors, food-service operators, scale and POS solution providers, retailers, logistics teams and OEM private-label buyers",
  metadata: {
    title: "Linerless Labels Manufacturer | OEM & Bulk Supply",
    description:
      "Source linerless label rolls by printer, width, core, roll diameter, adhesive and application. Review samples, OEM packing and bulk supply requirements.",
    keywords: [
      "linerless labels manufacturer",
      "linerless label rolls",
      "liner-free thermal labels",
      "3 1/8 x 263 linerless labels",
      "removable linerless labels",
      "permanent linerless labels",
      "food service linerless labels",
      "OEM linerless labels",
      "bulk linerless label supplier",
    ],
  },
  hero: {
    image: {
      slot: "linerless-labels:hero",
      fallback: LINERLESS_IMAGE,
      alt: "Linerless thermal label rolls for OEM and bulk supply",
    },
    badge: "B2B linerless label catalog",
    titleBefore: "Linerless Labels for ",
    titleHighlight: "Printer-Matched Supply",
    description:
      "Start with the exact linerless-ready printer and application. Then confirm width, length basis, core, maximum roll diameter, winding, cutter, adhesive behavior, quantity and packing before quotation.",
    trustBadges: [
      "Linerless-ready equipment review",
      "Removable to permanent routes",
      "Sample approval support",
      "OEM and private-label packing",
    ],
    facts: [
      { value: "80 mm", label: "Featured width" },
      { value: "3 routes", label: "Adhesive review" },
      { value: "6 inputs", label: "Printer-fit check" },
      { value: "B2B", label: "OEM and bulk supply" },
    ],
    primaryCta: { label: "Browse Linerless Options", href: "#product-families" },
    secondaryCta: { label: "Request a Specification Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Products", href: "#product-families" },
    { label: "Size", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Selection", href: "#selection-guide" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  families: [
    {
      id: "3-1-8-x-263",
      label: "Featured specification",
      title: "3 1/8 x 263' Linerless Labels",
      description:
        "An 80 mm x 80 m nominal format reviewed against the printer, core, roll diameter, cutter, adhesive, surface and packing requirement.",
      buyerFit:
        "Best for buyers who need a complete product-detail review before sample approval or a repeat bulk order.",
      href: "/products/linerless-labels/3-1-8-x-263",
      linkLabel: "Open the 3 1/8 x 263' detail page",
      featured: true,
      image: {
        slot: "linerless-3-1-8-x-263:hero",
        fallback: LINERLESS_IMAGE,
        alt: "3 1/8 x 263 foot linerless thermal label roll",
      },
    },
    {
      id: "removable",
      label: "Temporary identification",
      title: "Removable Adhesive Programs",
      description:
        "Linerless constructions reviewed for a defined dwell time and removal expectation on the actual surface.",
      buyerFit:
        "Useful when containers, trays or totes must be relabeled or returned to service with controlled residue.",
      href: "#inquiry",
      linkLabel: "Review removable behavior",
      image: {
        slot: "linerless-labels:family-removable",
        fallback: LOGISTICS_IMAGE,
        alt: "Removable linerless labels for temporary identification",
      },
    },
    {
      id: "permanent",
      label: "Longer-dwell identification",
      title: "Semi-Permanent and Permanent",
      description:
        "Adhesive routes reviewed for the real substrate, temperature, moisture, grease, dwell and handling conditions.",
      buyerFit:
        "Useful when the label must remain attached through preparation, handling, storage or delivery.",
      href: "#inquiry",
      linkLabel: "Review holding requirements",
      image: {
        slot: "linerless-labels:family-permanent",
        fallback: FOOD_IMAGE,
        alt: "Permanent linerless labels for longer-dwell identification",
      },
    },
    {
      id: "custom-rolls",
      label: "Printer-specific build",
      title: "Custom Widths and Roll Builds",
      description:
        "Custom media geometry reviewed from the printer compartment, core, maximum OD, winding, sensing and cutter path.",
      buyerFit:
        "Useful for equipment programs that do not use the featured 80 mm nominal format.",
      href: "#inquiry",
      linkLabel: "Send a printer specification",
      image: {
        slot: "linerless-labels:family-custom",
        fallback: QUALITY_IMAGE,
        alt: "Custom width linerless label rolls for printer-specific supply",
      },
    },
    {
      id: "oem-packing",
      label: "Channel-ready supply",
      title: "OEM and Private-Label Packing",
      description:
        "Roll labels, inner packs, cartons, pallet marks and artwork versions controlled against the approved product specification.",
      buyerFit:
        "Useful for distributors, printer vendors and brands building repeat SKUs for multiple customers or markets.",
      href: "/oem",
      linkLabel: "Review OEM capabilities",
      image: {
        slot: "linerless-labels:family-oem",
        fallback: OEM_PACKING_IMAGE,
        alt: "OEM and private-label packing for linerless label rolls",
      },
    },
  ],
  sizes: [
    {
      slug: "3-1-8-x-263",
      label: "3 1/8 x 263'",
      market: "80 mm x 80 m nominal",
      badge: "Detail page",
      use: "Food service, scale, retail and variable-length identification",
    },
  ],
  applications: [
    {
      id: "prepared-food",
      title: "Prepared food and takeaway",
      description:
        "Variable-length order and item labels for containers used in kitchen, counter and delivery workflows.",
      confirm:
        "linerless-ready printer, container surface, grease, heat, condensation, dwell, removal and scan requirement",
      href: "/products/linerless-labels/3-1-8-x-263",
      linkLabel: "Review the featured specification",
      image: {
        slot: "linerless-labels:application-food",
        fallback: FOOD_IMAGE,
        alt: "Linerless labels used for prepared-food and takeaway identification",
      },
    },
    {
      id: "retail-scale",
      title: "Retail and weigh-scale workflows",
      description:
        "Continuous labels for variable product, weight, price and traceability information.",
      confirm:
        "scale or printer model, width, cutter, code size, food environment, surface and adhesive behavior",
      href: "#inquiry",
      linkLabel: "Send a scale or printer model",
      image: {
        slot: "linerless-labels:application-retail",
        fallback: RETAIL_IMAGE,
        alt: "Retail weigh-scale workflow using linerless labels",
      },
    },
    {
      id: "qsr",
      title: "QSR order routing",
      description:
        "Order, preparation and collection labels reviewed for throughput, cutting and application speed.",
      confirm:
        "printer fleet, operating speed, container temperature, dwell, removal and cleaning routine",
      href: "#inquiry",
      linkLabel: "Review a QSR label program",
      image: {
        slot: "linerless-labels:application-qsr",
        fallback: QSR_IMAGE,
        alt: "Linerless order labels in a quick-service food workflow",
      },
    },
    {
      id: "reusable-logistics",
      title: "Reusable totes and logistics",
      description:
        "Temporary or longer-dwell identification selected for returnable containers and handling workflows.",
      confirm:
        "tote surface, cleaning method, dwell, residue limit, temperature and repeated application testing",
      href: "#inquiry",
      linkLabel: "Review a reusable-tote application",
      image: {
        slot: "linerless-labels:application-logistics",
        fallback: LOGISTICS_IMAGE,
        alt: "Reusable logistics totes with temporary linerless identification",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Printer and cutter",
      description: "Confirm that the equipment is designed for linerless media before discussing the roll.",
      inputs: [
        "Exact printer or scale model",
        "Linerless media path and cutter",
        "Core and maximum roll diameter",
        "Sensing, feed and cleaning requirements",
      ],
    },
    {
      step: "02",
      title: "Roll construction",
      description: "Define the media geometry used for loading, feeding and commercial comparison.",
      inputs: [
        "Width and nominal length basis",
        "Core material and inner diameter",
        "Maximum OD and winding direction",
        "Roll label, inner pack and carton count",
      ],
    },
    {
      step: "03",
      title: "Surface and environment",
      description: "Record where the label is applied and what happens during its intended life.",
      inputs: [
        "Paper, board, film, plastic or metal",
        "Application and service temperature",
        "Moisture, condensation and grease",
        "Dwell, removal and residue expectation",
      ],
    },
    {
      step: "04",
      title: "Sample and order approval",
      description: "Approve performance and commercial inputs before bulk production.",
      inputs: [
        "Feed, cut, print and scan test",
        "Adhesion and removal result",
        "Quantity, artwork and packing",
        "Destination, documents and delivery window",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "linerless-labels:quality",
      fallback: QUALITY_IMAGE,
      alt: "Linerless label production and quality-control review",
    },
    label: "Qualification and evidence",
    title: "Approve the printer, surface and roll as one system",
    description:
      "A width and length name does not prove printer fit or adhesive performance. A useful approval record connects the actual equipment, media build, application surface, test conditions, packing and acceptance result.",
    checks: [
      {
        title: "Feed and cut test",
        description:
          "Record loading, sensing, feed, cut, residue and cleaning observations in the intended linerless-ready device.",
      },
      {
        title: "Print and scan test",
        description:
          "Approve thermal density, text, barcode or QR design and scan result using the intended settings and workflow.",
      },
      {
        title: "Adhesion and removal test",
        description:
          "Use the actual surface, preparation, temperature, moisture, dwell and removal requirement.",
      },
      {
        title: "Repeat-order control",
        description:
          "Freeze the approved material, adhesive, dimensions, roll build, artwork, packing and change-confirmation reference.",
      },
    ],
    note:
      "BPA-free, BPS-free, phenol-free, FSC, regulatory and food-contact statements are separate scopes. Confirm the exact order material, document subject, date and destination before approving or publishing a claim.",
  },
  faq: [
    {
      q: "What information is needed to confirm a linerless label roll?",
      a: "Send the exact printer or scale model, width, nominal length, core, maximum roll diameter, winding, sensing and cutter method, adhesive behavior, application surface, environment, quantity, packing and destination.",
    },
    {
      q: "Will a linerless roll fit any thermal printer with the same width?",
      a: "No. The device must support linerless media, and the core, maximum roll diameter, media path, sensing, cutter and cleaning requirements must match the proposed roll. Confirm fit from the equipment specification and a physical test where risk matters.",
    },
    {
      q: "How should removable, semi-permanent and permanent adhesive be selected?",
      a: "Choose from the actual substrate, surface condition, application temperature, service temperature, moisture, grease, dwell time and required removal behavior. Test the proposed construction on the production surface before a bulk order when failure would disrupt operations.",
    },
    {
      q: "What does 3 1/8 x 263' describe?",
      a: "It describes a nominal 3 1/8 inch or 80 mm width and 263 foot or 80 m length. It does not by itself define the core, outer diameter, winding, material build, adhesive, tolerance, printer fit or packing.",
    },
    {
      q: "Can linerless labels be reviewed for chilled or greasy containers?",
      a: "Yes, but the application temperature, condensation, grease, container material, surface preparation and dwell must be defined. The selected adhesive should be tested under representative conditions rather than approved from a general cold-use statement.",
    },
    {
      q: "Should samples be tested before a bulk order?",
      a: "Sample testing is useful when printer fit, cutting, thermal print, scanning, adhesion, removal, temperature or a new substrate creates risk. Agree the feed, cut, print, scan and application checks before testing.",
    },
    {
      q: "Can linerless rolls use OEM or private-label packing?",
      a: "Roll labels, inner packs, cartons and pallet marks can be reviewed after the product specification, artwork versions, pack quantity, destination labels and repeat-order controls are defined.",
    },
    {
      q: "How are minimum order and production timing confirmed?",
      a: "They depend on the roll construction, adhesive, artwork versions, quantity, packing and destination. Send the estimated quantity for each version and requested delivery window for an order-specific review.",
    },
  ],
  inquiry: {
    label: "B2B linerless label review",
    title: "Send the printer and application inputs",
    description:
      "A complete request lets the team identify printer-fit, adhesive, sample, packing and evidence questions before quotation.",
    checklist: [
      "Company, buyer type and exact linerless-ready printer or scale model",
      "Width, length basis, core, maximum OD, winding, sensing and cutter",
      "Surface, temperature, moisture, grease, dwell and removal requirement",
      "Quantity by version, OEM artwork, packing, destination and requested window",
    ],
    productName: "Linerless Labels",
    initialMessage:
      "Company and buyer type:\nPrinter / scale model:\nCurrent roll or media reference:\nWidth and nominal length:\nCore and maximum roll OD:\nWinding, sensing and cutting method:\nAdhesive behavior required:\nApplication surface and dwell time:\nTemperature, condensation or grease:\nPrint, barcode or QR requirement:\nEstimated quantity by version:\nOEM roll label, carton or pallet artwork:\nSample or approval requirement:\nPacking requirement:\nDestination country / port:\nRequested delivery window:\nCurrent supply problem:",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Linerless Labels", path: "/products/linerless-labels" },
  ],
  relatedPrograms: [
    { label: "3 1/8 x 263' Linerless Labels", href: "/products/linerless-labels/3-1-8-x-263" },
    { label: "Thermal Labels", href: "/products/thermal-labels" },
    { label: "Custom Printed Labels", href: "/products/thermal-labels/custom-printed" },
    { label: "OEM and Private Label", href: "/oem" },
  ],
} satisfies ProductCategoryConfig;
