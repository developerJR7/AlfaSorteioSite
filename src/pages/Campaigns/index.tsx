import React, { useState } from 'react'
import { IconTicket } from '@/components/icons'
import { Container } from '@/components/layout/container'
import { Card } from '@/components/ui/card'
import IconLupa from '@/components/icons/Lupa'
import { Link } from 'react-router-dom'

const Campanha: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'andamento' | 'encerradas'>('andamento')
  //const { data, isLoading, isError } = useListCampaigns()

  return (
    <Container>
      <h4 className="mb-4 flex items-center text-xl font-semibold text-[#255E17]">
        <IconTicket className="mr-2 size-7" />
        Campanha
      </h4>
      <Card className="relative flex h-80 w-full flex-col items-center justify-center p-4">
        <div className="absolute left-4 top-4 flex space-x-4">
          <button
            className={`rounded px-2 py-1 text-sm font-semibold ${
              activeTab === 'andamento'
                ? 'bg-[#255E17] text-white shadow'
                : 'text-[#A0AEC0]'
            }`}
            onClick={() => setActiveTab('andamento')}
          >
            Em andamento
          </button>
          <button
            className={`rounded px-2 py-1 text-sm font-semibold ${
              activeTab === 'encerradas'
                ? 'bg-[#255E17] text-white shadow'
                : 'text-[#A0AEC0]'
            }`}
            onClick={() => setActiveTab('encerradas')}
          >
            Encerradas
          </button>
        </div>

        {activeTab === 'andamento' && (
          <div className="flex flex-1 items-center justify-center">
            <div className="text-center">
              <IconLupa className="mx-auto mb-2 size-9 fill-[#A0AEC0]" />
              <p className="text-xl font-semibold text-[#A0AEC0]">
                Nenhuma campanha em andamento encontrada
              </p>
            </div>
          </div>
        )}

        {activeTab === 'encerradas' && (
          <div className="flex flex-1 items-center justify-center">
            <div className="text-center">
              <IconLupa className="mx-auto mb-2 size-9 fill-[#A0AEC0]" />
              <p className="text-xl font-semibold text-[#A0AEC0]">
                Nenhuma campanha encerrada encontrada
              </p>
            </div>
          </div>
        )}

        <Link
          className="absolute right-4 top-4 rounded-lg bg-gradient-to-r from-[#FEEA8C] to-[#F9D94B] px-6 py-1 text-lg font-semibold text-[#3D3D3D] shadow-md transition-all duration-300 hover:text-white"
          to={'/campaigns/create'}
        >
          + nova
        </Link>
      </Card>
    </Container>
  )
}

export default Campanha
