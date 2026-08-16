import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <a className="header__logo" href="/">
          Ximena Rodríguez
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <a className="header__link" href="#about">
            Sobre mí
          </a>

          <a className="header__link" href="#projects">
            Proyectos
          </a>

          <a className="header__link" href="#contact">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
