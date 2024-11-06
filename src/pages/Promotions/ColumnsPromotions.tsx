import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { PromotionStatetype } from '@/types/PromotionType'
import { ColumnDef } from '@tanstack/react-table'
import { Trash2 } from 'lucide-react'

export const ColumnsPromotions: ColumnDef<PromotionStatetype>[] = [
  {
    accessorKey: 'name',
    header: () => 'Nome da Promoção',
    cell: ({ row }) => {
      const name = row.getValue<string>('name')
      return <div className="text-xs capitalize">{name}</div>
    }
  },
  {
    accessorKey: 'id_campaign',
    header: () => 'Campanha Vinculada',
    cell: ({ row }) => {
      const linkedCampaign = row.getValue<string>('linkedCampaign')
      return <div className="text-xs">{linkedCampaign}</div>
    }
  },
  {
    accessorKey: '#',
    header: () => 'Excluir Promoção',
    cell: () => {
      return (
        <div className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Trash2 className="size-5 text-colorPrimary-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="rounded-md p-1 text-sm font-normal text-white">
                  Excluir promoção
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )
    }
  }
]
