import IconDiscount from '@/components/icons/Discount'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import React from 'react'

const ConfigPromotions: React.FC = () => {
  const [selectOption, setSelectOption] = React.useState('')
  const [input1, setInput1] = React.useState('')
  const [input2, setInput2] = React.useState('')
  const [input3, setInput3] = React.useState('')
  const [input4, setInput4] = React.useState('')
  const [input5, setInput5] = React.useState('')
  const [input6, setInput6] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectOption || !input1 || !input2) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    console.log('Formulário enviado com sucesso')
  }

  return (
    <Container>
      <div className="flex h-dvh flex-col gap-2 rounded-xl border-2 border-[#A0AEC0] p-6 text-base">
        <h4 className="mb-4 flex items-center text-xl font-semibold text-[#255E17]">
          <IconDiscount className="mr-2 size-7" />
          Promoções
        </h4>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-sm font-normal text-black"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="selectOption" className="font-bold">
              Selecione a Campanha que quer incluir a promoção
            </label>
            <Select onValueChange={setSelectOption} value={selectOption}>
              <SelectTrigger className="bg-white shadow-sm">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Opção 1</SelectItem>
                <SelectItem value="option2">Opção 2</SelectItem>
                <SelectItem value="option3">Opção 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="input1" className="font-bold">
              Nome da Promoção*
            </label>
            <Input
              id="input1"
              type="text"
              placeholder="Input 1"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              className="bg-white shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="input2" className="font-bold">
              Descrição da Promoção*
            </label>
            <Input
              id="input2"
              type="text"
              placeholder="Input 2"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              className="bg-white shadow-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="input3" className="font-bold">
                Data de Início da Promoção
              </label>
              <Input
                id="input3"
                type="text"
                placeholder="Input 3"
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
                className="bg-white shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="input4" className="font-bold">
                Data do final da Promoção
              </label>
              <Input
                id="input4"
                type="text"
                placeholder="Input 4"
                value={input4}
                onChange={(e) => setInput4(e.target.value)}
                className="bg-white shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="input5" className="font-bold">
                Quantidade Mínima de Números para Desconto
              </label>
              <Input
                id="input5"
                type="text"
                placeholder="Input 5"
                value={input5}
                onChange={(e) => setInput5(e.target.value)}
                className="bg-white shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="input6" className="font-bold">
                Preço Promocional por Número
              </label>
              <Input
                id="input6"
                type="text"
                placeholder="Input 6"
                value={input6}
                onChange={(e) => setInput6(e.target.value)}
                className="bg-white shadow-sm"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="h-10 w-32 rounded-md bg-gradient-to-r from-[#FEEA8C] to-[#F9D94B] px-4 py-2 font-semibold text-slate-950 transition-all duration-300 hover:text-white"
          >
            Avançar
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default ConfigPromotions
