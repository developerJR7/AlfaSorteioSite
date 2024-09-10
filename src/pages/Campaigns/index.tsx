import React, { useState } from 'react'
import { IconTicket } from '@/components/icons'
import { Container } from '@/components/layout/container'
import { Card } from '@/components/ui/card'
import IconLupa from '@/components/icons/Lupa'
import { Link } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { listCampaigns, createCampaign, updateCampaign } from '@/hooks/campaingsApi'
import { DataTable } from '@/components/Table'
import { ColumnsCampaigns } from './ColumnsCampaign'

type Campaign = {
  id: string
  name: string
  status: 'andamento' | 'encerradas'
}

const Campanha: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'andamento' | 'encerradas'>('andamento')
  const queryClient = useQueryClient()

  const {
    data: infoCampaigns,
    isLoading,
    isError
  } = useQuery<App.campaignsProps[]>({
    queryKey: 'campaigns',
    queryFn: async () => {
      const res = await listCampaigns()
      return res
    }
  })

  const createMutation = useMutation(createCampaign, {
    onSuccess: () => {
      queryClient.invalidateQueries('campaigns')
    }
  })

  const updateMutation = useMutation(
    ({ campaignId, campaignData }: { campaignId: string; campaignData: any }) =>
      updateCampaign(campaignId, campaignData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('campaigns')
      }
    }
  )

  const handleCreateCampaign = (newCampaignData: any) => {
    createMutation.mutate(newCampaignData)
  }

  const handleUpdateCampaign = (campaignId: string, updatedCampaignData: any) => {
    updateMutation.mutate({ campaignId, campaignData: updatedCampaignData })
  }

  //const filteredCampaigns =
  //campaigns?.filter((campaign) => campaign.status === activeTab) || []

  return (
    <Container>
      <h4 className="mb-4 flex items-center text-xl font-semibold text-[#255E17]">
        <IconTicket className="mr-2 size-7" />
        Campanha
      </h4>
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
                {activeTab === 'andamento' ? 'em andamento' : 'encerrada'} encontrada
              </p>
            </div>
          </div>
        )}

        <Link
          className="absolute right-4 top-4 rounded-lg bg-gradient-to-r from-[#FEEA8C] to-[#F9D94B] px-6 py-1 text-lg font-semibold text-[#3D3D3D] shadow-md transition-all duration-300 hover:text-white"
          to={'/campaigns/create'}
          onClick={() => handleCreateCampaign({})}
        >
          + nova
        </Link>
      </Card>
    </Container>
  )
}

export default Campanha
