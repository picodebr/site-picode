import { useRef, type ReactNode } from "react";

/**
 * Wrapper que cria um "spotlight" seguindo o cursor do mouse.
 * Usado no hero para um efeito orgânico e premium.
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
            "radial-gradient(600px circle at var(--mx) var(--my), oklch(0.7 0.2 245 / 0.18), transparent 60%)",
        }}
        aria-hidden
      />
      {children}
    </div>
  );
}
