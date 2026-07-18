import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { ncrFormParts } from "@/app/products/ncr-forms/ncr-forms-data";

const NCR_IMAGE =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=82";
const OVERVIEW_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=82";
const BOOKS_IMAGE =
  "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=82";
const DELIVERY_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=82";
const CONTINUOUS_IMAGE =
  "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1200&q=82";
const FIELD_IMAGE =
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=82";
const GOVERNMENT_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=82";
const PRODUCTION_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

export const customNcrFormsCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/custom-ncr-forms",
  categoryName: "Custom NCR Forms",
  alternateNames: [
    "Custom Carbonless Forms",
    "Custom Business Forms",
    "Printed NCR Forms",
    "Multi-Part Carbonless Forms",
    "Custom Invoice and Delivery Forms",
  ],
  audience:
    "Distributors, commercial printers, stationery wholesalers, finance teams, warehouses, field-service operators, procurement departments and institutional buyers that need branded multi-copy business records",
  metadata: {
    title: "Custom NCR Forms Manufacturer | Carbonless Business Forms",
    description:
      "Specify custom NCR forms by copy count, document workflow, layout, numbering, binding, perforation, paper sequence, packing and reorder controls for B2B supply.",
    keywords: [
      "custom NCR forms manufacturer",
      "custom carbonless forms",
      "printed NCR forms",
      "2-part NCR forms",
      "3-part NCR forms",
      "4-part carbonless forms",
      "custom invoice forms",
      "custom delivery note forms",
      "numbered NCR forms",
      "private label NCR forms",
    ],
  },
  hero: {
    image: {
      slot: "custom-ncr-forms:hero",
      fallback: NCR_IMAGE,
      alt: "Custom printed NCR carbonless business forms prepared for multi-party records",
    },
    badge: "B2B carbonless-form program",
    titleBefore: "Custom NCR Forms for ",
    titleHighlight: "Invoices, Receipts, Orders and Handover Records",
    description:
      "Turn one handwritten or impact-printed entry into the right copies for customers, finance, warehouse, drivers or archives. We qualify the copy count, layout, numbering, finishing, format and packing as one repeatable business-form specification.",
    trustBadges: [
      "2-part to 5+ part review",
      "Custom fields and copy roles",
      "Loose sets, pads and books",
      "Numbering, binding and packing",
    ],
    facts: [
      { value: "7 routes", label: "Custom form programs" },
      { value: "4 formats", label: "Copy-count routes" },
      { value: "4 stages", label: "Approval sequence" },
      { value: "B2B", label: "Bulk and repeat supply" },
    ],
    primaryCta: { label: "Browse Form Programs", href: "#product-families" },
    secondaryCta: { label: "Request a Layout Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Form Programs", href: "#product-families" },
    { label: "Copy Counts", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Specification Guide", href: "#selection-guide" },
    { label: "Proof & Quality", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Custom form program matrix",
      title: "Choose by document workflow before choosing copy count",
      description:
        "An invoice, delivery note, receipt book and ERP-fed form distribute copies differently. Start with who needs the original, which departments file copies and how the document is stored or signed.",
    },
    sizes: {
      label: "Copy-count routes",
      title: "Select the number of copies each workflow actually needs",
      description:
        "2-part, 3-part, 4-part and multi-part describe the copy sequence, not a complete finished specification. Confirm size, paper sequence, numbering, binding and packing with the document layout.",
    },
    applications: {
      label: "Business record applications",
      title: "Match the form to the handover, approval or filing step",
      description:
        "Finance, retail, procurement, logistics, field service and public-sector workflows need different fields, signatures, numbering, copy labels and retention controls.",
    },
    selection: {
      label: "Four-stage form specification",
      title: "Define copy roles, layout, finishing and repeat control together",
      description:
        "A correct part count is only the start. Freeze the document fields, CB/CFB/CF sequence, numbering, binding or feed format and packing reference before production.",
    },
  },
  families: [
    {
      id: "custom-loose-sets",
      label: "Core custom route",
      title: "Custom Printed Loose Sets & Pads",
      description:
        "Branded carbonless sets for invoices, orders, vouchers, work orders and other business documents with buyer-defined fields and copy roles.",
      buyerFit:
        "Best for buyers who need a controlled layout, copy-color sequence, numbering, signature fields, perforation and set or pad packing.",
      href: "#inquiry",
      linkLabel: "Define a custom form",
      featured: true,
      image: {
        slot: "custom-ncr-forms:series:loose-sets",
        fallback: OVERVIEW_IMAGE,
        alt: "Custom printed loose carbonless form sets with multiple copy roles",
      },
    },
    {
      id: "two-part",
      label: "Duplicate workflow",
      title: "2-Part Duplicate NCR Forms",
      description:
        "One original plus one copy for simple receipts, invoices, sales orders, quotations and service tickets.",
      buyerFit:
        "Confirm who receives the original and copy, whether the form is loose, padded or bound, and how numbering and filing should work.",
      href: "/products/ncr-forms/2-part",
      linkLabel: "Review 2-part forms",
      image: {
        slot: "custom-ncr-forms:series:two-part",
        fallback: NCR_IMAGE,
        alt: "2-part duplicate NCR carbonless form set",
      },
    },
    {
      id: "three-part",
      label: "Triplicate workflow",
      title: "3-Part Triplicate NCR Forms",
      description:
        "Customer, finance and operations copies for invoices, purchase orders, delivery notes and work orders.",
      buyerFit:
        "Confirm copy destinations, color sequence, signature position, numbering and whether the set travels with goods or stays at a counter.",
      href: "/products/ncr-forms/3-part",
      linkLabel: "Review 3-part forms",
      image: {
        slot: "custom-ncr-forms:series:three-part",
        fallback: OVERVIEW_IMAGE,
        alt: "3-part triplicate carbonless forms for customer finance and operations",
      },
    },
    {
      id: "four-multi-part",
      label: "Multi-party workflow",
      title: "4-Part & Multi-Part NCR Forms",
      description:
        "Quadruplicate and 5+ ply forms for logistics, customs, banking, institutional approvals and other multi-party records.",
      buyerFit:
        "Confirm every copy role, lower-ply readability, handling sequence, numbering range, wraparound cover and archive requirement.",
      href: "/products/ncr-forms/multi-part",
      linkLabel: "Review multi-part forms",
      image: {
        slot: "custom-ncr-forms:series:multi-part",
        fallback: DELIVERY_IMAGE,
        alt: "Multi-part NCR forms for logistics and institutional approval chains",
      },
    },
    {
      id: "books",
      label: "Bound counter route",
      title: "Custom Receipt & Invoice Books",
      description:
        "Numbered, perforated or wraparound books for counters, field sales, service teams and invoice workflows.",
      buyerFit:
        "Confirm sets per book, numbering range, binding, cover, tear-off position, copy roles, carton packing and reorder reference.",
      href: "/products/ncr-receipt-books",
      linkLabel: "Review receipt books",
      image: {
        slot: "custom-ncr-forms:series:books",
        fallback: BOOKS_IMAGE,
        alt: "Custom numbered NCR receipt and invoice books",
      },
    },
    {
      id: "delivery-logistics",
      label: "Handover route",
      title: "Custom Delivery Notes & Logistics Forms",
      description:
        "Proof-of-delivery, goods-received, waybill, stock-transfer and shortage or damage records with driver, warehouse and customer copies.",
      buyerFit:
        "Confirm item fields, quantity and exception rows, signatures, numbering, copy distribution, book or set format and warehouse packing.",
      href: "/products/delivery-note-forms",
      linkLabel: "Review delivery forms",
      image: {
        slot: "custom-ncr-forms:series:delivery",
        fallback: DELIVERY_IMAGE,
        alt: "Custom carbonless delivery notes and logistics handover forms",
      },
    },
    {
      id: "continuous",
      label: "System-feed route",
      title: "Custom Continuous Computer Forms",
      description:
        "Fanfold, pin-feed or tractor-feed carbonless or plain forms for dot-matrix, ERP, warehouse and logistics systems.",
      buyerFit:
        "Confirm printer path, sprocket holes, fold pitch, ply sequence, burst or perforation, print area, form length and carton packing.",
      href: "/products/continuous-computer-forms",
      linkLabel: "Review continuous forms",
      image: {
        slot: "custom-ncr-forms:series:continuous",
        fallback: CONTINUOUS_IMAGE,
        alt: "Custom continuous computer carbonless forms for pin-feed printing",
      },
    },
  ],
  sizes: ncrFormParts.map((part) => ({
    slug: part.slug,
    label: part.label,
    market: part.markets ?? "Global",
    badge: part.badge,
    use: part.desc,
    href: `/products/ncr-forms/${part.slug}`,
  })),
  applications: [
    {
      id: "finance",
      title: "Invoices, receipts and finance records",
      description:
        "Custom invoices, receipt books, vouchers and account copies for retail, finance and field-sales workflows.",
      confirm:
        "tax or reference fields, customer and accounts copies, numbering, signature, book or set format, filing and quantity by version",
      href: "/products/ncr-invoice-books",
      linkLabel: "Review invoice forms",
      image: {
        slot: "custom-ncr-forms:applications:finance",
        fallback: OVERVIEW_IMAGE,
        alt: "Custom carbonless invoice and receipt records for finance teams",
      },
    },
    {
      id: "retail",
      title: "Retail counters and customer receipts",
      description:
        "Numbered duplicate or triplicate receipts and order records for counters, branches and field sales teams.",
      confirm:
        "counter workflow, customer copy, numbering, binding, cover, copy color, tear-off and pack quantity by branch",
      href: "/products/ncr-receipt-books",
      linkLabel: "Review receipt books",
      image: {
        slot: "custom-ncr-forms:applications:retail",
        fallback: BOOKS_IMAGE,
        alt: "Retail counter using numbered carbonless receipt books",
      },
    },
    {
      id: "logistics",
      title: "Delivery, warehouse and proof of handover",
      description:
        "Delivery notes, receiving reports, stock transfers and exception forms that distribute signed copies at handover.",
      confirm:
        "SKU and quantity fields, driver, warehouse, customer and finance copies, signature, damage or shortage rows, numbering and storage",
      href: "/products/delivery-note-forms",
      linkLabel: "Review logistics forms",
      image: {
        slot: "custom-ncr-forms:applications:logistics",
        fallback: DELIVERY_IMAGE,
        alt: "Logistics delivery and warehouse receiving carbonless forms",
      },
    },
    {
      id: "procurement",
      title: "Purchase orders and supplier approvals",
      description:
        "Multi-copy purchase orders, quotations and receiving documents for procurement and supplier workflows.",
      confirm:
        "buyer and supplier fields, approval signatures, copy roles, numbering, line-item space, finance copy and filing method",
      href: "#inquiry",
      linkLabel: "Review a procurement workflow",
      image: {
        slot: "custom-ncr-forms:applications:procurement",
        fallback: GOVERNMENT_IMAGE,
        alt: "Procurement purchase order and supplier approval form workflow",
      },
    },
    {
      id: "field-service",
      title: "Field service, repair and work orders",
      description:
        "Service tickets, repair authorizations, work orders and customer sign-off records for mobile teams.",
      confirm:
        "asset or job fields, customer copy, technician copy, parts and labor rows, signatures, numbering and portable book format",
      href: "/products/field-service-ncr-forms",
      linkLabel: "Review field-service forms",
      image: {
        slot: "custom-ncr-forms:applications:field-service",
        fallback: FIELD_IMAGE,
        alt: "Field service and repair work order carbonless forms",
      },
    },
    {
      id: "institutional",
      title: "Government, customs and institutional records",
      description:
        "Controlled multi-party forms for permits, inspections, cargo handover, public receiving and archive workflows.",
      confirm:
        "copy roles, numbering, bilingual or multilingual layout, security fields, signatures, archive copy, packing and tender quantity",
      href: "/products/government-ncr-forms",
      linkLabel: "Review institutional forms",
      image: {
        slot: "custom-ncr-forms:applications:institutional",
        fallback: GOVERNMENT_IMAGE,
        alt: "Institutional and government carbonless form records",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Document workflow and copy roles",
      description: "List the event, people and departments that must receive an immediate copy.",
      inputs: [
        "Invoice, receipt, order, delivery, service or institutional record",
        "Original owner and every copy recipient",
        "Signature, approval, archive and filing requirements",
        "Handwritten, impact-printed or system-generated workflow",
      ],
    },
    {
      step: "02",
      title: "Layout, fields and numbering",
      description: "Turn the approved document into a production-ready form layout.",
      inputs: [
        "Finished size, margins, tables and line-item capacity",
        "Logo, language, copy labels and instruction text",
        "Sequential number range, barcode or QR field",
        "Signature, perforation, hole and tear-off positions",
      ],
    },
    {
      step: "03",
      title: "Material, format and finishing",
      description: "Choose the paper sequence and finished format from how the form is handled.",
      inputs: [
        "CB, CFB and CF ply sequence and copy colors",
        "Loose set, pad, bound book or continuous feed",
        "Glue, staple, wire, wraparound cover or perforation",
        "Printer path, sprocket holes, fold pitch or manual writing",
      ],
    },
    {
      step: "04",
      title: "Proof, packing and reorder control",
      description: "Approve copy clarity and freeze the version for production and reorders.",
      inputs: [
        "Digital or physical proof and copy-transfer check",
        "Numbering, binding, perforation and finishing sample",
        "Quantity by form, language, branch or revision",
        "Set, book, carton, pallet, destination and reorder ID",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "custom-ncr-forms:quality",
      fallback: PRODUCTION_IMAGE,
      alt: "Custom NCR form proof copy sequence finishing and packing review",
    },
    label: "Proof-to-reorder control",
    title: "Approve every copy, field and finishing detail",
    description:
      "A custom NCR form is approved when the original and every lower ply are readable, the fields fit the real workflow, numbering and finishing work as intended, and packing keeps each revision traceable.",
    checks: [
      {
        title: "Layout and copy-role check",
        description:
          "Review size, fields, copy labels, color sequence, signatures and the destination of each original or duplicate.",
      },
      {
        title: "Transfer and writing check",
        description:
          "Test handwriting or impact printing through the complete set, including lower-ply clarity, alignment and intended pen or printer pressure.",
      },
      {
        title: "Numbering and finishing check",
        description:
          "Confirm sequence, perforation, holes, glue, staples, binding, wraparound cover, fold pitch or sprocket feed before release.",
      },
      {
        title: "Version and packing check",
        description:
          "Match artwork revision, form number, quantity, set or book count, carton marks, language, destination and approved reorder reference.",
      },
    ],
    note:
      "Paper chemistry, low-odor, BPA-free, phenol-free, FSC, security and archival statements are separate evidence scopes. Confirm the exact material, test or declaration subject and destination requirement for the order.",
  },
  faq: [
    {
      q: "What information is needed for a custom NCR form quotation?",
      a: "Send the document use, number of parts, copy recipients, finished size, layout or sample file, print colors, numbering range, binding or perforation, quantity by version, packing and destination.",
    },
    {
      q: "How do I choose between 2-part, 3-part and 4-part NCR forms?",
      a: "Choose from the number of people or departments that must receive a copy immediately. 2-part suits an original plus one copy; 3-part commonly separates customer, finance and operations; 4-part or multi-part supports additional carrier, warehouse, agency or archive copies.",
    },
    {
      q: "What do CB, CFB and CF mean on carbonless paper?",
      a: "CB is the coated-back top sheet, CFB is a coated-front-and-back middle sheet, and CF is the coated-front receiving sheet at the bottom. The correct sequence depends on the requested number of copies and writing or impact-print workflow.",
    },
    {
      q: "Can custom NCR forms include logos, numbering and barcodes?",
      a: "Yes. Layouts can include logos, fields, multilingual text, sequential numbers, barcodes or QR codes, copy labels, signatures and approved finishing. Send the artwork or a marked sample for review.",
    },
    {
      q: "Can you supply loose sets, pads, receipt books and continuous forms?",
      a: "Yes. The finished format can be loose collated sets, glued pads, numbered books, wraparound service books or continuous fanfold and pin-feed forms. Choose from the manual or printer-fed workflow and confirm the full format.",
    },
    {
      q: "Can a custom form be printed in multiple languages or versions?",
      a: "Yes. Provide the language, artwork revision, copy labels and quantity by version. Version separation, numbering and carton marks should be agreed before production so reorders remain traceable.",
    },
    {
      q: "Can the lower copies be tested before production?",
      a: "Yes. A digital proof checks layout and copy roles, while a physical sample can check transfer clarity, paper sequence, binding, perforation, numbering and printer or handwriting behavior where the workflow requires it.",
    },
    {
      q: "How are minimum order and production timing confirmed?",
      a: "They depend on size, part count, print colors, tooling, numbering, finishing, number of versions, quantity, packing and destination. Send the delivery window and quantity by form for an order-specific confirmation.",
    },
  ],
  inquiry: {
    label: "B2B custom NCR review",
    title: "Send the workflow, copy roles, layout and finishing inputs",
    description:
      "A complete request lets us identify copy-count, layout, material, numbering, finishing, proof and packing questions before quotation.",
    checklist: [
      "Document use, copy recipients, part count, finished size and sample or artwork file",
      "Fields, languages, logo, print colors, numbering, barcode and signature requirements",
      "CB/CFB/CF sequence, loose set, pad, book or continuous format and finishing",
      "Quantity by version, proof type, packing, destination and delivery window",
    ],
    productName: "Custom NCR Forms",
    initialMessage:
      "Company and buyer type:\nDocument use:\nOriginal and copy recipients:\nNumber of parts required:\nFinished size and format:\nArtwork, PDF or marked sample:\nLanguages, logo and print colors:\nFields, signatures and approvals:\nNumbering range or barcode / QR requirement:\nCB / CFB / CF copy sequence:\nLoose sets, pads, books or continuous feed:\nPerforation, holes, glue, staples or binding:\nQuantity by form, language or version:\nProof or physical sample requirement:\nSet, book, carton and pallet packing:\nPrivate-label or carton-mark requirement:\nDestination country / port:\nRequested delivery window:\nCurrent form or supply problem:",
    responseNote:
      "We will review the form workflow, identify missing qualification inputs and confirm the next quotation step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "NCR Forms", path: "/products/ncr-forms" },
    { name: "Custom NCR Forms", path: "/products/custom-ncr-forms" },
  ],
  relatedPrograms: [
    { label: "NCR Forms & Carbonless Paper", href: "/products/ncr-forms" },
    { label: "NCR Receipt Books", href: "/products/ncr-receipt-books" },
    { label: "Delivery Note Forms", href: "/products/delivery-note-forms" },
    { label: "Continuous Computer Forms", href: "/products/continuous-computer-forms" },
  ],
} satisfies ProductCategoryConfig;
