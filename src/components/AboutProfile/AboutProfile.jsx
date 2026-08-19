import "./AboutProfile.css";

function AboutProfile() {
  return (
    <section className="about-profile">
      <div className="container">
        <div className="about-profile__values">
          <article className="about-profile__value">
            <div className="about-profile__circle">
              <h3 className="about-profile__value-title">
                Pensamiento sistémico
              </h3>

              <p className="about-profile__value-text">
                Sé ordenar el caos. Diseñar estructuras complejas me enseñó a
                programar aplicaciones web con cimientos fuertes y un propósito
                lógico.
              </p>
            </div>
          </article>

          <article className="about-profile__value">
            <div className="about-profile__circle">
              <h3 className="about-profile__value-title">
                Diseño + tecnología
              </h3>

              <p className="about-profile__value-text">
                Aporto un ojo estético entrenado. Traduzco ideas en pantallas
                limpias, intuitivas y verdaderamente agradables para el usuario.
              </p>
            </div>
          </article>

          <article className="about-profile__value">
            <div className="about-profile__circle">
              <h3 className="about-profile__value-title">
                Sostenibilidad + datos
              </h3>

              <p className="about-profile__value-text">
                Tengo mentalidad analítica. Me apasiona optimizar el rendimiento
                y transformar datos complejos en soluciones digitales reales.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutProfile;
