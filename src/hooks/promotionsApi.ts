import axios from 'axios'

interface Promotion {
  id: string
  title: string
  description: string
  price: number
}

export const listPromotions = async (): Promise<Promotion[]> => {
  try {
    const response = await axios.get<Promotion[]>('/quotas/list_sales')
    return response.data
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Error status:', error.response?.status)
      console.error('Error data:', error.response?.data)
    }
    console.error('Error fetching promotions:', error)
    throw new Error('Failed to fetch promotions.')
  }
}
