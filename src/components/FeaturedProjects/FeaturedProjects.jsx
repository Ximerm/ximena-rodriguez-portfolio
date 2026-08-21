import "./FeaturedProjects.css";

import { useNavigate } from "react-router-dom";

import projects from "../../data/projects";

import ProjectCard from "../ProjectCard/ProjectCard";

function FeaturedProjects() {
  const navigate = useNavigate();

  // Tomamos los proyectos destacados directamente desde projects.js
  const featuredProjects = projects.filter((project) => project.featured);

  const handleExploreProjects = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    navigate("/proyectos");
  };

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
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        <div className="featured-projects__more">
          <button
            type="button"
            className="featured-projects__more-link"
            onClick={handleExploreProjects}
          >
            Explorar todos los proyectos
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
