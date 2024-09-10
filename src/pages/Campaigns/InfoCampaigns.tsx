import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { ChevronDown } from 'lucide-react'
import { useQuery } from 'react-query'
import { api } from '@/api/Api'
import { Textarea } from '@/components/ui/textarea'

interface DDIProps {
  pais: string
  img: string
  ddi: number
  continente: string
}

const InfoCampaigns: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedDDI, setSelectedDDI] = useState<DDIProps | null>(null)
  const [campaignInfo, setCampaignInfo] = useState<{
    name: string
    headline: string
    supportPhone: string
    supportEmail: string
    description: string
  }>({
    name: '',
    headline: '',
    supportPhone: '',
    supportEmail: '',
    description: ''
  })

  const isFormValid = Object.entries(campaignInfo).every(([, value]) => value !== '')

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

  const handleSave = async () => {}

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-black">Nome da Campanha*</label>
        <Input
          type="text"
          placeholder="Nome da Campanha*"
          value={campaignInfo.name}
          onChange={(e) =>
            setCampaignInfo((prevState) => ({
              ...prevState,
              name: e.target.value
            }))
          }
          className="bg-white text-xs shadow-sm"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-black">Chamada da Campanha*</label>
        <Input
          type="text"
          placeholder="Crie uma chamada rápida atrativa para sua campanha"
          value={campaignInfo.headline}
          onChange={(e) =>
            setCampaignInfo((prevState) => ({
              ...prevState,
              headline: e.target.value
            }))
          }
          className="bg-white text-xs shadow-sm"
        />
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-black">
            Telefone de Suporte (com whatsapp)*
          </label>
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
                    className="bg-white text-xs shadow-sm"
                    placeholder="Pesquise pelo DDI"
                  />
                  <CommandList>
                    <CommandEmpty>Nenhum DDI listado.</CommandEmpty>
                    <CommandGroup>
                      {DDI &&
                        DDI.map((ddiItem) => (
                          <CommandItem
                            key={ddiItem.ddi}
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
              type="tel"
              placeholder="(00) 0 0000-0000"
              className="bg-white text-xs shadow-sm"
              value={campaignInfo.supportPhone}
              onChange={(e) =>
                setCampaignInfo((prevState) => ({
                  ...prevState,
                  supportPhone: e.target.value
                }))
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-black">E-mail de suporte*</label>
          <Input
            type="email"
            placeholder="E-mail de suporte*"
            value={campaignInfo.supportEmail}
            onChange={(e) =>
              setCampaignInfo((prevState) => ({
                ...prevState,
                supportEmail: e.target.value
              }))
            }
            className="bg-white text-xs shadow-sm"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-black">
          Descrição da Campanha*
        </label>
        <Textarea
          placeholder="As cotas são liberadas após a confirmação do pagamento. A Data do sorteio será divulgada quando obter 70% das cotas vendidas."
          value={campaignInfo.description}
          onChange={(e) =>
            setCampaignInfo((prevState) => ({
              ...prevState,
              description: e.target.value
            }))
          }
          className="h-40 bg-white text-xs shadow-sm"
        />
      </div>
    </div>
  )
}

export default InfoCampaigns
