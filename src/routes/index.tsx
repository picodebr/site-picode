import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Code2, Brain, Users, Lightbulb, Rocket, Target, TrendingUp, Award } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import rocketImg from "@/assets/3d-rocket.png";
import robotImg from "@/assets/3d-robot.png";
import bulbImg from "@/assets/3d-bulb.png";
import studentsImg from "@/assets/students-collab.jpg";
import { PathLines } from "@/components/PathLines";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { SpotlightHero } from "@/components/SpotlightHero";
import { Wave } from "@/components/Wave";
import { PartnersMarquee } from "@/components/PartnersMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PiCode Education — Pensamento Computacional para escolas" },
      {
        name: "description",
        content:
          "Plataforma gamificada e kits de robótica para levar o pensamento computacional para a sala de aula. Mais de 9 mil alunos impactados.",
      },
      { property: "og:title", content: "PiCode Education — Pensamento Computacional" },
      { property: "og:description", content: "Plataforma e kits que transformam a forma de ensinar tecnologia nas escolas." },
    ],
  }),
  component: HomePage,
});

const pillars = [
  { icon: Code2, title: "Tecnologia", desc: "Ferramenta para ampliar acesso ao conhecimento.", gradient: "bg-gradient-blue" },
  { icon: Sparkles, title: "Criatividade", desc: "Força motriz da inovação e da resolução de problemas.", gradient: "bg-gradient-green" },
  { icon: Rocket, title: "Construção", desc: "Processo contínuo de desenvolvimento e aprendizado.", gradient: "bg-gradient-red" },
  { icon: Lightbulb, title: "Educação", desc: "Base para um futuro mais justo e promissor.", gradient: "bg-gradient-yellow" },
];

const solutions = [
  { name: "Code Lab", tag: "Plataforma", desc: "Ambiente para organizar projetos, turmas e trilhas de programação em um só lugar.", gradient: "bg-gradient-blue", icon: Code2 },
  { name: "Vision Lab", tag: "IA & Visão", desc: "Experimente projetos com visão computacional e inteligência artificial em sala.", gradient: "bg-gradient-purple", icon: Brain },
  { name: "Estoque Maker", tag: "Hardware", desc: "Gestão completa dos kits didáticos da escola com controle por turma.", gradient: "bg-gradient-green", icon: Target },
  { name: "Trilhas BNCC", tag: "Conteúdo", desc: "Currículo de pensamento computacional alinhado à Base Nacional Comum.", gradient: "bg-gradient-red", icon: Award },
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
  { value: "93%", label: "dizem que robótica facilita matemática" },
  { value: "4", label: "estados em expansão" },
];

