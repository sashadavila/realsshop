import { FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo/logo.jpeg";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a
          href="#inicio"
          className="navbar__brand"
          aria-label="Ir al inicio"
        >
          <div className="navbar__logo-wrapper">
            <img
              src={logo}
              alt="Logo de Real Sex Shop"
              className="navbar__logo"
            />
          </div>

          <span className="navbar__brand-name">
            Real Sex Shop
          </span>
        </a>

        <nav
          className="navbar__links"
          aria-label="Navegación principal"
        >
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#contacto">Contacto</a>

          <a
            href="https://www.instagram.com/realsexshop.lacosta?igsh=MThvMzhyc2VwcWlrbA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="navbar__instagram"
            aria-label="Instagram de Real Sex Shop"
          >
            <FaInstagram />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;