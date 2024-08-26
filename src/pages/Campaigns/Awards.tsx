import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import SetAwards from '@/assets/SetAwards.svg'

const Awards: React.FC = () => {
  const [enabled2, setEnabled2] = useState(false)
  const [showNewStep, setShowNewStep] = useState(false)
  const [campaignInfo, setCampaignInfo] = useState({
    nomeCampanha: '',
    maxCotas: '',
    minCotas: '',
    otherField: ''
  })

  const addStep = () => {
    setShowNewStep(true)
  }

  return (
    <div>
      {!showNewStep ? (
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Switch
              checked={enabled2}
              onChange={setEnabled2}
              className={`relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                enabled2 ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              <span className="sr-only">Toggle 2</span>
              <span
                aria-hidden="true"
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  enabled2 ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </Switch>
            <label className="translate-y-1 text-xs text-black">
              Crie promoções para aumentar as vendas da sua campanha
            </label>
          </div>
          <Link
            className="rounded-lg bg-gradient-to-r from-[#255E17] to-[#255E17] px-3 py-1 text-sm font-semibold text-[#3D3D3D] shadow-md transition-all duration-300 hover:text-white"
            to={'#'}
            onClick={addStep}
          >
            + nova
          </Link>
        </div>
      ) : (
        <div className="mt-4 flex gap-2">
          <div className="flex flex-col">
            <label className="translate-y-1 text-base text-black">
              Banner da Campanha
            </label>
            <div className="mt-2 h-[445px] w-[370px] rounded-tl-[11.69px] border-l border-r border-t border-gray-300 shadow-sm">
              <input id="file_upload" hidden type="file" />
              <label htmlFor="file_upload">
                Faça o upload do banner em PNG Tamanho sugerido 370 x 445 Pixels
              </label>
            </div>
          </div>
          <div className="flex w-full flex-col justify-end gap-10">
            <div className="flex justify-center">
              <img src={SetAwards} alt="SVG" className="h-52 w-52" />
            </div>
            <div className="flex-col gap-2">
              <label className="text-xs font-bold text-black">
                Descreva o primeiro prêmio
              </label>
              <Input
                type="text"
                className="bg-white text-xs shadow-sm"
                value={campaignInfo.nomeCampanha}
                onChange={(e) =>
                  setCampaignInfo((prevState) => ({
                    ...prevState,
                    nomeCampanha: e.target.value
                  }))
                }
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-black">
                Descreva o segundo prêmio, se houver
              </label>
              <Input
                type="text"
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
              <label className="text-xs font-bold text-black">
                Descreva o terceiro prêmio, se houver
              </label>
              <Input
                type="text"
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
          </div>
        </div>
      )}
    </div>
  )
}

export default Awards
