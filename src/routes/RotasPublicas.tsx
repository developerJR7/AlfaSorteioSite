import { Navbar } from '@/components/layout/navbar'
import HomePage from '@/pages/Home/HomePage'
import React from 'react'
import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'

export const RotasPublicas: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <ReactRoutes>
        <Route path="/" Component={HomePage} />
        <Route path="*" element={<Navigate to="/" />} />
      </ReactRoutes>
    </div>
  )
}
