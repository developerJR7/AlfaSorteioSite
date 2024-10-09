import { IconTicket } from '@/components/icons'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { DialogContent } from '@/components/ui/dialog'
import { toast } from '@/components/ui/use-toast'
import { createCampaign } from '@/hooks/campaingsApi'
import { cn } from '@/lib/utils'
import { CreateCampaigns } from '@/types/banner'
import { ErrorResponse } from '@/types/ErrorResponse'
import { Dialog, DialogTitle } from '@radix-ui/react-dialog'
import React, { useEffect, useState } from 'react'
import AwardsCampaigns from './AwardsCampaigns'
import CampaignsSuccess from './CampaignsSuccess'
import ConfigCampaigns from './ConfigCampaigns'
import InfoCampaigns from './InfoCampaigns'
import ReviewCampaigns from './ReviewCampaigns'
import { Stepper } from './stepper'

const Create: React.FC = () => {
  const { mutate: campaign, isLoading } = createCampaign()
  const [stateCampaigns, setStateCampaigns] = useState<CreateCampaigns>({
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
    banner: null,
    regras: false,
    diaDoSorteio: false,
    promover: '',
    firstPrize: '',
    secondPrize: '',
    thirdPrize: ''
  })

  const handleCreateCampaign = async () => {
    campaign(
      {
        campaign_name: stateCampaigns.name,
        campaign_call: stateCampaigns.chamada,
        suport_phone: stateCampaigns.telefone,
        suport_email: stateCampaigns.email,
        campaign_description: stateCampaigns.description,
        quota_value: stateCampaigns.valor,
        campaign_modal: stateCampaigns.promover,
        total_quotas: stateCampaigns.quantidade,
        quota_max: Number(stateCampaigns.maximo),
        quota_min: Number(stateCampaigns.minimo),
        quota_time: Number(stateCampaigns.tempo),
        location: Number(stateCampaigns.local),
        userpdf: stateCampaigns.banner,
        userimg: stateCampaigns.upload,
        draw_date: new Date().toLocaleDateString(),
        status: stateCampaigns.promover,
        prize: stateCampaigns.firstPrize,
        second_prize: stateCampaigns.secondPrize,
        third_prize: stateCampaigns.thirdPrize
      },
      {
        onSuccess: (res: any) => {
          console.log(res)
          setStateCampaigns((prev) => ({ ...prev, step: 5 }))
        },
        onError: (error: unknown) => {
          const { response } = error as ErrorResponse
          toast({
            variant: 'destructive',
            title: response.data.error,
            description: 'repita o processo.'
          })
        }
      }
    )
  }

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
        return <InfoCampaigns state={stateCampaigns} setState={setStateCampaigns} />
      case 2:
        return (
          <ConfigCampaigns state={stateCampaigns} setState={setStateCampaigns} />
        )
      case 3:
        return (
          <AwardsCampaigns state={stateCampaigns} setState={setStateCampaigns} />
        )
      case 4:
        return (
          <ReviewCampaigns state={stateCampaigns} setState={setStateCampaigns} />
        )
      case 5:
        return <CampaignsSuccess />
      default:
        return null
    }
  }

  useEffect(() => {
    console.log('-->>', stateCampaigns)
  }, [stateCampaigns])

  return (
    <Container>
      <h4 className="flex items-center gap-4 fill-[#255E17] text-xl font-semibold text-[#255E17]">
        <IconTicket className="size-6" />
        Campanha
      </h4>
      <div className="flex h-dvh flex-col justify-between gap-4 rounded-xl border-2 border-[#A0AEC0] p-6 text-base">
        <div className="flex flex-col gap-4">
          {stateCampaigns.step < 5 && (
            <Stepper
              key={stateCampaigns.step}
              currentStep={stateCampaigns.step}
              stepsControl={stepsControl}
            />
          )}
          {renderStepContent()}
        </div>

        <div className="flex items-center justify-between">
          {stateCampaigns.step < 5 && (
            <>
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
                  stateCampaigns.step === 4
                    ? handleCreateCampaign()
                    : setStateCampaigns((prev) => ({ ...prev, step: prev.step + 1 }))
                }
              >
                {stateCampaigns.step === 4 ? 'Lançar Campanha' : 'Avançar'}
              </Button>
            </>
          )}
        </div>
      </div>
      <>
        <Dialog open={isLoading} onOpenChange={() => {}}>
          <DialogContent className={cn('h-[40%] w-[30%]')}>
            <DialogTitle>Criando nova Campanha!</DialogTitle>
          </DialogContent>
        </Dialog>
      </>
    </Container>
  )
}

export default Create
