"use server";

import { z } from "zod";
import { isSupabaseConfigured, supabaseInsert } from "@/lib/supabase";

export type NewsletterState = { status: "idle" | "success" | "error"; message?: string };

const emailSchema = z
  .string()
  .trim()
  .max(200)
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Please enter a valid email address");

/** Stores newsletter sign-ups alongside enquiries, tagged with source "newsletter". */
export async function subscribeNewsletter(_prev: NewsletterState, formData: FormData): Promise<NewsletterState> {
  if (String(formData.get("company_website") ?? "").trim()) return { status: "success" };

  const parsed = emailSchema.safeParse(String(formData.get("email") ?? ""));
  if (!parsed.success) return { status: "error", message: parsed.error.issues[0]?.message };

  if (!isSupabaseConfigured()) {
    console.error("[newsletter] Supabase is not configured.");
    return { status: "error", message: "Sorry, sign-up is unavailable right now. Please try again later." };
  }

  const ok = await supabaseInsert("leads", {
    name: "Newsletter subscriber",
    phone: "",
    email: parsed.data,
    service: "Other",
    message: "Newsletter sign-up",
    source: "newsletter",
  });

  return ok
    ? { status: "success", message: "Thanks for subscribing! Look out for our next tips email." }
    : { status: "error", message: "Sorry, something went wrong. Please try again shortly." };
}
