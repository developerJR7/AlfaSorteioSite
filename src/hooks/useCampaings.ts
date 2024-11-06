import { api } from '@/api/Api'
import { campaignsType } from '@/types/CampaingType'
import { useMutation, useQuery } from 'react-query'

const useCampaignsInfo = () => {
  return useQuery('list-campaigns', async () => {
    const { data } = await api.get<campaignsType[]>('/user/campaigns/list')
    return data
  })
}

const useCreateCampaigns = () => {
  return useMutation(async (formData: FormData) => {
    const { data } = await api.post('/user/campaigns/create', formData)
    return data
  })
}

const useUpdateCampaigns = () => {
  return useMutation(async (params: { campaignId: string; campaignData: any }) => {
    const { data } = await api.post(
      `/user/campaigns/update/${params.campaignId}`,
      params
    )
    return data
  })
}

export { useCampaignsInfo, useCreateCampaigns, useUpdateCampaigns }
