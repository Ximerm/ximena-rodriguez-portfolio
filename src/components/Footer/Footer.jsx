import "./Footer.css";

import emailIcon from "../../assets/icons/email.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import footerVector from "../../assets/images/Footer/footer_vector.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Enlaces a redes profesionales y contacto */}
        <div className="footer__social">
          <a
            className="footer__social-link"
            href="mailto:tu-correo@email.com"
            aria-label="Enviar correo electrónico"
          >
            <img className="footer__social-icon" src={emailIcon} alt="" />
          </a>

          <a
            className="footer__social-link"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img className="footer__social-icon" src={githubIcon} alt="" />
          </a>

          <a
            className="footer__social-link"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img className="footer__social-icon" src={linkedinIcon} alt="" />
          </a>
        </div>

        {/* Información de copyright */}
        <p className="footer__copyright">© 2026 Ximena Rodríguez</p>
      </div>

      {/* Forma decorativa inferior tomada del diseño de Figma */}
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
