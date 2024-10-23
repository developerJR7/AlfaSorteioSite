import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

// Tipos de dados para a listagem e criação de afiliados
export interface AffiliatesListProps {
  name: string
  linkedCampaign: string
  totalValue: number
}

export interface CreateAffiliateProps {
  name: string
  email: string
  telefone: string
  address: string
}

export interface CreateAffiliateState extends CreateAffiliateProps {
  step: number
}

// Hook para listar afiliados
export const listAffiliates = () => {
  return useQuery(['list-affiliates'], async () => {
    const { data } = await axios.get<AffiliatesListProps[]>('/actions/affiliates')
    return data
  })
}

// Hook para criar um novo afiliado
export const useCreateAffiliate = () => {
  const queryClient = useQueryClient()

  return useMutation(
    async (newAffiliate: CreateAffiliateProps) => {
      const { data } = await axios.post('/actions/affiliates', newAffiliate)
      return data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['list-affiliates'])
      },
      onError: (error) => {
        console.error('Erro ao criar o afiliado:', error)
      }
    }
  )
}
