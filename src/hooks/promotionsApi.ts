import { PromotionsListProps } from '@/pages/Promotions/ColumnsPromotions'
import axios from 'axios'
import { useQuery } from 'react-query'

export const listPromotions = () => {
  return useQuery(['list-promotions'], async () => {
    const { data } = await axios.get<PromotionsListProps[]>('/actions/gen_code')
    return data
  })
}
