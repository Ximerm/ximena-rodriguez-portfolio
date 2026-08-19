import "./Hero.css";

import { useEffect, useState } from "react";

import architecturalPlan from "../../assets/images/Hero/architectural-plan.png";
import codeScreen from "../../assets/images/Hero/code-screen.png";

function Hero() {
  const [showCode, setShowCode] = useState(false);

  /*
   * Cambio automático:
   * plano → código → plano → código...
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCode((current) => !current);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /*
   * Cuando el usuario entra al Hero con el mouse,
   * hacemos un cambio inmediato.
   *
   * Se ejecuta una sola vez al entrar al Hero,
   * no cada vez que mueve el cursor.
   */
  const handleMouseEnter = () => {
    setShowCode((current) => !current);
  };

  return (
    <section className="hero" onMouseEnter={handleMouseEnter}>
      <div className="hero__container container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            DESARROLLADORA WEB FULL-STACK &amp; ARQUITECTA
          </p>

          <h1 className="hero__title">
            De estructurar el espacio físico a programar el entorno digital.
          </h1>

          <p className="hero__description">
            Combino mi experiencia en arquitectura, sostenibilidad y diseño con
            el desarrollo web para crear soluciones digitales funcionales,
            intuitivas y centradas en las personas.
          </p>

          <div className="hero__actions">
            <a className="hero__button" href="#projects">
              Ver Proyectos
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
            className={`hero__image hero__image--plan ${
              showCode ? "hero__image--hidden" : ""
            }`}
            src={architecturalPlan}
            alt="Plano arquitectónico"
          />

          <img
            className={`hero__image hero__image--code ${
              showCode ? "hero__image--visible" : ""
            }`}
            src={codeScreen}
            alt="Código de una aplicación web"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
