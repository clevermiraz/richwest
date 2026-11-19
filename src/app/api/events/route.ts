import { z } from "zod";
import { supabaseInsert } from "@/lib/supabase";

const eventSchema = z.object({
  visitor_id: z.uuid(),
  event_type: z.enum(["page_view", "quote_click", "whatsapp_click", "section_click"]),
  page_path: z.string().startsWith("/").max(300),
  section: z.string().max(100).nullable(),
});

/**
 * First-party analytics sink (sent with navigator.sendBeacon only after
 * analytics consent). Writes to the same `analytics_events` table the
 * previous site used, so the existing admin dashboard keeps working.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const parsed = eventSchema.safeParse(body);
  if (!parsed.success) return new Response(null, { status: 400 });

  await supabaseInsert("analytics_events", parsed.data);
  return new Response(null, { status: 204 });
}
