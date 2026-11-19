/**
 * Cookie consent state, shared by the banner, analytics loader and tracker.
 * Mirrors the original site: Singapore (PDPA) gets a notice with opt-out,
 * while EEA/UK/CH visitors (detected by timezone) must opt in.
 */
export type ConsentCategory = "necessary" | "analytics" | "marketing";
export type ConsentChoices = Record<ConsentCategory, boolean>;

export interface StoredConsent {
  version: number;
  decidedAt: string;
  categories: ConsentChoices;
}

export const CONSENT_KEY = "richwest_consent_v1";
export const CONSENT_VERSION = 1;
export const OPEN_PREFERENCES_EVENT = "richwest:open-cookie-preferences";
export const CONSENT_CHANGED_EVENT = "richwest:consent-changed";

export const ALL_GRANTED: ConsentChoices = { necessary: true, analytics: true, marketing: true };
export const ONLY_NECESSARY: ConsentChoices = { necessary: true, analytics: false, marketing: false };

const STRICT_TZ = /^(Europe\/|Atlantic\/(Canary|Azores|Madeira|Faroe|Reykjavik)$)/;

export type ConsentMode = "strict" | "notice";

export function getConsentMode(): ConsentMode {
  try {
    return STRICT_TZ.test(Intl.DateTimeFormat().resolvedOptions().timeZone ?? "") ? "strict" : "notice";
  } catch {
    return "notice";
  }
}

export const defaultChoices = (): ConsentChoices => (getConsentMode() === "strict" ? ONLY_NECESSARY : ALL_GRANTED);

function isStoredConsent(value: unknown): value is StoredConsent {
  if (!value || typeof value !== "object") return false;
  const v = value as Partial<StoredConsent>;
  return (
    v.version === CONSENT_VERSION &&
    typeof v.decidedAt === "string" &&
    typeof v.categories?.analytics === "boolean" &&
    typeof v.categories?.marketing === "boolean"
  );
}

export function readConsent(): StoredConsent | null {
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(CONSENT_KEY) ?? "null");
    return isStoredConsent(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function isAllowed(category: ConsentCategory): boolean {
  if (category === "necessary") return true;
  return (readConsent()?.categories ?? defaultChoices())[category];
}

function clearTrackingStorage(choices: ConsentChoices) {
  try {
    if (!choices.analytics) {
      window.localStorage.removeItem("richwest_visitor_id");
      Object.keys(window.localStorage)
        .filter((k) => k.startsWith("richwest_wp_contacted_once_"))
        .forEach((k) => window.localStorage.removeItem(k));
    }
    if (!choices.marketing) {
      const host = window.location.hostname.replace(/^www\./, "");
      const expire = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
      const names = document.cookie
        .split(";")
        .map((c) => c.split("=")[0].trim())
        .filter((n) => ["_ga", "_gid", "_gcl_au", "_fbp", "_fbc"].includes(n) || n.startsWith("_ga_"));
      for (const name of names) {
        document.cookie = `${name}=; ${expire} domain=.${host};`;
        document.cookie = `${name}=; ${expire}`;
      }
    }
  } catch {
    /* Storage can be blocked; nothing to clear. */
  }
}

export function saveConsent(choices: ConsentChoices): StoredConsent {
  const record: StoredConsent = {
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
    categories: { ...choices, necessary: true },
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {
    /* Private mode: the choice still applies for this page view. */
  }
  window.gtag?.("consent", "update", {
    ad_storage: choices.marketing ? "granted" : "denied",
    ad_user_data: choices.marketing ? "granted" : "denied",
    ad_personalization: choices.marketing ? "granted" : "denied",
    analytics_storage: choices.analytics ? "granted" : "denied",
    personalization_storage: choices.marketing ? "granted" : "denied",
  });
  clearTrackingStorage(record.categories);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: record }));
  return record;
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
