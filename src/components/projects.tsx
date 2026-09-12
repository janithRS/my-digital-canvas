import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { projects, type Project } from "@/data/projects";

export function Projects() {
  return (
    <section id="work" className="border-t border-border bg-muted/20">
      <Container className="py-32 md:py-48">
        <SectionHeader
          tag="Selected work"
          title={`I build, ship, <em class="italic text-muted-foreground">and scale</em>.`}
          subtitle="Real products. Real teams. Real users. A look at projects where strategy, design, and code came together."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <a
            href="https://www.linkedin.com/in/janithrs/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground transition hover:text-accent"
          >
            View more projects on LinkedIn
            <span className="transition group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.a
      ref={ref}
      href={p.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:border-accent md:p-10"
    >
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {p.n}
        <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
      </div>
      <h3 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
        <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 group-hover:bg-[length:100%_1px]">
          {p.name}
        </span>
      </h3>
      <p className="mt-3 text-muted-foreground">{p.desc}</p>
    </motion.a>
  );
}
