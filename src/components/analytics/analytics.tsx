"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { track, type TrackEvent } from "@/lib/analytics";
import { CONSENT_CHANGED_EVENT, isAllowed, type StoredConsent } from "@/lib/consent";
import { site } from "@/lib/site";

function injectScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

let googleLoaded = false;
function loadGoogle() {
  if (googleLoaded) return;
  googleLoaded = true;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  injectScript(`https://www.googletagmanager.com/gtm.js?id=${site.analytics.gtmId}`);
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
  injectScript("https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", site.analytics.metaPixelId);
  fbq("track", "PageView");
}

/**
 * Loads Google tags (under Consent Mode) after the page is idle or on first
 * interaction, so they never compete with LCP. Meta Pixel only loads with
 * marketing consent. Also records page views and `data-track` clicks.
 */
export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const schedule = () =>
      "requestIdleCallback" in window
        ? window.requestIdleCallback(loadGoogle, { timeout: 2500 })
        : setTimeout(loadGoogle, 2500);
    const events = ["pointerdown", "keydown", "touchstart"] as const;
    events.forEach((e) => window.addEventListener(e, loadGoogle, { once: true, passive: true }));

    const onLoad = () => {
      schedule();
      loadMeta();
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    const onConsent = (e: Event) => {
      if ((e as CustomEvent<StoredConsent>).detail.categories.marketing) loadMeta();
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
      events.forEach((e) => window.removeEventListener(e, loadGoogle));
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
