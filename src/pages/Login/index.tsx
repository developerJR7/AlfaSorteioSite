import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MeninaAlfaSorteios from '@/assets/menina_alfa_sorteios.png'
import { CardForLogin } from '@/components/layouts/card/cardforlogin'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import UserCircle from '@/components/icons/UserCicle'
import IconLock from '@/components/icons/Lock'
import { toast } from '@/components/ui/use-toast'
import AuthApi from '@/services/AuthApi'
import { useAlfa } from '@/contexts/UserContent'
import IconLeafClover from '@/components/icons/leafClover'
import { Separator } from '@/components/ui/separator'

const Welcome: React.FC = () => {
  const navigate = useNavigate()
  const { signIn } = useAlfa()
  const [loading, setLoading] = useState<boolean>(false)
  const [state, setState] = useState<{ email: string; pwd: string }>({
    email: '',
    pwd: ''
  })

  const ButtonsList = [
    {
      type: 'email',
      icon: UserCircle,
      title: 'Login'
    },
    {
      type: 'pwd',
      icon: IconLock,
      title: 'Senha'
    }
  ]

  const isFormValid = Object.values(state).every((value) => value.trim() !== '')

  const handleLogin = async () => {
    setLoading(true)
    await AuthApi.login({ ...state })
      .then((res: any) => {
        setState((prev) => ({
          ...prev,
          stepPage: 0
        }))
        signIn(res.key)
        navigate('/')
      })
      .catch((e: any) => {
        toast({
          variant: 'destructive',
          title: e.response?.data?.error,
          description: 'repita o processo.'
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="flex justify-between">
      <div className="flex h-dvh w-2/5 items-end justify-center">
        <img
          src={MeninaAlfaSorteios}
          alt="foto da menina alfa sorteios"
          height={629}
          width={474}
        />
      </div>
      <div className="flex h-dvh w-3/5 items-center justify-center bg-white">
        <CardForLogin
          title="Login"
          option={'Acesse e comece a usar'}
          logo={IconLeafClover}
          content={
            <div className="flex flex-col items-center gap-4">
              {ButtonsList.map(({ type, icon: Icon, title }, number) => (
                <div
                  className="flex w-full items-center gap-4 rounded-xl border-0 bg-slate-100 fill-colorPrimary-500 p-4 text-lg font-medium text-colorPrimary-500 shadow-lg"
                  key={number + type}
                >
                  {Icon && <Icon className="h-6 w-6" />}
                  <input
                    className="bg-slate-100"
                    type={type === 'pwd' ? 'password' : type}
                    placeholder={title}
                    value={state[type as keyof typeof state]}
                    onChange={(e) =>
                      setState((prev) => ({ ...prev, [type]: e.target.value }))
                    }
                  />
                </div>
              ))}
            </div>
          }
          footer={
            <div className="flex w-full flex-col gap-4">
              <div className="flex flex-col items-end justify-end gap-4">
                <label className="text-sm font-semibold text-colorPrimary-500">
                  Esqueceu sua senha
                </label>
                <Button
                  className="rounded-lg bg-gradient-to-r from-[#FEEA8C] to-[#F9D94B] px-12 py-6 text-xl font-semibold text-[#3D3D3D] transition-all duration-300 hover:text-white"
                  disabled={!isFormValid}
                  onClick={handleLogin}
                >
                  {loading ? (
                    <LoaderCircle className="h-10 w-10 animate-spin text-white transition-transform" />
                  ) : (
                    'Login'
                  )}
                </Button>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <Separator className=" mb-2 border-l border-[#A0AEC0]" />
                <p className="text-sm text-[#A0AEC0]">
                  Não possui conta?{' '}
                  <Link
                    className="text-sm font-semibold text-colorPrimary-500"
                    to={'/register'}
                  >
                    Registra-se já
                  </Link>
                </p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default Welcome