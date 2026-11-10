import { Link } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import Divider from "../components/Divider";
import FormField from "../components/FormField";
import SocialButton from "../components/SocialButton";
import {
  EyeIcon,
  FacebookIcon,
  GoogleIcon,
  LockIcon,
  MailIcon,
} from "../components/icons";

export default function Login() {
  const [email, setEmail] = useState("rifqi.naufal@mail.com");
  const [password, setPassword] = useState("password12");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !password) {
      setError("Enter your email and password to continue.");
      setStatus("");
      return;
    }

    setError("");
    setStatus("Welcome back! You are now signed in.");
  }

  function handleSocialLogin(provider) {
    setError("");
    setStatus(`${provider} sign-in is not configured in this demo.`);
  }

  return (
    <AuthLayout>
      <div className="page-title">
        <h1>Welcome Back!</h1>
        <p>Enter your email to start shopping and get awesome deals today!</p>
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
          <FormField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
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
          <Link className="text-link" to="/forgot-password">
            Forgot your password?
          </Link>
        </div>

        <button type="submit" className="button">
          Log In
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

      <Divider />

      <div className="social-buttons">
        <SocialButton
          icon={<GoogleIcon />}
          onClick={() => handleSocialLogin("Google")}
        >
          Log In with Google
        </SocialButton>
        <SocialButton
          icon={<FacebookIcon />}
          onClick={() => handleSocialLogin("Facebook")}
        >
          Log In with Facebook
        </SocialButton>
      </div>

      <p className="auth-footer">
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </AuthLayout>
  );
}
