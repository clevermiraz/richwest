import { Icon } from "@/components/ui/icons";
import { PageHero } from "@/components/sections/page-hero";
import { reveal } from "@/components/ui/reveal";
import { SiteImage } from "@/components/ui/site-image";
import { JsonLd } from "@/components/seo/json-ld";
import type { IconName } from "@/content/types";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Richwest Integrated, a flooring contractor in Singapore for wooden floors, vinyl, carpet, sports floors, and outdoor decking.",
  path: "/about",
  keywords:
    "flooring contractor singapore, commercial flooring contractor, wooden floor, vinyl flooring, carpet floor, sports floor, wooden deck, composite deck, balcony decking specialist",
});

const values: { icon: IconName; title: string; desc: string }[] = [
  { icon: "Shield", title: "Integrity", desc: "Honest advice and transparent pricing for every client." },
  { icon: "Award", title: "Quality", desc: "Sourcing premium materials that stand the test of time." },
  { icon: "Users", title: "Customer First", desc: "Dedicated support from consultation to after-sales." },
  { icon: "Target", title: "Precision", desc: "Meticulous installation by our in-house master craftsmen." },
];

export default function AboutPage() {
  return (
    <div className="pt-(--header-offset)">
      <JsonLd
        data={[
          webPageSchema("AboutPage", "About Richwest Integrated", "/about", {
            mainEntity: {
              "@type": "Organization",
              "@id": absoluteUrl("/#business"),
              name: site.name,
              url: absoluteUrl("/"),
            },
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <PageHero
        image="/images/wooden-floor-corridor.webp"
        title={
          <>
            Crafting Excellence Since <span className="text-wood-light">{site.foundedYear}</span>
          </>
        }
        intro="Richwest Integrated (Pte.) Ltd. is a flooring contractor in Singapore for wooden floor, vinyl flooring, carpet floor, sports floor, outdoor deck, and composite deck projects."
        introClassName="text-xl leading-relaxed text-white/70"
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div {...reveal(0, "left")}>
              <h2 className="heading-section mb-8 text-slate-900">Our Journey</h2>
              <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                <p>
                  Founded with a passion for woodworking and a commitment to quality, Richwest Integrated has grown from
                  a small carpentry workshop into a full-scale integrated flooring solution provider.
                </p>
                <p>
                  Over the past two decades, we have successfully delivered over 1,000 projects across Singapore,
                  ranging from luxury residential bungalows to large-scale commercial developments.
                </p>
                <p>
                  Our philosophy is simple: we treat every floor as a canvas and every project as a legacy. We source
                  only the finest materials and employ master craftsmen who share our dedication to perfection.
                </p>
              </div>
            </div>
            <div className="relative" {...reveal(0, "scale")}>
              <SiteImage
                src="/images/wooden-floor-hallway.webp"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full rounded-6xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 hidden rounded-4xl bg-wood-accent p-10 text-white md:block">
                <div className="mb-2 text-4xl font-bold">20+</div>
                <div className="text-sm font-bold tracking-widest uppercase">Years of Mastery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="heading-section text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                {...reveal(i)}
                className="group rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-wood-accent/10 text-wood-ink transition-colors group-hover:bg-wood-accent group-hover:text-white">
                  <Icon name={v.icon} size={32} />
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900">{v.title}</h3>
                <p className="leading-relaxed text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