function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yRocket = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yBulb = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden bg-[oklch(0.13_0.04_260)] text-white">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 noise" />

        {/* Blobs orgânicos animados */}
        <div className="glow-orb animate-float-slow" style={{ width: 500, height: 500, top: "-10%", left: "-10%", background: "oklch(0.55 0.25 260)" }} />
        <div className="glow-orb animate-float-slow" style={{ width: 400, height: 400, bottom: "-15%", right: "-5%", background: "oklch(0.6 0.22 295)", animationDelay: "4s" }} />
        <div className="glow-orb animate-float-slow" style={{ width: 350, height: 350, top: "30%", right: "20%", background: "oklch(0.78 0.13 220)", animationDelay: "8s", opacity: 0.35 }} />

        <PathLines />

        <SpotlightHero className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center min-h-[100svh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ opacity: heroFade }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-xs font-semibold uppercase tracking-wider text-white/90"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.13_220)] animate-pulse" />
              EdTech para escolas
            </motion.span>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.92] tracking-tight">
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
              className="mt-6 max-w-xl text-base md:text-lg text-white/70 leading-relaxed"
            >
              A PiCode Education traz <strong className="text-white">soluções tecnológicas para as escolas</strong>:
              kits didáticos de robótica, plataformas gamificadas e trilhas alinhadas à BNCC.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/contato">
                <Button size="lg" className="bg-gradient-blue text-white shadow-glow hover:opacity-90 hover:scale-105 transition-transform h-12 px-6">
                  Agendar uma demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/solucoes">
                <Button size="lg" variant="outline" className="h-12 px-6 bg-white/5 backdrop-blur border-white/20 text-white hover:bg-white/10 hover:text-white hover:scale-105 transition-transform">
                  Conhecer soluções
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              className="mt-10 flex items-center gap-6 text-xs text-white/60"
            >
              <div>
                <p className="font-display text-2xl font-bold text-white">+9mil</p>
                <p>alunos impactados</p>
              </div>
              <div className="h-10 w-px bg-white/15" />
              <div>
                <p className="font-display text-2xl font-bold text-white">+200</p>
                <p>professores formados</p>
              </div>
              <div className="h-10 w-px bg-white/15" />
              <div>
                <p className="font-display text-2xl font-bold text-white">4</p>
                <p>estados</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Blob orgânico atrás da imagem */}
            <div className="absolute inset-0 -z-10 blob-shape animate-blob bg-gradient-to-br from-[oklch(0.5_0.22_260)] to-[oklch(0.55_0.2_295)] opacity-60 blur-3xl" />

            <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden shadow-glow border border-white/10 blob-shape animate-blob">
              <img
                src={heroImg}
                alt="Estudante usando a plataforma PiCode em um tablet"
                className="h-full w-full object-cover scale-110"
                width={1536}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.04_260)] via-transparent to-transparent" />
            </div>

            <motion.img
              src={rocketImg}
              alt=""
              aria-hidden
              style={{ y: yRocket }}
              className="absolute -top-8 -left-8 h-28 w-28 animate-float drop-shadow-2xl"
              loading="lazy"
            />
            <motion.img
              src={bulbImg}
              alt=""
              aria-hidden
              style={{ y: yBulb }}
              className="absolute -bottom-6 -right-6 h-24 w-24 animate-float drop-shadow-2xl"
              loading="lazy"
            />

            {/* Card flutuante estilo "métrica" */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -left-4 bottom-12 hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-green flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">93%</p>
                <p className="text-[10px] text-white/70">aprovam matemática</p>
              </div>
            </motion.div>
          </motion.div>
        </SpotlightHero>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0]">
          <Wave variant="bottom" fill="var(--background)" />
        </div>
      </section>

      {/* PILARES */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="glow-orb animate-float-slow" style={{ width: 400, height: 400, top: "10%", right: "-10%", background: "oklch(0.78 0.13 220)", opacity: 0.2 }} />

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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl border border-border bg-card p-6 shadow-card tilt-card hover:shadow-elegant"
              >
                <div className={`absolute -top-3 -right-3 h-20 w-20 ${p.gradient} blob-shape animate-blob opacity-30 blur-xl`} />
                <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl ${p.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÕES — estilo Hub */}
      <section className="relative py-24 md:py-32 bg-[oklch(0.97_0.01_260)] dark:bg-secondary overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="glow-orb animate-float-slow" style={{ width: 500, height: 500, top: "-10%", left: "-10%", background: "oklch(0.6 0.2 295)", opacity: 0.18 }} />
        <div className="glow-orb animate-float-slow" style={{ width: 450, height: 450, bottom: "-10%", right: "-10%", background: "oklch(0.72 0.18 155)", opacity: 0.15, animationDelay: "5s" }} />

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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-3xl bg-card border border-border p-2 shadow-card tilt-card hover:shadow-elegant"
              >
                <div className={`relative h-44 rounded-2xl ${s.gradient} overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute -inset-4 opacity-30 blob-shape animate-blob bg-white/30 blur-xl" />
                  <s.icon className="relative h-16 w-16 text-white/95 drop-shadow-lg group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/20 backdrop-blur text-[10px] font-semibold text-white uppercase tracking-wider">
                    {s.tag}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold tracking-tight">{s.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETÊNCIAS */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="glow-orb animate-float-slow" style={{ width: 500, height: 500, top: "20%", left: "-15%", background: "oklch(0.62 0.22 25)", opacity: 0.12 }} />

        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 blob-shape animate-blob bg-gradient-to-br from-[oklch(0.55_0.2_255)] to-[oklch(0.78_0.13_220)] opacity-30 blur-2xl" />
            <div className="relative aspect-[4/3] overflow-hidden shadow-elegant blob-shape animate-blob">
              <img
                src={studentsImg}
                alt="Alunos colaborando em projeto de robótica"
                className="h-full w-full object-cover scale-110"
                loading="lazy"
                width={1280}
                height={896}
              />
            </div>
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

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {competencias.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl border border-border bg-card p-5 hover:border-primary hover:-translate-y-1 transition-all"
                >
                  <h4 className="font-display font-bold uppercase text-sm tracking-wide group-hover:text-primary transition-colors">{c.title}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARCEIROS — marquee */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-6">
            Reconhecida e apoiada por
          </p>
          <PartnersMarquee />
        </div>
      </section>

      {/* ESTATÍSTICAS */}
      <section className="relative py-24 bg-[oklch(0.13_0.04_260)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-60" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="glow-orb animate-float-slow" style={{ width: 500, height: 500, top: "-20%", left: "20%", background: "oklch(0.55 0.25 260)" }} />
        <PathLines className="opacity-60" />

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
              <p className="font-display text-5xl md:text-6xl font-bold text-gradient-blue tag-bracket">{s.value}</p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QUOTE / CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="glow-orb animate-float-slow" style={{ width: 500, height: 500, top: "10%", right: "-10%", background: "oklch(0.6 0.2 295)", opacity: 0.15 }} />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TrendingUp className="mx-auto h-12 w-12 text-primary" />
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-3xl md:text-5xl font-bold uppercase leading-[1.05] tracking-tight"
          >
            "65% das crianças vão trabalhar em <span className="text-gradient-blue">profissões que ainda não existem</span>."
          </motion.blockquote>
          <p className="mt-4 text-sm uppercase tracking-wider text-muted-foreground font-semibold">
            — World Economic Forum
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
              <h3 className="font-display text-3xl md:text-4xl font-bold uppercase">
                Sua escola está pronta <br /> para o futuro?
              </h3>
              <p className="mt-4 text-white/85 max-w-xl mx-auto">
                Receba uma proposta personalizada e descubra como a PiCode pode transformar a forma de ensinar tecnologia.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contato">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform h-12 px-6">
                    Agendar demonstração <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/solucoes">
                  <Button size="lg" variant="outline" className="h-12 px-6 bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white hover:scale-105 transition-transform">
                    <Users className="mr-2 h-4 w-4" /> Falar com especialista
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
