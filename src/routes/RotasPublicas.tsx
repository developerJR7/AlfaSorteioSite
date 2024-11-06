import ForgoutPage from '@/pages/Auth/ForgoutPageAuth'
import Login from '@/pages/Auth/HomePageAuth'
import Register from '@/pages/Auth/RegisterPageAuth'
import ResetPage from '@/pages/Auth/ResetPageAuth'
import Welcome from '@/pages/Auth/WelcomePageAuth'
import React from 'react'
import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'

export const RotasPublicas: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" Component={Welcome} />
      <Route path="/login" Component={Login} />
      <Route path="/forgot_password" Component={ForgoutPage} />
      <Route path="/reset_password/:token" Component={ResetPage} />
      {/* Adicione esta rota */}
      <Route path="/register" Component={Register} />
      <Route path="*" element={<Navigate to="/" />} />
    </ReactRoutes>
  )
}
