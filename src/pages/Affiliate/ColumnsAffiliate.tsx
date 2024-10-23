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
import { ColumnDef } from '@tanstack/react-table'
import { Bolt } from 'lucide-react'

export interface AffiliatesListProps {
  name: string
  linkedCampaign: string
  totalValue: number
}

export const ColumnsAffiliates: ColumnDef<AffiliatesListProps>[] = [
  {
    accessorKey: 'name',
    header: () => 'Nome do Afiliado',
    cell: ({ row }) => {
      const name = row.getValue<string>('name')
      return <div className="text-xs">{name}</div>
    }
  },
  {
    accessorKey: 'linkedCampaign',
    header: () => 'Campanha Vinculada',
    cell: ({ row }) => {
      const linkedCampaign = row.getValue<string>('linkedCampaign')
      return <div className="text-xs">{linkedCampaign}</div>
    }
  },
  {
    accessorKey: 'totalValue',
    header: () => 'Excluir Afiliado',
    cell: ({ row }) => {
      const totalValue = row.getValue<number>('totalValue')
      return <div className="text-xs">R$ {totalValue}</div>
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
                    <div className="rounded-lg p-2 text-colorPrimary-500 transition-all duration-300 hover:text-colorPrimary-500/80">
                      <Bolt className="size-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="flex flex-col items-start">
                    <button className="p-2">Editar</button>
                    <button className="p-2">Compartilhar</button>
                    <button className="p-2">Excluir Afiliado</button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TooltipTrigger>
              <TooltipContent>
                <p className="rounded-md p-1 text-sm font-normal text-white">
                  Ações do afiliado
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )
    }
  }
]
