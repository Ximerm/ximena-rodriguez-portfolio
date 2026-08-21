import "./Skills.css";

import { technologyGroups, complementaryEducation } from "../../data/skills";

function Skills() {
  return (
    <section className="skills">
      <div className="container">
        {/* =========================================
            ENCABEZADO
            ========================================= */}

        <div className="skills__heading">
          <h2 className="skills__title">Tecnologías y herramientas</h2>

          <div className="skills__line" />

          <p className="skills__intro">
            Tecnología, análisis y diseño. Las herramientas que utilizo para
            transformar ideas y problemas complejos en soluciones digitales.
          </p>
        </div>

        {/* =========================================
            CONTENIDO 50 / 50
            ========================================= */}

        <div className="skills__content">
          {/* =========================================
              COLUMNA IZQUIERDA
              ========================================= */}

          <div className="skills__column skills__technologies">
            <h3 className="skills__section-title">Stack tecnológico</h3>

            <div className="skills__groups">
              {technologyGroups.map((group) => (
                <article className="skills__group" key={group.title}>
                  <h4 className="skills__group-title">{group.title}</h4>

                  <div className="skills__tags">
                    {group.items.map((item) => (
                      <span className="skills__tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* =========================================
              COLUMNA DERECHA
              ========================================= */}

          <div className="skills__column skills__education">
            <h3 className="skills__section-title">Formación complementaria</h3>

            <p className="skills__education-intro">
              Aprendizaje continuo enfocado en complementar mi perfil técnico
              con metodologías ágiles, gestión y sostenibilidad.
            </p>

            <div className="skills__education-list">
              {complementaryEducation.map((item) => (
                <article
                  className="skills__education-item"
                  key={`${item.year}-${item.title}`}
                >
                  <div className="skills__education-year">{item.year}</div>

                  <div className="skills__education-content">
                    <h4 className="skills__education-title">{item.title}</h4>

                    <p className="skills__education-entity">{item.entity}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
