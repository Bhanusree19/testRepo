import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import MiniPreview from "../components/MiniPreview";

const screens = [
  { key: "onboarding-1", label: "Onboarding 01", to: "/onboarding/1", type: "onboarding", slide: 0, x: "9%", y: "3%", w: 198, r: -7, z: 2 },
  { key: "onboarding-2", label: "Onboarding 02", to: "/onboarding/2", type: "onboarding", slide: 1, x: "24%", y: "15%", w: 186, r: -3, z: 3 },
  { key: "home", label: "Home", to: "/home", type: "home", x: "41%", y: "3%", w: 230, r: -1.5, z: 6 },
  { key: "product", label: "Product Detail", to: "/product/arc-lounge-chair", type: "product", x: "60%", y: "0%", w: 218, r: 4, z: 4 },
  { key: "cart", label: "Cart", to: "/cart", type: "cart", x: "79%", y: "12%", w: 200, r: 7, z: 2 },
  { key: "splash", label: "Splash Screen", to: "/splash", type: "splash", x: "13%", y: "46%", w: 192, r: 5, z: 2 },
  { key: "login", label: "Login", to: "/login", type: "login", x: "29%", y: "55%", w: 202, r: -4, z: 3 },
  { key: "register", label: "Register", to: "/register", type: "register", x: "45%", y: "65%", w: 192, r: 3, z: 2 },
  { key: "account", label: "My Account", to: "/account", type: "account", x: "62%", y: "43%", w: 214, r: 5, z: 4 },
  { key: "onboarding-3", label: "Onboarding 03", to: "/onboarding/3", type: "onboarding", slide: 2, x: "81%", y: "52%", w: 196, r: -6, z: 3 },
];

export default function Cover() {
  return (
    <div className="cover">
      <div className="cover__blob cover__blob--grey" aria-hidden="true" />
      <div className="cover__blob cover__blob--clay" aria-hidden="true" />
      <div className="cover__blob cover__blob--olive" aria-hidden="true" />

      <header className="cover__bar">
        <div className="cover__brand">
          <svg className="cover__mark" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="9" fill="#0a0a0a" />
            <path
              d="M9 23V9l14 14V9"
              fill="none"
              stroke="#f1ede4"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="cover__word">
            NOVA <em>Living</em>
          </span>
        </div>
        <p className="cover__meta">Interior &amp; objects — a mobile shopping experience</p>
        <Link to="/splash" className="cover__enter">
          Enter app
          <Icon name="arrow-right" size={17} />
        </Link>
      </header>

      <main className="cover__board" aria-label="NOVA Living screen index">
        <div className="cover__collage">
          {screens.map((screen) => (
            <Link
              key={screen.key}
              to={screen.to}
              className={`cover-card cover-card--${screen.key}`}
              aria-label={`Open ${screen.label}`}
              style={{
                "--x": screen.x,
                "--y": screen.y,
                "--w": `${screen.w}px`,
                "--r": `${screen.r}deg`,
                "--z": screen.z,
              }}
            >
              <span className="cover-card__frame">
                <span className="cover-card__screen">
                  <MiniPreview type={screen.type} slide={screen.slide ?? 0} />
                </span>
                <span className="cover-card__hover">
                  View
                  <Icon name="arrow-up-right" size={14} />
                </span>
              </span>
              <span className="cover-card__caption">
                <span className="cover-card__dot" aria-hidden="true" />
                {screen.label}
              </span>
            </Link>
          ))}
        </div>
      </main>

      <footer className="cover__footer">
        <span>10 screens · 2026</span>
        <span className="cover__footer-line" />
        <span>Designed for slow living</span>
      </footer>
    </div>
  );
}
