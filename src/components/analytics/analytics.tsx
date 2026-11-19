"use client";

import { useEffect } from "react";
import { track, type TrackEvent } from "@/lib/analytics";
import { CONSENT_CHANGED_EVENT, isAllowed, type StoredConsent } from "@/lib/consent";
import { site } from "@/lib/site";
import { useRoutePath } from "@/hooks/use-route-path";

function injectScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.fetchPriority = "low";
  s.src = src;
  document.head.appendChild(s);
}

/** How long after `load` third-party tags start if the visitor has not interacted yet. */
const IDLE_LOAD_DELAY_MS = 5000;

let googleLoaded = false;
function loadGoogle() {
  if (googleLoaded) return;
  googleLoaded = true;
  window.dataLayer = window.dataLayer ?? [];
  // Set NEXT_PUBLIC_GTM_ID="" to skip the container (it currently holds no tags).
  if (site.analytics.gtmId) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    injectScript(`https://www.googletagmanager.com/gtm.js?id=${site.analytics.gtmId}`);
  }
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${site.analytics.gaId}`);
  window.gtag?.("js", new Date());
  window.gtag?.("config", site.analytics.gaId, { send_page_view: false });
}

let metaLoaded = false;
function loadMeta() {
  if (metaLoaded || !isAllowed("marketing")) return;
  metaLoaded = true;
  type Fbq = ((...args: unknown[]) => void) & {
    callMethod?: (...a: unknown[]) => void;
    queue: unknown[];
    loaded: boolean;
    version: string;
    push: Fbq;
  };
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  // The official snippet also sets _fbq; without it fbevents.js reports "conflicting versions".
  (window as Window & { _fbq?: Fbq })._fbq = fbq;
  injectScript("https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", site.analytics.metaPixelId);
  fbq("track", "PageView");
}

/**
 * Loads Google tags (under Consent Mode) and, with marketing consent, the Meta
 * Pixel on first interaction or shortly after load, so they never compete with
 * LCP or TBT. Page views queue in dataLayer until then. Also records
 * `data-track` clicks.
 */
export function Analytics() {
  const pathname = useRoutePath();

  useEffect(() => {
    // Third-party tags never compete with the first render: they start on the
    // first interaction, or a few seconds after load when the main thread is idle.
    let started = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const start = () => {
      if (started) return;
      started = true;
      loadGoogle();
      loadMeta();
    };
    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    events.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));

    const onLoad = () => {
      timer = setTimeout(() => {
        if ("requestIdleCallback" in window) window.requestIdleCallback(start, { timeout: 2000 });
        else start();
      }, IDLE_LOAD_DELAY_MS);
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    const onConsent = (e: Event) => {
      if (started && (e as CustomEvent<StoredConsent>).detail.categories.marketing) loadMeta();
    };
    window.addEventListener(CONSENT_CHANGED_EVENT, onConsent);

    // Delegated click tracking: any element with data-track="quote_click" etc.
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      for (const ev of el.dataset.track!.split(" ")) track(ev as TrackEvent, { section: el.dataset.section });
    };
    document.addEventListener("click", onClick);

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, start));
      window.removeEventListener("load", onLoad);
      window.removeEventListener(CONSENT_CHANGED_EVENT, onConsent);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    // Wait a frame so document.title reflects the new route.
    const id = requestAnimationFrame(() => track("page_view", { pagePath: pathname }));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}

/** Consent Mode v2 defaults. Must run before any Google tag, so it is inlined in <head>. */
export const consentDefaultsScript = `
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
(function(){var s=null;try{s=JSON.parse(localStorage.getItem(${JSON.stringify("richwest_consent_v1")})||"null")}catch(e){}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',personalization_storage:'denied',security_storage:'granted',wait_for_update:500,region:['EEA','GB','CH']});
gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted',functionality_storage:'granted',personalization_storage:'granted',security_storage:'granted'});
if(s&&s.categories){var c=s.categories;gtag('consent','update',{ad_storage:c.marketing?'granted':'denied',ad_user_data:c.marketing?'granted':'denied',ad_personalization:c.marketing?'granted':'denied',analytics_storage:c.analytics?'granted':'denied',personalization_storage:c.marketing?'granted':'denied'});}})();
`;
