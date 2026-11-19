"use client";

import { useActionState } from "react";
import { subscribeNewsletter, type NewsletterState } from "@/app/actions/newsletter";

const initialState: NewsletterState = { status: "idle" };

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(subscribeNewsletter, initialState);

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="go"
          placeholder="you@example.com"
          className="grow rounded-2xl border border-slate-300 bg-slate-50 px-6 py-4 text-slate-900 outline-none placeholder:text-slate-500 user-invalid:border-red-500 focus-visible:ring-2 focus-visible:ring-wood-ink"
        />
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="rounded-2xl bg-wood-accent px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-wood-dark disabled:opacity-70"
        >
          {pending ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={`mt-4 min-h-6 text-sm font-semibold ${state.status === "error" ? "text-red-700" : "text-green-800"}`}
      >
        {state.message}
      </p>
    </form>
  );
}
