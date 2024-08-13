import React, { useState } from 'react'
import { IconTicket } from '@/components/icons'
import { Container } from '@/components/layout/container'
import { Stepper } from './stepper'
import ConfigCampaigns from './ConfigCampaigns'
import InfoCampaigns from './InfoCampaigns'

const Create: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const stepsControl = [
    {
      number: 1,
      href: '#',
      status: 'complete',
      text: 'Informações Básicas da Campanha'
    },
    { number: 2, href: '#', status: 'complete', text: 'Configuração da Campanha' },
    { number: 3, href: '#', status: 'current', text: 'Defina os Prêmios' },
    { number: 4, href: '#', status: 'upcoming', text: 'Revisão da Campanha' },
    { number: 5, href: '#', status: 'upcoming', text: 'Criar Campanha' }
  ]

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <InfoCampaigns />
      case 2:
        return <ConfigCampaigns />
      default:
        return null
    }
  }

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Container>
      <h4 className="mb-4 flex items-center text-xl font-semibold text-[#255E17]">
        <IconTicket className="mr-2 size-7" />
        Campanha
      </h4>

      <Stepper
        currentStep={currentStep}
        color={'bg-[#255E17]'}
        stepsControl={stepsControl}
      />

      <div className="mt-8">{renderStepContent()}</div>

      <div className="mt-8 flex justify-between">
        <button
          className={`rounded bg-black px-4 py-2 text-gray-700 ${
            currentStep === 1 ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={handlePreviousStep}
          disabled={currentStep === 1}
        >
          Anterior
        </button>
        <button
          className={`rounded bg-[#255E17] px-4 py-2 text-white ${
            currentStep === 5 ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={handleNextStep}
          disabled={currentStep === 5}
        >
          Próximo
        </button>
      </div>
    </Container>
  )
}

export default Create
