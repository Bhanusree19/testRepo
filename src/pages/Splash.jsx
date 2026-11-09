import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function Splash() {
  return (
    <div className="splash">
      <div className="splash__orb splash__orb--one" aria-hidden="true" />
      <div className="splash__orb splash__orb--two" aria-hidden="true" />
      <div className="splash__grain" aria-hidden="true" />

      <div className="splash__center">
        <div className="splash__mark">
          <svg viewBox="0 0 32 32" aria-hidden="true">
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
        </div>
        <p className="splash__eyebrow">Interior &amp; objects</p>
        <h1 className="splash__title">
          NOVA
          <span className="splash__script">Living</span>
        </h1>
        <p className="splash__tagline">
          Thoughtfully made furniture and objects for calm, considered homes.
        </p>
      </div>

      <div className="splash__actions">
        <Link to="/onboarding/1" className="btn btn--dark btn--lg btn--full">
          Begin
          <Icon name="arrow-right" size={18} />
        </Link>
        <Link to="/login" className="splash__skip">
          I already have an account
        </Link>
      </div>

      <p className="splash__foot">Est. 2019 — Copenhagen &amp; Portland</p>
    </div>
  );
}
