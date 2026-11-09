const paths = {
  "arrow-right": <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />,
  "arrow-left": <path d="M20 12H5m0 0 5.5-5.5M5 12l5.5 5.5" />,
  "arrow-up-right": <path d="M7 17 17 7M9 7h8v8" />,
  "chevron-right": <path d="m9.5 6 6 6-6 6" />,
  "chevron-down": <path d="m6 9.5 6 6 6-6" />,
  bag: (
    <>
      <path d="M6 8h12l1 12H5L6 8Z" />
      <path d="M9 10V6.5a3 3 0 0 1 6 0V10" />
    </>
  ),
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V20h-5v-6H9v6H4v-9.5Z" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.5" r="3.6" />
      <path d="M4.8 20c.7-3.5 3.6-5.6 7.2-5.6s6.5 2.1 7.2 5.6" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.2" />
      <path d="m15.4 15.4 4.3 4.3" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.4-7.5-9.3A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.5 3.3C19.5 15.6 12 20 12 20Z" />,
  star: (
    <path
      d="m12 3.6 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3.6Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  trash: (
    <>
      <path d="M5 7h14M10 4h4m-7 3 .8 13h8.4L17 7" />
      <path d="M10.5 11v6M13.5 11v6" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 6.5" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  truck: (
    <>
      <path d="M3 7h11v9H3V7Zm11 3h4l3 3v3h-7v-6Z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C5 10.5 10 5 20 5c0 10-5.5 15-14 14Z" />
      <path d="M5 19c2.5-4.5 5.5-7 9-9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v6c0 4.2-2.8 7.3-7 8.5-4.2-1.2-7-4.3-7-8.5V6l7-2.5Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
  package: (
    <>
      <path d="m12 3 8 4.2v9.6L12 21l-8-4.2V7.2L12 3Z" />
      <path d="m4.3 7.4 7.7 4 7.7-4M12 21v-9.6" />
    </>
  ),
  logout: (
    <>
      <path d="M10 5H5v14h5M14.5 8.5 18 12l-3.5 3.5M18 12H9" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.4" />
      <path d="M3 10h18M7 15h3" />
    </>
  ),
  filter: <path d="M4 6h16M7 12h10M10 18h4" />,
  sparkle: (
    <path d="M12 3.5c.6 4.4 2.1 5.9 6.5 6.5-4.4.6-5.9 2.1-6.5 6.5-.6-4.4-2.1-5.9-6.5-6.5 4.4-.6 5.9-2.1 6.5-6.5Z" />
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.4 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.6" r="2.3" />
    </>
  ),
};

export default function Icon({ name, size = 20, strokeWidth = 1.6, className, ...rest }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name] ?? null}
    </svg>
  );
}
