import { useLayoutEffect, useState } from "react";
import "./Projects.css";

import projectsHero from "../../assets/images/Projects/projects-hero.png";

import projects from "../../data/projects";

// =========================================================
// SCROLL DE NAVEGACIÓN
// =========================================================

function useProjectScroll() {
  useLayoutEffect(() => {
    const hash = window.location.hash;

    // Si entramos simplemente a /proyectos,
    // empezamos arriba de todo.
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Si entramos con #ecobuildlab o #around-the-us,
    // esperamos a que React haya pintado las tarjetas.
    const scrollToProject = () => {
      const targetId = hash.substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }
    };

    requestAnimationFrame(scrollToProject);
  }, []);
}

// =========================================================
// ACCIONES DE PROYECTO
// =========================================================

function ProjectActions({ project, featured = false }) {
  const hasProjectUrl = project.projectUrl && project.projectUrl !== "#";

  const hasGithub = project.githubUrl && project.githubUrl !== "#";

  const hasGithubFrontend =
    project.githubFrontend && project.githubFrontend !== "#";

  const hasGithubBackend =
    project.githubBackend && project.githubBackend !== "#";

  return (
    <div
      className={`projects__card-actions ${
        featured ? "projects__card-actions--featured" : ""
      }`}
    >
      {hasProjectUrl ? (
        <a
          className="projects__card-button projects__card-button--primary"
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto
          <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <span className="projects__card-button projects__card-button--primary projects__card-button--disabled">
          Ver proyecto
          <span aria-hidden="true">↗</span>
        </span>
      )}

      {hasGithubFrontend && hasGithubBackend ? (
        <div className="projects__card-code-links">
          <a
            className="projects__card-button projects__card-button--secondary"
            href={project.githubFrontend}
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend
            <span aria-hidden="true">↗</span>
          </a>

          <a
            className="projects__card-button projects__card-button--secondary"
            href={project.githubBackend}
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      ) : hasGithub ? (
        <a
          className="projects__card-button projects__card-button--secondary"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver código
          <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <span className="projects__card-button projects__card-button--secondary projects__card-button--disabled">
          Ver código
          <span aria-hidden="true">↗</span>
        </span>
      )}
    </div>
  );
}

// =========================================================
// BEFORE / AFTER
// =========================================================

