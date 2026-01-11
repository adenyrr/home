import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects }) {
  return (
    <section
      id="projects"
      className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
    >
      {projects.map((p, idx) => (
        <div
          key={p.id}
          className={`animate-fade-in-up`}
          style={{ animationDelay: `${idx * 80}ms` }}
        >
          <ProjectCard project={p} />
        </div>
      ))}
    </section>
  );
}
