import { useMutation } from 'react-query'
import { api } from '../api/Api'

const useLogin = () => {
  return useMutation(async (params: { email: string; pwd: string }) => {
    const { data } = await api.post('/actions/login', params)
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
        pwd: pwd
      })
      return data
    }
  )
}

const useForgotPassword = () => {
  return useMutation(async ({ email }: { email: string }) => {
    const { data } = await api.post('/actions/reset_password', {
      email
    })
    return data
  })
}

const useResetPassword = () => {
  return useMutation(
    async ({
      email,
      token,
      new_password
    }: {
      email: string
      token: string
      new_password: string
    }) => {
      const { data } = await api.post('/actions/change_password', {
        email,
        token,
        new_password
      })
      return data
    }
  )
}

export { useForgotPassword, useLogin, useRegister, useResetPassword }
