import md5 from 'md5'
import { api } from '../api/Api'
import { useMutation } from 'react-query'

// Hook para login
const useLogin = () => {
  return useMutation(async ({ email, pwd }: { email: string; pwd: string }) => {
    const { data } = await api.post<{ key: string }>('/actions/login', {
      email,
      pwd: md5(pwd)
    })
    console.log('API Response:', data)
    return data
  })
}

// Hook para registro
const useRegister = () => {
  return useMutation(
    async ({
      name,
      email,
      phone,
      pwd
    }: {
      name: string
      email: string
      phone: string
      pwd: string
    }) => {
      const { data } = await api.post('/actions/register', {
        name,
        email,
        phone,
        pwd: md5(pwd)
      })
      return data
    }
  )
}

// Hook para recuperação de senha
const useForgotPassword = () => {
  return useMutation(async ({ email }: { email: string }) => {
    const { data } = await api.post<{ message: string }>('/actions/token_gen', {
      email
    })
    console.log('API Response:', data)
    return data
  })
}

export { useLogin, useRegister, useForgotPassword }
