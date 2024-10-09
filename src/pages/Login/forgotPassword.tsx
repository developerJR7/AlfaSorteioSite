import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CardForLogin } from '@/components/layout/card/cardLogin'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import IconLeafClover from '@/components/icons/LeaftClover'
import { toast } from '@/components/ui/use-toast'
import { Separator } from '@/components/ui/separator'
import { useForgotPassword } from '@/hooks/useAuth'
import EsqueceuASenha from '@/assets/esqueceu_a_senha.png'

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate()
  const { mutate: forgotPassword, isLoading } = useForgotPassword()
  const [email, setEmail] = useState('')

  const handleForgotPassword = async () => {
    forgotPassword(
      { email },
      {
        onSuccess: (res: { token: string }) => {
          navigate('https://alfasorteios.com/reset_password/' + res.token)

          toast({
            variant: 'success',
            title: 'E-mail enviado!',
            description: 'Por favor, verifique seu e-mail para redefinir sua senha.'
          })
        },
        onError: (error: any) => {
          console.error(error)
          toast({
            variant: 'destructive',
            title: 'Erro ao enviar e-mail',
            description: 'Por favor, tente novamente mais tarde.'
          })
        }
      }
    )
  }

  return (
    <div className="flex justify-between">
      <div className="flex h-dvh w-2/5 items-center justify-center">
        <img
          src={EsqueceuASenha}
          alt="foto do esqueceu a senha"
          height={400}
          width={420}
        />
      </div>
      <div className="flex h-dvh w-3/5 items-center justify-center bg-white">
        <CardForLogin
          title="Esqueceu a Senha"
          option={'Insira seu e-mail e enviaremos um link para redefinir sua senha.'}
          logo={IconLeafClover}
          content={
            <div className="flex flex-col items-center gap-4">
              <div className="flex w-full items-center gap-4 rounded-xl border-0 bg-slate-100 fill-colorPrimary-500 p-4 text-lg font-medium text-colorPrimary-500 shadow-lg">
                <input
                  className="w-full bg-slate-100"
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          }
          footer={
            <div className="flex w-full flex-col gap-4">
              <div className="flex flex-col items-end justify-end gap-4">
                <Button
                  className="w-full rounded-lg bg-gradient-to-r from-[#FEEA8C] to-[#F9D94B] px-12 py-6 text-xl font-semibold text-[#3D3D3D] transition-all duration-300 hover:text-white"
                  disabled={!email || isLoading}
                  onClick={handleForgotPassword}
                >
                  {isLoading ? (
                    <LoaderCircle className="h-6 w-6 animate-spin text-white transition-transform" />
                  ) : (
                    'Recuperar Senha'
                  )}
                </Button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Separator className="mb-2 border-l border-[#A0AEC0]" />
                <Link
                  className="text-sm font-semibold text-colorPrimary-500"
                  to={'/login'}
                >
                  Voltar ao login
                </Link>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default ForgotPassword
