import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Brain, Lightbulb, Rocket, Target, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";
import rocketImg from "@/assets/3d-rocket.png";
import robotImg from "@/assets/3d-robot.png";
import bulbImg from "@/assets/3d-bulb.png";
import studentsImg from "@/assets/students-collab.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { SpotlightHero } from "@/components/SpotlightHero";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { PathLines } from "@/components/PathLines";
import { Wave } from "@/components/Wave";
import { DotsField } from "@/components/DotsField";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PiCode Education — Pensamento computacional para toda escola" },
      {
        name: "description",
        content:
          "Plataforma gamificada e kits de robótica para levar o pensamento computacional para a sala de aula. Mais de 9 mil alunos impactados.",
      },
      { property: "og:title", content: "PiCode Education — Pensamento computacional" },
      { property: "og:description", content: "Plataformas e kits que transformam a forma de ensinar tecnologia nas escolas." },
    ],
  }),
  component: HomePage,
});

const pillars = [
  { icon: Code2, title: "Tecnologia", desc: "Ferramenta para ampliar o acesso ao conhecimento." },
  { icon: Sparkles, title: "Criatividade", desc: "Força motriz da inovação e da resolução de problemas." },
  { icon: Rocket, title: "Construção", desc: "Processo contínuo de desenvolvimento e aprendizado." },
  { icon: Lightbulb, title: "Educação", desc: "Base para um futuro mais justo e promissor." },
];

const solutions = [
  { name: "Code Lab", tag: "Plataforma", desc: "Ambiente para organizar projetos, turmas e trilhas em um só lugar.", icon: Code2 },
  { name: "Vision Lab", tag: "IA & Visão", desc: "Projetos com visão computacional e inteligência artificial em sala.", icon: Brain },
  { name: "Estoque Maker", tag: "Hardware", desc: "Gestão dos kits didáticos da escola com controle por turma.", icon: Target },
  { name: "Trilhas BNCC", tag: "Conteúdo", desc: "Currículo de pensamento computacional alinhado à Base Nacional.", icon: Award },
];

const competencias = [
  { title: "Raciocínio lógico", desc: "Decompor problemas e estruturar soluções passo a passo." },
  { title: "Pensamento crítico", desc: "Avaliar caminhos, depurar erros e iterar com clareza." },
  { title: "Colaboração", desc: "Construir em time, dividir responsabilidades e revisar ideias." },
  { title: "Criatividade", desc: "Inventar soluções inéditas para desafios do mundo real." },
];

