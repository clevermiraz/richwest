import { posts } from "@/content/posts";
import { propertyPages } from "@/content/property-pages";
import { services } from "@/content/services";
import { absoluteUrl, hoursDisplay, site } from "@/lib/site";

/**
 * /llms.txt: a plain-text summary of the business for AI assistants and
 * answer engines (https://llmstxt.org). Generated from the same content as the
 * site, so it never drifts. Prerendered at build time.
 */
export function GET() {
  const phone = site.phone.display.replace(/ /g, " ");
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.legalName} is a flooring and decking contractor in Singapore, founded in ${site.foundedYear}. ` +
      "It installs wooden floors, vinyl (SPC/LVT), parquet, carpet tiles, sports floors, timber and composite decks, " +
      "and polycarbonate roof shelters for HDB flats, condominiums, landed homes and commercial spaces, using its own in-house team.",
    "",
    "## Contact",
    "",
    `- Phone and WhatsApp: ${phone}`,
    `- Email: ${site.email}`,
    `- Office: ${site.address.full} (visits by appointment)`,
    `- Hours: ${hoursDisplay.map((h) => `${h.label} ${h.value}`).join("; ")}`,
    `- Service area: all of Singapore`,
    `- Free quotation and on-site measurement: ${absoluteUrl("/contact")}`,
    "",
    "## Services",
    "",
    ...services.map((s) => `- [${s.title}](${absoluteUrl(`/services/${s.slug}`)}): ${s.description}`),
    "",
    "## Flooring by home type",
    "",
    ...propertyPages.map((p) => `- [${p.h1}](${absoluteUrl(`/${p.slug}`)}): ${p.intro}`),
    "",
    "## Guides",
    "",
    ...posts.map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.excerpt}`),
    "",
    "## Company",
    "",
    `- [About](${absoluteUrl("/about")})`,
    `- [Our process](${absoluteUrl("/process")})`,
    `- [Projects](${absoluteUrl("/portfolio")})`,
    `- [FAQs](${absoluteUrl("/faq")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
