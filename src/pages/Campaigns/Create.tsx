import { IconTicket } from '@/components/icons'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Awards from './Awards'
import CampaignsReview from './CampaignsReview'
import CampaignsSuccess from './CampaignsSuccess'
import ConfigCampaigns from './ConfigCampaigns'
import InfoCampaigns from './InfoCampaigns'
import { Stepper } from './stepper'

const Create: React.FC = () => {
  const [stateCampaigns, setStateCampaigns] = useState<{
    step: number
    name: string
    chamada: string
    telefone: string
    email: string
    description: string
    quantidade: string
    valor: string
    minimo: string
    maximo: string
    tempo: string
    local: string
    upload: null
    regras: boolean
    diaDoSorteio: boolean
    promover: string
  }>({
    step: 1,
    name: '',
    chamada: '',
    telefone: '',
    email: '',
    description: '',
    quantidade: '',
    valor: '',
    minimo: '',
    maximo: '',
    tempo: '',
    local: '',
    upload: null,
    regras: false,
    diaDoSorteio: false,
    promover: ''
  })
  const stepsControl = [
    { number: 1, text: 'Informações Básicas da Campanha' },
    { number: 2, text: 'Configuração da Campanha' },
    { number: 3, text: 'Defina os Prêmios' },
    { number: 4, text: 'Revisão da Campanha' },
    { number: 5, text: 'Criar Campanha' }
  ]

  const renderStepContent = () => {
    switch (stateCampaigns.step) {
      case 1:
        return <InfoCampaigns setState={setStateCampaigns} />
      case 2:
        return <ConfigCampaigns setState={setStateCampaigns} />
      case 3:
        return <Awards />
      case 4:
        return <CampaignsReview />
      case 5:
        return <CampaignsSuccess />
      default:
        return null
    }
  }

  return (
    <Container>
      <h4 className="flex items-center gap-4 fill-[#255E17] text-xl font-semibold text-[#255E17]">
        <IconTicket className="size-6" />
        Campanha
      </h4>
      <div className="flex h-dvh flex-col justify-between gap-4 rounded-xl border-2 border-[#A0AEC0] p-6 text-base">
        <div className="flex flex-col gap-4">
          {stateCampaigns.step < 5 && (
            <Stepper currentStep={stateCampaigns.step} stepsControl={stepsControl} />
          )}
          {renderStepContent()}
        </div>

        <div className="flex items-center justify-between">
          {stateCampaigns.step > 1 ? (
            <Button
              className="py-2transition-all h-10 w-32 rounded-md bg-white px-4 font-semibold text-slate-950 duration-300 hover:text-white"
              // disabled={!isFormValid}
              onClick={() =>
                setStateCampaigns((prev) => ({ ...prev, step: prev.step - 1 }))
              }
            >
              Voltar
            </Button>
          ) : (
            <span className="font-bold text-black">
              Não cobramos taxas de publicação.
            </span>
          )}
          <Button
            className="h-10 w-32 rounded-md bg-gradient-to-r from-[#FEEA8C] to-[#F9D94B] px-4 py-2 font-semibold text-slate-950 transition-all duration-300 hover:text-white"
            // disabled={!isFormValid}
            onClick={() =>
              setStateCampaigns((prev) => ({ ...prev, step: prev.step + 1 }))
            }
          >
            Avançar
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Create
