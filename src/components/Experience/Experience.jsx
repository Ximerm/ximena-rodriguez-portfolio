import { useState } from "react";
import "./Experience.css";

import professionalExperience from "../../data/experience";

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
                        <li
                          className="experience__highlight"
                          key={`${item.id}-description-${index}`}
                        >
                          <strong>{description.bold}</strong>
                          {description.text}
                        </li>
                      ))}
                    </ul>

                    <div className="experience__technologies">
                      <p className="experience__technologies-title">
                        Habilidades
                      </p>

                      <div className="experience__tags">
                        {item.technologies.map((technology) => (
                          <span
                            className="experience__tag"
                            key={`${item.id}-${technology}`}
                          >
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
