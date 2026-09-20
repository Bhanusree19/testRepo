import { Icon } from './Icon'

const items = [
  ['home', 'Home'],
  ['resource', 'Resources'],
  ['stars', 'Challenges'],
  ['help', 'Help'],
]

export function BottomNavigation({ onNavigate }) {
  return <nav className="bottom-nav" aria-label="Main navigation">
    {items.map(([icon, label]) => (
      <button key={label} className="nav-item" aria-label={label} onClick={() => onNavigate(label)}>
        <Icon name={icon} />
      </button>
    ))}
  </nav>
}
