import { Quote, Star } from "lucide-react";
import { GoogleReviewsLink } from "@/components/ui/google-reviews-link";
import { reveal } from "@/components/ui/reveal";
import { testimonials } from "@/content/home";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -mt-64 -mr-64 h-[400px] w-[400px] rounded-full bg-wood-accent/10 blur-[100px] md:h-[600px] md:w-[600px]" />
        <div className="absolute bottom-0 left-0 -mb-64 -ml-64 h-[400px] w-[400px] rounded-full bg-wood-light/5 blur-[100px] md:h-[600px] md:w-[600px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 text-center md:mb-16">
          <span className="eyebrow text-wood-light">Testimonials</span>
          <h2 className="heading-section" {...reveal()}>
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8 lg:gap-10">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              {...reveal(i)}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl sm:p-8 md:rounded-4xl"
            >
              <Quote
                size={48}
                aria-hidden="true"
                className="absolute top-6 right-6 text-wood-accent/15 transition-colors duration-500 group-hover:text-wood-accent/30"
              />
              <div className="mb-5 flex gap-1" role="img" aria-label={`Rated ${t.rating} out of 5`}>
                {Array.from({ length: t.rating }, (_, n) => (
                  <Star key={n} size={16} aria-hidden="true" className="fill-wood-light text-wood-light" />
                ))}
              </div>
              <blockquote className="relative z-10 mb-7 text-base leading-relaxed font-medium text-white/70 italic sm:text-lg">
                <p>&ldquo;{t.content}&rdquo;</p>
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-white/10 bg-wood-accent/20">
                  <span aria-hidden="true" className="text-base font-black text-wood-light">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className="text-lg font-black tracking-tight text-white">{t.name}</div>
                  <div className="mt-0.5 text-xs font-black tracking-widest text-wood-light uppercase">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center md:mt-14">
          <GoogleReviewsLink section="testimonials" tone="dark" />
        </div>
      </div>
    </section>
  );
}
