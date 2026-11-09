import { Link } from "react-router-dom";

const styles = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  ghost: "btn--ghost",
  light: "btn--light",
  dark: "btn--dark",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  full = false,
  className = "",
  type = "button",
  ...rest
}) {
  const classes = [
    "btn",
    styles[variant] ?? styles.primary,
    `btn--${size}`,
    full ? "btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
