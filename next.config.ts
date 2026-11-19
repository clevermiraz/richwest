import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  reactStrictMode: true,
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
