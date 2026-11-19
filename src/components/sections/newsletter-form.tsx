"use client";

import { useActionState } from "react";
import { subscribeNewsletter, type NewsletterState } from "@/app/actions/newsletter";

const initialState: NewsletterState = { status: "idle" };

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(subscribeNewsletter, initialState);

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-3 sm:flex-row">
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
          className="form-input grow rounded-full px-6"
        />
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="btn btn-lg btn-ink disabled:cursor-progress disabled:opacity-80"
        >
          {pending ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={`mt-3 min-h-6 text-sm font-medium ${state.status === "error" ? "text-red-700" : "text-green-800"}`}
      >
        {state.message}
      </p>
    </form>
  );
}
