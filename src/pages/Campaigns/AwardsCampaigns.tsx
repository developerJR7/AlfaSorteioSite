import SetAwards from '@/assets/SetAwards.svg'
import IconUpload from '@/components/icons/Upload'
import { Input } from '@/components/ui/input'
import { CreateCampaigns } from '@/types/banner'
import React, { Dispatch, SetStateAction } from 'react'

interface AwardsCampaignsProps {
  state: CreateCampaigns
  setState: Dispatch<SetStateAction<CreateCampaigns>>
}

const AwardsCampaigns: React.FC<AwardsCampaignsProps> = ({ state, setState }) => {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-2">
        <label className="text-base font-semibold text-black">
          Banner da Campanha
        </label>
        {state?.banner !== null ? (
          <img
            src={typeof state.banner === 'string' ? state.banner : ''}
            alt="Banner"
            className="h-[442px] min-w-[382px] rounded-lg object-cover"
          />
        ) : (
          <div
            className="relative flex h-[442px] w-[382px] flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-white p-4 text-center shadow-sm"
            onClick={() => document.getElementById('file_upload')?.click()}
          >
            <IconUpload color="#A0AEC0" size={60} />
            <input
              id="file_upload"
              hidden
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  const reader = new FileReader()
                  reader.onload = (e) => {
                    const target = e.target as FileReader
                    setState({
                      ...state,
                      banner: target.result as string
                    })
                  }
                  reader.readAsDataURL(file)
                }
              }}
            />
            <label
              htmlFor="file_upload"
              className="text-sm font-semibold text-[#A0AEC0]"
            >
              Faça o upload do banner em PNG Tamanho sugerido 370 x 445 Pixels
            </label>
            <span className="absolute bottom-8 w-10/12 text-xs font-medium text-black">
              Sugestão: <br /> Faça uma arte bonita, emoldurada e chamativa da
              premiação
            </span>
          </div>
        )}
      </div>
      <div className="flex h-full w-full flex-col gap-12 text-sm font-medium">
        <div className="flex justify-center">
          <img src={SetAwards} alt="SVG" className="h-52 w-52" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex-col gap-2">
            <label className="font-bold text-black">
              Descreva o primeiro prêmio
            </label>
            <Input
              type="text"
              className="bg-white shadow-sm"
              value={state.firstPrize}
              onChange={(e) =>
                setState({
                  ...state,
                  firstPrize: e.target.value
                })
              }
            />
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <label className="font-bold text-black">
              Descreva o segundo prêmio, se houver
            </label>
            <Input
              type="text"
              className="bg-white shadow-sm"
              value={state.secondPrize}
              onChange={(e) =>
                setState({
                  ...state,
                  secondPrize: e.target.value
                })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-black">
              Descreva o terceiro prêmio, se houver
            </label>
            <Input
              type="text"
              className="bg-white shadow-sm"
              value={state.thirdPrize}
              onChange={(e) =>
                setState({
                  ...state,
                  thirdPrize: e.target.value
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AwardsCampaigns
