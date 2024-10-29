import SetAwards from '@/assets/SetAwards.svg'
import IconUpload from '@/components/icons/Upload'
import { Input } from '@/components/ui/input'
import { StateCampaignsType } from '@/types/campaings'
import React, { Dispatch, SetStateAction } from 'react'

interface AwardsCampaignsProps {
  state: StateCampaignsType
  setState: Dispatch<SetStateAction<StateCampaignsType>>
}

const AwardsCampaigns: React.FC<AwardsCampaignsProps> = ({ state, setState }) => {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-2">
        <label className="text-base font-semibold text-black">
          Banner da Campanha
        </label>
        {state?.image_base64 !== null ? (
          <img
            src={typeof state.image_base64 === 'string' ? state.image_base64 : ''}
            alt="Banner"
            className="h-[442px] min-w-[382px] rounded-lg object-cover"
          />
        ) : (
          <div
            className="relative flex h-[442px] w-[382px] flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-white p-4 text-center shadow-sm"
            onClick={() => document.getElementById('file_upload')?.click()}
          >
            {state?.name_file_userimg.length >= 1 ? (
              <label
                // className="flex w-full items-center justify-between gap-2 rounded-md bg-white px-4 py-2 shadow-sm"
                className="text-black"
              >
                {state?.name_file_userimg}
                <button
                  className="size-4 rounded-full"
                  onClick={() =>
                    setState({ ...state, image_base64: null, name_file_userimg: '' })
                  }
                >
                  X
                </button>
              </label>
            ) : (
              <>
                <button
                  className="flex flex-col items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('fileUpload')?.click()
                  }}
                >
                  <IconUpload color="#A0AEC0" size={60} />
                  <label
                    htmlFor="fileUpload"
                    className="text-sm font-semibold text-[#A0AEC0]"
                  >
                    Faça o upload do banner em PNG Tamanho sugerido 370 x 445 Pixels
                  </label>
                </button>
              </>
            )}
            <Input
              id="fileUpload"
              type="file"
              accept=".png,.jpeg,.jpg,.svg,.webp,.gif"
              className="hidden"
              onChange={(e) => {
                e.preventDefault()
                const file = e.target.files ? e.target.files[0] : null
                if (file) {
                  const reader = new FileReader()
                  reader.onload = (e) => {
                    const target = e.target as FileReader
                    setState({
                      ...state,
                      image_base64: target.result as string,
                      name_file_userimg: file?.name ?? ''
                    })
                  }
                  reader.readAsDataURL(file)
                }
              }}
            />
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
              value={state.prize}
              onChange={(e) =>
                setState({
                  ...state,
                  prize: e.target.value
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
              value={state.second_prize}
              onChange={(e) =>
                setState({
                  ...state,
                  second_prize: e.target.value
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
              value={state.third_prize}
              onChange={(e) =>
                setState({
                  ...state,
                  third_prize: e.target.value
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
