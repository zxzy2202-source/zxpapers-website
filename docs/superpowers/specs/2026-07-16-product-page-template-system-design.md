# Product Page Template System Design

## Objective

Create a reusable, configuration-first product-page system for ZhixinPaper without replacing the existing visual identity or flattening different buyer journeys into one universal page.

The system will provide three template families:

1. `CatalogHubTemplate` for broad product discovery.
2. `CategoryGatewayTemplate` for category, program, and variant selection.
3. `ProductDetailTemplate` for fit, specification, risk reduction, evidence, and qualified RFQ.

The first implementation migrates one representative route into each family:

| Template family | Representative route | Existing design role |
|---|---|---|
| Catalog Hub | `/products` | Complete product-family directory |
| Category Gateway | `/products/thermal-paper-rolls` | OEM-led category and program gateway |
| Product Detail | `/products/shipping-labels` | Application-led product detail and sourcing page |

Other existing product routes remain unchanged in this phase.

## Business Context

The templates serve overseas B2B buyers, including distributors, importers, private-label brands, commercial printers, converters, warehouses, 3PL operators, procurement teams, and repeat-order programs.

The template system must help buyers:

- identify the correct product family or route;
- compare products using complete specifications rather than one headline dimension;
- understand application, printer, packing, artwork, quality, and delivery risks;
- distinguish confirmed evidence from general marketing claims;
- submit an inquiry containing enough information for feasibility review and pricing.

The primary conversion is a specification-based RFQ, not a generic contact submission.

## Approved Design Direction

The visual baseline is the current `/products/ncr-forms` page.

The shared visual language includes:

- a compact, image-backed navy hero with amber emphasis;
- a restrained decision-fact strip beneath the hero when appropriate;
- alternating full-width white and light-slate sections;
- amber section labels and navy headings;
- thin bordered directories, comparison grids, and specification tables;
- open layouts with clear hierarchy instead of repeated floating cards;
- left-side section introductions paired with dense right-side content where useful;
- numbered FAQ rows;
- a split RFQ block with a navy qualification panel and white form panel;
- Sora for display headings and Inter for body and interface text;
- the existing navy, amber, white, and slate site palette.

NCR-specific modules such as copy-count selection and CB/CFB/CF layer explanations are not copied into unrelated pages. Only the design grammar and reusable interaction patterns are shared.

## Non-Goals

- Do not redesign the global header, footer, or brand identity.
- Do not migrate all existing product routes in the first implementation.
- Do not create a CMS or admin page builder in this phase.
- Do not create one universal renderer that accepts arbitrary section JSON.
- Do not allow arbitrary JSX inside page configuration files.
- Do not publish fixed MOQ, lead time, certification, compatibility, or performance claims without page-specific evidence.
- Do not add file-upload support to the inquiry form.
- Do not change route URLs or canonical ownership as part of template extraction.

## Architecture

### Template Families

```text
src/components/products/templates/
  CatalogHubTemplate.tsx
  CategoryGatewayTemplate.tsx
  ProductDetailTemplate.tsx
```

Each template controls its information hierarchy and accepted modules. A template is not a freeform section renderer.

### Shared Sections

```text
src/components/products/template-sections/
  ProcurementHero.tsx
  DecisionFactStrip.tsx
  DirectAnswerBlock.tsx
  BuyerProgramGrid.tsx
  ProductDirectory.tsx
  ProblemResponseGrid.tsx
  SpecificationTable.tsx
  ApplicationGrid.tsx
  ApprovalWorkflow.tsx
  EvidenceSection.tsx
  NumberedFaq.tsx
  QualifiedInquiry.tsx
```

Shared sections are small, server-renderable components with typed props. They own visual consistency, semantics, responsive behavior, and accessibility, but not product-specific claims.

### Page Configuration

```text
src/config/product-pages/
  products-catalog.ts
  thermal-paper-rolls.ts
  shipping-labels.ts
```

Future pages are created by adding a TypeScript configuration file and a thin route entry. Configuration contains data only: entities, copy, links, image-slot references, specifications, FAQ answers, workflow steps, evidence boundaries, and inquiry prompts.

### Builders And Validation

```text
src/lib/product-pages/
  metadata.ts
  schema.ts
  validation.ts
```

- `metadata.ts` builds page-specific title, description, canonical, Open Graph, and Twitter metadata.
- `schema.ts` builds template-aware structured data from the same visible content configuration.
- `validation.ts` enforces required fields, route ownership, content/schema parity, and evidence rules.

### Route Data Flow

```text
route/page.tsx
  -> import typed page configuration
  -> resolve registered image-slot overrides and fallbacks
  -> validate configuration
  -> generate metadata and JSON-LD
  -> render the appropriate template
```

