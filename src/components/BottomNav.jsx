import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import { useCart } from "../context/CartContext";

const links = [
  { to: "/home", label: "Home", icon: "home", end: true },
  { to: "/home#collection", label: "Shop", icon: "grid" },
  { to: "/cart", label: "Cart", icon: "bag" },
  { to: "/account", label: "Account", icon: "user" },
];

export default function BottomNav() {
  const { count } = useCart();

  return (
    <nav className="bottom-nav" aria-label="Primary">
      {links.map((link) => (
        <NavLink
          key={link.label}
          to={link.to}
          end={link.end}
          className={({ isActive }) => `bottom-nav__link ${isActive ? "is-active" : ""}`}
        >
          <span className="bottom-nav__icon">
            <Icon name={link.icon} size={21} />
            {link.label === "Cart" && count > 0 ? <span className="bottom-nav__badge">{count}</span> : null}
          </span>
          <span className="bottom-nav__label">{link.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
