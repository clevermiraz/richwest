"use client";

import { usePathname } from "next/navigation";

/**
 * `usePathname()` with the homepage normalised to "/".
 * On Vercel, on-demand renders of the root route can report "/index" on the
 * server while the browser reports "/", which causes a hydration mismatch in
 * anything that styles itself by route (the header over the hero).
 */
export function useRoutePath(): string {
  const pathname = usePathname();
  return pathname === "/index" || pathname === "" ? "/" : pathname;
}
