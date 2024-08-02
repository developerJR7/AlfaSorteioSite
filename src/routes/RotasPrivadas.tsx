import { Sidebar } from '@/components/layout/sidebar'
import Campanha from '@/pages/Campaigns'
import Home from '@/pages/Home'
import React from 'react'
import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'

export const RotasPrivadas: React.FC = () => {
  return (
    <div className="flex max-h-dvh w-full max-w-[1440px] items-start justify-around">
      <Sidebar />
      <ReactRoutes>
        {/* Home */}
        <Route path="/home" Component={Home} />
        {/* Campaigns */}
        <Route path="/campaigns" Component={Campanha} />
        <Route path="*" element={<Navigate to="/home" />} />
      </ReactRoutes>
    </div>
  )
}
