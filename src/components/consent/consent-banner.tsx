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
      className="fixed right-4 bottom-[calc(5rem+env(safe-area-inset-bottom))] left-4 z-45 rounded-xl border border-line bg-white p-5 shadow-[0_1px_2px_rgb(28_25_23/0.06),0_20px_48px_-16px_rgb(28_25_23/0.3)] transition-[opacity,translate] duration-300 ease-(--ease-out) sm:right-auto sm:bottom-6 sm:left-6 sm:w-[23rem] starting:translate-y-3 starting:opacity-0"
    >
      <p className="text-sm leading-relaxed text-ink-2">
        {mode === "notice"
          ? "We use cookies to see how this site is used and to measure our ads. You can turn them off anytime."
          : "We use cookies for analytics and advertising. Please choose what you are happy with."}{" "}
        <Link href="/privacy" className="font-semibold text-timber underline underline-offset-2">
          Privacy notice
        </Link>
      </p>

      {expanded && (
        <ul id="cookie-choices" className="mt-4 space-y-3 border-t border-line pt-4">
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
                  className="mt-0.5 h-4 w-4 shrink-0 rounded accent-timber disabled:opacity-50"
                />
                <label htmlFor={id} className="text-sm leading-snug">
                  <span className="font-semibold text-ink">{c.label}</span>
                  {locked && <span className="text-ink-3"> (always on)</span>}
                  <span className="block text-ink-3">{c.note}</span>
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
          className="btn btn-ink min-h-11 flex-1 px-4 text-sm"
        >
          {expanded ? "Save" : mode === "notice" ? "Got it" : "Accept"}
        </button>
        {(expanded || mode === "strict") && (
          <button
            type="button"
            onClick={() => decide(ONLY_NECESSARY)}
            className="btn btn-outline min-h-11 flex-1 px-4 text-sm"
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
            className="min-h-11 px-3 text-sm font-medium whitespace-nowrap text-ink-2 underline underline-offset-2 transition-colors hover:text-ink"
          >
            {mode === "notice" ? "Turn off" : "Choose"}
          </button>
        )}
      </div>
    </div>
  );
}
