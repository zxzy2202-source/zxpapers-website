export type ConversionEventName =
  | "contact_channel_clicked"
  | "inquiry_form_started"
  | "inquiry_validation_failed"
  | "inquiry_submit_success"
  | "inquiry_submit_failed";

type EventProperties = Record<string, string | number | boolean | undefined>;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (
    command: "event",
    eventName: string,
    properties: EventProperties
  ) => void;
  __ZX_GTM_ACTIVE__?: boolean;
};

export function trackConversionEvent(
  eventName: ConversionEventName,
  properties: EventProperties = {}
): void {
  if (typeof window === "undefined") return;

  const analyticsWindow = window as AnalyticsWindow;
  const eventProperties = {
    ...properties,
    page_path: window.location.pathname,
  };

  if (
    !analyticsWindow.__ZX_GTM_ACTIVE__ &&
    typeof analyticsWindow.gtag === "function"
  ) {
    analyticsWindow.gtag("event", eventName, eventProperties);
    return;
  }

  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push({ event: eventName, ...eventProperties });
}
