import { Navigate, Route, Routes } from 'react-router-dom'
import License from '../pages/License'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/license" replace />} />
      <Route path="/license" element={<License />} />
      <Route path="*" element={<Navigate to="/license" replace />} />
    </Routes>
  )
}
