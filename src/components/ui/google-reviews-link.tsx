import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { GoogleIcon } from "./icons";

interface GoogleReviewsLinkProps {
  section: string;
  tone?: "light" | "dark";
  label?: string;
  className?: string;
}

export function GoogleReviewsLink({
  section,
  tone = "light",
  label = "Read our reviews on Google",
  className,
}: GoogleReviewsLinkProps) {
  return (
    <a
      href={site.googleReviews}
      target="_blank"
      rel="noopener noreferrer"
      data-track="section_click"
      data-section={`google_reviews_${section}`}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-bold whitespace-nowrap transition-colors",
        tone === "dark"
          ? "bg-white text-slate-900 hover:bg-slate-100"
          : "border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300",
        className,
      )}
    >
      <GoogleIcon />
      {label}
      <ArrowUpRight size={16} aria-hidden="true" className="text-slate-600" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
