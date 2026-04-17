/**
 * Divisor SVG simples e contínuo entre seções.
 * IMPORTANTE: use o MESMO `fill` da cor da próxima seção para que não apareça
 * uma "linha" ou faixa de cor diferente entre os blocos.
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
  // Curva única, suave; "bottom" desce da seção atual e "top" sobe da próxima.
  const path =
    variant === "bottom"
      ? "M0,0 C360,90 1080,90 1440,0 L1440,120 L0,120 Z"
      : "M0,120 C360,30 1080,30 1440,120 L1440,0 L0,0 Z";

  return (
    <div
      className={`pointer-events-none block w-full ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined, lineHeight: 0 }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[90px]"
      >
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}
