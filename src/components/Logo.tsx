import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const fg = variant === "light" ? "text-white" : "text-[oklch(0.22_0.08_260)]";
  const sub = variant === "light" ? "text-white/70" : "text-muted-foreground";
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="relative h-10 w-10 rounded-2xl bg-[oklch(0.85_0.16_90)] sticker-sm flex items-center justify-center transition-transform group-hover:rotate-[-8deg] group-hover:scale-110">
        <span className="font-display italic font-black text-[oklch(0.22_0.08_260)] text-xl leading-none">π</span>
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[oklch(0.62_0.22_25)] border-2 border-[oklch(0.18_0.05_260)]" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display italic font-bold text-2xl tracking-tight ${fg}`}>
          PiCode
        </span>
        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase font-mono-display ${sub}`}>
          Education
        </span>
      </div>
    </Link>
  );
}
