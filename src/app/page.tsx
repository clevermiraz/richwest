import { ContactSection } from "@/components/sections/contact-section";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeTypes } from "@/components/sections/home-types";
import { LatestPosts } from "@/components/sections/latest-posts";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ServicesIndex } from "@/components/sections/services-index";
import { Testimonials } from "@/components/sections/testimonials";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Flooring Contractor Singapore Since 2003",
  description: site.description,
  path: "/",
  keywords:
    "flooring contractor singapore, commercial flooring contractor, wooden floor, vinyl flooring, carpet floor, sports floor, wooden deck, outdoor deck, composite deck, composite timber deck, wooden deck varnish, balcony decking specialist, office carpet tiles singapore, poly carbonate roofing shelters",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesIndex />
      <HomeTypes className="border-t border-line" />
      <PortfolioGrid />
      <ProcessSteps />
      <Testimonials />
      <LatestPosts />
      <ContactSection />
    </>
  );
}
