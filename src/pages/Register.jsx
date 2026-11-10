import { Link } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import FormField from "../components/FormField";
import {
  EyeIcon,
  LockIcon,
  MailIcon,
  UserIcon,
} from "../components/icons";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !password) {
      setError("Complete all fields to create your account.");
      setStatus("");
      return;
    }

    setError("");
    setStatus("Your account is ready. Welcome aboard!");
  }

  return (
    <AuthLayout>
      <div className="page-title">
        <h1>Create Account</h1>
        <p>Join us to start shopping and get awesome deals today!</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <FormField
            label="Full Name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            icon={<UserIcon />}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            icon={<MailIcon />}
          />
          <FormField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
            icon={<LockIcon />}
            trailing={
              <button
                type="button"
                className="field__action"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
              >
                <EyeIcon off={showPassword} />
              </button>
            }
          />
        </div>

        <button type="submit" className="button">
          Create Account
        </button>
      </form>

      {error ? (
        <p className="form-message form-message--error" role="alert">
          {error}
        </p>
      ) : null}
      {status ? (
        <p className="form-message" role="status">
          {status}
        </p>
      ) : null}

      <p className="auth-footer">
        Already have an account? <Link to="/">Log In</Link>
      </p>
    </AuthLayout>
  );
}
