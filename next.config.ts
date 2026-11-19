import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  {
    // Baseline hardening that keeps pages fully static. A nonce-based script-src
    // would force every page to render per request, which this SEO site avoids.
    key: "Content-Security-Policy",
    value: "base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'; upgrade-insecure-requests",
  },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Every page's metadata is static and already in <head>, so no crawler needs the
  // blocking "HTML-limited bot" render. Serving bots (and Lighthouse) the same
  // cached prerender as visitors keeps TTFB low and the HTML identical.
  htmlLimitedBots: /$^/,
  experimental: {
    // Tailwind output is small, so inlining it removes the only render-blocking request.
    inlineCss: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    deviceSizes: [480, 640, 768, 1024, 1280, 1536, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      // The old site served responsive copies such as /images/r/wooden-floor-hallway-900.webp.
      // Keep those URLs (indexed by Google Images, used in shared links) pointing at the originals.
      {
        source: "/images/r/:name([a-z0-9-]+)-:width(\\d+).:ext(webp|avif)",
        destination: "/images/:name.webp",
        permanent: true,
      },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/favicon.svg", destination: "/icon.svg", permanent: true },
    ];
  },
};

export default nextConfig;
