import { Mail, MapPin, Phone } from "lucide-react";
import { cacheLife } from "next/cache";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/consent/cookie-settings-button";
import { GoogleReviewsLink } from "@/components/ui/google-reviews-link";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { footerQuickLinks, footerServiceLinks, site } from "@/lib/site";

/** Cached so the year is computed once per deployment, keeping pages static. */
async function getCopyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

const socialClass =
  "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-wood-accent/40";

export async function Footer() {
  const year = await getCopyrightYear();

  return (
    <footer className="bg-slate-900 pt-12 pb-28 text-white md:pt-20 md:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-2 gap-x-6 gap-y-10 md:mb-16 md:gap-12 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-5 md:mb-6">
              <Logo variant="light" className="h-10 w-auto" />
            </div>
            <p className="mb-6 leading-relaxed text-slate-300 md:mb-8">
              Flooring contractor Singapore homeowners and businesses trust for wooden floor, vinyl flooring, carpet
              floor, sports floor, outdoor deck, and composite deck projects.
            </p>
            <div className="flex gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Richwest Integrated on Instagram"
                className={socialClass}
              >
                <InstagramIcon />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Richwest Integrated on Facebook"
                className={socialClass}
              >
                <FacebookIcon />
              </a>
            </div>
            <GoogleReviewsLink section="footer" tone="dark" className="mt-5" label="Our Google reviews" />
          </div>

          <nav aria-labelledby="footer-quick-access">
            <h2 id="footer-quick-access" className="mb-2 text-base font-bold md:mb-8 md:text-lg">
              Quick Access
            </h2>
            <ul className="md:space-y-4">
              {footerQuickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-300 transition-colors hover:text-wood-light">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="mb-2 text-base font-bold md:mb-8 md:text-lg">
              Our Services
            </h2>
            <ul className="md:space-y-4">
              {footerServiceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-300 transition-colors hover:text-wood-light">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 sm:col-span-1">
            <h2 className="mb-3 text-base font-bold md:mb-8 md:text-lg">Get In Touch</h2>
            <address className="not-italic">
              <ul className="space-y-2 md:space-y-6">
                <li className="flex items-center gap-4 md:items-start">
                  <Phone size={20} aria-hidden="true" className="shrink-0 text-wood-accent md:mt-0.5" />
                  <a href={`tel:${site.phone.e164}`} className="text-slate-300 transition-colors hover:text-white">
                    {site.phone.display}
                  </a>
                </li>
                <li className="flex items-center gap-4 md:items-start">
                  <Mail size={20} aria-hidden="true" className="shrink-0 text-wood-accent md:mt-0.5" />
                  <a href={`mailto:${site.email}`} className="text-slate-300 transition-colors hover:text-white">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-4 pt-2 md:pt-0">
                  <MapPin size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-wood-accent md:mt-0" />
                  <span className="text-slate-300">{site.address.full}</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-3 border-t border-white/15 pt-6 md:flex-row md:gap-6 md:pt-10">
          <p className="text-center text-xs text-slate-400 md:text-left md:text-sm">
            © {year} {site.legalName} All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 text-sm text-slate-400">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy &amp; Cookies
            </Link>
            <CookieSettingsButton className="min-h-[44px] underline decoration-dotted underline-offset-4 transition-colors hover:text-white md:min-h-0">
              Cookie settings
            </CookieSettingsButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
