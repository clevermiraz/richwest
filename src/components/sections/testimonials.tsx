import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { GoogleIcon } from "@/components/ui/icons";
import { testimonials } from "@/content/home";
import { site } from "@/lib/site";

/** One lead quote set large, two supporting quotes beside it. */
export function Testimonials() {
  const [lead, ...rest] = testimonials;

  return (
    <section aria-labelledby="testimonials-heading" className="py-20 md:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <p className="kicker">Client words</p>
          <h2 id="testimonials-heading" className="display-2" data-reveal="">
            Trusted in homes <em className="text-timber">and offices.</em>
          </h2>
          <a
            href={site.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            data-track="section_click"
            data-section="google_reviews_testimonials"
            className="btn btn-outline mt-8"
          >
            <GoogleIcon size={16} />
            Read our Google reviews
            <ArrowUpRight size={16} aria-hidden="true" className="arrow arrow-up" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <div className="lg:col-span-8">
          <figure data-reveal="" className="border-t border-ink pt-8">
            <blockquote>
              <p className="font-display text-[clamp(1.625rem,1.2rem+1.6vw,2.5rem)] leading-[1.2] text-ink">
                &ldquo;{lead.content}&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 text-[0.9375rem]">
              <span className="font-semibold text-ink">{lead.name}</span>
              <span aria-hidden="true" className="h-px w-6 bg-line" />
              <span className="text-ink-3">{lead.role}</span>
            </figcaption>
          </figure>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {rest.map((t, i) => (
              <figure
                key={t.name}
                data-reveal=""
                style={{ "--i": i + 1 } as CSSProperties}
                className="border-t border-line pt-6"
              >
                <blockquote>
                  <p className="leading-relaxed text-ink-2">&ldquo;{t.content}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-5 text-[0.9375rem]">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="text-ink-3">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
