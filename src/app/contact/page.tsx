import { CircleCheck, Clock, MapPin } from "lucide-react";
import { ContactSection } from "@/components/sections/contact-section";
import { PageHero } from "@/components/sections/page-hero";
import { WhatsAppIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, contactPageEntity, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact | Free Flooring Quote",
  description:
    "Get a free flooring quote in Singapore. Contact Richwest Integrated for on-site consultation for flooring, decking, or carpentry.",
  path: "/contact",
  keywords:
    "flooring contractor singapore, commercial flooring contractor, wooden floor quote singapore, vinyl flooring quote singapore, carpet floor quotation singapore, office carpet tiles singapore, sports floor contractor singapore, wooden deck contractor singapore, composite deck singapore, poly carbonate roofing shelters singapore",
});

const whatsappHref = `${site.whatsapp}?text=${encodeURIComponent("Hi! I'm interested in a free flooring consultation.")}`;

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7291996498247!2d103.88949657450767!3d1.3306099617135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17be3da6da2b%3A0x9a3c4bd6ba0cdfdb!2s43J%20Paya%20Lebar%20Cres%2C%20Singapore%20536108!5e0!3m2!1sen!2ssg!4v1709000000000!5m2!1sen!2ssg";

export default function ContactPage() {
  return (
    <div className="pt-(--header-offset)">
      <JsonLd
        data={[
          webPageSchema("ContactPage", "Contact Richwest Integrated", "/contact", contactPageEntity),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <PageHero title="Contact Us" intro="Have a question or ready to get a quote? Reach out to our team today." />

      <section className="bg-slate-950 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl rounded-5xl border border-white/15 bg-white/5 px-6 py-12 text-center shadow-2xl sm:px-10 sm:py-16">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-wa/70 px-4 py-1.5 text-xs font-bold tracking-widest text-wa uppercase">
            <Clock size={14} aria-hidden="true" />
            Get a quote on WhatsApp
          </p>
          <h2 className="heading-section mb-4 text-white">
            Professional <span className="text-wa">Flooring Experts</span>
            <br /> Available Now
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Wooden Floor, Timber Decking, Composite Timber Decking, Wooden Deck Varnish, and Outdoor Deck services. Chat
            with us now for a free consultation.
          </p>
          <ul className="mb-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-200">
            {["20+ Years Experience", "Premium Materials", "Reply Within 1 Hour"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CircleCheck size={16} aria-hidden="true" className="text-wa" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp_click"
              data-section="contact_page_cta"
              className="btn btn-lg bg-wa text-wa-ink hover:brightness-95"
            >
              <WhatsAppIcon size={22} />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${site.phone.e164}`}
              className="text-sm font-semibold text-slate-200 underline decoration-2 underline-offset-4 transition-colors hover:text-white"
            >
              Or call {site.phone.display}
            </a>
          </div>
        </div>
      </section>

      <ContactSection />

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-4xl border border-slate-100 bg-white p-10 shadow-sm">
              <h2 className="mb-8 text-2xl font-bold text-slate-900">Our Office</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin size={24} aria-hidden="true" className="shrink-0 text-wood-ink" />
                  <div>
                    <h3 className="mb-1 font-bold text-slate-900">Address</h3>
                    <address className="text-slate-600 not-italic">{site.address.full}</address>
                    <p className="mt-1 text-sm text-slate-600">(Visit by appointment only)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={24} aria-hidden="true" className="shrink-0 text-wood-ink" />
                  <div>
                    <h3 className="mb-1 font-bold text-slate-900">Business Hours</h3>
                    <p className="text-slate-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Sat: 9:00 AM - 1:00 PM</p>
                    <p className="text-slate-600">Sun &amp; PH: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-4xl bg-slate-200">
              <iframe
                title="Richwest Integrated location at 43J Paya Lebar Crescent, Singapore 536108"
                src={MAP_EMBED}
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
