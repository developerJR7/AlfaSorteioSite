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
        <Route path="/home" element={<Home />} />
        {/* Campaigns */}
        <Route path="/campaigns">
          <Route index element={<Campanha />} />
          <Route path="create" element={<Create />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </ReactRoutes>
    </div>
  )
}
