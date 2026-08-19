import "./Education.css";

const educationItems = [
  {
    period: "2025 – 2026",
    title: "Desarrollo Web Full-Stack",
    organization: "TripleTen",
    description:
      "Formación práctica basada en proyectos, enfocada en la construcción de aplicaciones web interactivas y modernas. Desarrollo de interfaces con React y fundamentos de arquitectura de servidores, APIs y bases de datos.",
  },
  {
    period: "2015 – 2017",
    title: "Magíster en Gestión Integral de la Construcción",
    organization: "Universitat Ramon Llull – La Salle, Barcelona",
    description:
      "Enfoque en Sostenibilidad y Eficiencia Energética. Formación avanzada en dirección estratégica de proyectos, planificación de flujos lógicos y optimización de variables complejas bajo estándares internacionales.",
  },
  {
    period: "2004 – 2009",
    title: "Arquitectura",
    organization: "Universidad del Valle",
    description:
      "Formación que desarrolló mi pensamiento espacial, capacidad analítica y visión sistémica. Aprendí a diseñar y resolver problemas considerando las necesidades de las personas, capacidades que hoy traslado al desarrollo de soluciones digitales.",
  },
];

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
          {educationItems.map((item, index) => (
            <article className="education__item" key={`${item.title}-${index}`}>
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
