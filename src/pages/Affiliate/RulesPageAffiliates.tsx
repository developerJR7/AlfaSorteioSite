import IconUpload from '@/components/icons/Upload'
import { Separator } from '@/components/ui/separator'
import { AffiliateStateType } from '@/types/AffiliateType'
import React, { useState } from 'react'

interface AffiliateRulesProps {
  state: AffiliateStateType
  setState: React.Dispatch<React.SetStateAction<AffiliateStateType>>
}

const RulesPageAffiliates: React.FC<AffiliateRulesProps> = ({}) => {
  const [imagePreviews, setImagePreviews] = useState<(string | null)[]>(
    Array(4).fill(null)
  )
  const [videoPreviews, setVideoPreviews] = useState<(string | null)[]>(
    Array(4).fill(null)
  )

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      const updatedPreviews = [...imagePreviews]
      updatedPreviews[index] = imageUrl
      setImagePreviews(updatedPreviews)
    }
  }

  const handleVideoUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      const videoUrl = URL.createObjectURL(file)
      const updatedPreviews = [...videoPreviews]
      updatedPreviews[index] = videoUrl
      setVideoPreviews(updatedPreviews)
    }
  }

  return (
    <div>
      <h2 className="text-black">
        Campanha Contemplada pelo Marketing de Afiliados
      </h2>
      <div className="mt-2 flex justify-between text-sm font-medium text-gray-700">
        <div>Comissão da Camada 1: XX%</div>
        <div>Comissão da Camada 2: X%</div>
        <div>Comissão da Camada 3: X%</div>
      </div>
      <div className="mt-2 text-sm font-medium text-gray-700">
        Recompensa por meta: R$ XX,XX por X números vendidos
      </div>
      <Separator className="border-1 my-4 w-full gap-1 border-[#A0AEC0]" />

      <h2 className="mt-4 gap-1 text-lg font-bold text-[#255E17]">
        Imagens Promocionais
      </h2>
      <div className="mt-2 grid grid-cols-4 gap-4">
        {imagePreviews.map((preview, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex h-[105px] w-[202px] items-center justify-center rounded-t-lg border border-gray-300 bg-gray-100 shadow-sm">
              {preview ? (
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="h-full w-full rounded-t-lg object-cover"
                />
              ) : (
                <label className="flex cursor-pointer items-center gap-1 text-sm font-medium text-gray-700">
                  <input
                    type="file"
                    onChange={(e) => handleImageUpload(e, index)}
                    className="hidden"
                  />
                  <IconUpload className="h-4 w-4 text-gray-500" />
                  Upload
                </label>
              )}
            </div>
          </div>
        ))}
      </div>

      <Separator className="border-1 my-4 w-full gap-1 border-[#A0AEC0]" />

      <h2 className="mt-4 gap-1 text-lg font-bold text-[#255E17]">
        Vídeos Promocionais
      </h2>
      <div className="mt-2 grid grid-cols-4 gap-4">
        {videoPreviews.map((preview, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex h-[105px] w-[202px] items-center justify-center rounded-t-lg border border-gray-300 bg-gray-100 shadow-sm">
              {preview ? (
                <video
                  src={preview}
                  controls
                  className="h-full w-full rounded-t-lg object-cover"
                />
              ) : (
                <label className="flex cursor-pointer items-center gap-1 text-sm font-medium text-gray-700">
                  <input
                    type="file"
                    onChange={(e) => handleVideoUpload(e, index)}
                    className="hidden"
                  />
                  <IconUpload className="h-4 w-4 text-gray-500" />
                  Upload
                </label>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RulesPageAffiliates
