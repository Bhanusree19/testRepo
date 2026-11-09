import ProductArt from "./ProductArt";
import { products } from "../data/products";

function Mark({ light = true }) {
  return (
    <svg className="mini__mark" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill={light ? "#0a0a0a" : "#fffdf8"} />
      <path
        d="M9 23V9l14 14V9"
        fill="none"
        stroke={light ? "#fffdf8" : "#0a0a0a"}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Lines({ widths = ["80%", "58%"], className = "" }) {
  return (
    <div className={`mini__lines ${className}`}>
      {widths.map((width, index) => (
        <span key={index} style={{ width }} />
      ))}
    </div>
  );
}

function Dots({ count = 3, active = 0 }) {
  return (
    <div className="mini__dots">
      {Array.from({ length: count }).map((_, index) => (
        <span key={index} className={index === active ? "is-active" : ""} />
      ))}
    </div>
  );
}

export default function MiniPreview({ type, slide = 0 }) {
  if (type === "splash") {
    return (
      <div className="mini mini--splash">
        <Mark />
        <span className="mini__word">NOVA</span>
        <span className="mini__caption">Living</span>
        <span className="mini__pill mini__pill--light">Enter</span>
      </div>
    );
  }

  if (type === "onboarding") {
    const accents = ["#b0553a", "#5f6b4f", "#8c6b4c"];
    return (
      <div className="mini mini--onboarding">
        <span className="mini__eyebrow">0{slide + 1} — Considered living</span>
        <div className="mini__illustration" style={{ "--mini-accent": accents[slide] }}>
          <svg viewBox="0 0 120 100" aria-hidden="true">
            {slide === 0 ? (
              <>
                <rect x="14" y="26" width="88" height="56" rx="10" fill="#d8c9b6" />
                <rect x="22" y="44" width="72" height="38" rx="8" fill="#b9a98d" />
                <circle cx="76" cy="24" r="14" fill="#b0553a" opacity="0.7" />
                <path d="M30 74h56" stroke="#3d3a33" strokeWidth="3" strokeLinecap="round" />
              </>
            ) : null}
            {slide === 1 ? (
              <>
                <path d="M20 78 V28 a30 30 0 0 1 60 0 v50" fill="none" stroke="#5f6b4f" strokeWidth="4" />
                <circle cx="50" cy="46" r="14" fill="#b9a98d" />
                <rect x="76" y="48" width="20" height="30" rx="4" fill="#8c6b4c" />
                <path d="M78 72h16" stroke="#3d3a33" strokeWidth="2" />
              </>
            ) : null}
            {slide === 2 ? (
              <>
                <rect x="18" y="30" width="82" height="44" rx="8" fill="#d8c9b6" />
                <path d="M18 44h82" stroke="#8c6b4c" strokeWidth="3" />
                <circle cx="34" cy="66" r="7" fill="#5f6b4f" />
                <circle cx="84" cy="66" r="7" fill="#5f6b4f" />
                <path d="M46 58h28" stroke="#3d3a33" strokeWidth="3" strokeLinecap="round" />
              </>
            ) : null}
          </svg>
        </div>
        <Lines widths={["88%", "70%", "52%"]} />
        <Dots active={slide} />
      </div>
    );
  }

  if (type === "login" || type === "register") {
    return (
      <div className="mini mini--form">
        <Mark light={false} />
        <span className="mini__form-title">{type === "login" ? "Welcome back" : "Create account"}</span>
        <Lines widths={["62%"]} className="mini__lines--muted" />
        <span className="mini__field" />
        <span className="mini__field" />
        {type === "register" ? <span className="mini__field" /> : null}
        <span className="mini__pill">{type === "login" ? "Sign in" : "Join NOVA"}</span>
        <span className="mini__foot" />
      </div>
    );
  }

  if (type === "home") {
    return (
      <div className="mini mini--home">
        <div className="mini__home-top">
          <div>
            <span className="mini__hello">Good morning</span>
            <span className="mini__name">Amelia</span>
          </div>
          <span className="mini__avatar" />
        </div>
        <span className="mini__search" />
        <div className="mini__tiles">
          {[products[0], products[1], products[2], products[3]].map((product) => (
            <ProductArt key={product.id} product={product} className="mini__tile-art" />
          ))}
        </div>
      </div>
    );
  }

  if (type === "product") {
    return (
      <div className="mini mini--product">
        <ProductArt product={products[0]} className="mini__hero-art" />
        <span className="mini__eyebrow">Seating</span>
        <span className="mini__product-name">Arc Lounge Chair</span>
        <span className="mini__price">$680</span>
        <Lines widths={["94%", "76%"]} className="mini__lines--muted" />
        <span className="mini__pill">Add to bag</span>
      </div>
    );
  }

  if (type === "cart") {
    return (
      <div className="mini mini--cart">
        <span className="mini__cart-title">Your bag</span>
        {[products[0], products[2]].map((product) => (
          <div className="mini__cart-row" key={product.id}>
            <ProductArt product={product} className="mini__cart-art" />
            <div>
              <span className="mini__cart-name">{product.name}</span>
              <span className="mini__cart-meta">1 × ${product.price}</span>
            </div>
          </div>
        ))}
        <div className="mini__cart-total">
          <span>Subtotal</span>
          <strong>$776</strong>
        </div>
        <span className="mini__pill">Checkout</span>
      </div>
    );
  }

  return (
    <div className="mini mini--account">
      <span className="mini__account-avatar" />
      <span className="mini__account-name">Amelia Hart</span>
      <span className="mini__account-mail">amelia@nova.living</span>
      <div className="mini__account-stats">
        <span>2<em>Orders</em></span>
        <span>1<em>Saved</em></span>
        <span>3<em>Rewards</em></span>
      </div>
      {["Orders", "Addresses", "Payment"].map((row) => (
        <div className="mini__account-row" key={row}>
          <span>{row}</span>
          <span>›</span>
        </div>
      ))}
    </div>
  );
}
