import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { reveal } from "@/components/ui/reveal";
import { SiteImage } from "@/components/ui/site-image";
import { expertise } from "@/content/home";

const CARD_SIZES = "(max-width: 1024px) 100vw, 33vw";

export function Expertise() {
  return (
    <section id="services" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <span className="eyebrow">Our Expertise</span>
          <h2 className="heading-section mb-4 text-slate-900 md:mb-6" {...reveal()}>
            Flooring &amp; Decking for Homes and Commercial Spaces
          </h2>
          <p className="text-base text-slate-600 md:text-lg" {...reveal(1)}>
            Flooring contractor Singapore homeowners and businesses trust for premium workmanship, durable materials,
            and clean finishing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {expertise.map((card, i) => (
            <article
              key={card.title}
              {...reveal(i)}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-[box-shadow,transform] duration-500 hover:-translate-y-2.5 hover:shadow-[0_30px_80px_rgba(188,108,37,0.15)] md:rounded-5xl"
            >
              <div className="relative h-56 overflow-hidden sm:h-64 md:h-72">
                <SiteImage
                  src={card.image}
                  altFallback={card.title}
                  sizes={CARD_SIZES}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-3 sm:bottom-6 sm:left-6">
                  <div className="shrink-0 rounded-xl bg-white p-2.5 shadow-xl">
                    <Icon name={card.icon} size={24} className="text-wood-ink" />
                  </div>
                  <h3 className="text-xl leading-tight font-black text-white sm:text-2xl">{card.title}</h3>
                </div>
              </div>
              <div className="p-5 sm:p-7 md:p-8">
                <p className="mb-6 text-sm leading-relaxed font-medium text-slate-500 sm:text-base">
                  {card.description}
                </p>
                <ul className="mb-6 space-y-2.5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-700 sm:text-base"
                    >
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-wood-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-wood-ink uppercase transition-all hover:gap-3 sm:text-sm"
                >
                  Explore Services
                  <span className="sr-only">: {card.title}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
