import { PropertyPageView } from "@/components/sections/property-page";
import { getPropertyPage } from "@/content/property-pages";
import { buildMetadata } from "@/lib/seo";

const page = getPropertyPage("landed-house-flooring")!;

export const metadata = buildMetadata({
  title: page.seoTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  ogImage: page.heroImage,
});

export default function Page() {
  return <PropertyPageView page={page} />;
}
