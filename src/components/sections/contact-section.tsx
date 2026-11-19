import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { hoursDisplay, site } from "@/lib/site";
import { ContactForm } from "./contact-form";

interface ContactSectionProps {
  /** Heading level: h2 on most pages; the contact page passes its own copy. */
  title?: React.ReactNode;
  intro?: string;
}

/** Contact methods on the left, the quote form on the right. Anchor: #contact. */
export function ContactSection({
  title = (
    <>
      Get a quote <em className="text-timber">in Singapore.</em>
    </>
  ),
  intro = "Tell us about the space and the floor you have in mind. We will reply within the hour during business hours and arrange a free on-site measurement.",
}: ContactSectionProps) {
  const whatsappHref = `${site.whatsapp}?text=${encodeURIComponent("Hi Richwest, I'd like a quote for my floor.")}`;
  const methods = [
    {
      icon: <WhatsAppIcon size={18} />,
      label: "WhatsApp",
      value: "Chat with our team",
      href: whatsappHref,
      external: true,
      track: "whatsapp_click",
    },
    {
      icon: <Phone size={18} aria-hidden="true" />,
      label: "Call",
      value: site.phone.display,
      href: `tel:${site.phone.e164}`,
      track: "quote_click",
    },
    { icon: <Mail size={18} aria-hidden="true" />, label: "Email", value: site.email, href: `mailto:${site.email}` },
    {
      icon: <MapPin size={18} aria-hidden="true" />,
      label: "Office",
      value: site.address.full,
      href: site.address.mapsUrl,
      external: true,
    },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-paper-2 py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="kicker">Start a project</p>
          <h2 id="contact-heading" className="display-2" data-reveal="">
            {title}
          </h2>
          <p className="lede mt-5">{intro}</p>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {methods.map((m) => (
              <li key={m.label}>
                <a
                  href={m.href}
                  {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(m.track
                    ? { "data-track": m.track, "data-section": `contact_section_${m.label.toLowerCase()}` }
                    : {})}
                  className="group flex items-center gap-4 py-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-ink transition-colors group-hover:border-timber group-hover:text-timber">
                    {m.icon}
                  </span>
                  <span className="min-w-0 grow">
                    <span className="block text-sm text-ink-3">{m.label}</span>
                    <span className="block font-medium break-words text-ink">{m.value}</span>
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" className="arrow arrow-up shrink-0 text-ink-3" />
                  {m.external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid max-w-xs gap-1 text-sm">
            {hoursDisplay.map((h) => (
              <div key={h.label} className="flex justify-between gap-4">
                <dt className="text-ink-3">{h.label}</dt>
                <dd className="text-ink-2 tabular-nums">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-xl border border-line bg-white p-6 shadow-[0_1px_2px_rgb(28_25_23/0.04),0_24px_48px_-32px_rgb(28_25_23/0.3)] sm:p-10">
            <h3 className="display-3 text-ink">Request a free quote</h3>
            <p className="mt-2 mb-8 text-[0.9375rem] text-ink-3">
              Takes about a minute. Every field except the message is required.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
