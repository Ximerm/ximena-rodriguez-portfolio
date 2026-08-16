import "./FeaturedProjects.css";

import ecoBuildLabCover from "../../assets/images/Projects/ecobuildlab_cover.png";
import aroundCover from "../../assets/images/Projects/around_cover.png";

import ProjectCard from "../ProjectCard/ProjectCard";

const featuredProjects = [
  {
    name: "EcoBuildLab",
    label: "Proyecto propio",
    type: "Aplicación web Full-Stack",
    description:
      "Aplicación que transforma datos climáticos en información para apoyar decisiones de diseño arquitectónico sostenible.",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    image: ecoBuildLabCover,
    link: "/ecobuildlab",
  },
  {
    name: "Around the U.S.",
    label: "Proyecto TripleTen",
    type: "Aplicación web Full-Stack",
    description:
      "Proyecto desarrollado durante mi formación en TripleTen, evolucionando desde Front-End hasta una aplicación Full-Stack con React, API REST, autenticación y persistencia de datos.",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    image: aroundCover,
    link: "/around-the-us",
  },
];

function FeaturedProjects() {
  return (
    <section className="featured-projects" id="proyectos">
      <div className="container">
        <div className="featured-projects__heading">
          <h2 className="featured-projects__title">Proyectos destacados</h2>
          <div className="featured-projects__line" />
        </div>

        <div className="featured-projects__list">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
