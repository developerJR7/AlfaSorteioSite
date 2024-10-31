import md5 from 'md5'
import { useMutation } from 'react-query'
import { api } from '../api/Api'

const useLogin = () => {
  return useMutation(async ({ email, pwd }: { email: string; pwd: string }) => {
    const { data } = await api.post('/actions/login', {
      email,
      pwd
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
        pwd: pwd
      })
      return data
    }
  )
}

const useForgotPassword = () => {
  return useMutation(async ({ email }: { email: string }) => {
    const { data } = await api.post('/actions/token_gen', {
      email
    })
    return data
  })
}

const useResetPassword = () => {
  return useMutation(
    async ({ token, newPassword }: { token: string; newPassword: string }) => {
      const { data } = await api.post('/actions/reset_password', {
        token,
        newPassword: md5(newPassword)
      })
      return data
    }
  )
}

export { useForgotPassword, useLogin, useRegister, useResetPassword }
