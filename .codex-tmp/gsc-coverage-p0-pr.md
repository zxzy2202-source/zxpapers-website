## Summary

- add evidence-backed redirects for legacy WordPress product, blog, inquiry, pagination, and language URLs
- order specific redirects before host, language, and generic product fallbacks to avoid chains and shadowing
- keep redirect and admin HTML crawlable so search engines can observe redirects and `noindex`
- point image-manager entries at canonical thermal product URLs
- add P0 SEO contract coverage for redirect order, canonical mappings, robots behavior, image links, and sitemap redirect exclusions

## Validation

- focused SEO and shipping-label contracts: 15 passed
- TypeScript: `tsc --noEmit` passed
- Next.js production build: passed, 127 pages generated
- sitemap audit: 104 URLs checked; 0 missing canonical routes, duplicates, invalid hosts, redirect URLs, or non-200 responses
- local coverage replay: 1,013 unique paths checked; 965 returned 200, 48 intentional 404s, and no 5xx or invalid redirects

## Baseline note

The full repository test run currently reports 29/32 passing. The three failures are pre-existing `origin/main` assertions in the can-label and products-navigation contracts; the related source and tests are unchanged by this PR.
