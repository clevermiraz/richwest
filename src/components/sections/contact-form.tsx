"use client";

import { ChevronDown, CircleAlert, CircleCheck, Clock, LoaderCircle, Send } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "@/app/actions/contact";
import { contactServiceOptions } from "@/content/home";
import type { ContactField, ContactState } from "@/lib/contact-schema";
import { site } from "@/lib/site";

const initialState: ContactState = { status: "idle" };

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <span id={id} role="alert" className="form-error">
      {message}
    </span>
  );
}

/**
 * Lead form. Native constraints give instant feedback without extra JS;
 * the server action re-validates with zod and returns field messages.
 */
export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};
  const values = state.status === "error" ? (state.values ?? {}) : {};

  const formRef = useRef<HTMLFormElement>(null);

  // After a failed submit, move focus to the first field the server rejected.
  useEffect(() => {
    if (state.status !== "error" || !state.fieldErrors) return;
    formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
  }, [state]);

  const a11y = (field: ContactField) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
  });

  return (
    <form ref={formRef} action={formAction} aria-busy={pending} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="form-label">
            Full Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            defaultValue={values.name}
            placeholder="Your name…"
            enterKeyHint="next"
            className="form-input"
            {...a11y("name")}
          />
          <FieldError id="contact-name-error" message={errors.name} />
        </div>
        <div>
          <label htmlFor="contact-phone" className="form-label">
            Phone Number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            minLength={8}
            maxLength={32}
            defaultValue={values.phone}
            placeholder="+65 1234 5678"
            enterKeyHint="next"
            className="form-input"
            {...a11y("phone")}
          />
          <FieldError id="contact-phone-error" message={errors.phone} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="form-label">
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="next"
          required
          maxLength={200}
          defaultValue={values.email}
          placeholder="you@example.com"
          className="form-input"
          {...a11y("email")}
        />
        <FieldError id="contact-email-error" message={errors.email} />
      </div>

      <div>
        <label htmlFor="contact-service" className="form-label">
          Service Interested In
        </label>
        <div className="relative">
          <select
            id="contact-service"
            name="service"
            required
            defaultValue={values.service ?? ""}
            className="form-input appearance-none pr-12"
            {...a11y("service")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {contactServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            size={20}
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-slate-600"
          />
        </div>
        <FieldError id="contact-service-error" message={errors.service} />
      </div>

      <div>
        <label htmlFor="contact-message" className="form-label">
          Your Message <span className="font-medium tracking-normal text-slate-600 normal-case">(optional)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          maxLength={5000}
          defaultValue={values.message}
          placeholder="Tell us about your project, including the area size and location if you know them…"
          className="form-input resize-y"
        />
      </div>

      {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-company-website">Company website</label>
        <input id="contact-company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="btn btn-lg btn-dark w-full transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Sending…" : "Send inquiry"}
        {pending ? (
          <LoaderCircle size={20} aria-hidden="true" className="animate-spin motion-reduce:animate-none" />
        ) : (
          <Send size={20} aria-hidden="true" />
        )}
      </button>

      <p className="flex items-center justify-center gap-2 text-sm font-medium text-slate-600">
        <Clock size={16} aria-hidden="true" className="shrink-0 text-wood-ink" />
        {site.replyPromise} during business hours.
      </p>

      <div aria-live="polite" role="status" className="min-h-6">
        {state.status === "success" && (
          <p className="flex items-start gap-2 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
            <CircleCheck size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
            Thank you. Your inquiry has been sent and we will get back to you within 1 hour during business hours.
          </p>
        )}
        {state.status === "error" && !state.fieldErrors && (
          <p className="flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
            <CircleAlert size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
            <span>
              Sorry, something went wrong. Please call us on{" "}
              <a href={`tel:${site.phone.e164}`} className="underline">
                {site.phone.display}
              </a>{" "}
              or try again shortly.
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
