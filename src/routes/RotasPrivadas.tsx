import { Sidebar } from '@/components/layout/sidebar'
import Campanha from '@/pages/Campaigns'
import Create from '@/pages/Campaigns/Create'
import Home from '@/pages/Home'
import Financas from '@/pages/Finance'
import Promoções from '@/pages/Promotions'
import ConfigPromotions from '@/pages/Promotions/ConfigPromotions'
import Relatorios from '@/pages/Reports'
import React from 'react'
import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'
import Afiliados from '@/pages/Affiliate'

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

        {/* Afiliados */}
        <Route path="/affiliates" element={<Afiliados />} />

        {/* Finanças */}
        <Route path="/finance" element={<Financas />} />

        {/* Promotions */}
        <Route path="/promotions">
          <Route index element={<Promoções />} />
          <Route path="configpromotions" element={<ConfigPromotions />} />{' '}
          {/* Nova rota */}
        </Route>

        {/* Relatórios */}
        <Route path="/reports" element={<Relatorios />} />

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/home" />} />
      </ReactRoutes>
    </div>
  )
}
