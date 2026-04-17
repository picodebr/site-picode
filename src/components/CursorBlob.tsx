import { useEffect, useRef, useState } from "react";

/**
 * Blob colorido que segue o cursor com leve atraso, inspirado em antigravity.google.
 * Renderiza globalmente, fixo na viewport. Some em telas touch / reduced motion.
 */
export function CursorBlob() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)");
    if (mq.matches) return;
    setEnabled(true);

    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    current.current = { ...target.current };

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const tick = () => {
      const el = ref.current;
      if (el) {
        // easing simples (lerp)
        current.current.x += (target.current.x - current.current.x) * 0.12;
        current.current.y += (target.current.y - current.current.y) * 0.12;
        el.style.transform = `translate3d(${current.current.x - 240}px, ${current.current.y - 240}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[480px] w-[480px] will-change-transform"
      style={{
        background:
          "conic-gradient(from 120deg, oklch(0.78 0.18 25 / 0.55), oklch(0.85 0.16 90 / 0.55), oklch(0.72 0.18 155 / 0.55), oklch(0.7 0.2 245 / 0.6), oklch(0.6 0.2 295 / 0.55), oklch(0.78 0.18 25 / 0.55))",
        filter: "blur(90px)",
        opacity: 0.5,
        mixBlendMode: "multiply",
      }}
    />
  );
}