The route remains a server component. Content that does not need client state must not increase the initial JavaScript bundle.

## Type Model

The implementation should use a discriminated union rather than a broad interface with many optional fields.

```ts
type ProductPageConfig =
  | CatalogHubConfig
  | CategoryGatewayConfig
  | ProductDetailConfig;

interface ProductPageBaseConfig {
  kind: "catalog" | "category" | "detail";
  identity: PageIdentity;
  metadata: PageMetadataInput;
  hero: ProcurementHeroConfig;
  breadcrumbs: BreadcrumbItem[];
  faq: FaqItem[];
  inquiry: QualifiedInquiryConfig;
}
```

Each specialized config adds only the modules required by its buyer journey. Optional sections use explicit optional properties and are omitted when empty.

Configuration must use registered image-slot keys and valid internal route strings. Links and image slots must not be silently invented at render time.

## Module Contracts

### Shared Required Foundation

Every template requires:

- literal page and product identity;
- URL and canonical ownership;
- metadata title and description inputs;
- one H1 and a concise opening answer;
- hero image slot and fallback;
- primary conversion action;
- breadcrumbs;
- visible FAQ content;
- product-specific inquiry prompt and qualification fields.

### Catalog Hub

Required modules:

1. Hero and direct opening answer.
2. Buyer or procurement routes.
3. Product-family directory.
4. Internal-link ownership for child categories.
5. FAQ.
6. Qualified RFQ.

Optional modules:

- site-level decision facts;
- applications;
- broad selection guide;
- problem-response summary.

Detailed product specifications and approval workflows do not belong on the catalog hub.

### Category Gateway

Required modules:

1. Hero and direct opening answer.
2. Decision facts.
3. Buyer or commercial program routes.
4. Product, variant, or size directory.
5. Problem-to-consequence-to-response content.
6. Approval workflow.
7. Quality or evidence boundary.
8. FAQ.
9. Qualified RFQ.

Optional modules:

- applications;
- summarized specification guidance;
- material comparison;
- related category links.

The category gateway answers what is available, how to choose, and what must be confirmed before pricing. It does not duplicate full child-page specification tables.

### Product Detail

Required modules:

1. Hero and direct opening answer.
2. Decision facts.
3. Buyer problem and page response.
4. Fit, compatibility, or specification basis.
5. Approval or order workflow.
6. Inspection, quality, or evidence boundary.
7. FAQ.
8. Qualified RFQ.

Optional modules:

- applications;
- comparison table;
- packing or pallet information;
- related products;
- visible step-by-step instructions that qualify for `HowTo` schema.

The detail template resolves fit, risk, specification, approval, and repeat-order questions for one product topic.

## SEO And GEO Design

### Single Source Of Truth

Visible content, metadata, structured data, internal links, and inquiry qualification derive from one page configuration. FAQ and workflow schema must never have a separate copy source from the visible page.

### Template-Aware Schema

| Template | Required schema | Conditional schema |
|---|---|---|
| Catalog Hub | `CollectionPage`, `ItemList`, `BreadcrumbList`, `FAQPage` | none by default |
| Category Gateway | `CollectionPage`, `ItemList`, `BreadcrumbList`, `FAQPage` | `DefinedTermSet` when a visible glossary exists |
| Product Detail | `Product`, `BreadcrumbList`, `FAQPage` | `HowTo` only when the visible workflow qualifies |

`Offer`, price, availability, rating, and review data are not generated unless real current commercial data exists.

### GEO Content Requirements

- Use literal product, buyer, material, printer, packing, and application entities.
- Use question-led headings where they reflect real buyer questions.
- Put concise direct answers before extended explanation.
- Present selection and comparison criteria in readable HTML tables, lists, or definition grids.
- Link parent, child, and related pages with descriptive anchors.
- Keep claims within the configured product and evidence scope.
- Distinguish BPA-free, BPS-free, phenol-free, FSC, ISO, test reports, and market requirements instead of combining them into generic badges.

### Page Ownership

Every config owns one canonical URL and one primary topic. Validation must flag duplicate canonical ownership inside the template configuration registry.

## Evidence And Claim Rules

Page facts are divided into:

1. **Confirmed product facts**: suitable for visible decision facts and schema.
2. **Review-dependent options**: described as available for review or confirmed after specification review.
3. **Unsupported or unverified claims**: blocked from reusable template facts.

The template must not turn optional marketing copy into a certification, compliance, compatibility, performance, MOQ, or lead-time promise.

Evidence configuration should identify enough context for a reviewer to understand the subject and scope of the claim. A generic certification logo is not sufficient evidence for a product-specific statement.

