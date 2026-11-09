import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import ProductArt from "../components/ProductArt";
import ProductCard from "../components/ProductCard";
import QuantityStepper from "../components/QuantityStepper";
import ScreenHeader from "../components/ScreenHeader";
import { formatPrice, getProduct, products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProduct(id) ?? products[0];
  const { addItem, count } = useCart();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [saved, setSaved] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState("details");

  const related = products.filter((item) => item.id !== product.id).slice(0, 3);

  const handleAdd = () => {
    addItem(product.id, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="page page--product">
      <div className="product-detail__hero">
        <ProductArt product={product} className="product-detail__art" />
        <div className="product-detail__nav">
          <ScreenHeader
            transparent
            right={
              <div className="product-detail__nav-right">
                <button
                  type="button"
                  className={`icon-button ${saved ? "is-active" : ""}`}
                  onClick={() => setSaved((current) => !current)}
                  aria-label={saved ? "Remove from saved" : "Save product"}
                  aria-pressed={saved}
                >
                  <Icon name="heart" size={19} />
                </button>
                <Link to="/cart" className="icon-button icon-button--badge" aria-label={`Open cart, ${count} items`}>
                  <Icon name="bag" size={19} />
                  {count > 0 ? <span>{count}</span> : null}
                </Link>
              </div>
            }
          />
        </div>
        {product.tag ? <span className="product-detail__tag">{product.tag}</span> : null}
      </div>

      <div className="product-detail__sheet">
        <div className="product-detail__handle" aria-hidden="true" />
        <div className="product-detail__head">
          <div>
            <p className="eyebrow">{product.category}</p>
            <h1 className="product-detail__title">{product.name}</h1>
          </div>
          <div className="product-detail__price">
            <strong>{formatPrice(product.price)}</strong>
            <span>{product.material}</span>
          </div>
        </div>

        <div className="product-detail__rating">
          <span className="stars" aria-hidden="true">
            <Icon name="star" size={13} />
            <Icon name="star" size={13} />
            <Icon name="star" size={13} />
            <Icon name="star" size={13} />
            <Icon name="star" size={13} />
          </span>
          <span>
            {product.rating} · {product.reviews} reviews
          </span>
        </div>

        <p className="product-detail__blurb">{product.blurb}</p>

        <div className="product-detail__option">
          <div className="product-detail__option-head">
            <span>Finish</span>
            <strong>{selectedColor}</strong>
          </div>
          <div className="swatches">
            {product.colors.map((color, index) => (
              <button
                key={color}
                type="button"
                className={`swatch swatch--${index} ${selectedColor === color ? "is-active" : ""}`}
                onClick={() => setSelectedColor(color)}
                aria-pressed={selectedColor === color}
                aria-label={color}
                title={color}
              />
            ))}
          </div>
        </div>

        <div className="product-detail__option">
          <div className="product-detail__option-head">
            <span>Size</span>
            <strong>{selectedSize}</strong>
          </div>
          <div className="pill-group">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`pill ${selectedSize === size ? "is-active" : ""}`}
                onClick={() => setSelectedSize(size)}
                aria-pressed={selectedSize === size}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="product-detail__qty">
          <span>Quantity</span>
          <QuantityStepper value={quantity} onChange={setQuantity} />
        </div>

        <div className="product-detail__accordion">
          {[
            {
              key: "details",
              label: "Details",
              body: `${product.material} · ${product.dimensions}. Finished and inspected by hand in our workshop.`,
            },
            {
              key: "delivery",
              label: "Delivery & returns",
              body: "Free carbon-neutral delivery on orders over $500. 100-night home trial and free returns within 30 days.",
            },
            {
              key: "care",
              label: "Care",
              body: "Dust with a soft dry cloth. Avoid direct sunlight. Professional cleaning recommended for upholstery.",
            },
          ].map((item) => (
            <div className={`accordion ${detailsOpen === item.key ? "is-open" : ""}`} key={item.key}>
              <button
                type="button"
                className="accordion__trigger"
                onClick={() => setDetailsOpen(detailsOpen === item.key ? "" : item.key)}
                aria-expanded={detailsOpen === item.key}
              >
                <span>{item.label}</span>
                <Icon name="chevron-down" size={17} />
              </button>
              {detailsOpen === item.key ? <p className="accordion__body">{item.body}</p> : null}
            </div>
          ))}
        </div>

        <section className="product-detail__related" aria-label="You may also like">
          <div className="home__section-head">
            <h2>You may also like</h2>
            <Link to="/home" className="text-link">
              See all
            </Link>
          </div>
          <div className="related-row">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} compact />
            ))}
          </div>
        </section>
      </div>

      <div className="product-detail__bar">
        <div className="product-detail__bar-price">
          <span>Total</span>
          <strong>{formatPrice(product.price * quantity)}</strong>
        </div>
        <button
          type="button"
          className={`btn btn--lg product-detail__add ${added ? "is-added" : ""}`}
          onClick={added ? () => navigate("/cart") : handleAdd}
        >
          {added ? (
            <>
              View bag
              <Icon name="check" size={18} />
            </>
          ) : (
            <>
              Add to bag
              <Icon name="bag" size={18} />
            </>
          )}
        </button>
      </div>
      <div className={`toast ${added ? "is-visible" : ""}`} role="status" aria-live="polite">
        <Icon name="check" size={16} />
        Added {quantity} × {product.name}
      </div>
    </div>
  );
}
