import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

/** Floating WhatsApp button (tablet and up) and a sticky call/WhatsApp bar (phones). */
export function ContactShortcuts() {
  return (
    <>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp_click"
        data-section="floating_button"
        className="group fixed right-6 bottom-6 z-40 hidden h-14 items-center gap-2.5 rounded-full bg-wa pr-5 pl-4 font-semibold text-wa-ink shadow-[0_1px_2px_rgb(0_0_0/0.12),0_12px_32px_-8px_rgb(11_46_40/0.45)] transition-[translate,background-color] duration-200 ease-(--ease-out) hover:bg-[#1fbf5b] active:scale-[0.97] sm:inline-flex lg:right-8 lg:bottom-8 [@media(hover:hover)]:hover:-translate-y-0.5"
      >
        <WhatsAppIcon size={22} />
        Chat on WhatsApp
        <span className="sr-only">(opens in a new tab)</span>
      </a>

      <nav
        aria-label="Contact options"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md sm:hidden"
      >
        <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
          <a
            href={`tel:${site.phone.e164}`}
            data-track="quote_click"
            data-section="mobile_bar_call"
            className="btn min-h-12 border border-ink/20 text-ink"
          >
            <Phone size={18} aria-hidden="true" />
            Call us
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_click"
            data-section="mobile_bar"
            className="btn btn-wa min-h-12"
          >
            <WhatsAppIcon />
            WhatsApp
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </nav>
    </>
  );
}
