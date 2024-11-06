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
import { useCampaignsInfo } from '@/hooks/useCampaings'
import React, { useState } from 'react'

interface PromotionState {
  id_campaign: string
  name: string
  description: string
  start_date: string
  end_date: string
  min_quotas: number
  promotional_price: number
}

const ConfigPromotions: React.FC = () => {
  const { data: campaigns, isLoading, isError } = useCampaignsInfo()
  const [state, setState] = useState<PromotionState>({
    id_campaign: '',
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    min_quotas: 0,
    promotional_price: 0
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { id_campaign, name, description } = state
    if (!id_campaign || !name || !description) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }
    console.log('Formulário enviado com sucesso')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setState((prevState: PromotionState) => ({
      ...prevState,
      [id]: value
    }))
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
            <label htmlFor="id_campaign" className="font-bold">
              Selecione a Campanha*
            </label>
            <Select
              defaultValue={state.id_campaign}
              onValueChange={(e) =>
                setState({
                  ...state,
                  id_campaign: e
                })
              }
            >
              <SelectTrigger className="bg-white shadow-sm">
                <SelectValue placeholder="Selecione uma campanha" />
              </SelectTrigger>
              <SelectContent>
                {isLoading ? (
                  <SelectItem value="loading">Carregando...</SelectItem>
                ) : isError ? (
                  <SelectItem value="error">Erro ao carregar campanhas</SelectItem>
                ) : (campaigns ?? []).length === 0 ? (
                  <SelectItem value="no-data">
                    Nenhuma campanha disponível
                  </SelectItem>
                ) : (
                  (campaigns ?? [])
                    //.filter((campaign) => campaign.status === 'active')
                    .map((campaign) => (
                      <SelectItem key={campaign.id} value={campaign.id}>
                        {campaign.name}
                      </SelectItem>
                    ))
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold">
              Nome da Promoção*
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Nome da Promoção"
              value={state.name}
              onChange={handleChange}
              className="bg-white shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="font-bold">
              Descrição da Promoção*
            </label>
            <Input
              id="description"
              type="text"
              placeholder="Descrição da Promoção"
              value={state.description}
              onChange={handleChange}
              className="bg-white shadow-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="start_date" className="font-bold">
                Data de Início da Promoção
              </label>
              <Input
                id="start_date"
                type="date"
                placeholder="Data de Início"
                value={state.start_date}
                onChange={handleChange}
                className="bg-white shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="end_date" className="font-bold">
                Data do Final da Promoção
              </label>
              <Input
                id="end_date"
                type="date"
                placeholder="Data do Final"
                value={state.end_date}
                onChange={handleChange}
                className="bg-white shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="min_quotas" className="font-bold">
                Quantidade Mínima de Números para Desconto
              </label>
              <Input
                id="min_quotas"
                type="number"
                placeholder="Quantidade Mínima"
                value={state.min_quotas}
                onChange={handleChange}
                className="bg-white shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="promotional_price" className="font-bold">
                Preço Promocional por Número
              </label>
              <Input
                id="promotional_price"
                type="number"
                placeholder="Preço Promocional"
                value={state.promotional_price}
                onChange={handleChange}
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
