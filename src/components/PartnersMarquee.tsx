const partners = [
  "Wadhwani", "AWS EdStart", "InovAtiva", "Anjos do Brasil",
  "Parque Tec. Sorocaba", "CriaBiz Ventures", "MCTI", "Arena",
];

export function PartnersMarquee() {
  const items = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden marquee-mask py-6">
      <div className="flex gap-12 animate-marquee w-max">
        {items.map((p, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card/60 backdrop-blur whitespace-nowrap"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-blue" />
            <span className="font-display font-semibold uppercase text-sm tracking-wider text-muted-foreground">
              {p}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
