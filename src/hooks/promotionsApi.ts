import { api } from '@/api/Api'
import { PromotionStatetype } from '@/types/promotions'

import { useMutation } from 'react-query'

interface PromotionType {
  sales: PromotionStatetype[]
}

export const listPromotions = async () => {
  const response = await api.get<PromotionType>('/user/quotas/list_sales')
  return response.data.sales
}

export const createPromotion = () => {
  return useMutation(async (promotionData: PromotionStatetype) => {
    const { data } = await api.post('/user/quotas/create_sale', promotionData)
    return data
  })
}
