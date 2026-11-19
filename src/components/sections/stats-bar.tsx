import { Icon } from "@/components/ui/icons";
import { stats } from "@/content/home";

/**
 * Key facts as a definition list. Each `<div>` holds exactly one `<dt>`/`<dd>`
 * pair (the only valid shape inside `<dl>`); the icon is a decorative `<dd>`
 * and the vertical dividers are pseudo-elements, so no stray elements sit in the list.
 */
export function StatsBar() {
  return (
    <div className="relative z-20 mx-auto -mt-8 max-w-6xl px-4 sm:-mt-12 sm:px-6 lg:px-10">
      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-6 md:rounded-3xl md:p-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-wood-accent/0 via-wood-accent/5 to-wood-accent/0 transition-transform duration-1000 group-hover:translate-x-full"
        />
        <dl className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-10 lg:flex lg:items-center lg:justify-between lg:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group/item relative grid grid-cols-[auto_1fr] items-center gap-x-2.5 transition-transform duration-200 hover:scale-[1.03] md:gap-x-4 lg:flex-1 lg:grid-cols-[auto_auto] lg:justify-center lg:not-last:after:absolute lg:not-last:after:inset-y-0 lg:not-last:after:right-0 lg:not-last:after:w-px lg:not-last:after:bg-gradient-to-b lg:not-last:after:from-transparent lg:not-last:after:via-white/10 lg:not-last:after:to-transparent"
            >
              <dt className="col-start-2 row-start-2 text-[10px] font-black tracking-[0.15em] text-white/60 uppercase md:text-xs lg:whitespace-nowrap">
                {stat.label}
              </dt>
              <dd className="col-start-2 row-start-1 mb-1 text-base leading-none font-black whitespace-nowrap text-white tabular-nums transition-colors group-hover/item:text-wood-light sm:text-lg md:text-xl lg:text-2xl">
                {stat.value}
              </dd>
              <dd
                aria-hidden="true"
                className="col-start-1 row-span-2 row-start-1 shrink-0 rounded-xl bg-white/5 p-2 glow-wood transition-colors group-hover/item:bg-wood-accent/20 sm:p-3"
              >
                <Icon name={stat.icon} size={20} className="text-wood-accent" />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
