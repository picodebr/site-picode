import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PathLines } from "@/components/PathLines";
import { DotsField } from "@/components/DotsField";
import { SpotlightHero } from "@/components/SpotlightHero";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — PiCode Education" },
      { name: "description", content: "Fale com a PiCode Education. Receba uma proposta personalizada para sua escola e descubra como começar." },
      { property: "og:title", content: "Fale com a PiCode" },
      { property: "og:description", content: "Solicite uma proposta personalizada para sua escola." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-background text-foreground">
        <DotsField />
        <div className="absolute top-[5%] right-[-8%] h-[520px] w-[520px] rounded-full blur-3xl animate-drift" style={{ background: "oklch(0.7 0.2 245 / 0.14)" }} />
        <div className="absolute bottom-[-10%] left-[-10%] h-[460px] w-[460px] rounded-full blur-3xl animate-drift-reverse" style={{ background: "oklch(0.55 0.2 255 / 0.10)" }} />
        <SpotlightHero className="relative">
          <PathLines className="opacity-40" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-32 sm:pt-40 pb-16 sm:pb-20 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/15 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono-display">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Fale conosco
            </span>
            <h1 className="mt-6 font-display text-[2.25rem] sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Vamos transformar <span className="text-gradient-blue">sua escola juntos</span>
            </h1>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Conte um pouco sobre sua escola e vamos preparar uma proposta personalizada para você.
            </p>
          </div>
        </SpotlightHero>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_80%_-10%,oklch(0.9_0.06_240/0.35),transparent_60%),radial-gradient(50rem_35rem_at_-10%_110%,oklch(0.92_0.05_220/0.30),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <aside className="lg:col-span-2 lg:sticky lg:top-28 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/15 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono-display">
                Contato direto
              </span>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Outras formas <span className="text-gradient-blue">de falar com a gente</span>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Prefere algo mais rápido? Estamos disponíveis nos canais abaixo.
              </p>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card/40 backdrop-blur-xl divide-y divide-border/60 overflow-hidden shadow-card">
              <a
                href="https://www.wa.link/zmkrcm"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-4 p-5 hover:bg-primary/[0.04] transition-colors"
              >
                <span aria-hidden className="absolute left-0 top-0 h-full w-0.5 bg-gradient-blue scale-y-0 group-hover:scale-y-100 origin-top transition-transform" />
                <div className="h-10 w-10 rounded-lg bg-[#25D366]/10 text-[#1faa55] flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground font-mono-display">WhatsApp</p>
                  <p className="font-semibold text-[15px] mt-0.5 truncate">Conversar agora</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="mailto:contato@picode.com.br"
                className="group relative flex items-center gap-4 p-5 hover:bg-primary/[0.04] transition-colors"
              >
                <span aria-hidden className="absolute left-0 top-0 h-full w-0.5 bg-gradient-blue scale-y-0 group-hover:scale-y-100 origin-top transition-transform" />
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground font-mono-display">E-mail</p>
                  <p className="font-semibold text-[15px] mt-0.5 truncate">contato@picode.com.br</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>

              <div className="relative flex items-center gap-4 p-5">
                <div className="h-10 w-10 rounded-lg bg-foreground/5 text-foreground/70 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground font-mono-display">Sede</p>
                  <p className="font-semibold text-[15px] mt-0.5">Votorantim, SP — Brasil</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="relative rounded-2xl md:rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-5 sm:p-8 md:p-10 shadow-elegant">
              <div aria-hidden className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-40 -z-10 blur-xl" />
              {sent ? (
                <div className="py-20 text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight">Mensagem enviada!</h3>
                  <p className="mt-2 text-muted-foreground">Em breve nosso time entra em contato.</p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/15 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono-display">
                      Formulário
                    </span>
                    <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold tracking-tight">
                      Conte sobre sua escola
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Resposta personalizada em até 1 dia útil.
                    </p>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nome</Label>
                        <Input id="name" required placeholder="Seu nome completo" className="mt-2 h-11 bg-background/60" />
                      </div>
                      <div>
                        <Label htmlFor="role" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cargo</Label>
                        <Input id="role" placeholder="Diretor, coordenador..." className="mt-2 h-11 bg-background/60" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">E-mail</Label>
                        <Input id="email" type="email" required placeholder="voce@escola.com.br" className="mt-2 h-11 bg-background/60" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Telefone</Label>
                        <Input id="phone" placeholder="(11) 90000-0000" className="mt-2 h-11 bg-background/60" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="school" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Escola</Label>
                      <Input id="school" required placeholder="Nome da instituição" className="mt-2 h-11 bg-background/60" />
                    </div>
                    <div>
                      <Label htmlFor="msg" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Como podemos ajudar?</Label>
                      <Textarea id="msg" rows={5} placeholder="Conte um pouco sobre o seu projeto, número de alunos, séries..." className="mt-2 bg-background/60 resize-none" />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-blue text-white shadow-glow h-12 rounded-xl font-semibold">
                      Enviar mensagem <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-[11px] text-center text-muted-foreground">
                      Ao enviar, você concorda em receber um retorno do nosso time comercial.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
