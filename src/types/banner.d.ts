export type CreateCampaigns = {
  step: number
  name: string
  chamada: string
  telefone: string
  email: string
  description: string
  quantidade: string
  valor: string
  minimo: string
  maximo: string
  tempo: string
  local: string
  upload: string | ArrayBuffer | null
  banner: string | ArrayBuffer | null
  regras: boolean
  diaDoSorteio: boolean
  promover: string
  firstPrize: string
  secondPrize: string
  thirdPrize: string
}
