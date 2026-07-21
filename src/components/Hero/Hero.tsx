import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import logoHero from "../../assets/logo/logo2.jpg";
import "./Hero.css";

function Hero() {
  const whatsappNumber = "5490000000000";

  const whatsappMessage = encodeURIComponent(
    "Hola, quería consultar por los productos de Real Sex Shop."
  );

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="hero" id="inicio">
      <div className="hero__decoration hero__decoration--one" />
      <div className="hero__decoration hero__decoration--two" />

      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            Bienestar, placer y conexión
          </span>

          <h1>
            Descubrí nuevas formas de
            <span> disfrutar y conectar</span>
          </h1>

          <p>
            Encontrá productos seleccionados para acompañar tu
            bienestar, explorar nuevas experiencias y disfrutar
            cada momento con libertad y confianza.
          </p>

          <div className="hero__buttons">
            <a href="#catalogo" className="hero__button hero__button--primary">
              Ver catálogo
              <FaArrowRight />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hero__button hero__button--secondary"
            >
              <FaWhatsapp />
              Consultar
            </a>
          </div>

          <div className="hero__details">
            <span>Atención personalizada</span>
            <span>Consultas privadas</span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-background" />

          <div className="hero__image-wrapper">
            <img
              src={logoHero}
              alt="Real Sex Shop"
              className="hero__image"
            />
          </div>

          <div className="hero__floating-card">
            <span className="hero__floating-icon">♡</span>

            <div>
              <strong>Elegí a tu manera</strong>
              <p>Con confianza y privacidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;