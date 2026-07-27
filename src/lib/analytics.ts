// Push a GA4 event through Google Tag Manager's dataLayer.
//
// GTM container GTM-P4S84NGV forwards these to GA4 via the "CE - Form Events"
// custom-event trigger. Its regex must list every event name used here, or the
// event reaches the dataLayer and goes no further — see docs/ga4-key-events.md.
type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

export const pushEvent = (event: string, params: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
};

// The public enquiry address. A rental enquiry often arrives by email rather
// than through the form, so this is tracked as its own `contact` event.
export const CONTACT_EMAIL = "shane.gring@gmail.com";

export const trackContactClick = (method: "email" | "phone", location: string) =>
  pushEvent("contact", { contact_method: method, contact_location: location });
