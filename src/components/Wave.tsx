/**
 * Divisor SVG orgânico entre seções, com duas curvas sobrepostas.
 * variant: "top" (curva entrando por cima) | "bottom" (curva saindo embaixo)
 */
export function Wave({
  variant = "bottom",
  className = "",
  fill = "var(--background)",
  flip = false,
}: {
  variant?: "top" | "bottom";
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  const path =
    variant === "bottom"
      ? "M0,40 C240,110 520,0 760,55 C1000,110 1240,20 1440,70 L1440,120 L0,120 Z"
      : "M0,80 C240,10 520,120 760,65 C1000,10 1240,100 1440,50 L1440,0 L0,0 Z";

  const accentPath =
    variant === "bottom"
      ? "M0,70 C300,30 620,100 900,60 C1140,30 1300,90 1440,55 L1440,120 L0,120 Z"
      : "M0,50 C300,90 620,20 900,60 C1140,90 1300,30 1440,65 L1440,0 L0,0 Z";

  return (
    <div
      className={`pointer-events-none w-full ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[110px]"
      >
        <path d={accentPath} fill={fill} opacity="0.45" />
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}
