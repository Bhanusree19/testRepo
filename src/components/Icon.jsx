export function Icon({ name, size = 22 }) {
  const symbols = { search: '⌕', bell: '♟', user: '♙', home: '⌂', resource: '▰', help: '?', stars: '✦', back: '‹', bulb: '♧', trophy: '♜', list: '☷' }
  return <span className={`icon icon-${name}`} style={{ '--icon-size': `${size}px` }} aria-hidden="true">{symbols[name]}</span>
}
