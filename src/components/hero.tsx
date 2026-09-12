import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroImg from "@/assets/hero.jpg";
import { AnimatedWord } from "@/components/animated-word";
import { cn } from "@/lib/utils";
import { CONTAINER_CLASS } from "@/components/container";

export function Hero() {
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
        className={cn(
          CONTAINER_CLASS,
          "relative flex min-h-screen flex-col justify-between pb-16 pt-32 md:pt-40",
        )}
      >
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="inline-block h-px w-10 bg-accent" /> A software engineer's portfolio
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
