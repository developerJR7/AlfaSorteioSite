import { Sidebar } from '@/components/layout/sidebar'
import CreateAffiliates from '@/pages/Affiliate/CreatePageAffiliates'
import Afiliados from '@/pages/Affiliate/HomePageAffiliates'
import Create from '@/pages/Campaigns/CreatePageCampaigns'
import Campanha from '@/pages/Campaigns/HomePageCampaigns'
import Financas from '@/pages/Finance/HomePageFinance'
import Home from '@/pages/Home/HomePage'
import CreatePromotions from '@/pages/Promotions/CreatePagePromotions'
import Promocoes from '@/pages/Promotions/HomePagePromotions'
import Relatorios from '@/pages/Reports/HomePageReports'
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

        {/* Afiliados */}
        <Route path="/affiliates">
          <Route index element={<Afiliados />} />
          <Route path="create" element={<CreateAffiliates />} />
        </Route>

        {/* Finanças */}
        <Route path="/finance" element={<Financas />} />

        {/* Promotions */}
        <Route path="/promotions">
          <Route index element={<Promocoes />} />
          <Route path="create" element={<CreatePromotions />} />
        </Route>

        {/* Relatórios */}
        <Route path="/reports" element={<Relatorios />} />

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/home" />} />
      </ReactRoutes>
    </div>
  )
}
