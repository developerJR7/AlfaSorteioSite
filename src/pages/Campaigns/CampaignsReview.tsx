import React, { useState } from 'react'

const CampaignsReview: React.FC = () => {
  const [checked, setChecked] = useState(false)

  //const isFormValid = true

  return (
    <div className="flex flex-col p-4 text-black">
      <div className="mx-auto w-full max-w-lg text-left">
        <h2 className="mb-4 text-xl font-bold">Revise a sua Campanha</h2>
        <p className="mb-4 text-base">
          Por favor, revise os detalhes da sua campanha antes de prosseguir.
        </p>
        <h3 className="mb-4 text-lg font-semibold">Atenção:</h3>
        <p className="mb-4 text-sm">
          A Alfa Sorteios não se responsabiliza pela criação, organização, ou pelas
          autorizações necessárias das campanhas. Toda a responsabilidade por essas
          atividades é exclusivamente dos organizadores.
        </p>
        <p className="text-sm">
          Na Alfa Sorteios fornecemos apenas a infraestrutura especializada para que
          os organizadores criem suas campanhas promocionais.
        </p>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        <input
          type="checkbox"
          id="terms"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="h-4 w-4 cursor-pointer"
        />
        <label className="ml-2 text-xs" htmlFor="terms">
          Ao criar a campanha, você aceita{' '}
          <span className="font-semibold">Termos de Uso</span> e nossa{' '}
          <span className="font-semibold">Política de Privacidade</span>
        </label>
      </div>
    </div>
  )
}

export default CampaignsReview
