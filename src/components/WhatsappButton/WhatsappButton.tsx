import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappButton.css";

function WhatsappButton() {
  const whatsappNumber = "5490000000000";

  const message = encodeURIComponent(
    "Hola, quería consultar por los productos de Real Sex Shop."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label="Consultar por WhatsApp"
      title="Consultar por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;