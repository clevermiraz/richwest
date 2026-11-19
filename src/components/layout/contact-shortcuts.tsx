import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

/** Floating WhatsApp button (tablet and up) and sticky call/WhatsApp bar (phones). */
export function ContactShortcuts() {
  return (
    <>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp_click"
        data-section="floating_button"
        className="fixed right-6 bottom-6 z-40 hidden items-center gap-2.5 rounded-full bg-wa py-3 pr-5 pl-4 font-semibold text-wa-ink shadow-lg shadow-slate-900/20 transition-[filter] duration-200 hover:brightness-95 sm:inline-flex lg:right-8 lg:bottom-8"
      >
        <WhatsAppIcon size={20} />
        Chat on WhatsApp
        <span className="sr-only">(opens in a new tab)</span>
      </a>

      <nav
        aria-label="Contact options"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(15,23,42,0.06)] sm:hidden"
      >
        <div className="flex items-center gap-2 px-3 py-2.5">
          <a
            href={`tel:${site.phone.e164}`}
            data-track="quote_click"
            data-section="mobile_bar_call"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 text-[15px] font-semibold text-slate-900 active:bg-slate-50"
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
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-wa text-[15px] font-semibold text-wa-ink active:brightness-95"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </nav>
    </>
  );
}
