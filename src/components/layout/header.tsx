"use client";

import { ArrowRight, ArrowUpRight, ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/logo";
import { SiteImage } from "@/components/ui/site-image";
import { useRoutePath } from "@/hooks/use-route-path";
import { cn } from "@/lib/cn";
import { mainNav, serviceGroups, site } from "@/lib/site";

type Panel = "services" | "mobile" | null;

/**
 * Sticky site header.
 * - Desktop: four links, a Services mega-menu (disclosure button, not hover),
 *   phone and the quote CTA.
 * - Mobile: a full-height sheet. Both panels stay in the DOM (crawlable links)
 *   and are `inert` while closed so they animate in *and* out.
 */
export function Header() {
  const pathname = useRoutePath();
  const [scrolled, setScrolled] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);
  const [panelPath, setPanelPath] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  // Close any panel when the route changes (derived during render).
  if (panel && panelPath !== pathname) {
    setPanel(null);
  }

  const open = (next: Panel) => {
    setPanelPath(pathname);
    setPanel((current) => (current === next ? null : next));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!panel) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setPanel(null);
      (panel === "services" ? servicesButtonRef : mobileButtonRef).current?.focus();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setPanel(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    if (panel === "mobile") document.documentElement.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.documentElement.style.overflow = "";
    };
  }, [panel]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const solid = scrolled || panel !== null;

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        solid ? "border-line shadow-[0_8px_24px_-12px_rgb(28_25_23/0.12)]" : "border-transparent",
        // backdrop-filter would become the containing block of the fixed mobile sheet,
        // so the translucent look is only used while no panel is open.
        scrolled && panel === null ? "bg-paper/90 backdrop-blur-md" : "bg-paper",
      )}
    >
      <div className="container-page flex h-(--header-h) items-center justify-between gap-6">
        <Link href="/" className="-m-2 flex shrink-0 items-center p-2" translate="no">
          <Logo className="h-8 w-auto lg:h-9" />
          <span className="sr-only">Richwest Integrated, home</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <button
            ref={servicesButtonRef}
            type="button"
            aria-expanded={panel === "services"}
            aria-controls="services-menu"
            onClick={() => open("services")}
            className={cn(
              "flex h-10 items-center gap-1.5 rounded-full px-4 text-[0.9375rem] font-medium transition-colors",
              panel === "services" || isActive("/services") ? "text-ink" : "text-ink-2 hover:text-ink",
            )}
          >
            Services
            <ChevronDown
              size={16}
              aria-hidden="true"
              className={cn(
                "transition-transform duration-200 ease-(--ease-out)",
                panel === "services" && "rotate-180",
              )}
            />
          </button>
          {mainNav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative flex h-10 items-center rounded-full px-4 text-[0.9375rem] font-medium transition-colors",
                isActive(item.href) ? "text-ink" : "text-ink-2 hover:text-ink",
              )}
            >
              {item.name}
              {isActive(item.href) && (
                <span aria-hidden="true" className="absolute inset-x-4 bottom-1 h-px bg-timber" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone.e164}`}
            data-track="quote_click"
            data-section="header_call"
            className="hidden h-10 items-center gap-2 rounded-full px-3 text-[0.9375rem] font-medium text-ink-2 tabular-nums transition-colors hover:text-ink xl:flex"
          >
            <Phone size={16} aria-hidden="true" />
            {site.phone.display}
          </a>
          <Link
            href="/contact"
            data-track="quote_click"
            data-section="header_get_quote"
            className="btn btn-ink hidden min-h-11 px-5 text-sm sm:inline-flex"
          >
            Get a free quote
          </Link>
          <button
            ref={mobileButtonRef}
            type="button"
            onClick={() => open("mobile")}
            aria-expanded={panel === "mobile"}
            aria-controls="mobile-menu"
            className="-mr-2 flex h-11 items-center gap-2 rounded-full px-3 text-[0.9375rem] font-medium text-ink lg:hidden"
          >
            <span>{panel === "mobile" ? "Close" : "Menu"}</span>
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-[1.5px] rounded bg-current transition-[translate,rotate] duration-300 ease-(--ease-out)",
                  panel === "mobile" && "translate-y-[5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-[1.5px] rounded bg-current transition-[translate,rotate] duration-300 ease-(--ease-out)",
                  panel === "mobile" && "-translate-y-[5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Dims the page behind the open mega-menu; a click on it closes the menu. */}
      <div
        aria-hidden="true"
        className={cn(
          "fixed inset-x-0 top-(--header-h) bottom-0 -z-10 hidden bg-night/25 transition-opacity duration-200 lg:block",
          panel === "services" ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Desktop services mega-menu */}
      <div
        id="services-menu"
        inert={panel !== "services"}
        data-open={panel === "services"}
        className={cn(
          "absolute inset-x-0 top-full hidden border-b border-line bg-paper shadow-[0_24px_48px_-24px_rgb(28_25_23/0.25)] lg:block",
          "origin-top transition-[opacity,translate,visibility] duration-200 ease-(--ease-out)",
          "data-[open=false]:invisible data-[open=false]:-translate-y-2 data-[open=false]:opacity-0 data-[open=false]:duration-150",
        )}
      >
        <div className="container-page grid grid-cols-12 gap-10 py-10">
          {serviceGroups.map((group) => (
            <div key={group.name} className={group.items.length > 2 ? "col-span-3" : "col-span-2"}>
              <p className="mb-1 font-display text-2xl text-ink">{group.name}</p>
              <p className="mb-5 text-sm leading-snug text-ink-3">{group.blurb}</p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="group -mx-2 flex items-center justify-between rounded-md px-2 py-1.5 text-[0.9375rem] text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink aria-[current=page]:text-timber"
                    >
                      {item.name}
                      <ArrowRight
                        size={14}
                        aria-hidden="true"
                        className="arrow opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/portfolio"
            className="group relative col-span-4 overflow-hidden rounded-lg bg-night text-paper"
            data-track="section_click"
            data-section="menu_projects_card"
          >
            <SiteImage
              src="/images/wooden-floor-herringbone.webp"
              alt=""
              sizes="30vw"
              className="zoom-media absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-transparent" />
            <span className="relative flex h-full min-h-64 flex-col justify-end p-6">
              <span className="font-display text-2xl">See finished projects</span>
              <span className="mt-1 flex items-center gap-1.5 text-sm text-paper/80">
                Homes, condos and commercial spaces
                <ArrowUpRight size={14} aria-hidden="true" className="arrow arrow-up" />
              </span>
            </span>
          </Link>
          <div className="col-span-12 -mt-2 flex items-center justify-between border-t border-line pt-5 text-sm">
            <p className="text-ink-3">Not sure which system suits your space? We will recommend one on site.</p>
            <Link href="/services" className="link">
              All services
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        inert={panel !== "mobile"}
        data-open={panel === "mobile"}
        className={cn(
          "fixed inset-x-0 top-(--header-h) bottom-0 overflow-y-auto overscroll-contain bg-paper lg:hidden",
          "transition-[opacity,translate,visibility] duration-300 ease-(--ease-drawer)",
          "data-[open=false]:invisible data-[open=false]:-translate-y-3 data-[open=false]:opacity-0 data-[open=false]:duration-200",
        )}
      >
        <nav
          aria-label="Mobile"
          className="container-page flex min-h-full flex-col pt-4 pb-[calc(2rem+env(safe-area-inset-bottom))]"
        >
          <ul className="divide-y divide-line border-b border-line">
            {[
              { name: "Home", href: "/" },
              ...mainNav,
              { name: "Process", href: "/process" },
              { name: "FAQs", href: "/faq" },
              { name: "Contact", href: "/contact" },
            ].map((item, i) => (
              <li
                key={item.href}
                style={{ transitionDelay: panel === "mobile" ? `${60 + i * 35}ms` : "0ms" }}
                className={cn(
                  "transition-[opacity,translate] duration-400 ease-(--ease-out)",
                  panel === "mobile" ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                )}
              >
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="flex items-center justify-between py-4 font-display text-[1.875rem] leading-tight text-ink aria-[current=page]:text-timber"
                >
                  {item.name}
                  <ArrowRight size={20} aria-hidden="true" className="text-ink-3" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-[0.9375rem]">
            <p className="col-span-2 mb-1 text-sm font-medium text-ink-3">Popular services</p>
            {serviceGroups
              .flatMap((g) => g.items.slice(0, 3))
              .map((item) => (
                <Link key={item.href} href={item.href} className="py-1.5 text-ink-2">
                  {item.name}
                </Link>
              ))}
          </div>

          <div className="mt-auto grid gap-3 pt-10">
            <Link
              href="/contact"
              className="btn btn-lg btn-primary"
              data-track="quote_click"
              data-section="header_mobile_get_quote"
            >
              Get a free quote
            </Link>
            <a href={`tel:${site.phone.e164}`} className="btn btn-lg btn-outline tabular-nums">
              <Phone size={18} aria-hidden="true" />
              {site.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
