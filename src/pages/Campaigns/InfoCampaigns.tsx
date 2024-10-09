import { api } from '@/api/Api'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import { CreateCampaigns } from '@/types/banner'
import { ChevronDown } from 'lucide-react'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

interface DDIProps {
  pais: string
  img: string
  ddi: number
  continente: string
}
interface infoCampaignsProps {
  state: CreateCampaigns
  setState: Dispatch<SetStateAction<CreateCampaigns>>
}

const InfoCampaigns: React.FC<infoCampaignsProps> = ({ state, setState }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedDDI, setSelectedDDI] = useState<DDIProps | null>(null)

  const { data: DDI, isLoading } = useQuery<DDIProps[]>('list-DDI', async () => {
    const res = await api.get('/user/country_codes')
    return res.data
  })

  useEffect(() => {
    if (DDI && !selectedDDI) {
      const brazilDDI = DDI.find(({ pais }) => pais === 'Brasil')
      if (brazilDDI) {
        setSelectedDDI(brazilDDI)
      }
    }
  }, [DDI])

  return (
    <div className="flex flex-col gap-4 text-sm font-normal text-black">
      <div className="flex flex-col gap-1">
        <label className="font-bold">Nome da Campanha*</label>
        <Input
          type="text"
          placeholder="Nome da Campanha*"
          value={state.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setState({ ...state, name: e.target.value })
          }
          className="bg-white shadow-sm"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Chamada da Campanha*</label>
        <Input
          type="text"
          placeholder="Crie uma chamada rápida atrativa para sua campanha"
          className="bg-white shadow-sm"
          value={state.chamada}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setState({
              ...state,
              chamada: e.target.value
            })
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-1">
          <label className="font-bold">Telefone de Suporte (com whatsapp)*</label>
          <div className="flex items-center gap-1">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  role="combobox"
                  aria-expanded={open}
                  variant={'outline'}
                  className="flex w-2/12 items-center justify-between gap-2 px-2"
                >
                  {isLoading && !selectedDDI
                    ? '...'
                    : selectedDDI && (
                        <>
                          <img
                            src={selectedDDI.img}
                            alt={`bandeira do país ${selectedDDI.pais}`}
                            className="w-8 object-contain"
                          />
                          <ChevronDown className="w-8 text-gray-400" />
                        </>
                      )}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Command>
                  <CommandInput
                    className="bg-white shadow-sm"
                    placeholder="Pesquise pelo DDI"
                  />
                  <CommandList>
                    <CommandEmpty>Nenhum DDI listado.</CommandEmpty>
                    <CommandGroup>
                      {DDI &&
                        DDI.map((ddiItem, number) => (
                          <CommandItem
                            key={ddiItem.ddi + number}
                            onSelect={() => setSelectedDDI(ddiItem)}
                          >
                            <img
                              src={ddiItem.img}
                              alt={`bandeira do país ${ddiItem.pais}`}
                              className="w-8 object-contain"
                            />
                            <span className="ml-2">{ddiItem.pais}</span>
                          </CommandItem>
                        ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Input
              type="number"
              placeholder="(00) 0 0000-0000"
              className="bg-white shadow-sm"
              value={state.telefone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setState({
                  ...state,
                  telefone: e.target.value
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-bold">E-mail de suporte*</label>
          <Input
            type="email"
            placeholder="E-mail de suporte*"
            value={state.email}
            onChange={(e) =>
              setState({
                ...state,
                email: e.target.value
              })
            }
            className="bg-white shadow-sm"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold">Descrição da Campanha*</label>
        <Textarea
          placeholder="As cotas são liberadas após a confirmação do pagamento. A Data do sorteio será divulgada quando obter 70% das cotas vendidas."
          value={state.description}
          onChange={(e) =>
            setState({
              ...state,
              description: e.target.value
            })
          }
          className="h-40 bg-white shadow-sm"
        />
      </div>
    </div>
  )
}

export default InfoCampaigns
