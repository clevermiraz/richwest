"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { consentCategories } from "@/content/privacy";
import {
  ALL_GRANTED,
  ONLY_NECESSARY,
  OPEN_PREFERENCES_EVENT,
  defaultChoices,
  getConsentMode,
  readConsent,
  saveConsent,
  type ConsentChoices,
  type ConsentMode,
} from "@/lib/consent";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [mode, setMode] = useState<ConsentMode>("strict");
  const [choices, setChoices] = useState<ConsentChoices>(ONLY_NECESSARY);

  useEffect(() => {
    // Consent lives in localStorage, so it can only be read after hydration.
    /* eslint-disable react-hooks/set-state-in-effect */
    setMode(getConsentMode());
    const stored = readConsent();
    if (stored) setChoices(stored.categories);
    else {
      setChoices(defaultChoices());
      setVisible(true);
    }
    /* eslint-enable react-hooks/set-state-in-effect */

    const openPreferences = () => {
      setChoices(readConsent()?.categories ?? defaultChoices());
      setExpanded(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
  }, []);

  if (!visible) return null;

  const decide = (value: ConsentChoices) => {
    saveConsent(value);
    setVisible(false);
    setExpanded(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie choices"
      className="fixed right-4 bottom-[calc(5rem+env(safe-area-inset-bottom))] left-4 z-45 animate-consent-in rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.16)] sm:right-auto sm:bottom-6 sm:left-6 sm:w-[23rem]"
    >
      <p className="text-sm leading-relaxed text-slate-700">
        {mode === "notice"
          ? "We use cookies to see how this site is used and to measure our ads. You can turn them off anytime."
          : "We use cookies for analytics and advertising. Please choose what you are happy with."}{" "}
        <Link href="/privacy" className="font-semibold text-wood-ink underline underline-offset-2">
          Privacy notice
        </Link>
      </p>

      {expanded && (
        <ul id="cookie-choices" className="mt-4 space-y-3 border-t border-slate-100 pt-4">
          {consentCategories.map((c) => {
            const id = `consent-${c.key}`;
            const locked = "locked" in c && c.locked;
            return (
              <li key={c.key} className="flex items-start gap-3">
                <input
                  id={id}
                  type="checkbox"
                  checked={locked ? true : choices[c.key]}
                  disabled={locked}
                  onChange={(e) => setChoices((prev) => ({ ...prev, [c.key]: e.target.checked }))}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded accent-wood-ink disabled:opacity-50"
                />
                <label htmlFor={id} className="text-sm leading-snug">
                  <span className="font-semibold text-slate-900">{c.label}</span>
                  {locked && <span className="text-slate-400"> (always on)</span>}
                  <span className="block text-slate-500">{c.note}</span>
                </label>
              </li>
            );
          })}
        </ul>
      )}

      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => decide(expanded ? choices : ALL_GRANTED)}
          className="flex-1 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-wood-dark"
        >
          {expanded ? "Save" : mode === "notice" ? "Got it" : "Accept"}
        </button>
        {(expanded || mode === "strict") && (
          <button
            type="button"
            onClick={() => decide(ONLY_NECESSARY)}
            className="flex-1 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
          >
            Decline
          </button>
        )}
        {!expanded && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            aria-expanded={false}
            aria-controls="cookie-choices"
            className="px-3 py-2.5 text-sm font-semibold whitespace-nowrap text-slate-500 underline underline-offset-2 transition-colors hover:text-slate-900"
          >
            {mode === "notice" ? "Turn off" : "Choose"}
          </button>
        )}
      </div>
    </div>
  );
}
