import "./Hero.css";
import heroImage from "../../assets/images/Hero/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <p className="hero__eyebrow">DESARROLLADORA WEB FULL-STACK JUNIOR</p>

          <h1 className="hero__title">Hola, soy Ximena.</h1>

          <p className="hero__description">
            Convierto ideas en soluciones digitales y proyectos funcionales,
            combinando experiencia en diseño, tecnología y análisis de datos.
          </p>

          <div className="hero__actions">
            <a className="hero__button" href="#projects">
              Proyectos
            </a>

            <a
              className="hero__button"
              href="TU-LINKEDIN"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <img
            className="hero__image"
            src={heroImage}
            alt="Ilustración de desarrollo web"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