## Error Handling

### Build-Blocking Errors

Validation fails development tests and production build when a representative config has:

- no canonical URL;
- no H1 or opening answer;
- no literal product/page entity;
- duplicate canonical ownership;
- a required template module missing;
- FAQ or workflow schema content that differs from visible content;
- an inquiry section without required qualification fields;
- an unregistered image-slot key;
- an invalid required internal link.

### Graceful Omission

- Empty optional module arrays do not render empty headings or containers.
- Missing admin image overrides use registered code fallbacks.
- Optional badges or facts do not reserve layout space when absent.
- A workflow does not generate `HowTo` schema unless explicitly eligible and visible.

Runtime pages must not silently render misleading placeholder claims.

## Responsive And Accessibility Requirements

- Preserve one H1 per page and logical H2-H3 hierarchy.
- Maintain visible focus states and semantic links, buttons, tables, lists, and disclosure elements.
- Use native `details`/`summary` or equivalent accessible disclosure behavior for FAQ.
- Keep hero copy, decision facts, directory grids, tables, and RFQ fields within the viewport at 390px, 768px, 1280px, 1440px, and 1920px widths.
- Avoid horizontal overflow and nested scrolling for primary content.
- Product grids collapse predictably without changing information order.
- Text does not depend on hover for access.
- Decorative images use empty alt text; informative images require product-specific alt text.
- Respect reduced-motion preferences.

## Migration Strategy

### Phase 1 Representative Pages

1. Extract shared visual primitives from the current NCR Forms design language without migrating the NCR page itself.
2. Migrate `/products` to `CatalogHubTemplate` while preserving its content, URLs, image slots, directory behavior, and visual hierarchy.
3. Migrate `/products/thermal-paper-rolls` to `CategoryGatewayTemplate` while preserving its OEM program structure, metadata, schema, RFQ, and current visual result.
4. Migrate `/products/shipping-labels` to `ProductDetailTemplate` while preserving its 3PL/warehouse buyer focus, specifications, risk content, workflow, schema, and RFQ.

Each route is migrated and verified independently. The next representative route is not migrated until the previous route passes its visual and contract checks.

### Future Pages

A future product page should require:

1. one typed config file;
2. registered image slots and fallbacks;
3. a thin route selecting one template;
4. inclusion in the appropriate parent directory, sitemap, and `llms.txt` when the route is public;
5. config, route, and browser verification.

Existing routes can be migrated later only when their content has been reviewed and mapped to a template family.

## Verification Strategy

### Configuration Tests

- validate required fields by template kind;
- detect duplicate canonical ownership;
- validate internal links and registered image slots;
- verify visible FAQ and workflow data feed schema;
- reject unsupported schema fields;
- verify product-specific inquiry qualification fields.

### Route Contract Tests

For each representative route, verify:

- HTTP 200;
- one H1;
- expected title, description, and canonical;
- expected schema types;
- visible FAQ count matches FAQ schema count;
- visible workflow matches conditional schema when present;
- required parent, child, and related links exist;
- inquiry section contains the product-specific initial prompt.

### Build Verification

- run TypeScript checks under bundled Node 24;
- run the Next.js production build;
- confirm representative routes are generated without errors;
- verify no unexpected increase in client-side JavaScript for server-renderable content.

### Browser QA

Verify at desktop and mobile viewports:

- page identity and title;
- meaningful first viewport;
- hero framing and image loading;
- module order and section rhythm;
- directory, FAQ, and menu interactions;
- inquiry validation behavior;
- no framework overlay;
- no relevant console errors or warnings;
- no horizontal overflow;
- visual comparison against pre-migration screenshots.

## Acceptance Criteria

- Three template families and their typed configs exist.
- `/products`, `/products/thermal-paper-rolls`, and `/products/shipping-labels` render through the new templates.
- The three migrated pages remain visually recognizable and preserve their approved buyer positioning.
- New pages can be created primarily by writing a typed data configuration rather than copying large JSX files.
- Metadata, structured data, visible FAQ/workflow content, links, and RFQ prompts share one source.
- Required configuration errors are caught before deployment.
- Type-check, production build, route contracts, and desktop/mobile browser checks pass.
- No unrelated existing product pages are migrated or visually changed.

## Approved Decisions Summary

- Use three template families, not one universal template.
- Use TypeScript configuration files for future pages.
- Preserve existing good pages through conservative template extraction.
- Migrate one representative route per template family in the first implementation.
- Use the current NCR Forms page as the shared visual baseline.
- Use composable typed templates and controlled optional modules.
- Generate SEO/GEO, schema, internal links, and RFQ data from the same configuration.
- Enforce build-time validation and browser-level visual regression checks.
