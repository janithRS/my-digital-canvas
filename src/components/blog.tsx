import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { useMediumPosts } from "@/hooks/use-medium-posts";
import { MEDIUM_PROFILE_URL } from "@/data/config";

export function Blog() {
  const { posts, status } = useMediumPosts(3);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  if (status === "error" || (status === "done" && posts.length === 0)) return null;

  return (
    <section id="blog" className="border-t border-border">
      <Container className="py-32 md:py-48">
        <SectionHeader
          tag="Writing"
          title={`Thoughts, notes, <em class="italic text-muted-foreground">& essays.</em>`}
          subtitle="Occasional writing on engineering, product, and craft — published on Medium."
        />
        <div ref={ref} className="grid gap-6 md:grid-cols-3">
          {status === "loading"
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-64 animate-pulse rounded-2xl border border-border bg-card"
                />
              ))
            : posts.map((post, i) => (
                <motion.a
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition hover:border-accent"
                >
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {new Date(post.pubDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-tight transition group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}…</p>
                  <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition group-hover:text-accent">
                    Read on Medium
                    <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>
                </motion.a>
              ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={MEDIUM_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition hover:border-accent hover:text-accent"
          >
            View all posts on Medium
            <span>↗</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
