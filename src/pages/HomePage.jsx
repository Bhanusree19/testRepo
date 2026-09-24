import { useState } from 'react'
import { Icon } from '../components/Icons'
import ProductArt from '../components/ProductArt'

const products = [
  ['EKERÖ', '$230.00', '$512.58', '4.9 (256)', 'chair'],
  ['STRANDMON', '$274.13', '$856.60', '4.8 (128)', 'wing'],
  ['PLATTLÄNS', '$24.99', '$69.99', '4.9 (256)', 'lamp'],
  ['MALM', '$50.99', '$69.99', '4.9 (256)', 'table'],
]

function ProductCard({ product }) {
  const [name, price, oldPrice, rating, type] = product
  return <article className="product-card" tabIndex="0" aria-label={`${name}, ${price}`}>
    <div className="product-image"><ProductArt type={type} /></div>
    <span className="discount">45% OFF</span>
    <div className="product-copy"><div className="product-name">{name}</div><strong>{price}</strong><s>{oldPrice}</s><div className="rating"><Icon name="star" size={18} />{rating}</div></div>
  </article>
}

function CategoryIcon({ type }) {
  if (type === 'Outdoor') return <span className="category-icon grill">♨</span>
  if (type === 'Appliances') return <span className="category-icon">♙</span>
  if (type === 'Furniture') return <span className="category-icon sofa">▰</span>
  return <span className="more-dot">•••</span>
}

export default function HomePage({ activeRoute, navigate }) {
  const [query, setQuery] = useState('')
  const [notice, setNotice] = useState('')
  const showNotice = (message) => { setNotice(message); window.setTimeout(() => setNotice(''), 1700) }
  const nav = [['home', 'home', 'Home'], ['cart', 'cart', 'My Cart'], ['account', 'user', 'My Account']]
  return <main className="viewport"><section className="phone" aria-label="Season home store">
    <div className="status-bar"><span>18:41</span><div className="status-symbols"><span>▮▮▮</span><span>◒</span><span className="battery"><i /></span></div></div>
    <div className="page-scroll">
      <header className="top-header">
        <div className="search-row"><label className="search-box"><Icon name="search"/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search candles" aria-label="Search candles"/><button type="button" aria-label="Search by camera" onClick={() => showNotice('Camera search opened')}><Icon name="camera"/></button></label><button className="icon-button" type="button" aria-label="Notifications" onClick={() => showNotice('No new notifications')}><Icon name="bell"/></button></div>
        <button className="address" type="button" onClick={() => showNotice('Delivery address selector opened')}><Icon name="pin"/><span>Deliver to</span><b>3517 W. Gray St. Utica, Pennsylvania</b><Icon name="chevron"/></button>
      </header>
      <section className="hero">
        <div className="hero-art"><span className="lamp-shade" /><span className="plant" /></div><div className="hero-wash" />
        <div className="hero-content"><h1>Celebrate The Season With Us!</h1><p>Get discounts up to 75% for furniture &amp; decoration</p><button type="button" onClick={() => document.getElementById('offers').scrollIntoView({ behavior: 'smooth' })}>Shop Now</button></div>
      </section>
      <div className="dots" aria-label="Promotion 1 of 3"><i /><i /><i /></div>
      <section className="offers" id="offers"><div className="section-title"><h2>Special Offers</h2><button type="button" onClick={() => showNotice('Showing all special offers')}>See More</button></div><div className="product-track">{products.map((product) => <ProductCard product={product} key={product[0]} />)}</div></section>
      <section className="categories"><h2>Shop by Categories</h2><div className="category-grid">{[['Outdoor','green'],['Appliances','blue'],['Furniture','yellow'],['See More','gray']].map(([label, color]) => <button className={`category ${color}`} type="button" key={label} onClick={() => showNotice(`${label} selected`)}><CategoryIcon type={label}/><strong>{label}</strong></button>)}</div></section>
    </div>
    <nav className="bottom-nav" aria-label="Primary navigation">{nav.map(([route, icon, label]) => <button key={route} type="button" className={activeRoute === route ? 'active' : ''} onClick={() => { navigate(route); if (route !== 'home') showNotice(`${label} is ready for your next screen`) }}><Icon name={icon} size={24}/><span>{label}</span></button>)}</nav>
    <div className="home-indicator"><i /></div>{notice && <div className="toast" role="status">{notice}</div>}
  </section></main>
}
