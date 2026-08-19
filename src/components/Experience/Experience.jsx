import { useState } from "react";
import "./Experience.css";

const professionalExperience = [
  {
    id: "web",
    period: "Actualidad",
    title: "Desarrollo Web Full-Stack",
    organization: "Formación y desarrollo de proyectos propios",
    description: [
      <>
        {" "}
        <strong>Desarrollo de aplicaciones web Full-Stack </strong> utilizando
        React, JavaScript, Node.js, Express y MongoDB, integrando interfaces,
        APIs, autenticación y persistencia de datos.
      </>,
      <>
        <strong> Integración de APIs REST y servicios externos,</strong>{" "}
        implementando autenticación mediante JWT y persistencia de datos en
        aplicaciones web.
      </>,
      <>
        <strong>Desarrollo de interfaces reutilizables y adaptativas, </strong>{" "}
        aplicando componentes modulares, control de versiones con Git y buenas
        prácticas de desarrollo.
      </>,
    ],
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "APIs REST",
      "Git",
      "GitHub",
    ],
  },

  {
    id: "architecture",
    period: "2009 – 2026",
    title: "Arquitectura, sostenibilidad y gestión de proyectos",
    organization:
      "Experiencia profesional · Consultoría y proyectos independientes",
    description: [
      <>
        <strong>
          {" "}
          Coordinación de modelado energético y simulación para proyectos de
          infraestructura de gran escala,{" "}
        </strong>{" "}
        analizando múltiples variables y escenarios para evaluar desempeño y
        apoyar decisiones técnicas, incluyendo las estaciones de la Primera
        Línea del Metro de Bogotá (aprox. 135.000 m²) con WSP Colombia.
      </>,
      <>
        <strong>
          Dirección y coordinación integral de proyectos arquitectónicos,{" "}
        </strong>
        gestionando equipos interdisciplinarios, cronogramas, presupuestos,
        entregables y resolución de problemas técnicos en proyectos de alta
        complejidad.
      </>,
      <>
        <strong>
          Análisis y transformación de datos climáticos y de desempeño
          energético{" "}
        </strong>{" "}
        mediante herramientas de simulación y modelado, convirtiendo información
        técnica compleja en estrategias de diseño y decisiones de optimización.
      </>,
    ],
    technologies: [
      "Análisis de Datos",
      "Resolución de problemas",
      "Gestión de Proyectos",
      "Modelado y simulación",
      "Pensamiento sistémico",
      "Liderazgo de Equipos",
      "Sostenibilidad",
      "DesignBuilder",
    ],
  },

  {
    id: "teaching",
    period: "2018 – 2025",
    title: "Docencia, investigación y dirección académica",
    organization: "Universidad Cesmag · Universidad Santo Tomás",
    description: [
      <>
        <strong>
          {" "}
          Liderazgo de cátedras técnicas y talleres de proyectos{" "}
        </strong>
        en pregrado y posgrado, integrando arquitectura, bioclimática, urbanismo
        y sostenibilidad, con acompañamiento y mentoría a estudiantes.
      </>,
      <>
        <strong>
          Coordinación de programas académicos y procesos de formación,{" "}
        </strong>
        incluyendo la Especialización en Arquitectura y Urbanismo Bioclimático,
        gestión de equipos docentes, acompañamiento a estudiantes, planificación
        académica y estructuración de contenidos.
      </>,
      <>
        <strong>Investigación y producción académica </strong>
        en arquitectura, hábitat y sostenibilidad, articulando análisis, trabajo
        colaborativo y comunicación de resultados. Co-investigadora en De Sur a
        Sur: Escenas migrantes del habitar en movimiento, con análisis de
        dinámicas del habitar en Bucaramanga, Tunja y Villavicencio.
      </>,
    ],
    technologies: [
      "Comunicación Técnica",
      "Mentoría",
      "Liderazgo de equipos",
      "Investigación",
      "Estructuración de Procesos",
      "Planificación",
    ],
  },
];

function Experience() {
  const [openExperience, setOpenExperience] = useState("web");

  const handleToggle = (id) => {
    setOpenExperience((current) => (current === id ? null : id));
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience__heading">
          <h2 className="experience__title">Experiencia profesional</h2>

          <div className="experience__line" />

          <p className="experience__intro">
            Donde la arquitectura del espacio y la ingeniería de software se
            encuentran para crear soluciones con propósito.
          </p>
        </div>

        <div className="experience__list">
          {professionalExperience.map((item) => {
            const isOpen = openExperience === item.id;

            return (
              <article
                className={`experience__item ${
                  isOpen ? "experience__item--open" : ""
                }`}
                key={item.id}
              >
                <button
                  className="experience__trigger"
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`experience-${item.id}`}
                >
                  <div className="experience__trigger-content">
                    <p className="experience__period">{item.period}</p>

                    <h3 className="experience__item-title">{item.title}</h3>

                    <p className="experience__organization">
                      {item.organization}
                    </p>
                  </div>

                  <span className="experience__icon" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </button>

                <div
                  className="experience__details"
                  id={`experience-${item.id}`}
                  hidden={!isOpen}
                >
                  <div className="experience__details-inner">
                    <ul className="experience__highlights">
                      {item.description.map((description, index) => (
                        <li className="experience__highlight" key={index}>
                          {description}
                        </li>
                      ))}
                    </ul>

                    <div className="experience__technologies">
                      <p className="experience__technologies-title">
                        Habilidades
                      </p>

                      <div className="experience__tags">
                        {item.technologies.map((technology) => (
                          <span className="experience__tag" key={technology}>
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
