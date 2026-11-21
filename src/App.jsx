import { useEffect, useState } from 'react';
import { routes } from './routes/routes';

export default function App() {
  const [path, setPath] = useState(location.hash.slice(1) || '/trips');
  useEffect(() => { const sync = () => setPath(location.hash.slice(1) || '/trips'); addEventListener('hashchange', sync); return () => removeEventListener('hashchange', sync); }, []);
  const navigate = (to) => { location.hash = to; };
  const goBack = () => history.length > 1 ? history.back() : navigate('/you');
  const Screen = routes[path] || Trips;
  return <main className="stage"><section className="phone"><Screen navigate={navigate} goBack={goBack} /></section></main>;
}
