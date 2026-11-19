/** Richwest mark: three stacked boards and the wordmark. */
export function Logo({ variant = "dark", className }: { variant?: "dark" | "light"; className?: string }) {
  const light = variant === "light";
  return (
    <svg viewBox="0 0 420 80" width={420} height={80} className={className} aria-hidden="true" focusable="false">
      <rect x="12" y="6" width="56" height="20" rx="10" fill="#c9a57c" />
      <rect x="12" y="30" width="56" height="20" rx="10" fill={light ? "#e0a46a" : "#9a5418"} />
      <rect x="12" y="54" width="56" height="20" rx="10" fill={light ? "#f6f2ec" : "#1c1917"} />
      <text
        x="96"
        y="53"
        fill={light ? "#f6f2ec" : "#1c1917"}
        fontFamily='var(--font-grotesk), ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif'
        fontSize="36"
        fontWeight="800"
        letterSpacing="5"
      >
        RICHWEST
      </text>
    </svg>
  );
}
