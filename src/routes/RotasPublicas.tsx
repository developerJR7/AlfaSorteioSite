import Login from '@/pages/Auth/'
import React from 'react'
import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'

export const RotasPublicas: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" Component={Login} />
      <Route path="/login" Component={Login} />
      <Route path="*" element={<Navigate to="/login" />} />
    </ReactRoutes>
  )
}
