import "./ProjectCard.css";

function ProjectCard({ project, reverse = false }) {
  return (
    <article
      className={`project-card${reverse ? " project-card_reverse" : ""}`}
    >
      <div className="project-card__content">
        {project.label && (
          <span className="project-card__label">{project.label}</span>
        )}

        <h3 className="project-card__title">{project.name}</h3>

        <p className="project-card__type">{project.type}</p>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span key={technology} className="project-card__technology">
              {technology}
            </span>
          ))}
        </div>

        <a className="project-card__button" href={project.link}>
          Ver proyecto
        </a>
      </div>

      <div className="project-card__image-container">
        <img
          className="project-card__image"
          src={project.image}
          alt={`Vista previa del proyecto ${project.name}`}
        />
      </div>
    </article>
  );
}

export default ProjectCard;
