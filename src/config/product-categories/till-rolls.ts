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
const KIOSK_IMAGE =
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=82";
const BANKING_IMAGE =
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=82";
const OEM_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=82";
const DOCUMENT_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=82";
const QUALITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";

const sizeUses: Record<string, string> = {
  "80x80mm": "Retail, supermarket, hospitality and higher-volume EPOS terminals",
  "57x50mm": "Card machines, mobile POS and compact receipt printers",
  "80x70mm": "80 mm EPOS printers with a smaller roll-holder allowance",
  "110x80mm": "Wide receipts, kiosks, ticketing and specialist terminal output",
  "57x40mm": "Handheld payment, delivery, taxi and compact field terminals",
  "57x30mm": "Ultra-compact card and portable receipt devices",
};

export const tillRollsCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/till-rolls",
  categoryName: "Till Rolls",
  alternateNames: [
    "Thermal Till Rolls",
    "EPOS Till Rolls",
    "Cash Register Till Rolls",
    "57mm Till Rolls",
    "80mm Till Rolls",
    "Till Receipt Paper Rolls",
  ],
  audience:
    "UK and European retailers, supermarkets, hospitality groups, payment-terminal operators, EPOS distributors, wholesalers and private-label buyers managing till-paper fleets or resale programs",
  metadata: {
    title: "Till Rolls Manufacturer | 57mm & 80mm EPOS Rolls",
    description:
      "Source 57mm and 80mm till rolls for EPOS and card machines by printer, print method, roll geometry, paper grade, retention need and packing.",
    keywords: [
      "till rolls manufacturer",
      "thermal till rolls wholesale",
      "80mm till rolls",
      "57mm till rolls",
      "EPOS till rolls",
      "cash register till rolls",
      "card machine paper rolls",
      "custom printed till rolls",
      "bulk till rolls UK",
      "private label till rolls",
    ],
  },
  hero: {
    image: {
      slot: "till-rolls:hero",
      fallback: ROLLS_IMAGE,
      alt: "57 mm and 80 mm till rolls specified for EPOS cash register and payment terminals",
    },
    badge: "B2B till-roll catalog",
    titleBefore: "Till Rolls for ",
    titleHighlight: "EPOS, Cash Registers and Card Machines",
    description:
      "A till roll needs more than the right width. Confirm the printer, direct-thermal or impact method, maximum roll diameter, length, core, paper grade, image-retention need and packing before approving bulk or repeat supply.",
    trustBadges: [
      "57 mm, 80 mm and specialist widths",
      "Printer and roll-geometry review",
      "Thermal, plain and multi-ply routes",
      "Wholesale packing and reorder control",
    ],
    facts: [
      { value: "7 routes", label: "Till-roll programs" },
      { value: "6 formats", label: "Reference dimensions" },
      { value: "4 stages", label: "Qualification sequence" },
      { value: "B2B", label: "Bulk and repeat supply" },
    ],
    primaryCta: { label: "Compare Till-Roll Programs", href: "#product-families" },
    secondaryCta: { label: "Request a Printer Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Product Series", href: "#product-families" },
    { label: "Sizes", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Specification Guide", href: "#selection-guide" },
    { label: "Sample Checks", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Till-roll buying matrix",
      title: "Choose by printer and operating workflow",
      description:
        "A countertop EPOS terminal, card machine, kitchen impact printer and self-service kiosk can require different print methods, widths, diameters, cores and paper grades. Start with the actual device.",
    },
    sizes: {
      label: "Reference roll formats",
      title: "Confirm width and roll geometry together",
      description:
        "A size name such as 80 x 80 mm does not confirm paper length, core, caliper, winding or printer fit. Open the closest route, then verify the complete media specification.",
    },
    applications: {
      label: "Terminal and channel routes",
      title: "Match the roll to usage rate, record need and replenishment",
      description:
        "Retail, hospitality, mobile payment, kiosks, institutional records and distributor programs create different changeover, print, retention, packing and documentation requirements.",
    },
    selection: {
      label: "Four-stage till-roll qualification",
      title: "Define the device before the paper and packing",
      description:
        "Record the printer and physical envelope first, select the print method and paper next, verify output in the real device, then freeze the approved roll and packing as a reorderable SKU.",
    },
  },
  families: [
    {
      id: "thermal-epos",
      label: "Core EPOS route",
      title: "Thermal EPOS & Cash-Register Till Rolls",
      description:
        "Direct-thermal receipt rolls for retail, supermarket, hospitality and standard till or EPOS printing workflows.",
      buyerFit:
        "Confirm printer model, width, maximum roll diameter, core, expected receipts per day, cutter, paper grade, sensitivity and pack quantity by site.",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review receipt-roll programs",
      featured: true,
      image: {
        slot: "till-rolls:series:epos",
        fallback: RETAIL_IMAGE,
        alt: "Thermal EPOS and cash register till rolls at retail checkout",
      },
    },
    {
      id: "80mm",
      label: "Wide receipt route",
      title: "80 mm Till Rolls",
      description:
        "80 mm paper rolls for compatible retail, restaurant, hospitality and countertop EPOS printers where wider receipt content is required.",
      buyerFit:
        "Width alone is not enough. Confirm model, maximum outer diameter, length, core, paper caliper, winding, cutter and required receipts per roll.",
      href: "/products/thermal-rolls/80x80mm",
      linkLabel: "Review 80 x 80 mm rolls",
      image: {
        slot: "till-rolls:series:80mm",
        fallback: HOSPITALITY_IMAGE,
        alt: "80 mm till rolls for retail and hospitality EPOS printers",
      },
    },
    {
      id: "57mm",
      label: "Compact terminal route",
      title: "57 mm Card-Machine & Mobile Till Rolls",
      description:
        "Narrow or smaller-diameter rolls for card machines, portable payment, delivery, taxi and handheld receipt devices.",
      buyerFit:
        "Compact devices are sensitive to diameter and core as well as width. Send the exact terminal model or an approved roll sample before bulk supply.",
      href: "/products/thermal-rolls/57x50mm",
      linkLabel: "Review 57 x 50 mm rolls",
      image: {
        slot: "till-rolls:series:57mm",
        fallback: MOBILE_IMAGE,
        alt: "57 mm till rolls for card machines and mobile payment terminals",
      },
    },
    {
      id: "impact-multiply",
      label: "Impact printer route",
      title: "Plain, Bond & Multi-Ply Till Rolls",
      description:
        "Non-thermal and multi-ply paper routes for compatible ribbon or impact printers that require kitchen copies, duplicate records or plain-paper output.",
      buyerFit:
        "Confirm print technology, ribbon, ply count, paper colors, copy legibility, width, diameter, core, winding and whether each copy must be retained or distributed.",
      href: "#inquiry",
      linkLabel: "Define an impact-roll program",
      image: {
        slot: "till-rolls:series:impact",
        fallback: DOCUMENT_IMAGE,
        alt: "Plain bond and multi ply till rolls for impact printers",
      },
    },
    {
      id: "custom-printed",
      label: "Brand and information route",
      title: "Custom Printed Till Rolls",
      description:
        "Buyer-approved logos, terms, promotions, QR codes or back printing reviewed against the live receipt area and terminal feed.",
      buyerFit:
        "Confirm print side, repeat, colors, artwork, live thermal area, sensor marks, printer, paper grade, quantity by version and packing.",
      href: "/products/thermal-paper-rolls/custom-printed",
      linkLabel: "Review custom printed rolls",
      image: {
        slot: "till-rolls:series:custom",
        fallback: ROLLS_IMAGE,
        alt: "Custom printed till rolls with buyer approved receipt artwork",
      },
    },
    {
      id: "documented-grade",
      label: "Material and record route",
      title: "Documented Chemistry & Retention Options",
      description:
        "Till-roll grades reviewed against a requested BPA, BPS or phenol scope, image-retention period, storage conditions and document requirement.",
      buyerFit:
        "BPA-free, BPS-free and phenol-free are different scopes. State the exact buyer requirement, report subject, destination and acceptance method.",
      href: "/products/bpa-free-thermal-paper",
      linkLabel: "Review material claim routes",
      image: {
        slot: "till-rolls:series:documented",
        fallback: QUALITY_IMAGE,
        alt: "Till roll paper grades reviewed for chemistry and image retention",
      },
    },
    {
      id: "oem-private-label",
      label: "Distributor supply route",
      title: "OEM, Private-Label & Wholesale Till Rolls",
      description:
        "Multi-size roll and carton programs for wholesalers, terminal distributors and retail chains using controlled counts, labels and reorder references.",
      buyerFit:
        "Confirm size mix, quantity by SKU, roll and inner-pack counts, film or paper wrap, label, barcode, carton, pallet, destination and channel requirements.",
      href: "/oem",
      linkLabel: "Review an OEM packing program",
      image: {
        slot: "till-rolls:series:oem",
        fallback: OEM_IMAGE,
        alt: "OEM and private label till rolls packed for wholesale supply",
      },
    },
  ],
  sizes: paperRollSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets ?? "Global",
    badge: size.badge,
    use: sizeUses[size.slug] ?? "General till, EPOS and receipt printing",
    href: `/products/thermal-rolls/${size.slug}`,
  })),
  applications: [
    {
      id: "retail",
      title: "Retail, supermarket and checkout fleets",
      description:
        "High-frequency receipt printing across multiple tills, stores and replenishment points.",
      confirm:
        "EPOS models, roll size by terminal, receipts per day, paper grade, readable period, packs per store, site allocation and reorder point",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review retail receipt rolls",
      image: {
        slot: "till-rolls:applications:retail",
        fallback: RETAIL_IMAGE,
        alt: "Retail checkout fleet using thermal till rolls",
      },
    },
    {
      id: "hospitality",
      title: "Restaurants, pubs, hotels and food service",
      description:
        "Front-of-house receipts and kitchen or service records across thermal and impact-printer stations.",
      confirm:
        "printer and print method by station, roll geometry, heat or grease exposure, copy needs, changeover rate, pack split and record period",
      href: "/products/thermal-rolls/80x80mm",
      linkLabel: "Review 80 mm formats",
      image: {
        slot: "till-rolls:applications:hospitality",
        fallback: HOSPITALITY_IMAGE,
        alt: "Hospitality EPOS and kitchen printer till roll workflow",
      },
    },
    {
      id: "payment-mobile",
      title: "Card machines, mobile POS and field fleets",
      description:
        "Compact paper rolls for distributed payment terminals where device fit and operator pack allocation matter.",
      confirm:
        "terminal model, width, maximum OD, core, paper grade, storage, daily usage, packs per operator and destination",
      href: "/products/thermal-rolls/57x40mm",
      linkLabel: "Review compact till rolls",
      image: {
        slot: "till-rolls:applications:payment",
        fallback: MOBILE_IMAGE,
        alt: "Card machine and mobile POS till paper rolls",
      },
    },
    {
      id: "kiosk-ticketing",
      title: "Kiosks, parking and ticketing terminals",
      description:
        "Rolls for unattended or specialist terminals requiring defined holders, sensors, cutters and service intervals.",
      confirm:
        "terminal model, holder, width, diameter or length, core, sensor mark, cutter, variable data, scan requirement and maintenance interval",
      href: "/products/thermal-rolls/110x80mm",
      linkLabel: "Review wide terminal rolls",
      image: {
        slot: "till-rolls:applications:kiosk",
        fallback: KIOSK_IMAGE,
        alt: "Kiosk ticketing and parking terminal paper roll application",
      },
    },
    {
      id: "institutional",
      title: "Banking, healthcare and institutional records",
      description:
        "Terminal records reviewed for device fit, readable output, storage, retention and requested material documentation.",
      confirm:
        "terminal model, dimensions, sensitivity, record period, storage, chemistry scope, accepted document, branch allocation and packing",
      href: "/products/bpa-free-thermal-paper",
      linkLabel: "Review documented paper grades",
      image: {
        slot: "till-rolls:applications:institutional",
        fallback: BANKING_IMAGE,
        alt: "Institutional terminal records printed on till paper rolls",
      },
    },
    {
      id: "distributor",
      title: "Wholesale, distributor and private-label supply",
      description:
        "Multi-size catalogs with controlled roll builds, inner packs, cartons, barcodes and pallet references.",
      confirm:
        "target markets, size mix, quantity by SKU, paper and claim scope, pack and carton counts, labels, artwork, pallet and destination",
      href: "/oem",
      linkLabel: "Review wholesale supply",
      image: {
        slot: "till-rolls:applications:distributor",
        fallback: OEM_IMAGE,
        alt: "Wholesale till rolls packed for distributors and private labels",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Printer, print method and roll envelope",
      description: "Start with the device and how it creates the receipt or copy.",
      inputs: [
        "Printer, EPOS, till or card-terminal manufacturer and model",
        "Direct thermal, ribbon or impact print method",
        "Maximum media width, roll-holder diameter and loading clearance",
        "Cutter, sensor or mark, copy and receipt-content requirements",
      ],
    },
    {
      step: "02",
      title: "Complete paper and roll specification",
      description: "Translate the device limits into a measurable roll build.",
      inputs: [
        "Width, outer diameter or paper length, core ID and core OD",
        "Paper basis weight, caliper, grade, sensitivity or ply count",
        "Winding direction, print side, end mark and roll finish",
        "Blank, colored or custom printed route and required versions",
      ],
    },
    {
      step: "03",
      title: "Printer, output and record checks",
      description: "Test the sample in the intended terminal and operating environment.",
      inputs: [
        "Loading, feeding, density, cutting, residue and roll-end checks",
        "Text, logo, barcode or QR readability where required",
        "Copy transfer and ply separation for impact or multi-ply rolls",
        "Retention, heat, light, humidity, oil and handling exposure",
      ],
    },
    {
      step: "04",
      title: "Packing, allocation and reorder control",
      description: "Freeze the approved media and sample as a repeatable commercial SKU.",
      inputs: [
        "Quantity by size, grade, artwork, site, language or version",
        "Roll count, inner wrap, carton, label, barcode and pallet",
        "Approved sample, paper grade, artwork and packing revisions",
        "Destination, delivery window, site allocation and reorder ID",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "till-rolls:quality",
      fallback: QUALITY_IMAGE,
      alt: "Till roll printer fit output and packing quality review",
    },
    label: "Printer-to-carton approval",
    title: "Approve the complete roll in the actual till or terminal",
    description:
      "A till-roll program is ready when the roll loads and feeds correctly, output meets the buyer's readability and record needs, packing matches the operating workflow and the approved media and sample remain traceable for repeat orders.",
    checks: [
      {
        title: "Dimensions and printer-fit check",
        description:
          "Measure width, OD or length, core, caliper and winding, then test loading, feed, cutter, sensor and roll-end behaviour in the intended printer.",
      },
      {
        title: "Print and copy check",
        description:
          "Review density, legibility, residue and critical codes. For impact or multi-ply rolls, also verify ribbon output, copy transfer, ply order and separation.",
      },
      {
        title: "Retention and exposure check",
        description:
          "Match the paper grade to the required readable period and representative heat, light, humidity, oil, plasticizer, sanitizer or handling conditions.",
      },
      {
        title: "Packing and reorder check",
        description:
          "Match roll count, wrap, carton, label, barcode, pallet, SKU allocation and destination to the approved grade, sample and artwork references.",
      },
    ],
    note:
      "A 57 mm or 80 mm width does not by itself prove printer fit, paper length, coreless compatibility, image life, BPA-free, BPS-free, phenol-free, food-contact suitability, FSC status or any other performance or compliance claim. Confirm each requirement for the exact grade and order.",
  },
  faq: [
    {
      q: "What information is needed for a till-roll quotation?",
      a: "Send the printer or terminal model, print method, width, maximum roll diameter or required length, core, paper grade or ply count, retention need, quantity by SKU, packing, destination and delivery window.",
    },
    {
      q: "What are till rolls?",
      a: "Till roll is a common UK and European buying term for paper rolls used in cash registers, EPOS systems, card machines and related receipt printers. The exact roll may be direct thermal, plain, bond or multi-ply depending on the device.",
    },
    {
      q: "What is the difference between 57 mm and 80 mm till rolls?",
      a: "They refer to paper width, not a complete product specification. Many compact payment devices use narrower rolls and many countertop EPOS printers use 80 mm media, but the exact model, diameter, core, paper and winding must still be checked.",
    },
    {
      q: "Does 80 x 80 mm confirm the paper length?",
      a: "No. It usually describes nominal width and roll diameter. Length changes with actual OD, core, paper basis weight and caliper, winding and agreed tolerance, so request or approve the complete specification.",
    },
    {
      q: "Can one till roll work in every thermal printer?",
      a: "No. Printers can differ in width, maximum roll diameter, core acceptance, paper path, thermal sensitivity, sensor, cutter and winding requirements. Test the exact roll in the intended model.",
    },
    {
      q: "Can till rolls be coreless or custom printed?",
      a: "These routes can be reviewed, but coreless loading must be approved for the exact printer. For custom printing, confirm artwork, print side, repeat, colors, live receipt area, sensor marks, quantity by version and packing.",
    },
    {
      q: "Are till rolls BPA-free, BPS-free or phenol-free?",
      a: "These are separate material scopes and cannot be inferred from the product name. State the exact buyer requirement, destination and accepted document type so an appropriate paper grade can be reviewed.",
    },
    {
      q: "How are minimum order and production timing confirmed?",
      a: "They depend on the dimensions, paper grade or ply count, custom printing, versions, quantity, packing, pallet and destination. Send the full SKU matrix and delivery window for order-specific confirmation.",
    },
  ],
  inquiry: {
    label: "B2B till-roll specification review",
    title: "Send the printer, complete roll geometry, paper and packing requirement",
    description:
      "A complete request lets us identify missing device, paper, record, sample and packing inputs before quotation.",
    checklist: [
      "Printer or terminal model and direct-thermal, ribbon or impact print method",
      "Width, diameter or length, core, paper grade or ply count and retention need",
      "Blank, colored or custom printed route, sample and critical output checks",
      "Quantity by SKU, inner pack, carton, pallet, destination and delivery window",
    ],
    productName: "Till Rolls",
    initialMessage:
      "Company and buyer type:\nTarget market or customer channel:\nPrinter, till, EPOS or terminal model:\nPrint method: direct thermal, ribbon or impact:\nPaper width:\nMaximum roll diameter or required length:\nCore ID, core OD or coreless request:\nPaper basis weight, grade, sensitivity or ply count:\nWinding, print side, sensor mark or cutter requirement:\nRequired receipt or copy use:\nImage-retention and storage requirement:\nBPA, BPS, phenol-free or other document scope:\nBlank, colored or custom printed roll:\nArtwork, colors, print side and repeat:\nQuantity by size, grade, artwork or site:\nSample and printer-test requirement:\nRoll, inner pack, carton and pallet packing:\nPrivate-label, barcode and carton-mark requirement:\nDestination country / port:\nRequested delivery window:\nCurrent printer, changeover or supply problem:",
    responseNote:
      "We will review the printer and roll scope, identify missing qualification inputs and confirm the next quotation step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Thermal Paper Rolls", path: "/products/thermal-paper-rolls" },
    { name: "Till Rolls", path: "/products/till-rolls" },
  ],
  relatedPrograms: [
    { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
    { label: "Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
    { label: "Custom Printed Thermal Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
    { label: "Colored Thermal Paper", href: "/products/colored-thermal-paper" },
  ],
} satisfies ProductCategoryConfig;
