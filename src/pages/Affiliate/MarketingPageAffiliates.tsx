import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'

interface MarketingPageAffiliatesProps {
  state: any
  setState: React.Dispatch<React.SetStateAction<any>>
}

const MarketingPageAffiliates: React.FC<MarketingPageAffiliatesProps> = ({}) => {
  const [driveUrl, setDriveUrl] = useState<string>('')

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDriveUrl(event.target.value)
  }

  const openDriveLink = () => {
    if (driveUrl) {
      window.open(driveUrl, '_blank')
    }
  }

  return (
    <div>
      <h2 className="gap-1 text-lg font-bold text-black">Comissão em Camadas</h2>
      <p className="text-gray-700">
        Indique o Drive ou local de localização das imagens e vídeos promocionais que
        serão disponibilizados para os afiliados utilizarem na divulgação dos
        sorteios. Certifique-se de criar materiais atrativos e de fácil
        compartilhamento para maximizar o alcance das campanhas.
      </p>
      <Separator className="border-1 mb-2 w-full gap-1 border-[#A0AEC0]" />

      <h2 className="gap-1 text-lg font-bold text-black">URL do Google Drive</h2>
      <div className="mt-2 flex gap-2">
        <input
          type="url"
          value={driveUrl}
          onChange={handleUrlChange}
          placeholder="Insira o link do Drive..."
          className="flex-grow rounded-lg border border-gray-300 p-2 text-gray-700"
        />
        <button
          onClick={openDriveLink}
          disabled={!driveUrl}
          className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 disabled:bg-gray-300"
        >
          Acessar
        </button>
      </div>
    </div>
  )
}

export default MarketingPageAffiliates
