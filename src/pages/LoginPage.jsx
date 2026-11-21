import { useState } from 'react';
import { EyeIcon, FacebookIcon, GoogleIcon, LockIcon, MailIcon } from '../components/Icons';
import { FormField } from '../components/FormField';

export function LoginPage() {
  const [email, setEmail] = useState('rifqi.naufal@mail.com');
  const [password, setPassword] = useState('password12');
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState('');

  function submit(event) {
    event.preventDefault();
    setNotice(email && password ? 'You’re ready to log in.' : 'Enter your email and password to continue.');
  }

  return (
    <main className="page-shell">
      <section className="phone-screen" aria-label="Login">
        <header className="status-bar" aria-hidden="true">
          <span>18:41</span><span className="status-icons">▮▮▮ <i>⌁</i> <b></b></span>
        </header>
        <div className="main-content">
          <div className="intro">
            <h1>Welcome Back!</h1>
            <p>Enter your email to start shopping and get awesome deals today!</p>
          </div>
          <form onSubmit={submit}>
            <div className="form-group">
              <FormField icon={<MailIcon />} label="Email">
                <input aria-label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
              </FormField>
              <FormField icon={<LockIcon />} label="Password" trailing={<button className="eye-button" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}><EyeIcon visible={showPassword} /></button>}>
                <input aria-label="Password" type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)} />
              </FormField>
              <button className="text-action" type="button" onClick={() => setNotice('Password recovery is not available in this preview.')}>Forgot your password?</button>
            </div>
            <button className="primary-button" type="submit">Log In</button>
          </form>
          <div className="divider"><span></span><em>OR</em><span></span></div>
          <div className="social-buttons">
            <button type="button" className="social-button" onClick={() => setNotice('Google sign-in is not available in this preview.')}><GoogleIcon />Log In with Google</button>
            <button type="button" className="social-button" onClick={() => setNotice('Facebook sign-in is not available in this preview.')}><FacebookIcon />Log In with Facebook</button>
          </div>
          <p className="register-copy">Don’t have an account? <button type="button" onClick={() => setNotice('Registration is not available in this preview.')}>Register</button></p>
          <p className="notice" role="status">{notice}</p>
        </div>
        <footer className="home-indicator" aria-hidden="true"><span /></footer>
      </section>
    </main>
  );
}
