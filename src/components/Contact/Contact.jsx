import "./Contact.css";

import emailIcon from "../../assets/icons/email.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

import contact from "../../data/contact";

function Contact() {
  return (
    <main className="contact">
      <section className="contact__hero">
        <div className="contact__hero-content">
          <h1 className="contact__title">¿Hablamos?</h1>

          <p className="contact__description">
            Estoy abierta a oportunidades profesionales, proyectos de desarrollo
            web y colaboraciones que conecten arquitectura, tecnología, diseño,
            datos y sostenibilidad.
          </p>
        </div>

        <div className="contact__links">
          <a
            className="contact__link"
            href={`mailto:${contact.email}`}
            aria-label="Enviar correo electrónico"
          >
            <span className="contact__link-circle">
              <img
                className="contact__link-icon"
                src={emailIcon}
                alt=""
                aria-hidden="true"
              />
            </span>

            <span className="contact__link-label">Email</span>

            <span className="contact__link-action">
              Escríbeme <span aria-hidden="true">↗</span>
            </span>
          </a>

          <a
            className="contact__link"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Visitar perfil de LinkedIn"
          >
            <span className="contact__link-circle">
              <img
                className="contact__link-icon"
                src={linkedinIcon}
                alt=""
                aria-hidden="true"
              />
            </span>

            <span className="contact__link-label">LinkedIn</span>

            <span className="contact__link-action">
              Ver perfil <span aria-hidden="true">↗</span>
            </span>
          </a>

          <a
            className="contact__link"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Visitar perfil de GitHub"
          >
            <span className="contact__link-circle">
              <img
                className="contact__link-icon"
                src={githubIcon}
                alt=""
                aria-hidden="true"
              />
            </span>

            <span className="contact__link-label">GitHub</span>

            <span className="contact__link-action">
              Ver código <span aria-hidden="true">↗</span>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
