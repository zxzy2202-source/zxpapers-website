import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { paperRollSizes } from "@/config/navigation";

const ROLLS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const RETAIL_IMAGE =
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=82";
const HOSPITALITY_IMAGE =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=82";
const MOBILE_IMAGE =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=82";
const BANKING_IMAGE =
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=82";
const HEALTHCARE_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=82";
const DOCUMENT_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=82";
const OEM_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=82";
const QUALITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";

const sizeUses: Record<string, string> = {
  "80x80mm": "Retail, supermarket, hospitality and standard POS receipt printers",
  "57x50mm": "Mobile POS, card terminals and compact receipt printers",
  "80x70mm": "Standard-width POS printers with a smaller roll holder",
  "110x80mm": "Wide receipts, kiosks, statements and specialist terminals",
  "57x40mm": "Portable payment, delivery and handheld receipt devices",
  "57x30mm": "Ultra-compact card, taxi and portable receipt printers",
};

export const bpaFreeThermalPaperCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/bpa-free-thermal-paper",
  categoryName: "BPA-Free Thermal Paper",
  alternateNames: [
    "BPA-Free Thermal Paper Rolls",
    "BPA-Free Receipt Paper",
    "BPA-Free POS Paper",
    "BPA-Free Till Rolls",
    "Bisphenol A Free Thermal Paper",
  ],
  audience:
    "Retail chains, restaurants, payment-service providers, terminal distributors, banks, healthcare and institutional procurement teams, wholesalers and OEM buyers that need a defined BPA claim and matching product evidence",
  metadata: {
    title: "BPA-Free Thermal Paper Manufacturer | Receipt Rolls",
    description:
      "Source BPA-free thermal paper rolls by claim scope, test report, paper grade, printer, roll geometry, retention need, packing and batch control.",
    keywords: [
      "BPA free thermal paper manufacturer",
      "BPA free thermal paper rolls",
      "BPA free receipt paper",
      "BPA free POS paper",
      "BPA free till rolls",
      "BPA free cash register paper",
      "BPA free thermal paper wholesale",
      "BPA free receipt rolls OEM",
      "BPA free vs phenol free thermal paper",
      "BPA free thermal paper test report",
    ],
  },
  hero: {
    image: {
      slot: "bpa-free-thermal-paper:hero",
      fallback: ROLLS_IMAGE,
      alt: "BPA-free thermal paper rolls prepared for documented B2B receipt programs",
    },
    badge: "B2B documented-material program",
    titleBefore: "BPA-Free Thermal Paper for ",
    titleHighlight: "Receipt, POS and OEM Supply Programs",
    description:
      "BPA-free confirms one chemical scope; it does not automatically confirm BPS-free, phenol-free, food-contact, archival or sustainability claims. We match the requested declaration and report to the exact paper grade, printer, roll specification, use and batch-control plan.",
    trustBadges: [
      "BPA claim and report-scope review",
      "BPS-free and phenol-free kept separate",
      "Printer and roll-geometry qualification",
      "Sample, packing and batch control",
    ],
    facts: [
      { value: "7 routes", label: "Material and supply programs" },
      { value: "6 formats", label: "Reference roll sizes" },
      { value: "4 stages", label: "Qualification sequence" },
      { value: "B2B", label: "Bulk and repeat supply" },
    ],
    primaryCta: { label: "Browse BPA-Free Programs", href: "#product-families" },
    secondaryCta: { label: "Request a Document Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Product Programs", href: "#product-families" },
    { label: "Sizes", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Qualification Guide", href: "#selection-guide" },
    { label: "Evidence Checks", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Material-claim buying matrix",
      title: "Choose the chemical scope before choosing the roll program",
      description:
        "BPA-free, BPS-free and phenol-free are not interchangeable. Start with the buyer or market requirement, then match the exact paper grade, report subject, product format and use condition.",
    },
    sizes: {
      label: "Reference roll formats",
      title: "Confirm roll geometry independently from the BPA claim",
      description:
        "A chemistry declaration does not confirm printer fit. Width, outer diameter or length, core, winding, caliper, paper grade and packing must still be approved for the intended terminal.",
    },
    applications: {
      label: "Buyer and operating routes",
      title: "Match documentation to the real receipt and record workflow",
      description:
        "Retail, hospitality, payment, banking, healthcare and distributor programs have different terminal, handling, retention, declaration, packing and acceptance requirements.",
    },
    selection: {
      label: "Four-stage material qualification",
      title: "Link the claim, paper grade, test evidence and delivered batch",
      description:
        "Define the required substance scope and destination first, freeze the complete roll specification next, review evidence and samples, then preserve the approved grade and batch reference for reorders.",
    },
  },
  families: [
    {
      id: "documented-bpa-free",
      label: "Core material route",
      title: "Documented BPA-Free Thermal Rolls",
      description:
        "Receipt and POS rolls produced from a named BPA-free thermal paper grade with order-matched declaration or test evidence where required.",
      buyerFit:
        "Best for buyers who can state the target requirement, accepted document type, tested substance, report age or issuer rules, product specification and destination.",
      href: "#inquiry",
      linkLabel: "Define the evidence scope",
      featured: true,
      image: {
        slot: "bpa-free-thermal-paper:series:documented",
        fallback: QUALITY_IMAGE,
        alt: "Documented BPA-free thermal paper grade and receipt rolls",
      },
    },
    {
      id: "phenol-free",
      label: "Broader chemistry route",
      title: "BPS-Free & Phenol-Free Thermal Paper",
      description:
        "A separate material route for buyers whose requirement excludes BPS or a broader group of phenolic developers rather than BPA alone.",
      buyerFit:
        "Provide the exact restricted substances, method or buyer standard and destination. Do not infer this route from a BPA-free statement.",
      href: "/products/phenol-free-thermal-paper",
      linkLabel: "Review phenol-free paper",
      image: {
        slot: "bpa-free-thermal-paper:series:phenol-free",
        fallback: DOCUMENT_IMAGE,
        alt: "BPS-free and phenol-free thermal paper document route",
      },
    },
    {
      id: "pos-receipt",
      label: "Core receipt route",
      title: "BPA-Free POS & Cash-Register Rolls",
      description:
        "Receipt rolls for retail, supermarket, restaurant and standard POS workflows using the approved paper grade and complete roll geometry.",
      buyerFit:
        "Confirm printer model, width, maximum roll diameter, core, paper grade, image-retention need, receipts per day and pack quantity by site.",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review receipt-roll programs",
      image: {
        slot: "bpa-free-thermal-paper:series:pos",
        fallback: RETAIL_IMAGE,
        alt: "BPA-free POS and cash register receipt paper rolls",
      },
    },
    {
      id: "mobile-terminal",
      label: "Compact device route",
      title: "BPA-Free Mobile POS & Terminal Rolls",
      description:
        "Smaller-diameter receipt rolls for handheld payment, delivery, taxi and portable terminal workflows.",
      buyerFit:
        "Compact devices are sensitive to outer diameter and core as well as width. Send the exact model or an approved roll sample.",
      href: "/products/thermal-rolls/57x40mm",
      linkLabel: "Review compact rolls",
      image: {
        slot: "bpa-free-thermal-paper:series:mobile",
        fallback: MOBILE_IMAGE,
        alt: "BPA-free mobile POS and compact terminal receipt rolls",
      },
    },
    {
      id: "custom-printed",
      label: "Brand and information route",
      title: "Custom Printed BPA-Free Receipt Rolls",
      description:
        "Buyer-approved logos, terms, promotions, QR codes or back printing applied to a specified BPA-free paper grade.",
      buyerFit:
        "Confirm the paper and report subject first, then print side, repeat, colors, artwork, live thermal area, printer, quantity by version and packing.",
      href: "/products/thermal-paper-rolls/custom-printed",
      linkLabel: "Review custom printing",
      image: {
        slot: "bpa-free-thermal-paper:series:custom",
        fallback: ROLLS_IMAGE,
        alt: "Custom printed BPA-free thermal receipt paper rolls",
      },
    },
    {
      id: "retention-specific",
      label: "Record-life route",
      title: "Retention-Specific BPA-Free Paper Grades",
      description:
        "Thermal grades reviewed for an intended record period, printer sensitivity, storage and exposure conditions instead of a generic image-life promise.",
      buyerFit:
        "State the required readable period, storage temperature and humidity, light, heat, plasticizer, oil, sanitizer or handling exposure and acceptance method.",
      href: "#inquiry",
      linkLabel: "Define the record-life need",
      image: {
        slot: "bpa-free-thermal-paper:series:retention",
        fallback: BANKING_IMAGE,
        alt: "BPA-free thermal paper grade reviewed for record retention",
      },
    },
    {
      id: "oem-private-label",
      label: "Distributor supply route",
      title: "OEM, Private-Label & Wholesale BPA-Free Rolls",
      description:
        "Multi-size roll, inner-pack, carton and pallet programs using a controlled paper grade, product label and reorder reference.",
      buyerFit:
        "Confirm size mix, quantity by SKU, paper grade and evidence scope, rolls per pack and carton, barcode, artwork, pallet and destination.",
      href: "/oem",
      linkLabel: "Review an OEM program",
      image: {
        slot: "bpa-free-thermal-paper:series:oem",
        fallback: OEM_IMAGE,
        alt: "OEM and private label BPA-free thermal paper rolls for wholesale",
      },
    },
  ],
  sizes: paperRollSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets ?? "Global",
    badge: size.badge,
    use: sizeUses[size.slug] ?? "General POS, receipt and terminal printing",
    href: `/products/thermal-rolls/${size.slug}`,
  })),
  applications: [
    {
      id: "retail",
      title: "Retail, supermarket and checkout fleets",
      description:
        "High-frequency receipt printing across stores and terminals with centralized material declarations and replenishment.",
      confirm:
        "target requirement, printer models, roll size by terminal, receipts per day, paper grade, accepted report, pack quantity, site allocation and reorder point",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review retail rolls",
      image: {
        slot: "bpa-free-thermal-paper:applications:retail",
        fallback: RETAIL_IMAGE,
        alt: "Retail checkout fleet using BPA-free thermal receipt rolls",
      },
    },
    {
      id: "hospitality",
      title: "Restaurants, hotels and food-service operations",
      description:
        "Customer receipts and order records handled around heat, grease, wet hands and frequent paper changes.",
      confirm:
        "buyer chemistry scope, printer by station, roll geometry, heat and grease exposure, handling, record period, document requirement and carton split",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review hospitality rolls",
      image: {
        slot: "bpa-free-thermal-paper:applications:hospitality",
        fallback: HOSPITALITY_IMAGE,
        alt: "Hospitality and food service BPA-free receipt paper application",
      },
    },
    {
      id: "payment-mobile",
      title: "Payment terminals, mobile POS and field fleets",
      description:
        "Compact rolls for distributed terminal fleets where device fit, field storage and operator pack allocation matter.",
      confirm:
        "terminal model, width, maximum OD, core, paper grade, chemistry document, storage, daily usage, packs per operator and destination",
      href: "/products/thermal-rolls/57x40mm",
      linkLabel: "Review terminal rolls",
      image: {
        slot: "bpa-free-thermal-paper:applications:payment",
        fallback: MOBILE_IMAGE,
        alt: "Payment terminal and mobile POS BPA-free receipt paper rolls",
      },
    },
    {
      id: "banking",
      title: "Banking, ATM and financial records",
      description:
        "Terminal records reviewed for device fit, readable output, storage, retention and documented material scope.",
      confirm:
        "terminal model, paper dimensions, sensitivity, retention and storage conditions, BPA or broader chemistry scope, report subject and branch allocation",
      href: "#inquiry",
      linkLabel: "Review a financial record",
      image: {
        slot: "bpa-free-thermal-paper:applications:banking",
        fallback: BANKING_IMAGE,
        alt: "Banking and ATM BPA-free thermal paper application",
      },
    },
    {
      id: "healthcare-institutional",
      title: "Healthcare and institutional procurement",
      description:
        "Specification-sensitive receipt and record programs where procurement may require broader chemistry, document or retention scopes.",
      confirm:
        "exact use, patient or staff contact, printer, paper grade, excluded substances, document standard, retention, storage, packaging and acceptance method",
      href: "/products/phenol-free-thermal-paper",
      linkLabel: "Review broader chemistry options",
      image: {
        slot: "bpa-free-thermal-paper:applications:healthcare",
        fallback: HEALTHCARE_IMAGE,
        alt: "Healthcare procurement review for BPA-free and phenol-free thermal paper",
      },
    },
    {
      id: "distributor",
      title: "Wholesale, distributor and private-label supply",
      description:
        "Multi-size programs with controlled grade names, evidence files, inner packs, cartons, barcodes and pallet references.",
      confirm:
        "target markets, size mix, quantity by SKU, exact material claims, evidence scope, pack and carton counts, labels, artwork, pallet and destination",
      href: "/oem",
      linkLabel: "Review wholesale supply",
      image: {
        slot: "bpa-free-thermal-paper:applications:distributor",
        fallback: OEM_IMAGE,
        alt: "Wholesale BPA-free thermal paper rolls packed for distributors",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Target requirement and claim scope",
      description: "Define what the buyer, destination or contract actually asks the paper to exclude.",
      inputs: [
        "BPA-free, BPS-free, phenol-free or named-substance requirement",
        "Destination market, buyer standard, tender or internal policy",
        "Accepted declaration, test report, issuer, date and language rules",
        "Product, batch, basis weight and coating-grade scope expected in the document",
      ],
    },
    {
      step: "02",
      title: "Printer and complete roll specification",
      description: "Qualify the physical product independently from the chemistry claim.",
      inputs: [
        "Printer or terminal manufacturer and model",
        "Width, outer diameter or length, core ID and winding",
        "Paper basis weight, caliper and thermal sensitivity",
        "Blank or custom print, sensor mark and roll packing format",
      ],
    },
    {
      step: "03",
      title: "Evidence and performance sample",
      description: "Match the document to the supplied grade and test the paper in the real workflow.",
      inputs: [
        "Grade name, report subject, tested substances, method and result format",
        "Report date, issuer, sample identity and production relationship",
        "Loading, feeding, print density, cutting and residue checks",
        "Retention and exposure checks for the intended record use",
      ],
    },
    {
      step: "04",
      title: "Packing, batch and reorder control",
      description: "Freeze the approved material and evidence reference with the commercial SKU.",
      inputs: [
        "Roll count, inner wrap, carton, label, barcode and claim wording",
        "Quantity by size, site, artwork, language or grade",
        "Paper-grade, document, sample and artwork revision references",
        "Destination, pallet, delivery window and repeat-order ID",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "bpa-free-thermal-paper:quality",
      fallback: QUALITY_IMAGE,
      alt: "BPA-free thermal paper grade report sample and batch quality review",
    },
    label: "Claim-to-batch approval",
    title: "Approve the exact material claim, not only the label wording",
    description:
      "A BPA-free program is ready when the report or declaration identifies an acceptable product scope, the approved grade performs in the intended printer, packing uses controlled claim wording and the paper and evidence references remain traceable for repeat orders.",
    checks: [
      {
        title: "Claim and substance check",
        description:
          "Confirm whether the requirement covers BPA only or also BPS, other bisphenols or a broader phenol-free scope. Record the requested method or acceptance rule.",
      },
      {
        title: "Report and product-identity check",
        description:
          "Match grade name, basis weight, sample or product description, tested substances, report issuer, date and result to the order and destination requirement.",
      },
      {
        title: "Printer and record check",
        description:
          "Test loading, feeding, print density, cutting, handling and the required record period under representative storage and exposure conditions.",
      },
      {
        title: "Batch and packing check",
        description:
          "Match paper grade, evidence file, artwork, claim wording, roll count, labels, carton marks, pallet and approved reorder reference.",
      },
    ],
    note:
      "BPA-free does not by itself prove BPS-free, phenol-free, food-contact suitability, FSC status, recyclability, non-toxicity, image life or resistance to heat, moisture, oil, plasticizers or sanitizers. Confirm each claim separately for the exact grade and order.",
  },
  faq: [
    {
      q: "What information is needed for a BPA-free thermal paper quotation?",
      a: "Send the target claim, destination or buyer standard, accepted document type, printer, roll dimensions, paper grade, retention need, quantity by SKU, packing and delivery window.",
    },
    {
      q: "What does BPA-free thermal paper mean?",
      a: "It means the defined thermal paper or coating is represented as not containing BPA within the stated document or test scope. The exact paper grade, sample identity, method, result and acceptance requirement should be checked for the order.",
    },
    {
      q: "Is BPA-free thermal paper also BPS-free or phenol-free?",
      a: "Not necessarily. BPA-free addresses BPA. BPS-free addresses BPS, and phenol-free may cover a broader developer scope. Ask for the exact substances and product scope rather than treating the terms as interchangeable.",
    },
    {
      q: "What documents can support a BPA-free claim?",
      a: "Depending on the buyer, support may include a supplier declaration, certificate or third-party test report. Confirm the accepted issuer, date, language, product identity, tested substance, method and result format before ordering.",
    },
    {
      q: "Does a BPA-free report confirm the finished receipt roll?",
      a: "Check what the report tested and how it relates to the finished roll. The paper grade, basis weight, sample identity, coating, conversion batch and product description should be traceable enough for the buyer's acceptance process.",
    },
    {
      q: "Can BPA-free thermal paper be custom printed and private labeled?",
      a: "Yes. Confirm the paper grade and evidence scope first, then approve artwork, print side, colors, repeat, thermal image area, quantity by version, labels, cartons and claim wording.",
    },
    {
      q: "How should print life be specified for BPA-free paper?",
      a: "State the required readable period and storage or exposure conditions. Image life depends on the paper grade and contact with heat, light, humidity, oils, plasticizers, sanitizers and other materials, not on the BPA-free claim alone.",
    },
    {
      q: "How are minimum order and production timing confirmed?",
      a: "They depend on roll dimensions, paper grade, evidence needs, custom printing, versions, quantity, packing, pallet and destination. Send the required delivery window and quantity by SKU for order-specific confirmation.",
    },
  ],
  inquiry: {
    label: "B2B BPA-free material review",
    title: "Send the claim scope, printer, roll specification and evidence requirement",
    description:
      "A complete request lets us identify missing material, document, sample, packing and batch-control inputs before quotation.",
    checklist: [
      "BPA, BPS, phenol-free or named-substance scope and destination or buyer standard",
      "Accepted declaration or report rules, paper-grade identity and document language",
      "Printer model, width, roll diameter or length, core, paper and retention requirement",
      "Quantity by SKU, sample, custom print, packing, destination and delivery window",
    ],
    productName: "BPA-Free Thermal Paper",
    initialMessage:
      "Company and buyer type:\nTarget market or customer requirement:\nRequired claim: BPA-free, BPS-free, phenol-free or named substances:\nAccepted declaration or test-report requirement:\nRequired issuer, date, method or language:\nPrinter or terminal model:\nPaper width:\nMaximum roll diameter or required length:\nCore ID, core OD or coreless request:\nPaper basis weight and grade:\nImage-retention and storage requirement:\nBlank or custom printed roll:\nArtwork, colors, repeat or sensor mark:\nQuantity by size, SKU, grade or version:\nSample and printer-test requirement:\nRoll, inner pack, carton and pallet packing:\nPrivate-label and claim wording:\nDestination country / port:\nRequested delivery window:\nCurrent material or supply problem:",
    responseNote:
      "We will review the requested claim and product scope, identify missing qualification inputs and confirm the next quotation step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Thermal Paper Rolls", path: "/products/thermal-paper-rolls" },
    { name: "BPA-Free Thermal Paper", path: "/products/bpa-free-thermal-paper" },
  ],
  relatedPrograms: [
    { label: "BPS-Free Thermal Paper", href: "/products/bps-free-thermal-paper" },
    { label: "Phenol-Free Thermal Paper", href: "/products/phenol-free-thermal-paper" },
    { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
    { label: "Custom Printed Thermal Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
  ],
} satisfies ProductCategoryConfig;
