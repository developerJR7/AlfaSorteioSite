import Home from '@/pages/Home'
import React from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom'

export const RotasPrivadas: React.FC = () => {
  return (
    <div className="flex max-h-[100vh] w-full max-w-[1440px] flex-col items-center justify-around gap-8">
      <ReactRoutes>
        <Route path="/home" Component={Home} />
      </ReactRoutes>
    </div>
  )
}
