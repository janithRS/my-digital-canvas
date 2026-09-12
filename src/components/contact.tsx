import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/container";
import { GOOGLE_APPOINTMENT_URL } from "@/data/config";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="contact" className="border-t border-border">
      <Container className="py-32 text-center md:py-48">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@janithsilva.com"
            className="inline-flex items-center gap-4 rounded-full border border-border px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] transition hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            hello@janithsilva.com
            <span>↗</span>
          </a>
          <a
            href={GOOGLE_APPOINTMENT_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-4 rounded-full border border-border px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] transition hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            Schedule a meeting
            <span>↗</span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
