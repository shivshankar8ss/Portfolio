import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "./projectsData"; // 👉 import your data

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My{" "}
          <span className="from-teal-400">
            Projects
          </span>
        </h2>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
