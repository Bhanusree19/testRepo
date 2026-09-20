import { useState } from 'react'
import { BottomNavigation } from '../components/BottomNavigation'
import { Icon } from '../components/Icon'

const reminders = [
  { title: 'New workout is Available', time: 'June 10 - 10:00 AM', icon: 'stars' },
  { title: 'Don’t forget to drink water', time: 'June 10 - 8:00 AM', icon: 'bulb', accent: true },
]
const yesterday = [
  { title: 'Upper Body Workout Completed!', time: 'June 09 - 6:00 pM', icon: 'trophy', accent: true },
  { title: 'Remember Your Exercise Session', time: 'June 09 - 3:00 pM', icon: 'bulb' },
  { title: 'new Article & Tip posted!', time: 'June 09 - 11:00 aM', icon: 'list' },
]
const older = [
  { title: 'You started a new challenge!', time: 'May 29 - 9:00 AM', icon: 'stars' },
  { title: 'New House training ideas!', time: 'May 29 - 8:20 AM', icon: 'stars' },
]

function ReminderCard({ item }) {
  return <article className="reminder-card">
    <span className={`reminder-icon ${item.accent ? 'lime' : ''}`}><Icon name={item.icon} size={25} /></span>
    <div><h2>{item.title}</h2><time>{item.time}</time></div>
  </article>
}

export function WorkoutRemindersPage({ navigate }) {
  const [filter, setFilter] = useState('Reminders')
  const [message, setMessage] = useState('')
  const groups = filter === 'Reminders'
    ? [['Today', reminders], ['Yesterday', yesterday], ['May 29 - 20XX', older]]
    : [['Today', [{ title: 'Your notification preferences are up to date', time: 'June 10 - 10:00 AM', icon: 'list' }]], ['Yesterday', [{ title: 'System check completed', time: 'June 09 - 3:00 pM', icon: 'stars' }]]]

  return <main className="app-canvas">
    <section className="phone-shell" aria-label="Workout reminders">
      <div className="status-bar"><span>16:04</span><span className="status-icons">▴ ◔ ▱</span></div>
      <header className="top-header">
        <button className="back-button" aria-label="Go back" onClick={() => window.history.length > 1 ? window.history.back() : navigate('/')}><Icon name="back" /></button>
        <h1>Notifications</h1>
        <div className="header-actions">
          <button aria-label="Search notifications" onClick={() => setMessage('Search is ready.')}><Icon name="search" /></button>
          <button aria-label="Notifications" onClick={() => setMessage('You are viewing notifications.')}><Icon name="bell" /></button>
          <button aria-label="Your profile" onClick={() => setMessage('Profile selected.')}><Icon name="user" /></button>
        </div>
      </header>
      <div className="filter-row" role="tablist" aria-label="Notification category">
        {['Reminders', 'System'].map((item) => <button key={item} role="tab" aria-selected={filter === item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      {message && <p className="sr-only" role="status">{message}</p>}
      <div className="reminder-list">
        {groups.map(([heading, items]) => <section className="notification-group" key={heading}>
          <h3>{heading}</h3>
          {items.map((item) => <ReminderCard item={item} key={`${item.title}-${item.time}`} />)}
        </section>)}
      </div>
      <BottomNavigation onNavigate={(destination) => setMessage(`${destination} selected.`)} />
    </section>
  </main>
}
