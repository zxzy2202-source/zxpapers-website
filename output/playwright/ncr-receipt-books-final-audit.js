async page => {
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);

  for (let y = 0; y < pageHeight; y += 700) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(60);
  }

  await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete));
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(250);

  return page.evaluate(() => {
    const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
      .map((script) => {
        try {
          return JSON.parse(script.textContent || "null");
        } catch {
          return null;
        }
      })
      .filter(Boolean);

    const schemaByType = Object.fromEntries(
      scripts.map((schema) => [schema["@type"], schema]),
    );
    const h1 = document.querySelector("h1");
    const h1Style = h1 ? window.getComputedStyle(h1) : null;
    const h1LineHeight = h1Style ? Number.parseFloat(h1Style.lineHeight) : 0;
    const main = document.querySelector("main");
    const heroLinks = main
      ? [
          main.querySelector('a[href="#quote-guide"]'),
          main.querySelector('a[href^="https://wa.me/"]'),
        ].filter(Boolean)
      : [];
    const images = Array.from(document.images);
    const ids = Array.from(document.querySelectorAll("[id]"))
      .map((element) => element.id)
      .filter(Boolean);
    const visibleOrderSteps = Array.from(document.querySelectorAll("#quote-guide ol h3"))
      .map((heading) => heading.textContent?.trim())
      .filter(Boolean);
    const faqCount = document.querySelectorAll("#receipt-book-faq details").length;

    return {
      url: window.location.href,
      title: document.title,
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") || null,
      h1Count: document.querySelectorAll("h1").length,
      h1Text: h1?.textContent?.trim() || null,
      h1Lines: h1 && h1LineHeight ? Math.round(h1.getBoundingClientRect().height / h1LineHeight) : null,
      heroCtaLabels: heroLinks.map((link) => link.textContent?.trim()).filter(Boolean),
      heroCtaRects: heroLinks.map((link) => {
        const rect = link.getBoundingClientRect();
        return { top: rect.top, bottom: rect.bottom, width: rect.width, height: rect.height };
      }),
      heroCtasVisible: heroLinks.every((link) => {
        const rect = link.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight && rect.width > 0 && rect.height > 0;
      }),
      viewport: { width: window.innerWidth, height: window.innerHeight },
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      faqCount,
      faqSchemaCount: schemaByType.FAQPage?.mainEntity?.length || 0,
      schemaTypes: scripts.map((schema) => schema["@type"]).filter(Boolean),
      howToSchemaSteps: (schemaByType.HowTo?.step || []).map((step) => step.name),
      visibleOrderSteps,
      orderStepsMatch:
        JSON.stringify((schemaByType.HowTo?.step || []).map((step) => step.name)) ===
        JSON.stringify(visibleOrderSteps),
      imageTotals: {
        total: images.length,
        loaded: images.filter((image) => image.complete && image.naturalWidth > 0).length,
        failed: images.filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.alt),
      },
      duplicateImageSources: Object.entries(
        images.reduce((counts, image) => {
          counts[image.currentSrc || image.src] = (counts[image.currentSrc || image.src] || 0) + 1;
          return counts;
        }, {}),
      ).filter(([, count]) => count > 1),
      duplicateIds: [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))],
      mainSections: document.querySelectorAll("main > section").length,
      activeElementId: document.activeElement?.id || null,
      invalidFieldIds: Array.from(document.querySelectorAll('[aria-invalid="true"]')).map(
        (field) => field.id,
      ),
      inlineErrors: Array.from(document.querySelectorAll('#inquiry [role="alert"]')).map(
        (error) => error.textContent?.trim(),
      ),
    };
  });
}
