import { useRef, type ReactNode } from "react";

/**
 * Wrapper que cria um "spotlight" seguindo o cursor do mouse.
 * Usa máscara radial para fundir o efeito nas extremidades sem bordas duras.
 */
export function SpotlightHero({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const fadeMask =
    "radial-gradient(ellipse 75% 70% at center, #000 35%, transparent 100%)";

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`relative ${className}`}
      style={{
        // @ts-expect-error css var
        "--mx": "50%",
        "--my": "50%",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(700px circle at var(--mx) var(--my), oklch(0.7 0.2 245 / 0.16), transparent 70%)",
          maskImage: fadeMask,
          WebkitMaskImage: fadeMask,
        }}
        aria-hidden
      />
      {children}
    </div>
  );
}
