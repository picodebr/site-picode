import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Brain, Lightbulb, Rocket, Target, Award, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yRocket = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yBulb = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yRobot = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <>
      {/* HERO — claro, sóbrio, tecnológico */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden bg-background">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        {/* Glows azuis suaves */}
        <motion.div
          className="absolute top-[5%] right-[-8%] h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: "oklch(0.7 0.2 245 / 0.25)" }}
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-10%] h-[460px] w-[460px] rounded-full blur-3xl"
          style={{ background: "oklch(0.55 0.2 255 / 0.18)" }}
          animate={{ y: [0, -20, 0], x: [0, 25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <PathLines className="opacity-40" />

        <SpotlightHero className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center min-h-[100svh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-[0.18em] font-mono-display border border-primary/15"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              EdTech para escolas
            </motion.span>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight text-foreground">
              <motion.span
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
                className="block"
              >
                Pensamento
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}
                className="block text-gradient-blue"
              >
                computacional
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
                className="block"
              >
                para toda escola.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              A PiCode Education leva <strong className="text-foreground">robótica, programação e pensamento computacional</strong> para
              dentro da sala de aula — com plataforma gamificada, kits maker e trilhas alinhadas à BNCC.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/contato">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-7 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
                >
                  Agendar demonstração <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/solucoes">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-7 text-sm font-semibold border-foreground/15 hover:bg-accent"
                >
                  Conhecer soluções
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              className="mt-12 flex items-center gap-8"
            >
              <div>
                <p className="font-display text-2xl font-bold text-foreground">+9mil</p>
                <p className="text-xs text-muted-foreground mt-0.5">alunos impactados</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-display text-2xl font-bold text-foreground">+200</p>
                <p className="text-xs text-muted-foreground mt-0.5">professores formados</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-display text-2xl font-bold text-foreground">4</p>
                <p className="text-xs text-muted-foreground mt-0.5">estados</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative px-8 py-10"
          >
            {/* Glow azul atrás */}
            <div className="absolute inset-6 -z-10 blob-shape animate-blob bg-gradient-blue opacity-30 blur-3xl" />

            <motion.div
              className="relative aspect-[4/5] lg:aspect-square overflow-hidden blob-shape animate-blob border border-border shadow-elegant bg-card"
              animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={heroImg}
                alt="Estudante usando a plataforma PiCode em um tablet"
                className="h-full w-full object-cover scale-110"
                width={1536}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </motion.div>

            <motion.img
              src={rocketImg}
              alt=""
              aria-hidden
              style={{ y: yRocket }}
              className="absolute top-0 left-0 h-24 w-24 animate-float drop-shadow-2xl pointer-events-none"
              loading="lazy"
            />
            <motion.img
              src={bulbImg}
              alt=""
              aria-hidden
              style={{ y: yBulb }}
              className="absolute bottom-2 right-2 h-20 w-20 animate-float drop-shadow-2xl pointer-events-none"
              loading="lazy"
            />
            <motion.img
              src={robotImg}
              alt=""
              aria-hidden
              style={{ y: yRobot }}
              className="absolute top-[42%] right-0 h-20 w-20 animate-float drop-shadow-2xl pointer-events-none hidden lg:block"
              loading="lazy"
            />

            {/* Card flutuante */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute left-2 bottom-16 hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-card"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-blue flex items-center justify-center shrink-0">
                <Target className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-sm leading-none">93%</p>
                <p className="text-[10px] text-muted-foreground mt-1">aprovam matemática</p>
              </div>
            </motion.div>
          </motion.div>
        </SpotlightHero>
      </section>

      {/* PILARES */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        {/* Blobs orgânicos de fundo */}
        <motion.div
          className="absolute top-[15%] left-[-8%] h-[420px] w-[420px] blob-shape-2 blur-3xl"
          style={{ background: "oklch(0.7 0.2 245 / 0.18)" }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[-10%] h-[360px] w-[360px] blob-shape-3 blur-3xl"
          style={{ background: "oklch(0.78 0.13 220 / 0.22)" }}
          animate={{ scale: [1, 0.9, 1], rotate: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl border border-border bg-card/80 backdrop-blur p-7 shadow-card hover:shadow-elegant hover:border-primary/30 transition-all overflow-hidden"
              >
                {/* Blob decorativo no canto */}
                <div className="absolute -top-8 -right-8 h-28 w-28 blob-shape animate-blob bg-gradient-blue opacity-10 group-hover:opacity-25 transition-opacity duration-700" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center blob-soft bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-secondary">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Blobs orgânicos animados */}
        <motion.div
          className="absolute top-[-12%] right-[-12%] h-[440px] w-[440px] blob-shape animate-blob blur-3xl"
          style={{ background: "oklch(0.7 0.2 245 / 0.25)" }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-8%] left-[-12%] h-[400px] w-[400px] blob-shape-2 animate-blob blur-3xl"
          style={{ background: "oklch(0.6 0.2 295 / 0.18)" }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute top-[40%] left-[45%] h-[260px] w-[260px] blob-shape-3 blur-3xl opacity-50"
          style={{ background: "oklch(0.78 0.13 220 / 0.25)" }}
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative rounded-[2rem] bg-card/90 backdrop-blur border border-border p-2 shadow-card hover:shadow-elegant hover:border-primary/30 transition-all"
              >
                <div className="relative h-44 blob-soft bg-gradient-blue overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <motion.div
                    className="absolute -inset-4 opacity-40 blob-shape bg-white/30 blur-xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <s.icon className="relative h-16 w-16 text-white drop-shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-[10px] font-semibold text-white uppercase tracking-wider font-mono-display border border-white/20">
                    {s.tag}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground">{s.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETÊNCIAS */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 blob-shape animate-blob bg-gradient-blue opacity-30 blur-2xl" />
            <motion.div
              className="relative aspect-[4/3] overflow-hidden blob-shape-2 animate-blob border border-border shadow-elegant"
              animate={{ rotate: [0, -1.5, 0, 1.5, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={studentsImg}
                alt="Alunos colaborando em projeto de robótica"
                className="h-full w-full object-cover scale-110"
                loading="lazy"
                width={1280}
                height={896}
              />
            </motion.div>
            <motion.img
              src={robotImg}
              alt=""
              aria-hidden
              className="absolute -bottom-10 -right-10 h-44 w-44 animate-float drop-shadow-2xl"
              loading="lazy"
              whileHover={{ scale: 1.1, rotate: 8 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Pensamento Computacional"
              title={<>Habilidades para <span className="text-gradient-blue">o século 21</span></>}
              description="Mais do que programar: ensinar a pensar de forma estruturada para resolver qualquer problema, dentro e fora da tecnologia."
            />

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {competencias.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                >
                  <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono-display font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="mt-4 font-display font-bold text-base tracking-tight text-foreground">{c.title}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARCEIROS */}
      <section className="py-12 border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-semibold font-mono-display mb-6">
            Reconhecida e apoiada por
          </p>
          <PartnersMarquee />
        </div>
      </section>

      {/* ESTATÍSTICAS — fundo navy */}
      <section className="relative py-24 overflow-hidden bg-[oklch(0.13_0.04_260)] text-white">
        <div className="absolute inset-0 bg-hero opacity-60" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <motion.div
          className="absolute top-[-20%] left-[20%] h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: "oklch(0.55 0.25 260 / 0.55)" }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <PathLines className="opacity-50" />

        <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center lg:text-left"
            >
              <p className="font-display text-5xl md:text-6xl font-bold text-gradient-blue">{s.value}</p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight text-foreground"
          >
            "65% das crianças vão trabalhar em <span className="text-gradient-blue">profissões que ainda não existem</span>."
          </motion.blockquote>
          <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-semibold font-mono-display">
            World Economic Forum
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 rounded-[2.5rem] bg-gradient-blue p-10 md:p-14 text-white shadow-glow relative overflow-hidden"
          >
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute -top-20 -right-20 h-60 w-60 blob-shape animate-blob bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 blob-shape animate-blob bg-white/10 blur-2xl" style={{ animationDelay: "5s" }} />
            <div className="relative">
              <h3 className="font-display text-3xl md:text-4xl font-bold leading-[1.05]">
                Sua escola está pronta <br /> para o futuro?
              </h3>
              <p className="mt-4 text-white/85 max-w-xl mx-auto">
                Receba uma proposta personalizada e descubra como a PiCode pode transformar a forma de ensinar tecnologia.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contato">
                  <Button
                    size="lg"
                    className="rounded-full h-12 px-7 text-sm font-semibold bg-white text-primary hover:bg-white/90"
                  >
                    Agendar demonstração <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/solucoes">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-12 px-7 text-sm font-semibold bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
                  >
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
