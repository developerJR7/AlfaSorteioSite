import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { campaignsType } from '@/types/campaings'
import { ColumnDef } from '@tanstack/react-table'
import { Bolt } from 'lucide-react'

export const ColumnsCampaigns: ColumnDef<campaignsType>[] = [
  {
    accessorKey: 'name',
    header: () => 'Nome da Campanha',
    cell: ({ row }) => {
      const name = row.getValue<string>('name')
      return <div className="text-xs capitalize">{name}</div>
    }
  },
  {
    accessorKey: 'performance',
    header: () => 'Performance',
    cell: ({ row }) => {
      const performance = row.getValue<number>('performance')
      return <div className="text-xs">{performance ? `${performance} %` : '-'}</div>
    }
  },
  {
    accessorKey: 'totalValue',
    header: () => 'Valor Arrecadado',
    cell: ({ row }) => {
      const totalValue = row.getValue<number>('totalValue')
      return <div className="text-xs">{totalValue ? `R$ ${totalValue}` : '-'}</div>
    }
  },
  {
    accessorKey: 'image',
    header: () => 'Sortear',
    cell: ({ row }) => {
      return (
        <div className="text-xs">
          <img
            className="size-12 object-contain"
            src={row.getValue('image')}
            alt="imagem de sorteio"
          />
        </div>
      )
    }
  },
  {
    accessorKey: '#',
    header: () => '',
    cell: () => {
      return (
        <div className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="rounded-lg p-2 text-colorPrimary-500  transition-all duration-300 hover:text-colorPrimary-500/80">
                      <Bolt className="size-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="flex flex-col items-start">
                    <button className="p-2">Editar</button>
                    <button className="p-2">Compartilhar</button>
                    <button className="p-2">Sortear</button>
                    <button className="p-2">Gerenciar promoções</button>
                    <button className="p-2">Indicar vencedores</button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TooltipTrigger>
              <TooltipContent>
                <p className="rounded-md p-1 text-sm font-normal text-white">
                  Ações de campanha
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )
    }
  }
]
