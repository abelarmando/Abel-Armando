import React from "react";
import CardProject from "../../components/CardProject";
import { MyProjects } from "../../Constants";

function Projects() {
  return (
    <div className="space-y-10 px-8 xl:px-[180px]" id="projects">
      <h1 className="lg:text-6xl text-4xl text-center">My Projects</h1>
      <div className="flex gap-10 justify-center flex-wrap w-full">
        {MyProjects.map((project) => (
          <CardProject
            img={project.img}
            title={project.name}
            github={project.github}
            live={project.live}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
