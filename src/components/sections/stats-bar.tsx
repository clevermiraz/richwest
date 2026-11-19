import { Fragment } from "react";
import { Icon } from "@/components/ui/icons";
import { stats } from "@/content/home";

export function StatsBar() {
  return (
    <div className="relative z-20 mx-auto -mt-8 max-w-6xl px-4 sm:-mt-12 sm:px-6 lg:px-10">
      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-6 md:rounded-3xl md:p-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-wood-accent/0 via-wood-accent/5 to-wood-accent/0 transition-transform duration-1000 group-hover:translate-x-full"
        />
        <dl className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-10 lg:flex lg:items-center lg:justify-between lg:gap-4">
          {stats.map((stat, i) => (
            <Fragment key={stat.label}>
              <div className="group/item flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.03] md:gap-4">
                <div className="shrink-0 rounded-xl bg-white/5 p-2 glow-wood transition-colors group-hover/item:bg-wood-accent/20 sm:p-3">
                  <Icon name={stat.icon} size={20} className="text-wood-accent" />
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-[10px] font-black tracking-[0.15em] text-white/60 uppercase md:text-xs lg:whitespace-nowrap">
                    {stat.label}
                  </dt>
                  <dd className="mb-1 text-base leading-none font-black whitespace-nowrap text-white transition-colors group-hover/item:text-wood-light sm:text-lg md:text-xl lg:text-2xl">
                    {stat.value}
                  </dd>
                </div>
              </div>
              {i < stats.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden h-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block"
                />
              )}
            </Fragment>
          ))}
        </dl>
      </div>
    </div>
  );
}
