import { useEffect } from "react";
import { Grain } from "@/components/grain";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { GOOGLE_APPOINTMENT_URL } from "@/data/config";

export default function PortfolioPage() {
  return <Portfolio />;
}

function Portfolio() {
  useEffect(() => {
    if (window.location.pathname.replace(/\/+$/, "") === "/meet") {
      window.location.replace(GOOGLE_APPOINTMENT_URL);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Grain />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
