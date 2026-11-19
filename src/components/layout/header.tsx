"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/cn";
import { mainNav } from "@/lib/site";
import { useRoutePath } from "@/hooks/use-route-path";

export function Header() {
  const pathname = useRoutePath();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu when the route changes (state derived during render).
  if (open && openedAt !== pathname) {
    setOpen(false);
  }

  // Transparent header over the homepage hero until the user scrolls.
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      // Keep focus inside the open menu.
      const focusable = [...panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && (active === first || active === toggleRef.current)) {
        e.preventDefault();
        last.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggle = () => {
    setOpenedAt(pathname);
    setOpen((v) => !v);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,padding,box-shadow,border-color] duration-500 ease-in-out",
        scrolled
          ? "border-b border-slate-100 bg-white/90 py-3 shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          : "bg-transparent py-6",
      )}
    >
      {overHero && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-transparent"
        />
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Richwest Integrated, go to homepage" translate="no">
            <Logo variant={overHero ? "light" : "dark"} className="h-9 w-auto md:h-10 lg:h-11" />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Main">
            <div className="flex items-center gap-8">
              {mainNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative py-2 text-sm font-bold tracking-wide transition-colors duration-300",
                      overHero ? "text-white hover:text-wood-light" : "text-slate-600 hover:text-wood-ink",
                      active && (overHero ? "text-wood-light" : "text-wood-ink"),
                    )}
                  >
                    {item.name}
                    {active && (
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-0 bottom-0 h-0.5 rounded-full",
                          overHero ? "bg-wood-light" : "bg-wood-ink",
                        )}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/contact"
              className={cn("btn btn-sm", overHero ? "btn-light" : "btn-dark")}
              data-track="quote_click"
              data-section="header_get_quote"
            >
              Get a quote
            </Link>
          </nav>

          <div className="flex items-center lg:hidden">
            <button
              ref={toggleRef}
              type="button"
              onClick={toggle}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className={cn(
                "rounded-2xl p-3 transition-colors",
                overHero ? "bg-white/15 text-white backdrop-blur-md" : "bg-slate-100 text-slate-900",
              )}
            >
              {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          ref={panelRef}
          id="mobile-navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-var(--header-h))] overflow-hidden overflow-y-auto overscroll-contain border-t border-slate-100 bg-white shadow-2xl lg:hidden"
        >
          <nav className="space-y-2 px-6 py-10" aria-label="Mobile">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-2xl px-4 py-4 text-lg font-bold transition-colors",
                    active ? "bg-wood-accent/10 text-wood-ink" : "text-slate-700 hover:bg-slate-50 hover:text-wood-ink",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-6">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-lg btn-dark w-full"
                data-track="quote_click"
                data-section="header_mobile_get_quote"
              >
                Get a quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
