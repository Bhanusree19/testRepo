import { ChevronRight } from './Icons'

export function SectionHeader({ eyebrow, title, action, onAction }) {
  return <div className="section-header">
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
    <button className="text-action" onClick={onAction}>{action}<ChevronRight /></button>
  </div>
}
