# ZX Papers and Zhixin Paper Domain Ownership

## Decision

Use product-line ownership first and geographic ownership second. Do not split the entire catalog by geography until both domains offer the same product range.

| Search intent or product | Europe, US, Canada, Mexico | Other regions |
| --- | --- | --- |
| Thermal paper rolls | zhixinpaper.com | zxpapers.com |
| Thermal labels | zhixinpaper.com | zxpapers.com |
| NCR and carbonless forms | zxpapers.com | zxpapers.com |
| Can, bottle and detergent labels | zxpapers.com | zxpapers.com |
| Other products not published on zhixinpaper.com | zxpapers.com | zxpapers.com |
| Manufacturing and OEM capability | Both sites may explain capability, but each page must link to its owned product conversion path | Both sites may explain capability, but each page must link to its owned product conversion path |

## URL Rules

- `zxpapers.com/markets/europe` redirects with HTTP 301 to `zhixinpaper.com/eu`.
- `zxpapers.com/markets/europe/*` redirects with HTTP 301 to `zhixinpaper.com/eu`.
- Europe and Italy must not appear in the ZX Papers Markets navigation, market cards, footer market links or XML sitemap.
- European specifications, product applications and compliance information may remain on ZX Papers product and resource pages. Those references describe product capability and do not create a regional landing-page owner.
- Do not use cross-domain canonical tags as a substitute for a redirect when an old regional URL has a clear replacement.

## Content Governance

Before creating a page on either site, assign four fields:

1. Primary keyword and buyer intent.
2. Product-line owner.
3. Geographic owner, when the page is explicitly regional.
4. Conversion destination.

Do not publish the same keyword, region and product combination on both domains. A page can discuss the same specification on both sites only when the buyer intent and conversion path are materially different.

## Expansion Rule

Keep ZX Papers as the full-range catalog until Zhixin Paper has complete category, specification, compliance, inquiry and supporting-content coverage for a product family. Migrate a product family only after its replacement pages are live, internally linked, included in the Zhixin Paper sitemap and mapped with one-hop redirects from any retired ZX Papers URLs.

## Future NCR and Carbonless Forms Expansion

Zhixin Paper can add NCR and carbonless forms later. Treat this as a product-cluster launch rather than a single generic page.

Recommended first release:

- NCR forms and carbonless paper aggregation page.
- 2-part, 3-part, 4-part and multi-part form pages.
- NCR invoice books, receipt books and delivery note books.
- Continuous computer forms.
- Custom printing, numbering, perforation, binding, paper color sequence and packing specifications.
- Regional terminology for `NCR forms`, `carbonless forms`, `duplicate books`, `triplicate books`, `invoice books` and `continuous forms`.
- A specification-based quote path covering size, number of parts, sheet colors, printing, numbering, perforation, binding, quantity and destination.

Migration gate:

1. Publish the complete Zhixin Paper NCR cluster and include it in navigation, sitemap and `llms.txt`.
2. Verify every page has a distinct search intent, one H1, suitable schema, internal links and a working inquiry path.
3. Assign Europe, US, Canada and Mexico NCR ownership to Zhixin Paper only after the cluster is complete.
4. Keep ZX Papers as the owner for other regions and for any NCR subcategory not yet available on Zhixin Paper.
5. Redirect only overlapping regional NCR URLs; do not redirect the entire ZX Papers NCR catalog.
