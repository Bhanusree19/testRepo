import { Link } from "react-router-dom";

export default function Logo({ to = "/", compact = false, light = false, className = "" }) {
  return (
    <Link
      to={to}
      className={`logo ${compact ? "logo--compact" : ""} ${light ? "logo--light" : ""} ${className}`}
      aria-label="NOVA Living — home"
    >
      <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="currentColor" />
        <path
          d="M9 23V9l14 14V9"
          fill="none"
          stroke="var(--paper)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="logo__word">
        NOVA<span className="logo__sub">Living</span>
      </span>
    </Link>
  );
}
