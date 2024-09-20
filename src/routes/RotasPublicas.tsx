import Welcome from '@/pages/Auth/'
import Register from '@/pages/Auth/Register'
import Login from '@/pages/Login/'
import ForgotPassword from '@/pages/Login/forgotPassword'
import React from 'react'
import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'

export const RotasPublicas: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" Component={Welcome} />
      <Route path="/login" Component={Login} />
      <Route path="/forgot-Password" Component={ForgotPassword} />
      <Route path="/register" Component={Register} />
      <Route path="*" element={<Navigate to="/" />} />
    </ReactRoutes>
  )
}
