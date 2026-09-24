import { useEffect, useState } from 'react'
import HomePage from '../pages/HomePage'

const routeFromHash = () => window.location.hash.replace('#/', '') || 'home'

export default function App() {
  const [route, setRoute] = useState(routeFromHash)

  useEffect(() => {
    const handleHash = () => setRoute(routeFromHash())
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const navigate = (next) => { window.location.hash = `/${next}` }
  return <HomePage activeRoute={route} navigate={navigate} />
}
