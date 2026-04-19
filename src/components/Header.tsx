import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

const nav = [
  { to: "/", label: "Início" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Logo variant="dark" />

        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-foreground/[0.04] border border-foreground/5">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full"
              activeProps={{
                className:
                  "px-4 py-1.5 text-sm font-medium rounded-full bg-background text-foreground shadow-sm",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="https://hub.picode.com.br" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="sm" className="font-medium">
              Entrar
            </Button>
          </a>
          <Link to="/contato">
            <Button
              size="sm"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-5 shadow-glow"
            >
              Fale conosco
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-accent"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col p-4 gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contato" onClick={() => setOpen(false)} className="mt-2">
              <Button className="w-full rounded-full bg-primary text-primary-foreground font-medium">
                Fale conosco
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
