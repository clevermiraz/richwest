import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";

const details = [
  { icon: Phone, label: "Call Us", value: site.phone.display, href: `tel:${site.phone.e164}` },
  { icon: Mail, label: "Email Us", value: site.email, href: `mailto:${site.email}`, breakAll: true },
  { icon: MapPin, label: "Visit Us", value: site.address.full, href: site.address.mapsUrl, external: true },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-2xl md:rounded-6xl lg:flex-row">
          <div className="flex flex-col justify-between p-8 text-white wood-gradient sm:p-10 lg:w-2/5 lg:p-16">
            <div>
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:mb-6 md:text-4xl">Get a Quote in Singapore</h2>
              <p className="mb-8 text-base leading-relaxed text-white/80 md:mb-12 md:text-lg">
                From wooden floor and vinyl flooring to carpet floor, sports floor, outdoor deck, composite deck, and
                polycarbonate roofing shelters, our team is ready to help.
              </p>
              <ul className="space-y-8">
                {details.map(({ icon: IconComponent, label, value, href, external, breakAll }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md">
                      <IconComponent size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-bold tracking-widest text-white/80 uppercase">{label}</div>
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={`text-xl font-bold decoration-2 underline-offset-4 hover:underline ${breakAll ? "break-all" : ""}`}
                      >
                        {value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-16 border-t border-white/20 pt-8">
              <div className="mb-4 text-sm font-bold tracking-widest text-white/80 uppercase">Follow Us</div>
              <div className="flex gap-4">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white decoration-2 underline-offset-4 hover:underline"
                >
                  Instagram
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white decoration-2 underline-offset-4 hover:underline"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="relative bg-white p-8 sm:p-10 lg:w-3/5 lg:p-16">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