const stats = [
  { value: "9mil+", label: "alunos impactados" },
  { value: "200+", label: "professores formados" },
  { value: "93%", label: "acham que robótica facilita matemática" },
  { value: "4", label: "estados em expansão" },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background pb-12 md:pb-16">
        <DotsField />
        <div className="absolute top-[5%] right-[-8%] h-[520px] w-[520px] rounded-full blur-3xl animate-drift" style={{ background: "oklch(0.7 0.2 245 / 0.14)" }} />
        <div className="absolute bottom-[-10%] left-[-10%] h-[460px] w-[460px] rounded-full blur-3xl animate-drift-reverse" style={{ background: "oklch(0.55 0.2 255 / 0.10)" }} />

        <SpotlightHero className="relative min-h-[100svh]">

          <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-3 py-1.5 font-mono-display text-[11px] font-semibold uppercase tracking-[0.18em] text-primary"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                EdTech para escolas
              </motion.span>

              <div className="relative mt-6 flex gap-5">
                <span
                  aria-hidden
                  className="brand-bar mt-3 hidden h-[180px] w-[6px] shrink-0 rounded-full sm:block lg:h-[220px]"
                />
                <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.65 }} className="block">
                    Pensamento
                  </motion.span>
                  <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.65 }} className="block text-gradient-blue">
                    computacional
                  </motion.span>
                  <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.65 }} className="block">
                    para toda escola.
                  </motion.span>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                A PiCode Education leva <strong className="text-foreground">robótica, programação e pensamento computacional</strong> para
                dentro da sala de aula — com plataforma gamificada, kits maker e trilhas alinhadas à BNCC.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link to="/contato">
                  <Button size="lg" className="btn-ink h-12 rounded-full px-7 text-sm font-semibold">
                    Agendar demonstração <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/solucoes">
                  <Button size="lg" variant="ghost" className="btn-soft h-12 rounded-full px-7 text-sm font-semibold">
                    Conhecer soluções
                  </Button>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.82 }} className="mt-12 flex items-center gap-8">
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">+9mil</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">alunos impactados</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">+200</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">professores formados</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">4</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">estados</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative px-6 py-8 lg:px-8"
            >
              <div className="absolute inset-8 -z-10 blob-shape bg-gradient-blue opacity-25 blur-3xl animate-pulse-soft" />

              <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card shadow-elegant blob-shape animate-blob lg:aspect-square">
                <img
                  src={heroImg}
                  alt="Estudante usando a plataforma PiCode em um tablet"
                  className="h-full w-full scale-110 object-cover"
                  width={1536}
                  height={1280}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>

              <img src={rocketImg} alt="" aria-hidden className="pointer-events-none absolute left-1 top-4 hidden h-20 w-20 drop-shadow-2xl animate-float md:block" loading="lazy" />
              <img src={bulbImg} alt="" aria-hidden className="pointer-events-none absolute bottom-4 right-4 h-16 w-16 drop-shadow-2xl animate-float-slow" loading="lazy" />
              <img src={robotImg} alt="" aria-hidden className="pointer-events-none absolute right-2 top-[42%] hidden h-20 w-20 drop-shadow-2xl animate-float lg:block" loading="lazy" />

              <div className="absolute bottom-16 left-2 hidden items-center gap-3 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-card md:flex">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-blue">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold leading-none text-foreground">93%</p>
                  <p className="mt-1 text-[10px] text-muted-foreground">aprovam matemática</p>
                </div>
              </div>
            </motion.div>
          </div>
        </SpotlightHero>

        {/* Degradê suave + curva orgânica que fundem o hero na próxima seção, sem faixa visível */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-56 md:h-72"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, oklch(0.96 0.015 255 / 0.55) 60%, oklch(0.96 0.015 255) 100%)",
          }}
        />
        <svg
          aria-hidden
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-[-1px] block h-20 w-full md:h-28"
        >
          <path
            d="M0,40 C360,110 1080,110 1440,40 L1440,120 L0,120 Z"
            fill="oklch(0.96 0.015 255)"
          />
        </svg>
      </section>

      <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
        <div className="absolute left-[-8%] top-[15%] h-[420px] w-[420px] blob-shape-2 blur-3xl animate-drift" style={{ background: "oklch(0.7 0.2 245 / 0.12)" }} />
        <div className="absolute bottom-[10%] right-[-10%] h-[360px] w-[360px] blob-shape-3 blur-3xl animate-drift-reverse" style={{ background: "oklch(0.78 0.13 220 / 0.14)" }} />

        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Nossos pilares"
            title={<>Quatro forças que <span className="text-gradient-blue">movem a marca</span></>}
            description="Tecnologia, criatividade, construção e educação. Uma base que orienta cada produto, conteúdo e experiência da PiCode."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/85 p-7 shadow-card transition-all hover:border-primary/30 hover:shadow-elegant"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 blob-shape bg-gradient-blue opacity-10 transition-opacity duration-500 group-hover:opacity-20" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center blob-soft bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* pillars (secondary) -> solutions (background): wave preenchida com a cor da próxima seção */}
      <Wave variant="bottom" baseFill="oklch(0.96 0.015 255)" fill="oklch(0.995 0.003 260)" />

      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        
        <div className="absolute left-[45%] top-[40%] h-[260px] w-[260px] blob-shape-3 opacity-50 blur-3xl animate-pulse-soft" style={{ background: "oklch(0.78 0.13 220 / 0.14)" }} />

        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Plataforma PiCode"
            title={<>Um <span className="text-gradient-blue">ecossistema</span> completo para a escola</>}
            description="Tudo que professor, aluno e gestor precisam para ensinar pensamento computacional, em uma única plataforma moderna."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative rounded-[2rem] border border-border bg-card/92 p-2 shadow-card transition-all hover:border-primary/30 hover:shadow-elegant"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden blob-soft bg-gradient-blue">
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute inset-6 blob-shape bg-white/15 blur-xl" />
                  <s.icon className="relative h-16 w-16 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-white/15 px-2.5 py-1 font-mono-display text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                    {s.tag}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground">{s.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* solutions e competencies compartilham bg-background — sem onda */}

      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="absolute -left-20 top-1/3 h-[300px] w-[300px] blob-shape-3 blur-3xl animate-drift" style={{ background: "oklch(0.6 0.2 295 / 0.10)" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 blob-shape bg-gradient-blue opacity-20 blur-2xl" />
            <div className="relative aspect-[4/3] overflow-hidden border border-border shadow-elegant blob-shape-2">
              <img
                src={studentsImg}
                alt="Alunos colaborando em projeto de robótica"
                className="h-full w-full scale-110 object-cover"
                loading="lazy"
                width={1280}
                height={896}
              />
            </div>
            <img src={robotImg} alt="" aria-hidden className="absolute -bottom-6 right-0 hidden h-32 w-32 drop-shadow-2xl md:block" loading="lazy" />
          </motion.div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Pensamento Computacional"
              title={<>Habilidades para <span className="text-gradient-blue">o século 21</span></>}
              description="Mais do que programar: ensinar a pensar de forma estruturada para resolver qualquer problema, dentro e fora da tecnologia."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {competencias.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 font-mono-display text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="mt-4 font-display text-base font-bold tracking-tight text-foreground">{c.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-center font-mono-display text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Reconhecida e apoiada por
          </p>
          <PartnersMarquee />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[oklch(0.13_0.04_260)] py-24 text-white">
        <div className="absolute inset-0 bg-hero opacity-60" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute left-[20%] top-[-20%] h-[500px] w-[500px] rounded-full blur-3xl" style={{ background: "oklch(0.55 0.25 260 / 0.42)" }} />
        <PathLines className="opacity-50" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center lg:text-left"
            >
              <p className="font-display text-5xl font-bold text-gradient-blue md:text-6xl">{s.value}</p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl"
          >
            "65% das crianças vão trabalhar em <span className="text-gradient-blue">profissões que ainda não existem</span>."
          </motion.blockquote>
          <p className="mt-4 font-mono-display text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            World Economic Forum
          </p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="relative mt-12 overflow-hidden rounded-[2.5rem] bg-gradient-blue p-10 text-white shadow-glow md:p-14"
          >
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute -right-20 -top-20 h-60 w-60 blob-shape bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 blob-shape bg-white/10 blur-2xl" />
            <div className="relative">
              <h3 className="font-display text-3xl font-bold leading-[1.05] md:text-4xl">
                Sua escola está pronta <br /> para o futuro?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-white/85">
                Receba uma proposta personalizada e descubra como a PiCode pode transformar a forma de ensinar tecnologia.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contato">
                  <Button size="lg" className="h-12 rounded-full bg-white px-7 text-sm font-semibold text-primary hover:bg-white/90">
                    Agendar demonstração <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/solucoes">
                  <Button size="lg" variant="outline" className="h-12 rounded-full border-white/40 bg-transparent px-7 text-sm font-semibold text-white hover:bg-white/10 hover:text-white">
                    Falar com especialista
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
