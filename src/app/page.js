import Contact from "./components/contact";
import ProjectsShipped from "./components/projects";
import Hero from "./components/SectionOne";
import Services from "./components/Services";
import Skills from "./components/skills";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="bg-[#131313] overflow-hidden">
      <ScrollReveal>
  <Hero />
</ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectsShipped />
      </ScrollReveal>

      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </main>
  );
}