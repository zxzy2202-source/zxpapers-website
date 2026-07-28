import type { LucideIcon } from "lucide-react";
import { Award, FileCheck, Globe, Leaf, Shield, Zap } from "lucide-react";

export type ComplianceEvidenceKind =
  | "Management system certificate"
  | "Chain-of-custody certificate"
  | "Third-party test report"
  | "Supplier declaration"
  | "Regulatory reference"
  | "Conformity declaration";

export interface ComplianceEvidence {
  name: string;
  icon: LucideIcon;
  color: "blue" | "green" | "amber" | "purple" | "teal" | "indigo";
  kind: ComplianceEvidenceKind;
  scope: string;
  basis: string;
  availability: string;
  description: string;
  buyerChecks: string[];
}

export const COMPLIANCE_EVIDENCE: ComplianceEvidence[] = [
  {
    name: "ISO 9001:2015",
    icon: Award,
    color: "blue",
    kind: "Management system certificate",
    scope: "Quality-management processes for the certified legal entity and activities",
    basis: "Certificate and surveillance records supplied for buyer review",
    availability: "Current certificate copy available upon request",
    description: "Buyers should verify the legal entity, certified scope, certificate number, issuing body, and validity dates on the supplied copy.",
    buyerChecks: ["Legal entity matches the contracting supplier", "Scope covers the relevant manufacturing activity", "Issuer and certificate number are visible", "Validity is checked at the time of order"],
  },
  {
    name: "FSC chain of custody",
    icon: Leaf,
    color: "green",
    kind: "Chain-of-custody certificate",
    scope: "FSC-eligible paper products and controlled chain-of-custody claims",
    basis: "Certificate and product-specific claim documentation supplied for review",
    availability: "Confirm product eligibility and claim wording before order",
    description: "FSC status is product- and claim-specific. Buyers should confirm that the requested material and invoice claim fall within the current certificate scope.",
    buyerChecks: ["Certificate holder and code", "Current certificate status", "Requested product is eligible", "Claim wording is approved before printing"],
  },
  {
    name: "BPA / phenol testing",
    icon: Shield,
    color: "amber",
    kind: "Third-party test report",
    scope: "Tested material, analytes, method, detection limits, and sampled batch",
    basis: "Laboratory report for the applicable material or batch",
    availability: "Relevant reports can be requested by product specification",
    description: "A BPA-free or phenol-free statement should be checked against the tested sample, test method, report date, and requested product grade.",
    buyerChecks: ["Sample description matches the ordered grade", "Laboratory and report date are identified", "Test method and result units are shown", "Batch relevance is confirmed when required"],
  },
  {
    name: "RoHS documentation",
    icon: Globe,
    color: "purple",
    kind: "Supplier declaration",
    scope: "Restricted-substance declaration for the specified material or finished product",
    basis: "Applicable supplier declaration and supporting material records",
    availability: "Confirm applicability to the destination market and product",
    description: "RoHS is a regulatory framework, not an issuing body. Documentation should identify the applicable product, declaration basis, and responsible entity.",
    buyerChecks: ["Applicable directive or requirement is named", "Product scope is explicit", "Responsible legal entity signs the declaration", "Supporting test data is requested when needed"],
  },
  {
    name: "REACH / SVHC documentation",
    icon: FileCheck,
    color: "teal",
    kind: "Regulatory reference",
    scope: "Material declarations and SVHC information for the specified product",
    basis: "Supplier declaration and supporting substance information",
    availability: "Current declaration available for applicable specifications",
    description: "REACH is a regulation rather than a certificate. Buyers should request a dated declaration tied to the exact material and current candidate-list requirements.",
    buyerChecks: ["Declaration date is current", "Exact product or material is named", "SVHC basis is stated", "Destination-market requirements are confirmed"],
  },
  {
    name: "CE applicability",
    icon: Zap,
    color: "indigo",
    kind: "Conformity declaration",
    scope: "Only products that fall under an applicable CE-marking legal framework",
    basis: "Applicable EU declaration of conformity and supporting technical documentation",
    availability: "Applicability must be confirmed for the specific product",
    description: "CE marking is not a general paper-product certificate. Where a product is in scope, buyers should review the applicable legislation and declaration of conformity.",
    buyerChecks: ["CE marking is legally applicable to the product", "Applicable legislation is identified", "Responsible entity is named", "Technical documentation supports the declaration"],
  },
];
