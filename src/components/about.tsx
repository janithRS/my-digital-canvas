import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

const STATS = [
  { value: "10+", label: "Years shipping" },
  { value: "05", label: "Companies" },
  { value: "∞", label: "Cups of tea" },
  { value: "01", label: "Podcast" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="about" ref={ref}>
      <Container className="py-32 md:py-48">
        <SectionHeader
          tag="About"
          title={`A curious builder who <em class="italic text-muted-foreground">ships</em>.`}
        />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-3xl leading-[1.15] text-balance md:text-4xl"
        >
          I'm a senior software engineer who thinks in systems: obsessed with getting the
          architecture <em className="italic text-accent">right</em>, from data model and API
          contracts to the UI that sits on top. I've spent the last decade building full-stack
          platforms for fintech, payroll, and developer tools used by teams worldwide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-10 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-display text-foreground">{stat.value}</div>
              {stat.label}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
