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
        <div className="space-y-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
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
