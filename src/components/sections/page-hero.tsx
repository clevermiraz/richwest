import { cn } from "@/lib/cn";
import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";
import { SiteImage } from "@/components/ui/site-image";

interface PageHeroProps {
  title: React.ReactNode;
  intro?: React.ReactNode;
  eyebrow?: string;
  breadcrumbs?: readonly Crumb[];
  /** Background photo; rendered as the page's LCP image. */
  image?: string;
  imageAlt?: string;
  /** Tailwind opacity class for the photo, or "overlay" for a gradient overlay. */
  imageTreatment?: "opacity-20" | "opacity-25" | "overlay";
  className?: string;
  introClassName?: string;
  /** Wider side padding on large screens, as on service and process pages. */
  wide?: boolean;
  children?: React.ReactNode;
}

/** Dark intro band with the page's single <h1>. */
export function PageHero({
  title,
  intro,
  eyebrow,
  breadcrumbs,
  image,
  imageAlt,
  imageTreatment = "opacity-20",
  className = "bg-slate-900 py-24",
  introClassName = "text-xl text-white/70",
  wide = false,
  children,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden text-white", className)}>
      {image && (
        <div className={cn("absolute inset-0", imageTreatment !== "overlay" && imageTreatment)}>
          <SiteImage src={image} altFallback={imageAlt} priority sizes="100vw" className="h-full w-full object-cover" />
          {imageTreatment === "overlay" && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/25" />
          )}
        </div>
      )}
      <div className={cn("relative z-10 mx-auto max-w-7xl px-4 sm:px-6", wide ? "lg:px-10" : "lg:px-8")}>
        <div className="max-w-3xl animate-fade-up">
          {breadcrumbs && <Breadcrumbs tone="light" items={breadcrumbs} />}
          {eyebrow && <p className="mb-5 text-xs font-black tracking-[0.3em] text-wood-light uppercase">{eyebrow}</p>}
          <h1 className="heading-page mb-6">{title}</h1>
          {intro && <p className={introClassName}>{intro}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
