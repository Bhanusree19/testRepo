import { useState } from 'react'
import { ArrowLeft, ChevronDown, Pen, SendArrow } from '../components/Icons'
import { RouteMap } from '../components/RouteMap'
import { SectionHeader } from '../components/SectionHeader'

const spend = [
  ['Stays', '₹19,788', 'ink'], ['Travel', '₹11,200', 'charcoal'], ['Food', '₹5,100', 'grey'], ['Tickets and other', '₹2,312', 'light'],
]
const photos = ['tea-hills', 'houseboat', 'waterfall', 'palms', 'coast', 'market']

export function TripRecapPage() {
  const [notice, setNotice] = useState('')
  const show = (text) => { setNotice(text); window.setTimeout(() => setNotice(''), 2200) }
  const goBack = () => window.history.length > 1 ? window.history.back() : show('You’re already at your trip recap')
  return (
    <main className="app-shell">
      <div className="phone-page">
        <div className="status-bar"><span>9:41</span><div className="status-icons"><i /><i /><i /><b>⌁</b><strong /></div></div>
        <div className="scroll-content">
          <header className="top-bar">
            <button className="icon-button" aria-label="Go back" onClick={goBack}><ArrowLeft /></button>
            <div className="trip-title"><strong>Kerala, 12–16 Dec</strong><span>Trip recap</span></div>
            <button className="icon-button" aria-label="More trip options" onClick={() => show('Trip options opened')}><ChevronDown /></button>
          </header>

          <article className="recap-card">
            <RouteMap />
            <div className="recap-body">
              <div><p className="eyebrow">Trip recap</p><h1>Kerala, 5 days well spent</h1></div>
              <div className="stats">{[['412', 'km'], ['18', 'places'], ['236', 'photos'], ['₹38k', 'spent']].map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
            </div>
          </article>

          <section><SectionHeader eyebrow="Spend" title="₹38,400 for 4 people" action="Details" onAction={() => show('Spend details opened')} />
            <div className="spend-card">
              <div className="spend-bar"><i className="ink" /><i className="charcoal" /><i className="grey" /><i className="light" /></div>
              <div className="spend-list">{spend.map(([name, amount, color]) => <div key={name}><span className={`key ${color}`} /> <p>{name}</p><b>{amount}</b></div>)}</div>
            </div>
          </section>
          <section className="moments"><SectionHeader eyebrow="Best moments" title="Mivo picked 12 photos" action="Edit" onAction={() => show('Photo editor opened')} />
            <div className="photo-grid">{photos.map((photo, i) => <button aria-label={`View memory ${i + 1}`} className={`photo ${photo}`} key={photo} onClick={() => show(`Memory ${i + 1} selected`)}><span /></button>)}</div>
          </section>
        </div>
        <footer className="bottom-bar"><button className="story-button" onClick={() => show('Your story is ready to write')}><Pen /><span>Write your story</span><em /><b><SendArrow /></b></button><div className="home-indicator" /></footer>
        {notice && <div className="toast" role="status">{notice}</div>}
      </div>
    </main>
  )
}
