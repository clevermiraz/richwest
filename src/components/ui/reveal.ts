import type { CSSProperties } from "react";

/**
 * Props for a CSS scroll-reveal (see `[data-reveal]` in globals.css).
 * `index` staggers items in a grid.
 */
export function reveal(index = 0, variant: "up" | "left" | "right" | "scale" = "up") {
  return {
    "data-reveal": variant === "up" ? "" : variant,
    style: { "--i": index } as CSSProperties,
  };
}
