import { Input } from '@/components/ui/input'
import { Switch } from '@headlessui/react'
import React, { useState } from 'react'

const ConfigCampaigns: React.FC = () => {
  const [campaignInfo, setCampaignInfo] = useState({
    supportPhone: '',
    supportEmail: '',
    minCotas: '',
    maxCotas: '',
    selectOption1: 'Option1',
    selectOption2: 'Option1',
    promoteAffiliates: 'Option1',
    enabled1: false,
    enabled2: false
  })

  const handlePromoteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCampaignInfo((prevState) => ({
      ...prevState,
      promoteAffiliates: e.target.value
    }))
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-black">Quantidade de Cotas</label>
          <Input
            type="tel"
            placeholder="1 ~ 1.000.000.000"
            className="bg-white text-xs shadow-sm"
            value={campaignInfo.supportPhone}
            onChange={(e) =>
              setCampaignInfo((prevState) => ({
                ...prevState,
                supportPhone: e.target.value
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-black">Valor da Cota</label>
          <Input
            type="email"
            placeholder="R$"
            className="bg-white text-xs shadow-sm"
            value={campaignInfo.supportEmail}
            onChange={(e) =>
              setCampaignInfo((prevState) => ({
                ...prevState,
                supportEmail: e.target.value
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-black">
            Quantidade mínima de cotas por compra
          </label>
          <Input
            type="text"
            placeholder="1"
            className="bg-white text-xs shadow-sm"
            value={campaignInfo.minCotas}
            onChange={(e) =>
              setCampaignInfo((prevState) => ({
                ...prevState,
                minCotas: e.target.value
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-black">
            Quantidade máxima de cotas por compra
          </label>
          <Input
            type="text"
            placeholder="1 ~ 1.000.000.000"
            className="bg-white text-xs shadow-sm"
            value={campaignInfo.maxCotas}
            onChange={(e) =>
              setCampaignInfo((prevState) => ({
                ...prevState,
                maxCotas: e.target.value
              }))
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="select1" className="text-xs font-bold text-black">
            Tempo para pagamento da cota
          </label>
          <select
            id="select1"
            name="select1"
            value={campaignInfo.selectOption1}
            onChange={(e) =>
              setCampaignInfo((prevState) => ({
                ...prevState,
                selectOption1: e.target.value
              }))
            }
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="Option1">10 minutos</option>
            <option value="Option2">30 minutos</option>
            <option value="Option3">1 hora</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="select2" className="text-xs font-bold text-black">
            Local do Sorteio
          </label>
          <select
            id="select2"
            name="select2"
            value={campaignInfo.selectOption2}
            onChange={(e) =>
              setCampaignInfo((prevState) => ({
                ...prevState,
                selectOption2: e.target.value
              }))
            }
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="Option1">Loteria Federal</option>
            <option value="Option2">Live no Instagram</option>
            <option value="Option3">Live no Youtube</option>
            <option value="Option4">Live no TikTok</option>
            <option value="Option5">Outros</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-black">
            Upload do Regulamento
          </label>
          <div className="flex items-center gap-2">
            <Input
              type="file"
              placeholder="Faça o upload do Regulamento em PDF"
              className="bg-white text-xs shadow-sm"
              value={campaignInfo.supportEmail}
              onChange={(e) =>
                setCampaignInfo((prevState) => ({
                  ...prevState,
                  supportEmail: e.target.value
                }))
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-xs font-bold text-black">Data do Sorteio</label>
          <div className="flex items-center justify-center gap-2">
            <Switch
              checked={campaignInfo.enabled1}
              onChange={() => {
                setCampaignInfo((prevState) => ({
                  ...prevState,
                  enabled1: !prevState.enabled1
                }))
              }}
              className={`relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                campaignInfo.enabled1 ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              <span className="sr-only">Toggle 1</span>
              <span
                aria-hidden="true"
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  campaignInfo.enabled1 ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </Switch>
            <label className="translate-y-1 text-xs text-gray-600">
              Informar a data do sorteio
            </label>
            <Switch
              checked={campaignInfo.enabled2}
              onChange={() => {
                setCampaignInfo((prevState) => ({
                  ...prevState,
                  enabled2: !prevState.enabled2
                }))
              }}
              className={`relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                campaignInfo.enabled2 ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              <span className="sr-only">Toggle 2</span>
              <span
                aria-hidden="true"
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  campaignInfo.enabled2 ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </Switch>
            <label className="translate-y-1 text-xs text-gray-600">
              Regras para definir a data
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="promoteAffiliates"
            className="text-xs font-bold text-black"
          >
            Promover na Vitrine de Afiliados
          </label>
          <select
            id="promoteAffiliates"
            name="promoteAffiliates"
            value={campaignInfo.promoteAffiliates}
            onChange={handlePromoteChange}
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="Option1">Sim</option>
            <option value="Option2">Não</option>
          </select>
        </div>
        {campaignInfo.promoteAffiliates === 'Option1' && (
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-black">
              Porcetagem Dos Afiliados
            </label>
            <Input
              type="text"
              placeholder="Defina o percentual de comissão por cota vendida"
              className="bg-white text-xs shadow-sm"
              value={campaignInfo.supportEmail}
              onChange={(e) =>
                setCampaignInfo((prevState) => ({
                  ...prevState,
                  supportEmail: e.target.value
                }))
              }
            />
          </div>
        )}
      </div>
    </>
  )
}

export default ConfigCampaigns
