import "./About.css";

import AboutProfile from "../AboutProfile/AboutProfile";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";

import aboutImage from "../../assets/images/About/about_image.png";

function About() {
  return (
    <main className="about">
      <section className="about__hero">
        <div className="about__container container">
          <div className="about__content">
            <p className="about__eyebrow">DE ARQUITECTA A DESARROLLADORA</p>

            <h1 className="about__title">Sobre mí</h1>

            <p className="about__description">
              Durante más de 15 años he gestionado proyectos arquitectónicos
              integrales, incluyendo modelado técnico y bioclimático para las
              estaciones del Metro de Bogotá con WSP Colombia. Hoy traslado esa
              experiencia de análisis, diseño y resolución de problemas al
              desarrollo web Full-Stack.
            </p>
            <p className="about__description">
              Abordo la programación desde una mirada estructurada, combinando
              la rigurosidad técnica de la arquitectura con una visión intuitiva
              y centrada en las personas. Desarrollo soluciones digitales
              combinando interfaces funcionales, análisis de datos y una visión
              orientada a la sostenibilidad.
            </p>

            <div className="about__actions">
              <a
                className="about__button"
                href="/cv/Ximena-Rodriguez-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver CV
              </a>
            </div>
          </div>

          <div className="about__visual">
            <img
              className="about__image"
              src={aboutImage}
              alt="Ximena Rodríguez"
            />
          </div>
        </div>
      </section>

      <AboutProfile />

      <Experience />

      <Education />

      <Skills />
    </main>
  );
}

export default About;
