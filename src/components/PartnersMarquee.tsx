const partners = [
  { name: "Wadhwani", color: "oklch(0.55 0.2 255)" },
  { name: "AWS EdStart", color: "oklch(0.85 0.16 90)" },
  { name: "InovAtiva", color: "oklch(0.72 0.18 155)" },
  { name: "Anjos do Brasil", color: "oklch(0.62 0.22 25)" },
  { name: "Parque Tec. Sorocaba", color: "oklch(0.6 0.2 295)" },
  { name: "CriaBiz Ventures", color: "oklch(0.78 0.13 220)" },
  { name: "MCTI", color: "oklch(0.55 0.2 255)" },
  { name: "Arena", color: "oklch(0.62 0.22 25)" },
];

export function PartnersMarquee() {
  const items = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden marquee-mask py-6">
      <div className="flex gap-5 animate-marquee w-max">
        {items.map((p, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white sticker-sm whitespace-nowrap"
            style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />
            <span className="font-mono-display font-bold uppercase text-sm tracking-wider text-[oklch(0.18_0.05_260)]">
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
