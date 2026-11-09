import { Link } from "react-router-dom";
import Icon from "./Icon";
import ProductArt from "./ProductArt";
import { formatPrice } from "../data/products";

export default function ProductCard({ product, compact = false }) {
  return (
    <Link to={`/product/${product.id}`} className={`product-card ${compact ? "product-card--compact" : ""}`}>
      <div className="product-card__media">
        <ProductArt product={product} />
        {product.tag ? <span className="product-card__tag">{product.tag}</span> : null}
        <span className="product-card__open" aria-hidden="true">
          <Icon name="arrow-up-right" size={15} />
        </span>
      </div>
      <div className="product-card__body">
        <div>
          <p className="product-card__category">{product.category}</p>
          <h3 className="product-card__name">{product.name}</h3>
        </div>
        <span className="product-card__price">{formatPrice(product.price)}</span>
      </div>
    </Link>
  );
}
