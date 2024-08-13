import { api } from '../api/Api'
import { useQuery } from 'react-query'

const useListCampaigns = () => {
  return useQuery(['list-campaigns'], async () => {
    const { data } = await api.get('/user/campaings/list')
    return data
  })
}

export { useListCampaigns }
