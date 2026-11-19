export function Logo({ variant = "dark", className }: { variant?: "dark" | "light"; className?: string }) {
  const text = variant === "light" ? "#ffffff" : "#8b451c";
  const middle = variant === "light" ? "#e8a06a" : "#8b451c";
  return (
    <svg
      viewBox="0 0 420 80"
      width={420}
      height={80}
      className={className}
      role="img"
      aria-label="Richwest Integrated Pte Ltd"
    >
      <rect x="12" y="6" width="56" height="20" rx="10" fill="#d2ab78" />
      <rect x="12" y="30" width="56" height="20" rx="10" fill={middle} />
      <rect x="12" y="54" width="56" height="20" rx="10" fill="#f8f5d6" />
      <text
        x="100"
        y="52"
        fill={text}
        fontFamily='Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif'
        fontSize="36"
        fontWeight="900"
        letterSpacing="4"
      >
        RICHWEST
      </text>
    </svg>
  );
}
