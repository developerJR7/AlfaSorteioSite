import { api } from '@/api/Api'
import { PromotionStatetype, PromotionType } from '@/types/PromotionType'
import { useMutation, useQuery } from 'react-query'

const usePromotionsInfo = () => {
  return useQuery('list-promotions', async () => {
    const { data } = await api.get<PromotionType>('user/quotas/list_sales')
    return data.sales
  })
}

const useCreatePromotion = () => {
  return useMutation(async (promotionData: PromotionStatetype) => {
    const { data } = await api.post('user/quotas/create_sale', promotionData)
    return data
  })
}

export { useCreatePromotion, usePromotionsInfo }
