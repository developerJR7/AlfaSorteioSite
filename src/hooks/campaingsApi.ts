import { api } from '@/api/Api'
import { campaignsType } from '@/types/campaings'
import { useMutation } from 'react-query'

export const listCampaigns = async () => {
  const response = await api.get<campaignsType[]>('/user/campaigns/list')
  return response.data
}

export const createCampaign = () => {
  return useMutation(async (formData: FormData) => {
    const { data } = await api.post('/user/campaigns/create', formData)
    return data
  })
}

export const updateCampaign = async (campaignId: string, campaignData: any) => {
  const response = await api.post(
    `/user/campaigns/update/${campaignId}`,
    campaignData
  )
  return response.data
}
