export function MailIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="2.75"
        y="5.75"
        width="18.5"
        height="12.5"
        rx="2.25"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3.5 7l8.5 6 8.5-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LockIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="4.75"
        y="10.75"
        width="14.5"
        height="9.5"
        rx="2.25"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 10.5V8a4 4 0 018 0v2.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="12" cy="15.4" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function EyeIcon({ size = 20, off = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.6" />
      {off ? (
        <path
          d="M4 20L20 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : null}
    </svg>
  );
}

export function UserIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="8.5" r="3.75" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.75 20.25c.9-3.3 3.7-5 7.25-5s6.35 1.7 7.25 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GoogleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#FFC107"
        d="M43.6 20.08H42V20H24v8h11.3c-1.65 4.66-6.08 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.05 6.05 29.27 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20c0-1.34-.14-2.65-.4-3.92z"
      />
      <path
        fill="#FF3D00"
        d="M6.31 14.69l6.57 4.82C14.65 15.11 18.96 12 24 12c3.06 0 5.84 1.15 7.96 3.04l5.66-5.66C34.05 6.05 29.27 4 24 4 16.32 4 9.66 8.34 6.31 14.69z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.17 0 9.86-1.98 13.41-5.19l-6.19-5.24C29.21 35.09 26.72 36 24 36c-5.2 0-9.62-3.32-11.28-7.95l-6.52 5.03C9.51 39.56 16.23 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.08H42V20H24v8h11.3c-.79 2.24-2.23 4.17-4.09 5.57l6.19 5.24C36.97 39.2 44 34 44 24c0-1.34-.14-2.65-.4-3.92z"
      />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 9 16"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#4267B2"
        d="M5.84 16V8.7h2.43l.36-2.82H5.84V4.09c0-.82.23-1.37 1.4-1.37h1.5V.2C8.48.14 7.64 0 6.67 0 4.16 0 2.44 1.53 2.44 4.33V5.88H0v2.82h2.44V16h3.4z"
      />
    </svg>
  );
}

export function WifiIcon() {
  return (
    <svg
      className="status-bar__icon"
      width="15"
      height="11"
      viewBox="0 0 15 11"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M7.5 10.2l1.65-1.95a2.6 2.6 0 00-3.3 0L7.5 10.2z"
        fill="#000"
      />
      <path
        d="M7.5 5.6c1.2 0 2.3.43 3.15 1.14"
        stroke="#000"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M3.3 4.85A6.55 6.55 0 017.5 3.4c1.6 0 3.08.55 4.2 1.45"
        stroke="#000"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M1 2.75A10.3 10.3 0 017.5 1c2.5 0 4.8.64 6.5 1.75"
        stroke="#000"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CellularIcon() {
  return (
    <svg
      className="status-bar__icon"
      width="17"
      height="11"
      viewBox="0 0 17 11"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="7" width="3" height="4" rx="0.8" fill="#000" />
      <rect x="4.67" y="5" width="3" height="6" rx="0.8" fill="#000" />
      <rect x="9.33" y="3" width="3" height="8" rx="0.8" fill="#000" />
      <rect x="14" y="0" width="3" height="11" rx="0.8" fill="#000" />
    </svg>
  );
}

export function BatteryIcon() {
  return (
    <svg
      className="status-bar__icon"
      width="25"
      height="11"
      viewBox="0 0 25 11"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="0.5"
        y="0.5"
        width="21"
        height="10"
        rx="2.4"
        stroke="#000"
        strokeOpacity="0.35"
      />
      <rect x="2" y="2" width="18" height="7" rx="1.3" fill="#000" />
      <path d="M23 3.5v4a2 2 0 000-4z" fill="#000" fillOpacity="0.4" />
    </svg>
  );
}
