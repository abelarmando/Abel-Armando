import React from "react";
import CardProject from "../../components/CardProject";
import { MyProjects } from "../../Constants";

function Projects() {
  return (
    <div className="space-y-10">
      <h1 className="lg:text-6xl text-4xl text-center">My Projects</h1>
      <div className="flex gap-10 justify-center">
        {MyProjects.map((project) => (
          <CardProject
            img={project.img}
            title={project.name}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
