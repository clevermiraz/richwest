import { CookieSettingsButton } from "@/components/consent/cookie-settings-button";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { cookieTable, privacyLastUpdated } from "@/content/privacy";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy & Cookie Notice",
  description:
    "How Richwest Integrated collects and uses personal data, the cookies this website sets, and how to change your cookie choices or exercise your rights under Singapore’s PDPA.",
  path: "/privacy",
});

const linkClass = "font-semibold text-timber underline decoration-1 underline-offset-4";

function PolicySection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12" aria-labelledby={id}>
      <h2 id={id} className="display-3 mb-4 text-ink">
        {title}
      </h2>
      <div className="space-y-4 leading-relaxed text-ink-2">{children}</div>
    </section>
  );
}

const Email = () => (
  <a href={`mailto:${site.email}`} className={linkClass}>
    {site.email}
  </a>
);

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy & Cookies", path: "/privacy" },
        ])}
      />

      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Privacy & Cookies" }]}
        kicker={`Last updated ${privacyLastUpdated}`}
        title="Privacy & Cookie Notice"
        intro="What we collect, why, who we share it with, and how to change your choices under Singapore’s PDPA."
      />

      <div className="container-page max-w-[60rem] py-16 md:py-20">
        <PolicySection id="who-we-are" title="Who we are">
          <p>
            This website is operated by Richwest Integrated (Pte.) Ltd, {site.address.full}. If you have a question
            about this notice or about your personal data, email us at <Email /> or call{" "}
            <a href={`tel:${site.phone.e164}`} className={linkClass}>
              {site.phone.display}
            </a>
            .
          </p>
        </PolicySection>

        <PolicySection id="dpo" title="Data Protection Officer">
          <p>
            As required by section 11 of the PDPA, we have appointed a Data Protection Officer who is responsible for
            how we handle personal data. You can reach them at <Email /> or by post at {site.address.full}, marked for
            the attention of the Data Protection Officer.
          </p>
        </PolicySection>

        <PolicySection id="what-we-collect" title="What we collect and why">
          <p>
            <strong className="text-ink">When you send an enquiry.</strong> Our contact form asks for your name, phone
            number, email address, the service you are interested in, and an optional message. We use this only to
            respond to your enquiry, prepare a quotation and arrange a site visit. We do not sell it, and we do not use
            it for marketing unless you ask us to.
          </p>
          <p>
            <strong className="text-ink">When you browse.</strong> With your consent we record which pages you view and
            which buttons you use, along with a randomly generated visitor identifier. This tells us which services
            people are looking for so we can improve the site. It is not linked to your name unless you also send an
            enquiry.
          </p>
          <p>
            <strong className="text-ink">When you contact us on WhatsApp.</strong> Our WhatsApp buttons open a
            conversation with our business number. That conversation is handled by WhatsApp under its own terms and
            privacy policy.
          </p>
        </PolicySection>

        <PolicySection id="cookies" title="Cookies and similar technologies">
          <p>
            Cookies and browser storage are small pieces of data saved by your browser. Strictly necessary items are
            always active because the site cannot work without them.
          </p>
          <p>
            Analytics and advertising cookies are switched on by default, and we tell you about them the first time you
            visit. This follows the PDPC&apos;s guidance that an individual may indicate consent through their browser
            settings once the purpose has been notified. You can switch them off at any time using the button below, and
            doing so also deletes the identifiers already stored.
          </p>
          <p>
            If you are visiting from the United Kingdom, the European Economic Area or Switzerland, nothing beyond the
            strictly necessary items is set until you actively agree.
          </p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-line bg-white">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Cookies and browser storage used on this website</caption>
              <thead className="bg-paper-2 text-ink">
                <tr>
                  {["Name", "Set by", "Purpose", "Category", "Kept for"].map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {cookieTable.map((row) => (
                  <tr key={row.name} className="align-top">
                    <th scope="row" className="px-4 py-4 font-mono text-xs font-semibold text-ink">
                      {row.name}
                    </th>
                    <td className="px-4 py-4 text-ink-2">{row.provider}</td>
                    <td className="px-4 py-4 text-ink-2">{row.purpose}</td>
                    <td className="px-4 py-4 text-ink-2">{row.category}</td>
                    <td className="px-4 py-4 text-ink-2">{row.retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6">
            <CookieSettingsButton className="btn btn-ink">Change your cookie choices</CookieSettingsButton>
          </p>
        </PolicySection>

        <PolicySection id="third-parties" title="Who else is involved">
          <p>We use a small number of service providers to run this site and measure our advertising:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-ink">Google</strong> (Analytics 4, Tag Manager and Ads) for usage statistics and
              ad measurement. Google acts as an independent controller for advertising data.
            </li>
            <li>
              <strong className="text-ink">Meta Platforms</strong> for measuring our Facebook and Instagram advertising.
              The Meta Pixel is only loaded if you accept advertising cookies.
            </li>
            <li>
              <strong className="text-ink">Supabase</strong> for storing enquiries and site usage records.
            </li>
            <li>
              <strong className="text-ink">Vercel</strong> for website hosting. Its servers process your IP address in
              order to deliver the page.
            </li>
            <li>
              <strong className="text-ink">Google Maps</strong> for the map on our contact page. Loading it sends your
              IP address to Google. Our typeface is served from our own domain.
            </li>
          </ul>
          <p>
            Some of these providers are located outside Singapore. Where that happens we rely on their contractual
            commitments to provide a standard of protection comparable to the PDPA.
          </p>
        </PolicySection>

        <PolicySection id="retention" title="How long we keep things">
          <p>
            We keep enquiry details for as long as we need them to respond, to carry out any work you engage us for, and
            to meet our legal, tax and warranty obligations. Cookie and analytics data is kept for the periods shown in
            the table above. When data is no longer needed we delete it or anonymise it.
          </p>
        </PolicySection>

        <PolicySection id="marketing-contact" title="Calls and messages">
          <p>
            We use the phone number you give us to reply to your enquiry and to arrange your project. We do not add you
            to a marketing list from an enquiry alone. If we ever want to send you promotional calls or messages we will
            ask you separately, and we check Singapore&apos;s Do Not Call Registry before doing so.
          </p>
        </PolicySection>

        <PolicySection id="your-rights" title="Your rights">
          <p>
            Under Singapore&apos;s Personal Data Protection Act you may ask us for a copy of the personal data we hold
            about you, ask us to correct it if it is wrong, and withdraw any consent you have given. You can also ask us
            to delete data we no longer need to keep.
          </p>
          <p>
            To make a request, email <Email />. We will respond within 30 days. If you are unhappy with our response you
            may contact the Personal Data Protection Commission of Singapore.
          </p>
          <p>
            If you are in the United Kingdom or the European Economic Area, you also have rights of access,
            rectification, erasure, restriction, portability and objection, and you may complain to your local data
            protection authority.
          </p>
        </PolicySection>

        <PolicySection id="changes" title="Changes to this notice">
          <p>
            We will update this page when our practices change and will revise the date at the top. If we add a new
            category of cookie we will ask for your consent again.
          </p>
        </PolicySection>
      </div>
    </>
  );
}
