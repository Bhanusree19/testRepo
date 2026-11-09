import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import TextField from "../components/ui/TextField";

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [agreed, setAgreed] = useState(true);

  const update = (name) => (event) => {
    setValues((current) => ({ ...current, [name]: event.target.value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (values.name.trim().length < 2) nextErrors.name = "Tell us what to call you.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "Enter a valid email address.";
    if (values.password.length < 6) nextErrors.password = "Use at least 6 characters.";
    if (!agreed) nextErrors.terms = "Please accept the terms to continue.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      navigate("/home");
    }
  };

  return (
    <div className="auth">
      <header className="auth__top">
        <button type="button" className="icon-button" onClick={() => navigate("/login")} aria-label="Go back">
          <Icon name="arrow-left" size={20} />
        </button>
        <Link to="/login" className="auth__top-link">
          Sign in
        </Link>
      </header>

      <div className="auth__intro">
        <p className="eyebrow">Join NOVA</p>
        <h1 className="auth__title">Make a home that feels like you.</h1>
        <p className="auth__subtitle">One account for saved pieces, easy reorders and early access to new collections.</p>
      </div>

      <form className="auth__form" onSubmit={submit} noValidate>
        <TextField
          label="Full name"
          name="name"
          autoComplete="name"
          placeholder="Amelia Hart"
          value={values.name}
          onChange={update("name")}
          error={errors.name}
          icon={<Icon name="user" size={17} />}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={update("email")}
          error={errors.email}
          icon={<Icon name="pin" size={17} />}
        />
        <TextField
          label="Password"
          hint="6+ characters"
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="Create a password"
          value={values.password}
          onChange={update("password")}
          error={errors.password}
          icon={<Icon name="shield" size={17} />}
        />

        <label className="checkbox">
          <input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} />
          <span className="checkbox__box" aria-hidden="true">
            <Icon name="check" size={12} strokeWidth={2.4} />
          </span>
          <span>
            I agree to the <a href="#terms">terms of service</a> and <a href="#privacy">privacy policy</a>.
          </span>
        </label>
        {errors.terms ? (
          <p className="auth__error" role="alert">
            {errors.terms}
          </p>
        ) : null}

        <button type="submit" className="btn btn--primary btn--lg btn--full">
          Create account
          <Icon name="arrow-right" size={18} />
        </button>
      </form>

      <p className="auth__foot">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}
