import { api } from '@/api/Api'

export const listCampaigns = async () => {
  const response = await api.get<App.campaignsProps[]>('/user/campaigns/list')
  return response.data
}

export const createCampaign = async (campaignData: any) => {
  const response = await api.post('/user/campaigns/create', campaignData)
  return response.data
}

export const updateCampaign = async (campaignId: string, campaignData: any) => {
  const response = await api.post(
    `/user/campaigns/update/${campaignId}`,
    campaignData
  )
  return response.data
}
