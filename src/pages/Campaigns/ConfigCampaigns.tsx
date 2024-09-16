import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Switch } from '@headlessui/react'
import React, { Dispatch, SetStateAction } from 'react'

interface configCampaignsProps {
  state: {
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
  }
  setState: Dispatch<
    SetStateAction<{
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
    }>
  >
}

const ConfigCampaigns: React.FC<configCampaignsProps> = ({ state, setState }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 text-sm font-normal text-black">
        <div className="flex flex-col gap-1">
          <label className="font-bold">Quantidade de Cotas</label>
          <Input
            type="tel"
            placeholder="1 ~ 1.000.000.000"
            className="bg-white shadow-sm"
            value={state.quantidade}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState({
                ...state,
                quantidade: e.target.value
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-bold">Valor da Cota</label>
          <Input
            type="email"
            placeholder="R$"
            className="bg-white text-xs shadow-sm"
            value={state.valor}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState({
                ...state,
                valor: e.target.value
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-bold">Quantidade mínima de cotas por compra</label>
          <Input
            type="text"
            placeholder="1"
            className="bg-white shadow-sm"
            value={state.minimo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState({
                ...state,
                minimo: e.target.value
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-bold">Quantidade máxima de cotas por compra</label>
          <Input
            type="text"
            placeholder="1 ~ 1.000.000.000"
            className="bg-white shadow-sm"
            value={state.maximo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState({
                ...state,
                maximo: e.target.value
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="select1" className="font-bold">
            Tempo para pagamento da cota
          </label>
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
                <SelectItem value="10m">10 minutos</SelectItem>
                <SelectItem value="30m">30 minutos</SelectItem>
                <SelectItem value="1h">1 hora</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="select2" className="font-bold">
            Local do Sorteio
          </label>
          <Select
            onValueChange={(e) =>
              setState({
                ...state,
                local: e
              })
            }
          >
            <SelectTrigger value={state.local} className="bg-white shadow-sm">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="loteria federal">Loteria Federal</SelectItem>
                <SelectItem value="live instagram">Live no Instagram</SelectItem>
                <SelectItem value="live youtube">Live no Youtube</SelectItem>
                <SelectItem value="live tiktok">Live no Tiktok</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-bold">Upload do Regulamento</label>
          <div className="flex items-center gap-2">
            <Input
              type="file"
              placeholder="Faça o upload do Regulamento em PDF"
              className="bg-white shadow-sm"
              value={state.upload ? state.upload : ''}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  supportEmail: e.target.value
                }))
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="font-bold">Data do Sorteio</label>
          <div className="flex items-center justify-center gap-2">
            <Switch
              checked={state.diaDoSorteio}
              onChange={() => {
                setState({
                  ...state,
                  diaDoSorteio: !state.diaDoSorteio
                })
              }}
              className={`relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                state.diaDoSorteio ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              <span className="sr-only">Toggle 1</span>
              <span
                aria-hidden="true"
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  state.diaDoSorteio ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </Switch>
            <label className="translate-y-1 text-gray-600">
              Informar a data do sorteio
            </label>
            <Switch
              checked={state.regras}
              onChange={() => {
                setState({
                  ...state,
                  regras: !state.regras
                })
              }}
              className={`relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                state.regras ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              <span className="sr-only">Toggle 2</span>
              <span
                aria-hidden="true"
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  state.regras ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </Switch>
            <label className="translate-y-1 text-gray-600">
              Regras para definir a data
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="promoteAffiliates" className="font-bold">
            Promover na Vitrine de Afiliados
          </label>
          <Select
            onValueChange={(e) =>
              setState({
                ...state,
                promover: e
              })
            }
          >
            <SelectTrigger value={state.promover} className="bg-white shadow-sm">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="sim">Sim</SelectItem>
                <SelectItem value="nao">Não</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {state.promover === 'Option1' && (
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-black">
              Porcetagem Dos Afiliados
            </label>
            <Input
              type="text"
              placeholder="Defina o percentual de comissão por cota vendida"
              className="bg-white text-xs shadow-sm"
              // value={state.supportEmail}
              // onChange={(e) =>
              //   setState((prevState) => ({
              //     ...prevState,
              //     supportEmail: e.target.value
              //   }))
              // }
            />
          </div>
        )}
      </div>
    </>
  )
}

export default ConfigCampaigns
