import React,{useState,useEffect} from 'react';
import Attendance from '../pages/Attendance';
import Metrics from '../pages/Metrics';
import {Modal} from '../components/UI';
const getRoute=()=>location.hash.slice(1)||'/attendance';
const details={
 'Notifications':['Your daily target is ₹1.2L.','You have 3 tasks due today.','Fiana Switch Fest ends 31 Oct.'],
 'Your territory':['Bengaluru South · Route 14','Today’s beat: Beat 10','Location: Hoodi, Bengaluru'],
 'Sync status':['You are up to date.','This preview uses local demonstration data. Salesforce and SAP are not connected.'],
 Visits:['11:30 AM · Gupta Electricals · Marathahalli','12:15 PM · Sri Balaji Traders · Whitefield','12 upcoming visits in the next 2 days.'],
 Orders:['7 open orders · 2 added today','₹1.2L orders booked today.'],
 Collections:['₹48K collected today','₹2.4L pending across 6 dealers.'],
 Leads:['2 new leads today · Goal 5'],
 Tasks:['5 tasks due today','1 task overdue.'],
 Accounts:['Gupta Electricals · Marathahalli','Sri Balaji Traders · Whitefield','48 dealers in your territory.'],
 Targets:['Monthly target: ₹5.6L','Achieved: ₹3.8L · 68%','₹16K needed per day · On track'],
 'Fiana Switch Fest':['Earn 2% extra on 50+ boxes.','Scheme ends 31 Oct.'],
 'Secure X wires, 90 m':['Now open for ordering.'],
 'Collect before 20 Oct':['₹2.4L pending, 6 dealers.'],
 'Gupta Electricals':['Retailer · Marathahalli · 2.4 km','Next visit: 11:30 AM'],
 'Sri Balaji Traders':['Dealer · Whitefield · 1.2 km','Next visit: 12:15 PM']
};
export default function App(){const[route,setRoute]=useState(getRoute),[modal,setModal]=useState(null),[saved,setSaved]=useState(false);useEffect(()=>{const handle=()=>{setRoute(getRoute());setModal(null);window.scrollTo(0,0)};window.addEventListener('hashchange',handle);return()=>window.removeEventListener('hashchange',handle)},[]);useEffect(()=>{document.title=route==='/metrics'?'Field Sales · Your metrics':'Field Sales · Start your day'},[route]);const navigate=path=>{location.hash=path};return <div className="app-shell">{route==='/metrics'?<Metrics navigate={navigate} notify={setModal}/>:<Attendance navigate={navigate} notify={setModal}/>}
 {modal&&<Modal title={modal} onClose={()=>{setModal(null);setSaved(false)}}>{modal==='New lead'?saved?<p role="status">Dealer saved to your local leads.</p>:<form onSubmit={e=>{e.preventDefault();const form=new FormData(e.currentTarget);const leads=JSON.parse(localStorage.getItem('leads')||'[]');localStorage.setItem('leads',JSON.stringify([...leads,Object.fromEntries(form)]));setSaved(true)}}><label>Dealer name<input name="name" required/></label><label>Phone number<input name="phone" type="tel" required pattern="[+0-9 ()-]{7,20}"/></label><label>Area<input name="area" required/></label><button className="primary">Save lead</button></form>:<ul>{(details[modal]||[]).map(t=><li key={t}>{t}</li>)}</ul>}</Modal>}</div>}
