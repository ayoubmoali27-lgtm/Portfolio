import Process from "../components/Process";
import ProjectsShipped from "../components/projects";
import ScrollReveal from "../components/ScrollReveal";

function Work() {
  return (
    <main className="bg-[#131313] overflow-hidden">
      <ScrollReveal>
        <ProjectsShipped />
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Process />
      </ScrollReveal>
    </main>
  );
}

export default Work;