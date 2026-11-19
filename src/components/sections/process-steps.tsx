import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { processSteps } from "@/content/home";

interface ProcessStepsProps {
  /** Link through to the full process page (hidden on that page itself). */
  showLink?: boolean;
}

/**
 * Five-step process on a dark band. The rule above the steps draws from left
 * to right as the section scrolls into view (explains the sequence).
 */
export function ProcessSteps({ showLink = true }: ProcessStepsProps) {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="on-dark bg-night grain py-20 text-paper md:py-28"
    >
      <div className="container-page">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="kicker">How we work</p>
            <h2 id="process-heading" className="display-2" data-reveal="">
              From first visit to <em className="text-oak">final handover.</em>
            </h2>
            <p className="lede mt-5 max-w-2xl text-paper/75" data-reveal="" style={{ "--i": 1 } as CSSProperties}>
              A predictable, transparent process for every project in Singapore, with one team accountable from site
              survey to handover.
            </p>
          </div>
          {showLink && (
            <Link href="/process" className="btn btn-outline-light shrink-0">
              Our process in detail
              <ArrowRight size={16} aria-hidden="true" className="arrow" />
            </Link>
          )}
        </div>

        <div className="relative">
          <div aria-hidden="true" className="absolute top-0 right-0 left-0 hidden h-px bg-line-dark lg:block">
            <div data-draw="" className="h-px w-full bg-oak" />
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:gap-8">
            {processSteps.map((step, i) => (
              <li
                key={step.title}
                data-reveal=""
                style={{ "--i": i } as CSSProperties}
                className="relative grid grid-cols-[3.25rem_1fr] border-t border-line-dark pt-6 sm:block lg:border-t-0 lg:pt-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-oak ring-4 ring-night lg:block"
                />
                <p
                  className="row-span-2 font-display text-[2rem] leading-none text-oak tabular-nums sm:text-[2.5rem]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold text-paper sm:mt-5">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-paper/75">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
