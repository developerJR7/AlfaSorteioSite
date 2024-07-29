import md5 from 'md5'
import { api } from '../api/Api'
import { useMutation } from 'react-query'

const useLogin = () => {
  return useMutation(async ({ email, pwd }: { email: string; pwd: string }) => {
    const { data } = await api.post<{ key: string }>('/actions/login', {
      email,
      pwd: md5(pwd)
    })
    return data
  })
}

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

export { useLogin, useRegister }
