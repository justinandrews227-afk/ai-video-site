import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import projects from "@/data/projects";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="container py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Latest Work</h2>
        <ProjectGrid items={projects.slice(0,6)} />
      </section>
    </div>
  );
}