function BeforeAfterToggle({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="projects__before-after">
      <button
        className="projects__before-after-toggle"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        <span>
          {isOpen ? "Ocultar antes y después" : "Ver antes y después"}
        </span>

        <span className="projects__before-after-icon" aria-hidden="true">
          {isOpen ? "↑" : "↓"}
        </span>
      </button>

      {isOpen && (
        <div className="projects__before-after-content">
          <div className="projects__before-after-item">
            <span className="projects__before-after-label">ANTES</span>

            <div className="projects__before-after-image-wrapper">
              <img
                className="projects__before-after-image"
                src={project.beforeImage}
                alt={`Versión original de ${project.title}`}
              />
            </div>
          </div>

          <span className="projects__before-after-arrow" aria-hidden="true">
            →
          </span>

          <div className="projects__before-after-item">
            <span className="projects__before-after-label">DESPUÉS</span>

            <div className="projects__before-after-image-wrapper">
              <img
                className="projects__before-after-image"
                src={project.afterImage}
                alt={`Versión rediseñada de ${project.title}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// =========================================================
// TARJETA DE PROYECTO
// =========================================================

function ProjectCard({ project, featured = false }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      id={project.id}
      className={`projects__card ${
        featured ? "projects__card--featured" : "projects__card--compact"
      } ${isExpanded ? "projects__card--expanded" : ""}`}
    >
      <div className="projects__card-main">
        <div className="projects__card-image-wrapper">
          {project.image ? (
            <img
              className="projects__card-image"
              src={project.image}
              alt={`Vista previa del proyecto ${project.title}`}
            />
          ) : (
            <div className="projects__card-image-placeholder">
              <span>Imagen del proyecto</span>
            </div>
          )}
        </div>

        <div className="projects__card-content">
          <p className="projects__card-category">{project.category}</p>

          <h3 className="projects__card-title">{project.title}</h3>

          <p className="projects__card-description">{project.description}</p>

          <div className="projects__card-technologies">
            {project.technologies.map((technology) => (
              <span
                className="projects__card-tag"
                key={`${project.id}-${technology}`}
              >
                {technology}
              </span>
            ))}
          </div>

          {project.type === "before-after" ? (
            <BeforeAfterToggle project={project} />
          ) : (
            <>
              <ProjectActions project={project} featured={featured} />

              {featured && project.caseStudy && (
                <button
                  className="projects__card-expand"
                  type="button"
                  onClick={() => setIsExpanded((current) => !current)}
                  aria-expanded={isExpanded}
                >
                  <span>
                    {isExpanded
                      ? "Ocultar caso de estudio"
                      : "Ver caso de estudio"}
                  </span>

                  <span
                    className={`projects__card-expand-icon ${
                      isExpanded ? "projects__card-expand-icon--open" : ""
                    }`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {featured && project.caseStudy && (
        <div
          className={`projects__case-study ${
            isExpanded ? "projects__case-study--open" : ""
          }`}
        >
          <div className="projects__case-study-inner">
            <div className="projects__case-study-block">
              <p className="projects__case-study-label">01 · EL RETO</p>

              <p className="projects__case-study-text">
                {project.caseStudy.challenge}
              </p>
            </div>

            <div className="projects__case-study-block">
              <p className="projects__case-study-label">02 · LA SOLUCIÓN</p>

              <p className="projects__case-study-text">
                {project.caseStudy.solution}
              </p>
            </div>

            <div className="projects__case-study-block">
              <p className="projects__case-study-label">03 · EL APRENDIZAJE</p>

              <p className="projects__case-study-text">
                {project.caseStudy.learning}
              </p>
            </div>

            <p className="projects__case-study-note">
              El proceso técnico, las decisiones de desarrollo y la estructura
              completa del proyecto están documentados en el{" "}
              <strong>README</strong> del repositorio.
            </p>
          </div>
        </div>
      )}
    </article>
  );
}

// =========================================================
// COMPONENTE PRINCIPAL
// =========================================================

function Projects() {
  useProjectScroll();

  const featuredProjects = projects.filter((project) => project.featured);

  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="projects">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="projects__hero">
        <div className="projects__hero-container container">
          <div className="projects__hero-content">
            <p className="projects__hero-eyebrow">PORTAFOLIO</p>

            <h1 className="projects__hero-title">
              Lógica espacial aplicada al código.
            </h1>

            <p className="projects__hero-description">
              Una muestra de aplicaciones web completas donde combino la
              precisión técnica de la arquitectura, el análisis de datos y el
              diseño intuitivo para resolver problemas del mundo real.
            </p>

            <div className="projects__hero-actions">
              <a className="projects__hero-button" href="#proyectos-destacados">
                Ver proyectos
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="projects__hero-visual">
            <img
              className="projects__hero-image"
              src={projectsHero}
              alt="Proyectos digitales EcoBuildLab y Around"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PROYECTOS DESTACADOS
          ===================================================== */}

      <section className="projects__featured" id="proyectos-destacados">
        <div className="container">
          <div className="projects__section-heading">
            <h2 className="projects__section-title">Proyectos destacados</h2>

            <div className="projects__section-line" />

            <p className="projects__section-description">
              Una selección de soluciones digitales que combinan la rigurosidad
              analítica de la arquitectura con el desarrollo de aplicaciones web
              funcionales y escalables.
            </p>
          </div>

          <div className="projects__featured-list">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OTROS PROYECTOS
          ===================================================== */}

      <section className="projects__other">
        <div className="container">
          <div className="projects__section-heading">
            <h2 className="projects__section-title">Otros proyectos</h2>

            <div className="projects__section-line" />

            <p className="projects__section-description">
              Soluciones de interfaz aplicadas a entornos comerciales junto con
              exploraciones técnicas y optimizaciones dinámicas de frontend.
            </p>
          </div>

          <div className="projects__other-list">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
