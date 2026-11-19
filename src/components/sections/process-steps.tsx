import { Icon } from "@/components/ui/icons";
import { reveal } from "@/components/ui/reveal";
import { processSteps } from "@/content/home";

export function ProcessSteps() {
  return (
    <section id="process" className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-wood-accent/5 blur-[100px]"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 text-center md:mb-16 lg:mb-20">
          <span className="eyebrow">How We Work</span>
          <h2 className="heading-section mb-4 text-slate-900" {...reveal()}>
            Our Process
          </h2>
          <p className="mx-auto max-w-2xl text-base font-medium text-slate-500 md:text-lg" {...reveal(1)}>
            From site survey to handover, a predictable and transparent process for every project in Singapore.
          </p>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="absolute top-10 left-0 hidden h-[2px] w-full bg-slate-200 lg:block" />
          <ol className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => (
              <li key={step.title} {...reveal(i)} className="group flex flex-col items-center text-center">
                <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900 text-wood-light shadow-xl">
                  <Icon name={step.icon} size={28} />
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 bg-white text-sm font-black text-slate-900 shadow-lg"
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-black text-slate-900">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="max-w-[180px] text-sm leading-relaxed font-medium text-slate-500">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
