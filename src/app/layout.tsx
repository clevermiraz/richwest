import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import { Analytics, consentDefaultsScript } from "@/components/analytics/analytics";
import { ConsentBanner } from "@/components/consent/consent-banner";
import { ContactShortcuts } from "@/components/layout/contact-shortcuts";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/seo/json-ld";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

/** Every page is content-only, so require the whole route to prerender. */
export const ensureStatic = "navigation";

/** Functional text: a warm, slightly narrow grotesk (variable, one file). */
const grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk",
});

/** Display headlines. The italic is only used for emphasis, so it is not preloaded. */
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Flooring Contractor Singapore Since 2003 | ${site.shortName}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.legalName,
  category: "Home and construction",
  formatDetection: { telephone: false, email: false, address: false },
  verification: { google: site.googleSiteVerification },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  other: {
    "geo.region": "SG",
    "geo.placename": "Singapore",
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-SG" className={`${grotesk.variable} ${serif.variable}`}>
      <head>
        {/* Consent Mode v2 defaults must be set before any Google tag loads. */}
        <script id="consent-defaults" dangerouslySetInnerHTML={{ __html: consentDefaultsScript }} />
        {/* Tags load after interaction, so a DNS lookup is enough; a preconnect would go unused. */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <div className="flex min-h-svh flex-col">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="grow">
            {children}
          </main>
          <Footer />
          <ContactShortcuts />
          <ConsentBanner />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
