import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'

interface PaymentsPageAffiliatesProps {
  state: {
    name: string
    email: string
    telefone: string
    address: string
  }
  setState: React.Dispatch<
    React.SetStateAction<{
      name: string
      email: string
      telefone: string
      address: string
      step: number
    }>
  >
}

const PaymentsPageAffiliates: React.FC<PaymentsPageAffiliatesProps> = ({
  state,
  setState
}) => {
  const [selectOption, setSelectOption] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setSelectOption(value)
  }

  console.log(state)

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="selectOption" className="font-bold text-black">
        Selecione a Campanha que quer incluir a promoção
      </label>
      <Select onValueChange={handleSelectChange} value={selectOption}>
        <SelectTrigger className="bg-white shadow-sm">
          <SelectValue placeholder="Selecione uma opção" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Opção 1</SelectItem>
          <SelectItem value="option2">Opção 2</SelectItem>
          <SelectItem value="option3">Opção 3</SelectItem>
        </SelectContent>
      </Select>
      <Separator className="mb-2 w-full border-l border-[#A0AEC0]" />

      <h2 className="text-lg font-bold text-black">Comissão em Camadas</h2>
      <p className="text-gray-700">
        O sistema de comissão em camadas permite que os afiliados ganhem não apenas
        com as suas próprias vendas, mas também recebam comissões pelas vendas
        realizadas pelos afiliados que eles indicarem diretamente. Cada valor de
        comissionamento definido para cada camada representa o que o afiliado direto
        irá ganhar sobre as vendas dos indicados por ele. Você pode configurar até 3
        camadas de comissionamento.
      </p>

      <div className="flex gap-4">
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="camada1" className="text-sm font-bold text-black">
            Camada 1: Afiliado Direto
          </label>
          <Input
            id="camada1"
            name="camada1"
            onChange={handleChange}
            placeholder="Insira o afiliado direto"
            className="w-full bg-white px-4 py-2 shadow-sm"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="camada2" className="text-sm font-bold text-black">
            Camada 2: Indicado do afiliado (opcional)
          </label>
          <Input
            id="camada2"
            name="camada2"
            onChange={handleChange}
            placeholder="Insira o indicado"
            className="w-full bg-white px-4 py-2 shadow-sm"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="camada3" className="text-sm font-bold text-black">
            Camada 3: Indicado do Indicado (opcional)
          </label>
          <Input
            id="camada3"
            name="camada3"
            onChange={handleChange}
            placeholder="Insira o indicado do indicado"
            className="w-full bg-white px-4 py-2 shadow-sm"
          />
        </div>
      </div>
      <Separator className="border-1 mb-2 w-full border-[#A0AEC0]" />
      <h2 className="text-lg font-bold text-black">Comissão em Camadas</h2>
      <p className="text-gray-700">
        Ofereça bônus adicionais aos afiliados que atingirem um determinado volume de
        vendas.
      </p>
      <div className="grid grid-cols-2 gap-8 text-sm font-normal text-black">
        <div className="flex flex-col gap-1">
          <label className="font-bold">Recompensa por meta (opcional)</label>
          <Input
            type="tel"
            placeholder="1 ~ 1.000.000.000"
            className="bg-white shadow-sm"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-bold">Valor da Cota</label>
          <Input
            type="email"
            placeholder="R$"
            className="bg-white text-xs shadow-sm"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}

export default PaymentsPageAffiliates
