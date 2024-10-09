import md5 from 'md5'
import { api } from '../api/Api'
import { useMutation } from 'react-query'
import { AxiosError } from 'axios'

interface LoginResponse {
  key: string
}

interface RegisterResponse {
  message: string
}

interface ForgotPasswordResponse {
  message: string
}

interface ResetPasswordResponse {
  message: string
}

// Hook para login
const useLogin = () => {
  return useMutation<LoginResponse, AxiosError, { email: string; pwd: string }>(
    async ({ email, pwd }) => {
      const { data } = await api.post<LoginResponse>('/actions/login', {
        email,
        pwd: md5(pwd)
      })
      console.log('API Response:', data)
      return data
    }
  )
}

// Hook para registro
const useRegister = () => {
  return useMutation<
    RegisterResponse,
    AxiosError,
    { name: string; email: string; phone: string; pwd: string }
  >(async ({ name, email, phone, pwd }) => {
    const { data } = await api.post<RegisterResponse>('/actions/register', {
      name,
      email,
      phone,
      pwd: md5(pwd)
    })
    console.log('API Response:', data)
    return data
  })
}

// Hook para recuperação de senha
const useForgotPassword = () => {
  return useMutation<ForgotPasswordResponse, AxiosError, { email: string }>(
    async ({ email }) => {
      const { data } = await api.post<ForgotPasswordResponse>('/actions/token_gen', {
        email
      })
      console.log('API Response:', data)
      return data
    }
  )
}

const useResetPassword = () => {
  return useMutation<
    ResetPasswordResponse,
    AxiosError,
    { token: string; newPassword: string }
  >(async ({ token, newPassword }) => {
    const { data } = await api.post<ResetPasswordResponse>(
      '/actions/reset_password',
      {
        token,
        newPassword: md5(newPassword)
      }
    )
    console.log('API Response:', data)
    return data
  })
}

export { useLogin, useRegister, useForgotPassword, useResetPassword }
