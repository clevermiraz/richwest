import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  kicker?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Optional element on the right on large screens (usually a link). */
  aside?: React.ReactNode;
  id?: string;
  className?: string;
  as?: "h2" | "h3";
}

/** Left-aligned section heading with an optional right-hand action. */
export function SectionHeading({ kicker, title, intro, aside, id, className, as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between", className)}>
      <div className="max-w-3xl">
        {kicker && <p className="kicker">{kicker}</p>}
        <Tag id={id} className="display-2" data-reveal="">
          {title}
        </Tag>
        {intro && (
          <p className="lede mt-5 max-w-2xl" data-reveal="" style={{ "--i": 1 } as React.CSSProperties}>
            {intro}
          </p>
        )}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </div>
  );
}
