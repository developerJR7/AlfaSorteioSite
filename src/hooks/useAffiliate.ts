import { api } from '@/api/Api'
import { AffiliateType } from '@/types/AffiliateType'
import { useMutation, useQuery } from 'react-query'

const useAffiliatesInfo = () => {
  return useQuery('list-affiliates', async () => {
    const { data } = await api.get<AffiliateType[]>('/actions/affiliates')
    return data
  })
}

const useCreateAffiliate = () => {
  return useMutation(
    async (params: {
      name: string
      email: string
      telefone: string
      address: string
    }) => {
      const { data } = await api.post('/actions/affiliates', params)
      return data
    }
  )
}

export { useAffiliatesInfo, useCreateAffiliate }
