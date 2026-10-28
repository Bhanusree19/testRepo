import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import Cover from './pages/Cover';
import Screen from './components/Screen';
import {screens,screenHref} from './routes/screens';
import './styles/global.css';
function App(){
 const [hash,setHash]=useState(window.location.hash);
 const [cart,setCart]=useState(1);
 useEffect(()=>{const change=()=>{setHash(window.location.hash);window.scrollTo(0,0);};window.addEventListener('hashchange',change);return()=>window.removeEventListener('hashchange',change)},[]);
 const id=hash.split('/')[2];
 const screen=screens.find(s=>s.id===id);
 if(!screen)return <Cover cart={cart} setCart={setCart}/>;
 return <main className="viewer"><header className="viewer-header"><a href="#/">← Back to cover</a><span>FORMA / DIGITAL EXPERIENCE</span><label className="screen-select"><span>Screen</span><select value={id} onChange={e=>window.location.hash=screenHref(e.target.value).slice(1)}>{screens.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></label></header><div className="viewer-device"><Screen key={id} id={id} cart={cart} setCart={setCart}/></div><p className="viewer-note">{String(screens.indexOf(screen)+1).padStart(2,'0')} / 10 <span> {screen.name}</span></p></main>;
}
createRoot(document.getElementById('root')).render(<App/>);
