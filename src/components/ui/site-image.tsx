import Image from "next/image";
import { images, type ImageKey } from "@/content/images";

interface SiteImageProps {
  /** Path such as "/images/wooden-floor-hallway.webp". */
  src: string;
  alt?: string;
  /** Used when the image has no descriptive alt in the manifest. */
  altFallback?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Fill the nearest positioned parent instead of using intrinsic size. */
  fill?: boolean;
}

const keyFromSrc = (src: string) =>
  src.replace(/^.*\/images\//, "").replace(/\.(webp|jpe?g|png|avif)$/i, "") as ImageKey;

/**
 * next/image wrapper that pulls dimensions and descriptive alt text from the
 * image manifest, so every image gets width/height (no CLS) and good alt text.
 */
export function SiteImage({
  src,
  alt,
  altFallback = "",
  sizes = "100vw",
  priority = false,
  className,
  fill = false,
}: SiteImageProps) {
  const meta = images[keyFromSrc(src)] as (typeof images)[ImageKey] | undefined;
  const resolvedAlt = alt ?? (meta?.alt || altFallback);
  // Above-the-fold (LCP) images load eagerly with high fetch priority.
  const loading = priority ? ({ loading: "eager", fetchPriority: "high" } as const) : ({ loading: "lazy" } as const);

  if (fill || !meta) {
    return <Image src={src} alt={resolvedAlt} fill sizes={sizes} className={className} {...loading} />;
  }

  return (
    <Image
      src={src}
      alt={resolvedAlt}
      width={meta.width}
      height={meta.height}
      sizes={sizes}
      className={className}
      {...loading}
    />
  );
}
