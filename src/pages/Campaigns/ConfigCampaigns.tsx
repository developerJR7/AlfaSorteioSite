import IconUpload from '@/components/icons/Upload'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { StateCampaignsType } from '@/types/campaings'
import { Switch } from '@headlessui/react'
import React, { Dispatch, SetStateAction } from 'react'

interface configCampaignsProps {
  state: StateCampaignsType
  setState: Dispatch<SetStateAction<StateCampaignsType>>
}

const LocationCampaigns = {
  'loteria federal': '0',
  'live instagram': '1',
  'live youtube': '2',
  'live tiktok': '3',
  outros: '4'
}

const ConfigCampaigns: React.FC<configCampaignsProps> = ({ state, setState }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 text-sm font-normal text-black">
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Quantidade de Cotas</label>
          <Input
            type="tel"
            placeholder="1 ~ 1.000.000.000"
            className="bg-white shadow-sm"
            value={state.total_quotas}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState({
                ...state,
                total_quotas: e.target.value
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Valor da Cota</label>
          <Input
            type="email"
            placeholder="R$"
            className="bg-white text-xs shadow-sm"
            value={state.quota_value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState({
                ...state,
                quota_value: e.target.value
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">
            Quantidade mínima de cotas por compra
          </label>
          <Input
            type="text"
            placeholder="1"
            className="bg-white shadow-sm"
            value={state.quota_min}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState({
                ...state,
                quota_min: e.target.value
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">
            Quantidade máxima de cotas por compra
          </label>
          <Input
            type="text"
            placeholder="1 ~ 1.000.000.000"
            className="bg-white shadow-sm"
            value={state.quota_max}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState({
                ...state,
                quota_max: e.target.value
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="select1" className="font-semibold">
            Tempo para pagamento da cota
          </label>
          <Select
            defaultValue={state.quota_time}
            onValueChange={(e) =>
              setState({
                ...state,
                quota_time: e
              })
            }
          >
            <SelectTrigger
              value={state.quota_time}
              className="bg-white px-4 py-2 shadow-sm"
            >
              <SelectValue placeholder={'Selecione'} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">10 minutos</SelectItem>
                <SelectItem value="30">30 minutos</SelectItem>
                <SelectItem value="60">1 hora</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="select2" className="font-semibold">
            Local do Sorteio
          </label>
          <Select
            defaultValue={state.location}
            onValueChange={(e: string) =>
              setState({
                ...state,
                location: LocationCampaigns[e as keyof typeof LocationCampaigns]
              })
            }
          >
            <SelectTrigger
              value={state.location}
              className="bg-white px-4 py-2 shadow-sm"
            >
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
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Regras para a data do Sorteio</label>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <Switch
                checked={state.promote_date}
                onChange={() => {
                  setState({
                    ...state,
                    promote_date: !state.promote_date
                  })
                }}
                className={cn(
                  'relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
                  state.promote_date ? 'bg-green-500' : 'bg-red-500'
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out',
                    state.promote_date ? 'translate-x-5' : 'translate-x-0'
                  )}
                />
              </Switch>
              <label className="text-gray-600">Informar a data do sorteio</label>
            </div>
            <Input
              type="text"
              disabled={!state.promote_date}
              placeholder="0"
              className="w-3/12 bg-white text-xs shadow-sm"
              value={state.draw_date}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  draw_date: e.target.value
                }))
              }
            />
          </div>
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-1">
              <Switch
                checked={state.promote_rule}
                onChange={() => {
                  setState({
                    ...state,
                    promote_rule: !state.promote_rule
                  })
                }}
                className={`relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  state.promote_rule ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                    state.promote_rule ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </Switch>
              <label className="text-gray-600">Regras para definir a data</label>
            </div>
            <Input
              type="text"
              disabled={!state.promote_rule}
              placeholder="0"
              className="w-3/12 bg-white text-xs shadow-sm"
              value={state.date_percent}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  date_percent: e.target.value
                }))
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="promoteAffiliates" className="font-semibold">
            Promover na Vitrine de Afiliados
          </label>
          <label
            htmlFor="promoteAffiliates"
            className="text-xs font-normal text-slate-600"
          >
            Caso sim, defina o percentual de comissão por cota vendida
          </label>
          <div className="flex items-start gap-8">
            <RadioGroup
              defaultValue="1"
              onValueChange={() =>
                setState({
                  ...state,
                  promote_affiliate: !state.promote_affiliate
                })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="0" id="option-one" />
                <label htmlFor="option-one">Sim</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1" id="option-two" />
                <label htmlFor="option-two">Não</label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-1">
              <Input
                type="text"
                disabled={!state.promote_affiliate}
                placeholder="0"
                className="w-3/12 bg-white text-xs shadow-sm"
                value={state.affiliate_percent}
                onChange={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    affiliate_percent: e.target.value
                  }))
                }
              />
              <span>%</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Upload do Regulamento</label>
          <div className="flex items-center gap-2">
            {state?.name_file_userpdf.length >= 1 ? (
              <label className="flex w-full items-center justify-between gap-2 rounded-md bg-white px-4 py-2 shadow-sm">
                {state?.name_file_userpdf}
                <button
                  className="size-4 rounded-full"
                  onClick={() =>
                    setState({ ...state, userpdf: null, name_file_userpdf: '' })
                  }
                >
                  X
                </button>
              </label>
            ) : (
              <button
                className="flex w-full items-center gap-2 rounded-md bg-white px-4 py-2 shadow-sm"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('fileInput')?.click()
                }}
              >
                <IconUpload className="h-6 w-6" />
                Faça o upload do regulamento
              </button>
            )}
            <Input
              id="fileInput"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => {
                e.preventDefault()
                const file = e.target.files ? e.target.files[0] : null
                if (file) {
                  const reader = new FileReader()
                  reader.onload = (e) => {
                    const target = e.target as FileReader
                    const base64File = target.result?.toString().split(',')[1]
                    if (base64File) {
                      setState({
                        ...state,
                        userpdf: base64File,
                        name_file_userpdf: file.name
                      })
                    } else {
                      console.error('Failed to convert file to base64')
                    }
                  }
                  reader.onerror = (error) => {
                    console.error('Error reading file:', error)
                  }
                  reader.readAsDataURL(file)
                } else {
                  console.error('No file selected')
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfigCampaigns
