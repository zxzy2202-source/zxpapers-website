import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { ncrFormParts } from "@/app/products/ncr-forms/ncr-forms-data";

const NCR_IMAGE =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=82";
const DELIVERY_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=82";
const WAREHOUSE_IMAGE =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=82";
const PORT_IMAGE =
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=82";
const FIELD_IMAGE =
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=82";
const RETAIL_IMAGE =
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=82";
const PRODUCTION_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

const copyCountUses: Record<string, string> = {
  "2-part": "Simple sender and receiver records where one original and one retained copy are enough",
  "3-part": "Common driver, warehouse or office, and customer copy distribution",
  "4-part": "Delivery workflows that add finance, carrier, branch or archive control",
  "multi-part": "Complex freight, customs or institutional handovers involving five or more parties",
};

export const deliveryNoteFormsCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/delivery-note-forms",
  categoryName: "Delivery Note Forms",
  alternateNames: [
    "Carbonless Delivery Notes",
    "Proof of Delivery Forms",
    "POD Forms",
    "Waybill Forms",
    "Goods Received Notes",
    "Dispatch Note Forms",
  ],
  audience:
    "3PL operators, freight and distribution companies, warehouses, wholesalers, retail chains, field-service teams, commercial printers and institutional buyers that need signed multi-copy handover records",
  metadata: {
    title: "Delivery Note Forms Manufacturer | Carbonless POD Forms",
    description:
      "Specify carbonless delivery note, POD, waybill and receiving forms by copy roles, fields, numbering, format, proof, packing and repeat-order controls.",
    keywords: [
      "delivery note forms manufacturer",
      "carbonless delivery note forms",
      "proof of delivery forms",
      "POD forms",
      "waybill forms",
      "goods received note forms",
      "3-part delivery note",
      "4-part waybill",
      "numbered delivery note books",
      "custom dispatch note forms",
    ],
  },
  hero: {
    image: {
      slot: "delivery-note-forms:hero",
      fallback: DELIVERY_IMAGE,
      alt: "Carbonless delivery note and proof of delivery forms used in logistics handovers",
    },
    badge: "B2B handover-record program",
    titleBefore: "Delivery Note Forms for ",
    titleHighlight: "Dispatch, Signed Handover and Receiving Control",
    description:
      "A delivery record must show what moved, who accepted it, which exceptions occurred and where every copy goes. We qualify copy roles, item fields, signatures, numbering, finished format and packing as one repeatable POD specification.",
    trustBadges: [
      "2-part to multi-part review",
      "Driver, warehouse and customer copies",
      "Numbering, signatures and exceptions",
      "Sets, pads, books and continuous forms",
    ],
    facts: [
      { value: "7 routes", label: "Handover form programs" },
      { value: "4 formats", label: "Copy-count routes" },
      { value: "4 stages", label: "Approval sequence" },
      { value: "B2B", label: "Bulk and repeat supply" },
    ],
    primaryCta: { label: "Browse Delivery Programs", href: "#product-families" },
    secondaryCta: { label: "Request a Workflow Review", href: "#inquiry" },
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
      label: "Delivery-document matrix",
      title: "Choose by handover event before choosing part count",
      description:
        "A standard delivery, warehouse receipt, freight movement and ERP batch print distribute copies differently. Start with the event, the people who sign and every team that must retain a record.",
    },
    sizes: {
      label: "Copy-count routes",
      title: "Give each responsible party the copy it needs",
      description:
        "Part count describes the copy sequence, not the complete form. Confirm the original owner, every retained copy, lower-ply readability, size, numbering, binding and packing together.",
    },
    applications: {
      label: "Handover applications",
      title: "Match the form to the movement, exception and filing workflow",
      description:
        "Last-mile delivery, freight, receiving, stock transfer, field service and port operations use different item, signature, condition, time and system-reference fields.",
    },
    selection: {
      label: "Four-stage delivery-form specification",
      title: "Map the custody chain before approving the artwork",
      description:
        "Freeze the handover event and copy ownership first, then approve fields, copy sequence, numbering, finishing, transfer clarity and repeat-order identification.",
    },
  },
  families: [
    {
      id: "three-part",
      label: "Core delivery route",
      title: "3-Part Delivery Notes",
      description:
        "Triplicate carbonless sets for common driver, warehouse or office, and customer copy distribution at dispatch and delivery.",
      buyerFit:
        "Confirm who keeps the original, whether the warehouse or office copy travels, which party signs and how shortages or damage are recorded.",
      href: "/products/ncr-forms/3-part",
      linkLabel: "Review 3-part forms",
      featured: true,
      image: {
        slot: "delivery-note-forms:series:three-part",
        fallback: DELIVERY_IMAGE,
        alt: "Three part carbonless delivery note with driver warehouse and customer copies",
      },
    },
    {
      id: "four-part-waybill",
      label: "Freight and carrier route",
      title: "4-Part Waybills & Delivery Orders",
      description:
        "Four-copy forms that add finance, carrier, branch or archive control to a standard delivery handover.",
      buyerFit:
        "Define the carrier and finance copy roles, shipment references, route or vehicle fields, signatures, numbering and exception responsibility.",
      href: "/products/ncr-forms/4-part",
      linkLabel: "Review 4-part forms",
      image: {
        slot: "delivery-note-forms:series:waybill",
        fallback: PORT_IMAGE,
        alt: "Four part waybill and freight delivery order for carrier handover",
      },
    },
    {
      id: "pod",
      label: "Signed acceptance route",
      title: "Proof of Delivery & Customer Sign-Off Forms",
      description:
        "POD records with received-by, date, time, condition, delivery location, signature and exception fields.",
      buyerFit:
        "Best for buyers reducing disputes over delivery time, recipient identity, carton count, shortage, damage or refused goods.",
      href: "#inquiry",
      linkLabel: "Define a POD form",
      image: {
        slot: "delivery-note-forms:series:pod",
        fallback: DELIVERY_IMAGE,
        alt: "Proof of delivery form with customer signature and condition fields",
      },
    },
    {
      id: "receiving",
      label: "Inbound warehouse route",
      title: "Goods Received Notes & Receiving Forms",
      description:
        "Inbound records for purchase order matching, accepted quantities, shortages, damage, quarantine and warehouse sign-off.",
      buyerFit:
        "Confirm supplier, PO, SKU, lot or batch, received quantity, discrepancy, condition, receiving dock, inspector and finance copy requirements.",
      href: "/products/logistics-warehouse-ncr-forms",
      linkLabel: "Review warehouse forms",
      image: {
        slot: "delivery-note-forms:series:receiving",
        fallback: WAREHOUSE_IMAGE,
        alt: "Goods received note and warehouse receiving carbonless form",
      },
    },
    {
      id: "transfer-dispatch",
      label: "Internal movement route",
      title: "Stock Transfer & Dispatch Note Forms",
      description:
        "Branch, store and warehouse movement records with sending, receiving, quantity and responsibility fields.",
      buyerFit:
        "Confirm source and destination locations, SKU and quantity fields, authorization, dispatch and receipt signatures, numbering and filing copy.",
      href: "/products/logistics-warehouse-ncr-forms",
      linkLabel: "Review transfer workflows",
      image: {
        slot: "delivery-note-forms:series:transfer",
        fallback: WAREHOUSE_IMAGE,
        alt: "Stock transfer and dispatch note used between warehouse locations",
      },
    },
    {
      id: "books-pads",
      label: "Manual field route",
      title: "Numbered Delivery Note Books & Pads",
      description:
        "Portable bound or padded forms with sequential numbers, perforated customer copies and optional wraparound covers.",
      buyerFit:
        "Confirm sets per book, copy sequence, numbering range, cover, binding, tear-off position, quantities by branch and carton marks.",
      href: "/products/custom-ncr-forms",
      linkLabel: "Review custom books",
      image: {
        slot: "delivery-note-forms:series:books",
        fallback: NCR_IMAGE,
        alt: "Numbered carbonless delivery note books and pads",
      },
    },
    {
      id: "continuous",
      label: "ERP and WMS route",
      title: "Continuous Delivery & Packing Forms",
      description:
        "Fanfold or pin-feed delivery notes, packing lists and waybills for dot-matrix, ERP and warehouse batch printing.",
      buyerFit:
        "Confirm printer path, form width and depth, sprocket holes, fold pitch, part sequence, print area, burst perforation and carton packing.",
      href: "/products/continuous-computer-forms",
      linkLabel: "Review continuous forms",
      image: {
        slot: "delivery-note-forms:series:continuous",
        fallback: NCR_IMAGE,
        alt: "Continuous computer delivery and packing forms for ERP printing",
      },
    },
  ],
  sizes: ncrFormParts.map((part) => ({
    slug: part.slug,
    label: part.label,
    market: "Global",
    badge: part.badge,
    use: copyCountUses[part.slug] ?? "Multi-party delivery and receiving records",
    href: `/products/ncr-forms/${part.slug}`,
  })),
  applications: [
    {
      id: "last-mile",
      title: "Wholesale, retail and last-mile delivery",
      description:
        "Customer-facing delivery records for cartons, store replenishment, local distribution and route delivery.",
      confirm:
        "order and delivery reference, SKU and quantity, carton count, delivery address, recipient, time, signature, shortage or refusal fields",
      href: "#inquiry",
      linkLabel: "Review a delivery workflow",
      image: {
        slot: "delivery-note-forms:applications:last-mile",
        fallback: RETAIL_IMAGE,
        alt: "Last mile and retail distribution delivery note application",
      },
    },
    {
      id: "freight-3pl",
      title: "3PL, freight and carrier handover",
      description:
        "Multi-party movement records for shippers, carriers, depots, consignees, finance and archive teams.",
      confirm:
        "shipper, carrier and consignee roles, vehicle or route, package count, weight, references, delivery condition, signatures and copy ownership",
      href: "/products/logistics-warehouse-ncr-forms",
      linkLabel: "Review logistics forms",
      image: {
        slot: "delivery-note-forms:applications:freight",
        fallback: DELIVERY_IMAGE,
        alt: "Freight and 3PL carbonless handover forms",
      },
    },
    {
      id: "warehouse",
      title: "Warehouse receiving and discrepancy control",
      description:
        "Inbound records that connect supplier delivery, receiving inspection, stock entry and finance matching.",
      confirm:
        "PO and supplier, SKU or lot, expected and received quantities, shortage, damage, quarantine, receiving signature, date and system reference",
      href: "/products/logistics-warehouse-ncr-forms",
      linkLabel: "Review receiving forms",
      image: {
        slot: "delivery-note-forms:applications:warehouse",
        fallback: WAREHOUSE_IMAGE,
        alt: "Warehouse receiving and discrepancy carbonless form workflow",
      },
    },
    {
      id: "stock-transfer",
      title: "Branch and warehouse stock transfer",
      description:
        "Controlled records for inventory moving between warehouses, branches, stores or production locations.",
      confirm:
        "source and destination, transfer authorization, SKU, quantity, lot, dispatch and receipt signatures, discrepancy and retained copies",
      href: "#inquiry",
      linkLabel: "Review a transfer form",
      image: {
        slot: "delivery-note-forms:applications:transfer",
        fallback: WAREHOUSE_IMAGE,
        alt: "Warehouse and branch stock transfer document workflow",
      },
    },
    {
      id: "field-service",
      title: "Field service, installation and equipment handover",
      description:
        "Delivery and acceptance records for installed equipment, spare parts, tools and completed field-service work.",
      confirm:
        "asset or serial number, delivered items, installation or condition check, technician, customer acceptance, date, location and retained copies",
      href: "/products/field-service-ncr-forms",
      linkLabel: "Review field-service forms",
      image: {
        slot: "delivery-note-forms:applications:field-service",
        fallback: FIELD_IMAGE,
        alt: "Field service equipment delivery and customer handover form",
      },
    },
    {
      id: "port-cargo",
      title: "Port, customs and air-cargo release",
      description:
        "Controlled release and condition records for cargo, containers, gate movements and regulated handovers.",
      confirm:
        "cargo and container IDs, seal, release authority, driver, terminal, condition, damage diagram, time, signatures and agency copies",
      href: "/products/port-customs-air-cargo-ncr-forms",
      linkLabel: "Review cargo forms",
      image: {
        slot: "delivery-note-forms:applications:port",
        fallback: PORT_IMAGE,
        alt: "Port and cargo release carbonless handover documents",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Handover event and copy roles",
      description: "Map who dispatches, transports, accepts, verifies and files the record.",
      inputs: [
        "Delivery, POD, waybill, receiving, transfer or cargo-release event",
        "Original owner and every driver, warehouse, customer, finance or archive copy",
        "Where signatures occur and who accepts exceptions",
        "Manual writing, impact printing or ERP/WMS output",
      ],
    },
    {
      step: "02",
      title: "Layout, item and exception fields",
      description: "Design the form around the data needed to prove movement and acceptance.",
      inputs: [
        "Order, shipment, route, vehicle and delivery references",
        "SKU, description, quantity, carton, weight, lot or serial fields",
        "Shortage, damage, refusal, return and condition records",
        "Received-by, signature, date, time and location fields",
      ],
    },
    {
      step: "03",
      title: "Copy sequence, format and tracking",
      description: "Choose the material and finished form from how the record travels and files.",
      inputs: [
        "CB, CFB and CF sequence with copy colors and labels",
        "Loose set, pad, numbered book or continuous feed",
        "Sequential number, barcode, QR code or system-reference area",
        "Perforation, holes, glue, binding, cover or sprocket feed",
      ],
    },
    {
      step: "04",
      title: "Proof, packing and reorder control",
      description: "Test the complete handover record and freeze a repeatable supply reference.",
      inputs: [
        "Digital or physical proof and lower-ply transfer check",
        "Signature, numbering, barcode and finishing verification",
        "Quantity by form, branch, language, route or revision",
        "Set or book count, carton marks, pallet, destination and reorder ID",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "delivery-note-forms:quality",
      fallback: PRODUCTION_IMAGE,
      alt: "Delivery note copy sequence numbering finishing and packing quality review",
    },
    label: "Handover-to-reorder approval",
    title: "Approve the evidence each party will rely on",
    description:
      "A delivery form is ready when every copy is readable, quantities and exceptions fit the real workflow, signatures and references are unambiguous, numbering and finishing work, and each version remains traceable in packing and reorders.",
    checks: [
      {
        title: "Copy-role and layout check",
        description:
          "Confirm the original and every retained copy, item capacity, reference fields, recipient, date, time, signature and filing labels.",
      },
      {
        title: "Transfer and exception check",
        description:
          "Test handwriting or impact printing through the full set and review shortage, damage, refusal, return and condition fields with operators.",
      },
      {
        title: "Numbering and finishing check",
        description:
          "Verify sequence, barcode or QR area, perforation, binding, cover, holes, fold pitch or sprocket feed before production release.",
      },
      {
        title: "Version and packing check",
        description:
          "Match artwork revision, number range, language, branch or route, set or book count, carton marks, pallet and approved reorder reference.",
      },
    ],
    note:
      "POD wording, transport terms, regulated fields, archival claims, paper chemistry, FSC and security features are separate evidence scopes. Confirm the destination, contract, tender or system requirement for the exact order.",
  },
  faq: [
    {
      q: "What information is needed for a delivery note form quotation?",
      a: "Send the handover use, copy recipients, part count, finished size, layout or sample, item and signature fields, numbering, format, quantity by version, packing and destination.",
    },
    {
      q: "What is the difference between a delivery note and a proof of delivery form?",
      a: "A delivery note lists the goods moving with a shipment. A proof of delivery form emphasizes recipient identity, date, time, signature and condition at acceptance. One custom form can combine both functions when the workflow and legal wording are approved.",
    },
    {
      q: "Should a delivery note be 2-part, 3-part or 4-part?",
      a: "Choose from the number of parties that need an immediate copy. A 2-part set supports sender and receiver; 3-part commonly separates driver, warehouse or office, and customer; 4-part adds finance, carrier, branch or archive control.",
    },
    {
      q: "Can delivery forms record shortages, damage and refused goods?",
      a: "Yes. Layouts can include expected and received quantities, shortage, damage, refusal, return, condition, comments, photo reference and responsible-party signature fields.",
    },
    {
      q: "Can delivery notes include sequential numbers, barcodes or QR codes?",
      a: "Yes. Provide the numbering logic, barcode symbology or QR content, system reference and scan area. These elements should be checked against the approved artwork and operational workflow before production.",
    },
    {
      q: "Can you supply delivery note books and continuous computer forms?",
      a: "Yes. Delivery forms can be loose collated sets, glued pads, numbered books with perforated copies, or continuous fanfold and pin-feed forms for dot-matrix, ERP and WMS printing.",
    },
    {
      q: "How is lower-copy readability checked?",
      a: "A physical sample can test handwriting or impact printing through the complete CB, CFB and CF sequence. Review the lowest ply, field alignment and real pen or printer pressure before production approval.",
    },
    {
      q: "How are minimum order and production timing confirmed?",
      a: "They depend on size, part count, print colors, numbering, barcode or QR work, binding, versions, quantity, proof, packing and destination. Send the required delivery window and quantity by version for order-specific confirmation.",
    },
  ],
  inquiry: {
    label: "B2B delivery-form review",
    title: "Send the custody chain, copy roles, fields and finished format",
    description:
      "A complete request lets us identify missing handover, artwork, copy-sequence, numbering, proof and packing inputs before quotation.",
    checklist: [
      "Delivery, POD, waybill, receiving or transfer use and every copy recipient",
      "Finished size, sample or artwork, item, exception, signature and system-reference fields",
      "Part count, copy colors, numbering, barcode or QR, set, pad, book or continuous format",
      "Quantity by version, proof, packing, destination and requested delivery window",
    ],
    productName: "Delivery Note Forms",
    initialMessage:
      "Company and buyer type:\nDelivery, POD, waybill, receiving or transfer use:\nOriginal and copy recipients:\nNumber of parts required:\nFinished size and format:\nArtwork, PDF or marked sample:\nLanguages, logo and print colors:\nOrder, shipment, SKU and quantity fields:\nShortage, damage, refusal or return fields:\nSignature, date, time and received-by fields:\nNumbering range, barcode or QR requirement:\nLoose sets, pads, books or continuous feed:\nPerforation, holes, glue, cover or binding:\nQuantity by form, branch, language or version:\nProof or physical sample requirement:\nSet, book, carton and pallet packing:\nPrivate-label or carton-mark requirement:\nDestination country / port:\nRequested delivery window:\nCurrent delivery-record problem:",
    responseNote:
      "We will review the handover workflow, identify missing qualification inputs and confirm the next quotation step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "NCR Forms", path: "/products/ncr-forms" },
    { name: "Delivery Note Forms", path: "/products/delivery-note-forms" },
  ],
  relatedPrograms: [
    { label: "NCR Forms & Carbonless Paper", href: "/products/ncr-forms" },
    { label: "Custom NCR Forms", href: "/products/custom-ncr-forms" },
    { label: "Logistics & Warehouse NCR Forms", href: "/products/logistics-warehouse-ncr-forms" },
    { label: "Continuous Computer Forms", href: "/products/continuous-computer-forms" },
  ],
} satisfies ProductCategoryConfig;
