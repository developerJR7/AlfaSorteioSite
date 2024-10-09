import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CardForLogin } from '@/components/layout/card/cardLogin'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import IconLeafClover from '@/components/icons/LeaftClover'
import { toast } from '@/components/ui/use-toast'
import { Separator } from '@/components/ui/separator'
import { useResetPassword } from '@/hooks/useAuth'
import EsqueceuASenha from '@/assets/esqueceu_a_senha.png'

const ResetPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>()
  const navigate = useNavigate()
  const { mutate: resetPassword, isLoading } = useResetPassword()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleResetPassword = () => {
    if (!token) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Token inválido ou ausente. Tente novamente.'
      })
      return
    }

    if (newPassword !== confirmPassword) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'As senhas não coincidem. Tente novamente.'
      })
      return
    }

    resetPassword(
      { token, newPassword },
      {
        onSuccess: () => {
          toast({
            variant: 'success',
            title: 'Senha alterada com sucesso!',
            description: 'Você pode fazer login com sua nova senha.'
          })
          navigate('/login')
        },
        onError: (error: any) => {
          console.error(error)
          toast({
            variant: 'destructive',
            title: 'Erro ao redefinir senha',
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
          alt="imagem de redefinição de senha"
          height={400}
          width={420}
        />
      </div>
      <div className="flex h-dvh w-3/5 items-center justify-center bg-white">
        <CardForLogin
          title="Redefinir Senha"
          option={'Digite sua nova senha e confirme para redefini-la.'}
          logo={IconLeafClover}
          content={
            <div className="flex flex-col items-center gap-4">
              <div className="flex w-full items-center gap-4 rounded-xl border-0 bg-slate-100 p-4 text-lg font-medium text-colorPrimary-500 shadow-lg">
                <input
                  className="w-full bg-slate-100"
                  type="password"
                  placeholder="Nova Senha"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center gap-4 rounded-xl border-0 bg-slate-100 p-4 text-lg font-medium text-colorPrimary-500 shadow-lg">
                <input
                  className="w-full bg-slate-100"
                  type="password"
                  placeholder="Confirme sua Senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          }
          footer={
            <div className="flex w-full flex-col gap-4">
              <div className="flex flex-col items-end justify-end gap-4">
                <Button
                  className="w-full rounded-lg bg-gradient-to-r from-[#FEEA8C] to-[#F9D94B] px-12 py-6 text-xl font-semibold text-[#3D3D3D] transition-all duration-300 hover:text-white"
                  disabled={!newPassword || !confirmPassword || isLoading}
                  onClick={handleResetPassword}
                >
                  {isLoading ? (
                    <LoaderCircle className="h-6 w-6 animate-spin text-white transition-transform" />
                  ) : (
                    'Redefinir Senha'
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

export default ResetPassword
