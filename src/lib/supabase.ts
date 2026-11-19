import "server-only";

/**
 * Minimal server-side insert into Supabase via its REST API (PostgREST).
 * Credentials are read from server-only env vars and never reach the browser.
 */
export async function supabaseInsert(table: string, row: Record<string, unknown>): Promise<boolean> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return false;

  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) console.error(`[supabase] insert into ${table} failed: ${res.status} ${await res.text()}`);
    return res.ok;
  } catch (error) {
    console.error(`[supabase] insert into ${table} failed`, error);
    return false;
  }
}

export const isSupabaseConfigured = () =>
  Boolean(process.env.SUPABASE_URL && (process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY));
