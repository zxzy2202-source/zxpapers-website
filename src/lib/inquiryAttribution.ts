export interface InquiryAttribution {
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

const STORAGE_KEY = "zx_inquiry_attribution:v1";

function clean(value: string | null, maxLength = 300) {
  return value?.trim().slice(0, maxLength) || undefined;
}

function cleanReferrer(value: string) {
  if (!value) return undefined;

  try {
    const parsed = new URL(value);
    return `${parsed.origin}${parsed.pathname}`.slice(0, 500);
  } catch {
    return undefined;
  }
}

export function captureInquiryAttribution(): void {
  if (typeof window === "undefined") return;

  try {
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const attribution: InquiryAttribution = {
      landingPage: window.location.pathname,
      referrer: cleanReferrer(document.referrer),
      utmSource: clean(params.get("utm_source")),
      utmMedium: clean(params.get("utm_medium")),
      utmCampaign: clean(params.get("utm_campaign")),
      utmTerm: clean(params.get("utm_term")),
      utmContent: clean(params.get("utm_content")),
    };

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Attribution must never block browsing or inquiry submission.
  }
}

export function readInquiryAttribution(): InquiryAttribution {
  if (typeof window === "undefined") return {};

  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as InquiryAttribution) : {};
  } catch {
    return {};
  }
}
