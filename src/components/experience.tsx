import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { experiences, type ExperienceEntry } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <Container className="py-32 md:py-48">
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
      </Container>
    </section>
  );
}

function ExperienceRow({ exp, index }: { exp: ExperienceEntry; index: number }) {
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
