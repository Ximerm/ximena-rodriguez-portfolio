import "./Footer.css";

import emailIcon from "../../assets/icons/email.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import footerVector from "../../assets/images/Footer/footer_vector.svg";

function Footer({ variant = "white" }) {
  return (
    <footer className={`footer footer--${variant}`}>
      {/* Contenido del footer */}
      <div className="footer__content">
        {/* Enlaces de contacto y redes sociales */}
        <div className="footer__social">
          <a
            className="footer__social-link"
            href="mailto:tu-correo@example.com"
            aria-label="Enviar correo electrónico"
          >
            <img
              className="footer__social-icon"
              src={emailIcon}
              alt="Correo electrónico"
            />
          </a>

          <a
            className="footer__social-link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img
              className="footer__social-icon"
              src={githubIcon}
              alt="GitHub"
            />
          </a>

          <a
            className="footer__social-link"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img
              className="footer__social-icon"
              src={linkedinIcon}
              alt="LinkedIn"
            />
          </a>
        </div>

        {/* Derechos de autor */}
        <p className="footer__copyright">© 2026 Ximena Rodríguez</p>
      </div>

      {/* Vector decorativo */}
      <img
        className="footer__vector"
        src={footerVector}
        alt=""
        aria-hidden="true"
      />
    </footer>
  );
}

export default Footer;
