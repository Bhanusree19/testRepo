import { Link, useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import ProductArt from "../components/ProductArt";
import ScreenHeader from "../components/ScreenHeader";
import { formatPrice, products } from "../data/products";

const menuSections = [
  {
    title: "Shopping",
    items: [
      { label: "Orders & tracking", icon: "package", meta: "2 active" },
      { label: "Saved pieces", icon: "heart", meta: "1" },
      { label: "Addresses", icon: "pin" },
    ],
  },
  {
    title: "Settings",
    items: [
      { label: "Payment methods", icon: "card" },
      { label: "Notifications", icon: "sparkle" },
      { label: "Help & support", icon: "shield" },
    ],
  },
];

export default function MyAccount() {
  const navigate = useNavigate();

  return (
    <div className="page page--account">
      <ScreenHeader title="My account" to="/home" right={<span className="account__status">Member</span>} />

      <section className="account__profile">
        <div className="account__avatar" aria-hidden="true">
          AH
        </div>
        <div>
          <p className="eyebrow">Member since 2021</p>
          <h1 className="account__name">Amelia Hart</h1>
          <p className="account__mail">amelia@nova.living</p>
        </div>
        <button type="button" className="icon-button account__edit" aria-label="Edit profile">
          <Icon name="arrow-up-right" size={17} />
        </button>
      </section>

      <section className="account__stats" aria-label="Account overview">
        <div>
          <strong>2</strong>
          <span>Orders</span>
        </div>
        <div>
          <strong>1</strong>
          <span>Saved</span>
        </div>
        <div>
          <strong>3</strong>
          <span>Rewards</span>
        </div>
      </section>

      <section className="account__order" aria-label="Latest order">
        <div className="account__order-head">
          <div>
            <p className="eyebrow">On its way</p>
            <h2>Order NV-20412</h2>
          </div>
          <span className="account__order-pill">Arrives Thu</span>
        </div>
        <div className="account__order-body">
          <ProductArt product={products[1]} className="account__order-art" />
          <div>
            <p className="account__order-name">Halo Floor Lamp</p>
            <p className="account__order-meta">Brass · One size · {formatPrice(products[1].price)}</p>
            <div className="account__progress" aria-hidden="true">
              <span />
            </div>
            <p className="account__order-step">Packed and ready to leave our workshop</p>
          </div>
        </div>
        <button type="button" className="account__order-link">
          Track order
          <Icon name="arrow-right" size={15} />
        </button>
      </section>

      <section className="account__rewards" aria-label="NOVA rewards">
        <div>
          <p className="eyebrow">NOVA rewards</p>
          <h2>3 pieces closer to a gift.</h2>
          <p>Collect a reward for every $250 spent. You&apos;re 60% of the way there.</p>
        </div>
        <span className="account__rewards-ring" aria-hidden="true">
          <svg viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="4" />
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="#f1ede4"
              strokeWidth="4"
              strokeDasharray="113"
              strokeDashoffset="45"
              strokeLinecap="round"
              transform="rotate(-90 22 22)"
            />
          </svg>
        </span>
      </section>

      {menuSections.map((section) => (
        <section className="account__menu" key={section.title} aria-label={section.title}>
          <h2 className="account__menu-title">{section.title}</h2>
          <ul>
            {section.items.map((item) => (
              <li key={item.label}>
                <button type="button" className="account__menu-row">
                  <span className="account__menu-icon">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <span className="account__menu-label">{item.label}</span>
                  {item.meta ? <span className="account__menu-meta">{item.meta}</span> : null}
                  <Icon name="chevron-right" size={16} />
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <Link to="/home" className="btn btn--secondary btn--lg btn--full account__shop">
        Continue shopping
      </Link>

      <button type="button" className="account__signout" onClick={() => navigate("/login")}>
        <Icon name="logout" size={17} />
        Sign out
      </button>

      <p className="account__version">NOVA Living · v1.0</p>
    </div>
  );
}
