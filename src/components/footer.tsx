import { Container } from "@/components/container";

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/janithrs/", label: "LinkedIn ↗" },
  { href: "https://www.youtube.com/@JanithIO", label: "YouTube ↗" },
  { href: "https://www.janithsilva.com", label: "janithsilva.com ↗" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} — Janith Silva
        </div>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.25em]">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
