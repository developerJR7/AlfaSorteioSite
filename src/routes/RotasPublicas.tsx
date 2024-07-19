import Welcome from '@/pages/Auth/'
import Login from '@/pages/Login/'
import React from 'react'
import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'

export const RotasPublicas: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" Component={Welcome} />
      <Route path="/login" Component={Login} />
      <Route path="*" element={<Navigate to="/" />} />
    </ReactRoutes>
  )
}
