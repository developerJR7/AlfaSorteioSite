import { toast } from '@/components/ui/use-toast'
import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('alfasorteios_token')

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status && error.response.data.error === 'Access FDenied') {
      localStorage.removeItem('alfasorteios_token')
      toast({
        variant: 'destructive',
        title: 'Você foi desconectado.',
        description: 'Faça login novamente.'
      })
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)
