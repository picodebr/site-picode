import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PathLines } from "@/components/PathLines";

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
      <section className="relative pt-40 pb-16 bg-[oklch(0.13_0.04_260)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <PathLines />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-xs font-semibold uppercase tracking-wider">
            Fale conosco
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95]">
            Vamos transformar <br /><span className="text-gradient-blue">sua escola juntos</span>
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto leading-relaxed">
            Conte um pouco sobre sua escola e vamos preparar uma proposta personalizada para você.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-display text-2xl font-bold uppercase">Outras formas de falar</h2>
            <a href="https://www.wa.link/zmkrcm" target="_blank" rel="noreferrer" className="flex items-start gap-4 rounded-2xl border border-border p-5 hover:border-primary transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-green text-white flex items-center justify-center shrink-0">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-muted-foreground">Resposta em horário comercial</p>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border p-5">
              <div className="h-12 w-12 rounded-xl bg-gradient-blue text-white flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">E-mail</p>
                <p className="text-sm text-muted-foreground">contato@picode.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border p-5">
              <div className="h-12 w-12 rounded-xl bg-gradient-red text-white flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">Sede</p>
                <p className="text-sm text-muted-foreground">Sorocaba, SP — Brasil</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
              {sent ? (
                <div className="py-16 text-center">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
                  <h3 className="mt-4 font-display text-2xl font-bold uppercase">Mensagem enviada!</h3>
                  <p className="mt-2 text-muted-foreground">Em breve nosso time entra em contato.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" required className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="role">Cargo</Label>
                      <Input id="role" placeholder="Diretor, coordenador..." className="mt-1.5" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" required className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" className="mt-1.5" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="school">Escola</Label>
                    <Input id="school" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="msg">Como podemos ajudar?</Label>
                    <Textarea id="msg" rows={4} className="mt-1.5" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-blue text-white shadow-glow h-12">
                    Enviar mensagem <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
