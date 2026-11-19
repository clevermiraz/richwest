import { z } from "zod";
import { contactServiceOptions } from "@/content/home";

/** Shared by the client form (instant feedback) and the server action (source of truth). */
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter a phone number we can reach you on")
    .min(8, "Please enter a valid phone number")
    .max(32)
    .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address")
    .max(200)
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Please enter a valid email address"),
  service: z.enum(contactServiceOptions, { error: "Please choose a service" }),
  message: z.string().trim().max(5000).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactInput;

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      fieldErrors?: Partial<Record<ContactField, string>>;
      values?: Partial<Record<ContactField, string>>;
    };
