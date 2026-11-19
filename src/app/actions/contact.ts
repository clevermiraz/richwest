"use server";

import { contactSchema, type ContactField, type ContactState } from "@/lib/contact-schema";
import { isSupabaseConfigured, supabaseInsert } from "@/lib/supabase";

const FIELDS: ContactField[] = ["name", "phone", "email", "service", "message"];

async function forwardToWebhook(payload: Record<string, unknown>) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    return res.ok;
  } catch (error) {
    console.error("[contact] webhook failed", error);
    return false;
  }
}

/** Handles the "Get a Quote" form. Works with and without client-side JavaScript. */
export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: bots fill the hidden field. Pretend success so they move on.
  if (String(formData.get("company_website") ?? "").trim()) return { status: "success" };

  const raw = Object.fromEntries(FIELDS.map((f) => [f, String(formData.get(f) ?? "")])) as Record<ContactField, string>;
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<ContactField, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactField;
      fieldErrors[key] ??= issue.message;
    }
    return { status: "error", fieldErrors, values: raw };
  }

  const lead = { ...parsed.data, source: "contact_form" };

  if (!isSupabaseConfigured() && !process.env.CONTACT_WEBHOOK_URL) {
    console.error(
      "[contact] No lead destination configured. Set SUPABASE_URL/SUPABASE_ANON_KEY or CONTACT_WEBHOOK_URL.",
    );
    return { status: "error", values: raw };
  }

  const [saved, forwarded] = await Promise.all([supabaseInsert("leads", lead), forwardToWebhook(lead)]);
  return saved || forwarded ? { status: "success" } : { status: "error", values: raw };
}
