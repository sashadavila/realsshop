import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logo">Real Sex Shop</span>

          <p>
            Productos seleccionados para el bienestar, el placer y el cuidado
            personal.
          </p>
        </div>

        <nav className="footer__links" aria-label="Navegación del pie de página">
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="footer__socials">
          <a
            href="https://www.instagram.com/realsexshop.lacosta?igsh=MThvMzhyc2VwcWlrbA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/5490000000000"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {currentYear} Real Sex Shop. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;