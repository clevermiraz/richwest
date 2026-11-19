import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqList } from "@/components/ui/faq-list";
import { faqs } from "@/content/faq";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Flooring Contractor Singapore",
  description:
    "Richwest Integrated is your flooring contractor in Singapore for reliable flooring solutions and professional service. Enquire today for your project!",
  path: "/process",
  keywords:
    "flooring contractor singapore, commercial flooring contractor, wooden floor installation singapore, vinyl flooring installation singapore, wooden deck installation singapore, composite deck installation singapore, carpet floor installation singapore, sports floor installation singapore",
});

const commitments = [
  {
    title: "Quality assurance",
    desc: "Every material is triple-checked for moisture content and grain consistency before it reaches your site.",
  },
  {
    title: "Timely completion",
    desc: "We respect your time. Our project managers ensure strict adherence to timelines without compromising quality.",
  },
  {
    title: "Expert craftsmanship",
    desc: "Our installers undergo regular training in the latest European installation techniques and technologies.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("WebPage", "Work Process - Flooring Contractor Singapore", "/process", {
            about: [
              "wooden floor",
              "vinyl flooring",
              "carpet floor",
              "sports floor",
              "outdoor deck",
              "composite deck",
              "commercial flooring contractor",
            ],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Process", path: "/process" },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Our process" }]}
        kicker="How we work"
        title={
          <>
            The art of <em className="text-timber">precision</em>
          </>
        }
        intro="As a flooring contractor in Singapore, our process ensures consistent results for wooden floor, vinyl flooring, carpet floor, sports floor, and outdoor deck projects, from site survey to handover."
        image="/images/wooden-floor-bedroom.webp"
        caption="Engineered wooden flooring, bedroom"
      />

      <ProcessSteps showLink={false} />

      <section aria-labelledby="commitment-heading" className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">Our commitment</p>
            <h2 id="commitment-heading" className="display-2" data-reveal="">
              What you can <em className="text-timber">hold us to.</em>
            </h2>
          </div>
          <ol className="lg:col-span-8">
            {commitments.map((c, i) => (
              <li
                key={c.title}
                data-reveal=""
                style={{ "--i": i } as CSSProperties}
                className="grid gap-2 border-t border-line py-8 last:border-b sm:grid-cols-[4rem_1fr_1.4fr] sm:gap-6"
              >
                <p className="font-display text-xl text-ink-3 tabular-nums" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-3 text-ink">{c.title}</h3>
                <p className="text-ink-2">{c.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="process-faq-heading" className="border-t border-line bg-paper-2 py-20 md:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="process-faq-heading" className="display-2">
              Before you start
            </h2>
            <Link href="/faq" className="btn btn-outline mt-8">
              All FAQs
              <ArrowRight size={16} aria-hidden="true" className="arrow" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={faqs.slice(0, 4).map((f) => ({ q: f.question, a: f.answer }))} />
          </div>
        </div>
      </section>
    </>
  );
}
