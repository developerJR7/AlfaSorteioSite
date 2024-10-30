import { PromotionStatetype } from '@/types/promotions'
import { ColumnDef } from '@tanstack/react-table'

export const ColumnsPromotions: ColumnDef<PromotionStatetype>[] = [
  {
    accessorKey: 'name',
    header: () => 'Nome da Promoção',
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
    header: () => 'Excluir Promoção',
    cell: ({ row }) => {
      const totalValue = row.getValue<number>('totalValue')
      return <div className="text-xs">R$ {totalValue}</div>
    }
  }
]
