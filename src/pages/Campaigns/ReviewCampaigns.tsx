import IconMegaphone from '@/components/icons/MegaPhone'
import IconPrize from '@/components/icons/Prize'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { CreateCampaigns } from '@/types/banner'
import React, { Dispatch, SetStateAction } from 'react'

interface ReviewCampaignsProps {
  state: CreateCampaigns
  setState: Dispatch<SetStateAction<CreateCampaigns>>
}

const ReviewCampaigns: React.FC<ReviewCampaignsProps> = ({ state, setState }) => {
  //const isFormValid = true

  const QtdTicket = [
    {
      title: '+10',
      value: 10
    },
    {
      title: '+20',
      value: 20
    },
    {
      title: '+50',
      value: 50
    },
    {
      title: '+100',
      value: 100
    },
    {
      title: '+500',
      value: 500
    },
    {
      title: '+1000',
      value: 1000
    }
  ]

  return (
    <div className="flex">
      <div className="flex  h-[calc(100dvh-24rem)] w-[382px] flex-col items-center gap-2 overflow-auto rounded-xl border-2 border-gray-300 bg-[#E6E6E6] p-2">
        <img
          src={typeof state.banner === 'string' ? state.banner : ''}
          alt="Banner"
          className="h-[182px] w-[152px] rounded-lg object-cover"
        />
        <h2 className="w-8/12 rounded-md bg-white p-1 text-center shadow-md">
          {state.chamada}
        </h2>
        <div className="flex w-8/12 flex-col rounded-md bg-white p-1 text-center font-medium shadow-md">
          <span className="flex justify-center gap-2 text-xs text-[#A0AEC0]">
            Premios <IconPrize color="#A0AEC0" size={14} />
          </span>
          <label htmlFor="">
            1º Prêmio:{' '}
            <span className="font-semibold text-black">{state.firstPrize}</span>
          </label>
          <label htmlFor="">
            2º Prêmio:{' '}
            <span className="font-semibold text-black">{state.secondPrize}</span>
          </label>
          <label htmlFor="">
            3º Prêmio:{' '}
            <span className="font-semibold text-black">{state.thirdPrize}</span>
          </label>
        </div>
        <div className="flex w-8/12 flex-col gap-1 rounded-md bg-white p-2 text-center font-medium shadow-md">
          <span className="text-[10px] uppercase text-[#A0AEC0]">
            Selecione a quantidade de bilhetes
          </span>
          <div className="grid grid-cols-2 gap-1">
            {QtdTicket.map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-md border-[1px] border-[#A0AEC070] bg-[#DEEAF2] p-1 text-center text-xs font-medium text-[#3D3D3D]"
              >
                <span>{item.title}</span>
                <span>SELECIONAR</span>
              </div>
            ))}
          </div>
          <Select
            onValueChange={(e) =>
              setState({
                ...state,
                tempo: e
              })
            }
          >
            <SelectTrigger value={state.tempo} className="bg-white shadow-sm">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="100">100</SelectItem>
                <SelectItem value="350">350</SelectItem>
                <SelectItem value="500">500</SelectItem>
                <SelectItem value="1000">1000</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button className="bg-[#0C9C35] text-xs">
            Comprar bilhetrs por R$ XX,XX
          </Button>
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
          <label className="text-[4px] text-[#3D3D3D]">
            {state.description.split(' ').slice(0, 38).join(' ')}
            {state.description.split(' ').length > 24 && '...'}
          </label>
        </div>
        <Button className="w-8/12 bg-[#0C9C35] text-xs">Acesse o regulamento</Button>
      </div>
      <div className="flex flex-col p-4 text-black">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Revisão da Campanha</h1>
          <button className="text-sm font-semibold text-[#255E17]">Editar</button>
        </div>
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
            Na Alfa Sorteios fornecemos apenas a infraestrutura especializada para
            que os organizadores criem suas campanhas promocionais.
          </p>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          <input
            type="checkbox"
            id="terms"
            // checked={checked}
            // onChange={() => setChecked(!checked)}
            className="h-4 w-4 cursor-pointer"
          />
          <label className="ml-2 text-xs" htmlFor="terms">
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
