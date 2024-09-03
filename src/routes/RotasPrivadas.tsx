import { Sidebar } from '@/components/layout/sidebar'
import Campanha from '@/pages/Campaigns'
import Create from '@/pages/Campaigns/Create'
import Home from '@/pages/Home'
import React from 'react'
import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'

export const RotasPrivadas: React.FC = () => {
  return (
    <div className="flex max-h-dvh w-full items-start bg-[#F1F5F9] ">
      <Sidebar />
      <ReactRoutes>
        {/* Home */}
        <Route path="/home" Component={Home} />
        {/* Campaigns */}
        <Route path="campaigns">
          <Route index Component={Campanha} />
          <Route path="create" Component={Create} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </ReactRoutes>
    </div>
  )
}
