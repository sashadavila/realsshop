import { products } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import "./Catalog.css";

function Catalog() {
  return (
    <section className="catalog" id="catalogo">
      <div className="catalog__container">
        <div className="catalog__header">
          <span className="catalog__eyebrow">
            Nuestro catálogo
          </span>

          <h2>Encontrá tu producto ideal</h2>

          <p>
            Explorá nuestra selección de productos pensados para el placer,
            el bienestar y el cuidado personal.
          </p>
        </div>

        <div className="catalog__grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalog;