import IconDiscount from '@/components/icons/Discount'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { toast } from '@/components/ui/use-toast'
import { useCampaignsInfo } from '@/hooks/useCampaings'
import { useCreatePromotion } from '@/hooks/usePromotions'
import { ErrorResponse } from '@/types/ErrorResponse'
import { PromotionStateType } from '@/types/PromotionType'
import { LoaderCircle } from 'lucide-react'
import React, { ChangeEvent, useEffect, useState } from 'react'

const ConfigPromotions: React.FC = () => {
  const { data: campaigns, isLoading, isError } = useCampaignsInfo()
  const { mutate: createCampaigns, isLoading: loadCreate } = useCreatePromotion()
  const [state, setState] = useState<PromotionStateType>({
    id_campaign: 0,
    id: 0,
    campaign_name: '',
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    min_quotas: 0,
    promotional_price: 0
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createCampaigns(state, {
      onSuccess: (res: any) => {
        console.log(res)
        // setStateCampaigns((prev) => ({ ...prev, step: 5 }))
      },
      onError: (error: unknown) => {
        const { response } = error as ErrorResponse
        toast({
          variant: 'destructive',
          title: response.data.error,
          description: 'repita o processo.'
        })
      }
    })
    console.log('Formulário enviado com sucesso')
  }

  useEffect(() => {
    console.log(state)
  }, [state])
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
            <label htmlFor="campaign_select" className="font-bold">
              Selecione a Campanha*
            </label>
            <Select
              value={state.campaign_name}
              onValueChange={(e) => {
                setState({
                  ...state,
                  campaign_name: e
                })
              }}
            >
              <SelectTrigger className="bg-white px-4 py-2 shadow-sm">
                <SelectValue placeholder={'Selecione'}>
                  {campaigns?.find((c) => c.id === state.id_campaign)?.description}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {isLoading ? (
                    <SelectItem value="loading">Carregando...</SelectItem>
                  ) : isError ? (
                    <SelectItem value="error">Erro ao carregar campanhas</SelectItem>
                  ) : (campaigns ?? []).length === 0 ? (
                    <SelectItem value="no-data">
                      Nenhuma campanha disponível
                    </SelectItem>
                  ) : (
                    (campaigns ?? []).map((campaign, index) => (
                      <SelectItem key={index} value={campaign.id.toString()}>
                        {campaign.name}
                      </SelectItem>
                    ))
                  )}
                </SelectGroup>
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
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setState({ ...state, name: e.target.value })
              }
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
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setState({ ...state, description: e.target.value })
              }
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setState({ ...state, start_date: e.target.value })
                }
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setState({ ...state, end_date: e.target.value })
                }
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setState({ ...state, min_quotas: Number(e.target.value) })
                }
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setState({ ...state, promotional_price: Number(e.target.value) })
                }
                className="bg-white shadow-sm"
              />
            </div>
          </div>

          <Button
            className="h-10 w-32 rounded-md bg-gradient-to-r from-[#FEEA8C] to-[#F9D94B] px-4 py-2 font-semibold text-slate-950 transition-all duration-300 hover:text-white"
            type="submit"
            disabled={Object.values(state).every((v) => !v)}
          >
            {loadCreate ? (
              <LoaderCircle className="h-10 w-10 animate-spin text-white transition-transform" />
            ) : (
              'Avançar'
            )}
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default ConfigPromotions
