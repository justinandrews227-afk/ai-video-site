import projects from "@/data/projects";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata = { title: "Work — AI Video Studio" };

export default function WorkPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-semibold mb-6">Work</h1>
      <ProjectGrid items={projects} />
    </section>
  );
}
