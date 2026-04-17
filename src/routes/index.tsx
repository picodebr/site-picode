import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Code2, Brain, Lightbulb, Rocket, Target, Award, Star, Heart, Zap } from "lucide-react";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PiCode Education — Pensamento computacional pra toda escola" },
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
  { icon: Code2, title: "Tecnologia", desc: "Ferramenta para ampliar o acesso ao conhecimento.", color: "oklch(0.55 0.2 255)", emoji: "💻" },
  { icon: Sparkles, title: "Criatividade", desc: "Força motriz da inovação e da resolução de problemas.", color: "oklch(0.72 0.18 155)", emoji: "🌱" },
  { icon: Rocket, title: "Construção", desc: "Processo contínuo de desenvolvimento e aprendizado.", color: "oklch(0.62 0.22 25)", emoji: "🧱" },
  { icon: Lightbulb, title: "Educação", desc: "Base para um futuro mais justo e promissor.", color: "oklch(0.85 0.16 90)", emoji: "📚" },
];

const solutions = [
  { name: "Code Lab", tag: "Plataforma", desc: "Ambiente para organizar projetos, turmas e trilhas em um lugar só.", color: "oklch(0.55 0.2 255)", icon: Code2, rotate: -2 },
  { name: "Vision Lab", tag: "IA & Visão", desc: "Projetos com visão computacional e inteligência artificial em sala.", color: "oklch(0.6 0.2 295)", icon: Brain, rotate: 2 },
  { name: "Estoque Maker", tag: "Hardware", desc: "Gestão dos kits didáticos da escola com controle por turma.", color: "oklch(0.72 0.18 155)", icon: Target, rotate: -2 },
  { name: "Trilhas BNCC", tag: "Conteúdo", desc: "Currículo de pensamento computacional alinhado à Base Nacional.", color: "oklch(0.62 0.22 25)", icon: Award, rotate: 2 },
];

const competencias = [
  { title: "Raciocínio lógico", desc: "Decompor problemas e estruturar soluções passo a passo.", emoji: "🧩" },
  { title: "Pensamento crítico", desc: "Avaliar caminhos, depurar erros e iterar com clareza.", emoji: "🔍" },
  { title: "Colaboração", desc: "Construir em time, dividir responsabilidades e revisar ideias.", emoji: "🤝" },
  { title: "Criatividade", desc: "Inventar soluções inéditas para desafios do mundo real.", emoji: "🎨" },
];

const stats = [
  { value: "9mil+", label: "alunos impactados", color: "oklch(0.55 0.2 255)" },
  { value: "200+", label: "professores formados", color: "oklch(0.72 0.18 155)" },
  { value: "93%", label: "dizem que robótica facilita matemática", color: "oklch(0.62 0.22 25)" },
  { value: "4", label: "estados em expansão", color: "oklch(0.85 0.16 90)" },
];

