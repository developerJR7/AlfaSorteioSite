import React, { useState, useEffect } from 'react'
import { IconMoneyShare } from '@/components/icons'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTitle, DialogContent } from '@radix-ui/react-dialog'
import { toast } from '@/components/ui/use-toast'
import MarketingMaterials from './MarketingMaterials'
import AffiliatesSupport from './affiliatesSupport'
import AffiliatesRules from './AffiliateRules'
import { Stepper } from './Stteper'
import PaymentsAffiliates from './PaymentsAffiliates'
import { useCreateAffiliate } from '@/hooks/AffiliateApi'
import { CreateAffiliateState } from '@/hooks/AffiliateApi'

const CreateAffiliates: React.FC = () => {
  const { mutate: createAffiliate, isLoading } = useCreateAffiliate()

  const [affiliateState, setAffiliateState] = useState<CreateAffiliateState>({
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
          <PaymentsAffiliates state={affiliateState} setState={setAffiliateState} />
        )
      case 2:
        return (
          <MarketingMaterials state={affiliateState} setState={setAffiliateState} />
        )
      case 3:
        return (
          <AffiliatesSupport state={affiliateState} setState={setAffiliateState} />
        )
      case 4:
        return (
          <AffiliatesRules state={affiliateState} setState={setAffiliateState} />
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
            <Stepper
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

export default CreateAffiliates
