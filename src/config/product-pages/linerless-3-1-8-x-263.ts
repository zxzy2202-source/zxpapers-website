import type { ProductDetailConfig } from "@/components/products/templates/product-detail-types";

const LINERLESS_PRODUCT_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const QUALITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";
const WAREHOUSE_IMAGE =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80";
const SHIPPING_LABEL_IMAGE = "/images/shipping-labels/shipping-labels-hero.webp";
const PACKING_IMAGE =
  "/uploads/images/1778755819135-456d030e-f44b-453b-86bb-69c736ef4e12-32b6c697519b48fc814b3a4712323de2.webp";

export const linerlessDetailConfig = {
  kind: "detail",
  slug: "3-1-8-x-263",
  canonicalPath: "/products/linerless-labels/3-1-8-x-263",
  productName: "3 1/8 x 263' Linerless Labels",
  categoryName: "Continuous direct thermal linerless labels",
  metadata: {
    title: "3 1/8 x 263' Linerless Labels | ZhixinPaper",
    description:
      "Review 3 1/8 x 263 ft linerless labels by printer, core, roll diameter, adhesive, application surface, packing and repeat-order requirements.",
    keywords: [
      "3 1/8 x 263 linerless labels",
      "linerless labels manufacturer",
      "OEM linerless labels",
      "private label linerless rolls",
      "80mm linerless label bulk supply",
      "linerless labels for distributors",
    ],
  },
  images: {
    hero: {
      slot: "linerless-3-1-8-x-263:hero",
      fallback: LINERLESS_PRODUCT_IMAGE,
      alt: "3 1/8 x 263 inch linerless thermal label rolls",
    },
    application: {
      slot: "linerless-3-1-8-x-263:application",
      fallback: LINERLESS_PRODUCT_IMAGE,
      alt: "Continuous linerless labels prepared for printer and surface testing",
    },
    quality: {
      slot: "linerless-3-1-8-x-263:quality",
      fallback: QUALITY_IMAGE,
      alt: "Linerless label material and production quality review",
    },
    risk: {
      slot: "linerless-3-1-8-x-263:risk",
      fallback: WAREHOUSE_IMAGE,
      alt: "Warehouse label workflow reviewed for linerless roll supply risks",
    },
    specification: {
      slot: "linerless-3-1-8-x-263:specification",
      fallback: LINERLESS_PRODUCT_IMAGE,
      alt: "Linerless label roll dimensions, core and material specification review",
    },
    workflow: {
      slot: "linerless-3-1-8-x-263:workflow",
      fallback: QUALITY_IMAGE,
      alt: "Label production line used for sample and bulk-order approval",
    },
    faq: {
      slot: "linerless-3-1-8-x-263:faq",
      fallback: PACKING_IMAGE,
      alt: "Export cartons and packing references for repeat linerless label orders",
    },
  },
  hero: {
    badge: "OEM & Bulk Supply | 80 mm x 80 m",
    title: "3 1/8 x 263' Linerless Labels for OEM & Bulk Supply",
    highlight: "OEM & Bulk Supply",
    description:
      "For distributors, importers, private-label brands and multi-site procurement teams. We review the linerless-ready printer, adhesive application, roll construction, samples, branding, packing, quantity and destination before quotation.",
    primaryCta: { label: "Request a B2B Quote", href: "#inquiry" },
    secondaryCta: { label: "Request Samples", href: "#inquiry" },
  },
  facts: [
    { icon: "approval", label: "Best-fit buyers", value: "Distributors, importers, private labels and multi-site procurement" },
    { icon: "roll", label: "OEM review", value: "Adhesive, core, print, roll labels, cartons and pallet marks" },
    { icon: "printer", label: "Qualification", value: "Printer, feed, cut, print, scan and application sample review" },
    { icon: "adhesive", label: "Order control", value: "Approved master specification for bulk and repeat orders" },
  ],
  directAnswer: {
    label: "B2B buying answer",
    question: "Are 3 1/8 x 263' linerless labels suitable for an OEM or bulk supply program?",
    answer:
      "3 1/8 x 263' linerless labels are 80 mm wide continuous direct-thermal rolls supplied without a release liner. They can be reviewed for OEM, private-label and bulk programs after the linerless-ready printer, core, maximum roll diameter, adhesive, application surface, sample scope, branding, packing, quantity and destination are confirmed.",
    checklist: [
      "Send the exact printer model and the media specification currently approved for it.",
      "Define whether 263 ft / 80 m is nominal or whether a measured length tolerance is required.",
      "Identify the container, tote, paper, film or other surface and the required removal behavior.",
      "Confirm cold, condensation, grease, dwell-time, barcode or QR, carton and destination requirements.",
    ],
  },
  supplyProgram: {
    label: "B2B supply program",
    title: "Build an approved roll specification before the bulk order",
    description:
      "The supply program connects the printer and application requirements with branding, packing, logistics and repeat-order controls. Each option is confirmed against the final specification.",
    buyers: [
      "Distributors and importers building a local linerless-label range",
      "Private-label brands requiring roll, carton or pallet identification",
      "Restaurant and retail groups standardizing media across locations",
      "Procurement teams replacing a roll or qualifying a second source",
    ],
    items: [
      {
        title: "Roll and adhesive review",
        description: "Confirm width, length basis, core, outer diameter, winding, cutter and removable, semi-permanent or permanent behavior.",
        buyerValue: "Reduces printer-fit and application failures before scale-up.",
      },
      {
        title: "OEM and private-label packing",
        description: "Review roll labels, inner packs, cartons, carton quantities, artwork versions, pallet marks and destination labels.",
        buyerValue: "Creates a channel-ready packing specification for each SKU.",
      },
      {
        title: "Sample and approval route",
        description: "Define feed, cut, print, scan, adhesion and removal checks using the intended printer and application surface.",
        buyerValue: "Gives procurement and operations a shared approval record.",
      },
      {
        title: "Bulk and repeat-order control",
        description: "Freeze the approved material, adhesive, dimensions, artwork, packing and change-confirmation reference.",
        buyerValue: "Makes repeat orders easier to compare and investigate.",
      },
    ],
    note: "Minimum order, sample scope, production timing, packing options and documentation are confirmed after the final roll specification, quantity, artwork and destination are reviewed.",
  },
  problems: [
    {
      question: "Will the roll load and cut correctly?",
      consequence: "Width alone does not confirm core fit, maximum roll diameter, winding, media sensing, cutting, feeding or residue control.",
      response: "Review the printer model, core, OD, winding direction, linerless media path, cutter and a physical feed/cut test where required.",
    },
    {
      question: "Will the label remove cleanly or stay in place?",
      consequence: "The wrong adhesive can lift early, leave residue, damage the surface or fail after longer dwell time.",
      response: "Select removable, semi-permanent or permanent behavior against the real surface, dwell time and removal expectation, then test samples.",
    },
    {
      question: "What happens under cold or condensation?",
      consequence: "Application temperature, service temperature and surface moisture can change initial tack and final bond.",
      response: "Record application and service conditions, then test the selected adhesive on the actual chilled, wet or greasy surface.",
    },
    {
      question: "Are two 80 mm x 80 m quotations equivalent?",
      consequence: "Paper basis, actual length, core, OD, adhesive, coating, packing and inspection method can differ while the size name looks identical.",
      response: "Compare complete roll, material, adhesive, packing and tolerance specifications instead of unit price or width alone.",
    },
    {
      question: "Will barcodes, QR codes and text remain usable?",
      consequence: "Thermal sensitivity, print energy, coating, cutting and application curvature can reduce contrast or scan reliability.",
      response: "Approve print samples using the buyer's printer settings, code size, content, surface and scanning workflow before production.",
    },
    {
      question: "Will repeat orders match the approved roll?",
      consequence: "Uncontrolled material, adhesive, packing or artwork changes can trigger new feed, adhesion and scanning complaints.",
      response: "Freeze the approved roll specification, material reference, sample result, packing configuration and change-confirmation process.",
    },
  ],
  specifications: [
    {
      title: "Roll and printer specification",
      description: "Confirm the media geometry and loading requirements with the printer documentation or an approved sample.",
      rows: [
        { label: "Nominal width", value: "3 1/8 in / 80 mm", note: "Final width tolerance is recorded in the approved specification." },
        { label: "Nominal length", value: "263 ft / 80 m", note: "Confirm the measurement basis and acceptable tolerance before comparing quotations." },
        { label: "Core", value: "Confirm inner diameter, core material and core width from the printer or current roll." },
        { label: "Maximum outer diameter", value: "Confirm against the printer compartment and the selected material build." },
        { label: "Winding", value: "Confirm print side, adhesive orientation and unwind direction." },
        { label: "Cutting and sensing", value: "Confirm linerless-ready cutter, media path, sensor behavior and cleaning requirements." },
      ],
    },
    {
      title: "Material and adhesive review",
      description: "Choose the adhesive and thermal construction from the real application rather than the product name alone.",
      rows: [
        { label: "Print method", value: "Direct thermal continuous linerless media" },
        { label: "Removable behavior", value: "Review for short-dwell temporary labels and the required clean-removal window." },
        { label: "Semi-permanent behavior", value: "Review when stronger holding power is required but later removal may still matter." },
        { label: "Permanent behavior", value: "Review for longer-term identification where removal is not the primary requirement." },
        { label: "Application surface", value: "Identify paper, board, plastic film, rigid plastic, metal, coated or textured surfaces." },
        { label: "Environment", value: "Record application temperature, service temperature, condensation, grease, moisture and dwell time." },
      ],
    },
    {
      title: "Approval and packing inputs",
      description: "The production reference combines sample performance with the commercial and logistics specification.",
      rows: [
        { label: "Print test", value: "Printer settings, text density, barcode or QR size, scan method and acceptance result." },
        { label: "Adhesion test", value: "Actual surface, preparation, dwell time, temperature and removal result." },
        { label: "Quantity", value: "Required quantity by roll specification, adhesive grade, artwork version and destination." },
        { label: "Packing", value: "Roll protection, inner pack, carton quantity, labels, pallet and channel requirements." },
        { label: "Destination", value: "Country, delivery point, route conditions and required shipping documents." },
        { label: "Repeat-order control", value: "Approved specification, sample reference, packing reference and change confirmation." },
      ],
    },
  ],
  applications: [
    {
      title: "Prepared-food and takeaway labels",
      description: "Continuous labels can support variable-length order, item and timing information on takeaway packaging.",
      confirm: "container material, grease, heat, condensation, dwell time, removal and code scanning",
    },
    {
      title: "Deli and weigh-scale workflows",
      description: "Variable-length print can match product information without a fixed die-cut label length.",
      confirm: "linerless-ready scale or printer, cutter, food environment, surface and adhesive behavior",
    },
    {
      title: "QSR order identification",
      description: "Labels can carry order, routing and collection information across counter and kitchen workflows.",
      confirm: "printer throughput, cutting, application speed, container temperature and removal expectation",
    },
    {
      title: "Reusable tote and temporary logistics labels",
      description: "A removable construction may support short-dwell identification where the tote must return to service.",
      confirm: "tote surface, cleaning process, dwell time, residue limit and repeated application testing",
    },
  ],
  workflow: [
    { step: "01", title: "Receive the RFQ", description: "Collect the buyer type, printer, current roll, application, quantity, packing, destination and requested delivery window." },
    { step: "02", title: "Review the application", description: "Assess the surface, temperature, moisture, grease, dwell time, removal behavior and scanning workflow." },
    { step: "03", title: "Freeze the roll specification", description: "Confirm width, length basis, core, outer diameter, winding, cutting, material and adhesive route." },
    { step: "04", title: "Review OEM packing", description: "Confirm roll labels, artwork versions, inner packs, cartons, pallet marks and destination labels." },
    { step: "05", title: "Test samples", description: "Agree feed, cut, print, scan, adhesion and removal checks using the intended equipment and surface." },
    { step: "06", title: "Approve the bulk order", description: "Record the accepted sample, order quantity, packing, documents, commercial terms and confirmed production schedule." },
    { step: "07", title: "Control repeat orders", description: "Use the approved material, artwork, packing and change-confirmation reference for the next order." },
  ],
  evidence: {
    label: "Quality and evidence boundary",
    title: "Approve the test result, not a generic compatibility claim",
    description:
      "A credible approval record identifies the printer, media specification, surface, adhesive, test conditions, packing and acceptance result. Product or market claims must match the document and material scope supplied for the order.",
    checks: [
      "Printer feed and cut result under the intended settings and operating speed",
      "Thermal print contrast and barcode or QR scan result using the intended code design",
      "Adhesion and removal result on the actual surface after the required dwell time",
      "Roll edge, blocking, carton protection and arrival-condition review",
      "Approved material, packing and change-control reference for repeat orders",
    ],
    note: "BPA-free, BPS-free, phenol-free, FSC, regulatory and food-contact statements are separate claims. Confirm the exact material, document, subject, date and destination scope before publishing or approving them for an order.",
  },
  faq: [
    {
      q: "What does 3 1/8 x 263' mean for a linerless label roll?",
      a: "It describes a nominal 3 1/8 inch (80 mm) media width and 263 foot (80 m) roll length. It does not by itself confirm core, outer diameter, material build, winding, adhesive, tolerance or printer compatibility.",
    },
    {
      q: "Will this roll fit any 80 mm thermal printer?",
      a: "No. The printer must support linerless media and its core, maximum roll diameter, media path, sensing and cutter requirements must match the approved roll. Provide the exact printer model or current roll specification for review.",
    },
    {
      q: "How do I choose removable, semi-permanent or permanent adhesive?",
      a: "Choose from the real surface, application temperature, service temperature, moisture, grease, dwell time and removal expectation. Sample testing on the actual container or tote is the most useful approval basis.",
    },
    {
      q: "Can 3 1/8 x 263' linerless labels be used on chilled containers?",
      a: "They can be reviewed for chilled applications, but the selected adhesive must be tested against the actual surface, application temperature, condensation and dwell time. A general cold-use statement is not a substitute for an application test.",
    },
    {
      q: "What information is needed for a quotation?",
      a: "Send the printer model, width, nominal length, core, maximum roll diameter, winding, cutting method, adhesive behavior, surface, temperature, print or scan requirement, quantity, packing and destination.",
    },
    {
      q: "Should we test samples before production?",
      a: "Sample testing is recommended when printer fit, cutting, thermal print, barcode or QR scanning, adhesion, removal, cold conditions or a new surface creates risk. The test scope is agreed from the application and order value.",
    },
    {
      q: "Can the roll and carton use private-label branding?",
      a: "Private-label roll and carton requirements can be reviewed after the product specification, artwork versions, pack quantity, destination labels and repeat-order controls are defined.",
    },
    {
      q: "How are repeat orders kept consistent?",
      a: "Use an approved master specification covering media, adhesive, dimensions, sample result, artwork, packing and inspection references. Any proposed change should be confirmed before the next production run.",
    },
    {
      q: "What is the minimum order for OEM or private-label linerless rolls?",
      a: "The minimum order is confirmed after the roll construction, adhesive, artwork versions, packing method and destination are reviewed. Send the estimated quantity for each version so the quotation can use the correct production and packing basis.",
    },
    {
      q: "How are sample and bulk-order timing confirmed?",
      a: "Timing depends on the final specification, sample scope, artwork, quantity, packing and destination. Include the requested delivery window in the RFQ; the feasible sample and production schedule is confirmed after review rather than published as a fixed promise.",
    },
  ],
  inquiry: {
    label: "B2B quotation request",
    title: "Request an OEM or bulk-supply review",
    description:
      "Send the buyer profile, printer, application, roll construction, adhesive behavior, branding, quantity, packing, destination and requested timing. We will review feasibility and identify the sample or approval information needed before quotation.",
    checklist: [
      "Company, buyer type and exact linerless-ready printer or scale model",
      "Core, maximum OD, winding, cutter, adhesive and current roll reference",
      "Surface, environment, dwell, removal, print and sample requirements",
      "Quantity by version, OEM artwork, packing, destination and requested window",
    ],
    initialMessage:
      "Company and buyer type (distributor / importer / brand / end user):\nPrinter / scale model:\nCurrent roll or media reference:\nWidth and nominal length: 3 1/8 in x 263 ft / 80 mm x 80 m\nCore and maximum roll OD:\nWinding, sensing and cutting method:\nAdhesive behavior required:\nApplication surface and dwell time:\nTemperature, condensation or grease:\nPrint, barcode or QR requirement:\nOEM roll label, carton or pallet artwork:\nEstimated order quantity by version:\nSample or approval requirement:\nPacking requirement:\nDestination country / port:\nRequested delivery window:\nCurrent supply problem:",
    productName: "3 1/8 x 263' linerless labels",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Linerless Labels", path: "/products/linerless-labels" },
    { name: "3 1/8 x 263' Linerless Labels", path: "/products/linerless-labels/3-1-8-x-263" },
  ],
  relatedLinks: [
    { label: "All Linerless Labels", href: "/products/linerless-labels" },
    { label: "Thermal Labels", href: "/products/thermal-labels" },
    { label: "Shipping Labels", href: "/products/shipping-labels" },
    { label: "OEM Custom Printing", href: "/oem/custom-printing" },
  ],
  relatedProducts: [
    {
      id: "custom-printed",
      label: "OEM & private label",
      title: "Custom Printed Thermal Labels",
      description: "Develop printed labels, roll identification and private-label packing from approved artwork and application requirements.",
      buyerFit: "Best for brands, distributors and multilingual packaging programs.",
      href: "/products/custom-printed-thermal-labels",
      linkLabel: "Explore custom printed labels",
      image: {
        slot: "linerless-3-1-8-x-263:related-custom",
        fallback: LINERLESS_PRODUCT_IMAGE,
        alt: "Custom printed thermal labels for OEM and private-label supply",
      },
    },
    {
      id: "thermal-labels",
      label: "Broader label range",
      title: "Thermal Labels",
      description: "Review direct-thermal and thermal-transfer labels by printer, size, adhesive, material and application.",
      buyerFit: "Best for buyers consolidating multiple label formats with one supplier.",
      href: "/products/thermal-labels",
      linkLabel: "View thermal label options",
      image: {
        slot: "linerless-3-1-8-x-263:related-thermal",
        fallback: LINERLESS_PRODUCT_IMAGE,
        alt: "Thermal label rolls for barcode, food and product identification",
      },
    },
    {
      id: "shipping-labels",
      label: "Logistics & fulfillment",
      title: "Shipping Labels",
      description: "Source printer-matched roll and fanfold labels for parcel, warehouse, 3PL and cross-border fulfillment.",
      buyerFit: "Best for logistics programs where scanning, adhesion and replenishment matter.",
      href: "/products/shipping-labels",
      linkLabel: "View shipping labels",
      image: {
        slot: "linerless-3-1-8-x-263:related-shipping",
        fallback: SHIPPING_LABEL_IMAGE,
        alt: "Shipping label rolls for warehouse and 3PL fulfillment",
      },
    },
  ],
} satisfies ProductDetailConfig;
