import "./Header.css";

import { Link } from "react-router-dom";
import logoHeader from "../../assets/images/Header/logo-header.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <Link className="header__logo" to="/">
          <img className="header__logo-image" src={logoHeader} alt="" />
          <span>Ximena Rodríguez</span>
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
