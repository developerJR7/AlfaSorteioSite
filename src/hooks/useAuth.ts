import md5 from 'md5'
import { api } from '../api/Api'
import { useMutation } from 'react-query'
import { UserTypes } from '@/types/userTypes'
import { Phone } from 'lucide-react'

const useLogin = () => {
  return useMutation(async ({ email, pwd }: { email: string; pwd: string }) => {
    const { data } = await api.post<UserTypes>('/actions/login', {
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
      Phone: string
      pwd: string
    }) => {
      const { data } = await api.post<UserTypes>('/actions/register', {
        email,
        pwd: md5(pwd)
      })
      return data
    }
  )
}

export default { useLogin, useRegister }
