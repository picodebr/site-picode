import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

const nav = [
  { to: "/", label: "Início", emoji: "🏠" },
  { to: "/solucoes", label: "Soluções", emoji: "🚀" },
  { to: "/sobre", label: "Sobre", emoji: "✨" },
  { to: "/contato", label: "Contato", emoji: "💬" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Hero escuro só na home antes de scrollar
  const onDarkHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase = onDarkHero
    ? "text-white/85 hover:text-white hover:bg-white/10"
    : "text-foreground/70 hover:text-foreground hover:bg-accent";
  const linkActive = onDarkHero
    ? "text-white bg-white/15"
    : "text-foreground bg-accent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b-2 border-foreground/10 shadow-card"
          : onDarkHero
            ? "bg-transparent"
            : "bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Logo variant={onDarkHero ? "light" : "dark"} />

        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-foreground/[0.04] border border-foreground/5">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-4 py-2 text-sm font-semibold transition-all rounded-full ${linkBase}`}
              activeProps={{ className: `px-4 py-2 text-sm font-semibold rounded-full ${linkActive}` }}
              activeOptions={{ exact: item.to === "/" }}
            >
              <span className="mr-1.5">{item.emoji}</span>{item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="https://hub.picode.com.br/login" target="_blank" rel="noreferrer">
            <Button
              variant="ghost"
              size="sm"
              className={onDarkHero ? "text-white hover:bg-white/10 hover:text-white" : ""}
            >
              Entrar
            </Button>
          </a>
          <Link to="/contato">
            <Button
              size="sm"
              className="rounded-full bg-[oklch(0.85_0.16_90)] text-[oklch(0.22_0.08_260)] hover:bg-[oklch(0.88_0.16_90)] font-bold shadow-[0_4px_0_0_oklch(0.22_0.08_260)] hover:shadow-[0_2px_0_0_oklch(0.22_0.08_260)] hover:translate-y-[2px] transition-all border-2 border-[oklch(0.22_0.08_260)]"
            >
              <Sparkles className="mr-1 h-4 w-4" />
              Vamos brincar
            </Button>
          </Link>
        </div>

        <button
          className={`md:hidden p-2 rounded-xl border-2 ${
            onDarkHero ? "text-white border-white/20 hover:bg-white/10" : "text-foreground border-foreground/10 hover:bg-accent"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-foreground/10 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col p-4 gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-semibold rounded-xl hover:bg-accent"
              >
                <span className="mr-2">{item.emoji}</span>{item.label}
              </Link>
            ))}
            <Link to="/contato" onClick={() => setOpen(false)} className="mt-2">
              <Button className="w-full rounded-full bg-[oklch(0.85_0.16_90)] text-[oklch(0.22_0.08_260)] font-bold border-2 border-[oklch(0.22_0.08_260)]">
                <Sparkles className="mr-1 h-4 w-4" /> Vamos brincar
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
