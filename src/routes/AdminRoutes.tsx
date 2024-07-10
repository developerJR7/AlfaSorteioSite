import { Aside } from '@/components/layout/Aside'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import Home from '@/pages/Home'
import Pix from '@/pages/Pix'
import Profile from '@/pages/Profile'
import RegistrationStep from '@/pages/Profile/RegistrationStep'
import React from 'react'
import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'

export const AdminRoutes: React.FC = () => {
  const StyleAuth = {
    background: 'linear-gradient(358deg, #242F5F 0%, #425EA8 100%)',
    backgroundPosition: 'top'
  }

  return (
    <div className="relative flex h-screen w-screen items-start justify-center overflow-x-hidden px-6 py-2">
      <div
        className="absolute inset-0 left-0 right-0 top-0 z-[-10] w-screen"
        style={StyleAuth}
      ></div>
      <div className="flex max-h-[100vh] w-full max-w-[1440px] flex-col items-center justify-around gap-8">
        <Header />
        <div className="grid w-full grid-cols-[84px,3fr,2fr] items-start justify-center gap-4">
          <Sidebar />
          <div className="max-h-[calc(100vh-164px)] overflow-y-auto overflow-x-hidden pr-4">
            <ReactRoutes>
              <Route path="/welcome" Component={Home} />
              <Route path="/pix" Component={Pix} />
              <Route path="profile">
                <Route index Component={Profile} />
                <Route path="registration" Component={RegistrationStep} />
              </Route>
              <Route path="*" element={<Navigate to="/welcome" />} />
            </ReactRoutes>
          </div>
          <Aside />
        </div>
      </div>
    </div>
  )
}
