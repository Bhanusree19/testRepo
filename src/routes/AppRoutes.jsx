import { Navigate, Route, Routes } from 'react-router-dom'
import { TripRecapPage } from '../pages/TripRecapPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/trip-recap" element={<TripRecapPage />} />
      <Route path="*" element={<Navigate to="/trip-recap" replace />} />
    </Routes>
  )
}
