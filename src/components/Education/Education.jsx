import "./Education.css";

import educationItems from "../../data/education";

function Education() {
  return (
    <section className="education">
      <div className="container">
        <div className="education__heading">
          <h2 className="education__title">Formación académica</h2>

          <div className="education__line" />

          <p className="education__intro">
            La formación que sustenta mi transición entre arquitectura,
            sostenibilidad y desarrollo tecnológico.
          </p>
        </div>

        <div className="education__timeline">
          {educationItems.map((item) => (
            <article className="education__item" key={item.id}>
              <div className="education__marker">
                <span />
              </div>

              <div className="education__content">
                <p className="education__period">{item.period}</p>

                <h3 className="education__item-title">{item.title}</h3>

                <p className="education__organization">{item.organization}</p>

                <p className="education__description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
