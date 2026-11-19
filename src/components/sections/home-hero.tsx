import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { SiteImage } from "@/components/ui/site-image";
import { hero, stats } from "@/content/home";
import { site } from "@/lib/site";

const d = (n: number) => ({ "--d": n }) as CSSProperties;

/**
 * First screen. Editorial split: headline and actions on the left, a tall
 * photograph with a detail inset on the right. Motion is a single load
 * sequence (text rises, photo unveils, inset follows) that runs once.
 */
export function HomeHero() {
  const whatsappHref = `${site.whatsapp}?text=${encodeURIComponent("Hi Richwest, I'd like a quote for my floor.")}`;

  return (
    <section className="relative pt-(--header-offset)">
      {/*
        Phones: kicker and headline, then the photo, then the copy and actions
        (the text wrapper is display: contents so its children can be reordered).
        Desktop: text column on the left, photo on the right.
      */}
      <div className="container-page flex flex-col pt-8 pb-14 md:pt-16 lg:grid lg:grid-cols-12 lg:gap-10 lg:pt-14 lg:pb-24">
        <div className="intro contents lg:col-span-7 lg:flex lg:flex-col lg:justify-center lg:pr-6">
          <p className="kicker" style={d(0)}>
            Flooring &amp; decking contractor · Singapore since {site.foundedYear}
          </p>
          <h1 className="display-1 text-ink" style={d(1)}>
            Your premium <em className="text-timber">flooring partner</em> in Singapore.
          </h1>
          <p className="lede mt-7 max-w-xl max-lg:order-2" style={d(2)}>
            {hero.subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-3 max-lg:order-2 sm:flex-row" style={d(3)}>
            <Link
              href="/contact"
              className="btn btn-lg btn-primary"
              data-track="section_click quote_click"
              data-section="home_hero_get_quote"
            >
              Get a free quote
              <ArrowRight size={18} aria-hidden="true" className="arrow" />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-outline"
              data-track="whatsapp_click"
              data-section="home_hero_whatsapp"
            >
              <WhatsAppIcon size={18} />
              WhatsApp us
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <p className="mt-6 text-sm text-ink-3 max-lg:order-2" style={d(4)}>
            {site.replyPromise} · Free on-site measurement and samples
          </p>
        </div>

        <figure className="mt-8 max-lg:order-1 lg:col-span-5 lg:mt-0 lg:self-center">
          <div className="relative">
            <div className="unveil relative aspect-[4/3] overflow-hidden rounded-lg bg-paper-2 sm:aspect-[16/11] lg:aspect-[4/5]">
              <SiteImage
                src={hero.backgroundImageUrl}
                priority
                sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(100vw - 4rem), 42vw"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Detail inset: a second material, overlapping the main photo's edge. */}
            <div
              aria-hidden="true"
              className="unveil absolute bottom-10 -left-14 hidden w-[36%] overflow-hidden rounded-md border-[6px] border-paper shadow-[0_24px_48px_-20px_rgb(28_25_23/0.45)] lg:block"
              style={{ animationDelay: "350ms" }}
            >
              <div className="aspect-square">
                <SiteImage
                  src="/images/wooden-floor-herringbone.webp"
                  alt=""
                  sizes="16vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-ink-3">
            <span>Engineered oak, residential hallway</span>
            <span className="hidden shrink-0 tabular-nums sm:inline">01 / Wooden floor</span>
          </figcaption>
        </figure>
      </div>

      {/* Proof strip */}
      <div className="border-y border-line">
        <dl className="container-page grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal=""
              style={{ "--i": i } as CSSProperties}
              className="flex flex-col-reverse gap-1 border-line py-6 odd:pr-4 even:border-l even:pl-5 md:py-8 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0 [&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0"
            >
              <dt className="text-sm text-ink-3">{stat.label}</dt>
              <dd className="font-display text-[1.75rem] leading-none text-ink tabular-nums md:text-[2.25rem]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
