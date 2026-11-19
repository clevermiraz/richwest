import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { SiteImage } from "@/components/ui/site-image";
import { hero } from "@/content/home";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative flex h-[100svh] min-h-[600px] items-center overflow-hidden bg-slate-950 md:min-h-[700px]">
      <div className="absolute inset-0 z-0">
        <SiteImage src={hero.backgroundImageUrl} priority sizes="100vw" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-slate-950/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/80" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-20 sm:px-6 md:pt-0 lg:px-10">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-3xl leading-[1.05] font-extrabold tracking-tight text-balance text-white sm:text-4xl md:mb-10 md:text-5xl lg:text-7xl">
            {hero.headline}
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed font-medium text-white/75 sm:text-lg md:mb-14 md:text-xl lg:text-2xl">
            {hero.subheadline}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group btn btn-lg btn-primary"
              data-track="section_click quote_click"
              data-section="home_hero_get_quote"
            >
              Get a quote
              <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/portfolio"
              className="btn btn-lg btn-outline-light"
              data-track="section_click"
              data-section="hero_portfolio_cta"
            >
              View our work
            </Link>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm font-medium text-white/80 md:mt-6 md:text-base">
            <Clock size={16} aria-hidden="true" className="shrink-0 text-wood-light" />
            Free quotation · {site.replyPromise}
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-40 md:flex"
      >
        <div className="h-10 w-px animate-pulse bg-white" />
      </div>
    </section>
  );
}
