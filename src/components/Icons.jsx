export function Icon({ name, size = 20, stroke = 'currentColor', fill = 'none' }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill, stroke, strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const paths = {
    search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></>,
    camera: <><path d="M4 7.5h3l1.3-2h7.4l1.3 2h3v10.5H4z" /><circle cx="12" cy="13" r="3.2" /></>,
    bell: <><path d="M18 10a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 22h4" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
    chevron: <path d="m7 10 5 5 5-5" />,
    home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z" /></>,
    cart: <><path d="M3 4h2l2.2 11.2h10.7l2-8H6.2" /><circle cx="9" cy="20" r="1" /><circle cx="17" cy="20" r="1" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></>,
    star: <path fill="#ebb65b" stroke="none" d="m12 2.6 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9l6.1-.9Z" />,
  }
  return <svg {...common}>{paths[name]}</svg>
}
