import { IconTicket } from '@/components/icons'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { useCreateCampaigns } from '@/hooks/useCampaings'
import { StateCampaignsType } from '@/types/CampaingType'
import { ErrorResponse } from '@/types/ErrorResponse'
import React, { useState } from 'react'
import AwardsPageCampaigns from './AwardsPageCampaigns'
import ConfigPageCampaigns from './ConfigPageCampaigns'
import InfoPageCampaigns from './InfoPageCampaigns'
import ReviewPageCampaigns from './ReviewPageCampaigns'
import StepperPageCampaigns from './StepperPageCampaigns'
import SuccessPageCampaigns from './SuccessPageCampaigns'

const CreatePageCampaigns: React.FC = () => {
  const { mutate: campaign } = useCreateCampaigns()
  const [stateCampaigns, setStateCampaigns] = useState<StateCampaignsType>({
    step: 1,
    campaign_name: '',
    campaign_call: '',
    support_phone: '',
    support_email: '',
    campaign_description: '',
    mask_phone: '',
    mask_email: '',
    total_quotas: '',
    quota_value: '',
    quota_max: '',
    quota_min: '',
    prize: '',
    second_prize: '',
    third_prize: '',
    location: '',
    image_base64: null,
    name_file_userimg: '',
    pdf_base64: null,
    name_file_userpdf: '',
    promote_date: false,
    promote_rule: false,
    promote_affiliate: false,
    draw_date: '',
    affiliate_percent: '',
    quota_time: '',
    status: 'active',
    date_percent: ''
  })

  const handleCreateCampaign = async () => {
    const formData: FormData = new FormData()
    formData.append('campaign_name', stateCampaigns.campaign_name)
    formData.append('campaign_call', stateCampaigns?.campaign_call)
    formData.append('support_phone', stateCampaigns?.support_phone)
    formData.append('support_email', stateCampaigns?.support_email)
    formData.append('campaign_description', stateCampaigns?.campaign_description)
    formData.append('campaign_model', '1')
    formData.append('total_quotas', stateCampaigns?.total_quotas)
    formData.append('quota_value', stateCampaigns?.quota_value)
    formData.append('quota_max', stateCampaigns?.quota_max)
    formData.append('quota_min', stateCampaigns?.quota_min)
    formData.append('quota_time', stateCampaigns?.quota_time)
    formData.append('location', stateCampaigns?.location)
    formData.append('pdf_base64', stateCampaigns?.pdf_base64 ?? '')
    formData.append('image_base64', stateCampaigns?.image_base64 ?? '')
    formData.append('status', stateCampaigns?.status)
    // formData.append('date_percent', stateCampaigns?.date_percent)
    formData.append('affiliates_percent', stateCampaigns?.affiliate_percent)
    formData.append('draw_date', stateCampaigns?.draw_date)
    formData.append('prize', stateCampaigns?.prize)
    formData.append('second_prize', stateCampaigns?.second_prize)
    formData.append('third_prize', stateCampaigns?.third_prize)
    campaign(formData, {
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
    })
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
        return (
          <InfoPageCampaigns state={stateCampaigns} setState={setStateCampaigns} />
        )
      case 2:
        return (
          <ConfigPageCampaigns state={stateCampaigns} setState={setStateCampaigns} />
        )
      case 3:
        return (
          <AwardsPageCampaigns state={stateCampaigns} setState={setStateCampaigns} />
        )
      case 4:
        return (
          <ReviewPageCampaigns state={stateCampaigns} setState={setStateCampaigns} />
        )
      case 5:
        return <SuccessPageCampaigns />
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
            <StepperPageCampaigns
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
                className="h-10 w-fit min-w-32 rounded-md bg-gradient-to-r from-[#FEEA8C] to-[#F9D94B] px-4 py-2 font-semibold text-slate-950 transition-all duration-300 hover:text-white"
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
    </Container>
  )
}

export default CreatePageCampaigns
