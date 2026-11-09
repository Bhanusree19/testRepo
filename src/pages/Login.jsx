import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import TextField from "../components/ui/TextField";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const update = (name) => (event) => {
    setValues((current) => ({ ...current, [name]: event.target.value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (values.password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      navigate("/home");
    }
  };

  return (
    <div className="auth">
      <header className="auth__top">
        <button type="button" className="icon-button" onClick={() => navigate("/onboarding/3")} aria-label="Go back">
          <Icon name="arrow-left" size={20} />
        </button>
        <Link to="/register" className="auth__top-link">
          Create account
        </Link>
      </header>

      <div className="auth__intro">
        <span className="auth__mark">
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
        </span>
        <p className="eyebrow">Welcome back</p>
        <h1 className="auth__title">Good to see you again.</h1>
        <p className="auth__subtitle">Sign in to revisit your saved pieces and follow your orders.</p>
      </div>

      <form className="auth__form" onSubmit={submit} noValidate>
        <TextField
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={update("email")}
          error={errors.email}
          icon={<Icon name="user" size={17} />}
        />
        <TextField
          label="Password"
          hint="Forgot?"
          type={showPassword ? "text" : "password"}
          name="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          value={values.password}
          onChange={update("password")}
          error={errors.password}
          icon={<Icon name="shield" size={17} />}
          trailing={
            <button
              type="button"
              className="field__reveal"
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          }
        />

        <button type="submit" className="btn btn--primary btn--lg btn--full">
          Sign in
          <Icon name="arrow-right" size={18} />
        </button>
      </form>

      <div className="auth__divider">
        <span>or</span>
      </div>

      <button type="button" className="btn btn--secondary btn--lg btn--full" onClick={() => navigate("/home")}>
        Continue as guest
      </button>

      <p className="auth__foot">
        New to NOVA? <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
}
