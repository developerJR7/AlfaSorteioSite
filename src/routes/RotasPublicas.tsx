import Welcome from '@/pages/Auth/'
import Register from '@/pages/Auth/Register'
import Login from '@/pages/Login/'
import ForgotPassword from '@/pages/Login/forgotPassword'
import ResetPassword from '@/pages/Login/ResetPassword'
import React from 'react'
import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'

export const RotasPublicas: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" Component={Welcome} />
      <Route path="/login" Component={Login} />
      <Route path="/forgot-password" Component={ForgotPassword} />
      <Route path="/reset_password/:token" Component={ResetPassword} />{' '}
      <Route path="/reset-password/:token" Component={ResetPassword} />{' '}
      {/* Adicione esta rota */}
      <Route path="/register" Component={Register} />
      <Route path="*" element={<Navigate to="/" />} />
    </ReactRoutes>
  )
}
