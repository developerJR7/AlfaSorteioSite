import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import IconLeafClover from '@/components/icons/LeaftClover'
import { ChevronDown, LoaderCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useQuery } from 'react-query'
import { api } from '@/api/Api'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem
} from '@/components/ui/command'
import ImageHomemAlfaSorteios from '@/assets/homem_alfa_sorteios.png'
import { useRegister } from '@/hooks/useAuth'
import { toast } from '@/components/ui/use-toast'

interface DDIProps {
  pais: string
  img: string
  ddi: number
  continente: string
}

const Register: React.FC = () => {
  const { mutate: register, isLoading: loadingRegister } = useRegister()
  const [open, setOpen] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)
  const [stepRegister, setStepRegister] = useState<{
    name: string
    email: string
    pwd: string
    phone: string
  }>({ name: '', email: '', pwd: '', phone: '' })

  const cardStyle = {
    backgroundImage: `url('${ImageHomemAlfaSorteios}')`,
    backgroundColor: 'white',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '30%',
    backgroundPosition: '12% bottom'
  }

  const isFormValid = Object.entries(stepRegister).every(([, value]) => value !== '')
  //useEffect(() => console.log(checked, stepRegister), [checked, stepRegister])

  const { data: DDI, isLoading } = useQuery<DDIProps[]>('list-DDI', async () => {
    const res = await api.get('https://api-paises.pages.dev/paises.json')
    return res.data
  })

  const handleRegister = async () => {
    register(
      { ...stepRegister },
      {
        onSuccess: () => {
          toast({
            variant: 'success',
            title: 'Registro efetuado com sucesso!'
          })
        },
        onError: (error) => {
          console.error(error)
          toast({
            variant: 'destructive',
            title: 'Erro ao registrar',
            description: 'Por favor, tente novamente.'
          })
        }
      }
    )
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-x-hidden p-14">
      <Card className="h-5/6 max-h-[453px] w-9/12 bg-white" style={cardStyle}>
        <CardTitle className="flex justify-center py-6">
          <IconLeafClover className="w-24 fill-[#255E17]" />
        </CardTitle>
        <CardContent className="flex justify-between pb-0">
          <div className="flex w-6/12 flex-col">
            <p className="font-Helvetica text-xl font-bold text-[#255E17]">
              Registre-se
            </p>
            <p className="font-Helvetica text-xs font-normal text-black">
              Preencha os campos para registrar-se
            </p>
          </div>
          <form className="flex w-6/12 flex-col gap-1 text-xs">
            <Input
              type="name"
              placeholder="Nome completo"
              value={stepRegister.name}
              onChange={(e) =>
                setStepRegister((prevState) => ({
                  ...prevState,
                  name: e.target.value
                }))
              }
              className="text-xs"
            />
            <Input
              type="email"
              placeholder="E-mail"
              className="text-xs"
              value={stepRegister.email}
              onChange={(e) =>
                setStepRegister((prevState) => ({
                  ...prevState,
                  email: e.target.value
                }))
              }
            />
            <Input
              type="password"
              placeholder="Senha"
              className="text-xs"
              value={stepRegister.pwd}
              onChange={(e) =>
                setStepRegister((prevState) => ({
                  ...prevState,
                  pwd: e.target.value
                }))
              }
            />
            <div className="flex items-center gap-1">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    role="combobox"
                    aria-expanded={open}
                    variant={'outline'}
                    className="flex w-2/12 items-center justify-between gap-2 px-2"
                  >
                    {isLoading && DDI === undefined
                      ? '...'
                      : DDI &&
                        Object.values(DDI)
                          .filter(({ pais }) => pais === 'Brasil')
                          .map(({ img, pais }) => (
                            <>
                              <img
                                src={img}
                                alt={`bandeira do país ${pais}`}
                                className="w-8 object-contain"
                              />
                              <ChevronDown className="w-8 text-gray-400" />
                            </>
                          ))}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Command>
                    <CommandInput placeholder="Pesquise pelo DDI" />
                    <CommandList>
                      <CommandEmpty>Nenhum DDI listado.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem></CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <Input
                type="tel"
                placeholder="(00) 0 0000-0000"
                className="text-xs"
                value={stepRegister.phone}
                onChange={(e) =>
                  setStepRegister((prevState) => ({
                    ...prevState,
                    phone: e.target.value
                  }))
                }
              />
            </div>
            <div className="mt-4 flex gap-2">
              <input
                disabled={!isFormValid}
                type="checkbox"
                id="terms"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
              <label
                className={cn('text-[10px]', !isFormValid && 'text-slate-400')}
                htmlFor="terms"
              >
                Ao se registrar, você aceita os{' '}
                <span className="font-semibold">Termos de Uso</span> e nossa{' '}
                <span className="font-semibold">Política de Privacidade</span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <Link to={'/login'}> {`< Fazer Login `}</Link>
              <Button
                className="rounded-lg bg-gradient-to-r from-[#FEEA8C] to-[#F9D94B] px-4 py-2  font-semibold text-[#3D3D3D] transition-all duration-300 hover:text-white"
                disabled={!checked || loadingRegister}
                onClick={handleRegister}
              >
                {loadingRegister ? (
                  <LoaderCircle className="h-10 w-10 animate-spin text-white transition-transform" />
                ) : (
                  'Registrar-se'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Register
