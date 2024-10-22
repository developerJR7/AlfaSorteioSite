import IconMegaphone from '@/components/icons/MegaPhone'
import IconPrize from '@/components/icons/Prize'
import { Button } from '@/components/ui/button'
import { StateCampaignsType } from '@/types/campaings'
import React, { Dispatch, SetStateAction } from 'react'

interface ReviewCampaignsProps {
  state: StateCampaignsType
  setState: Dispatch<SetStateAction<StateCampaignsType>>
}

const ReviewCampaigns: React.FC<ReviewCampaignsProps> = ({ state }) => {
  //const isFormValid = true

  return (
    <div className="flex">
      <div className="flex  h-[calc(100dvh-24rem)] w-[382px] flex-col items-center gap-2 overflow-auto rounded-xl border-2 border-gray-300 bg-[#E6E6E6] p-2">
        <img
          src={typeof state.userimg === 'string' ? state.userimg : ''}
          alt="Banner"
          className="h-fit w-8/12 rounded-lg object-cover"
        />
        <h2 className="w-8/12 rounded-md bg-white p-1 text-center shadow-md">
          {state.campaign_call}
        </h2>
        <div className="flex w-8/12 flex-col rounded-md bg-white p-1 text-center font-medium shadow-md">
          <span className="flex justify-center gap-2 text-xs text-[#A0AEC0]">
            Premios <IconPrize color="#A0AEC0" size={14} />
          </span>
          <label htmlFor="">
            1º Prêmio:{' '}
            <span className="font-semibold text-black">{state.prize}</span>
          </label>
          <label htmlFor="">
            2º Prêmio:{' '}
            <span className="font-semibold text-black">{state.second_prize}</span>
          </label>
          <label htmlFor="">
            3º Prêmio:{' '}
            <span className="font-semibold text-black">{state.third_prize}</span>
          </label>
        </div>
        <div className="flex w-8/12 flex-col gap-1 rounded-md bg-white p-2 text-center text-xs font-medium shadow-md">
          <span className="flex justify-center gap-2 text-xs text-[#A0AEC0]">
            Promoções <IconMegaphone color="#A0AEC0" size={14} />
          </span>
          <label className="m-auto w-10/12 bg-[#0C9C35] text-center text-white">
            100 bilhetes por R$ XX,XX
          </label>
          <label className="m-auto w-10/12 bg-[#0C9C35] text-center text-white">
            1,000 bilhetes por R$ XX,XX
          </label>
          <label className="m-auto w-10/12 bg-[#0C9C35] text-center text-white">
            10,000 bilhetes por R$ XX,XX
          </label>
        </div>
        <div className="flex w-8/12 flex-col rounded-md bg-white p-1 text-center font-medium shadow-md">
          <span className="flex justify-center gap-2 text-xs text-[#A0AEC0]">
            Descrição
          </span>
          <label className="text-xs text-[#3D3D3D]">
            {state.campaign_description.split(' ').slice(0, 38).join(' ')}
            {state.campaign_description.split(' ').length > 24 && '...'}
          </label>
        </div>
        <Button className="w-8/12 bg-[#0C9C35] text-xs">Acesse o regulamento</Button>
      </div>
      <div className="flex w-10/12 flex-col gap-4 px-8 text-black">
        <h2 className="text-xl font-bold">Revise a sua Campanha</h2>
        <p className="text-sm">
          Por favor, revise os detalhes da sua campanha antes de prosseguir.
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Atenção:</h3>
          <p className="text-sm">
            A Alfa Sorteios não se responsabiliza pela criação, organização, ou pelas
            autorizações necessárias das campanhas. Toda a responsabilidade por essas
            atividades é exclusivamente dos organizadores.
          </p>
        </div>
        <p className="text-sm">
          Na Alfa Sorteios fornecemos apenas a infraestrutura especializada para que
          os organizadores criem suas campanhas promocionais.
        </p>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="terms"
            // checked={checked}
            // onChange={() => setChecked(!checked)}
            className="h-4 w-4 cursor-pointer"
          />
          <label className="ml-1 text-xs" htmlFor="terms">
            Ao criar a campanha, você aceita{' '}
            <span className="font-semibold">Termos de Uso</span> e nossa{' '}
            <span className="font-semibold">Política de Privacidade</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default ReviewCampaigns
