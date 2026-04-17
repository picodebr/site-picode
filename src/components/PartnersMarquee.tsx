const partners = [
  "Wadhwani", "AWS EdStart", "InovAtiva", "Anjos do Brasil",
  "Parque Tec. Sorocaba", "CriaBiz Ventures", "MCTI", "Arena",
];

export function PartnersMarquee() {
  const items = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden marquee-mask py-4">
      <div className="flex gap-8 animate-marquee w-max">
        {items.map((p, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-background/70 backdrop-blur whitespace-nowrap"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-mono-display font-semibold uppercase text-xs tracking-[0.16em] text-muted-foreground">
              {p}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
