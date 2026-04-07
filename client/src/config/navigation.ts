// ThermalRollPro Navigation Configuration
// Design: Global Trade Authority — B2B thermal paper manufacturer

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface NavDropdown {
  label: string;
  items: NavItem[];
  featured?: NavItem[];
}

export const mainNav: (NavItem | NavDropdown)[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    items: [
      { label: "All Products", href: "/products" },
      { label: "Blank Thermal Paper Rolls", href: "/products/thermal-paper-rolls/blank" },
      { label: "Custom Printed Thermal Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
      { label: "Blank Thermal Labels", href: "/products/thermal-labels/blank" },
      { label: "Custom Printed Thermal Labels", href: "/products/thermal-labels/custom-printed" },
    ],
    featured: [
      { label: "80mm x 80mm", href: "/products/thermal-paper-rolls/sizes/80mm-x-80mm", badge: "Most Popular" },
      { label: "57mm x 50mm", href: "/products/thermal-paper-rolls/sizes/57mm-x-50mm" },
      { label: '3 1/8" x 230\'', href: "/products/thermal-paper-rolls/sizes/3-1-8-x-230", badge: "US Standard" },
      { label: '4" x 6" Shipping', href: "/products/thermal-labels/sizes/4x6-shipping-labels", badge: "Most Popular" },
      { label: '2" x 1" Barcode', href: "/products/thermal-labels/sizes/2x1-barcode-labels" },
    ],
  },
  {
    label: "OEM & Custom",
    items: [
      { label: "OEM Services Overview", href: "/oem" },
      { label: "Custom Printing & Specs", href: "/oem/custom-printing" },
      { label: "Packaging & Private Label", href: "/oem/packaging" },
      { label: "Design Support", href: "/oem/design-support" },
      { label: "Quality Assurance", href: "/oem/quality-assurance" },
      { label: "IP Protection & NDA", href: "/oem/ip-protection" },
      { label: "Case Studies", href: "/oem/case-studies" },
    ],
  },
  {
    label: "Manufacturing",
    items: [
      { label: "Factory Overview", href: "/manufacturing" },
      { label: "Quality Control", href: "/manufacturing/quality-control" },
      { label: "Certifications", href: "/manufacturing/certifications" },
      { label: "Equipment", href: "/manufacturing/equipment" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "OEM Guide", href: "/resources/oem-guide" },
      { label: "Product Knowledge", href: "/resources/product-knowledge" },
      { label: "Application Cases", href: "/resources/application-cases" },
      { label: "Industry Insights", href: "/resources/industry-insights" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const paperRollSizes = [
  { slug: "80mm-x-80mm", label: "80mm x 80mm", badge: "Most Popular", markets: "Global" },
  { slug: "57mm-x-50mm", label: "57mm x 50mm", markets: "Asia" },
  { slug: "80mm-x-70mm", label: "80mm x 70mm", markets: "Europe" },
  { slug: "3-1-8-x-230", label: '3 1/8" x 230\'', badge: "US Standard", markets: "Americas" },
  { slug: "57mm-x-40mm", label: "57mm x 40mm", markets: "Asia" },
  { slug: "2-1-4-x-50", label: '2 1/4" x 50\'', markets: "Americas" },
];

export const labelSizes = [
  { slug: "4x6-shipping-labels", label: '4" x 6" Shipping', badge: "Most Popular", markets: "Global" },
  { slug: "100mm-x-150mm", label: "100mm x 150mm", markets: "Global" },
  { slug: "2x1-barcode-labels", label: '2" x 1" Barcode', markets: "Americas" },
  { slug: "4x4-square-labels", label: '4" x 4" Square', markets: "Global" },
  { slug: "3x1-product-labels", label: '3" x 1" Product', markets: "Americas" },
  { slug: "101mm-x-152mm", label: "101mm x 152mm (A6)", markets: "Europe" },
];

export const footerLinks = {
  products: [
    { label: "Blank Thermal Rolls", href: "/products/thermal-paper-rolls/blank" },
    { label: "Custom Printed Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
    { label: "Blank Thermal Labels", href: "/products/thermal-labels/blank" },
    { label: "Custom Printed Labels", href: "/products/thermal-labels/custom-printed" },
    { label: "All Products", href: "/products" },
  ],
  oem: [
    { label: "OEM Overview", href: "/oem" },
    { label: "Custom Printing", href: "/oem/custom-printing" },
    { label: "Packaging & Private Label", href: "/oem/packaging" },
    { label: "Design Support", href: "/oem/design-support" },
    { label: "Case Studies", href: "/oem/case-studies" },
  ],
  resources: [
    { label: "Specifications", href: "/specifications" },
    { label: "Resource Center", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Manufacturing", href: "/manufacturing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "OEM Partnership", href: "/contact/oem-partnership" },
  ],
  popularSizes: [
    { label: "80mm x 80mm Rolls", href: "/products/thermal-paper-rolls/sizes/80mm-x-80mm" },
    { label: "57mm x 50mm Rolls", href: "/products/thermal-paper-rolls/sizes/57mm-x-50mm" },
    { label: `3 1/8" x 230' Rolls`, href: "/products/thermal-paper-rolls/sizes/3-1-8-x-230" },
    { label: `4" x 6" Labels`, href: "/products/thermal-labels/sizes/4x6-shipping-labels" },
    { label: "100mm x 150mm Labels", href: "/products/thermal-labels/sizes/100mm-x-150mm" },
    { label: `2" x 1" Labels`, href: "/products/thermal-labels/sizes/2x1-barcode-labels" },
  ],
};
