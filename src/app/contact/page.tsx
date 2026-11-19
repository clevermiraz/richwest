import { Check, Phone } from "lucide-react";
import { ContactSection } from "@/components/sections/contact-section";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppIcon } from "@/components/ui/icons";
import { breadcrumbSchema, contactPageEntity, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { hoursDisplay, site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Free Flooring Quote Singapore: Contact Us",
  description:
    "Get a free flooring or decking quote in Singapore. WhatsApp or call +65 9625 2205, or send the form. We reply within 1 hour during business hours.",
  path: "/contact",
  keywords:
    "flooring contractor singapore, commercial flooring contractor, wooden floor quote singapore, vinyl flooring quote singapore, carpet floor quotation singapore, office carpet tiles singapore, sports floor contractor singapore, wooden deck contractor singapore, composite deck singapore, poly carbonate roofing shelters singapore",
});

const whatsappHref = `${site.whatsapp}?text=${encodeURIComponent("Hi! I'm interested in a free flooring consultation.")}`;

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7291996498247!2d103.88949657450767!3d1.3306099617135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17be3da6da2b%3A0x9a3c4bd6ba0cdfdb!2s43J%20Paya%20Lebar%20Cres%2C%20Singapore%20536108!5e0!3m2!1sen!2ssg!4v1709000000000!5m2!1sen!2ssg";

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("ContactPage", "Contact Richwest Integrated", "/contact", contactPageEntity),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
        kicker="Free quote · Free on-site measurement"
        title={
          <>
            Contact <em className="text-timber">us</em>
          </>
        }
        intro="Have a question or ready to get a quote? Reach out to our team today. WhatsApp is the fastest way to reach us."
        image="/images/composite-deck-balcony-sg.webp"
        caption="Composite timber decking, condominium balcony"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_click"
            data-section="contact_page_cta"
            className="btn btn-lg btn-wa"
          >
            <WhatsAppIcon size={20} />
            Chat on WhatsApp
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a
            href={`tel:${site.phone.e164}`}
            data-track="quote_click"
            data-section="contact_page_call"
            className="btn btn-lg btn-outline tabular-nums"
          >
            <Phone size={18} aria-hidden="true" />
            {site.phone.display}
          </a>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] text-ink-2">
          {["20+ years experience", "Premium materials", "Reply within 1 hour"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check size={16} aria-hidden="true" className="text-timber" />
              {item}
            </li>
          ))}
        </ul>
      </PageHero>

      <ContactSection
        title={
          <>
            Send us the <em className="text-timber">details.</em>
          </>
        }
        intro="Prefer to write it down? Share the area, the floor you have in mind and your timeline. We will come back with next steps and a time for a free site visit."
      />

      <section aria-labelledby="office-heading" className="py-20 md:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">Visit by appointment</p>
            <h2 id="office-heading" className="display-2">
              Our office
            </h2>
            <address className="mt-6 text-lg text-ink-2 not-italic">{site.address.full}</address>
            <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="link mt-3 inline-block">
              Open in Google Maps
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <h3 className="mt-10 mb-3 text-sm font-medium text-ink-3">Business hours</h3>
            <dl className="max-w-xs space-y-1.5">
              {hoursDisplay.map((h) => (
                <div key={h.label} className="flex justify-between gap-4 border-b border-line pb-1.5">
                  <dt className="text-ink-2">{h.label}</dt>
                  <dd className="text-ink tabular-nums">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-paper-2 lg:col-span-8 lg:min-h-[480px]">
            <iframe
              title="Richwest Integrated location at 43J Paya Lebar Crescent, Singapore 536108"
              src={MAP_EMBED}
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.4]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
