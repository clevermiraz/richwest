import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { faqs } from "@/content/faq";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Flooring FAQs Singapore",
  description:
    "Answers to common questions about flooring and decking in Singapore, including timelines, warranties, and material choices.",
  path: "/faq",
  keywords:
    "flooring faq singapore, vinyl flooring, wooden floor, wooden deck varnish, composite deck, composite timber deck, outdoor deck, sports floor, carpet floor, office carpet tiles singapore, commercial flooring contractor, flooring contractor singapore, poly carbonate roofing shelters",
});

export default function FaqPage() {
  return (
    <div className="pt-(--header-offset)">
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
        title="Frequently Asked Questions"
        intro="Answers to the most common questions our clients ask before starting a project."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((item) => (
              <div
                key={item.question}
                data-reveal=""
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
              >
                <h2 className="mb-3 text-xl font-semibold text-slate-900 md:text-2xl">{item.question}</h2>
                <p className="leading-relaxed text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