function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yRocket = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yBulb = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yRobot = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <>
      {/* HERO — fundo creme, vibe playful */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] overflow-hidden"
        style={{ backgroundColor: "oklch(0.97 0.025 90)" }}
      >
        <div className="absolute inset-0 dots-pattern opacity-70" />

        {/* Splashes coloridos */}
        <motion.div
          className="absolute top-[8%] left-[6%] h-40 w-40 rounded-full blur-2xl"
          style={{ background: "oklch(0.85 0.16 90 / 0.6)" }}
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[20%] right-[8%] h-56 w-56 rounded-full blur-3xl"
          style={{ background: "oklch(0.72 0.18 155 / 0.5)" }}
          animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[20%] h-48 w-48 rounded-full blur-3xl"
          style={{ background: "oklch(0.62 0.22 25 / 0.45)" }}
          animate={{ y: [0, 25, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Estrelas / sparkles flutuando */}
        <motion.div
          className="absolute top-[18%] left-[40%] text-[oklch(0.62_0.22_25)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <Star className="h-6 w-6 fill-current" />
        </motion.div>
        <motion.div
          className="absolute bottom-[24%] right-[14%] text-[oklch(0.55_0.2_255)]"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="h-7 w-7" />
        </motion.div>

        <SpotlightHero className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center min-h-[100svh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -3, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.85_0.16_90)] text-[oklch(0.22_0.08_260)] text-xs font-bold uppercase tracking-wider sticker-sm font-mono-display"
            >
              <Zap className="h-3.5 w-3.5 fill-current" />
              EdTech feita pra escola
            </motion.span>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight italic text-[oklch(0.18_0.05_260)]">
              <motion.span
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
                className="block"
              >
                Pensamento
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}
                className="block"
              >
                <span className="squiggle">computacional</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
                className="block"
              >
                pra toda <span className="text-[oklch(0.62_0.22_25)]">escola</span>.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="mt-6 max-w-xl text-base md:text-lg text-[oklch(0.18_0.05_260)]/75 leading-relaxed"
            >
              A gente leva <strong className="text-[oklch(0.18_0.05_260)]">robótica, programação e criatividade</strong> para
              dentro da sala de aula — com plataforma gamificada, kits maker e trilhas BNCC. ✨
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/contato">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-7 text-base font-bold bg-[oklch(0.62_0.22_25)] text-white hover:bg-[oklch(0.65_0.22_25)] sticker hover:rotate-[-2deg]"
                >
                  Agendar uma demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/solucoes">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-7 text-base font-bold bg-white text-[oklch(0.18_0.05_260)] border-2 border-[oklch(0.18_0.05_260)] hover:bg-[oklch(0.85_0.16_90)] hover:text-[oklch(0.18_0.05_260)] sticker hover:rotate-[2deg]"
                >
                  Conhecer soluções
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {["oklch(0.55 0.2 255)", "oklch(0.72 0.18 155)", "oklch(0.62 0.22 25)", "oklch(0.85 0.16 90)"].map((c, i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-white flex items-center justify-center text-sm"
                    style={{ background: c }}
                  >
                    {["🤖", "🧠", "🚀", "💡"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[oklch(0.85_0.16_90)]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-xs text-[oklch(0.18_0.05_260)]/70 font-semibold mt-0.5">+9mil alunos & 200 professores</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Card principal estilo polaroid girado */}
            <motion.div
              className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2.5rem] sticker"
              style={{ rotate: -3, background: "white" }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <img
                src={heroImg}
                alt="Estudante usando a plataforma PiCode"
                className="h-full w-full object-cover"
                width={1536}
                height={1280}
              />
              {/* Sticker superior */}
              <motion.div
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[oklch(0.62_0.22_25)] text-white text-xs font-bold uppercase tracking-wider sticker-sm rotate-6"
                animate={{ rotate: [6, -2, 6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Made for kids ✨
              </motion.div>
            </motion.div>

            <motion.img
              src={rocketImg}
              alt=""
              aria-hidden
              style={{ y: yRocket }}
              className="absolute -top-10 -left-10 h-32 w-32 animate-bounce-soft drop-shadow-2xl"
              loading="lazy"
            />
            <motion.img
              src={bulbImg}
              alt=""
              aria-hidden
              style={{ y: yBulb }}
              className="absolute -bottom-8 -right-8 h-28 w-28 animate-wiggle drop-shadow-2xl"
              loading="lazy"
            />
            <motion.img
              src={robotImg}
              alt=""
              aria-hidden
              style={{ y: yRobot }}
              className="absolute top-[40%] -right-12 h-24 w-24 animate-float drop-shadow-2xl hidden lg:block"
              loading="lazy"
            />

            {/* Card flutuante "métrica" — sticker */}
            <motion.div
              initial={{ opacity: 0, x: -20, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
              className="absolute -left-6 bottom-10 hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white sticker"
            >
              <div className="h-10 w-10 rounded-xl bg-[oklch(0.72_0.18_155)] flex items-center justify-center text-xl">
                🎯
              </div>
              <div>
                <p className="font-display italic font-bold text-[oklch(0.18_0.05_260)] text-base leading-none">93%</p>
                <p className="text-[10px] text-[oklch(0.18_0.05_260)]/70 font-semibold mt-1">aprovam matemática</p>
              </div>
            </motion.div>
          </motion.div>
        </SpotlightHero>
      </section>

      {/* PILARES */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Nossos pilares"
            title={<>Quatro forças que <em className="text-[oklch(0.62_0.22_25)] not-italic">movem a marca</em></>}
            description="Tecnologia, criatividade, construção e educação. Uma base que orienta cada produto, conteúdo e experiência da PiCode."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
                whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl bg-white p-6 sticker"
              >
                <div
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl sticker-sm"
                  style={{ background: p.color }}
                >
                  {p.emoji}
                </div>
                <h3 className="mt-5 font-display italic text-2xl font-bold tracking-tight text-[oklch(0.18_0.05_260)]">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <p.icon className="absolute top-6 right-6 h-5 w-5 text-[oklch(0.18_0.05_260)]/30 group-hover:text-[oklch(0.18_0.05_260)]/60 transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ backgroundColor: "oklch(0.96 0.04 200)" }}
      >
        <div className="absolute inset-0 dots-pattern opacity-50" />

        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Plataforma PiCode"
            title={<>Um <em className="text-[oklch(0.55_0.2_255)] not-italic">ecossistema</em> pra escola inteira</>}
            description="Tudo que professor, aluno e gestor precisam pra ensinar pensamento computacional, num só lugar."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, rotate: s.rotate }}
                whileHover={{ rotate: 0, y: -8 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-3xl bg-white p-3 sticker"
              >
                <div
                  className="relative h-44 rounded-2xl overflow-hidden flex items-center justify-center sticker-sm"
                  style={{ background: s.color }}
                >
                  <div className="absolute inset-0 dots-pattern opacity-30" />
                  <s.icon className="relative h-16 w-16 text-white drop-shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white text-[10px] font-bold text-[oklch(0.18_0.05_260)] uppercase tracking-wider sticker-sm">
                    {s.tag}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display italic text-xl font-bold tracking-tight text-[oklch(0.18_0.05_260)]">{s.name}</h3>
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
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] sticker"
              style={{ rotate: -2, background: "white" }}
              whileHover={{ rotate: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <img
                src={studentsImg}
                alt="Alunos colaborando em projeto de robótica"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1280}
                height={896}
              />
            </motion.div>
            <motion.img
              src={robotImg}
              alt=""
              aria-hidden
              className="absolute -bottom-10 -right-10 h-44 w-44 animate-bounce-soft drop-shadow-2xl"
              loading="lazy"
              whileHover={{ scale: 1.15, rotate: 12 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <motion.div
              className="absolute -top-6 -left-6 h-20 w-20 starburst flex items-center justify-center text-white font-bold font-display italic text-sm"
              style={{ background: "oklch(0.85 0.16 90)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-[oklch(0.18_0.05_260)]">novo!</span>
            </motion.div>
          </motion.div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Pensamento Computacional"
              title={<>Habilidades para <em className="text-[oklch(0.72_0.18_155)] not-italic">o século 21</em></>}
              description="Mais do que programar: ensinar a pensar de forma estruturada para resolver qualquer problema, dentro e fora da tecnologia."
            />

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {competencias.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
                  whileHover={{ rotate: 0, y: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl bg-white p-5 sticker-sm"
                >
                  <div className="text-3xl mb-2">{c.emoji}</div>
                  <h4 className="font-display italic font-bold text-lg tracking-tight text-[oklch(0.18_0.05_260)]">{c.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARCEIROS */}
      <section className="py-12 border-y-2 border-foreground/10" style={{ background: "oklch(0.97 0.025 90)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-[oklch(0.18_0.05_260)]/60 font-bold font-mono-display mb-6">
            ✦ Reconhecida e apoiada por ✦
          </p>
          <PartnersMarquee />
        </div>
      </section>

      {/* ESTATÍSTICAS — playful */}
      <section className="relative py-24 overflow-hidden bg-background">
        <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -3 : 3 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl p-6 text-center sticker"
              style={{ background: s.color }}
            >
              <p className="font-display italic text-5xl md:text-6xl font-bold text-white drop-shadow">{s.value}</p>
              <p className="mt-2 text-sm text-white/95 font-semibold">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QUOTE / CTA final */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "oklch(0.97 0.025 90)" }}>
        <div className="absolute inset-0 dots-pattern opacity-50" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-3xl sticker-sm"
            style={{ background: "oklch(0.85 0.16 90)" }}
          >
            💭
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display italic text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[oklch(0.18_0.05_260)]"
          >
            "65% das crianças vão trabalhar em <span className="squiggle">profissões que ainda não existem</span>."
          </motion.blockquote>
          <p className="mt-4 text-sm uppercase tracking-wider text-muted-foreground font-bold font-mono-display">
            — World Economic Forum
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden sticker"
            style={{ background: "oklch(0.55 0.2 255)" }}
          >
            <div className="absolute inset-0 dots-pattern opacity-20" />
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full" style={{ background: "oklch(0.85 0.16 90 / 0.4)" }} />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full" style={{ background: "oklch(0.62 0.22 25 / 0.4)" }} />
            <div className="relative">
              <div className="flex justify-center mb-4">
                <Heart className="h-8 w-8 fill-[oklch(0.62_0.22_25)] text-[oklch(0.62_0.22_25)] animate-bounce-soft" />
              </div>
              <h3 className="font-display italic text-3xl md:text-5xl font-bold leading-[1.05]">
                Sua escola tá pronta <br /> pro futuro?
              </h3>
              <p className="mt-4 text-white/90 max-w-xl mx-auto">
                Receba uma proposta personalizada e descubra como a PiCode pode transformar a forma de ensinar tecnologia. 🚀
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contato">
                  <Button
                    size="lg"
                    className="rounded-full h-12 px-7 text-base font-bold bg-[oklch(0.85_0.16_90)] text-[oklch(0.18_0.05_260)] hover:bg-[oklch(0.88_0.16_90)] sticker hover:rotate-[-2deg] border-2 border-[oklch(0.18_0.05_260)]"
                  >
                    Agendar demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/solucoes">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-12 px-7 text-base font-bold bg-white text-[oklch(0.18_0.05_260)] border-2 border-[oklch(0.18_0.05_260)] hover:bg-white/90 hover:text-[oklch(0.18_0.05_260)] sticker hover:rotate-[2deg]"
                  >
                    Ver soluções
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
