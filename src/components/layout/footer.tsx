import { ArrowUpRight } from "lucide-react";
import { cacheLife } from "next/cache";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/consent/cookie-settings-button";
import { FacebookIcon, GoogleIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { companyLinks, hoursDisplay, serviceGroups, site } from "@/lib/site";

/** Cached so the year is computed once per deployment, keeping pages static. */
async function getCopyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

const linkClass = "text-paper/75 transition-colors hover:text-paper";
const headingClass = "mb-4 text-sm font-medium text-oak";

export async function Footer() {
  const year = await getCopyrightYear();
  const whatsappHref = `${site.whatsapp}?text=${encodeURIComponent("Hi Richwest, I'd like a quote for my floor.")}`;

  return (
    <footer className="on-dark bg-night grain pb-28 text-paper sm:pb-12">
      <div className="container-page">
        {/* Closing call to action */}
        <div className="flex flex-col gap-8 border-b border-line-dark py-16 md:py-24 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="kicker">Free on-site consultation</p>
            <p className="display-2" data-reveal="">
              Let&rsquo;s talk about <em className="text-oak">your floor.</em>
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp_click"
              data-section="footer_cta"
              className="btn btn-lg btn-wa"
            >
              <WhatsAppIcon size={20} />
              WhatsApp us
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <Link
              href="/contact"
              data-track="quote_click"
              data-section="footer_cta"
              className="btn btn-lg btn-outline-light"
            >
              Request a quote
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-14 md:grid-cols-12 md:gap-x-10">
          <div className="col-span-2 md:col-span-3">
            <Link href="/" className="inline-block" translate="no">
              <Logo variant="light" className="h-9 w-auto" />
              <span className="sr-only">Richwest Integrated, home</span>
            </Link>
            <p className="mt-5 max-w-sm text-paper/75">
              Flooring and decking contractor in Singapore since {site.foundedYear}. Wooden floors, vinyl, carpet,
              sports floors and outdoor decks, installed by our own team.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-paper/80 transition-colors hover:border-paper/40 hover:text-paper"
              >
                <InstagramIcon />
                <span className="sr-only">Richwest Integrated on Instagram (opens in a new tab)</span>
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-paper/80 transition-colors hover:border-paper/40 hover:text-paper"
              >
                <FacebookIcon />
                <span className="sr-only">Richwest Integrated on Facebook (opens in a new tab)</span>
              </a>
              <a
                href={site.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                data-track="section_click"
                data-section="google_reviews_footer"
                className="ml-1 inline-flex h-11 items-center gap-2 rounded-full border border-line-dark px-4 text-sm text-paper/80 transition-colors hover:border-paper/40 hover:text-paper"
              >
                <GoogleIcon size={16} />
                Google reviews
                <ArrowUpRight size={14} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>

          {serviceGroups.slice(0, 2).map((group) => (
            <nav key={group.name} aria-labelledby={`footer-${group.name}`} className="md:col-span-2">
              <h2 id={`footer-${group.name}`} className={headingClass}>
                {group.name}
              </h2>
              <ul className="space-y-1">
                {group.items.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={`${linkClass} inline-block py-1`}>
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-labelledby="footer-company" className="md:col-span-2">
            <h2 id="footer-company" className={headingClass}>
              Company
            </h2>
            <ul className="space-y-1">
              {[...companyLinks, ...serviceGroups[2].items].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={`${linkClass} inline-block py-1`}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-3">
            <h2 className={headingClass}>Contact</h2>
            <address className="space-y-3 not-italic">
              <a href={`tel:${site.phone.e164}`} className={`${linkClass} block tabular-nums`}>
                {site.phone.display}
              </a>
              <a href={`mailto:${site.email}`} className={`${linkClass} block break-all`}>
                {site.email}
              </a>
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} block`}>
                {site.address.full}
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
            </address>
            <dl className="mt-5 space-y-1 text-sm">
              {hoursDisplay.map((h) => (
                <div key={h.label} className="flex justify-between gap-4">
                  <dt className="whitespace-nowrap text-paper/60">{h.label}</dt>
                  <dd className="whitespace-nowrap text-paper/80 tabular-nums">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-4 border-t border-line-dark pt-6 text-sm text-paper/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName} All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6">
            <Link href="/privacy" className="inline-flex min-h-11 items-center transition-colors hover:text-paper">
              Privacy &amp; cookies
            </Link>
            <CookieSettingsButton className="inline-flex min-h-11 items-center transition-colors hover:text-paper">
              Cookie settings
            </CookieSettingsButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
