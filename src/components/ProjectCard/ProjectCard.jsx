import "./ProjectCard.css";

import { Link } from "react-router-dom";

function ProjectCard({ project, reverse = false }) {
  return (
    <article
      className={`project-card${reverse ? " project-card_reverse" : ""}`}
    >
      <div className="project-card__content">
        {project.category && (
          <span className="project-card__label">{project.category}</span>
        )}

        <h3 className="project-card__title">{project.title}</h3>

        {project.type && <p className="project-card__type">{project.type}</p>}

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span
              key={`${project.id}-${technology}`}
              className="project-card__technology"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* 
          En el Home este botón NO abre el proyecto externo.
          Lleva a la tarjeta correspondiente dentro de /proyectos.
        */}
        <Link className="project-card__button" to={`/proyectos#${project.id}`}>
          Ver proyecto
        </Link>
      </div>

      <div className="project-card__image-container">
        <img
          className="project-card__image"
          src={project.image}
          alt={`Vista previa del proyecto ${project.title}`}
        />
      </div>
    </article>
  );
}

export default ProjectCard;
