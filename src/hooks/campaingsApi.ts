import { api } from '@/api/Api'
import { useMutation } from 'react-query'

export const listCampaigns = async () => {
  const response = await api.get<App.campaignsProps[]>('/user/campaigns/list')
  return response.data
}

export const createCampaign = () => {
  return useMutation(
    async (params: {
      campaign_name: string
      campaign_call: string
      suport_phone: string
      suport_email: string
      campaign_description: string
      campaign_modal: string
      quota_value: string
      quota_max: number
      quota_min: number
      quota_time: number
      location: number
      userpdf: string | ArrayBuffer | null
      userimg: string | ArrayBuffer | null
      draw_date: string
      status: string
      prize: string
      second_prize: string
      third_prize: string
      total_quotas: string
    }) => {
      const { data } = await api.post('/user/campaigns/create', params)
      return data
    }
  )
}

export const updateCampaign = async (campaignId: string, campaignData: any) => {
  const response = await api.post(
    `/user/campaigns/update/${campaignId}`,
    campaignData
  )
  return response.data
}
