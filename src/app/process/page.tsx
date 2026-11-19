import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Icon } from "@/components/ui/icons";
import { reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import type { IconName } from "@/content/types";
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

const commitments: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "ShieldCheck",
    title: "Quality Assurance",
    desc: "Every material is triple-checked for moisture content and grain consistency before it reaches your site.",
  },
  {
    icon: "Clock",
    title: "Timely Completion",
    desc: "We respect your time. Our project managers ensure strict adherence to timelines without compromising quality.",
  },
  {
    icon: "Award",
    title: "Expert Craftsmanship",
    desc: "Our installers undergo regular training in the latest European installation techniques and technologies.",
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-(--header-offset)">
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
        wide
        className="bg-slate-950 py-32"
        image="/images/wooden-floor-bedroom.webp"
        title="The Art of Precision"
        intro="As a flooring contractor in Singapore, our process ensures consistent results for wooden floor, vinyl flooring, carpet floor, sports floor, and outdoor deck projects, from site survey to handover."
        introClassName="text-2xl leading-relaxed font-medium text-white/75"
      />

      <ProcessSteps />

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <h2 className="sr-only">Our Commitment</h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {commitments.map((c, i) => (
              <div key={c.title} {...reveal(i)} className="rounded-6xl border border-slate-100 bg-white p-12 shadow-sm">
                <div className="mb-8">
                  <Icon name={c.icon} size={40} className="text-wood-ink" />
                </div>
                <h3 className="mb-4 text-2xl font-black text-slate-900">{c.title}</h3>
                <p className="text-lg leading-relaxed font-medium text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
