import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

interface QuoteActionsProps {
  /** Prefix for analytics `data-section` values, e.g. "service_hero". */
  section: string;
  /** Topic for the pre-filled WhatsApp message, e.g. "vinyl flooring". */
  topic?: string;
  /** Stack full-width buttons (for narrow cards and sidebars). */
  compact?: boolean;
}

/** Primary page actions: quote, WhatsApp and a visible call link. */
export function QuoteActions({ section, topic = "my floor", compact = false }: QuoteActionsProps) {
  const whatsappHref = `${site.whatsapp}?text=${encodeURIComponent(`Hi Richwest, I'd like a quote for ${topic}.`)}`;

  return (
    <>
      <div className={compact ? "grid gap-3" : "flex flex-col gap-3 sm:flex-row"}>
        <Link
          href="/contact"
          className="btn btn-lg btn-primary"
          data-track="quote_click"
          data-section={`${section}_get_quote`}
        >
          Get a free quote
          <ArrowRight size={18} aria-hidden="true" className="arrow" />
        </Link>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-outline"
          data-track="whatsapp_click"
          data-section={`${section}_whatsapp`}
        >
          <WhatsAppIcon size={18} />
          WhatsApp us
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
      <p className="mt-5 text-sm text-ink-3">
        Prefer to talk? Call{" "}
        <a
          href={`tel:${site.phone.e164}`}
          className="font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
          data-track="quote_click"
          data-section={`${section}_call`}
        >
          {site.phone.display}
        </a>{" "}
        · {site.replyPromise} · Free site visit
      </p>
    </>
  );
}
