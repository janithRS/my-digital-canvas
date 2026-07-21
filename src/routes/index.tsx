import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import portraitImg from "@/assets/portrait.jpg";

export default function PortfolioPage() {
  return <Portfolio />;
}


const experiences = [
  {
    company: "Paylocity",
    role: "Senior Software Engineer",
    period: "2024 Nov — Present",
    desc: "Leading Paylocity core tax engine UI team.",
  },
  {
    company: "FNZ",
    role: "Software Engineer",
    period: "2024 Jan — 2024 Nov",
    desc: "Transformed financial complexities into seamless user experiences through fintech front-end technologies.",
  },
  {
    company: "Native",
    role: "Frontend Engineer",
    period: "2022 Aug — 2023 Oct",
    desc: "Developed and styled the Native flow web application from scratch, including SignalR integration for real-time communication.",
  },
  {
    company: "WSO2",
    role: "Software Engineer",
    period: "2020 Dec — 2023 Jul",
    desc: "Collaborated with engineers to develop the Choreo web application and build the GraphQL API.",
  },
  {
    company: "SEF",
    role: "Chief Design Officer",
    period: "2018 Jun — 2021 Jun",
    desc: "Managed the design team and collaborated closely with engineering to produce exceptional UI designs and social media content.",
  },
];

const projects = [
  {
    n: "01",
    name: "Paylocity Payroll",
    desc: "Payroll platform for Paylocity, a US employee benefits company.",
    stack: ["React", "React Query", "TypeScript", "RTL"],
    href: "https://www.paylocity.com/",
  },
  {
    n: "02",
    name: "GVC Gaesco",
    desc: "Financial platform for GVC Gaesco, a Spanish financial services company.",
    stack: ["React", "C#", "ASP.NET", "SQL Server", "TypeScript"],
    href: "https://gvcgaesco.es/es/inversion/",
  },
  {
    n: "03",
    name: "Native Flow",
    desc: "Multilingual communication platform powered by an AI translation engine.",
    stack: ["Next.js", "SignalR", "Mono-repo", "Material UI"],
    href: "https://native.tech/",
  },
  {
    n: "04",
    name: "Choreo",
    desc: "All-in-one platform to develop and manage APIs, integrations, and digital services.",
    stack: ["React", "GraphQL", "MSW", "RXJS", "Swagger UI"],
    href: "https://wso2.com/choreo/",
  },
  {
    n: "05",
    name: "Diabipal",
    desc: "Smart mobile app predicting diabetes and cardiovascular disease using ML and OCR.",
    stack: ["Ionic", "Python", "TensorFlow", "Keras", "Flask"],
    href: "#",
  },
];

