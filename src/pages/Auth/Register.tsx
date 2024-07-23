import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import homemalfasorteios from '@/assets/homem_alfa_sorteios.png'
import IconLeafClover from '@/components/icons/leafClover'
import { LoaderCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Register: React.FC = () => {
  const [loading] = useState<boolean>(false)

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-x-hidden p-14">
      <Card className="h-5/6 max-h-[453px] w-9/12">
        <CardTitle className="flex justify-center">
          <IconLeafClover className="size-24 fill-[#255E17]" />
        </CardTitle>
        <CardContent className="flex justify-between">
          <div className="flex w-6/12 flex-col items-start justify-start gap-2">
            <p className="font-Helvetica text-xl font-bold text-[#255E17]">
              Registre-se
            </p>
            <p className="font-Helvetica text-xs font-normal text-black">
              Preencha os campos para registrar-se
            </p>
            <div className="flex h-full w-full items-end justify-center">
              <img
                src={homemalfasorteios}
                alt="Foto do homem Alfa Sorteios"
                className="w-56 object-cover"
              />
            </div>
          </div>
          <form className="flex w-6/12 flex-col gap-2 text-xs">
            <Input placeholder="Nome completo" />
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
            <Input placeholder=" Repita sua Senha" />
            <Input placeholder="(00) 0 0000-0000" />
            <div className="flex gap-2">
              <input type="radio" />
              <label className="text-[10px]">
                Ao se registrar, você aceita os{' '}
                <span className="font-semibold">Termos de Uso</span> e nossa{' '}
                <span className="font-semibold">Política de Privacidade</span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <Link to={'/login'}> {`< Fazer Login `}</Link>
              <Button
                className="rounded-lg bg-gradient-to-r from-[#FEEA8C] to-[#F9D94B] px-4 py-2  font-semibold text-[#3D3D3D] transition-all duration-300 hover:text-white"
                //disabled={!isFormValid}
                //onClick={handleLogin}
              >
                {loading ? (
                  <LoaderCircle className="h-10 w-10 animate-spin text-white transition-transform" />
                ) : (
                  'Registrar-se'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Register
