import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const fg = variant === "light" ? "text-white" : "text-[oklch(0.22_0.08_260)]";
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="relative h-10 w-10 rounded-xl bg-gradient-blue shadow-glow flex items-center justify-center transition-transform group-hover:rotate-6">
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white">
          <path d="M12 2L8 8h3v6h2V8h3l-4-6z" fill="currentColor" />
          <path d="M9 16h6l-1 4-2 2-2-2-1-4z" fill="currentColor" opacity="0.9" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display font-bold text-xl tracking-tight ${fg}`}>
          PiCode
        </span>
        <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${variant === "light" ? "text-white/70" : "text-muted-foreground"}`}>
          Education
        </span>
      </div>
    </Link>
  );
}
