import "./Header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <Link className="header__logo" to="/">
          Ximena Rodríguez
        </Link>

        <nav className="header__nav" aria-label="Navegación principal">
          <Link className="header__link" to="/sobre-mi">
            Sobre mí
          </Link>

          <Link className="header__link" to="/proyectos">
            Proyectos
          </Link>

          <Link className="header__link" to="/contacto">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
