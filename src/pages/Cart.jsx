import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import ProductArt from "../components/ProductArt";
import ProductCard from "../components/ProductCard";
import QuantityStepper from "../components/QuantityStepper";
import ScreenHeader from "../components/ScreenHeader";
import { formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { detailedItems, subtotal, shipping, total, count, setQuantity, removeItem, clearCart, recommended } = useCart();
  const [promo, setPromo] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [order, setOrder] = useState(null);

  const applyPromo = (event) => {
    event.preventDefault();
    if (promo.trim().toUpperCase() === "NOVA10") {
      setPromoMessage("NOVA10 applied — 10% off at checkout.");
    } else if (promo.trim() === "") {
      setPromoMessage("Enter a code to apply.");
    } else {
      setPromoMessage("That code isn't valid. Try NOVA10.");
    }
  };

  const checkout = () => {
    setOrder({ total, count });
    clearCart();
  };

  if (order) {
    return (
      <div className="page page--cart">
        <div className="cart-success">
          <div className="cart-success__mark">
            <Icon name="check" size={30} strokeWidth={2} />
          </div>
          <p className="eyebrow">Order confirmed</p>
          <h1>Thank you, Amelia.</h1>
          <p>
            Your {order.count} {order.count === 1 ? "piece is" : "pieces are"} being prepared. A confirmation is on its
            way to amelia@nova.living.
          </p>
          <div className="cart-success__card">
            <div>
              <span>Order total</span>
              <strong>{formatPrice(order.total)}</strong>
            </div>
            <div>
              <span>Delivery</span>
              <strong>3–5 working days</strong>
            </div>
            <div>
              <span>Reference</span>
              <strong>NV-20418</strong>
            </div>
          </div>
          <div className="cart-success__actions">
            <button type="button" className="btn btn--primary btn--lg btn--full" onClick={() => navigate("/home")}>
              Continue shopping
              <Icon name="arrow-right" size={18} />
            </button>
            <button type="button" className="btn btn--ghost btn--lg btn--full" onClick={() => navigate("/account")}>
              View your account
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page page--cart">
      <ScreenHeader
        title="Your bag"
        to="/home"
        right={
          <span className="cart__count">
            {count} {count === 1 ? "item" : "items"}
          </span>
        }
      />

      {detailedItems.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty__art" aria-hidden="true">
            <Icon name="bag" size={30} />
          </div>
          <h1>Your bag is waiting.</h1>
          <p>Pieces you add will appear here. Take your time — good things are worth considering.</p>
          <Link to="/home" className="btn btn--primary btn--lg">
            Browse the collection
            <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      ) : (
        <>
          <div className="cart__shipping">
            <div className="cart__shipping-copy">
              <Icon name="truck" size={17} />
              {shipping === 0 ? (
                <span>
                  You&apos;ve unlocked <strong>free delivery</strong>.
                </span>
              ) : (
                <span>
                  {formatPrice(500 - subtotal)} away from <strong>free delivery</strong>.
                </span>
              )}
            </div>
            <div className="cart__shipping-track">
              <span style={{ width: `${Math.min((subtotal / 500) * 100, 100)}%` }} />
            </div>
          </div>

          <ul className="cart__list">
            {detailedItems.map((item) => (
              <li className="cart-item" key={item.id}>
                <Link to={`/product/${item.id}`} className="cart-item__media">
                  <ProductArt product={item.product} />
                </Link>
                <div className="cart-item__body">
                  <div className="cart-item__top">
                    <div>
                      <p className="cart-item__category">{item.product.category}</p>
                      <Link to={`/product/${item.id}`} className="cart-item__name">
                        {item.product.name}
                      </Link>
                      <p className="cart-item__variant">
                        {item.product.colors[0]} · {item.product.sizes[0]}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="cart-item__remove"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.product.name}`}
                    >
                      <Icon name="trash" size={16} />
                    </button>
                  </div>
                  <div className="cart-item__bottom">
                    <QuantityStepper
                      value={item.quantity}
                      onChange={(quantity) => setQuantity(item.id, quantity)}
                      label={`${item.product.name} quantity`}
                    />
                    <strong className="cart-item__price">{formatPrice(item.lineTotal)}</strong>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <form className="cart__promo" onSubmit={applyPromo}>
            <Icon name="sparkle" size={17} />
            <input
              type="text"
              placeholder="Promo code (try NOVA10)"
              value={promo}
              onChange={(event) => {
                setPromo(event.target.value);
                setPromoMessage("");
              }}
              aria-label="Promo code"
            />
            <button type="submit">Apply</button>
          </form>
          {promoMessage ? <p className="cart__promo-message">{promoMessage}</p> : null}

          <div className="cart__summary">
            <div>
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <div>
              <span>Delivery</span>
              <strong>{shipping === 0 ? "Free" : formatPrice(shipping)}</strong>
            </div>
            <div className="cart__summary-total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>
          </div>

          <button type="button" className="btn btn--primary btn--lg btn--full cart__checkout" onClick={checkout}>
            Checkout · {formatPrice(total)}
            <Icon name="arrow-right" size={18} />
          </button>
          <p className="cart__secure">
            <Icon name="shield" size={14} /> Secure checkout · 30-day returns
          </p>
        </>
      )}

      {recommended.length > 0 ? (
        <section className="cart__recommended" aria-label="You may also like">
          <div className="home__section-head">
            <h2>Complete the room</h2>
            <Link to="/home" className="text-link">
              See all
            </Link>
          </div>
          <div className="related-row">
            {recommended.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
