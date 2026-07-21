import { FaWhatsapp } from "react-icons/fa";
import type { Product } from "../../types/Product";
import "./ProductCard.css";

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    const whatsappNumber = "5490000000000";

    const whatsappMessage = encodeURIComponent(
        `Hola! Quería consultar por el producto: ${product.name}`
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const formattedPrice = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0,
    }).format(product.price);

    return (
        <article className="product-card">
            <div className="product-card__image-container">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-card__image"
                />
            </div>

            <div className="product-card__content">
                <span className="product-card__category">
                    {product.category}
                </span>

                <h3 className="product-card__name">
                    {product.name}
                </h3>

                <p className="product-card__price">
                    {formattedPrice}
                </p>

                {product.description && (
                    <p className="product-card__description">
                        {product.description}
                    </p>
                )}

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="product-card__button"
                >
                    <FaWhatsapp />
                    Consultar
                </a>
            </div>
        </article>
    );
}

export default ProductCard;