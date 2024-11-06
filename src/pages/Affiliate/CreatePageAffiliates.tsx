import { IconMoneyShare } from '@/components/icons'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { useCreateAffiliate } from '@/hooks/useAffiliate'
import { AffiliateStateType } from '@/types/AffiliateType'
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog'
import React, { useEffect, useState } from 'react'
import MarketingPageAffiliates from './MarketingPageAffiliates'
import PaymentsPageAffiliates from './PaymentsPageAffiliates'
import RulesPageAffiliates from './RulesPageAffiliates'
import StepperPageAffiliates from './StepperPageAffiliates'
import SupportPageAffiliates from './SupportPageAffiliates'

const CreatePageAffiliates: React.FC = () => {
  const { mutate: createAffiliate, isLoading } = useCreateAffiliate()

  const [affiliateState, setAffiliateState] = useState<AffiliateStateType>({
    step: 1,
    name: '',
    email: '',
    telefone: '',
    address: ''
  })

  const stepsControl = [
    { number: 1, text: 'Pagamentos e Comissões' },
    { number: 2, text: 'Materiais de Divulgação' },
    { number: 3, text: 'Suporte para os Afiliados' },
    { number: 4, text: 'Criar Regras para os Afiliados' }
  ]

  const handleCreateAffiliate = () => {
    const { name, email, telefone, address } = affiliateState
    createAffiliate(
      { name, email, telefone, address },
      {
        onSuccess: () => {
          setAffiliateState((prev) => ({ ...prev, step: 5 }))
        },
        onError: (error: unknown) => {
          console.error(error)
          toast({
            variant: 'destructive',
            title: 'Erro ao criar afiliado',
            description: 'Tente novamente.'
          })
        }
      }
    )
  }

  const renderStepContent = () => {
    switch (affiliateState.step) {
      case 1:
        return (
          <PaymentsPageAffiliates
            state={affiliateState}
            setState={setAffiliateState}
          />
        )
      case 2:
        return (
          <MarketingPageAffiliates
            state={affiliateState}
            setState={setAffiliateState}
          />
        )
      case 3:
        return (
          <SupportPageAffiliates
            state={affiliateState}
            setState={setAffiliateState}
          />
        )
      case 4:
        return (
          <RulesPageAffiliates state={affiliateState} setState={setAffiliateState} />
        )
      default:
        return <div>Etapa não encontrada</div>
    }
  }

  useEffect(() => {
    console.log('Current State:', affiliateState)
  }, [affiliateState])

  return (
    <Container>
      <h4 className="flex items-center gap-4 fill-[#255E17] text-xl font-semibold text-[#255E17]">
        <IconMoneyShare className="size-6" />
        Afiliado
      </h4>
      <div className="flex h-dvh flex-col justify-between gap-4 rounded-xl border-2 border-[#A0AEC0] p-6 text-base">
        <div className="flex flex-col gap-4">
          {affiliateState.step < 5 && (
            <StepperPageAffiliates
              key={affiliateState.step}
              currentStep={affiliateState.step}
              stepsControl={stepsControl}
            />
          )}
          {renderStepContent()}
        </div>
        <div className="flex items-center justify-between">
          {affiliateState.step < 5 && (
            <>
              {affiliateState.step > 1 ? (
                <Button
                  className="h-10 w-32 rounded-md bg-white px-4 py-2 font-semibold text-slate-950 transition-all duration-300 hover:text-white"
                  onClick={() =>
                    setAffiliateState((prev) => ({ ...prev, step: prev.step - 1 }))
                  }
                >
                  Voltar
                </Button>
              ) : (
                <span className="font-bold text-black">
                  Não cobramos taxas de cadastro.
                </span>
              )}
              <Button
                className="h-10 w-32 rounded-md bg-gradient-to-r from-[#FEEA8C] to-[#F9D94B] px-4 py-2 font-semibold text-slate-950 transition-all duration-300 hover:text-white"
                onClick={() =>
                  affiliateState.step === 4
                    ? handleCreateAffiliate()
                    : setAffiliateState((prev) => ({ ...prev, step: prev.step + 1 }))
                }
              >
                {affiliateState.step === 4 ? 'Finalizar Cadastro' : 'Avançar'}
              </Button>
            </>
          )}
        </div>
      </div>
      <Dialog open={isLoading} onOpenChange={() => {}}>
        <DialogContent className="h-[40%] w-[30%]">
          <DialogTitle>Finalizando o Cadastro do Afiliado!</DialogTitle>
        </DialogContent>
      </Dialog>
    </Container>
  )
}

export default CreatePageAffiliates
