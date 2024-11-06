import { IconTicket } from '@/components/icons'
import IconLupa from '@/components/icons/Lupa'
import { Container } from '@/components/layout/container'

import { DataTable } from '@/components/Table'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { toast } from '@/components/ui/use-toast'
import { useCampaignsInfo } from '@/hooks/useCampaings'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ColumnsCampaigns } from './ColumnsCampaign'

const HomePageCampaigns: React.FC = () => {
  const { data: infoCampaigns, isLoading, isError } = useCampaignsInfo()
  const [activeTab, setActiveTab] = useState<'andamento' | 'encerradas'>('andamento')

  useEffect(() => {
    if (isError) {
      toast({
        variant: 'destructive',
        title: 'Falha ao carregar lista de campanhas.',
        description: 'Por favor tente mais tarde!'
      })
    }
  }, [isError])

  return (
    <Container>
      <h4 className="mb-4 flex items-center text-xl font-semibold text-[#255E17]">
        <IconTicket className="mr-2 size-7" />
        Campanha
      </h4>
      {isLoading ? (
        <Skeleton className="h-96 w-full max-w-[1330px] rounded-md" />
      ) : (
        <>
          <Card className="relative flex min-h-80 w-full flex-col  p-4">
            <div className=" mb-8 flex items-center">
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

            {infoCampaigns ? (
              <DataTable columns={ColumnsCampaigns} data={infoCampaigns || []} />
            ) : (
              <div className="flex flex-1 items-center justify-center">
                <div className="text-center">
                  <IconLupa className="mx-auto mb-2 size-9 fill-[#A0AEC0]" />
                  <p className="text-xl font-semibold text-[#A0AEC0]">
                    Nenhuma campanha{' '}
                    {activeTab === 'andamento' ? 'em andamento' : 'encerrada'}{' '}
                    encontrada
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
        </>
      )}
    </Container>
  )
}

export default HomePageCampaigns