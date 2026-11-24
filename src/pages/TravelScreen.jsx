import React from 'react';
import Story from '../components/Story';
import LocationPin from '../components/LocationPin';
const detail = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros magna, congue sed tortor non, feugiat congue';
export default function TravelScreen() {
 return <main className="travel-screen" data-fid="fid:1277:4">
  <section className="intro">
   <div className="heading-row"><header data-fid="fid:1277:32"><div className="greeting" data-fid="fid:1277:33"><span data-fid="fid:1277:34">Hi,</span><span data-fid="fid:1277:35">Himanshu!</span></div><h1 data-fid="fid:1277:36">Let’s travel</h1></header><div className="menu" data-fid="fid:1277:58" aria-label="Menu"><div data-fid="fid:1277:59"><i data-fid="fid:1277:62"/><i data-fid="fid:1277:61"/><i data-fid="fid:1277:60"/></div></div></div>
   <div className="stories"><Story ids={[54,55,56,57]}/><div className="other-stories" data-fid="fid:1277:37"><Story ids={[42,43,44,45]}/><Story ids={[46,47,48,49]} coral/><Story ids={[38,39,40,41]}/><Story ids={[50,51,52,53]} label="Kerala"/></div></div>
   <div className="profile-wrap" data-fid="fid:1277:63"><div className="profile" data-fid="fid:1277:64"><div data-fid="fid:1277:72"><div data-fid="fid:1277:73"><div className="profile-title"><span data-fid="fid:1277:74">Complete Profile</span><span className="emoji" data-fid="fid:1277:75"> 😊</span></div><p data-fid="fid:1277:76">Complete your personal information</p></div></div><div data-fid="fid:1277:65"><div className="profile-arrow" data-fid="fid:1277:66"><span data-fid="fid:1277:67"><svg data-fid="fid:1277:69" width="16" height="11" viewBox="0 0 18 13" fill="none" stroke="white" strokeWidth="1.8"><path data-fid="fid:1277:70" d="M1 6.5h16"/><path data-fid="fid:1277:71" d="m11 1 5.5 5.5L11 12"/></svg></span></div></div></div></div>
  </section>
  <section className="bottom" data-fid="fid:1277:5"><div className="purple" data-fid="fid:1277:6"><div className="search-info" data-fid="fid:1277:26"><LocationPin groupId="fid:1277:28" pathId="fid:1277:29" width={12} height={15}/><span data-fid="fid:1277:27">40+ best locations found near you</span></div></div>
   <div className="sheet" data-fid="fid:1277:7"><div className="event" data-fid="fid:1277:11"><div className="event-content" data-fid="fid:1277:12"><div className="cover" data-fid="fid:1277:13" role="img" aria-label="Park image unavailable"/><div className="event-right"><div className="distance" data-fid="fid:1277:22"><span data-fid="fid:1277:24">1.4 KM AWAY</span><div data-fid="fid:1277:23"/></div><div data-fid="fid:1277:14"><h2 data-fid="fid:1277:18">Red River National Park</h2><div className="location"><LocationPin groupId="fid:1277:20" pathId="fid:1277:21"/><span data-fid="fid:1277:19">Mumbai, India</span></div><div data-fid="fid:1277:15"><a className="location-button" data-fid="fid:1277:16" href="https://www.google.com/maps/search/?api=1&query=Red+River+National+Park+Mumbai+India" target="_blank" rel="noreferrer"><span data-fid="fid:1277:17">View Location</span></a></div></div></div></div></div>
   <section className="details" data-fid="fid:1277:8"><h3 data-fid="fid:1277:10">Details</h3><p data-fid="fid:1277:9">{detail} {detail}{detail}</p></section><div className="faded" data-fid="fid:1277:25"/><div className="swipe" data-fid="fid:1277:30"><div data-fid="fid:1277:31"/></div></div>
  </section>
 </main>;
}
