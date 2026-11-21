export function MailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5A2.5 2.5 0 0 1 6 4h12a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 18 20H6a2.5 2.5 0 0 1-2.5-2.5v-11Zm.7-.7L12 12l7.8-6.2M4 19l5.7-5.7M20 19l-5.7-5.7" /></svg>;
}

export function LockIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>;
}

export function EyeIcon({ visible }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.4-5 9.5-5 9.5 5 9.5 5-3.4 5-9.5 5-9.5-5-9.5-5Z" /><circle cx="12" cy="12" r="2.4" />{!visible && <path d="m4 4 16 16" />}</svg>;
}

export function GoogleIcon() {
  return <svg className="brand-google" viewBox="0 0 18 18" aria-hidden="true"><path fill="#FFC107" d="M17.6 9.2c0-.64-.06-1.26-.16-1.85H9v3.5h4.83a4.13 4.13 0 0 1-1.79 2.71v2.27h2.92c1.71-1.58 2.64-3.9 2.64-6.63Z"/><path fill="#FF3D00" d="M9 18c2.43 0 4.47-.8 5.96-2.17l-2.92-2.27c-.8.54-1.83.86-3.04.86-2.34 0-4.33-1.58-5.04-3.7H.94V13c1.48 2.94 4.52 5 8.06 5Z"/><path fill="#4CAF50" d="M3.96 10.72A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.17.28-1.72V5H.94A9 9 0 0 0 0 9c0 1.45.35 2.82.94 4l3.02-2.28Z"/><path fill="#1976D2" d="M9 3.58c1.32 0 2.51.45 3.44 1.34l2.58-2.58C13.47.9 11.43 0 9 0 5.52 0 2.48 2.06.94 5l3.02 2.28C4.67 5.16 6.66 3.58 9 3.58Z"/></svg>;
}

export function FacebookIcon() {
  return <svg className="brand-facebook" viewBox="0 0 16 16" aria-hidden="true"><path fill="#4267B2" d="M10.15 16V8.7h2.45l.37-2.85h-2.82V4.03c0-.82.23-1.39 1.42-1.39h1.52V.1A20.1 20.1 0 0 0 10.88 0C8.68 0 7.18 1.34 7.18 3.8v2.05H4.72V8.7h2.46V16h2.97Z" /></svg>;
}