const services = [
  { n: "01", label: "Front-end Engineering" },
  { n: "02", label: "Design Systems" },
  { n: "03", label: "Product UX" },
  { n: "04", label: "GraphQL & APIs" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Grain />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.06] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")",
      }}
    />
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.2em]">Janith Silva</span>
        </a>
        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
          <a href="#work" className="transition hover:text-foreground">Work</a>
          <a href="#about" className="transition hover:text-foreground">About</a>
          <a href="#experience" className="transition hover:text-foreground">Experience</a>
          <a href="#contact" className="transition hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] transition hover:border-accent hover:text-accent"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Start a project
          <span className="transition group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          width={1600}
          height={1200}
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-between px-6 pb-16 pt-32 md:px-10 md:pt-40"
      >
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="inline-block h-px w-10 bg-accent" />
          A software engineer's portfolio
        </div>

        <div className="mt-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            👋 Ahoy! I am
          </motion.p>
          <h1 className="font-display text-balance text-[clamp(3.5rem,12vw,12rem)] leading-[0.9] tracking-tight">
            <AnimatedWord text="Janith" delay={0.1} />
            <br />
            <span className="italic text-muted-foreground">
              <AnimatedWord text="Silva." delay={0.3} />
            </span>
          </h1>
          <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-md text-lg text-muted-foreground md:text-xl"
            >
              I build <span className="text-foreground">solid products</span> with{" "}
              <span className="italic text-foreground">amazing user experiences</span>.
            </motion.p>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              href="#work"
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground transition hover:text-foreground"
            >
              <span className="inline-block h-8 w-px bg-border" />
              Scroll to explore
              <span className="animate-blink">▮</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function AnimatedWord({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
}

function Marquee() {
  const items = ["React", "TypeScript", "GraphQL", "Next.js", "Design Systems", "Node", "Fintech", "UX Engineering"];
  return (
    <div className="relative border-y border-border bg-muted/30 py-6 overflow-hidden">
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap font-display text-4xl md:text-6xl">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-16">
            <span>{t}</span>
            <span className="text-accent">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
      >
        <span className="inline-block h-px w-10 bg-accent" />
        {tag}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display text-balance text-5xl leading-[0.95] md:text-7xl lg:text-8xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="about" ref={ref} className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
      <SectionHeader
        tag="About"
        title={`A curious builder who <em class="italic text-muted-foreground">ships</em>.`}
      />
      <div className="grid gap-12 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="md:col-span-5"
        >
          <div className="relative overflow-hidden rounded-lg border border-border">
            <img
              src={portraitImg}
              alt="Janith Silva"
              width={900}
              height={1100}
              loading="lazy"
              className="w-full grayscale"
            />
          </div>
        </motion.div>
        <div className="md:col-span-7 md:pl-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-3xl leading-[1.15] text-balance md:text-4xl"
          >
            I'm a software engineer with a background in design — obsessed with the details that
            make interfaces feel <em className="italic text-accent">effortless</em>. I've spent the
            last decade shipping fintech, payroll, and developer tools used by teams worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-10 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:grid-cols-4"
          >
            <div>
              <div className="text-3xl font-display text-foreground">10+</div>
              Years shipping
            </div>
            <div>
              <div className="text-3xl font-display text-foreground">05</div>
              Companies
            </div>
            <div>
              <div className="text-3xl font-display text-foreground">∞</div>
              Cups of tea
            </div>
            <div>
              <div className="text-3xl font-display text-foreground">01</div>
              Podcast
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
        <SectionHeader
          tag="Experience"
          title={`Where I've <em class="italic text-muted-foreground">built</em>.`}
        />
        <div className="divide-y divide-border border-y border-border">
          {experiences.map((e, i) => (
            <ExperienceRow key={e.company} exp={e} index={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <a
            href="https://www.linkedin.com/in/janithrs/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground transition hover:text-accent"
          >
            View full resume on LinkedIn
            <span className="transition group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({ exp, index }: { exp: (typeof experiences)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      className="group grid grid-cols-12 gap-4 py-8 transition md:py-12"
    >
      <div className="col-span-12 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-2">
        {exp.period}
      </div>
      <div className="col-span-12 md:col-span-4">
        <div className="font-display text-3xl transition group-hover:text-accent md:text-4xl">
          {exp.company}
        </div>
        <div className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {exp.role}
        </div>
      </div>
      <div className="col-span-12 text-muted-foreground md:col-span-6">{exp.desc}</div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="work" className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
        <SectionHeader
          tag="Selected work"
          title={`I build, ship, <em class="italic text-muted-foreground">and scale</em>.`}
          subtitle="Real products. Real teams. Real users. A look at projects where strategy, design, and code came together."
        />
        <div className="space-y-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, index }: { p: (typeof projects)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.a
      ref={ref}
      href={p.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:border-accent md:p-12"
    >
      <div className="grid grid-cols-12 items-start gap-6">
        <div className="col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-1">
          {p.n}
        </div>
        <div className="col-span-10 md:col-span-6">
          <h3 className="font-display text-4xl leading-tight md:text-6xl">
            <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 group-hover:bg-[length:100%_1px]">
              {p.name}
            </span>
          </h3>
          <p className="mt-3 max-w-md text-muted-foreground">{p.desc}</p>
        </div>
        <div className="col-span-12 md:col-span-4 md:pl-8">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-12 flex justify-end font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground transition group-hover:text-accent md:col-span-1">
          <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
        </div>
      </div>
    </motion.a>
  );
}

function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
        <SectionHeader
          tag="What I do"
          title={`Front-end, product, <em class="italic text-muted-foreground">&amp; craft.</em>`}
        />
        <div ref={ref} className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-square bg-background p-8 transition hover:bg-muted/40"
            >
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {s.n}
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="font-display text-3xl leading-tight transition group-hover:text-accent md:text-4xl">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-32 text-center md:px-10 md:py-48">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-6 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Available for new work
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mx-auto max-w-5xl font-display text-balance text-6xl leading-[0.95] md:text-8xl lg:text-9xl"
        >
          Let's build something <em className="italic text-accent">unforgettable.</em>
        </motion.h2>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          href="mailto:hello@janithsilva.com"
          className="mt-12 inline-flex items-center gap-4 rounded-full border border-border px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] transition hover:border-accent hover:bg-accent hover:text-accent-foreground"
        >
          hello@janithsilva.com
          <span>↗</span>
        </motion.a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} — Janith Silva
        </div>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.25em]">
          <a href="https://www.linkedin.com/in/janithrs/" target="_blank" rel="noreferrer" className="text-muted-foreground transition hover:text-foreground">LinkedIn ↗</a>
          <a href="https://www.youtube.com/@JanithIO" target="_blank" rel="noreferrer" className="text-muted-foreground transition hover:text-foreground">YouTube ↗</a>
          <a href="https://www.janithsilva.com" target="_blank" rel="noreferrer" className="text-muted-foreground transition hover:text-foreground">janithsilva.com ↗</a>
        </div>
      </div>
    </footer>
  );
}
