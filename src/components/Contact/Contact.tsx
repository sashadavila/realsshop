import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const whatsappNumber = "5490000000000";

  const whatsappMessage = encodeURIComponent(
    "Hola, quería hacer una consulta sobre los productos."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="contact" id="contacto">
      <div className="contact__container">
        <div className="contact__content">
          <span className="contact__eyebrow">Contacto</span>

          <h2>¿Tenés alguna consulta?</h2>

          <p>
            Escribinos de manera privada y te ayudamos a encontrar el producto
            ideal para vos.
          </p>

          <div className="contact__buttons">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="contact__button contact__button--whatsapp"
            >
              <FaWhatsapp />
              Consultar por WhatsApp
            </a>

            <a
              href="https://www.instagram.com/realsexshop.lacosta?igsh=MThvMzhyc2VwcWlrbA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="contact__button contact__button--instagram"
            >
              <FaInstagram />
              Ver Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;