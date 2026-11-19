import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqList } from "@/components/ui/faq-list";
import { WhatsAppIcon } from "@/components/ui/icons";
import { faqs } from "@/content/faq";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Flooring & Decking FAQs Singapore",
  description:
    "Answers to common questions about flooring and decking in Singapore, including timelines, warranties, and material choices.",
  path: "/faq",
  keywords:
    "flooring faq singapore, vinyl flooring, wooden floor, wooden deck varnish, composite deck, composite timber deck, outdoor deck, sports floor, carpet floor, office carpet tiles singapore, commercial flooring contractor, flooring contractor singapore, poly carbonate roofing shelters",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "FAQs" }]}
        kicker={`${faqs.length} common questions`}
        title="Frequently Asked Questions"
        intro="Answers to the most common questions our clients ask before starting a project."
      />

      <section aria-label="Questions and answers" className="py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <FaqList items={faqs.map((f) => ({ q: f.question, a: f.answer }))} headingLevel="h2" />
          </div>
          <aside className="lg:col-span-3 lg:col-start-10" aria-label="Still have a question?">
            <div className="rounded-xl border border-line bg-white p-6 lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
              <p className="display-3 text-[1.625rem] text-ink">Still have a question?</p>
              <p className="mt-2 text-[0.9375rem] text-ink-2">Ask us directly. {site.replyPromise}.</p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                data-section="faq_aside"
                className="btn btn-wa mt-5 w-full"
              >
                <WhatsAppIcon size={18} />
                WhatsApp us
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <Link href="/contact" className="btn btn-outline mt-3 w-full">
                Contact form
                <ArrowRight size={16} aria-hidden="true" className="arrow" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
