import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { AffiliateStateType } from '@/types/AffiliateType'

interface AffiliatesSupportProps {
  state: AffiliateStateType
  setState: React.Dispatch<React.SetStateAction<AffiliateStateType>>
}

const SupportPageAffiliates: React.FC<AffiliatesSupportProps> = ({
  state,
  setState
}) => {
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   setState((prev) => ({ ...prev, [name]: value }))
  // }

  return (
    <div>
      <p className="text-lg font-bold text-black">Canal de Suporte aos Afiliados</p>
      <p className="mt-2 text-gray-700">
        Configure os canais de atendimento para oferecer suporte aos afiliados e
        garanta que tenham acesso às informações e ajuda necessárias para promover
        suas vendas de forma eficaz.
      </p>
      <Separator className="border-1 mb-2 w-full gap-1 border-[#A0AEC0]" />
      <div className="flex flex-col gap-4">
        <label className="font-bold text-black">Suporte via e-mail</label>
        <Input
          type="text"
          placeholder="Suporte via e-mail"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          className="w-full bg-white shadow-sm"
        />
        <label className="font-bold text-black">Suporte via WhatsApp</label>
        <Input
          type="email"
          placeholder="Suporte via WhatsApp"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          className="w-full bg-white shadow-sm"
        />
        <label className="font-bold text-black">Suporte via Telegram</label>
        <Input
          type="tel"
          placeholder="Suporte via Telegram"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          className="w-full bg-white shadow-sm"
        />
      </div>
    </div>
  )
}

export default SupportPageAffiliates
