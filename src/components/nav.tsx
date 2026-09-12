import { useEffect, useState } from "react";
import { Container } from "@/components/container";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
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
      <Container className="flex items-center justify-between py-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.2em]">Janith Silva</span>
        </a>
        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] transition hover:border-accent hover:text-accent"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Start a project
          <span className="transition group-hover:translate-x-1">↗</span>
        </a>
      </Container>
    </header>
  );
}
