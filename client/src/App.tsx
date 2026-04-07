// ThermalRollPro App — All routes configured
// Design: Global Trade Authority

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Main pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import OEM from "./pages/OEM";
import Manufacturing from "./pages/Manufacturing";
import Specifications from "./pages/Specifications";
import Resources from "./pages/Resources";

// Product pages
import BlankThermalRolls from "./pages/products/BlankThermalRolls";
import CustomPrintedRolls from "./pages/products/CustomPrintedRolls";
import BlankThermalLabels from "./pages/products/BlankThermalLabels";
import CustomPrintedLabels from "./pages/products/CustomPrintedLabels";

// Roll size pages
import { Size80x80, Size57x50, Size80x70, Size3x230, Size57x40, Size2x50 } from "./pages/products/sizes/RollSizes";

// Label size pages
import { Label4x6, Label100x150, Label2x1, Label4x4, Label3x1, Label101x152 } from "./pages/products/sizes/LabelSizes";

// OEM sub-pages
import { CustomPrinting, Packaging, DesignSupport, QualityAssurance, IPProtection, CaseStudies } from "./pages/oem/OEMSubPages";

// Manufacturing sub-pages
import { QualityControl, Certifications, Equipment } from "./pages/manufacturing/ManufacturingSubPages";

// Resources sub-pages
import { OEMGuide, ProductKnowledge, ApplicationCases, IndustryInsights } from "./pages/resources/ResourceSubPages";

// Contact sub-pages
import OEMPartnership from "./pages/contact/OEMPartnership";

function Router() {
  return (
    <Switch>
      {/* Main pages */}
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/oem" component={OEM} />
      <Route path="/manufacturing" component={Manufacturing} />
      <Route path="/specifications" component={Specifications} />
      <Route path="/resources" component={Resources} />

      {/* Product pages */}
      <Route path="/products/thermal-paper-rolls/blank" component={BlankThermalRolls} />
      <Route path="/products/thermal-paper-rolls/custom-printed" component={CustomPrintedRolls} />
      <Route path="/products/thermal-labels/blank" component={BlankThermalLabels} />
      <Route path="/products/thermal-labels/custom-printed" component={CustomPrintedLabels} />

      {/* Thermal paper roll size pages */}
      <Route path="/products/thermal-paper-rolls/sizes/80mm-x-80mm" component={Size80x80} />
      <Route path="/products/thermal-paper-rolls/sizes/57mm-x-50mm" component={Size57x50} />
      <Route path="/products/thermal-paper-rolls/sizes/80mm-x-70mm" component={Size80x70} />
      <Route path="/products/thermal-paper-rolls/sizes/3-1-8-x-230" component={Size3x230} />
      <Route path="/products/thermal-paper-rolls/sizes/57mm-x-40mm" component={Size57x40} />
      <Route path="/products/thermal-paper-rolls/sizes/2-1-4-x-50" component={Size2x50} />

      {/* Thermal label size pages */}
      <Route path="/products/thermal-labels/sizes/4x6-shipping-labels" component={Label4x6} />
      <Route path="/products/thermal-labels/sizes/100mm-x-150mm" component={Label100x150} />
      <Route path="/products/thermal-labels/sizes/2x1-barcode-labels" component={Label2x1} />
      <Route path="/products/thermal-labels/sizes/4x4-square-labels" component={Label4x4} />
      <Route path="/products/thermal-labels/sizes/3x1-product-labels" component={Label3x1} />
      <Route path="/products/thermal-labels/sizes/101mm-x-152mm" component={Label101x152} />

      {/* OEM sub-pages */}
      <Route path="/oem/custom-printing" component={CustomPrinting} />
      <Route path="/oem/packaging" component={Packaging} />
      <Route path="/oem/design-support" component={DesignSupport} />
      <Route path="/oem/quality-assurance" component={QualityAssurance} />
      <Route path="/oem/ip-protection" component={IPProtection} />
      <Route path="/oem/case-studies" component={CaseStudies} />

      {/* Manufacturing sub-pages — now fully implemented */}
      <Route path="/manufacturing/quality-control" component={QualityControl} />
      <Route path="/manufacturing/certifications" component={Certifications} />
      <Route path="/manufacturing/equipment" component={Equipment} />

      {/* Resources sub-pages — now fully implemented */}
      <Route path="/resources/oem-guide" component={OEMGuide} />
      <Route path="/resources/product-knowledge" component={ProductKnowledge} />
      <Route path="/resources/application-cases" component={ApplicationCases} />
      <Route path="/resources/industry-insights" component={IndustryInsights} />

      {/* Resources article pages — fallback to Resources listing */}
      <Route path="/resources/:slug" component={Resources} />

      {/* Contact sub-pages */}
      <Route path="/contact/oem-partnership" component={OEMPartnership} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
