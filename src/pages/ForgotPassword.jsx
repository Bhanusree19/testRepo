import { Link } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import FormField from "../components/FormField";
import { MailIcon } from "../components/icons";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      setError("Enter the email address linked to your account.");
      setStatus("");
      return;
    }

    setError("");
    setStatus("A password reset link is on its way to your inbox.");
  }

  return (
    <AuthLayout>
      <div className="page-title">
        <h1>Forgot Password?</h1>
        <p>Enter your email and we’ll send you a link to reset your password.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <FormField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            icon={<MailIcon />}
          />
        </div>

        <button type="submit" className="button">
          Send Reset Link
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
        Remembered it? <Link to="/">Back to Log In</Link>
      </p>
    </AuthLayout>
  );
}
