import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[oklch(0.85_0.16_90)] text-[oklch(0.22_0.08_260)] text-xs font-bold uppercase tracking-wider sticker-sm font-mono-display">
          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.22_0.08_260)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.02] tracking-tight text-foreground italic">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
