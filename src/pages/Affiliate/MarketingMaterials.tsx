import React, { useState } from 'react'
import { CreateAffiliateState } from '@/hooks/affiliateApi'
import { Separator } from '@/components/ui/separator'
import IconUpload from '@/components/icons/Upload'

interface MarketingMaterialsProps {
  state: CreateAffiliateState
  setState: React.Dispatch<React.SetStateAction<CreateAffiliateState>>
}

const MarketingMaterials: React.FC<MarketingMaterialsProps> = ({}) => {
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
      const newPreviews = [...imagePreviews]
      newPreviews[index] = imageUrl
      setImagePreviews(newPreviews)
    }
  }

  const handleVideoUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      const videoUrl = URL.createObjectURL(file)
      const newPreviews = [...videoPreviews]
      newPreviews[index] = videoUrl
      setVideoPreviews(newPreviews)
    }
  }

  return (
    <div>
      <h2 className="gap-1 text-lg font-bold text-black">Comissão em Camadas</h2>
      <p className="text-gray-700">
        Adicionar imagens e vídeos promocionais que serão disponibilizados para os
        afiliados utilizarem na divulgação dos sorteios. Certifique-se de incluir
        materiais atrativos e de fácil compartilhamento para maximizar o alcance das
        campanhas.
      </p>
      <Separator className="border-1 mb-2 w-full gap-1 border-[#A0AEC0]" />

      <h2 className="gap-1 text-lg font-bold text-[#255E17]">
        Imagens Promocionais
      </h2>
      <div className="mt-2 grid grid-cols-4 gap-4">
        {imagePreviews.map((preview, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex h-[105px] w-[202px] items-center justify-center rounded-t-lg border border-gray-300 bg-gray-100">
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

      <h2 className="gap-1 text-lg font-bold text-[#255E17]">Vídeos Promocionais</h2>
      <div className="mt-2 grid grid-cols-4 gap-4">
        {videoPreviews.map((preview, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex h-[105px] w-[202px] items-center justify-center rounded-t-lg border border-gray-300 bg-gray-100">
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

export default MarketingMaterials
