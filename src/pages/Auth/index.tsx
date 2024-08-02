import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import IconLeafClover from '@/components/icons/LeaftClover'
import IconCorrectSign from '@/components/icons/CorrectSign'

const Welcome: React.FC = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }
  const CorrectPhase = [
    { text: 'Criação de', title: 'Campanha' },
    { text: 'Ranking diário da', title: 'Campanha' },
    { text: 'Sistema para', title: 'Afiliados' },
    { text: 'Histórico de', title: 'Vendas' },
    { text: 'Criação de', title: 'Promoções' },
    { text: 'Módulo de', title: 'Sorteio' }
  ]

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-x-hidden p-14">
      <Card className="h-5/6 max-h-[514px] w-9/12">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              <div className="flex items-start gap-2">
                <IconLeafClover className="size-20 fill-[#255E17]" />
              </div>
            </div>
            <p className="font-Helvetica text-base font-bold text-[#255E17]">
              Seja bem-vindo(a)
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between gap-4">
          <p className="font-Helvetica w-6/12 text-sm font-normal text-black">
            Aqui estão algumas das funcionalidades que você encontra na plataforma.
          </p>
          <div className="grid grid-cols-3 grid-rows-2">
            {CorrectPhase.map(({ text, title }) => (
              <div className="flex items-center justify-start gap-2">
                <IconCorrectSign color="#A0AEC0" size={24} />
                <span className=" text-xs font-normal text-black">{text}</span>
                <span className=" text-xs font-semibold  text-black">{title}</span>
              </div>
            ))}
          </div>
          <p className="text-xs font-normal  text-black">
            Desfrute de uma experiência sem complicações com nossa plataforma, 100%
            intuitiva e fácil de usar. E quando precisar, conte com a nossa dedicada
            equipe de suporte, sempre pronta para ajudar você em cada passo do
            caminho.
          </p>
          <Separator className=" w-[52%] border-l border-[#A0AEC0]" />
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <p className="font-Helvetica text-base font-bold  text-[#255E17]">
            Comece agora!
          </p>
          <p className=" text-xs font-normal  text-black">
            Faça seu{' '}
            <button className="font-bold text-black underline" onClick={handleLogin}>
              Login
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Welcome
