import { isAllowed } from "./consent";
import { site } from "./site";

export type TrackEvent = "page_view" | "quote_click" | "whatsapp_click" | "section_click";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const VISITOR_KEY = "richwest_visitor_id";
const CONTACTED_PREFIX = "richwest_wp_contacted_once_";

function visitorId(): string | null {
  if (!isAllowed("analytics")) return null;
  try {
    let id = window.localStorage.getItem(VISITOR_KEY);
    if (!id && "randomUUID" in crypto) {
      id = crypto.randomUUID();
      window.localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
}

/** Fires the Google Ads conversion for a WhatsApp lead. */
function reportAdsConversion() {
  window.gtag?.("event", "conversion", {
    send_to: site.analytics.adsConversion,
    value: 1.0,
    currency: "USD",
  });
}

/** Meta custom event, sent at most once per visitor. */
function trackMetaContactOnce(vid: string | null, params: Record<string, unknown>) {
  if (!isAllowed("marketing") || typeof window.fbq !== "function") return;
  const key = vid ? `${CONTACTED_PREFIX}${vid}` : null;
  try {
    if (key && window.localStorage.getItem(key) === "1") return;
    window.fbq("trackCustom", "WP-Contacted", params);
    if (key) window.localStorage.setItem(key, "1");
  } catch {
    /* ignore */
  }
}

/**
 * Sends an interaction to GTM/GA4, Meta and the first-party event log.
 * Safe to call anywhere on the client; it never throws.
 */
export function track(event: TrackEvent, options: { section?: string; pagePath?: string } = {}) {
  if (typeof window === "undefined") return;
  const vid = visitorId();
  const pagePath = options.pagePath ?? window.location.pathname;
  const section = options.section ?? null;
  const base = { page_path: pagePath, page_location: window.location.href, ...(vid ? { visitor_id: vid } : {}) };

  window.dataLayer = window.dataLayer ?? [];

  if (event === "page_view") {
    window.dataLayer.push({ event: "page_view", ...base, page_title: document.title });
    window.gtag?.("event", "page_view", {
      send_to: site.analytics.gaId,
      page_location: window.location.href,
      page_title: document.title,
    });
  }

  if (event === "whatsapp_click" || event === "quote_click") {
    const params = { quote_source: event === "whatsapp_click" ? "whatsapp" : "get_quote", section, ...base };
    window.dataLayer.push({ event: "quote", ...params });
    window.gtag?.("event", "quote", params);
    trackMetaContactOnce(vid, params);
    if (event === "whatsapp_click") reportAdsConversion();
  }

  // First-party log (powers the existing admin dashboard). Only with consent.
  if (vid) {
    const body = JSON.stringify({ visitor_id: vid, event_type: event, page_path: pagePath, section });
    const send = () => {
      if (!navigator.sendBeacon?.("/api/events", new Blob([body], { type: "application/json" }))) {
        void fetch("/api/events", {
          method: "POST",
          body,
          keepalive: true,
          headers: { "Content-Type": "application/json" },
        });
      }
    };
    if ("requestIdleCallback" in window) window.requestIdleCallback(send, { timeout: 8000 });
    else setTimeout(send, 4000);
  }
}
