/**
 * Divisor SVG orgânico entre seções.
 * variant: "top" (curva entrando por cima) | "bottom" (curva saindo embaixo)
 */
export function Wave({
  variant = "bottom",
  className = "",
  fill = "var(--background)",
}: {
  variant?: "top" | "bottom";
  className?: string;
  fill?: string;
}) {
  const path =
    variant === "bottom"
      ? "M0,40 C320,120 720,0 1200,80 L1440,40 L1440,120 L0,120 Z"
      : "M0,80 C320,0 720,120 1200,40 L1440,80 L1440,0 L0,0 Z";

  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`block w-full h-[60px] md:h-[100px] ${className}`}
      aria-hidden
    >
      <path d={path} fill={fill} />
    </svg>
  );
}
