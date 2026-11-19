import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";
import { SiteImage } from "@/components/ui/site-image";
import { cn } from "@/lib/cn";

interface PageHeroProps {
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Short context label above the title. */
  kicker?: string;
  breadcrumbs?: readonly Crumb[];
  /** Photo shown beside the title on large screens (above the fold, so eager). */
  image?: string;
  imageAlt?: string;
  /** Caption under the photo, e.g. the material shown. */
  caption?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Light editorial intro with the page's single <h1>.
 * Text rises in on load (transform only, so it paints in the first frame);
 * the photo unveils with a short wipe.
 */
export function PageHero({
  title,
  intro,
  kicker,
  breadcrumbs,
  image,
  imageAlt,
  caption,
  className,
  children,
}: PageHeroProps) {
  return (
    <section className={cn("border-b border-line pt-(--header-offset)", className)}>
      <div className="container-page pt-8 pb-14 md:pt-12 md:pb-20">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className={cn("grid gap-10 lg:gap-16", image ? "lg:grid-cols-12 lg:items-center" : "max-w-4xl")}>
          <div className={cn("intro", image && "lg:col-span-7")}>
            {kicker && <p className="kicker">{kicker}</p>}
            <h1 className="display-1 text-ink" style={{ "--d": 1 } as React.CSSProperties}>
              {title}
            </h1>
            {intro && (
              <p className="lede mt-6 max-w-2xl md:mt-8" style={{ "--d": 2 } as React.CSSProperties}>
                {intro}
              </p>
            )}
            {children && (
              <div className="mt-8 md:mt-10" style={{ "--d": 3 } as React.CSSProperties}>
                {children}
              </div>
            )}
          </div>
          {image && (
            <figure className="lg:col-span-5">
              <div className="unveil relative aspect-[4/5] overflow-hidden rounded-lg bg-paper-2 sm:aspect-[4/3] lg:aspect-[4/5]">
                <SiteImage
                  src={image}
                  altFallback={imageAlt}
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-full w-full object-cover"
                />
              </div>
              {caption && <figcaption className="mt-3 text-sm text-ink-3">{caption}</figcaption>}
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
